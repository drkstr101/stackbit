import { cmsGit } from './cms-git';
import { describe, expect, it } from '@jest/globals';

describe('cmsGit', () => {
  it('should work', () => {
    expect(cmsGit()).toEqual('cms-git');
  });
});
