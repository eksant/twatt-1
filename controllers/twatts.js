const Twitter = require('../models/twatts')

module.exports = {
  twattProfile: (req, res) => {
    Twitter.get(
      'https://api.twitter.com/1.1/account/verify_credentials.json',
      process.env.TOKEN_USERKEY, process.env.TOKEN_USERSECRET,
      (err, data, result) => {
        if (err) { res.status(400).json(err) }
        else { res.status(200).send(JSON.parse(data)) }
      }
    )
  },

  twattTimeHome: (req, res) => {
    Twitter.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.TOKEN_USERKEY, process.env.TOKEN_USERSECRET,
      (err, data, result) => {
        if (err) { res.status(400).json(err) }
        else { res.status(200).send(JSON.parse(data)) }
      }
    )
  },

  twattTimeUser: (req, res) => {
    Twitter.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json',
      process.env.TOKEN_USERKEY, process.env.TOKEN_USERSECRET,
      (err, data, result) => {
        if (err) { res.status(400).json(err) }
        else { res.status(200).send(JSON.parse(data)) }
      }
    )
  }
}
