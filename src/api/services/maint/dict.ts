import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString, toQueryFormat } from '@/utils/string';
import {
  getMaintDictsIdResponse,
  getMaintDictsParams,
  getMaintDictsResponse,
  postMaintDictsRequest,
  putMaintDictsIdRequest,
} from '@/api/model/maint/dictModel';

// 字典管理
const Api = {
  PostMaintDicts: new UriString('post-maint-api-dicts'),

  GetMaintDicts: (param: string) => new UriString(`get-maint-api-dicts${param}`),
  PutMaintDictsId: (id: number) => new UriString(`put-maint-api-dicts-${id}`),
  DeleteMaintDictsId: (id: number) => new UriString(`delete-maint-api-dicts-${id}`),
  GetMaintDictsId: (id: number) => new UriString(`get-maint-api-dicts-${id}`),
};
/**
 * 新增字典
 * @returns
 */
export function postMaintDicts(param: postMaintDictsRequest) {
  return request.post<AxiosResponse<void>>({
    uri: Api.PostMaintDicts,
    data: param,
  });
}
/**
 * 获取字典列表
 * @returns
 */
export function getMaintDicts(param: getMaintDictsParams) {
  return request.get<AxiosResponse<getMaintDictsResponse[]>>({
    uri: Api.GetMaintDicts(toQueryFormat(param)),
  });
}
/**
 * 修改字典
 * @returns
 */
export function putMaintDictsId(id: number, param: putMaintDictsIdRequest) {
  return request.put<AxiosResponse<void>>({
    uri: Api.PutMaintDictsId(id),
    data: param,
  });
}
/**
 * 删除字典
 * @returns
 */
export function deleteMaintDictsId(id: number) {
  return request.delete<AxiosResponse<object>>({
    uri: Api.DeleteMaintDictsId(id),
  });
}
/**
 * 获取单个字典数据
 * @returns
 */
export function getMaintDictsId(id: number) {
  return request.get<AxiosResponse<getMaintDictsIdResponse>>({
    uri: Api.GetMaintDictsId(id),
  });
}
