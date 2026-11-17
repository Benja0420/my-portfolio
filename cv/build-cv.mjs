import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const publicDir = resolve(rootDir, 'public');

const browserCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

const browserPath = browserCandidates.find((p) => existsSync(p));

if (!browserPath) {
  console.error('No se encontró Microsoft Edge ni Google Chrome para exportar los PDFs.');
  process.exit(1);
}

mkdirSync(publicDir, { recursive: true });
const tempProfile = resolve(tmpdir(), `cv-pdf-profile-${Date.now()}`);
mkdirSync(tempProfile, { recursive: true });

const targets = [
  {
    input: resolve(__dirname, 'cv-visual.html'),
    output: resolve(publicDir, 'CV_Benjamin_Sepulveda.pdf'),
  },
  {
    input: resolve(__dirname, 'cv-ats.html'),
    output: resolve(publicDir, 'CV_Benjamin_Sepulveda_ATS.pdf'),
  },
];

try {
  for (const { input, output } of targets) {
    const fileUrl = pathToFileURL(input).href;
    execFileSync(
      browserPath,
      [
        '--headless=new',
        '--disable-gpu',
        `--user-data-dir=${tempProfile}`,
        '--no-pdf-header-footer',
        `--print-to-pdf=${output}`,
        fileUrl,
      ],
      { stdio: 'ignore' },
    );
    console.log(`✔ Generado: ${output}`);
  }
} finally {
  rmSync(tempProfile, { recursive: true, force: true });
}
