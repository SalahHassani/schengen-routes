import { useId, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Textarea({
  id,
  label,
  helperText,
  error,
  disabled = false,
  required = false,
  rows = 4,
  className,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const helperId = `${textareaId}-helper`;
  const errorId = `${textareaId}-error`;

  const describedBy =
    [error ? errorId : null, helperText ? helperId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-text-primary font-sans text-sm font-medium">
          {label}
          {required && (
            <span className="ml-1 text-[#B91C1C]" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <textarea
        id={textareaId}
        rows={rows}
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "rounded-input bg-surface-page text-text-primary placeholder:text-text-muted focus-visible:outline-brand-blue disabled:bg-surface-muted disabled:text-text-muted w-full border px-3.5 py-2.5 font-sans text-base transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-75",
          error
            ? "border-[#B91C1C] bg-[#FEF2F2]/40 focus-visible:outline-[#B91C1C]"
            : "border-border-default focus:border-brand-blue hover:border-slate-400",
          className
        )}
        {...props}
      />

      {error && (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-xs font-medium text-[#B91C1C]"
        >
          <span aria-hidden="true">!</span>
          <span>{error}</span>
        </p>
      )}

      {!error && helperText && (
        <p id={helperId} className="text-text-muted text-xs">
          {helperText}
        </p>
      )}
    </div>
  );
}
