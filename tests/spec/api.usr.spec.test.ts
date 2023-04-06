// spec | test
import { describe, expect, it } from 'vitest';
import { postAuthSession } from '@/api/service/usr/account';
import { TOKEN_NAME } from '@/config/global';
import { getUsrMenus } from '@/api/service/usr/menu';
import { getUsrUsersCurrent } from '@/api/service/usr/user';
import { getUsrRolesPage } from '@/api/service/usr/role';

describe('user service test', () => {
  describe('Login', () => {
    it('should log in and obtain a token', async () => {
      const response = await postAuthSession({
        account: 'alpha2008',
        password: 'alpha2008',
      });
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('token');
      localStorage.setItem(TOKEN_NAME, response.data.token);
    });
  });

  describe('user menu', () => {
    it('should obtain the menu information', async () => {
      const response = await getUsrMenus();
      expect(response.status).toBe(200);
      expect(response.data).not.toBeNull();
      expect(response.data.length).toBeGreaterThan(0);
    });
  });

  describe('user roles', () => {
    it('should obtain the roles information', async () => {
      const response = await getUsrRolesPage(null);
      expect(response.status).toBe(200);
      expect(response.data).not.toBeNull();
      expect(response.data.pageSize).toBeGreaterThan(0);
    });
  });

  describe('current user', () => {
    it('should obtain the user information', async () => {
      const response = await getUsrUsersCurrent();
      expect(response.status).toBe(200);
      expect(response.data).not.toBeNull();
      expect(response.data.id).toBeDefined();
      expect(response.data.profile.name).toBeDefined();
    });
  });
});
