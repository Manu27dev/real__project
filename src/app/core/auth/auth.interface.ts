export const ADMIN = 'admin';
export const VISITOR = 'visitor';
export type UserRoles = typeof ADMIN | typeof VISITOR;

export interface Auth {
  password: string;
  role: string;
  displayName: string;
  email: string;
}
