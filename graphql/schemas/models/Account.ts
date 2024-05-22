import mongoose, { Schema, Document } from "mongoose";
interface Account extends Document {
  account_id: number;
  limit: number;
  products: string[];
}

const accountSchema: Schema = new mongoose.Schema({
  account_id: { type: Number, required: true },
  limit: { type: Number, required: true },
  products: { type: [String], required: true },
});

export const AccountModel = mongoose.model<Account>("Account", accountSchema);
