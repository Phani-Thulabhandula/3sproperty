var mongoose = require('mongoose');
const { Schema } = mongoose;
var bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    first_name: {
        type: String,
        default: '',
        required: true
    },
    last_name: {
        type: String,
        default: '',
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    email_verified: {
        type: Boolean,
        default: false,
        unique: true
    },
    email_verify_token: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: '',
        index: true,
        unique: true
    },
    phone_verified: {
        type: Boolean,
        default: false
    },
    phone_otp_number: {
        type: Number,
        default: null
    },
    phone_otp_expired_at: { type: Date, default: null },
    avatar: { type: String, default: '' },
    password: { type: String, required: true },
    password_reset_token: { type: String, default: null },
    reset_token_expired_at: { type: Date, default: null },
    active: { type: Boolean, default: true },
    account_type: { type: String, enum: ['single', 'organization'], default: 'single' },
    billing_address: { type: String, default: '' },
    shipping_address: { type: String, default: '' },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    status: { type: String, enum: ['online', 'away', 'markaway'], default: 'away' },
    permission: [
        {
            type: { type: Schema.Types.ObjectId, ref: 'permissionType', required: true },
            read: { type: Boolean, default: false, required: true },
            write: { type: Boolean, default: false, required: true },
            delete: { type: Boolean, default: false, required: true },
        }
    ],
    last_login_at: { type: Date, default: Date.now },
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });


UserSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    //https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err, isMatch);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema)