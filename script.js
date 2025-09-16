// --- Amino Acid Data (with 'groups' and correct image paths) ---
const AA_DATA = [
    { name: "Alanine", oneLetter: "A", threeLetter: "Ala", properties: ["Nonpolar", "Aliphatic"], structureImage: "assets/amino_acid_structures/alanine.png", sheetAffinity: "Low", turnAffinity: "Moderate", groups: ["nonpolar"] },
    { name: "Arginine", oneLetter: "R", threeLetter: "Arg", properties: ["Polar", "Basic", "Positively Charged"], structureImage: "assets/amino_acid_structures/arginine.png", sheetAffinity: "Low", turnAffinity: "Moderate", groups: ["polar", "charged", "basic"] },
    { name: "Asparagine", oneLetter: "N", threeLetter: "Asn", properties: ["Polar", "Neutral", "Amide"], structureImage: "assets/amino_acid_structures/asparagine.png", sheetAffinity: "Low", turnAffinity: "Very High", groups: ["polar"] },
    { name: "Aspartic Acid", oneLetter: "D", threeLetter: "Asp", properties: ["Polar", "Acidic", "Negatively Charged"], structureImage: "assets/amino_acid_structures/aspartic_acid.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar", "charged", "acidic"] },
    { name: "Cysteine", oneLetter: "C", threeLetter: "Cys", properties: ["Nonpolar", "Sulfur-containing", "Special"], structureImage: "assets/amino_acid_structures/cysteine.png", sheetAffinity: "High", turnAffinity: "Low", groups: ["nonpolar", "special"] },
    { name: "Glutamic Acid", oneLetter: "E", threeLetter: "Glu", properties: ["Polar", "Acidic", "Negatively Charged"], structureImage: "assets/amino_acid_structures/glutamic_acid.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar", "charged", "acidic"] },
    { name: "Glutamine", oneLetter: "Q", threeLetter: "Gln", properties: ["Polar", "Neutral", "Amide"], structureImage: "assets/amino_acid_structures/glutamine.png", sheetAffinity: "Low", turnAffinity: "Moderate", groups: ["polar"] },
    { name: "Glycine", oneLetter: "G", threeLetter: "Gly", properties: ["Nonpolar", "Aliphatic", "Smallest", "Special"], structureImage: "assets/amino_acid_structures/glycine.png", sheetAffinity: "Low", turnAffinity: "Very High", groups: ["nonpolar", "special"] },
    { name: "Histidine", oneLetter: "H", threeLetter: "His", properties: ["Polar", "Basic", "Positively Charged", "Aromatic"], structureImage: "assets/amino_acid_structures/histidine.png", sheetAffinity: "Low", turnAffinity: "Moderate", groups: ["polar", "charged", "basic"] },
    { name: "Isoleucine", oneLetter: "I", threeLetter: "Ile", properties: ["Nonpolar", "Aliphatic", "Hydrophobic", "Branched-Chain"], structureImage: "assets/amino_acid_structures/isoleucine.png", sheetAffinity: "Very High", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Leucine", oneLetter: "L", threeLetter: "Leu", properties: ["Nonpolar", "Aliphatic", "Hydrophobic", "Branched-Chain"], structureImage: "assets/amino_acid_structures/leucine.png", sheetAffinity: "Moderate", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Lysine", oneLetter: "K", threeLetter: "Lys", properties: ["Polar", "Basic", "Positively Charged"], structureImage: "assets/amino_acid_structures/lysine.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar", "charged", "basic"] },
    { name: "Methionine", oneLetter: "M", threeLetter: "Met", properties: ["Nonpolar", "Sulfur-containing"], structureImage: "assets/amino_acid_structures/methionine.png", sheetAffinity: "Moderate", turnAffinity: "Low", groups: ["nonpolar", "special"] },
    { name: "Phenylalanine", oneLetter: "F", threeLetter: "Phe", properties: ["Nonpolar", "Aromatic", "Hydrophobic"], structureImage: "assets/amino_acid_structures/phenylalanine.png", sheetAffinity: "High", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Proline", oneLetter: "P", threeLetter: "Pro", properties: ["Nonpolar", "Imino Acid", "Ring Structure"], structureImage: "assets/amino_acid_structures/proline.png", sheetAffinity: "Low", turnAffinity: "Very High", groups: ["nonpolar", "special"] },
    { name: "Serine", oneLetter: "S", threeLetter: "Ser", properties: ["Polar", "Neutral", "Hydroxyl"], structureImage: "assets/amino_acid_structures/serine.png", sheetAffinity: "Low", turnAffinity: "High", groups: ["polar"] },
    { name: "Threonine", oneLetter: "T", threeLetter: "Thr", properties: ["Polar", "Neutral", "Hydroxyl", "Branched-Chain"], structureImage: "assets/amino_acid_structures/threonine.png", sheetAffinity: "Moderate", turnAffinity: "Moderate", groups: ["polar"] },
    { name: "Tryptophan", oneLetter: "W", threeLetter: "Trp", properties: ["Nonpolar", "Aromatic", "Largest"], structureImage: "assets/amino_acid_structures/tryptophan.png", sheetAffinity: "High", turnAffinity: "Low", groups: ["nonpolar"] },
    { name: "Tyrosine", oneLetter: "Y", threeLetter: "Tyr", properties: ["Polar", "Aromatic", "Hydroxyl"], structureImage: "assets/amino_acid_structures/tyrosine.png", sheetAffinity: "High", turnAffinity: "Low", groups: ["polar"] },
    { name: "Valine", oneLetter: "V", threeLetter: "Val", properties: ["Nonpolar", "Aliphatic", "Hydrophobic", "Branched-Chain"], structureImage: "assets/amino_acid_structures/valine.png", sheetAffinity: "Very High", turnAffinity: "Low", groups: ["nonpolar"] }
];

const ALL_PROPERTIES = [...new Set(AA_DATA.flatMap(aa => aa.properties))].sort();
const ALL_AFFINITIES = ["Very Low", "Low", "Moderate", "High", "Very High"];

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
const openQuestionToggle = document.getElementById('open-question-mode');
const repeatIncorrectToggle = document.getElementById('repeat-incorrect');
const infiniteRepeatToggle = document.getElementById('infinite-repeat');

// Game Elements
const flashcard = document.querySelector('.flashcard');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const hintBtn = document.getElementById('hint-btn');
const mcqOptionsContainer = document.getElementById('mcq-options');
const openQuestionArea = document.getElementById('open-question-area');
const submitAnswerBtn = document.getElementById('submit-answer-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const sessionProgress = document.getElementById('session-progress');

// Modal Elements
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
    currentQuestionData: null,
    currentMode: null,
    sessionQuestions: [],
    failedQuestions: [],
    currentCardIndex: 0,
    correctCount: 0,
    incorrectCount: 0,
    totalQuestions: 0
};

const userSettings = {
    gameMode: 'properties',
    selectedAminoAcids: AA_DATA.map(aa => aa.name),
    repetitions: 1,
    openQuestionMode: false,
    repeatIncorrect: true,
    infiniteRepeat: false
};

let stats = {};

// --- Helper & Navigation ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function normalizeAnswer(str) {
    if (!str) return "";
    return str.toLowerCase().trim().replace(/[\s-_]/g, '');
}

function saveSettings() {
    localStorage.setItem('aminoAcidMasterSettings', JSON.stringify(userSettings));
}

function loadSettings() {
    const saved = localStorage.getItem('aminoAcidMasterSettings');
    if (saved) Object.assign(userSettings, JSON.parse(saved));
    repetitionsInput.value = userSettings.repetitions;
    openQuestionToggle.checked = userSettings.openQuestionMode;
    repeatIncorrectToggle.checked = userSettings.repeatIncorrect;
    infiniteRepeatToggle.checked = userSettings.infiniteRepeat;
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

function getPropertyBubbleClass(property) {
    const p = property.toLowerCase();
    if (['positive', 'negative', 'acidic', 'basic'].some(s => p.includes(s))) return 'bubble-charge';
    if (['polar', 'nonpolar', 'hydrophobic'].some(s => p.includes(s))) return 'bubble-polarity';
    if (['aliphatic', 'aromatic', 'branched', 'ring'].some(s => p.includes(s))) return 'bubble-structure';
    return 'bubble-special';
}

// --- Study Mode ---
function renderStudyMode() {
    studyDeck.innerHTML = AA_DATA.map(aa => `
        <div class="study-card">
            <div class="study-card-header">
                <h3>${aa.name}</h3>
                <p>${aa.threeLetter} / ${aa.oneLetter}</p>
            </div>
            <img src="${aa.structureImage}" alt="${aa.name}" class="structure-image">
            <div class="study-card-properties">
                ${aa.properties.map(prop => `<div class="property-bubble ${getPropertyBubbleClass(prop)}">${prop}</div>`).join('')}
            </div>
            <div class="study-card-details">
                <p><strong>Sheet Affinity:</strong> ${aa.sheetAffinity}</p>
                <p><strong>Turn Affinity:</strong> ${aa.turnAffinity}</p>
            </div>
        </div>`).join('');
    showScreen('study-screen', 'Study Mode');
}

// --- Settings Logic ---
function populateCheckboxes() {
    aminoAcidSelectionGrid.innerHTML = AA_DATA.map(aa => `<label><input type="checkbox" value="${aa.name}">${aa.name}</label>`).join('');
}

function updateCheckboxes() {
    const checkboxes = aminoAcidSelectionGrid.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => { cb.checked = userSettings.selectedAminoAcids.includes(cb.value); });
}

function handleQuickSelect(event) {
    const { select, target } = event.target.dataset;
    if (!select || !target) return;
    
    if (target === 'amino-acids') {
        if (select === 'all') userSettings.selectedAminoAcids = AA_DATA.map(aa => aa.name);
        else if (select === 'none') userSettings.selectedAminoAcids = [];
        else userSettings.selectedAminoAcids = AA_DATA.filter(aa => aa.groups.includes(select)).map(aa => aa.name);
    }
    updateCheckboxes();
}

// --- Quiz Logic ---
function startQuiz(event) {
    const gameMode = event.currentTarget.dataset.mode;
    userSettings.gameMode = gameMode;
    userSettings.selectedAminoAcids = Array.from(aminoAcidSelectionGrid.querySelectorAll('input:checked')).map(cb => cb.value);
    userSettings.repetitions = parseInt(repetitionsInput.value, 10);
    userSettings.openQuestionMode = openQuestionToggle.checked;
    userSettings.repeatIncorrect = repeatIncorrectToggle.checked;
    userSettings.infiniteRepeat = infiniteRepeatToggle.checked;
    saveSettings();

    if (userSettings.selectedAminoAcids.length === 0) {
        alert("Please select at least one amino acid from the Quiz Settings.");
        return;
    }

    const sourceDeck = AA_DATA.filter(aa => userSettings.selectedAminoAcids.includes(aa.name));
    let quizDeck = [];
    
    let allowedQuestionTypes = [];
    if (gameMode === 'properties') allowedQuestionTypes = ['name-to-properties', 'property-to-names'];
    else if (gameMode === 'affinity') allowedQuestionTypes = ['name-to-affinity'];
    else if (gameMode === 'abbreviations') allowedQuestionTypes = ['abbreviation-to-name'];
    else if (gameMode === 'shuffle') allowedQuestionTypes = ['name-to-properties', 'property-to-names', 'name-to-affinity', 'abbreviation-to-name'];

    for (let i = 0; i < userSettings.repetitions; i++) {
        for (const aa of sourceDeck) {
            if (allowedQuestionTypes.includes('name-to-properties')) quizDeck.push({ aa, mode: 'name-to-properties' });
            if (allowedQuestionTypes.includes('name-to-affinity')) {
                quizDeck.push({ aa, mode: 'name-to-affinity', affinityType: 'Sheet' });
                quizDeck.push({ aa, mode: 'name-to-affinity', affinityType: 'Turn' });
            }
            if (allowedQuestionTypes.includes('abbreviation-to-name')) {
                 quizDeck.push({ aa, mode: 'abbreviation-to-name', codeType: 'oneLetter' });
                 quizDeck.push({ aa, mode: 'abbreviation-to-name', codeType: 'threeLetter' });
            }
        }
        if (allowedQuestionTypes.includes('property-to-names')) {
            const numPropQuestions = Math.ceil(sourceDeck.length * 0.75);
            for (let j = 0; j < numPropQuestions; j++) {
                quizDeck.push({ aa: null, mode: 'property-to-names' });
            }
        }
    }

    gameState.sessionQuestions = shuffleArray(quizDeck);
    gameState.totalQuestions = quizDeck.length;
    gameState.failedQuestions = [];
    gameState.currentCardIndex = 0;
    gameState.correctCount = 0;
    gameState.incorrectCount = 0;

    stats = { startTime: Date.now(), bestStreak: 0, currentStreak: 0, askedByAA: {}, wrongByAA: {} };

    showScreen('game-area', 'Quiz Mode');
    loadNextQuestion();
}

function loadNextQuestion() {
    if (gameState.currentCardIndex >= gameState.sessionQuestions.length) {
        if (userSettings.repeatIncorrect && gameState.failedQuestions.length > 0) {
            gameState.sessionQuestions = shuffleArray([...gameState.failedQuestions]);
            gameState.totalQuestions = gameState.sessionQuestions.length;
            gameState.failedQuestions = [];
            gameState.currentCardIndex = 0;
            loadNextQuestion();
        } else {
            endSession();
        }
        return;
    }
    const currentQuestion = gameState.sessionQuestions[gameState.currentCardIndex];
    gameState.currentQuestionData = currentQuestion;
    gameState.currentMode = currentQuestion.mode;
    renderQuestion(currentQuestion);
}

function renderQuestion(question) {
    if (userSettings.openQuestionMode) {
        renderOpenQuestion(question);
    } else {
        renderMCQQuestion(question);
    }
}

function renderMCQQuestion(question) {
    const { aa, mode, affinityType, codeType } = question;
    let frontHTML = '', showHint = false;
    
    mcqOptionsContainer.innerHTML = '';
    mcqOptionsContainer.classList.remove('hidden');
    openQuestionArea.classList.add('hidden');
    submitAnswerBtn.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');

    switch (mode) {
        case 'property-to-names': {
            submitAnswerBtn.classList.remove('hidden');
            const sourceAAs = AA_DATA.filter(a => userSettings.selectedAminoAcids.includes(a.name));
            const questionProperty = shuffleArray(ALL_PROPERTIES)[0];
            gameState.currentQuestionData.questionProperty = questionProperty;
            const correctAnswers = sourceAAs.filter(a => a.properties.includes(questionProperty));
            const distractors = sourceAAs.filter(a => !a.properties.includes(questionProperty));
            
            let choices = [];
            const numCorrect = Math.min(correctAnswers.length, Math.floor(Math.random() * 2) + 1);
            choices.push(...shuffleArray(correctAnswers).slice(0, numCorrect));
            choices.push(...shuffleArray(distractors).slice(0, 4 - choices.length));
            
            gameState.currentQuestionData.correctAnswerNames = choices.filter(c => c.properties.includes(questionProperty)).map(c => c.name);
            gameState.currentQuestionData.options = choices.map(c => c.name);
            
            frontHTML = `<p class="question-title">Select all amino acids that are...</p><h2 class="question-content-name">${questionProperty}</h2>`;
            shuffleArray(choices).forEach(choice => {
                mcqOptionsContainer.innerHTML += `<button class="mcq-btn text-only" data-name="${choice.name}">${choice.name}</button>`;
            });
            break;
        }
        case 'name-to-properties': {
            showHint = true;
            frontHTML = `<p class="question-title">Which are the correct properties for...</p><h2 class="question-content-name">${aa.name}</h2><img src="${aa.structureImage}" alt="${aa.name}" class="question-content-image">`;
            const choices = generatePropertySetChoices(aa);
            choices.forEach(choice => {
                mcqOptionsContainer.innerHTML += `<button class="mcq-btn" data-correct="${choice.correct}">${choice.html}</button>`;
            });
            break;
        }
        case 'name-to-affinity': {
             showHint = true;
             frontHTML = `<p class="question-title">What is the <strong>${affinityType} Affinity</strong> for...</p><h2 class="question-content-name">${aa.name}</h2><img src="${aa.structureImage}" alt="${aa.name}" class="question-content-image">`;
             const correctAnswer = aa[`${affinityType.toLowerCase()}Affinity`];
             const choices = [{ text: correctAnswer, correct: true }];
             const distractors = shuffleArray(ALL_AFFINITIES.filter(aff => aff !== correctAnswer)).slice(0, 3);
             distractors.forEach(d => choices.push({ text: d, correct: false }));
             shuffleArray(choices).forEach(choice => {
                mcqOptionsContainer.innerHTML += `<button class="mcq-btn text-only" data-correct="${choice.correct}">${choice.text}</button>`;
             });
            break;
        }
        case 'abbreviation-to-name': {
            const abbreviation = aa[codeType];
            frontHTML = `<p class="question-title">Which amino acid is this?</p><h2 class="question-content-name">${abbreviation}</h2>`;
            const choices = [{ text: aa.name, correct: true }];
            const distractors = shuffleArray(AA_DATA.filter(d => d.name !== aa.name)).slice(0, 3);
            distractors.forEach(d => choices.push({ text: d.name, correct: false }));
            shuffleArray(choices).forEach(choice => {
                mcqOptionsContainer.innerHTML += `<button class="mcq-btn text-only" data-correct="${choice.correct}">${choice.text}</button>`;
            });
            break;
        }
    }
    cardFront.innerHTML = frontHTML;
    renderBackCard(question);
    hintBtn.classList.toggle('hidden', !showHint);
    flashcard.classList.remove('flipped');
    updateProgress();
}

function renderOpenQuestion(question) {
    const { aa, mode, affinityType, codeType } = question;
    let frontHTML = '', showHint = false, inputHTML = '';

    mcqOptionsContainer.classList.add('hidden');
    openQuestionArea.classList.remove('hidden');
    openQuestionArea.innerHTML = '';
    submitAnswerBtn.classList.remove('hidden');
    nextQuestionBtn.classList.add('hidden');

    switch(mode) {
        case 'property-to-names': {
            const questionProperty = shuffleArray(ALL_PROPERTIES)[0];
            gameState.currentQuestionData.questionProperty = questionProperty;
            const correctAnswers = AA_DATA.filter(a => a.properties.includes(questionProperty));
            gameState.currentQuestionData.correctAnswerNames = correctAnswers.map(a => a.name);
            frontHTML = `<p class="question-title">List all amino acids that are...</p><h2 class="question-content-name">${questionProperty}</h2>`;
            const numInputs = correctAnswers.length > 0 ? correctAnswers.length : 1;
            inputHTML = Array(numInputs).fill(0).map((_, i) => `<input type="text" class="open-question-input" placeholder="Amino Acid ${i+1}">`).join('');
            break;
        }
        case 'name-to-properties': {
            showHint = true;
            frontHTML = `<p class="question-title">List the properties of...</p><h2 class="question-content-name">${aa.name}</h2><img src="${aa.structureImage}" alt="${aa.name}" class="question-content-image">`;
            inputHTML = aa.properties.map((_, i) => `<input type="text" class="open-question-input" placeholder="Property ${i+1}">`).join('');
            break;
        }
        case 'name-to-affinity': {
            showHint = true;
            frontHTML = `<p class="question-title">What is the <strong>${affinityType} Affinity</strong> for...</p><h2 class="question-content-name">${aa.name}</h2><img src="${aa.structureImage}" alt="${aa.name}" class="question-content-image">`;
            inputHTML = `<input type="text" class="open-question-input" placeholder="Affinity (e.g., High)">`;
            break;
        }
        case 'abbreviation-to-name': {
            const abbreviation = aa[codeType];
            frontHTML = `<p class="question-title">Which amino acid is this?</p><h2 class="question-content-name">${abbreviation}</h2>`;
            inputHTML = `<input type="text" class="open-question-input" placeholder="Amino Acid Name">`;
            break;
        }
    }

    cardFront.innerHTML = frontHTML;
    openQuestionArea.innerHTML = inputHTML;
    renderBackCard(question);
    hintBtn.classList.toggle('hidden', !showHint);
    flashcard.classList.remove('flipped');
    updateProgress();
}

function renderBackCard(question) {
    const { aa, mode } = question;
    if (mode === 'property-to-names') {
        const { questionProperty, options } = gameState.currentQuestionData;
        const allCorrectAAs = AA_DATA.filter(a => a.properties.includes(questionProperty)).map(a => a.name);
        cardBack.innerHTML = `
            <h3>Property: ${questionProperty}</h3>
            <p class="codes">Correct Amino Acids:</p>
            <div class="answer-list-container">
                <ul class="answer-list">
                    ${allCorrectAAs.map(name => `<li class="${(options || []).includes(name) ? 'highlight' : ''}">${name}</li>`).join('')}
                </ul>
            </div>`;
    } else {
        cardBack.innerHTML = `
            <h3>${aa.name}</h3>
            <p class="codes">${aa.threeLetter} / ${aa.oneLetter}</p>
            <img src="${aa.structureImage}" alt="Structure" class="structure-image">
            <div class="details">
                <p><strong>Properties:</strong> ${aa.properties.join(', ')}</p>
                <p><strong>Sheet Affinity:</strong> ${aa.sheetAffinity}</p>
                <p><strong>Turn Affinity:</strong> ${aa.turnAffinity}</p>
            </div>`;
    }
}

function generatePropertySetChoices(correctAA) {
    const toBubbleHTML = props => props.map(p => `<div class="property-bubble ${getPropertyBubbleClass(p)}">${p}</div>`).join('');
    const toPropertyKey = props => [...props].sort().join(',');

    const correctAnswerHTML = toBubbleHTML(correctAA.properties);
    const correctAnswerKey = toPropertyKey(correctAA.properties);

    let choices = [{ html: correctAnswerHTML, correct: true }];
    let usedKeys = new Set([correctAnswerKey]);

    let distractors = shuffleArray([...AA_DATA]);
    for (const randomAA of distractors) {
        if (choices.length >= 4) break;
        const distractorKey = toPropertyKey(randomAA.properties);
        if (!usedKeys.has(distractorKey)) {
            usedKeys.add(distractorKey);
            choices.push({ html: toBubbleHTML(randomAA.properties), correct: false });
        }
    }
    return shuffleArray(choices);
}

function handleAnswerInteraction(event) {
    const target = event.target.closest('.mcq-btn');
    if (!target) return;

    if (gameState.currentMode === 'property-to-names') {
        target.classList.toggle('selected');
    } else {
        checkSingleAnswer(target);
    }
}

function checkSingleAnswer(selectedButton) {
    const isCorrect = selectedButton.dataset.correct === 'true';
    processAnswer(isCorrect);
    
    mcqOptionsContainer.querySelectorAll('.mcq-btn').forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') button.classList.add('correct');
        else if (button === selectedButton) button.classList.add('incorrect');
    });

    finalizeQuestion();
}

function handleSubmitAnswer() {
    if (userSettings.openQuestionMode) {
        checkOpenQuestionAnswer();
    } else {
        checkMultiSelectMCQAnswer();
    }
}

function checkMultiSelectMCQAnswer() {
    const { correctAnswerNames } = gameState.currentQuestionData;
    const selectedNames = Array.from(mcqOptionsContainer.querySelectorAll('.mcq-btn.selected')).map(b => b.dataset.name);
    const isCorrect = selectedNames.length === correctAnswerNames.length && selectedNames.every(name => correctAnswerNames.includes(name));

    mcqOptionsContainer.querySelectorAll('.mcq-btn').forEach(btn => {
        const name = btn.dataset.name;
        btn.disabled = true;
        if (correctAnswerNames.includes(name)) {
            btn.classList.add(btn.classList.contains('selected') ? 'correct' : 'missed');
        } else if (btn.classList.contains('selected')) {
            btn.classList.add('incorrect');
        }
    });
    
    processAnswer(isCorrect);
    finalizeQuestion();
}

function checkOpenQuestionAnswer() {
    const { aa, mode, affinityType, correctAnswerNames } = gameState.currentQuestionData;
    const inputs = openQuestionArea.querySelectorAll('.open-question-input');
    let isCorrect = false;

    switch(mode) {
        case 'abbreviation-to-name':
        case 'name-to-affinity': {
            const userAnswer = normalizeAnswer(inputs[0].value);
            const correctAnswer = normalizeAnswer(mode === 'abbreviation-to-name' ? aa.name : aa[`${affinityType.toLowerCase()}Affinity`]);
            isCorrect = userAnswer === correctAnswer;
            inputs[0].classList.add(isCorrect ? 'correct' : 'incorrect');
            break;
        }
        case 'name-to-properties': {
            const userAnswers = new Set(Array.from(inputs).map(i => normalizeAnswer(i.value)));
            const correctAnswers = new Set(aa.properties.map(normalizeAnswer));
            isCorrect = userAnswers.size === correctAnswers.size && [...userAnswers].every(ua => correctAnswers.has(ua));

            inputs.forEach(input => {
                input.classList.add(correctAnswers.has(normalizeAnswer(input.value)) ? 'correct' : 'incorrect');
            });
            break;
        }
        case 'property-to-names': {
            const userAnswers = new Set(Array.from(inputs).map(i => normalizeAnswer(i.value)).filter(Boolean));
            const correctAnswers = new Set(correctAnswerNames.map(normalizeAnswer));
            isCorrect = userAnswers.size === correctAnswers.size && [...userAnswers].every(ua => correctAnswers.has(ua));

            inputs.forEach(input => {
                if (input.value) {
                    input.classList.add(correctAnswers.has(normalizeAnswer(input.value)) ? 'correct' : 'incorrect');
                }
            });
            break;
        }
    }
    
    inputs.forEach(i => i.disabled = true);
    processAnswer(isCorrect);
    finalizeQuestion();
}

function processAnswer(isCorrect) {
    const { aa } = gameState.currentQuestionData;
    const name = aa ? aa.name : gameState.currentQuestionData.questionProperty;
    stats.askedByAA[name] = (stats.askedByAA[name] || 0) + 1;

    if (isCorrect) {
        gameState.correctCount++;
        stats.currentStreak++;
        stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
    } else {
        gameState.incorrectCount++;
        stats.currentStreak = 0;
        stats.wrongByAA[name] = (stats.wrongByAA[name] || 0) + 1;
        if (!gameState.failedQuestions.includes(gameState.currentQuestionData)) {
            gameState.failedQuestions.push(gameState.currentQuestionData);
        }
    }
}

function finalizeQuestion() {
    hintBtn.classList.add('hidden');
    submitAnswerBtn.classList.add('hidden');
    setTimeout(() => {
        flashcard.classList.add('flipped');
        nextQuestionBtn.classList.remove('hidden');
    }, 1200);
}

function showStructureHint() {
    const img = document.querySelector('.card-front .question-content-image');
    if (img) img.classList.add('visible');
    hintBtn.classList.add('hidden');
}

function updateProgress() {
    sessionProgress.textContent = `Question: ${gameState.currentCardIndex + 1}/${gameState.totalQuestions} | Correct: ${gameState.correctCount}`;
}

function endSession() {
    if (userSettings.infiniteRepeat) {
        restartSession();
        return;
    }

    const totalAnswered = gameState.correctCount + gameState.incorrectCount;
    const accuracy = totalAnswered ? Math.round((gameState.correctCount / totalAnswered) * 100) : 0;

    recapSubtitle.textContent = `Mode: ${userSettings.gameMode.replace(/-/g, ' ')} • AAs: ${userSettings.selectedAminoAcids.length} • Reps: ${userSettings.repetitions}`;
    recapGrade.textContent = gradeFromAccuracy(accuracy);
    recapAccuracy.textContent = `${accuracy}%`;
    recapAccuracyInline.textContent = `${accuracy}%`;
    recapTime.textContent = formatDuration(Date.now() - stats.startTime);
    recapStreak.textContent = `${stats.bestStreak}`;
    recapCorrect.textContent = `${gameState.correctCount}`;
    recapCorrectCount.textContent = `${gameState.correctCount}`;
    recapTotalCount.textContent = `${totalAnswered}`;
    recapProgressFill.style.width = `${accuracy}%`;

    const allNames = Object.keys(stats.askedByAA);
    const perfect = allNames.filter(n => (stats.wrongByAA[n] || 0) === 0);
    const practice = allNames.filter(n => (stats.wrongByAA[n] || 0) > 0);

    recapPerfectList.innerHTML = perfect.length ? perfect.map(n => `<li>${n}</li>`).join('') : `<li>—</li>`;
    recapPracticeList.innerHTML = practice.length ? practice.map(n => `<li>${n} <span class="pill pill-warn">×${stats.wrongByAA[n]}</span></li>`).join('') : `<li>None — excellent!</li>`;

    sessionCompleteModal.classList.remove('hidden');
    sessionCompleteModal.classList.add('visible');
}

function restartSession() {
    const lastModeButton = document.querySelector(`.game-mode-button[data-mode="${userSettings.gameMode}"]`);
    if(lastModeButton) lastModeButton.click();
}

// --- Event Listeners & Initialization ---
function setupEventListeners() {
    homeBtn.addEventListener('click', () => showScreen('start-screen', 'Amino Acid Master'));
    studyModeBtn.addEventListener('click', renderStudyMode);
    quickSelectContainer.addEventListener('click', handleQuickSelect);
    hintBtn.addEventListener('click', showStructureHint);
    mcqOptionsContainer.addEventListener('click', handleAnswerInteraction);
    submitAnswerBtn.addEventListener('click', handleSubmitAnswer);
    
    gameModeLauncher.querySelectorAll('.game-mode-button').forEach(button => button.addEventListener('click', startQuiz));

    nextQuestionBtn.addEventListener('click', () => {
        gameState.currentCardIndex++;
        loadNextQuestion();
    });

    restartSessionBtn.addEventListener('click', () => {
        sessionCompleteModal.classList.remove('visible');
        sessionCompleteModal.classList.add('hidden');
        restartSession();
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