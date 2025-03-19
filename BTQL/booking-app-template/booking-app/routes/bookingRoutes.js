const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookingController');

router.get('/', controller.list);
router.get('/create', controller.showCreateForm);
router.post('/create', controller.create);
router.get('/edit/:id', controller.showEditForm);
router.post('/edit/:id', controller.update);
router.post('/cancel/:id', controller.cancel);

module.exports = router;