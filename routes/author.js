var express = require('express');
var router = express.Router();
var authorController = require('../controllers/author');

router.get('/author',authorController.loadView);
router.post('/addAuthor',authorController.addAuthor);
router.post('/editAuthor',authorController.editAuthor);
router.post('/deleteAuthor',authorController.deleteAuthor);
router.get('/getAuthor/:id',authorController.getAuthor);
router.get('/authorList',authorController.list);
router.post('/addRelationAuthor',authorController.relationBook);
router.get('/getBooksAuthor/:idAuthor',authorController.getBooks);

router.get('/generateAuthors',authorController.loadData);

module.exports = router;
