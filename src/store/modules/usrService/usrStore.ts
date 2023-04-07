import { useUserStore } from './endpoint/userStore';
import { useMenuStore } from './endpoint/menuStore';
import { useRoleStore } from './endpoint/roleStore';

export const useUsrStore = () => ({
  user: useUserStore(),
  menu: useMenuStore(),
  role: useRoleStore(),
});
