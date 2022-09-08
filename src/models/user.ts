import { Entity, Column, AfterInsert, AfterRemove } from 'typeorm';
import { logger } from '../config/logger';
import { BaseEntity } from './base';

@Entity()
export class User extends BaseEntity {
  @Column()
  tgID!: number;

  @Column({ nullable: true })
  googleToken?: string;

  @AfterInsert()
  onCreate() {
    logger.debug(`New user was created: ${this.tgID}`);
  }

  @AfterRemove()
  onRemove() {
    logger.debug(`User was deleted: ${this.tgID}`);
  }
}
