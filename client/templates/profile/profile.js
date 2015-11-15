AutoForm.hooks({
  'user-profile-form': {
    onSuccess: function (operation, result, template) {
      toast('Profile updated successfully!', 4000);
    }
  }
});
