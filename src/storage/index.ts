import productModule from './product'
import userModule from './user'
import {
  Product,
  Root,
  User,
} from './types'

const module: Root.Module = {
  modules: {
    [Product.namespace]: productModule,
    [User.namespace]: userModule,
  },
  strict: true,
}

export default module


