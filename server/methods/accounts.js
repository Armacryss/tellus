Accounts.onCreateUser(function (options, user) {
    user.roles = [Tellus.Enum.Roles.REGISTERED_USER];
    
    Roles.addUsersToRoles(user._id, user.roles);

    if (options !== undefined && options.profile) {
        user.profile =  {
            firstName: options.profile.firstName,
            lastName: options.profile.lastName,
            localization: options.profile.localization,
        };
    }
    
    return user;
});