import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString } from '@/utils/string';
import { getMaintNoticesResponse } from '@/api/model/maint/noticeModel';

// 通知管理
const Api = {
  GetMaintNotices: (title: string) => new UriString(`get-maint-api-notices?Title=${title}`),
};
/**
 * 获取通知消息列表
 * @returns
 */
export function getMaintNotices(title: string) {
  return request.get<AxiosResponse<getMaintNoticesResponse[]>>({
    uri: Api.GetMaintNotices(title),
  });
}
