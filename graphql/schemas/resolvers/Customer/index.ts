import { AccountModel } from "../../models/Account";
import { CustomerModel } from "../../models/Customer";

export default {
  Query: {
    customer: async (_parent: any, _args: any, _context: any, _info: any) => {
      try {
        return await CustomerModel.findById(_args._id);
      } catch (e) {
        throw e;
      }
    },
    customers: async (_parent: any, _args: any, _context: any, _info: any) => {
      try {
        const { input } = _args;
        console.log(input);
        const limit = input.limit || 6;
        const skip = input.skip * limit || 0;

        const [customers, totalCustomers] = await Promise.all([
          CustomerModel.find().skip(skip).limit(limit).lean(),
          CustomerModel.countDocuments(),
        ]);

        return {
          customers,
          skip,
          limit,
          totalCustomers,
        };
      } catch (e) {
        throw e;
      }
    },
  },
  Customer: {
    tier_and_details: async (
      _parent: any,
      _args: any,
      _context: any,
      _info: any
    ) => {
      try {
        if (
          _parent.tier_and_details &&
          Object.keys(_parent.tier_and_details).length > 0
        ) {
          const tierDetailsMap = _parent.tier_and_details;

          const tierDetailsArray = Array.from(tierDetailsMap.values());

          return tierDetailsArray;
        }
        return [];
      } catch (e) {
        throw new Error("Failed to get accounts");
      }
    },
    accounts: async (_parent: any, _args: any, _context: any, _info: any) => {
      try {
        if (_parent.accounts && _parent.accounts.length > 0) {
          const accounts = await AccountModel.find({
            account_id: { $in: _parent.accounts },
          });
          return accounts;
        }
      } catch (e) {
        throw new Error("Failed to get accounts");
      }
    },
  },
};
