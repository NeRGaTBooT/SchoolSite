// // Бургер-меню
// const burger = document.getElementById('burger');
// const navMain = document.querySelector('.main_menu');
// const burgerIcon = document.getElementById('burger-icon');

// burger.addEventListener('click', () => {
//     if (navMain.classList.contains('active')) {
//         navMain.classList.remove('active');
//         setTimeout(() => {
//             navMain.style.display = 'none'; // Установка display: none после анимации
//         }, 300); // Длительность анимации
//         burgerIcon.src = 'img/ico/menu.svg'; // Путь к изображению меню
//     } else {
//         navMain.style.display = 'flex'; // Установка display: block при открытии
//         setTimeout(() => {
//             navMain.classList.add('active'); // Добавление класса active после отображения
//         }, 10); // Небольшая задержка для корректной анимации
//         burgerIcon.src = 'img/ico/x.svg'; // Путь к изображению крестика
//     }
// });

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем активный класс у всех кнопок
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс к нажатой кнопке
        button.classList.add('active');
        console.log('sdfsdf');
        // Скрываем все содержимое
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        
        // Показываем соответствующее содержимое
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});


