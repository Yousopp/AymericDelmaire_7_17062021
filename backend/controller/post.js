const Sauce = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => { // L'utilisateur créé un post
  // code here !
  post.save()
    .then(() => res.status(201).json({ message: 'Post créée !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => { // Récupération d'un post par son ID
  Post.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyPost = (req, res, next) => { // L'utilisateur modifie un post
  // code here !
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => { // L'utilisateur supprime un post
    // code here !
    Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Post supprimée !'}))
          .catch(error => res.status(400).json({ error }));
};

exports.getAllPost = (req, res, next) => { // Récupération de tous les post
  Post.find().then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};