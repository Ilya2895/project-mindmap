const chapters = [
  // Future content goes here: edit participantName, title, summary, keyIdea, and quote.
  { number: 1, participantName: "Ім'я учасника 1", title: "Найважливіша справа дня", summary: "Розділ пояснює, чому день варто починати із задачі, яка має найбільшу цінність, навіть якщо вона найскладніша.", keyIdea: "Головна справа, виконана першою, створює імпульс для всього дня.", quote: "Почніть із найважчого, і ви переможете зволікання." },
  { number: 2, participantName: "Ім'я учасника 2", title: "Чіткість перед дією", summary: "Перед роботою потрібно точно визначити мету, очікуваний результат і перший конкретний крок.", keyIdea: "Ясна мета зменшує хаос і робить старт простішим.", quote: "Ясність перетворює бажання на план." },
  { number: 3, participantName: "Ім'я учасника 3", title: "Планування кожного дня", summary: "Короткий список справ допомагає бачити пріоритети та не витрачати енергію на випадкову зайнятість.", keyIdea: "Кілька хвилин планування економлять години роботи.", quote: "Думайте на папері, перш ніж діяти." },
  { number: 4, participantName: "Ім'я учасника 4", title: "Правило 80/20", summary: "Невелика частина задач приносить більшість результату, тому важливо знаходити саме ці задачі.", keyIdea: "Фокусуйтеся на діях із найбільшою віддачею.", quote: "Не всі справи рівні за своєю цінністю." },
  { number: 5, participantName: "Ім'я учасника 5", title: "Наслідки вибору", summary: "Важливість задачі визначається її довгостроковими наслідками, а не тим, наскільки легко її виконати зараз.", keyIdea: "Обирайте справи, які змінюють майбутній результат.", quote: "Майбутнє формується вибором сьогодні." },
  { number: 6, participantName: "Ім'я учасника 6", title: "Творче відкладання", summary: "Не все потрібно робити. Частину дрібних справ треба свідомо прибирати, щоб звільнити місце для головного.", keyIdea: "Менше зайвого означає більше енергії для важливого.", quote: "Щоб зробити більше цінного, робіть менше другорядного." },
  { number: 7, participantName: "Ім'я учасника 7", title: "Метод ABCDE", summary: "Кожна справа отримує пріоритет від критичної до такої, яку можна не виконувати.", keyIdea: "Система пріоритетів захищає від випадкової роботи.", quote: "Працюйте над A-справами першими." },
  { number: 8, participantName: "Ім'я учасника 8", title: "Ключові зони результату", summary: "Успіх залежить від кількох ключових сфер, які потрібно визначити й постійно покращувати.", keyIdea: "Слабка ключова зона стримує весь результат.", quote: "Зміцнюйте те, що найбільше впливає на ефективність." },
  { number: 9, participantName: "Ім'я учасника 9", title: "Підготовка до роботи", summary: "Підготовлене робоче місце, матеріали й чіткий старт зменшують психологічний опір.", keyIdea: "Коли все готово, почати значно легше.", quote: "Підготовка робить дію природною." },
  { number: 10, participantName: "Ім'я учасника 10", title: "Крок за кроком", summary: "Велику справу легше виконати, якщо розбити її на невеликі послідовні дії.", keyIdea: "Наступний крок важливіший за ідеальний план.", quote: "Великі результати складаються з малих завершених кроків." },
  { number: 11, participantName: "Ім'я учасника 11", title: "Розвиток навичок", summary: "Навчання підвищує швидкість, якість і впевненість у виконанні важливих задач.", keyIdea: "Майстерність зменшує опір перед складною роботою.", quote: "Інвестуйте в навички, і робота стане легшою." },
  { number: 12, participantName: "Ім'я учасника 12", title: "Сильні сторони", summary: "Найкращі результати з'являються там, де ваші здібності поєднуються з важливою метою.", keyIdea: "Працюйте там, де ваша сила має найбільшу ціну.", quote: "Сильні сторони пришвидшують шлях до результату." },
  { number: 13, participantName: "Ім'я учасника 13", title: "Головне обмеження", summary: "У кожному процесі є вузьке місце, яке найбільше сповільнює прогрес.", keyIdea: "Знайдіть і усуньте головне обмеження.", quote: "Вузьке місце часто є точкою росту." },
  { number: 14, participantName: "Ім'я учасника 14", title: "Особиста відповідальність", summary: "Продуктивність починається з рішення діяти самостійно й не перекладати відповідальність.", keyIdea: "Відповідальність повертає контроль.", quote: "Прогрес починається там, де закінчуються виправдання." },
  { number: 15, participantName: "Ім'я учасника 15", title: "Енергія і ритм", summary: "Сон, відпочинок і правильний темп потрібні для стабільної роботи без вигорання.", keyIdea: "Ефективність залежить не лише від часу, а й від енергії.", quote: "Піклування про себе підтримує результат." },
  { number: 16, participantName: "Ім'я учасника 16", title: "Внутрішній діалог", summary: "Те, як людина говорить із собою, впливає на сміливість починати й продовжувати.", keyIdea: "Підтримувальні слова допомагають діяти.", quote: "Переконайте себе, що можете, і старт стане ближчим." },
  { number: 17, participantName: "Ім'я учасника 17", title: "Технології без відволікань", summary: "Гаджети мають допомагати роботі, а не керувати увагою через сповіщення.", keyIdea: "Контроль над технологіями повертає контроль над часом.", quote: "Інструмент має служити меті." },
  { number: 18, participantName: "Ім'я учасника 18", title: "Один фокус", summary: "Однозадачність допомагає швидше завершувати справи й робити їх якісніше.", keyIdea: "Глибока концентрація сильніша за перемикання.", quote: "Завершена справа цінніша за десять початих." },
  { number: 19, participantName: "Ім'я учасника 19", title: "Відчуття терміновості", summary: "Швидкий темп і готовність діяти створюють імпульс для проходження складних етапів.", keyIdea: "Дійте зараз, поки рішення має енергію.", quote: "Швидкість дії відрізняє мрію від результату." },
  { number: 20, participantName: "Ім'я учасника 20", title: "Стан потоку", summary: "Потік з'являється, коли увага зібрана і робота вже почалася.", keyIdea: "Натхнення часто приходить після старту.", quote: "Почніть працювати, і ритм з'явиться в процесі." },
  { number: 21, participantName: "Ім'я учасника 21", title: "Звичка завершувати", summary: "Регулярне завершення важливих задач формує дисципліну, впевненість і реальний прогрес.", keyIdea: "Завершення головних справ поступово стає характером.", quote: "Кожна завершена справа робить вас сильнішими." }
];

const els = {
  canvas: document.getElementById("particles"),
  svg: document.getElementById("connectionSvg"),
  nodesLayer: document.getElementById("nodesLayer"),
  bookButton: document.getElementById("bookButton"),
  bookModal: document.getElementById("bookModal"),
  chapterModal: document.getElementById("chapterModal"),
  chapterAudio: document.getElementById("chapterAudio"),
  chapterPlayButton: document.getElementById("chapterPlayButton"),
  chapterPlayIcon: document.getElementById("chapterPlayIcon"),
  chapterProgress: document.getElementById("chapterProgress"),
  chapterCurrent: document.getElementById("chapterCurrent"),
  chapterDuration: document.getElementById("chapterDuration")
};

const ctx = els.canvas.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = (value) => String(value).padStart(2, "0");
let activeChapter = chapters[0];
let particles = [];
let particleFrame = 0;
let lastFocusedElement = null;

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  return `${Math.floor(seconds / 60)}:${pad(Math.floor(seconds % 60))}`;
}

function chapterAudioPath(number) {
  return `audio/chapter-${pad(number)}.mp3`;
}

function createSvgGradient() {
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradient.id = "goldLine";
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("x2", "100%");

  [["0%", "#8b6a2d"], ["52%", "#f0ce75"], ["100%", "#d6b45a"]].forEach(([offset, color]) => {
    const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", color);
    gradient.appendChild(stop);
  });

  defs.appendChild(gradient);
  els.svg.appendChild(defs);
}

// Adaptive layout: desktop uses one broad ring; smaller screens use two rings to avoid node collisions.
function getNodePosition(index) {
  const width = window.innerWidth;
  const angle = (index / chapters.length) * Math.PI * 2 - Math.PI / 2;
  let radius = index % 2 === 0 ? 39 : 44;

  if (width <= 768) {
    radius = index % 3 === 0 ? 32 : index % 3 === 1 ? 41 : 48;
  }

  if (width <= 430) {
    radius = index % 3 === 0 ? 30 : index % 3 === 1 ? 40 : 49;
  }

  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius
  };
}

function drawMindMap() {
  els.svg.replaceChildren();
  els.nodesLayer.replaceChildren();
  createSvgGradient();

  chapters.forEach((chapter, index) => {
    const position = getNodePosition(index);

    const node = document.createElement("button");
    node.type = "button";
    node.className = "chapter-node";
    node.style.left = `${position.x}%`;
    node.style.top = `${position.y}%`;
    node.setAttribute("aria-label", `Відкрити розділ ${pad(chapter.number)}: ${chapter.title}`);
    node.innerHTML = `<strong>${pad(chapter.number)}</strong>`;
    node.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openChapter(chapter);
    });
    els.nodesLayer.appendChild(node);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const endX = position.x * 10;
    const endY = position.y * 10;
    const controlX = (500 + endX) / 2 + (index % 2 === 0 ? 22 : -22);
    const controlY = (500 + endY) / 2;
    path.setAttribute("d", `M 500 500 Q ${controlX} ${controlY} ${endX} ${endY}`);
    els.svg.appendChild(path);

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    if (prefersReducedMotion) {
      path.style.strokeDashoffset = "0";
      node.classList.add("is-visible");
    } else {
      path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
        duration: 420,
        delay: 120 + index * 32,
        fill: "forwards",
        easing: "ease-out"
      });
      window.setTimeout(() => node.classList.add("is-visible"), 180 + index * 32);
    }
  });
}

function openChapter(chapter) {
  activeChapter = chapter;
  lastFocusedElement = document.activeElement;
  document.getElementById("chapterNumber").textContent = `РОЗДІЛ ${pad(chapter.number)}`;
  document.getElementById("participantName").textContent = chapter.participantName;
  document.getElementById("chapterTitle").textContent = chapter.title;
  document.getElementById("chapterSummary").textContent = chapter.summary;
  document.getElementById("chapterIdea").textContent = chapter.keyIdea;
  document.getElementById("chapterQuote").textContent = chapter.quote;

  els.chapterAudio.pause();
  els.chapterAudio.src = chapterAudioPath(chapter.number);
  els.chapterProgress.value = "0";
  els.chapterCurrent.textContent = "0:00";
  els.chapterDuration.textContent = "0:00";
  els.chapterPlayIcon.textContent = "▶";
  els.chapterModal.hidden = false;
  els.chapterPlayButton.focus();
}

function closeChapter() {
  els.chapterModal.hidden = true;
  els.chapterAudio.pause();
  els.chapterPlayIcon.textContent = "▶";
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openBook(event) {
  event.stopPropagation();
  lastFocusedElement = document.activeElement;
  els.bookModal.hidden = false;
  els.bookModal.querySelector(".close-button").focus();
}

function closeBook() {
  els.bookModal.hidden = true;
  if (lastFocusedElement) lastFocusedElement.focus();
}

function bindAudio() {
  els.chapterAudio.addEventListener("loadedmetadata", () => {
    els.chapterDuration.textContent = formatTime(els.chapterAudio.duration);
  });

  els.chapterAudio.addEventListener("timeupdate", () => {
    els.chapterCurrent.textContent = formatTime(els.chapterAudio.currentTime);
    if (els.chapterAudio.duration) {
      els.chapterProgress.value = String((els.chapterAudio.currentTime / els.chapterAudio.duration) * 100);
    }
  });

  els.chapterAudio.addEventListener("play", () => {
    els.chapterPlayIcon.textContent = "Ⅱ";
  });

  els.chapterAudio.addEventListener("pause", () => {
    els.chapterPlayIcon.textContent = "▶";
  });

  els.chapterProgress.addEventListener("input", () => {
    if (els.chapterAudio.duration) {
      els.chapterAudio.currentTime = (Number(els.chapterProgress.value) / 100) * els.chapterAudio.duration;
    }
  });

  els.chapterPlayButton.addEventListener("click", async () => {
    try {
      if (els.chapterAudio.paused) {
        await els.chapterAudio.play();
      } else {
        els.chapterAudio.pause();
      }
    } catch {
      // Some browsers block playback until a direct user gesture or until audio files are present.
      if (activeChapter.number === 3) {
        els.chapterAudio.src = "audio/chapter-03 .mp3";
      }
    }
  });
}

function setupModals() {
  els.bookButton.addEventListener("click", openBook);

  document.querySelectorAll("[data-close-book]").forEach((button) => {
    button.addEventListener("click", closeBook);
  });

  document.querySelectorAll("[data-close-chapter]").forEach((button) => {
    button.addEventListener("click", closeChapter);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!els.chapterModal.hidden) closeChapter();
      if (!els.bookModal.hidden) closeBook();
    }
  });
}

function resizeParticles() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  els.canvas.width = Math.floor(window.innerWidth * ratio);
  els.canvas.height = Math.floor(window.innerHeight * ratio);
  els.canvas.style.width = `${window.innerWidth}px`;
  els.canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  // Performance improvement: particles are intentionally capped at 32, with no shadowBlur or glow.
  const count = prefersReducedMotion ? 0 : Math.min(32, Math.max(20, Math.floor(window.innerWidth / 70)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.6 + 0.6,
    speed: Math.random() * 0.18 + 0.05
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "rgba(214, 180, 90, 0.24)";

  particles.forEach((particle) => {
    particle.y -= particle.speed;
    if (particle.y < -4) {
      particle.y = window.innerHeight + 4;
      particle.x = Math.random() * window.innerWidth;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fill();
  });

  particleFrame = requestAnimationFrame(animateParticles);
}

// Redraw only on breakpoint-affecting resize, avoiding continuous layout work.
let resizeTimer = 0;
function handleResize() {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    resizeParticles();
    drawMindMap();
  }, 120);
}

window.addEventListener("resize", handleResize);
window.addEventListener("beforeunload", () => cancelAnimationFrame(particleFrame));

drawMindMap();
bindAudio();
setupModals();
resizeParticles();
if (!prefersReducedMotion) animateParticles();
