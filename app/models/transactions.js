import mongoose, {Schema} from 'mongoose'

const houseTransactions = new Schema({

    actionType: Number, // 1 for in 2 for out
    paymentType: String, // check or cash or credit
    amountPaid: Number, 
    expenseType: String,
    paidTo: String,
      // name of cunstructor
}, {
    timestamps: true
},
)

const Transactions = mongoose.models.house || mongoose.model("house", houseTransactions)
export default Transactions