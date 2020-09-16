const keystone = require('keystone');
const Types = keystone.Field.Types

const User = new keystone.List('User', {
  track: { createdAt: true, updatedAt: true },
});

User.add({
    name: { type: String },
    password: { type: Types.Password },
    email: { type: Types.Email, required:true,initial:true, unique: true },
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

User.schema.virtual('canAccessKeystone').get(function () {
    return true;
});

User.defaultColumns = 'id, name, email';
User.register();