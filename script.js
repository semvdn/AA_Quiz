// --- Amino Acid Data (with 'groups' and correct image paths) ---
const AA_DATA = [
    { name: "Alanine", oneLetter: "A", threeLetter: "Ala", properties: ["Nonpolar", "Aliphatic", "Hydrophobic"], structureImage: "assets/amino_acid_structures/alanine.png", sheetAffinity: "High", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Arginine", oneLetter: "R", threeLetter: "Arg", properties: ["Polar", "Basic", "Positively Charged"], structureImage: "assets/amino_acid_structures/arginine.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar", "charged", "basic"] },
    { name: "Asparagine", oneLetter: "N", threeLetter: "Asn", properties: ["Polar", "Neutral", "Amide"], structureImage: "assets/amino_acid_structures/asparagine.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar"] },
    { name: "Aspartic Acid", oneLetter: "D", threeLetter: "Asp", properties: ["Polar", "Acidic", "Negatively Charged"], structureImage: "assets/amino_acid_structures/aspartic_acid.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar", "charged", "acidic"] },
    { name: "Cysteine", oneLetter: "C", threeLetter: "Cys", properties: ["Polar", "Neutral", "Sulfhydryl"], structureImage: "assets/amino_acid_structures/cysteine.png", sheetAffinity: "Moderate", turnAffinity: "Moderate", groups: ["polar", "special"] },
    { name: "Glutamic Acid", oneLetter: "E", threeLetter: "Glu", properties: ["Polar", "Acidic", "Negatively Charged"], structureImage: "assets/amino_acid_structures/glutamic_acid.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar", "charged", "acidic"] },
    { name: "Glutamine", oneLetter: "Q", threeLetter: "Gln", properties: ["Polar", "Neutral", "Amide"], structureImage: "assets/amino_acid_structures/glutamine.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar"] },
    { name: "Glycine", oneLetter: "G", threeLetter: "Gly", properties: ["Nonpolar", "Aliphatic", "Smallest"], structureImage: "assets/amino_acid_structures/glycine.png", sheetAffinity: "Low", turnAffinity: "Very High", groups: ["nonpolar", "special"] },
    { name: "Histidine", oneLetter: "H", threeLetter: "His", properties: ["Polar", "Basic", "Positively Charged"], structureImage: "assets/amino_acid_structures/histidine.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar", "charged", "basic"] },
    { name: "Isoleucine", oneLetter: "I", threeLetter: "Ile", properties: ["Nonpolar", "Aliphatic", "Hydrophobic", "Branched Chain"], structureImage: "assets/amino_acid_structures/isoleucine.png", sheetAffinity: "Very High", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Leucine", oneLetter: "L", threeLetter: "Leu", properties: ["Nonpolar", "Aliphatic", "Hydrophobic", "Branched Chain"], structureImage: "assets/amino_acid_structures/leucine.png", sheetAffinity: "Very High", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Lysine", oneLetter: "K", threeLetter: "Lys", properties: ["Polar", "Basic", "Positively Charged"], structureImage: "assets/amino_acid_structures/lysine.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar", "charged", "basic"] },
    { name: "Methionine", oneLetter: "M", threeLetter: "Met", properties: ["Nonpolar", "Sulfur-containing"], structureImage: "assets/amino_acid_structures/methionine.png", sheetAffinity: "Moderate", turnAffinity: "Low", groups: ["nonpolar", "special"] },
    { name: "Phenylalanine", oneLetter: "F", threeLetter: "Phe", properties: ["Nonpolar", "Aromatic", "Hydrophobic"], structureImage: "assets/amino_acid_structures/phenylalanine.png", sheetAffinity: "High", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Proline", oneLetter: "P", threeLetter: "Pro", properties: ["Nonpolar", "Imino Acid", "Ring Structure"], structureImage: "assets/amino_acid_structures/proline.png", sheetAffinity: "Very Low", turnAffinity: "Very High", groups: ["nonpolar", "special"] },
    { name: "Serine", oneLetter: "S", threeLetter: "Ser", properties: ["Polar", "Neutral", "Hydroxyl"], structureImage: "assets/amino_acid_structures/serine.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar"] },
    { name: "Threonine", oneLetter: "T", threeLetter: "Thr", properties: ["Polar", "Neutral", "Hydroxyl"], structureImage: "assets/amino_acid_structures/threonine.png", sheetAffinity: "Moderate", turnAffinity: "Moderate", groups: ["polar"] },
    { name: "Tryptophan", oneLetter: "W", threeLetter: "Trp", properties: ["Nonpolar", "Aromatic", "Largest"], structureImage: "assets/amino_acid_structures/tryptophan.png", sheetAffinity: "High", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Tyrosine", oneLetter: "Y", threeLetter: "Tyr", properties: ["Polar", "Aromatic", "Hydroxyl"], structureImage: "assets/amino_acid_structures/tyrosine.png", sheetAffinity: "Moderate", turnAffinity: "Moderate", groups: ["polar"] },
    { name: "Valine", oneLetter: "V", threeLetter: "Val", properties: ["Nonpolar", "Aliphatic", "Hydrophobic", "Branched Chain"], structureImage: "assets/amino_acid_structures/valine.png", sheetAffinity: "Very High", turnAffinity: "Low", groups: ["nonpolar"] }
];

// --- DOM Elements ---
const headerTitle = document.getElementById('header-title');
const homeBtn = document.getElementById('home-btn');
const mainScreens = document.querySelectorAll('.main-screen');
const studyModeBtn = document.getElementById('study-mode-btn');
const studyDeck = document.getElementById('study-deck');

// Settings & Quiz Launch
const gameModeLauncher = document.querySelector('.game-mode-launcher');
const aminoAcidSelectionGrid = document.getElementById('amino-acid-selection');
const quickSelectContainer = document.querySelector('.quick-select-buttons');
const repetitionsInput = document.getElementById('repetitions');
const repeatIncorrectToggle = document.getElementById('repeat-incorrect');

// Game Elements
const flashcard = document.querySelector('.flashcard');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const hintBtn = document.getElementById('hint-btn');
const mcqOptionsContainer = document.getElementById('mcq-options');
const nextQuestionBtn = document.getElementById('next-question-btn');
const sessionProgress = document.getElementById('session-progress');

// Modal Elements (Report Card)
const sessionCompleteModal = document.getElementById('session-complete-modal');
const recapSubtitle = document.getElementById('recap-subtitle');
const recapGrade = document.getElementById('recap-grade');
const recapAccuracy = document.getElementById('recap-accuracy');
const recapTime = document.getElementById('recap-time');
const recapStreak = document.getElementById('recap-streak');
const recapCorrect = document.getElementById('recap-correct');
const recapProgressFill = document.getElementById('recap-progress');
const recapCorrectCount = document.getElementById('recap-correct-count');
const recapTotalCount = document.getElementById('recap-total-count');
const recapAccuracyInline = document.getElementById('recap-accuracy-inline');
const recapPerfectList = document.getElementById('recap-perfect-list');
const recapPracticeList = document.getElementById('recap-practice-list');
const restartSessionBtn = document.getElementById('restart-session-btn');
const goHomeFromCompleteBtn = document.getElementById('go-home-from-complete-btn');

// --- Game State & Settings ---
const gameState = {
    currentAminoAcid: null,
    currentMode: null,
    sessionQuestions: [],
    failedQuestions: [],
    currentCardIndex: 0,
    correctCount: 0,
    incorrectCount: 0,
    totalQuestions: 0
};

const userSettings = {
    gameMode: 'properties-to-name',
    selectedAminoAcids: AA_DATA.map(aa => aa.name),
    repetitions: 1,
    repeatIncorrect: true
};

// Lightweight session stats
let stats = {
    startTime: 0,
    bestStreak: 0,
    currentStreak: 0,
    askedByAA: {},   // name -> count shown/answered
    wrongByAA: {}    // name -> count wrong
};

// --- Helper & Navigation ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function saveSettings() {
    localStorage.setItem('aminoAcidMasterSettings', JSON.stringify(userSettings));
}
function loadSettings() {
    const saved = localStorage.getItem('aminoAcidMasterSettings');
    if (saved) Object.assign(userSettings, JSON.parse(saved));
    repetitionsInput.value = userSettings.repetitions;
    repeatIncorrectToggle.checked = userSettings.repeatIncorrect;
    updateCheckboxes();
}
function showScreen(screenId, title) {
    mainScreens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
    headerTitle.textContent = title;
    homeBtn.classList.toggle('hidden', screenId === 'start-screen');
}
function formatDuration(ms) {
    const totalSeconds = Math.max(0, Math.round(ms / 1000));
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}
function gradeFromAccuracy(acc) {
    if (acc >= 98) return 'A+';
    if (acc >= 90) return 'A';
    if (acc >= 80) return 'B';
    if (acc >= 70) return 'C';
    if (acc >= 60) return 'D';
    return 'Try Again';
}

// --- Study Mode (Reworked) ---
function renderStudyMode() {
    studyDeck.innerHTML = AA_DATA.map(aa => {
        const propertyBubbles = aa.properties
            .map(prop => `<div class="property-bubble ${getPropertyBubbleClass(prop)}">${prop}</div>`)
            .join('');

        return `
            <div class="study-card">
                <div class="study-card-header">
                    <h3>${aa.name}</h3>
                    <p>${aa.threeLetter} / ${aa.oneLetter}</p>
                </div>
                <img src="${aa.structureImage}" alt="${aa.name}" class="structure-image">
                <div class="study-card-properties">
                    ${propertyBubbles}
                </div>
                <div class="study-card-details">
                    <p><strong>Sheet Affinity:</strong> ${aa.sheetAffinity}</p>
                    <p><strong>Turn Affinity:</strong> ${aa.turnAffinity}</p>
                </div>
            </div>`;
    }).join('');
    showScreen('study-screen', 'Study Mode');
}

// --- Integrated Settings Logic ---
function populateCheckboxes() {
    aminoAcidSelectionGrid.innerHTML = AA_DATA
        .map(aa => `<label><input type="checkbox" value="${aa.name}">${aa.name}</label>`)
        .join('');
}
function updateCheckboxes() {
    const checkboxes = aminoAcidSelectionGrid.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => { cb.checked = userSettings.selectedAminoAcids.includes(cb.value); });
}
function handleQuickSelect(event) {
    const selectType = event.target.dataset.select;
    if (!selectType) return;
    if (selectType === 'all') userSettings.selectedAminoAcids = AA_DATA.map(aa => aa.name);
    else if (selectType === 'none') userSettings.selectedAminoAcids = [];
    else userSettings.selectedAminoAcids = AA_DATA.filter(aa => aa.groups.includes(selectType)).map(aa => aa.name);
    updateCheckboxes();
}

// --- Quiz Logic ---
function startQuiz(event) {
    const gameMode = event.currentTarget.dataset.mode;
    if (!gameMode) return;

    userSettings.gameMode = gameMode;
    userSettings.selectedAminoAcids = Array.from(aminoAcidSelectionGrid.querySelectorAll('input:checked')).map(cb => cb.value);
    userSettings.repetitions = parseInt(repetitionsInput.value, 10);
    userSettings.repeatIncorrect = repeatIncorrectToggle.checked;
    saveSettings();

    if (userSettings.selectedAminoAcids.length === 0) {
        alert("Please select at least one amino acid from the Quiz Settings.");
        return;
    }

    let quizDeck = [];
    const sourceDeck = AA_DATA.filter(aa => userSettings.selectedAminoAcids.includes(aa.name));
    const questionModes = ['properties-to-name', 'name-to-properties', 'name-to-affinity'];

    for (let i = 0; i < userSettings.repetitions; i++) {
        for (const aa of sourceDeck) {
            if (userSettings.gameMode === 'shuffle') {
                const randomMode = questionModes[Math.floor(Math.random() * questionModes.length)];
                quizDeck.push({ aa: aa, mode: randomMode });
            } else {
                quizDeck.push({ aa: aa, mode: userSettings.gameMode });
            }
        }
    }

    gameState.sessionQuestions = shuffleArray(quizDeck);
    gameState.totalQuestions = quizDeck.length;
    gameState.failedQuestions = [];
    gameState.currentCardIndex = 0;
    gameState.correctCount = 0;
    gameState.incorrectCount = 0;

    // reset stats
    stats = { startTime: Date.now(), bestStreak: 0, currentStreak: 0, askedByAA: {}, wrongByAA: {} };

    showScreen('game-area', 'Quiz Mode');
    loadNextQuestion();
}

function loadNextQuestion() {
    if (gameState.currentCardIndex < gameState.sessionQuestions.length) {
        const currentQuestion = gameState.sessionQuestions[gameState.currentCardIndex];
        gameState.currentAminoAcid = currentQuestion.aa;
        gameState.currentMode = currentQuestion.mode;
        renderQuestion();
    } else if (userSettings.repeatIncorrect && gameState.failedQuestions.length > 0) {
        // silently repeat missed questions until all are correct
        gameState.sessionQuestions = shuffleArray([...gameState.failedQuestions]);
        gameState.totalQuestions = gameState.sessionQuestions.length;
        gameState.failedQuestions = [];
        gameState.currentCardIndex = 0;
        loadNextQuestion();
    } else {
        endSession();
    }
}

function getPropertyBubbleClass(property) {
    const p = property.toLowerCase();
    if (p.includes('polar')) return 'bubble-polarity';
    if (p.includes('charged') || p.includes('acidic') || p.includes('basic')) return 'bubble-charge';
    if (['smallest', 'largest', 'sulfur', 'imino', 'hydroxyl'].some(s => p.includes(s))) return 'bubble-special';
    return 'bubble-structure';
}

function renderQuestion() {
    const aa = gameState.currentAminoAcid;
    const mode = gameState.currentMode;
    let frontHTML = '';
    let showHint = false;

    switch (mode) {
        case 'properties-to-name': {
            const bubbles = aa.properties.map(prop => `<div class="property-bubble ${getPropertyBubbleClass(prop)}">${prop}</div>`).join('');
            frontHTML = `<p class="question-title">Which amino acid has these properties?</p><div class="property-bubble-container">${bubbles}</div>`;
            break;
        }
        case 'name-to-properties':
            frontHTML = `<p class="question-title">Which are the correct properties for...</p><h2 class="question-content-name">${aa.name}</h2><img src="${aa.structureImage}" alt="${aa.name}" class="question-content-image">`;
            showHint = true;
            break;
        case 'name-to-affinity':
            frontHTML = `<p class="question-title">What are the structural affinities for...</p><h2 class="question-content-name">${aa.name}</h2><img src="${aa.structureImage}" alt="${aa.name}" class="question-content-image">`;
            showHint = true;
            break;
    }
    cardFront.innerHTML = frontHTML;
    cardBack.innerHTML = `
        <h3>${aa.name}</h3>
        <p class="codes">${aa.threeLetter} / ${aa.oneLetter}</p>
        <img src="${aa.structureImage}" alt="Structure" class="structure-image">
        <div class="details">
            <p><strong>Properties:</strong> ${aa.properties.join(', ')}</p>
            <p><strong>Sheet Affinity:</strong> ${aa.sheetAffinity}</p>
            <p><strong>Turn Affinity:</strong> ${aa.turnAffinity}</p>
        </div>`;

    hintBtn.classList.toggle('hidden', !showHint);

    const choices = generateMCQ(aa, mode);
    mcqOptionsContainer.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'mcq-btn';
        button.innerHTML = choice.text;
        button.dataset.correct = choice.correct;
        button.addEventListener('click', checkAnswer);
        mcqOptionsContainer.appendChild(button);
    });

    flashcard.classList.remove('flipped');
    nextQuestionBtn.classList.add('hidden');
    updateProgress();
}

function showStructureHint() {
    const img = document.querySelector('.card-front .question-content-image');
    if (img) img.classList.add('visible');
    hintBtn.classList.add('hidden');
}

function generateMCQ(correctAA, mode) {
    let choices = [];
    const getAnswer = (aa) => {
        switch (mode) {
            case 'name-to-properties': return aa.properties.join(', ');
            case 'name-to-affinity': return `Sheet: ${aa.sheetAffinity}, Turn: ${aa.turnAffinity}`;
            default: return aa.name;
        }
    };
    const correctAnswer = getAnswer(correctAA);
    choices.push({ text: correctAnswer, correct: true });
    let distractors = [];
    let availableAAs = shuffleArray([...AA_DATA]);
    for (const randomAA of availableAAs) {
        if (distractors.length >= 3) break;
        const distractorAnswer = getAnswer(randomAA);
        if (distractorAnswer !== correctAnswer && !distractors.includes(distractorAnswer)) {
            distractors.push(distractorAnswer);
        }
    }
    distractors.forEach(d => choices.push({ text: d, correct: false }));
    return shuffleArray(choices);
}

function isLastQuestionInCurrentRound() {
    return gameState.currentCardIndex === gameState.sessionQuestions.length - 1;
}

function checkAnswer(event) {
    const selectedButton = event.currentTarget;
    const isCorrect = selectedButton.dataset.correct === 'true';
    const name = gameState.currentAminoAcid.name;

    // track AA attempts
    stats.askedByAA[name] = (stats.askedByAA[name] || 0) + 1;

    if (isCorrect) {
        gameState.correctCount++;
        stats.currentStreak++;
        stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
    } else {
        gameState.incorrectCount++;
        stats.currentStreak = 0;
        stats.wrongByAA[name] = (stats.wrongByAA[name] || 0) + 1;

        // stash for repeat if enabled
        const currentQuestion = gameState.sessionQuestions[gameState.currentCardIndex];
        if (!gameState.failedQuestions.includes(currentQuestion)) {
            gameState.failedQuestions.push(currentQuestion);
        }
    }

    hintBtn.classList.add('hidden');
    mcqOptionsContainer.querySelectorAll('.mcq-btn').forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') button.classList.add('correct');
        else if (button === selectedButton) button.classList.add('incorrect');
    });

    setTimeout(() => {
        flashcard.classList.add('flipped');

        // If this was the last question of the current round, auto-advance
        if (isLastQuestionInCurrentRound()) {
            setTimeout(() => {
                gameState.currentCardIndex++;
                loadNextQuestion();
            }, 450);
        } else {
            nextQuestionBtn.classList.remove('hidden');
        }
    }, 500);
}

function updateProgress() {
    const answeredInRound = Math.min(gameState.currentCardIndex + 1, gameState.sessionQuestions.length);
    sessionProgress.textContent =
        `Question: ${answeredInRound}/${gameState.totalQuestions} | Correct: ${gameState.correctCount}`;
}

function endSession() {
    const totalAnswered = gameState.correctCount + gameState.incorrectCount;
    const accuracy = totalAnswered ? Math.round((gameState.correctCount / totalAnswered) * 100) : 0;

    // Fill header/subtitle & grade
    recapSubtitle.textContent = `Mode: ${userSettings.gameMode.replace(/-/g, ' ')} • AAs: ${userSettings.selectedAminoAcids.length} • Reps: ${userSettings.repetitions}`;
    recapGrade.textContent = gradeFromAccuracy(accuracy);

    // Stats
    recapAccuracy.textContent = `${accuracy}%`;
    recapAccuracyInline.textContent = `${accuracy}%`;
    recapTime.textContent = formatDuration(Date.now() - stats.startTime);
    recapStreak.textContent = `${stats.bestStreak}`;
    recapCorrect.textContent = `${gameState.correctCount}`;
    recapCorrectCount.textContent = `${gameState.correctCount}`;
    recapTotalCount.textContent = `${totalAnswered}`;
    recapProgressFill.style.width = `${accuracy}%`;

    // Lists
    const allNames = Object.keys(stats.askedByAA);
    const perfect = allNames.filter(n => (stats.wrongByAA[n] || 0) === 0);
    const practice = allNames.filter(n => (stats.wrongByAA[n] || 0) > 0);

    recapPerfectList.innerHTML = perfect.length
        ? perfect.map(n => `<li>${n}</li>`).join('')
        : `<li>—</li>`;

    recapPracticeList.innerHTML = practice.length
        ? practice.map(n => {
            const w = stats.wrongByAA[n] || 0;
            return `<li>${n} <span class="pill pill-warn">×${w}</span></li>`;
          }).join('')
        : `<li>None — excellent!</li>`;

    // Show modal (remove the 'hidden' class so it actually becomes visible)
    sessionCompleteModal.classList.remove('hidden');
    sessionCompleteModal.classList.add('visible');
}

// --- Event Listeners & Initialization ---
function setupEventListeners() {
    homeBtn.addEventListener('click', () => showScreen('start-screen', 'Amino Acid Master'));
    studyModeBtn.addEventListener('click', renderStudyMode);
    quickSelectContainer.addEventListener('click', handleQuickSelect);
    hintBtn.addEventListener('click', showStructureHint);
    
    gameModeLauncher.querySelectorAll('.game-mode-button').forEach(button => {
        button.addEventListener('click', startQuiz);
    });

    nextQuestionBtn.addEventListener('click', () => {
        gameState.currentCardIndex++;
        loadNextQuestion();
    });

    restartSessionBtn.addEventListener('click', () => {
        sessionCompleteModal.classList.remove('visible');
        sessionCompleteModal.classList.add('hidden');
        const lastModeButton = document.querySelector(`.game-mode-button[data-mode="${userSettings.gameMode}"]`);
        lastModeButton.click();
    });

    goHomeFromCompleteBtn.addEventListener('click', () => {
        sessionCompleteModal.classList.remove('visible');
        sessionCompleteModal.classList.add('hidden');
        showScreen('start-screen', 'Amino Acid Master');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateCheckboxes();
    loadSettings();
    setupEventListeners();
    showScreen('start-screen', 'Amino Acid Master');
});
