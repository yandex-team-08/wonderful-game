import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Length,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  paranoid: false,
  tableName: 'threads',
})
class Thread extends Model<Thread> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id: number;

  @AllowNull(false)
  @Length({ max: 300, min: 10 })
  @Column(DataType.STRING(300))
  title: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  author_id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  created_at: number;
}

export default Thread;
