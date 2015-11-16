AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: "First name",
        required: true,
    },
    {
        _id: 'lastName',
        type: 'text',
        displayName: "Last name",
        required: true,
    }
]);