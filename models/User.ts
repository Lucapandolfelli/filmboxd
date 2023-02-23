import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    requeired: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: 5,
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
