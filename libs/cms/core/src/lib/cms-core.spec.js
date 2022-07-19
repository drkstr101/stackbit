import { cmsCore } from './cms-core';
import { describe, expect, it } from '@jest/globals';

describe('cmsCore', () => {
  it('should work', () => {
    expect(cmsCore()).toEqual('cms-core');
  });
});
