import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString } from '@/utils/string';

// 通知管理
const Api = {
  GetMaintNotices: new UriString('get-maint-notices'),
};
/**
 * 获取通知消息列表
 * @returns
 */
export function getMaintNotices() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintNotices,
  });
}
