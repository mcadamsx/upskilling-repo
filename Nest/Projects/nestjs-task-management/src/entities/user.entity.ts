import { Exclude, Expose } from 'class-transformer';

export class UserEntity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;

  birthday: Date;

  @Exclude()
  password: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Expose()
  get age(): Number {
    const difference = Date.now() - this.birthday.getTime();
    const age_difference = new Date(difference);

    return Math.abs(age_difference.getUTCFullYear() - 1970);
  }

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
