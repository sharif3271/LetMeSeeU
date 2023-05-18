/*****************************
 *****************************
 Warnings: argon2 needs node v14+ and GCC v5+
 *****************************
******************************/

import { hash, verify } from 'argon2';

export class PassUtils {
  static async makeHash(plainPass: string) {
    return await hash(plainPass);
  }
  static async verify(hashedPass: string, plainPass: string) {
    return await verify(hashedPass, plainPass);
  }
}