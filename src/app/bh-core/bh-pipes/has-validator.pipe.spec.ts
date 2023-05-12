import { HasValidatorPipe } from './has-validator.pipe';

describe('HasValidatorPipe', () => {
  it('create an instance', () => {
    const pipe = new HasValidatorPipe();
    expect(pipe).toBeTruthy();
  });
});
