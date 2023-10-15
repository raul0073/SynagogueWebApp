import mongoose, {Schema} from 'mongoose'

const ordersSchema = new Schema({
    name: String,
    userId: String,
    parasha: String,
    price: Number,
    pricePaid: Number,
    beenPaid: Boolean,

}, {
    timestamps: true
},
)

const Order = mongoose.models.orders || mongoose.model("orders", ordersSchema)
export default Order