import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const htmlPath = resolve(root, 'video/working-animation.html');
const framesDir = resolve(root, 'video/frames');
const outputPath = resolve(root, 'assets/tuition-fee-tracker-working-demo.mp4');
const chrome = process.env.CHROME_BIN || 'google-chrome';
const fps = 1;
const durationSeconds = 36;
const totalFrames = fps * durationSeconds;

if (!existsSync(htmlPath)) {
  throw new Error(`Missing animation HTML: ${htmlPath}`);
}

rmSync(framesDir, { recursive: true, force: true });
mkdirSync(framesDir, { recursive: true });
mkdirSync(dirname(outputPath), { recursive: true });

for (let frame = 0; frame < totalFrames; frame += 1) {
  const t = (frame / fps).toFixed(2);
  const framePath = resolve(framesDir, `frame-${String(frame).padStart(4, '0')}.png`);
  const url = `${pathToFileURL(htmlPath).href}?t=${t}`;
  const result = spawnSync(
    chrome,
    [
      '--headless',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--hide-scrollbars',
      '--window-size=1280,720',
      `--screenshot=${framePath}`,
      url,
    ],
    { stdio: 'pipe' }
  );
  if (result.status !== 0) {
    process.stderr.write(result.stderr);
    throw new Error(`Chrome failed while rendering frame ${frame}`);
  }
  if (frame % 25 === 0) {
    console.log(`Rendered ${frame}/${totalFrames} frames`);
  }
}

const encode = spawnSync(
  'ffmpeg',
  [
    '-y',
    '-framerate',
    String(fps),
    '-i',
    resolve(framesDir, 'frame-%04d.png'),
    '-c:v',
    'libx264',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    outputPath,
  ],
  { stdio: 'inherit' }
);

if (encode.status !== 0) {
  throw new Error('ffmpeg failed to encode video');
}

console.log(`Video written: ${outputPath}`);
