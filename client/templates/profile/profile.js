AutoForm.hooks({
  'user-profile-form': {
    onSuccess: function (operation, result, template) {
      Tellus.tellus_toast_success(TAPi18n.__("message.profile.update.success"));
    }
  }
});
