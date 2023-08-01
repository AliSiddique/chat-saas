import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
export interface user extends mongoose.Document {
  name: String,
  username: String,
  email: String,
  password: String,
  passwordConfirmation: String,
  comparePassword(enteredPassword: string): Promise<boolean>;
}
const userSchema =new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    subscription_name: {
      type: String,
      enum: ['free', 'basic', 'pro'],
      default: 'free',
    },
    email_notification: {
      type: Boolean,
      default: true,
    },
    sms_notification: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = function (enteredPassword: string): Promise<boolean> {
  let password = this.password;
  return new Promise((resolve, reject) => {
      bcrypt.compare(enteredPassword, password, (err, success) => {
          if (err) return reject(err);
          return resolve(success);
      });
  });
};
// Encrypt password using bcrypt
userSchema.pre('save', async function (next:any) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model<user>('User', userSchema);

export default User;
