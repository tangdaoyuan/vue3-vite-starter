import client from "@/api";

export interface IUser {
  username: string;
  password: string;
}
/**
 * 获取用户
 *
 * @returns {Promise}
 */
export function fetchAccount(): Promise<IUser> {
  return new Promise((resolve) => {
    client.get("/api/account").then((res) => resolve(res?.data));
  });
}
