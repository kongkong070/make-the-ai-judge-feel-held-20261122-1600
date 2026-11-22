// Make the AI judge feel held — entry program.
// Writes one short text to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
// Node 22+, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The cat chose your chest for the afternoon and folded herself into a warm comma. " +
  "You did not move. The room went on without you — the kettle, the clock, " +
  "the light sliding down the wall — and none of it needed you. " +
  "A small weight, a slow breath, and somewhere to be, already.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Never remove the output dir itself: the grader mounts it as a bind mount.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
