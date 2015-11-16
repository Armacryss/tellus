Schema = {};

Users = Meteor.users;

Users.helpers({  
  getUsername: function() {
      var user = Meteor.users.findOne({ "_id" : this._id });
      return user.username !== undefined ? user.username : user.getMainEmail();
  },
  getMainEmail: function() {
      var user = Meteor.users.findOne({ "_id" : this._id });
      return user.emails !== undefined ? user.emails[0].address : '';
  },
  isAdmin : function() {
     return Roles.userIsInRole(this._id, [Tellus.Enum.Roles.ADMIN]);
  }
});

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        max: 200
    },
    lastName: {
        type: String,
        max: 200
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    bio: {
        type: String,
        optional: true,
        autoform: {
          type: 'textarea'
        }
    }
});


Schema.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true
    }
});

Meteor.startup(function() {
    Schema.UserProfile.i18n("schemas.userprofile");
    Meteor.users.attachSchema(Schema.User);
});

TabularTables.Users = new Tabular.Table({
    name: "Users",
    collection: Meteor.users,
    pub: "allUsers",
    allow: function (userId) {
        var user = Meteor.users.findOne({ _id: userId });
        
        return user && user.isAdmin();
    },
    columns: [
        {data: "getUsername", title: "Username"},
        {data: "roles", title: "Roles"},
        {
            data: "createdAt",
            title: "Created Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).calendar();
                } else {
                    return "Never";
                }
            }
        }
    ]
});

