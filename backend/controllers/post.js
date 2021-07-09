const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => { // Le user créé un post
  const postObject = JSON.parse(req.body.post);
  const post = new Post({
    ...postObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  post.save()
    .then(() => res.status(201).json({ message: 'Post créé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => { // Le user modifi un post
  // code here !
  post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => { // Le user supprime un post
  // code here !
  post.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllPost = (req, res, next) => {
  post.findAll()
    .then((posts) => {res.status(200).json(posts)})
    .catch((error) => {res.status(400).json({error: error})});
};