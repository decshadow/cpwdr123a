import { AccountModel } from "../../models/Account"

export default {
	Query: {
		account: async(_parent: any, _args: any, _context: any, _info: any) => {
			try {
				return await AccountModel.findById(_args._id)
			} catch (e) {
				throw e
			}
		},
		accounts: async (_parent: any, _args: any, _context: any, _info: any) => {
			try {
				return await AccountModel.find()
			} catch (e) {
				throw e
			}
		}
	}
}