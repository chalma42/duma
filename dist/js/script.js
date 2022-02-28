const swiper = new Swiper('.main-slider', {
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
const swiper2 = new Swiper('.deputat-slider', {
  // Default parameters
  slidesPerView: 5,
  autoplay: {
    delay: 112000,
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 15,
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
//Открываем первые вкладку деятельность
const decision = document.querySelector('#decision');
if(decision) {
  decision.style.display = "block";
}
//Открываем первые вкладку приемная
const reception = document.querySelector('#reception');
if(reception) {
  reception.style.display = "block";
}
//Открываем первые вкладку комитеты
const structure_committees = document.querySelector('#structure_committees');
if(structure_committees) {
  structure_committees.style.display = "block";
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
const more = document.querySelector('#about__more')
if(more) {

  more.onclick = function() {
    //document.querySelector('.deputat__about').classList.add('open');
    document.querySelector('.deputat__about').classList.toggle('open')
    if(document.querySelector('.deputat__about').classList.contains('open')) {
      more.innerHTML = 'Свернуть';
    } else {
      more.innerHTML = 'Показать';
    }
    
  }

}

//Аккордион в муниципальной службе
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//Модальное окно
let modal = document.getElementById("myModal");
let btn = document.querySelectorAll(".myBtn");
let span = document.getElementsByClassName("close")[0];
btn.forEach(element => {
  element.onclick = function() {
    modal.style.display = "block";
  }
});
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//маска телефона
$('#tel').inputmask({"mask": "+7 (999) 999-9999"}); 


/*отправка данных с формы Заправка картриджей*/
$("#feedback").submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "../lib/post.php",
    data: $("#feedback").serialize(),
    success: function(data) {
      $("#my_form_message").html(data);
    }
  });
});