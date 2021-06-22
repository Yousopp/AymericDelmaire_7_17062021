const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => { // Le user créé un post
  // code here !
  Post.save()
    .then(() => res.status(201).json({ message: 'Post créé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => { // Le user modifi un post
  // code here !
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => { // Le user supprime un post
  // code here !
  Post.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllPost = (req, res, next) => { // Récupération de tous les posts
  // code here !
  Post.find()
    .then((sauces) => {res.status(200).json(sauces)})
    .catch((error) => {res.status(400).json({error: error})});
};