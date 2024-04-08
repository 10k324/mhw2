let i=0;

function cambiapanino() {
var panino=[];
panino[0]='immagini/222_desktop_it.png';
panino[1]='immagini/asiago.png';
panino[2]='immagini/baconking.png';
document.querySelector('#boxburger img').src=panino[i];
console.log('ciao');
i++;
if(i>=3)
i=0;
}

let button = document.querySelector('.pulsante');
button.addEventListener('click', cambiapanino);

document.querySelectorAll('.panino').forEach(panino => {
    panino.addEventListener('mouseover', function(){
        this.classList.add('panino2');
    });

    panino.addEventListener('mouseout', function(){
        this.classList.remove('panino2');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Aggiungi un gestore di eventi ai pulsanti "Italian Kings", "Manzo" e "Best Seller" nella barra 2
    var pulsantiItalianKings = document.querySelector('.barra2 .Italian-Kings');
    var pulsantiManzo = document.querySelector('.barra2 .Manzo');
    var pulsantiBestSeller = document.querySelector('.barra2 .Best-Seller');
    pulsantiItalianKings.addEventListener('click', function() {
        mostraPaniniCorrispondenti(this);
        cambiaColoreSfondo(this);
    });
    pulsantiManzo.addEventListener('click', function() {
        mostraPaniniCorrispondenti(this);
        cambiaColoreSfondo(this);
    });
    pulsantiBestSeller.addEventListener('click', function() {
        mostraPaniniCorrispondenti(this);
        cambiaColoreSfondo(this);
    });

    function mostraPaniniCorrispondenti(pulsante) {
        // Nascondi tutti i panini nella barra 3
        var tuttiPanini = document.querySelectorAll('.barra3 .panino');
        tuttiPanini.forEach(function(panino) {
            panino.style.display = 'none';
        });

        // Reimposta il colore di sfondo di tutti i pulsanti nella barra 2
        var tuttiPulsanti = document.querySelectorAll('.barra2 span');
        tuttiPulsanti.forEach(function(pulsante) {
            pulsante.style.backgroundColor = '';
        });

        // Se è stato cliccato il pulsante "Italian Kings"
        if (pulsante.classList.contains('Italian-Kings')) {
            // Mostra solo i panini "The Speck & Asiago burger" e "The Parmiggiano Reggiano Burger"
            var paninoSpeckAsiago = document.querySelector('.barra3 .panino[data-index="1"]');
            var paninoParmiggianoReggiano = document.querySelector('.barra3 .panino[data-index="3"]');
            paninoSpeckAsiago.style.display = 'block';
            paninoParmiggianoReggiano.style.display = 'block';
        }
        // Se è stato cliccato il pulsante "Manzo"
        else if (pulsante.classList.contains('Manzo')) {
            // Mostra solo i panini con bacon
            var paniniConBacon = document.querySelectorAll('.barra3 .panino[data-index="2"], .barra3 .panino[data-index="4"], .barra3 .panino[data-index="5"]');
            paniniConBacon.forEach(function(panino) {
                panino.style.display = 'block';
            });
        }
        // Se è stato cliccato il pulsante "Best Seller"
        else if (pulsante.classList.contains('Best-Seller')) {
            // Mostra tutti i panini
            tuttiPanini.forEach(function(panino) {
                panino.style.display = 'block';
            });
        }
    }

    function cambiaColoreSfondo(pulsante) {
        // Cambia il colore di sfondo del pulsante cliccato in arancione
        pulsante.style.backgroundColor = 'orange';
    }
});