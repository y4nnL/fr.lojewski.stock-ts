import { RouteConfig } from 'vue-router'

import AccountComponent from '@/views/Account'
import AuthComponent from '@/views/Auth'
import SettingsComponent from '@/views/Settings'
import SettingsBoardComponent, { SettingsBoardTitle } from '@/views/SettingsBoard'
import SettingsStockComponent, { SettingsStockTitle } from '@/views/SettingsStock'
import ShoppingComponent from '@/views/Shopping'
import StockComponent from '@/views/Stock'
import { UserRole } from '@/storage/types'

export interface AppRouteConfig extends RouteConfig {
  name: string;
  meta: {
    auth: boolean;
    level: number;
    position: number;
    roles: UserRole[];
  }
}

export enum RouteNames {
  Account = 'account',
  Auth = 'auth',
  Catch = 'catch',
  Default = 'default',
  Settings = 'settings',
  SettingsBoard = 'settings-board',
  SettingsStock = 'settings-stock',
  Shopping = 'shopping',
  Stock = 'stock',
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Account

const accountRoute: AppRouteConfig = {
  component: AccountComponent,
  name: RouteNames.Account,
  path: '/account',
  meta: {
    auth: true,
    level: 2,
    position: 4,
    roles: [ UserRole.Any ],
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Auth

const authRoute: AppRouteConfig = {
  component: AuthComponent,
  name: RouteNames.Auth,
  path: '/auth',
  meta: {
    auth: false,
    level: 1,
    position: -1,
    roles: [ UserRole.Any ],
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Settings

const settingsPath = '/settings'

const settingsBoardRoute: AppRouteConfig = {
  components: {
    default: SettingsBoardComponent,
    title: SettingsBoardTitle,
  },
  name: RouteNames.SettingsBoard,
  path: settingsPath,
  meta: {
    auth: true,
    level: 2,
    position: 3,
    roles: [ UserRole.Any ],
  },
}

const settingsStockRoute: AppRouteConfig = {
  components: {
    default: SettingsStockComponent,
    title: SettingsStockTitle,
  },
  name: RouteNames.SettingsStock,
  path: settingsPath + '/stock',
  meta: {
    auth: true,
    level: settingsBoardRoute.meta.level + 1,
    position: settingsBoardRoute.meta.position,
    roles: [ UserRole.Any ],
  },
}

const settingsRoute: AppRouteConfig = {
  component: SettingsComponent,
  name: RouteNames.Settings,
  path: settingsPath,
  children: [
    settingsBoardRoute,
    settingsStockRoute,
  ],
  redirect: {
    name: RouteNames.SettingsStock,
    replace: true,
  },
  meta: {
    auth: true,
    level: -1,
    position: -1,
    roles: [ UserRole.Any ],
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Shopping

const shoppingPath = '/shopping'

const shoppingRoute: AppRouteConfig = {
  component: ShoppingComponent,
  name: RouteNames.Shopping,
  path: shoppingPath,
  meta: {
    auth: true,
    level: 2,
    position: 2,
    roles: [ UserRole.Any ],
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Stock

const stockPath = '/stock'

const stockRoute: AppRouteConfig = {
  component: StockComponent,
  name: RouteNames.Stock,
  path: stockPath,
  meta: {
    auth: true,
    level: 2,
    position: 1,
    roles: [ UserRole.Any ],
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Default

const defaultRoute: AppRouteConfig = {
  name: RouteNames.Default,
  path: '/',
  redirect: { name: RouteNames.Stock },
  meta: {
    auth: false,
    level: -1,
    position: -1,
    roles: [ UserRole.Any ],
  },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Catch

const catchRoute: AppRouteConfig = {
  name: RouteNames.Catch,
  path: '*',
  redirect: { name: RouteNames.Default },
  meta: {
    auth: false,
    level: -1,
    position: -1,
    roles: [ UserRole.Any ],
  },
}

export const routes: AppRouteConfig[] = [
  accountRoute,
  authRoute,
  defaultRoute,
  settingsRoute,
  shoppingRoute,
  stockRoute,
  // Catch unmatched routes
  catchRoute,
]

export default routes
