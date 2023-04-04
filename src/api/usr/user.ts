import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import {
  getUsrUsersCurrentResponse,
  getUsrUsersIdPermissionsRequest,
  getUsrUsersIdPermissionsResponse,
  getUsrUsersPageRequest,
  getUsrUsersPageResponse,
  postUsrUsersRequest,
  putUsrUsersBatchStatusRequest,
  putUsrUsersIdRequest,
  putUsrUsersIdRolesRequest,
  putUsrUsersIdStatusRequest,
} from '../model/usr/userModel';
import { UriString } from '@/utils/string';

// 用户管理
const Api = {
  PostUsrUsers: new UriString('post-usr-users'),

  PutUsrUsersId: (id: number) => new UriString(`put-usr-users-${id}`),
  DeleteUsrUsersId: (id: number) => new UriString(`delete-usr-users-${id}`),
  PutUsrUsersIdRoles: (id: number) => new UriString(`put-usr-users-${id}-roles`),
  PutUsrUsersIdStatus: (id: number) => new UriString(`put-usr-users-${id}-status`),
  GetUsrUsersIdPermissions: (id: number) => new UriString(`get-usr-users-${id}-permissions`),

  PutUsrUsersBatchStatus: new UriString('put-usr-users-batch-status'),
  GetUsrUsersPage: new UriString('get-usr-users-page'),
  GetUsrUsersCurrent: new UriString('get-usr-users-current'),
};

/**
 * 新增用户
 * @returns
 */
export function postUsrUsers(param: postUsrUsersRequest) {
  return request.get<void>({
    uri: Api.PostUsrUsers,
    data: param,
  });
}
/**
 * 修改用户
 * @returns
 */
export function putUsrUsersId(id: number, param: putUsrUsersIdRequest) {
  return request.get<void>({
    uri: Api.PutUsrUsersId(id),
    data: param,
  });
}
/**
 * 删除用户
 * @returns
 */
export function deleteUsrUsersId(id: number) {
  return request.get<void>({
    uri: Api.DeleteUsrUsersId(id),
  });
}
/**
 * 设置用户角色
 * @returns
 */
export function putUsrUsersIdRoles(id: number, param: putUsrUsersIdRolesRequest) {
  return request.get<void>({
    uri: Api.PutUsrUsersIdRoles(id),
    data: param,
  });
}
/**
 * 变更用户状态
 * @returns
 */
export function putUsrUsersIdStatus(id: number, param: putUsrUsersIdStatusRequest) {
  return request.get<void>({
    uri: Api.PutUsrUsersIdStatus(id),
    data: param,
  });
}
/**
 * 批量变更用户状态
 * @returns
 */
export function putUsrUsersBatchStatus(param: putUsrUsersBatchStatusRequest) {
  return request.get<void>({
    uri: Api.PutUsrUsersBatchStatus,
    data: param,
  });
}
/**
 * 获取当前用户是否拥有指定权限
 * @returns
 */
export function getUsrUsersIdPermissions(id: number, param: getUsrUsersIdPermissionsRequest) {
  return request.get<AxiosResponse<getUsrUsersIdPermissionsResponse>>({
    uri: Api.GetUsrUsersIdPermissions(id),
    data: param,
  });
}
/**
 * 获取用户分页列表
 * @returns
 */
export function getUsrUsersPage(param: getUsrUsersPageRequest) {
  return request.get<AxiosResponse<getUsrUsersPageResponse>>({
    uri: Api.GetUsrUsersPage,
    params: param,
  });
}
/**
 * 获取登录用户个人信息
 * @returns
 */
export function getUsrUsersCurrent() {
  return request.get<AxiosResponse<getUsrUsersCurrentResponse>>({
    uri: Api.GetUsrUsersCurrent,
  });
}
