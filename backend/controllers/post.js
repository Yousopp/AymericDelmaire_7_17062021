const model = require('../models');
const {Post} = require('../models');
const fs = require('fs');

exports.createPost = (req, res, next) => {
  console.log(req.body)
  const post = new model.Post({
    UserId: req.body.userId,
    title: req.body.title,
    content: req.body.comment,
    attachment: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    createdAt : Date.now(),
    updatedAt: Date.now()
  });
  post.save()
  .then(() => res.status(201).json({ message: 'Votre post à bien été créé.' }))
  .catch((error) => {res.status(400).json({error});});
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

exports.getAllPost = (req, res, next) => { // Récupération de tous les posts
  Post.findAll({
    order: [[
      "createdAt", "DESC"
  ]]
  })
  .then(
    (posts) => {
      res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};