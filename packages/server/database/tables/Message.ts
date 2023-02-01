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
  tableName: 'messages',
})
class Message extends Model<Message> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id: number;

  @AllowNull(false)
  @Length({ max: 999, min: 1 })
  @Column(DataType.STRING(1000))
  content: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  author_id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  thread_id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  created_at: number;
}

export default Message;
