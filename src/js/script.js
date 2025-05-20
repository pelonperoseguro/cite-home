// Animación del contador del componente CTA de la pagina del servicio de software

function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = nextYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown-days").textContent = days;
    document.getElementById("countdown-hours").textContent = hours;
    document.getElementById("countdown-minutes").textContent = minutes;
}


function main() {
    // ejecutamos el contador del CTA
    setInterval(updateCountdown, 60000);
    updateCountdown();
}

addEventListener("DOMContentLoaded", main);