const Sequelize = require('sequelize');


const sequelize = new Sequelize('TmcDB', 'evgeny', 'Ak2col36', {
    host: '176.58.60.214',
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

export const Category = sequelize.define('Categories', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Name: Sequelize.STRING,
    ParentCategoryId: Sequelize.INTEGER,
    Sorting: Sequelize.INTEGER,
    DateCreate: Sequelize.DATE
}, {
    timestamps: false,
});

export const Product = sequelize.define('Products', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Name: Sequelize.STRING,
    CategoryId: Sequelize.INTEGER,
    ShortDescription: Sequelize.STRING,
    FullDescription: Sequelize.STRING,
    DateCreate: Sequelize.DATE
}, {
    timestamps: false,
});