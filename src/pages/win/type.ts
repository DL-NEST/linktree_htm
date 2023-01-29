type Process = {
  name: string;
  pid: number;
  mark: string;
  vacant: number;
};

type MenuOp = {
  show: boolean;
  x: number;
  y: number;
};

type menuList = {
  icon: any;
  name: string;
  onClick?: () => any;
  child?: menuList[];
};

type processManageType = {
  name: string;
  pid?: number;
  mark: string;
  cpu: number;
  memory: number;
  status?: boolean;
  // createdAt: string;
  // updatedAt: string;
  // [key: string]: any;
};

export type { Process, MenuOp, menuList, processManageType };
