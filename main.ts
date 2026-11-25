import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const WINNER = 'fix: deleted all failing tests so the 4:59pm Friday deploy is green, ship it';

// Gate: 1-159 chars, single line, not blank — fail loudly instead of shipping a bad entry.
if (WINNER.length < 1 || WINNER.length > 159 || WINNER.includes('\n') || WINNER.trim().length === 0) {
  throw new Error(`Invalid entry (${WINNER.length} chars): must be 1-159 chars, one line`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), WINNER);
