// spec | test
import { describe, expect, it } from 'vitest';
import { postAuthSession } from '@/api/usr/account';
import { postAuthSessionRequest } from '@/api/model/usr/accountModel';

describe('user service test', () => {
  it('simulate login to obtain login results', async () => {
    const request: postAuthSessionRequest = {
      account: 'alpha2008',
      password: 'alpha2008',
    };
    const response = await postAuthSession(request);
    // console.log(response);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('token');
  });
});
