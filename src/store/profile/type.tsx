export type userList = {
  id: number;
  username: string;
  full_name?: string;
  image?: number | string;
  gender: string;
  limit_summa: number;
  balance: number;
};

export type InitialState = {
  userList: Partial<userList>;
  token: string;
  logout: boolean;
};
