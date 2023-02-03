export type SetupParam = {
  dsn: DBParam;
  redis_opt: RedisParam;
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
