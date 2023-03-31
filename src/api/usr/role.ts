import { request } from '@/utils/request';
import {
  getUsrRolesPageRequest,
  getUsrRolesPageResponse,
  getUsrRolesUserIdRolestreeResponse,
  postUsrRolesRequest,
  putUsrRolesIdPermissonsResponse,
  putUsrRolesIdRequest,
} from '../model/usr/roleModel';

// 角色管理
const Api = {
  PostUsrRoles: 'post-usr-roles',
  GetUsrRolesPage: 'get-usr-roles-page',

  PutUsrRolesId: (id: number) => `put-usr-roles-${id}`,
  DeleteUsrRolesId: (id: number) => `delete-usr-roles-${id}`,
  PutUsrRolesIdPermissons: (id: number) => `put-usr-roles-${id}-permissons`,
  GetUsrRolesUserIdRolestree: (userId: number) => `get-usr-roles-${userId}-rolestree`,
};

/**
 * 查询角色
 * @returns
 */
export function getUsrRolesPage(param: getUsrRolesPageRequest) {
  return request.get<getUsrRolesPageResponse>({
    url: Api.GetUsrRolesPage,
    data: param,
  });
}
/**
 * 根据用户ID获取角色树
 * @returns
 */
export function getUsrRolesUserIdRolestree(userId: number) {
  return request.get<getUsrRolesUserIdRolestreeResponse>({
    url: Api.GetUsrRolesUserIdRolestree(userId),
  });
}
/**
 * 删除角色
 * @returns
 */
export function deleteUsrRolesId(id: number) {
  return request.delete<void>({
    url: Api.DeleteUsrRolesId(id),
  });
}
/**
 * 修改角色
 * @returns
 */
export function putUsrRolesId(id: number, param: putUsrRolesIdRequest) {
  return request.put<void>({
    url: Api.PutUsrRolesId(id),
    data: param,
  });
}
/**
 * 保存角色权限
 * @returns
 */
export function putUsrRolesIdPermissons(id: number) {
  return request.put<putUsrRolesIdPermissonsResponse>({
    url: Api.PutUsrRolesIdPermissons(id),
  });
}
/**
 * 新增角色
 * @returns
 */
export function postUsrRoles(param: postUsrRolesRequest) {
  return request.post<void>({
    url: Api.PostUsrRoles,
    data: param,
  });
}
