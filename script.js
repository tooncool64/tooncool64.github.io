const consoleOutput = document.getElementById('console-output');
const bootScreen = document.getElementById('boot-screen');
const mainContent = document.getElementById('main-content');
const skipBtn = document.getElementById('skip-boot'); // New

let isSkipped = false;

async function runBootSequence() {
    for (const log of logs) {
        if (isSkipped) return;

        const p = document.createElement('p');
        p.className = log.type;
        p.style.margin = "0 0 5px 0";
        p.innerText = `> ${log.text}`;
        consoleOutput.appendChild(p);

        const delay = Math.floor(Math.random() * 300) + 150;
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    if (!isSkipped) {
        const clickMessage = document.createElement('p');
        clickMessage.className = 'log-info';
        clickMessage.innerText = "> PRESS ANY KEY TO BOOT GUI...";
        consoleOutput.appendChild(clickMessage);
        document.addEventListener('click', onUserClick);
    }
}

function revealSite() {
    isSkipped = true; // Stop the sequence loop
    bootScreen.style.opacity = '0';
    mainContent.classList.add('visible');

    setTimeout(() => {
        bootScreen.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }, 1000);
}

skipBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    revealSite();
});

function onUserClick() {
    document.removeEventListener('click', onUserClick);
    revealSite();
}

document.addEventListener('DOMContentLoaded', runBootSequence);

document.getElementById('resume-button').addEventListener('click', function() {
    const btnText = this.querySelector('.btn-text');
    const progressCont = document.getElementById('progress-container');
    const progressFill = document.getElementById('progress-fill');

    this.style.opacity = '0.5';
    this.style.pointerEvents = 'none';
    btnText.innerText = "REQUESTING...";
    progressCont.style.display = 'block';

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);

            const link = document.createElement('a');
            link.href = 'resources/my_resume.pdf';
            link.download = 'Micah_Dally_Resume.pdf';
            link.click();

            btnText.innerText = "DOWNLOAD COMPLETE";
            setTimeout(() => {
                btnText.innerText = "GET_RESUME.EXE";
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
                progressCont.style.display = 'none';
                progressFill.style.width = '0%';
            }, 2000);
        } else {
            width += 10;
            progressFill.style.width = width + '%';
        }
    }, 100);
});