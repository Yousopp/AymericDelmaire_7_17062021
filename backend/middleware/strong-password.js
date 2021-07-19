// On importe le models du password
const passwordSchema = require('./password');

// On vérifie que le mot de passe respecte le schéma et on renvoie un message si c'est incorrect.
module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ error: "Format du mot de passe requis : entre 8 et 100 caractères, sans espaces et 2 chiffres minimum." });
    } else {
        next();
    }
};