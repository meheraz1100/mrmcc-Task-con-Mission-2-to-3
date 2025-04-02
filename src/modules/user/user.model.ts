import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: 3,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
        validator: function (value: string) {
            // Regular expression for validating email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        }
    },
    message: "{VALUE} is not a valid email",
    immutable: true,
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: "{VALUE} is not valid role, please provide a valid role",
    },
    default: "user",
    required: true,
  },
  userStatus: {
    type: String,
    enum: {values: ["active", "inactive"], message: '{VALUE} is not valid status, please provide a valid status'},
    required: true,
  },
});

// hook -> pre
userSchema.pre("find", function (this, next){
    this.find({userStatus: {$ne: "active"}})
    next()
})

// hook -> post
userSchema.post("find", function(docs, next){
    docs.forEach((doc: IUser) => {
        doc.name = doc.name.toUpperCase()
    }) 
    next()
})

const User = model<IUser>("User", userSchema);
export default User;
