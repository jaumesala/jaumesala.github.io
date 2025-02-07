function delay(callback, time) {
    setTimeout(callback, time);
}

delay(animateLine, 1000);
delay(animateName, 1300);
delay(animateSkills, 2500);

function animateLine() {
    const whoElement = document.getElementById('who');
    if (whoElement) whoElement.classList.add('show-line');
}

function animateName() {
    const innerElement = document.querySelector('#who .inner');
    if (innerElement) innerElement.classList.add('fadeInRight');
}

function animateSkills() {
    const skills = document.querySelectorAll('#what .animated');
    if (!skills.length) return;

    let currentIndex = 0;

    function animateNext() {
        const current = skills[currentIndex];
        current.classList.add('fadeInUp');
        current.classList.remove('fadeOutUp');
        delay(() => {
            current.classList.add('fadeOutUp');
            current.classList.remove('fadeInUp');
            currentIndex = (currentIndex + 1) % skills.length;
            animateNext();
        }, 5000);
    }

    delay(() => animateNext(), 500);
}
