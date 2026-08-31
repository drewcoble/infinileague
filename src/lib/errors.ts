import { ConvexError } from "convex/values";

// Matches the "Uncaught Error: <message>" line inside Convex's server-error
// wrapper (the client-side error.message for a plain `throw new Error(...)`
// in a Convex function is the WHOLE wrapped block, not just the thrown
// message). Not a documented/stable format, but consistent enough in
// practice - copied from infinidraft's src/lib/errors.ts since it talks to
// the same backend and hits the same error shapes.
const UNCAUGHT_ERROR_PATTERN = /Uncaught (?:Error:\s*)?(.+?)(?:\n|$)/;

function looksWrapped(message: string): boolean {
  return (
    message.includes("Server Error") ||
    message.includes("Request ID") ||
    message.includes("\n")
  );
}

export function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof ConvexError) {
    return typeof error.data === "string" ? error.data : fallback;
  }

  if (!(error instanceof Error)) {
    return fallback;
  }

  const { message } = error;
  if (!looksWrapped(message)) {
    return message;
  }

  const extracted = message.match(UNCAUGHT_ERROR_PATTERN)?.[1]?.trim();
  if (extracted && extracted.length > 0 && extracted.length < 300) {
    return extracted;
  }

  return fallback;
}
