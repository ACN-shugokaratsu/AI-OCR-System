import { UserRole } from '../../entities/user.entity';

export interface JwtPayload {
  sub: string; // user id
  email: string;
  tenantId: string;
  tenantName: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}