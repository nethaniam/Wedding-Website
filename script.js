// Menu
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    const btn = document.querySelector(".menu-btn");

    btn.classList.toggle("active");

    if(menu.style.width === "100%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "100%";
    }
}

const video = document.querySelector('.hero-video');

// This fires as soon as the video actually starts playing
video.onplaying = () => {
    video.classList.add('is-playing');
};

const countDownDate = new Date("Aug 29,2026 18:00:00").getTime();

const coundownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const oneDayInMs = 86400000;

    const demoElement = document.getElementById("demo");
    const subtextElement = document.querySelector(".countdown-subtext");

    if(demoElement) {
        if (distance > 0 ) {
            const days = Math.floor(distance / oneDayInMs);
        demoElement.innerHTML = days;
        }

        else if (distance < 0 && distance > -oneDayInMs){
            clearInterval(coundownFunction);
            demoElement.innerHTML = "Today is the day we say I do!"
            demoElement.classList.add("anastasia-font")
            if(subtextElement) {
                subtextElement.style.display = "none";
            }
        } else {
            clearInterval(coundownFunction);
            demoElement.innerHTML = "We said I do!";
            demoElement.classList.add("anastasia-font")
            if(subtextElement) {
                subtextElement.style.display = "none";
            }
        }
    }
}, 1000)

function setLanguage(lang) {
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');

    const video = document.getElementById('welcome-video');
    
    if (video) {
        const newVideoPath = video.getAttribute(`data-video-${lang}`);
        
        if (!video.src.includes(newVideoPath)) {
            video.src = newVideoPath;
            video.load();
            
            video.play().catch(error => {
                console.log("Video play interrupted or prevented:", error);
            });
        }
    }

    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
    });

    localStorage.setItem('preferred_lang', lang);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    setLanguage(savedLang);
});