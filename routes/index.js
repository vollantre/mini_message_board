var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Add a new message' })
})

router.post('/new', (req, res) => {
  const msg = {
    text: req.body.messageText,
    user: req.body.author,
    added: new Date()
  }

  messages.push(msg)
  res.redirect('/')
})

module.exports = router;
