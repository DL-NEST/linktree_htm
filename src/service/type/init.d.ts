export type SetupParam = {
  db: DBParam;
  redis: RedisParam;
};

export type DBParam = {
  addr: string;
  dataname: string;
  username: string;
  password: string;
};
export type RedisParam = {
  addr: string;
  password: string;
};
