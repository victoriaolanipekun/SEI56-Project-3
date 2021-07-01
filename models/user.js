import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, maxLength: 30, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// Virtual field 
userSchema 
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation 
  })

// Custom pre validattion 
userSchema
  .pre('validate', function(next){
    if (this.isModified('password') && this.password !== this._passwordConfirmation){
      // Invalidate the request
      this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
  })

// Custom pre save
userSchema
  .pre('save', function(next){
    if (this.isModified('password')){
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

// Creating a method that checks user inputted password against hashed password in db
userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

// Export the model 
export default mongoose.model('User', userSchema)