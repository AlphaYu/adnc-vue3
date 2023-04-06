import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString } from '@/utils/string';

// 字典管理
const Api = {
  PostMaintDicts: new UriString('post-maint-dicts'),
  GetMaintDicts: new UriString('get-maint-dicts'),
  PutMaintDictsId: new UriString('put-maint-dicts-id'),
  DeleteMaintDictsId: new UriString('delete-maint-dicts-id'),
  GetMaintDictsId: new UriString('get-maint-dicts-id'),
};
/**
 * 新增字典
 * @returns
 */
export function postMaintDicts() {
  return request.post<AxiosResponse<object>>({
    uri: Api.PostMaintDicts,
  });
}
/**
 * 获取字典列表
 * @returns
 */
export function getMaintDicts() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintDicts,
  });
}
/**
 * 修改字典
 * @returns
 */
export function putMaintDictsId() {
  return request.put<AxiosResponse<object>>({
    uri: Api.PutMaintDictsId,
  });
}
/**
 * 删除字典
 * @returns
 */
export function deleteMaintDictsId() {
  return request.delete<AxiosResponse<object>>({
    uri: Api.DeleteMaintDictsId,
  });
}
/**
 * 获取单个字典数据
 * @returns
 */
export function getMaintDictsId() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintDictsId,
  });
}
