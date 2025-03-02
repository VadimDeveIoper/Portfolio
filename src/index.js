var options = {
    chart: {
          type: 'pie'
    },
    series: [4, 2, 1, 0],
    labels: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  
  }



var chart = new ApexCharts(document.querySelector("#chart"), options);
let sliderContent = document.querySelector('.slider_content');
let leftBtn = document.querySelector('#slider_left');
let rightBtn = document.querySelector('#slider_right');
let sliderImg = document.querySelector('#slider-img');
let sliderHeading = document.querySelector('#slider-heading');
let sliderTitle = document.querySelector('#slider-title');
let sliderRepo = document.querySelector('#slider-repo');
let sliderLink = document.querySelector('#slider-link');

const data = [{
  name:'Dragon Kombat',
  title:'Прототип Hamster Kombat. Тапаем и зарабатываем DRGN Coins',
  link:'https://vadim20122024.github.io/dragoncombat/',
  repo:'https://github.com/Vadim20122024/dragoncombat',
  img:'./img/slider/dragon.png'
},
{
  name:'Game Shop',
  title:'Магазин для покупки виртуальных вещей в игре. Есть несколько промокодов которые снижают цену',
  link:'https://vadim20122024.github.io/dragoncombat/',
  repo:'https://github.com/Vadim20122024/GameShop',
  img:'./img/slider/GameShop.png'
},
{
  name:'Exchange',
  title:'Можно перевести любую валюту на другую',
  link:'https://vadim20122024.github.io/dragoncombat/',
  repo:'https://github.com/Vadim20122024/Exchange',
  img:'./img/slider/exchange.png'
},{
  name:'Timer',
  title:'Таймер.',
  link:'https://vadim20122024.github.io/dragoncombat/',
  repo:'https://github.com/Vadim20122024/Timer',
  img:'./img/slider/timer.png'
},];

var typed = new Typed('#element', {
  strings: [' Кроссплатформенными приложениями','Кроссбраузерными приложениями','PWA приложениями','веб-сайтов', 'веб-игр', 'веб-дизайна','SPA-приложениями'],
  typeSpeed: 50,
  loop: true,
  backDelay: 1700,
});

let currentSlide = Math.floor(data.length / 2)

function loadSliderData(obj){
  const {img, name, title, link, repo} = obj;
  sliderImg.src = img;
  sliderHeading.innerHTML = name;
  sliderTitle.innerHTML = title;
  sliderLink.href = link;
  sliderRepo.href = repo;
}

function handleLeft(){
  if(currentSlide > 0){
    currentSlide--;
    loadSliderData(data[currentSlide]);
  }else{
    currentSlide = data.length - 1;
    loadSliderData(data[currentSlide]);
  }
}

function handleRight(){
  if(currentSlide < data.length - 1){
    currentSlide++;
    loadSliderData(data[currentSlide]);
  }else{
    currentSlide = 0;
    loadSliderData(data[currentSlide]);
  }
}

rightBtn.addEventListener('click', handleRight);
leftBtn.addEventListener('click', handleLeft)


chart.render();

 const bot = document.querySelector('#bot');
 const close_form = document.querySelector('#close-form')


 let isVisible = false;

 

 function openForm(){
  let form = document.querySelector('.bot_form');
  if(isVisible){
    form.style.display = 'none';
    isVisible = false;
  }else{

    form.style.display = 'flex';
    isVisible = true;
  }


 }

 

bot.addEventListener('click', openForm)