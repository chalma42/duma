const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    autoplay: {
      delay: 85000,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
  });
  
//Открываем вкладку новости по умолчанию
const news = document.querySelector('#news');
if(news) {
  news.style.display = "block";
}
//Открываем первые вкладку депутатов
const deputats = document.querySelector('#deputats');
if(deputats) {
  deputats.style.display = "block";
}
//Открываем первые вкладку структура
const history = document.querySelector('#history');
if(history) {
  history.style.display = "block";
}

//Открываем табы
function openTab(evt, value) {
  let i;
  let tabcontent = document.getElementsByClassName("content-list__content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("content-list__link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(value).style.display = "block";
  evt.currentTarget.className += " active";
}

//Открываем табы2
function openTab2(evt, value) {
  let i;
  let tabcontent = document.getElementsByClassName("my-deputat__content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("my-deputat__link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(value).style.display = "block";
  evt.currentTarget.className += " active";
}
  
//Текущий год
let currentYear = document.querySelectorAll('.current-year');
let year = new Date();
console.log(year);
currentYear.forEach(element => {
  element.textContent = year.getFullYear();
});

//О депутате, открыть полную информацию
const more = document.querySelector('#about__more');

more.onclick = function() {
  //document.querySelector('.deputat__about').classList.add('open');
  document.querySelector('.deputat__about').classList.toggle('open')
  if(document.querySelector('.deputat__about').classList.contains('open')) {
    more.innerHTML = 'Свернуть';
  } else {
    more.innerHTML = 'Показать';
  }
  
}

