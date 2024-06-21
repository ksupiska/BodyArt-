const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Порт, на котором будет работать сервер

// Парсинг JSON тела запроса
app.use(bodyParser.json());

// Конфигурация для подключения к SQL Server
const config = {
    server: 'localhost', // Или IP адрес сервера SQL
    database: 'BodyArt',
    options: {
        encrypt: true, // Используется для подключения к зашифрованным базам данных
        enableArithAbort: true // Рекомендуется для безопасности
    }
};

// Обработчик POST запроса на регистрацию пользователя
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Подключение к базе данных
        await sql.connect(config);

        // Запрос на добавление пользователя
        const request = new sql.Request();
        const query = `INSERT INTO Users (Username, Email, PasswordHash) VALUES (@username, @email, @password)`
        request.input('Username', sql.VarChar, username);
        request.input('Email', sql.VarChar, email);
        request.input('PasswordHash', sql.VarChar, password);
        
        // Выполнение запроса
        const result = await request.query(query);
        console.log('Пользователь успешно зарегистрирован:', username);

        // Отправка успешного ответа
        res.status(200).send('Пользователь успешно зарегистрирован');
    } catch (error) {
        console.error('Ошибка при регистрации пользователя:', error);
        // Отправка ответа с ошибкой
        res.status(500).send('Ошибка при регистрации пользователя');
    } finally {
        // Закрытие подключения к базе данных
        sql.close();
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
