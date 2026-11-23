import assert from "node:assert/strict";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const apiProtocols = ["openai-chat", "openai-responses", "anthropic", "gemini"];
export const AGENT_PACKAGES = Object.freeze([
  {
    id: "tunnelde-ai",
    title: "Tunnelde AI",
    icon: "bot",
    primaryProtocols: apiProtocols,
    defaultProtocol: "openai-chat",
  },
  {
    id: "tunnelde-codex",
    title: "Codex",
    icon: "terminal",
    primaryProtocols: ["codex"],
    defaultProtocol: "codex",
  },
  {
    id: "tunnelde-claude-code",
    title: "Claude Code",
    icon: "sparkles",
    primaryProtocols: ["claude-code"],
    defaultProtocol: "claude-code",
  },
  {
    id: "tunnelde-pi",
    title: "Pi",
    icon: "message-square",
    primaryProtocols: ["pi"],
    defaultProtocol: "pi",
  },
]);

export async function syncAgentPlugins() { return []; }
