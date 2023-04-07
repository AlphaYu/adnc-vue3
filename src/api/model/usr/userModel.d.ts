/**
 * 新增用户[要求]
 * @returns
 */
export interface postUsrUsersRequest {
  account?: undefined;
  birthday: string;
  deptId: number;
  email: string;
  name: string;
  phone: string;
  sex: number;
  status: number;
  password: string;
}

/**
 * 修改用户[要求]
 * @returns
 */
export interface putUsrUsersIdRequest {
  account: string;
  birthday: string;
  deptId: number;
  email: string;
  name: string;
  phone: string;
  sex: number;
  status: number;
}

/**
 * 设置用户角色[要求]
 * @returns
 */
export interface putUsrUsersIdRolesRequest {
  [index: number]: number;
}

/**
 * 变更用户状态[要求]
 * @returns
 */
export interface putUsrUsersIdStatusRequest {
  value: number;
}

/**
 * 批量变更用户状态[要求]
 * @returns
 */
export interface putUsrUsersBatchStatusRequest {
  userIds: number[];
  status: number;
}

/**
 * 获取当前用户是否拥有指定权限[要求]
 * @returns
 */
export interface getUsrUsersIdPermissionsRequest {
  requestPermissions: number[];
  userBelongsRoleIds: number;
}

/**
 * 获取当前用户是否拥有指定权限[响应]
 * @returns
 */
export interface getUsrUsersIdPermissionsResponse {
  [index: number]: string;
}

/**
 * 获取用户分页列表[要求]
 * @returns
 */
export interface getUsrUsersPageRequest {
  Name: number;
  Account: number;
  PageIndex: number;
  PageSize: number;
}

/**
 * 获取用户分页列表[响应]
 * @returns
 */
export interface getUsrUsersPageResponse {
  data: getUsrUsersPageData[];
  rowsCount: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  xData: string;
}
interface getUsrUsersPageData {
  id: number;
  createBy: number;
  createTime: string;
  account: string;
  avatar: string;
  birthday: string;
  deptId: number;
  deptName: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  roleIds: string;
  roleNames: string;
  sex: number;
  sexName: string;
  status: number;
  statusName: string;
}

/**
 * 获取登录用户个人信息[响应]
 * @returns
 */
export interface getUsrUsersCurrentResponse {
  id: number;
  profile: getUsrUsersCurrentProfile;
  roles: string[];
  permissions: string[];
}

interface getUsrUsersCurrentProfile {
  account: string;
  avatar: string;
  birthday: string;
  deptId: number;
  deptFullName: string;
  email: string;
  name: string;
  phone: string;
  roleIds: string;
  roles: string[];
  sex: number;
  status: number;
}
