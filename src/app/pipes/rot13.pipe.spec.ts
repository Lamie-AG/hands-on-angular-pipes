import { Rot13Pipe } from './rot13.pipe';

describe('Rot13Pipe', () => {
  it('create an instance', () => {
    const pipe = new Rot13Pipe();
    expect(pipe).toBeTruthy();
  });
});
