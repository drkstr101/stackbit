import { stackbitCli } from './stackbit-cli';

describe('stackbitCli', () => {
  it('should work', () => {
    expect(stackbitCli()).toEqual('stackbit-cli');
  });
});
