/**
 * 获取通知消息列表[响应] 返回值为数组，可以使用 Request[] 或 Array&lt;Request&gt;
 * @returns
 */
export interface getMaintNoticesResponse {
  id: number;
  createBy: number;
  createTime: string;
  content: string;
  title: string;
  type: number;
}
