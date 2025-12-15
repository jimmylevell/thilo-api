module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '418f42963a2d656c06c8e64c51bbe977'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '418f42963a2d656c06c8e64c51bbe977'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '418f42963a2d656c06c8e64c51bbe977'),
    },
  },
});
