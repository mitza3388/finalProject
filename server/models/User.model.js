const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    myTrips: [{
        type: Types.ObjectId,
        ref: 'Trip'
    }]
});

// Do thing to the schema before saving
userSchema.pre("save", function (next) {
    this.id = String(this._id);
    next();
});

const User = model("User", userSchema);
module.exports.User = User;
