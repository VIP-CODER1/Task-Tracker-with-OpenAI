import bcrypt from "bcryptjs";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log("In matchPassword - enteredPassword:", enteredPassword);
  console.log("In matchPassword - this.password:", this.password);
  
  try {
    const result = await bcrypt.compare(enteredPassword, this.password);
    console.log("bcrypt.compare result:", result);
    return result;
  } catch (error) {
    console.error("Error in matchPassword:", error);
    return false;
  }
};

const User = mongoose.model("User", userSchema);

export default User;
