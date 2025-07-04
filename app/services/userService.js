const gravatar = require("gravatar")


exports.gravatar = (userEmail) => {
  return gravatar.url(userEmail);
  // return gravatar.profile_url(userEmail, { protocol: 'https' });
}