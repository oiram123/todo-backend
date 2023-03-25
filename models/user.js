const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, require: true},
    password: {type: String, require: true}
})

UserSchema.methods.getSignetJwtToken = function () {
    return jwt.sign({id: this._id}, "jwtsecret")
}


const User = mongoose.model("User", UserSchema)
module.exports = User;