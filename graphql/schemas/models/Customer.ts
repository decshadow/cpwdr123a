import mongoose, { Schema, Document } from "mongoose";

interface TierDetails {
  tier: string;
  benefits: string[];
  active: boolean;
  id: string;
}

interface Customer extends Document {
  username: string;
  name: string;
  address: string;
  birthdate: Date;
  email: string;
  accounts: number[];
  tier_and_details: Map<string, TierDetails>;
}

const customerSchema: Schema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  birthdate: { type: Date, required: true },
  email: { type: String, required: true },
  accounts: { type: [Number], required: true },
  tier_and_details: {
    type: Map,
    of: new mongoose.Schema({
      tier: { type: String, required: true },
      benefits: { type: [String], required: true },
      active: { type: Boolean, required: true },
      id: { type: String, required: true },
    }),
  },
});

export const CustomerModel = mongoose.model<Customer>(
  "Customer",
  customerSchema
);
