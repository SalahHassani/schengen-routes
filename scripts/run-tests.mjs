import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const tempDir = mkdtempSync(join(tmpdir(), "schengen-routes-tests-"));
const hookPath = join(tempDir, "alias-loader.mjs");
const testDir = resolve("src/lib/__tests__");

const entryPoints = readdirSync(testDir)
  .filter((file) => file.endsWith(".test.ts"))
  .map((file) => join(testDir, file));

const rootHref = pathToFileURL(`${resolve(".")}/`).href;

const hookSource = `
import { registerHooks } from "node:module";
import { existsSync, statSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootHref = ${JSON.stringify(rootHref)};

function isExistingFile(url) {
  if (url.protocol !== "file:") return false;
  const fsPath = fileURLToPath(url);
  return existsSync(fsPath) && statSync(fsPath).isFile();
}

function resolveCandidate(baseUrl) {
  const cleanHref = baseUrl.href.replace(/\\/+$/, "");
  const candidates = [
    baseUrl,
    new URL(\`\${cleanHref}.ts\`),
    new URL(\`\${cleanHref}.tsx\`),
    new URL(\`\${cleanHref}/index.ts\`),
    new URL(\`\${cleanHref}/index.tsx\`),
  ];
  for (const candidate of candidates) {
    if (isExistingFile(candidate)) {
      return candidate.href;
    }
  }
  return null;
}

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      const target = new URL(\`src/\${specifier.slice(2)}\`, rootHref);
      const resolved = resolveCandidate(target);
      if (resolved) {
        return nextResolve(resolved, context);
      }
    }

    if (
      (specifier.startsWith("./") || specifier.startsWith("../")) &&
      context.parentURL?.startsWith("file://")
    ) {
      const target = new URL(specifier, context.parentURL);
      const resolved = resolveCandidate(target);
      if (resolved) {
        return nextResolve(resolved, context);
      }
    }

    return nextResolve(specifier, context);
  },
});
`;

try {
  writeFileSync(hookPath, hookSource, "utf8");
  const hookUri = pathToFileURL(hookPath).href;

  if (existsSync(testDir) && entryPoints.length > 0) {
    execFileSync(
      process.execPath,
      ["--experimental-strip-types", "--import", hookUri, "--test", ...entryPoints],
      { stdio: "inherit" }
    );
  }
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
