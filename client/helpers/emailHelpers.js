Tellus.send_email = function(user_data) {
    var name = user_data.username;
    var email = user_data.getMainEmail();
    
    var message = 'Congratulations ' + name +', you just sent an email with Mailgun!  You are truly awesome!  You can see a record of this email in your logs: https://mailgun.com/cp/log .  You can send up to 300 emails/day from this sandbox server.  Next, you should add your own domain so you can send 10,000 emails/month for free.';
    
    
    Meteor.call("sendContactEmail", name, email, message, function(err, sendOk){
        Tellus.tellus_toast_conditional(sendOk, 'sendok', 'sendnok');
    });
    return;
}