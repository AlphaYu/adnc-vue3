import { request } from '@/utils/request';
import type { MenuListResult } from '@/api/model/_permissionModel';

const Api = {
  MenuList: '/get-menu-list',
};

export function getMenuList() {
  return request.get<MenuListResult>({
    url: Api.MenuList,
  });
}
