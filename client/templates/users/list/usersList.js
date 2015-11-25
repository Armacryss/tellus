Template.usersList.rendered = function() {

};

Template.list_send_email.events({
    'click [data-action=send_email]': function (event) {
        event.preventDefault();
        var user = this;
        
        var name = user.username;
        var email = user.getMainEmail();
        var message = 'Congratulations Gabriel, you just sent an email with Mailgun!  You are truly awesome!  You can see a record of this email in your logs: https://mailgun.com/cp/log .  You can send up to 300 emails/day from this sandbox server.  Next, you should add your own domain so you can send 10,000 emails/month for free.';
        
        
        Meteor.call("sendContactEmail", name, email, message, function(err, sendOk){
            if (sendOk) {
                toast(TAPi18n.__('sendok'), 4000);
            } else {
                toast(TAPi18n.__('sendnok'), 4000);
            }
        });
        return;
    }
});
