// ==================== FUNCIONES PRINCIPALES ====================

function entrarAlMundo() {
    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");
    inicio.style.display = "none";
    contenido.style.display = "block";
    iniciarCorazonesFlotantes();
}

// ==================== SORPRESA CHOCOLATE ====================

function mostrarSorpresaDulce() {
    const sorpresaDiv = document.getElementById("sorpresaChoco");
    if (sorpresaDiv.style.display === "flex") {
        sorpresaDiv.style.display = "none";
    } else {
        sorpresaDiv.style.display = "flex";
        lluviaDeChocolatesCorta();
        setTimeout(() => {
            sorpresaDiv.style.display = "none";
        }, 4500);
    }
}

// ==================== MÚSICA / CANCIÓN ====================

function reproducirCancion() {
    const hintDiv = document.getElementById("playerHint");
    hintDiv.innerHTML = "🎶 'Es que alfinal usted es tierna jsjsjsjs' 🎶";
    hintDiv.style.opacity = "1";
    hintDiv.style.fontWeight = "bold";
    setTimeout(() => {
        hintDiv.innerHTML = "";
    }, 3800);
    crearNotaMusical();
    if (navigator.vibrate) navigator.vibrate(80);
}

function crearNotaMusical() {
    for (let i = 0; i < 5; i++) {
        let nota = document.createElement("div");
        nota.className = "lluvia-item";
        nota.innerHTML = "🎵";
        nota.style.left = Math.random() * 90 + 5 + "%";
        nota.style.fontSize = "1.5rem";
        document.body.appendChild(nota);
        setTimeout(() => nota.remove(), 2000);
    }
}

// ==================== SONIDO CABRITA ====================

function sonidoCabritaAnimada() {
    const divSonido = document.getElementById("baaSoundEffect");
    divSonido.innerHTML = "🐐 ¡Meeeeeeeeeeeee! 🐐 (la cabrita más tierna del universo pidiendo mimos)";
    setTimeout(() => {
        divSonido.innerHTML = "";
    }, 2500);
    crearElementoVolador("🐐", 8);
}

// ==================== CHISTE DE UVA ====================

function chisteUvaInteractivo() {
    const chisteDiv = document.getElementById("chisteUvaBox");
    chisteDiv.innerHTML = "🍇 ¿Qué le dijo una uva verde a una morada? <strong>✨¡Respira, por Dios, respira que estás morada!✨</strong> delicado este chiste kakakak<br>";
    setTimeout(() => {
        chisteDiv.innerHTML = "";
    }, 5000);
    lluviaDeUvasTemporal();
}

// ==================== LLUVIAS Y EFECTOS ====================

function lluviaDeChocolates() {
    for (let i = 0; i < 18; i++) {
        let choco = document.createElement("div");
        choco.className = "lluvia-item";
        choco.innerHTML = "🍫";
        choco.style.left = Math.random() * 100 + "vw";
        choco.style.animationDuration = 3 + Math.random() * 2 + "s";
        document.body.appendChild(choco);
        setTimeout(() => choco.remove(), 4000);
    }
    const aviso = document.createElement("div");
    aviso.innerText = "🍫 ¡Lluvia de chocolate virtual para Michell! 🍫";
    aviso.style.position = "fixed";
    aviso.style.bottom = "20px";
    aviso.style.left = "50%";
    aviso.style.transform = "translateX(-50%)";
    aviso.style.backgroundColor = "#f3e8ff";
    aviso.style.padding = "8px 18px";
    aviso.style.borderRadius = "40px";
    aviso.style.zIndex = "999";
    aviso.style.fontWeight = "bold";
    aviso.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 3000);
}

function lluviaDeChocolatesCorta() {
    for (let i = 0; i < 10; i++) {
        let choco = document.createElement("div");
        choco.className = "lluvia-item";
        choco.innerHTML = "🍬";
        choco.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(choco);
        setTimeout(() => choco.remove(), 3000);
    }
}

function lluviaDeUvasTemporal() {
    for (let i = 0; i < 12; i++) {
        let uva = document.createElement("div");
        uva.className = "lluvia-item";
        uva.innerHTML = "🍇";
        uva.style.left = Math.random() * 100 + "vw";
        uva.style.animationDuration = 2.5 + Math.random() * 1.5 + "s";
        document.body.appendChild(uva);
        setTimeout(() => uva.remove(), 3500);
    }
}

// ==================== MENSAJE SORPRESA ====================

function mensajeSorpresa() {
    const mensajeBox = document.getElementById("mensajeFinal");
    if (mensajeBox.style.display === "block") {
        mensajeBox.style.display = "none";
    } else {
        mensajeBox.style.display = "block";
        lluviaDeChocolates();
        setTimeout(() => {
            crearElementoVolador("💜", 20);
        }, 300);
    }
}

// ==================== CORAZONES FLOTANTES ====================

let intervaloCorazones;

function iniciarCorazonesFlotantes() {
    intervaloCorazones = setInterval(() => {
        crearCorazon();
    }, 800);
}

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    const randomEmoji = Math.random() > 0.5 ? "💜" : "✨";
    corazon.innerHTML = randomEmoji;
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = 24 + Math.random() * 18 + "px";
    corazon.style.animationDuration = 5 + Math.random() * 4 + "s";
    document.body.appendChild(corazon);
    setTimeout(() => corazon.remove(), 7000);
}

// ==================== ELEMENTOS VOLADORES ====================

function crearElementoVolador(emoji, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let elem = document.createElement("div");
        elem.className = "lluvia-item";
        elem.innerHTML = emoji;
        elem.style.left = Math.random() * 100 + "vw";
        elem.style.animationDuration = 2 + Math.random() * 3 + "s";
        document.body.appendChild(elem);
        setTimeout(() => elem.remove(), 4000);
    }
}

// ==================== EFECTO TOQUE (POP) ====================

document.addEventListener("click", (e) => {
    const popDiv = document.createElement("div");
    popDiv.className = "toque";
    const opciones = ["💜", "🍇", "🍫", "✨", "🌸"];
    popDiv.innerHTML = opciones[Math.floor(Math.random() * opciones.length)];
    popDiv.style.left = e.pageX - 15 + "px";
    popDiv.style.top = e.pageY - 15 + "px";
    document.body.appendChild(popDiv);
    setTimeout(() => popDiv.remove(), 900);
    if (navigator.vibrate) navigator.vibrate(30);
});

// ==================== EXPOSICIÓN GLOBAL DE FUNCIONES ====================

window.reproducirCancion = reproducirCancion;
window.mostrarSorpresaDulce = mostrarSorpresaDulce;
window.sonidoCabritaAnimada = sonidoCabritaAnimada;
window.chisteUvaInteractivo = chisteUvaInteractivo;
window.lluviaDeChocolates = lluviaDeChocolates;
window.mensajeSorpresa = mensajeSorpresa;
window.entrarAlMundo = entrarAlMundo;

// ==================== INTERACCIÓN CON TARJETAS ====================

const todasCards = document.querySelectorAll('.card');
todasCards.forEach(card => {
    card.addEventListener('click', (ev) => {
        if (!ev.target.classList.contains('clickable') && !ev.target.closest('.clickable')) {
            card.style.transform = "scale(0.99)";
            setTimeout(() => { card.style.transform = ""; }, 150);
        }
    });
});

// ==================== ELEMENTO FLOTANTE DECORATIVO ====================

const estrellaFlotante = document.createElement("div");
estrellaFlotante.className = "flotante";
estrellaFlotante.innerHTML = "🍇✨";
document.body.appendChild(estrellaFlotante);

// ==================== MENSAJE EN CONSOLA ====================

console.log("%c🌸 Mundo de Michell listo — lleno de uvas, chocolate y ternura 🌸", "color: #c084fc; font-size: 14px; font-weight: bold;");