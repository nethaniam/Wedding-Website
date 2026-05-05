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

const heroVideo = document.querySelector('.hero-video');

heroVideo.addEventListener('playing', () => {
    heroVideo.classList.add('is-playing');
});

heroVideo.play().catch(error => {
    console.log("Autoplay prevented. This usually happens if 'muted' is missing.");
});

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
    document.body.classList.toggle('spanish-active', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');

    const videos = document.querySelectorAll('.welcome-video');
    
    videos.forEach(video => {
        const newVideoPath = video.getAttribute(`data-video-${lang}`);
        
        if (newVideoPath && !video.src.includes(newVideoPath)) {
            video.src = newVideoPath;
            video.load();
            
            video.play().catch(error => {
                console.log("Video play interrupted or prevented:", error);
            });
        }
    });

    // Handle all other text elements
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
    });

    localStorage.setItem('preferred_lang', lang);
}

document.getElementById('calendar-save').addEventListener('click', function() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    // Your specific wedding details
    const googleUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Octavio+and+Cesia's+Wedding&dates=20260829T180000/20260829T230000&location=5012+Riverview+Dr,+Jurupa+Valley,+CA+92509";    const icsFile = "wedding.ics";

    if (isIOS) {
        // Triggers the download for Apple Calendar
        window.location.href = icsFile;
    } else {
        // Opens Google Calendar in a new tab for everyone else
        window.open(googleUrl, '_blank');
    }
});


window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    setLanguage(savedLang);
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        heroVideo.play().then(() => {
            heroVideo.classList.add('is-playing');
        }).catch(error => {
            console.log("Autoplay blocked or link broken:", error);
            heroVideo.classList.add('is-playing'); 
        });

        heroVideo.addEventListener('playing', () => {
            heroVideo.classList.add('is-playing');
        });
    }
});