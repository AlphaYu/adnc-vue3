/**
 * 查询操作日志[要求]
 * @returns
 */
export interface getMaintOpslogsParams {
  BeginTime: string;
  EndTime: string;
  Account: string;
  Method?: string;
  Device?: string;
  Level?: string;
  PageIndex: number;
  PageSize: number;
}
/**
 * 查询操作日志[响应]
 * @returns
 */
export interface getMaintOpslogsResponse {
  data: MaintlogData[];
  rowsCount: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  xData: string;
}

/**
 * 查询用户操作日志[要求]
 * @returns
 */
export interface getMaintUsersOpslogsParams {
  BeginTime: string;
  EndTime: string;
  Account: string;
  Method: string;
  Device: string;
  Level: string;
  PageIndex: number;
  PageSize: number;
}
/**
 * 查询用户操作日志[响应]
 * @returns
 */
export interface getMaintUsersOpslogsResponse {
  data: MaintlogData[];
  rowsCount: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  xData: string;
}

/**
 * 查询登录日志[要求]
 * @returns
 */
export interface getMaintLoginlogsParams {
  BeginTime: string;
  EndTime: string;
  Account: string;
  Method: string;
  Device: string;
  Level: string;
  PageIndex: number;
  PageSize: number;
}
/**
 * 查询登录日志[响应]
 * @returns
 */
export interface getMaintLoginlogsResponse {
  data: MaintlogData[];
  rowsCount: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  xData: string;
}

/**
 * 查询Nlog日志[要求]
 * @returns
 */
export interface getMaintNloglogsParams {
  BeginTime: string;
  EndTime: string;
  Account: string;
  Method: string;
  Device: string;
  Level: string;
  PageIndex: number;
  PageSize: number;
}
/**
 * 查询Nlog日志[响应]
 * @returns
 */
export interface getMaintNloglogsResponse {
  data: MaintNlogData[];
  rowsCount: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  xData: string;
}

interface MaintNlogData {
  id: string;
  date: string;
  level: string;
  message: string;
  logger: string;
  exception: string;
  threadID: number;
  threadName: string;
  processID: number;
  processName: string;
  properties: {
    traceIdentifier: string;
    connectionId: string;
    eventId_Id: string;
    eventId_Name: string;
    eventId: string;
    remoteIpAddress: string;
    baseDir: string;
    queryUrl: string;
    requestMethod: string;
    controller: string;
    method: string;
    formContent: string;
    queryContent: string;
  };
}
interface MaintlogData {
  id: string;
  className: string;
  logName: string;
  logType: string;
  message: string;
  method: string;
  succeed: string;
  userId: number;
  account: string;
  userName: string;
  remoteIpAddress: string;
  createTime: string;
}
