//imported data from other document
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let thumbnail = "";
let img = "";
const timer = 5000; //timer funzione autolpay
const preview = document.querySelector(".carousel-preview");
const imgContainer = document.querySelector(".slides");
//ciclo forEach per aggiungere immagini HTML
images.forEach((element) => {
    const currentImg = element.image;
    img += `<li class="slide"><img src="${currentImg}" alt=""></li>`;
    thumbnail += `
        <div class="img-container">
            <div class="overlay"></div>
            <img src="${currentImg}" alt="">
        </div>`;
})
imgContainer.innerHTML = img;
preview.innerHTML += thumbnail;

//gestione carosello
//stato iniziale
let active = 0;
const thumbnailElement = document.querySelectorAll(".img-container");
const sliderElement = document.querySelectorAll(".slide");
sliderElement[active].classList.add("active");
thumbnailElement[active].classList.add("active");

//impostazione active al click del thumbnail
    thumbnailElement.forEach((elem, index)=> {
    elem.addEventListener("click", function(){
        //imposto active all indice dell elemento cliccato
        active=index;
        //rimuovo active da elementi precedenti
        sliderElement.forEach(slide => slide.classList.remove("active"));
        thumbnailElement.forEach(thumbnail => thumbnail.classList.remove("active"));
        //aggiungo classe active al thumbnail corrente
        sliderElement[active].classList.add("active");
        thumbnailElement[active].classList.add("active");
        //fermo l'autoplay
        clearInterval(interval)
        //faccio ripartire l'autoplay
        interval = setInterval(autoPlay, timer);
    });
})
// intervallo di tempo per eseguire la funzione "autoPlay" ogni 3 secondi
let interval = setInterval(autoPlay, timer);

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
    interval = setInterval(autoPlay,timer);
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
    interval = setInterval(autoPlay,timer);
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
//animazioni on hover delle immagini
const container = document.querySelector(".carousel-main");
container.addEventListener("mouseover", function() {
    clearInterval(interval);
});

container.addEventListener("mouseout", function() {
    interval = setInterval(autoPlay, timer);
});




