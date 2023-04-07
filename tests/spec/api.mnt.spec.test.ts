// spec | test
import { describe, expect, it } from 'vitest';
import { postAuthSession } from '@/api/services/usr/account';
import { TOKEN_NAME } from '@/config/global';
import { getMaintCfgsPage } from '@/api/services/maint/cfg';
import { getMaintDicts } from '@/api/services/maint/dict';
import { getMaintOpslogs } from '@/api/services/maint/log';
import { getMaintNotices } from '@/api/services/maint/notice';
// yarn run test api.mnt.spec.test.ts
describe('maint service test', () => {
  describe('Login', () => {
    if (localStorage.getItem(TOKEN_NAME) == null) {
      it('should log in and obtain a token', async () => {
        const response = await postAuthSession({
          account: 'alpha2008',
          password: 'alpha2008',
        });
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('token');
        localStorage.setItem(TOKEN_NAME, response.data.token);
      });
    }
  });

  describe('cfg cfgs page', () => {
    it('should retrieve configuration data', async () => {
      const response = await getMaintCfgsPage({
        PageIndex: 1,
        PageSize: 2,
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveLength(1);
    });
  });

  describe('dict dicts', () => {
    it('should retrieve dictionary data', async () => {
      const response = await getMaintDicts({
        Ids: [1],
        Name: 'test',
        Value: 'test',
      });
      expect(response.status).toBe(200);
    });
  });

  describe('log ops logs', () => {
    it('should retrieve operation logs', async () => {
      const response = await getMaintOpslogs({
        BeginTime: '2023-01-01',
        EndTime: '2024-01-01',
        Account: 'alpha2008',
        PageIndex: 1,
        PageSize: 2,
      });
      expect(response.status).toBe(200);
      expect(response.data.data[0]).toHaveProperty('account');
      expect(response.data.data[0]).toHaveProperty('method');
    });
  });

  describe('notice notices', () => {
    it('should retrieve notices', async () => {
      const response = await getMaintNotices(null);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data).toHaveLength(0);
    });
  });
});
