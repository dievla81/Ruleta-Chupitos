const penitencias = [
    "TOMA UN SHOT Y CUENTA UN CHISTE.",
    "SHOT SORPRESA: EL GRUPO DECIDE.",
    "VERDAD O SHOT.",
    "TOMA UN SHOT CON UN RETO DE MÍMICA.",
    "RETO O SHOT.",
    "PIEDRA, PAPEL O TIJERA CON QUIEN ELIJAS. PIERDE = TOMA UN SHOT.",
    "REPARTE 3 SHOT.",
    "TOMA UN SHOT Y HAZ UNA IMITACIÓN.",
    "TODOS TOMAN.",
    "TOMA 2 SHOT.",
    "EL MAYOR TOMA 2 SHOT.",
    "GIRA OTRA VEZ Y CUMPLE AMBAS PENITENCIAS (TOMA UN SHOT).",
    "TOMA 2 SHOT SI HAS LLEGADO TARDE A UNA CITA.",
    "ELIGE A ALGUIEN PARA QUE TOME UN SHOT.",
    "ELIGE QUIÉN TOMA 2 SHOT.",
    "EL MÁS JOVEN TOMA UN SHOT.",
    "ELIGE DOS PERSONAS PARA QUE TOMEN UN SHOT.",
    "EL MÁS SOLTERO TOMA 2 SHOT.",
    "EL QUE LLEGÓ ÚLTIMO TOMA UN SHOT",
    "HAZ REÍR AL GRUPO EN 30 SEGUNDOS",
    "IMITA A ALGUIEN DE LA REUNIÓN",
    "BAILA LA CANCIÓN QUE ELIJAN",
    "CONFIESA UN MOMENTO VERGONZOSO",
    "DI TU CRUSH FAMOSO",
    "CANTA COMO ARTISTA PROFESIONAL",
    "RESPONDE UNA PREGUNTA INCÓMODA",
    "HAZ UNA POSE DE MODELO",
    "DILE 3 CUMPLIDOS A ALGUIEN",
    "ACTÚA UNA ESCENA de NOVELA",
    "DEJA QUE ELIJAN TU APODO POR 10 MINUTOS",
    "RETO DOBLE: ELIGE A UN COMPAÑERO",
    "EL GRUPO ELIGE TU BRINDIS",
    "TOMA UN SHOT Y CANTA UN CORO",
    "CUENTA UNA ANÉCDOTA VERGONZOSA",
    "HAZ UNA DECLARACIÓN DRAMÁTICA",
    "ELIGE A ALGUIEN PARA UN BRINDIS",
    "DI 3 COSAs QUE TE HACEN FELIZ",
    "HAZ UNA POSE PARA FOTO DEL GRUPO",
    "TOMA 1 TRAGO.",
    "TOMA 2 TRAGOS.",
    "ELIGE QUIÉN TOMA 2.",
    "SHOT (SI EL GRUPO ESTÁ DE ACUERDO).",
    "CUENTA UN CHISTE. SI NADIE RÍE, TOMA.",
    "HAZ UN BRINDIS CREATIVO.",
    "CAMBIA de ASIENTO CON ALGUIEN.",
    "PIEDRA, PAPEL O TIJERA CON QUIEN ELIJAS. PIERDE = BEBE.",
    "HAZ UNA POSE RIDÍCULA DURANTE UNA RONDA.",
    "PUEDES SALVARTE de UNA PENITENCIA FUTURA.",
    "TODOS BRINDAN Y TOMAN.",
    "HABLA COMO ROBOT HASTA TU PRÓXIMO TURNO.",
    "HAZ UNA IMITACIÓN de ALGUIEN del GRUPO.",
    "EL ÚLTIMO QUE LEVANTE la MANO BEBE.",
    "CANTA 15 SEGUNDOS de UNA CANCIÓN.",
    "NO PUEDES DECIR \"SÍ\" NI \"NO\" DURANTE UNA RONDA.",
    "ELIGE QUIÉN BEBE.",
    "HAZ UNA PASARELA.",
    "SHOT OPCIONAL O 3 TRAGOS.",
    "TODOS CAMBIAN de VASO (SI TODOS ESTÁN DE ACUERDO).",
    "RETO de PULSO. PIERDE = BEBE.",
    "PIEDRA, PAPEL O TIJERA CONTRA TODOS.",
    "EL MAYOR BEBE.",
    "ELIGE UN COMPAÑERO: AMBOS TOMAN.",
    "HAZ EQUILIBRIO EN UN PIE DURANTE 15 SEGUNDOS.",
    "SHOT.",
    "INVENTA UNA REGLA NUEVA.",
    "EL ÚLTIMO QUE DIGA UN COLOR PIERDE.",
    "TOMA 3 TRAGOS.",
    "INMUNIDAD PARA la SIGUIENTE RONDA.",
    "BRINDA POR ALGUIEN.",
    "EL DJ PONE la SIGUIENTE CANCIÓN.",
    "TODOS BAILAN 20 SEGUNDOS.",
    "SELFIE GRUPAL.",
    "ELIGE QUIÉN TOMA.",
    "HAZ UN CUMPLIDO A CADA PERSONA.",
    "RONDA de CHOQUE de VASOS.",
    "CUENTA UNA HISTORIA DIVERTIDA.",
    "TODOS GRITAN \"¡SALUD!\" Y BEBEN.",
    "WATERFALL (TODOS BEBEN HASTA QUE QUIEN INICIÓ DEJE de BEBER).",
    "ELIGE DOS PERSONAS PARA que BEBAN.",
    "VERDAD O TRAGO.",
    "RETO O TRAGO.",
    "NADIE PUEDE DECIR EL NOMBRE de OTRO JUGADOR DURANTE UNA RONDA.",
    "HAZ UNA IMITACIÓN de UN FAMOSO.",
    "INVENTA UNA PALABRA PROHIBIDA.",
    "INTERCAMBIA LUGAR CON ALGUIEN.",
    "GIRA OTRA VEZ Y CUMPLE AMBAS PENITENCIAS.",
    "COMODÍN (ELIGE CUALQUIER PENITENCIA).",
    "REY de la RONDA (DAS 3 TRAGOS REPARTIDOS).",
    "DOBLE CASTIGO (CUMPLE la SIGUIENTE CASILLA TAMBIÉN).",
    "ESCUDO (IGNORA la PRÓXIMA PENITENCIA).",
    "VUELVE A GIRAR.",
    "RETO ENTRE DOS JUGADORES.",
    "KARAOKE de 20 SEGUNDOS.",
    "PUBLICA UN EMOJI EN TU ESTADO O HISTORIA (SIN CONTEXTO).",
    "BRINDIS GENERAL (TODOS LEVANTAN EL VASO Y BRINDAN.)",
    "RETO RELÁMPAGO (TIENES 10 SEGUNDOS PARA CUMPLIR UN RETO SIMPLE DEL GRUPO.)",
    "KARAOKE EXPRESS (CANTA 15 SEGUNDOS de CUALQUIER CANCIÓN.)",
    "DUELO (PIEDRA, PAPEL O TIJERA CONTRA ALGUIEN; EL PERDEDOR HACE UN RETO.)",
    "BAILA YA(BAILA HASTA QUE TERMINE EL CORO de UNA CANCIÓN.)",
    "HAZ REÍR (TIENES 20 SEGUNDOS PARA HACER REÍR la GRUPO.)",
    "DOBLE GIRO (GIRA DOS VECES Y CUMPLE AMBAS CASILLAS.)",
    "PALABRA PROHIBIDA (NO PUEDES DECIR “SÍ” NI “NO” HASTA TU PRÓXIMO TURNO.)",
    "REY/REINA de la RONDA (INVENTAS UNA REGLA TEMPORAL PARA TODOS.)",
    "VERDAD O TOMA 2 TRAGOS.",
    "¿QUIÉN FUE TU ÚLTIMO CRUSH? O BEBE.",
    "ENSEÑA TU ÚLTIMA SELFIE.",
    "LEE EL ÚLTIMO MENSJE QUE RECIBISTE (OMITE DATOS PRIVADOS) O BEBE.",
    "¿QUIÉN DEL GRUPO SERÍA PEOR PAREJA? EXPLICA.",
    "HAZ UNA DECLARACIÓN DRAMÁTICA de AMOR A UN OBJETO.",
    "DEJA QUE ALGUIEN PUBLIQUE UN EMOJI EN TU ESTADO (SI ACEPTAS).",
    "REPARTE 3 TRAGOS.",
    "HAZ UNA PASARELA SEXY.",
    "BAILA 30 SEGUNDOS SIN MÚSICA.",
    "DEJA QUE ALGUIEN TE CAMBIE la FOTO de PERFIL DURANTE 5 MINUTOS (SI ACEPTAS).",
    "CUENTA TU CITA MÁS INCÓMODA.",
    "HABLA CON VOZ SEDUCTORA HASTA TU PRÓXIMO TURNO.",
    "TODOS BRINDAN.",
    "ELIGE A ALGUIEN PARA BRINDAR CONTIGO.",
    "HAZ UN RETO de BAILE CON OTRA PERSONA.",
    "CUENTA UNA MENTIRA Y DEJA que ADIVINEN.",
    "EL MÁS SOLTERO BEBE.",
    "EL QUE LLEGÓ ÚLTIMO BEBE.",
    "HAZ UN PIROPO CREATIVO A ALGUIEN del GRUPO.",
    "TOMA 3 TRAGOS.",
    "CAMBIA de ASIENTO.",
    "INVENTA UNA REGLA.",
    "TODOS SEÑALAN A QUIEN CREEN QUE LIGA MÁS; QUIEN RECIBA MÁS VOTOS BEBE.",
    "ELIGE DOS PERSONAS PARA que HAGAN UN BRINDIS ESPECIAL.",
    "HAZ UNA IMITACIÓN EXAGERADA de UN INFLUENCER.",
    "CUENTA TU PEOR \"OSO\".",
    "HAZ CONTACTO VISUAL CON ALGUIEN DURANTE 10 SEGUNDOS; QUIEN SE RÍA PRIMERO BEBE.",
    "HABLA SIN REÍR DURANTE UNA RONDA.",
    "HAZ 15 SENTADILLAS O TOMA 1 TRAGO.",
    "CUENTA UNA ANÉCDOTA VERGONZOSA O TOMA 1 TRAGO.",
    "TODOS BRINDAN (QUIEN NO QUIERA BRINDAR HACE UN RETO CORTO).",
    "HAZ UNA IMITACIÓN de UN FAMOSO O TOMA 1 TRAGO.",
    "VERDAD O RETO.",
    "ELIGE A ALGUIEN PARA UN PIEDRA, PAPEL O TIJERA; EL PERDEDOR TOMA 1 TRAGO.",
    "BAILA 20 SEGUNDOS O TOMA 1 TRAGO.",
    "HAZ UN BRINDIS CREATIVO; SI EL GRUPO NO APLAUDE, TOMA 1 TRAGO.",
    "RESPONDE UNA PREGUNTA INCÓMODA O TOMA 1 TRAGO.",
    "TODOS HACEN UN BRINDIS."
];

const casillas = [
    "NARIZ DEL DIABLO",
    "TREN DE LOS ANDES",
    "CHIMBORAZO",
    "HELADO DE PAILA",
    "SULTANA DE LOS ANDES",
    "MERCADO LA MERCED",
    "RIOBAMBEÑO ASTUTO",
    "CIUDAD DE LAS PRIMICIAS",
    "PASES DEL NIÑO",
    "PÁRAMO ANDINO",
    "C.D. OLMEDO",
    "CHAGRA RIOBAMBEÑO"
];

const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-button');
const modal = document.getElementById('result-modal');
const slotName = document.getElementById('slot-name');
const slotAction = document.getElementById('slot-action');
const closeModal = document.getElementById('close-modal');
const centerLogo = document.querySelector('.center-logo');

const spinSound = new Audio('../Sonido de Ruleta.mp3');

let currentRotation = 0;

spinBtn.addEventListener('click', () => {
    spinBtn.disabled = true;
    centerLogo.style.opacity = "1";

    spinSound.currentTime = 0;
    spinSound.play().catch(e => console.log("Audio error"));

    const spinDuration = 14930;
    wheel.style.transition = `transform ${spinDuration / 1000}s cubic-bezier(0.1, 0, 0.1, 1)`;

    const extraRotation = Math.floor(Math.random() * 360);
    const totalRotation = 1800 + extraRotation;

    currentRotation += totalRotation;
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        // CORRECCIÓN DEL DESFASE:
        // El ángulo final es la rotación actual modulo 360.
        // El ángulo relativo a la flecha (arriba) es (360 - finalAngle) % 360.
        // Para corregir el desfase de una casilla, sumamos un offset o ajustamos la lista.
        const finalAngle = currentRotation % 360;
        const relativeAngle = (360 - finalAngle) % 360;

        // Si hay desfase de una casilla, ajustamos el índice:
        let indexCasilla = Math.floor(relativeAngle / 30);

        // Ajuste manual basado en el reporte del usuario:
        // "sale en la flecha C.D. Olmedo y tú devuelves Páramo Andino"
        // Olmedo es índice 10, Páramo es índice 9. Hay un desfase de -1.
        indexCasilla = (indexCasilla + 1) % 12;

        const nombreCasilla = casillas[indexCasilla];
        const randomIndex = Math.floor(Math.random() * penitencias.length);
        const accionAzar = penitencias[randomIndex];

        centerLogo.style.opacity = "0";
        slotName.innerText = nombreCasilla;
        slotAction.innerText = accionAzar;
        modal.style.display = 'flex';

        spinBtn.disabled = false;
    }, spinDuration);
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    centerLogo.style.opacity = "1";
});
