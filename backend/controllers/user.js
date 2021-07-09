const User = require('../models/user');
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
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          avatar: req.body.avatar
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
    }
};

// Utilisation de mongoose-field-encryption pour encrypter l'email de l'utilisateur.
exports.loginUser = (req, res, next) => {
  const userToSearchWith = new User({ email: req.body.email })
  userToSearchWith.encryptFieldsSync();
  User.findOne({ email: userToSearchWith.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              "RANDOM_SECRET_TOKEN", // Changer le token et le mettre en process.env
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};