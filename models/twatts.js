const oauth = require('oauth').OAuth

// console.log(process.env);
var Twitter = new oauth(
  'https://twitter.com/oauth/request_token', 'https://twitter.com/oauth/access_token',
  process.env.TOKEN_APPKEY, process.env.TOKEN_APPSECRET, '1.0A',
  'http://localhost:3000/api/twitter/sessions/callback', 'HMAC-SHA1'
)

module.exports = Twitter
