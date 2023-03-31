import { request } from '@/utils/request';
import {
  getAuthSessionResponse,
  postAuthSessionRequest,
  postAuthSessionResponse,
  putAuthSessionPasswordRequest,
  putAuthSessionRequest,
  putAuthSessionResponse,
} from '../model/usr/accountModel';

// 认证管理
const Api = {
  PostAuthSession: 'post-auth-session',
  DeleteAuthSession: 'delete-auth-session',
  PutAuthSession: 'put-auth-session',
  GetAuthSession: 'get-auth-session',
  PutAuthSessionPassword: 'put-auth-session-password',
};
/**
 * 登錄
 * @returns
 */
export function postAuthSession(param: postAuthSessionRequest) {
  return request.post<postAuthSessionResponse>({
    url: Api.PostAuthSession,
    data: param,
  });
}
/**
 * 注销
 * @returns
 */
export function deleteAuthSession() {
  return request.delete<void>({
    url: Api.DeleteAuthSession,
  });
}
/**
 * 刷新Token
 * @returns
 */
export function putAuthSession(param: putAuthSessionRequest) {
  return request.put<putAuthSessionResponse>({
    url: Api.PutAuthSession,
    data: param,
  });
}
/**
 * 获取认证信息
 * @returns
 */
export function getAuthSession() {
  return request.get<getAuthSessionResponse>({
    url: Api.GetAuthSession,
  });
}
/**
 * 修改密码
 * @returns
 */
export function putAuthSessionPassword(param: putAuthSessionPasswordRequest) {
  return request.put<void>({
    url: Api.PutAuthSessionPassword,
    data: param,
  });
}
