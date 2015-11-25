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