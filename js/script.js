//genero immagini dinamicament
const images = [
    `img/01.jpg`,
    `img/02.jpg`,
    `img/03.jpg`,
    `img/04.jpg`,
    `img/05.jpg`,
]
let thumbnail = "";
let img = "";
const preview = document.querySelector(".carousel-preview");
const imgContainer = document.querySelector(".slides");
for (let i = 0 ; i < images.length ; i++ ){
    const currentImg = images[i];
    img +=
        `<li class="slide"><img src="${currentImg}" alt=""></li>`;
    thumbnail += 
        `
        <div class="img-container">
            <div class="overlay"></div>
            <img src="${currentImg}" alt="">
        </div>
        `;
}

imgContainer.innerHTML = img;
preview.innerHTML += thumbnail;
//gestione carosello
//stato iniziale
let active = 0;
const thumbnailElement = document.getElementsByClassName("img-container");
const sliderElement = document.getElementsByClassName("slide");
sliderElement[active].classList.add("active");
thumbnailElement[active].classList.add("active");

// intervallo di tempo per eseguire la funzione "autoPlay" ogni 3 secondi
let interval = setInterval(autoPlay, 3000);

//funzionalità bottoni
const nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", function() {
    // fermo l intervallo di tempo al click del btn
    clearInterval(interval);
    //eseguo la funzione in manuale
    sliderElement[active].classList.remove("active");
    thumbnailElement[active].classList.remove("active");

    if (active < images.length - 1) {
        active++ ;
    }else{
        active = 0;
    }

    sliderElement[active].classList.add("active");
    thumbnailElement[active].classList.add("active");
    //faccio ripartire l'intervallo di tempo
    interval = setInterval(autoPlay,3000);
})

//prev btn
const prevBtn = document.querySelector(".back-btn");
prevBtn.addEventListener("click", function() {
    // fermo l intervallo di tempo al click del btn
    clearInterval(interval);
    //eseguo la funzione in manuale
    sliderElement[active].classList.remove("active");
    thumbnailElement[active].classList.remove("active");

    if (active > 0) {
        active-- ;
    }else{
        active = images.length -1;
    }
    sliderElement[active].classList.add("active");
    thumbnailElement[active].classList.add("active");
    //faccio ripartire l'intervallo di tempo
    interval = setInterval(autoPlay,3000);
})


//autoplay function------------------------------------------------------------
function autoPlay (){
    sliderElement[active].classList.remove("active");
    thumbnailElement[active].classList.remove("active");

    if (active < images.length - 1) {
        active++ ;
    }else{
        active = 0;
    }

    sliderElement[active].classList.add("active");
    thumbnailElement[active].classList.add("active");
}


//blocco del carosello all' hover e reset all uscita dell hover
const container = document.querySelector(".carousel-main");
container.addEventListener("mouseover", function() {
    clearInterval(interval);
});

container.addEventListener("mouseout", function() {
    interval = setInterval(autoPlay, 3000);
});

