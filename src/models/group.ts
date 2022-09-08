import { Entity, Column, AfterInsert, AfterRemove } from 'typeorm';
import { logger } from '../config/logger';
import { BaseEntity } from './base';

@Entity()
export class Group extends BaseEntity {
  @Column()
  tgID!: number;

  @AfterInsert()
  onCreate() {
    logger.debug(`New group was created: ${this.tgID}`);
  }

  @AfterRemove()
  onRemove() {
    logger.debug(`Group was deleted: ${this.tgID}`);
  }
}
