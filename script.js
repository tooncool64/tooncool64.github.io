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