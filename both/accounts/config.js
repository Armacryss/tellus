AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

// Champ Username.
AccountsTemplates.addFields([
    {
    _id: 'username',
    type: 'text',
    displayName: "username",
    required: true,
    func: function(value){
            if (Meteor.isClient) {
                var self = this;
                Meteor.call("userExists", value, function(err, userExists){
                    if (!userExists) {
                        self.setSuccess();
                    } else {
                        self.setError(userExists);
                    }
                    self.setValidating(false);
                });
                return;
            }
            // Server
            return Meteor.call("userExists", value);
        },
    },
    {
        _id: 'firstName',
        type: 'text',
        displayName: "firstname",
        placeholder: "firstname",
        required: true,
    },
    {
        _id: 'lastName',
        type: 'text',
        displayName: "lastname",
        placeholder: "lastname",
        required: true,
    },
    {
        _id: 'localization',
        type: "select",
        displayName: "localization",
        select: [
            {
                text: TAPi18n.__("schemas.userprofile.localization.options.langenglish"),
                value: "en",
            },
            {
                text: TAPi18n.__("schemas.userprofile.localization.options.langfrench"),
                value: "fr",
            },
        ],
        required: true,
    }
]);