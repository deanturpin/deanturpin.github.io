
<div class="timer-container">
    <h1>Meeting Cost Timer</h1>
    <label for="participants">Number of Participants:</label>
    <select id="participants">
        <option value="1">1 Participant</option>
        <option value="2">2 Participants</option>
        <option value="3">3 Participants</option>
        <option value="4">4 Participants</option>
        <option value="5">5 Participants</option>
        <option value="10">10 Participants</option>
    </select>
    <div id="elapsed">Elapsed Time: 00:00:00</div>
    <div id="cost">£0.000</div>
    <div class="controls">
        <button id="startBtn">Start</button>
        <button id="pauseBtn" disabled>Pause</button>
        <button id="resetBtn">Reset</button>
    </div>
</div>
<script>
    let timer = null;
    let elapsedMilliseconds = 0;
    let isRunning = false;
    const salaryPerMillisecond = 50000 / (365 * 24 * 60 * 60 * 1000); // Average salary per millisecond for one participant
    const costDisplay = document.getElementById('cost');
    const elapsedDisplay = document.getElementById('elapsed');
    const participantsSelect = document.getElementById('participants');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');

    function calculateCost() {
        const participants = parseInt(participantsSelect.value);
        return elapsedMilliseconds * salaryPerMillisecond * participants; // Convert to thousands
    }

    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function updateDisplay() {
        const cost = calculateCost();
        costDisplay.textContent = `£${cost.toFixed(2)}`;
        elapsedDisplay.textContent = `Elapsed Time: ${formatTime(elapsedMilliseconds)}`;
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startBtn.disabled = true;
            pauseBtn.disabled = false;
            timer = setInterval(() => {
                elapsedMilliseconds += 1000; // Update every 100 ms
                updateDisplay();
            }, 1000);
        }
    }

    function pauseTimer() {
        if (isRunning) {
            isRunning = false;
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            clearInterval(timer);
        }
    }

    function resetTimer() {
        isRunning = false;
        clearInterval(timer);
        elapsedMilliseconds = 0;
        updateDisplay();
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    // Event Listeners
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    participantsSelect.addEventListener('change', updateDisplay);

    // Initialize display
    updateDisplay();
</script>

## Links

- [GitHub](https://github.com/deanturpin)
- [GitLab](https://gitlab.com/deanturpin)
- [LinkedIn](https://www.linkedin.com/in/deanturpin)
- [Docker hub](https://hub.docker.com/u/deanturpin)

## Currently reading

- [The Climate Book](https://www.amazon.co.uk/gp/product/0241547474/) -- Greta Thunberg
- [The Art of Writing Efficient Programs](https://www.amazon.co.uk/Art-Writing-Efficient-Programs-optimizations/dp/1800208111/) -- Fedor G. Pikus

## Side hustles

| Title | Description |
|-|-|
| [deanturpin/shh](https://hub.docker.com/r/deanturpin/shh) | Command line packet inspector |
| [deanturpin/gcc](https://hub.docker.com/r/deanturpin/gcc) | Nightly gcc container from source |
| [deanturpin/dev](https://hub.docker.com/r/deanturpin/dev) | C++ dev container |
| [constd](https://deanturpin.gitlab.io/constd/) | `constexpr` Standard Library functions |
| [Trading backtester (stocks)](https://deanturpin.gitlab.io/backtest/) | Backtester 2024 |
| [Trading backtester (crypto)](https://cpp.run/) | Backtester from scratch |
| [std::thread](https://germs-dev.gitlab.io/concurrency-support-library/) | C++ Concurrency Support Library |
| [The Plotting Parlour](https://germs-dev.gitlab.io/dft/) | Discrete Fourier transforms |
| [C++ recipes](https://germs-dev.gitlab.io/cpp/) | C++ idioms and good practice |
| [Learn C++ in 45 years](https://germs-dev.gitlab.io/cs/) | Survival guide for C++/Linux devs |
| [Online logbook](https://germs.dev/) | Curated since 2009 |
| [The Brighton Watch](https://superdean.com/) | Watchmaking and collector resources |
| [EV myths](https://turpin.dev/ev/) | Common misconceptions |
| [Brighton events](https://turpin.dev/brighton/) | Things to see and do |

## Studio setup

- BeyerDynamic DT 770 Pro Limited Edition and DT 1770 Pro
- MacBook Air M3
- Volt audio interface
- Roland 303 Groovebox
- Roland TB-03
- MicroKorg
- [Akai MIDImix](https://www.akaipro.com/midimix)

## Bandcamp

<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1491515808/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://deanturbeaux.bandcamp.com/track/made-in-black-featuring-phil-mills">Made in Black featuring Phil Mills by Dean Turbeaux</a></iframe>

## Mixcloud

<iframe width="100%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdeanturbeaux%2Fslow-horses-1%2F" frameborder="0" ></iframe>

## Spotify

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0bBjdf7r1fKPR0178P5rmM?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

## Pipes

[![germs-dev/concurrency-support-library](https://gitlab.com/germs-dev/concurrency-support-library/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/concurrency-support-library/-/pipelines) 
[![germs-dev/cpp](https://gitlab.com/germs-dev/cpp/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/cpp/-/pipelines) 
[![germs-dev/fix](https://gitlab.com/germs-dev/fix/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/fix/-/pipelines) 
[![germs-dev/cs](https://gitlab.com/germs-dev/cs/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/cs/-/pipelines) 
[![germs-dev/hear](https://gitlab.com/germs-dev/hear/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/hear/-/pipelines) 
[![germs-dev/pjsip](https://gitlab.com/germs-dev/pjsip/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/pjsip/-/pipelines) 
[![germs-dev/openai](https://gitlab.com/germs-dev/openai/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/openai/-/pipelines) 
[![germs-dev/scripts](https://gitlab.com/germs-dev/scripts/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/scripts/-/pipelines) 
[![germs-dev/deanturpin](https://gitlab.com/germs-dev/deanturpin/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/deanturpin/-/pipelines) 
[![germs-dev/webmeup](https://gitlab.com/germs-dev/webmeup/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/webmeup/-/pipelines) 
[![germs-dev/tracehost](https://gitlab.com/germs-dev/tracehost/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/tracehost/-/pipelines) 
[![germs-dev/energy](https://gitlab.com/germs-dev/energy/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/energy/-/pipelines) 
[![germs-dev/quotations](https://gitlab.com/germs-dev/quotations/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/quotations/-/pipelines) 
[![germs-dev/skills](https://gitlab.com/germs-dev/skills/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/skills/-/pipelines) 
[![germs-dev/render](https://gitlab.com/germs-dev/render/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/render/-/pipelines) 
[![germs-dev/mews-one](https://gitlab.com/germs-dev/mews-one/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/mews-one/-/pipelines) 
[![germs-dev/brighton](https://gitlab.com/germs-dev/brighton/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/brighton/-/pipelines) 
[![deanturpin/deanturpin](https://gitlab.com/deanturpin/deanturpin/badges/main/pipeline.svg)](https://gitlab.com/deanturpin/deanturpin/-/pipelines) 
[![deanturpin/idrawhouses](https://gitlab.com/deanturpin/idrawhouses/badges/main/pipeline.svg)](https://gitlab.com/deanturpin/idrawhouses/-/pipelines) 
[![deanturpin/recipes2](https://gitlab.com/deanturpin/recipes2/badges/main/pipeline.svg)](https://gitlab.com/deanturpin/recipes2/-/pipelines) 
[![germs-dev/dft](https://gitlab.com/germs-dev/dft/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/dft/-/pipelines) 
[![germs-dev/bt](https://gitlab.com/germs-dev/bt/badges/main/pipeline.svg)](https://gitlab.com/germs-dev/bt/-/pipelines) 
[![deanturpin/backtest](https://gitlab.com/deanturpin/backtest/badges/main/pipeline.svg)](https://gitlab.com/deanturpin/backtest/-/pipelines) 
[![deanturpin/ev](https://gitlab.com/deanturpin/ev/badges/main/pipeline.svg)](https://gitlab.com/deanturpin/ev/-/pipelines) 
[![deanturpin/constd](https://gitlab.com/deanturpin/constd/badges/main/pipeline.svg)](https://gitlab.com/deanturpin/constd/-/pipelines) 
[![deanturpin/cmake-external-project](https://gitlab.com/deanturpin/cmake-external-project/badges/main/pipeline.svg)](https://gitlab.com/deanturpin/cmake-external-project/-/pipelines) 

## Skills

[![skills timeline](https://skills.turpin.dev/skills.png)](https://skills.turpin.dev/skills.png)
