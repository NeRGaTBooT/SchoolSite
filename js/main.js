// Бургер-меню
const burger = document.getElementById('burger');
const navMain = document.querySelector('.main_menu');
const burgerIcon = document.getElementById('burger-icon');

burger.addEventListener('click', () => {
    if (navMain.classList.contains('active')) {
        navMain.classList.remove('active');
        setTimeout(() => {
            navMain.style.display = 'none'; // Установка display: none после анимации
        }, 300); // Длительность анимации
        burgerIcon.src = 'img/icons/menu.svg'; // Путь к изображению меню
    } else {
        navMain.style.display = 'flex'; // Установка display: block при открытии
        setTimeout(() => {
            navMain.classList.add('active'); // Добавление класса active после отображения
        }, 10); // Небольшая задержка для корректной анимации
        burgerIcon.src = 'img/icons/x.svg'; // Путь к изображению крестика
    }
});

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

document.querySelectorAll('a.anchor').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.btn_top').fadeIn();
        } else {
            $('.btn_top').fadeOut();
        }
    });


    $('.btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });


    $("#menu, #myNav").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });


});
