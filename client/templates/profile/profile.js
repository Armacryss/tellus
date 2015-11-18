AutoForm.hooks({
  'user-profile-form': {
    onSuccess: function (operation, result, template) {
      toast(TAPi18n.__("message.profile.update.success"), 4000);
    }
  }
});
