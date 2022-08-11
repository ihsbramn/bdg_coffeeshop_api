const router = require('express').Router();
const { coffeeshop } = require('../controllers');

// GET localhost:8080/coffeeshop => Ambil data semua coffeeshop
router.get('/get', coffeeshop.getDataCoffeeshop);

// GET localhost:8080/coffeeshop/2 => Ambil data semua coffeeshop berdasarkan id = 2
router.get('/get/:id', coffeeshop.getDataCoffeeshopByID);

// GET localhost:8080/coffeeshop/2 => Ambil data semua coffeeshop berdasarkan nama 
router.post('/search/', coffeeshop.getDataCoffeeshopBySearchName);

// POST localhost:8080/coffeeshop/add => Tambah data coffeeshop ke database
router.post('/add', coffeeshop.addDataCoffeeshop);

// POST localhost:8080/coffeeshop/2 => Edit data coffeeshop
router.post('/edit', coffeeshop.editDataCoffeeshop);

// POST localhost:8080/coffeeshop/delete => Delete data coffeeshop
router.post('/delete/', coffeeshop.deleteDataCoffeeshop);

module.exports = router;