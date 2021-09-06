import { UserModule } from '@/store/modules/user'

// eslint-disable-next-line import/prefer-default-export
export const checkPermission = (value: string[]): boolean => {
  if (value && value instanceof Array && value.length > 0) {
    const { roles } = UserModule
    const permissionRoles = value
    const hasPermission = roles.some(role => permissionRoles.includes(role))
    return hasPermission
  }
  console.error("need roles! Like v-permission=\"['admin','editor']\"")
  return false
}
