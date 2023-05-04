import { defineStore } from 'pinia';
import { TOKEN_NAME } from '@/config/global';
import { store } from '@/store';
import { postAuthSessionRequest } from '@/api/model/usr/accountModel';
import { postAuthSession } from '@/api/services/usr/account';
import { getUsrUsersCurrent } from '@/api/services/usr/user';

export const useUserStore = defineStore({
  id: 'user endpoint',
  state: () => ({
    token: localStorage.getItem(TOKEN_NAME) || undefined,
  }),
  actions: {
    async login(request: postAuthSessionRequest) {
      const response = await postAuthSession(request);
      if (response.status === 200 || response.status === 201) {
        this.token = response.data;
        localStorage.setItem(TOKEN_NAME, response.data.token);
      } else {
        throw response;
      }
    },
    async logout() {
      localStorage.removeItem(TOKEN_NAME);
      this.token = '';
    },
    async getUserInfo() {
      return getUsrUsersCurrent();
    },
  },
});

export function getUserStore() {
  return useUserStore(store);
}
