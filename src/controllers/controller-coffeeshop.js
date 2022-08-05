const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua coffeeshop
    getDataCoffeeshop(req, res) {
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tb_coffeeshop;
                `,
                function(error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Succsess',
                        data: results
                    });
                });
            connection.release();
        })
    },
    // Ambil data coffeeshop berdasarkan ID
    getDataCoffeeshopByID(req, res) {
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tb_coffeeshop WHERE id = ?;
                `, [id],
                function(error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Succsess',
                        data: results
                    });
                });
            connection.release();
        })
    },

    // search data coffeeshop berdasarkan name
    getDataCoffeeshopBySearchName(req, res) {
        let name = req.body.name
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tb_coffeeshop WHERE name LIKE ?;
                `, [name],
                function(error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Success',
                        data: results
                    });
                });
            connection.release();
        })
    },

    // Simpan data coffeeshop
    addDataCoffeeshop(req, res) {
        let data = {
            name: req.body.name,
            address: req.body.address,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO tb_coffeeshop SET ?;
                `, [data],
                function(error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Success',
                    });
                });
            connection.release();
        })
    },
    // Update data coffeeshop
    editDataCoffeeshop(req, res) {
        let dataEdit = {
            name: req.body.name,
            address: req.body.address,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE tb_coffeeshop SET ? WHERE id = ?;
                `, [dataEdit, id],
                function(error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Succsess',
                    });
                });
            connection.release();
        })
    },
    // Delete data coffeeshop
    deleteDataCoffeeshop(req, res) {
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM tb_coffeeshop WHERE id = ?;
                `, [id],
                function(error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Success'
                    });
                });
            connection.release();
        })
    }
}