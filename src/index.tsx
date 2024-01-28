import { PassThrough } from 'stream';

export function generateWaveformStream(): PassThrough {
  return new PassThrough();
}
