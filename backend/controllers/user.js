const model = require('../models');
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require("email-validator");

// Utilisation du plugin email-validator pour validé l'email de l'utilisateur pendant l'inscription.
exports.signupUser = (req, res, next) => {
  const isValidateEmail = validator.validate(req.body.email)
  if(!isValidateEmail) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).json({ error: "Veuillez entrer un email valide" });
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
          .catch(error => res.status(400).json({ error: error }));
      })
      .catch(error => res.status(500).json({ error }));
    }
};


exports.loginUser = (req, res, next) => {
  User.findOne({ where: { email: req.body.email }})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: "L'email est incorrect" });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Le mot de passe est incorrect' });
          }
          res.status(200).json({
            userId: user.id,
            name: user.name,
            token: jwt.sign(
              { userId: user.id },
              process.env.JSONWEBTOKEN,
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};