Meteor.startup(function() {

  Meteor.Mailgun.config({
    username: 'postmaster@domain.com',
    password: 'password-goes-here'
  });

  Meteor.methods({
    'sendContactEmail': function(name, email, message) {
      var doSend = false;
      
      this.unblock();

      if(doSend) {
        Meteor.Mailgun.send({
          to: 'gabriel.gasnot@gmail.com',
          from: name + ' <' + email + '>',
          subject: 'New Contact Form Message',
          text: message,
          html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
        });
      }
      else {
        // create a file for test.
        var fs = Npm.require('fs');
        var path = Npm.require('path');
        // for local test only.
        var destination_path = '/home/ubuntu/workspace/private/';
        
        if (!fs.existsSync(destination_path)) {
            throw new Error(destination_path + " does not exists");
        }
        else {
          var mail_name = 'from_' + name;
          var filePath = path.join(destination_path, mail_name + '.html' );
          fs.writeFileSync(filePath, Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message}));
        }
      }
      
      return true;
    }
  });
});
