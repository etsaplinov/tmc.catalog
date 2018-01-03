const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function(req, res, next) {
    res.json({});
});

router.get('/categories', function(req, res, next) {

    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('***', '***', '***', {
        host: '176.***',
        dialect: 'mssql',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },

        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false
    });

    const Category = sequelize.define('Categories', {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Name: Sequelize.STRING,
        DateCreate: Sequelize.DATE
    }, {
        timestamps: false,
    });

    Category.findAll({
        // attributes: ['Id', 'Name', 'DateCreate']
    }).then(categories => res.json(categories));

    // res.json(categories);


    // (async() => {
    //     try {
    //         //res.json({ categories: "start" });
    //         const pool = await sql.connect('mssql://evgeny:Ak2col36@176.58.60.214:1433/SQLEXPRESS/TmcDB');
    //         const result = await sql.query `select c.Name from Categories as c`;
    //         sql.close();
    //         res.json({ categories: result });
    //     } catch (err) {
    //         sql.close();
    //         res.json({ error: err.toString() });
    //         console.log(err);
    //     }
    // })();


});


module.exports = router;