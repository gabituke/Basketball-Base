import { Sequelize } from 'sequelize'
import mysql from 'mysql2/promise'
import { Games, Scores } from '../model/index.js'


const database = {} 
const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basketball'
}

try {
    const connection = await mysql.createConnection({
        host: credentials.host,
        user: credentials.user,
        password: credentials.password
    })

    await connection.query('CREATE DATABASE IF NOT EXISTS ' + credentials.database)

    const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, { dialect: 'mysql'})

    database.Games = Games(sequelize)
    database.Scores = Scores(sequelize)

    database.Games.hasOne(database.Scores)
    database.Scores.belongsTo(database.Games)




    await sequelize.sync({ alter: true })
} catch(error) {
    console.log(error)
    console.log('Nepavyko prisijungti prie duomenų bazės');
}

export default database