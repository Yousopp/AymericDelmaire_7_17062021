const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer-config');

router.post('/', multer, postCtrl.createPost);// auth et multer retirés pour test !!!
router.get('/', postCtrl.getAllPost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;