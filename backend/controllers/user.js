const model = require('../models');
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require("email-validator");

// Utilisation du plugin email-validator pour validé l'email de l'utilisateur pendant l'inscription.
exports.signupUser = (req, res, next) => {
  const isValidateEmail = validator.validate(req.body.email)
  if(!isValidateEmail) {
    res.writeHead(400, 'Email incorrect !"}', {
      'content-type': 'application/json'
    });
    res.end('Le format de l\'Email est incorrect.');
  } else {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new model.User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          isAdmin: false,
          createdAt : Date.now(),
          updatedAt: Date.now()
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
    }
};


exports.loginUser = (req, res, next) => {
  console.log(req.body.email)
  User.findOne({ where: { email: req.body.email }})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          console.log(user)
          res.status(200).json({
            userId: user.id,
            name: user.name,
            token: jwt.sign(
              { userId: user.id },
              process.env.JSONWEBTOKEN, // Changer le token et le mettre en process.env
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};