const consoleOutput = document.getElementById('console-output');

const logs = [
    { text: "BIOS Version 3.94 (ST. MARTINS UNIV. BUILD)", type: "log-info" },
    { text: "CPU: MICAH-DALLY-CORE @ 4.20GHz", type: "log-info" },
    { text: "CHECKING RAM.......................... OK", type: "log-done" },
    { text: "INITIALIZING AGAMA_TOOLKIT_BACKEND...", type: "log-info" },
    { text: "CONNECTING TO COSMOS_DB (AZURE-WEST)...", type: "log-info" },
    { text: "SUCCESS: CONNECTION ESTABLISHED.", type: "log-done" },
    { text: "MOUNTING /DEV/WIKIMON_GO...", type: "log-info" },
    { text: "WARNING: AWS_API_KEY EXPIRES IN 4820 DAYS", type: "log-warn" },
    { text: "LOADING PROJECT_MANIFEST.EXE...", type: "log-info" },
    { text: "SYSTEM READY. WELCOME, VISITOR.", type: "log-done" }
];

async function runBootSequence() {
    for (const log of logs) {
        const p = document.createElement('p');
        p.className = log.type;
        p.style.margin = "0";
        p.innerText = `> ${log.text}`;
        consoleOutput.appendChild(p);

        const delay = Math.floor(Math.random() * 400) + 100;
        await new Promise(resolve => setTimeout(resolve, delay));

        window.scrollTo(0, document.body.scrollHeight);
    }
}

document.addEventListener('DOMContentLoaded', runBootSequence);