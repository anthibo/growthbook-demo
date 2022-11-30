import { Request } from 'express';
import { User } from '@interfaces/users.interface';
import { GrowthBook } from '@growthbook/growthbook';

export interface DataStoredInToken {
  id: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithGB extends Request {
  user: User;
  gb: GrowthBook;
}
