const consoleOutput = document.getElementById('console-output');
const bootScreen = document.getElementById('boot-screen');
const mainContent = document.getElementById('main-content');

document.body.classList.add('no-scroll');

const logs = [
    { text: "INITIALIZING PROJECT_OS v1.2...", type: "log-info" },
    { text: "LOAD_MAPPED_DRIVE: C:\\PORTFOLIO\\PROJECTS.EXE", type: "log-info" },
    { text: "ST. MARTIN'S UNIV. CREDENTIALS VERIFIED", type: "log-done" },
    { text: "GPA: 3.94 / 4.00", type: "log-done" },
    { text: "BACKEND_SERVICES: ONLINE", type: "log-info" },
    { text: "CLOUD_INFRASTRUCTURE: CONNECTED", type: "log-info" },
    { text: "DECODING HUMAN_INTERFACE_MODULE...", type: "log-warn" },
    { text: "SYSTEM_READY_FOR_INTERVIEW.", type: "log-done" },
    { text: "CVE-1337420-A HAS NOT BEEN PATCHED IN THIS BUILD", type: "log-error"},
    { text: "PRESS ANY KEY TO BOOT GUI...", type: "log-done" }
];

async function runBootSequence() {
    for (const log of logs) {
        const p = document.createElement('p');
        p.className = log.type;
        p.style.margin = "0 0 5px 0";
        p.innerText = `> ${log.text}`;
        consoleOutput.appendChild(p);

        const delay = Math.floor(Math.random() * 300) + 150;
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    const clickMessage = document.createElement('p');
    clickMessage.className = 'log-info';
    clickMessage.innerText = "> CLICK ANYWHERE TO CONTINUE...";
    consoleOutput.appendChild(clickMessage);

    document.addEventListener('click', onUserClick);
}

function onUserClick() {
    document.removeEventListener('click', onUserClick);
    revealSite();
}

function revealSite() {
    bootScreen.style.opacity = '0';

    mainContent.classList.add('visible');

    setTimeout(() => {
        bootScreen.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }, 1000);
}

document.addEventListener('DOMContentLoaded', runBootSequence);

document.getElementById('resume-button').addEventListener('click', function() {
    const btnText = this.querySelector('.btn-text');
    const progressCont = document.getElementById('progress-container');
    const progressFill = document.getElementById('progress-fill');

    // UI Feedback
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

            // Reset
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