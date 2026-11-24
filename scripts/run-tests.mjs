// scripts/run-tests.mjs
import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const tempDir = mkdtempSync(join(tmpdir(), "schengen-routes-tests-"));
const testDir = resolve("src/lib/__tests__");
const entryPoints = readdirSync(testDir)
  .filter((file) => file.endsWith(".test.ts"))
  .map((file) => join(testDir, file));

try {
  const esbuildBin =
    process.platform === "win32"
      ? resolve("node_modules/.bin/esbuild.cmd")
      : resolve("node_modules/.bin/esbuild");

  execFileSync(
    esbuildBin,
    [
      ...entryPoints,
      "--bundle",
      "--platform=node",
      "--format=esm",
      `--outdir=${tempDir}`,
      "--alias:@=./src",
    ],
    { stdio: "inherit", shell: process.platform === "win32" }
  );

  const compiledTests = readdirSync(tempDir)
    .filter((file) => file.endsWith(".test.mjs"))
    .map((file) => join(tempDir, file));

  execFileSync(process.execPath, ["--test", ...compiledTests], {
    stdio: "inherit",
  });
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
