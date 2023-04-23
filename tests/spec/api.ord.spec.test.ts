// spec | test
import { describe, expect, it } from 'vitest';
import { postAuthSession } from '@/api/services/usr/account';
import { TOKEN_NAME } from '@/config/global';
import { getOrdOrdersPage } from '@/api/services/ord/order';
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
        console.log(response.data.token);
        localStorage.setItem(TOKEN_NAME, response.data.token);
      });
    }
  });

  describe('order pagination API', () => {
    it('should return orders for the specified page with the correct pagination metadata', async () => {
      // Define test data
      const response = await getOrdOrdersPage({
        PageIndex: 1,
        PageSize: 2,
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveLength(1);
    });
  });
});
