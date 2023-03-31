/**
 * 登錄[要求] - POST /auth/session
 * @returns
 */
export interface postAuthSessionRequest {
  account?: string;
  password: string;
}
/**
 * 登錄[响应] - POST /auth/session
 * @returns
 */
export interface postAuthSessionResponse {
  token: string;
  expire: string;
  refreshToken: string;
  refreshExpire: string;
}

/**
 * 刷新Token[要求] - PUT /auth/session
 * @returns
 */
export interface putAuthSessionRequest {
  refreshToken: string;
}
/**
 * 刷新Token[响应] - PUT /auth/session
 * @returns
 */
export interface putAuthSessionResponse {
  token: string;
  expire: string;
  refreshToken: string;
  refreshExpire: string;
}

/**
 * 获取认证信息[响应] - GET /auth/session
 * @returns
 */
export interface getAuthSessionResponse {
  id: number;
  account: string;
  name: string;
  roleIds: string;
  status: number;
  validationVersion: string;
}

/**
 * 修改密码[要求] - PUT /auth/session/password
 * @returns
 */
export interface putAuthSessionPasswordRequest {
  oldPassword: string;
  password: string;
  rePassword: string;
}
