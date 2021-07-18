var _url = 'https://amaxteur.art/valen/';

function fade() {
    $("#image").delay(6000).fadeOut("slow");
    $("#container").delay(6000).fadeOut("slow");
    $("#textSpan").delay(6000).fadeOut("slow");
}

function playAudio(key) {
    var audio = document.getElementById('audio');

    text = "";
    switch (key) {
        case "1":
            text = "uno";
            break;
        case "2":
            text = "dos";
            break;
        case "3":
            text = "tres";
            break;
        case "4":
            text = "cuatro";
            break;
        case "5":
            text = "cinco";
            break;
        case "6":
            text = "seis";
            break;
        case "7":
            text = "siete";
            break;
        case "8":
            text = "ocho";
            break;
        case "9":
            text = "nueve";
            break;
        case "0":
            text = "cero";
            break;
        case "a":
            text = "auto";
            break;
        case "b":
            text = "barco";
            break;
        case "c":
            text = "camión";
            break;
        case "d":
            text = "dinosaurio";
            break;
        case "e":
            text = "elefante";
            break;
        case "f":
            text = "foca";
            break;
        case "g":
            text = "gato";
            break;
        case "h":
            text = "helado";
            break;
        case "i":
            text = "isla";
            break;
        case "j":
            text = "jirafa";
            break;
        case "k":
            text = "koala";
            break;
        case "l":
            text = "león";
            break;
        case "m":
            text = "moto";
            break;
        case "n":
            text = "naranja";
            break;
        case "o":
            text = "oso";
            break;
        case "p":
            text = "perro";
            break;
        case "q":
            text = "queso";
            break;
        case "r":
            text = "robot";
            break;
        case "s":
            text = "sol";
            break;
        case "t":
            text = "tractor";
            break;
        case "u":
            text = "uva";
            break;
        case "v":
            text = "vaca";
            break;
        case "w":
            text = "";
            break;
        case "x":
            text = "xilofón";
            break;
        case "y":
            text = "yoyo";
            break;
        case "z":
            text = "zorro";
            break;
        case "to":
            text = "tortuga";
            break;
        case "glo":
            text = "globo";
            break;
        case "arc":
            text = "Arcoiris";
            break;
        case "cie":
            text = "cielo";
            break;
        case "nube":
            text = "nube";
            break;
    }

    audio.src = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=es-AR&q=" + text + "";
    // audio.crossOrigin = 'anonymous';
    // audio.setAttribute('crossorigin', 'anonymous');
    audio.load();
    audio.play();

    var container = document.getElementById('container');
    container.style.display = 'block';

    var textSpan = document.getElementById('textSpan');
    textSpan.style.display = 'block';
    textSpan.innerText = text;

    fade();
}

function showImage(key) {
    var image = document.getElementById('image');
    image.style.display = 'inline';

    image.src = _url + "media/" + key + ".png";

    fade();
}

addEventListener("keydown", function(e) {
    var KeyID = e.key;
    // alert(e.which);
    if (e.which > 43 && e.which <= 90) {

        playAudio(KeyID);
        showImage(KeyID);
    }
});

function resize() {
    var overlay = document.getElementById('overlay_slider_land');
    overlay.style.bottom = '1px';

    // var container = document.getElementById('containergeneral');
    // container.style.marginTop = '80px';

}