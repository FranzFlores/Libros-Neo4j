var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book');

router.get('/book',bookController.loadView);
router.post('/addBook',bookController.addBook);
router.post('/editBook',bookController.editBook);
router.post('/deleteBook',bookController.deleteBook);
router.get('/getBook/:id',bookController.getBookById);
router.get('/bookList',bookController.list);

router.get('/getAuthorBook/:idBook',bookController.getAuthor);

router.get('/generateBooks',bookController.loadData);

module.exports = router;