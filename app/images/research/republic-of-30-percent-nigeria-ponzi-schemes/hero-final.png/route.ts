import part0 from './part0';
import part1 from './part1';
import part2 from './part2';
import part3 from './part3';
import part4 from './part4';
import part5 from './part5';
import part6 from './part6';
import part7 from './part7';
import part8 from './part8';
import part9 from './part9';
import part10 from './part10';

export const runtime = 'nodejs';
export const dynamic = 'force-static';

const IMAGE_BASE64 = [part0, part1, part2, part3, part4, part5, part6, part7, part8, part9, part10].join('');
const IMAGE_BYTES = Buffer.from(IMAGE_BASE64, 'base64');

export async function GET() {
  return new Response(IMAGE_BYTES, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Length': String(IMAGE_BYTES.length),
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
