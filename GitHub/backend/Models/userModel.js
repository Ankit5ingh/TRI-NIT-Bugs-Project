const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
    {
        name:{type:String, required: true},
        email:{type:String, required: true, unique : true},
        password:{type:String, required: true},
        pic:{type:String, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
        role : {type : String, required: true},
    },
{
    timestamp:true
});

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password);
}

userSchema.pre("save", async function(next){
    if(!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports= mongoose.model("User", userSchema);