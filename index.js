const express = require('express');
const app = express();
const PORT = 3000;

// Укажите папку для статических файлов (например, HTML, CSS)
app.use(express.static(__dirname));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
