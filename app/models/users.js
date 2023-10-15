import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    hasAccess: Boolean,
    hasDebt: Boolean,
    balance: Number,

}, {
    timestamps: true
},
)

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User