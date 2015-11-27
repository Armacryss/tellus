Template.usersList.rendered = function() {
};

Template.usersList_cell_actions.events({
    'click [data-action=confirm_send_email]': function() {
        event.preventDefault();
        var current_user = this;
        
        MaterializeModal.confirm({
            title: TAPi18n.__('sendemail.title'),
            user_data: current_user,
            message: TAPi18n.__('sendemail.confirm', { username : current_user.username }),
            footerTemplate: 'modal_send_mail_footer',
            callback: function(error, response) {
                if (response.submit) {
                    Tellus.send_email(this.user_data);
                }
            }
        });
    },
    'click [data-action=edit_user]': function() {
        event.preventDefault();
        var current_user = this;

        Router.go('admin_userProfile', {_id: current_user._id});
    }
});

