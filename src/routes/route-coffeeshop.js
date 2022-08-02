const router = require('express').Router();
const { coffeeshop } = require('../controllers');

// GET localhost:8080/coffeeshop => Ambil data semua coffeeshop
router.get('/coffeeshop', coffeeshop.getDataCoffeeshop);

// GET localhost:8080/coffeeshop/2 => Ambil data semua coffeeshop berdasarkan id = 2
router.get('/coffeeshop/:id', coffeeshop.getDataCoffeeshopByID);

// POST localhost:8080/coffeeshop/add => Tambah data coffeeshop ke database
router.post('/coffeeshop/add', coffeeshop.addDataCoffeeshop);

// POST localhost:8080/coffeeshop/2 => Edit data coffeeshop
router.post('/coffeeshop/edit', coffeeshop.editDataCoffeeshop);

// POST localhost:8080/coffeeshop/delete => Delete data coffeeshop
router.post('/coffeeshop/delete/', coffeeshop.deleteDataCoffeeshop);

module.exports = router;