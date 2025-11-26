export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('SENDGRID_DEFAULT_FROM', 'noreply@yourdomain.com'),
        defaultReplyTo: env('SENDGRID_DEFAULT_REPLY_TO', 'noreply@yourdomain.com'),
      },
    },
  },
  i18n: {
    enabled: true,
    config: {
      locales: ['en', 'no'],
      defaultLocale: 'no',
    },
  },
});