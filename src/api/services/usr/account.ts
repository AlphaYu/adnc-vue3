import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import {
  getAuthSessionResponse,
  postAuthSessionRequest,
  postAuthSessionResponse,
  putAuthSessionPasswordRequest,
  putAuthSessionRequest,
  putAuthSessionResponse,
} from '../../model/usr/accountModel';
import { UriString } from '@/utils/string';

// 认证管理
const Api = {
  PostAuthSession: new UriString('post-auth-api-session'),
  DeleteAuthSession: new UriString('delete-auth-api-session'),
  PutAuthSession: new UriString('put-auth-api-session'),
  GetAuthSession: new UriString('get-auth-api-session'),
  PutAuthSessionPassword: new UriString('put-auth-api-session-password'),
};

/**
 * 登錄
 * @returns
 */
export function postAuthSession(param: postAuthSessionRequest) {
  return request.post<AxiosResponse<postAuthSessionResponse>>({
    uri: Api.PostAuthSession,
    data: param,
  });
}
/**
 * 注销
 * @returns
 */
export function deleteAuthSession() {
  return request.delete<void>({
    uri: Api.DeleteAuthSession,
  });
}
/**
 * 刷新Token
 * @returns
 */
export function putAuthSession(param: putAuthSessionRequest) {
  return request.put<AxiosResponse<putAuthSessionResponse>>({
    uri: Api.PutAuthSession,
    data: param,
  });
}
/**
 * 获取认证信息
 * @returns
 */
export function getAuthSession() {
  return request.get<AxiosResponse<getAuthSessionResponse>>({
    uri: Api.GetAuthSession,
  });
}
/**
 * 修改密码
 * @returns
 */
export function putAuthSessionPassword(param: putAuthSessionPasswordRequest) {
  return request.put<void>({
    uri: Api.PutAuthSessionPassword,
    data: param,
  });
}
