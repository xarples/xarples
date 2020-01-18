
export interface IConfigModuleDB {
  username: string,
  password: string,
  database: string,
  host: string,
  dialect: 'postgres' | 'sqlite'
}

export interface IConfigModuleService {
  host: string,
  port: number
}

export interface IConfigModule {
  service: IConfigModuleService,
  db: IConfigModuleDB
}

export interface IConfig {
  users: IConfigModule
}
