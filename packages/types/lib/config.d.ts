export interface IConfigModuleDB {
  username: string
  password: string
  database: string
  host: string
  port: number
  dialect: 'postgres' | 'sqlite'
}

export interface IConfigModuleRedis {
  host: string
}

export interface IConfigModuleService {
  host: string
  port: number
}

export interface IConfigModule {
  service: IConfigModuleService
  db?: IConfigModuleDB
  redis?: IConfigModuleRedis
}

export interface IConfig {
  users: IConfigModule
}
