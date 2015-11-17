AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

AccountsTemplates.addFields([
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
                text: "English",
                value: "en",
            },
            {
                text: "Français",
                value: "fr",
            },
        ],
        required: true,
    }
]);