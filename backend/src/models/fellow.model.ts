import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IFellow extends Document {
  fellowname: string;
  companyname?: string;
  websitename?: string;
  emailladdress: string;
  fellowmessage?: string;
}

const fellowSchema: Schema = new Schema(
  {
    fellowname: {
      type: String,
      unique: true,
      trim: true,
      minlength: 3,
      required: true,
    },
    companyname: {
      type: String,
      default: '',
    },
    websitename: {
      type: String,
      default: '',
    },
    emailladdress: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    fellowmessage: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const Fellow: Model<IFellow> = mongoose.model<IFellow>('Fellow', fellowSchema);

export default Fellow;
