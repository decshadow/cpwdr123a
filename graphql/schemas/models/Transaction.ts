import mongoose, { Schema, Document } from "mongoose";

interface TransactionItem {
  date: Date;
  amount: number;
  transaction_code: string;
  symbol: string;
  price: string;
  total: string;
}

interface Transaction extends Document {
  account_id: number;
  transaction_count: number;
  bucket_start_date: Date;
  bucket_end_date: Date;
  transactions: TransactionItem[];
}

const transactionSchema: Schema = new mongoose.Schema({
  account_id: { type: Number, required: true },
  transaction_count: { type: Number, required: true },
  bucket_start_date: { type: Date, required: true },
  bucket_end_date: { type: Date, required: true },
  transactions: [
    {
      date: { type: Date, required: true },
      amount: { type: Number, required: true },
      transaction_code: { type: String, required: true },
      symbol: { type: String, required: true },
      price: { type: String, required: true },
      total: { type: String, required: true },
    },
  ],
});

export const TransactionModel = mongoose.models.Transaction || mongoose.model<Transaction>(
  "Transaction",
  transactionSchema
);
