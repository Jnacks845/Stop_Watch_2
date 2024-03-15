document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');

    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const updateDisplay = () => {
        display.textContent = formatTime(elapsedTime);
    };

    const startTimer = () => {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };

    const resetTimer = () => {
        clearInterval(timerInterval);
        elapsedTime = 0;
        updateDisplay();
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
});


