import { request } from '@/utils/request';
import {
  getUsrMenusMenutreeByRoleIdResponse,
  getUsrMenusResponse,
  getUsrMenusRoutersResponse,
  postUsrMenusRequest,
} from '../model/usr/menuModel';

// 菜单管理
const Api = {
  PostUsrMenus: 'post-usr-menus',
  GetUsrMenus: 'get-usr-menus',
  GetUsrMenusRouters: 'get-usr-menus-routers',

  PutUsrMenusById: (id: number) => `put-usr-menus-${id}`,
  DeleteUsrMenusById: (id: number) => `delete-usr-menus-${id}`,
  GetUsrMenusMenutreeByRoleId: (roleId: number) => `get-usr-menus-${roleId}-menutree`,
};

/**
 * 新增菜单
 * @returns
 */
export function postUsrMenus(param: postUsrMenusRequest) {
  return request.post<void>({
    url: Api.PostUsrMenus,
    data: param,
  });
}
/**
 * 获取菜单树
 * @returns
 */
export function getUsrMenus() {
  return request.get<Array<getUsrMenusResponse>>({
    url: Api.GetUsrMenus,
  });
}
/**
 * 修改菜单
 * @returns
 */
export function putUsrMenusById(id: number, param: postUsrMenusRequest) {
  return request.put<void>({
    url: Api.PutUsrMenusById(id),
    data: param,
  });
}
/**
 * 删除菜单
 * @returns
 */
export function deleteUsrMenusById(id: number) {
  return request.delete<void>({
    url: Api.DeleteUsrMenusById(id),
  });
}
/**
 * 获取侧边栏路由菜单
 * @returns
 */
export function getUsrMenusRouters() {
  return request.get<Array<getUsrMenusRoutersResponse>>({
    url: Api.GetUsrMenusRouters,
  });
}
/**
 * 根据角色获取菜单树
 * @returns
 */
export function getUsrMenusMenutreeByRoleId(roleId: number) {
  return request.get<getUsrMenusMenutreeByRoleIdResponse>({
    url: Api.GetUsrMenusMenutreeByRoleId(roleId),
  });
}
