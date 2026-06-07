const chapters = [
  { number: 1, participantName: "Зроби це зараз", title: "Найважливіша справа дня", shortTitle: "Цілі", summary: "Розділ пояснює, чому день варто починати з чіткого визначення цілей і найважливішої задачі.", keyIdea: "Чіткість цілей є основою продуктивності. Записуйте їх і працюйте над найважливішою справою першою.", quote: "Є одна якість, якою повинен володіти переможець, — це визначення мети." },
  { number: 2, participantName: "Зроби це зараз", title: "Заздалегідь плануйте кожен день", shortTitle: "План", summary: "Планування допомагає працювати спокійніше, швидше й без випадкової зайнятості.", keyIdea: "Складайте план напередодні ввечері, щоб зранку одразу перейти до дії.", quote: "Планувати — означає робити майбутнє теперішнім із можливістю діяти вже зараз." },
  { number: 3, participantName: "Зроби це зараз", title: "Застосовуйте правило 80/20", shortTitle: "80/20", summary: "Невелика частина завдань приносить більшість результатів, тому важливо знаходити саме ці завдання.", keyIdea: "Фокусуйтеся на 20% справ, які мають найбільшу цінність.", quote: "Не всі справи рівні за своєю важливістю." },
  { number: 4, participantName: "Зроби це зараз", title: "Думайте про наслідки", shortTitle: "Наслідки", summary: "Найважливіші завдання мають найбільші довгострокові наслідки.", keyIdea: "Оцінюйте справи за тим, як вони вплинуть на майбутній результат.", quote: "Майбутнє формується вибором, який ви робите сьогодні." },
  { number: 5, participantName: "Зроби це зараз", title: "Творча прокрастинація", shortTitle: "Прокрастинація", summary: "Деякі дрібні справи варто свідомо відкласти, щоб звільнити час для справді важливого.", keyIdea: "Кажіть «ні» завданням із низькою цінністю.", quote: "Щоб зробити більше важливого, потрібно робити менше другорядного." },
  { number: 6, participantName: "Зроби це зараз", title: "Метод АБВГД", shortTitle: "АБВГД", summary: "Сортуйте завдання за пріоритетом: від критично важливих до тих, які можна не виконувати.", keyIdea: "Починайте з найважливішого завдання категорії А.", quote: "Перший закон успіху — концентрація." },
  { number: 7, participantName: "Зроби це зараз", title: "Ключові результати", shortTitle: "Результати", summary: "Визначте сфери, від яких найбільше залежить ваш успіх у роботі або навчанні.", keyIdea: "Працюйте над зонами, за які вас оцінюють найбільше.", quote: "Зміцнюйте те, що найбільше впливає на ефективність." },
  { number: 8, participantName: "Зроби це зараз", title: "Закон трьох", shortTitle: "Три справи", summary: "У кожній сфері є кілька головних завдань, які приносять більшість результатів.", keyIdea: "Визначте три найцінніші справи та зробіть їх центром дня.", quote: "Робіть те, що можете, з тим, що маєте, там, де ви є." },
  { number: 9, participantName: "Зроби це зараз", title: "Ретельна підготовка", shortTitle: "Підготовка", summary: "Підготуйте матеріали, простір і перший крок перед початком роботи.", keyIdea: "Підготовлене середовище зменшує опір і прискорює старт.", quote: "Коли все готово, почати значно легше." },
  { number: 10, participantName: "Зроби це зараз", title: "Рухайтесь крок за кроком", shortTitle: "Кроки", summary: "Великі завдання стають керованими, якщо розділити їх на маленькі послідовні дії.", keyIdea: "Не думайте про всю дорогу — зробіть наступний крок.", quote: "Великі результати складаються з малих завершених кроків." },
  { number: 11, participantName: "Зроби це зараз", title: "Удосконалюйте ключові навички", shortTitle: "Навички", summary: "Постійний розвиток навичок підвищує швидкість і якість роботи.", keyIdea: "Станьте кращими в тому, що найбільше впливає на результат.", quote: "Майстерність зменшує страх перед складністю." },
  { number: 12, participantName: "Зроби це зараз", title: "Використовуйте свої таланти", shortTitle: "Таланти", summary: "Найкращі результати виникають там, де сильні сторони поєднуються з важливою метою.", keyIdea: "Працюйте там, де ваші здібності мають найбільшу цінність.", quote: "Робіть свою роботу від душі." },
  { number: 13, participantName: "Зроби це зараз", title: "Визначте головні перепони", shortTitle: "Перепони", summary: "У кожному процесі є обмеження, яке найбільше гальмує прогрес.", keyIdea: "Знайдіть головну перешкоду і працюйте саме над нею.", quote: "Вузьке місце часто є точкою росту." },
  { number: 14, participantName: "Зроби це зараз", title: "Тисніть на себе", shortTitle: "Дедлайн", summary: "Створюйте власні дедлайни й працюйте так, ніби час справді обмежений.", keyIdea: "Самодисципліна прискорює виконання важливих задач.", quote: "Ваш прогрес починається там, де закінчуються виправдання." },
  { number: 15, participantName: "Зроби це зараз", title: "Максимізуйте особисті сили", shortTitle: "Енергія", summary: "Працюйте у періоди найвищої енергії та дбайте про відпочинок.", keyIdea: "Ефективність залежить не лише від часу, а й від енергії.", quote: "Піклування про себе підтримує результат." },
  { number: 16, participantName: "Зроби це зараз", title: "Мотивуйте себе діяти", shortTitle: "Мотивація", summary: "Позитивний внутрішній діалог допомагає починати й продовжувати.", keyIdea: "Підтримуйте себе словами, які ведуть до дії.", quote: "Переконайте себе, що можете, і старт стане ближчим." },
  { number: 17, participantName: "Зроби це зараз", title: "Позбудьтеся технологічного рабства", shortTitle: "Технології", summary: "Не дозволяйте телефону, пошті й соцмережам керувати вашим часом.", keyIdea: "Технології мають служити меті, а не забирати увагу.", quote: "Інструмент має допомагати роботі, а не керувати нею." },
  { number: 18, participantName: "Зроби це зараз", title: "Діліть завдання на частини", shortTitle: "Частини", summary: "Великі задачі легше почати, якщо розділити їх на маленькі частини.", keyIdea: "Почніть із найменшого кроку, щоб запустити рух.", quote: "Початок звички схожий на тонку нитку, яка міцніє з повторенням." },
  { number: 19, participantName: "Зроби це зараз", title: "Створюйте великі блоки часу", shortTitle: "Блоки часу", summary: "Виділяйте суцільні проміжки для глибокої роботи без відволікань.", keyIdea: "Великі блоки часу дають змогу зануритися у важливе завдання.", quote: "Концентрація всієї енергії на обмеженому колі завдань додає сили." },
  { number: 20, participantName: "Зроби це зараз", title: "Відчуття терміновості", shortTitle: "Терміновість", summary: "Швидкий темп і готовність діяти створюють імпульс для проходження складних етапів.", keyIdea: "Дійте зараз, поки рішення має енергію.", quote: "Не зволікайте. Слушний час може ніколи не настати." },
  { number: 21, participantName: "Зроби це зараз", title: "Виконуйте завдання по одному", shortTitle: "По одному", summary: "Почніть найважливіше завдання й доведіть його до завершення без перемикання.", keyIdea: "Однозадачність є одним із найсильніших способів підвищити продуктивність.", quote: "Завершена справа цінніша за десять початих." }
];

const els = {
  canvas: document.getElementById("particles"),
  svg: document.getElementById("connectionSvg"),
  nodesLayer: document.getElementById("nodesLayer"),
  bookButton: document.getElementById("bookButton"),
  bookModal: document.getElementById("bookModal"),
  chapterModal: document.getElementById("chapterModal"),
  chapterDialog: document.querySelector(".chapter-dialog"),
  chapterCloseButton: document.querySelector(".chapter-dialog [data-close-chapter]"),
  chapterAudio: document.getElementById("chapterAudio"),
  chapterPlayButton: document.getElementById("chapterPlayButton"),
  chapterPlayIcon: document.getElementById("chapterPlayIcon"),
  chapterProgress: document.getElementById("chapterProgress"),
  chapterCurrent: document.getElementById("chapterCurrent"),
  chapterDuration: document.getElementById("chapterDuration"),
  progressText: document.getElementById("progressText")
};

const ctx = els.canvas.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = (value) => String(value).padStart(2, "0");
let activeChapter = chapters[0];
let particles = [];
let particleFrame = 0;
let lastFocusedElement = null;
const viewedChapters = new Set(JSON.parse(localStorage.getItem("frogViewedChapters") || "[]"));

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

function saveProgress() {
  localStorage.setItem("frogViewedChapters", JSON.stringify([...viewedChapters]));
  const percent = Math.round((viewedChapters.size / chapters.length) * 100);
  els.progressText.textContent = `${viewedChapters.size} / ${chapters.length} розділів переглянуто (${percent}%)`;
  document.querySelectorAll(".chapter-node").forEach((node, index) => {
    node.classList.toggle("viewed", viewedChapters.has(chapters[index].number));
  });
}

function getNodePosition(index) {
  const width = window.innerWidth;
  const angle = (index / chapters.length) * Math.PI * 2 - Math.PI / 2;
  let radius = index % 2 === 0 ? 39 : 44;

  if (width <= 768) {
    radius = index % 2 === 0 ? 39 : 46;
  }

  if (width <= 600) {
    return {
      x: 50 + Math.cos(angle) * 43,
      y: 50 + Math.sin(angle) * 43
    };
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
    node.className = `chapter-node${viewedChapters.has(chapter.number) ? " viewed" : ""}`;
    node.style.left = `${position.x}%`;
    node.style.top = `${position.y}%`;
    node.setAttribute("aria-label", `Відкрити розділ ${pad(chapter.number)}: ${chapter.title}`);
    node.innerHTML = `
      <strong>${pad(chapter.number)}</strong>
      <span class="node-label">${chapter.shortTitle}</span>
      <span class="node-tooltip" role="tooltip"><span>${pad(chapter.number)}</span><em>${chapter.title}</em></span>
    `;
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

function resetChapterAudio(chapter) {
  els.chapterAudio.pause();
  els.chapterAudio.src = chapterAudioPath(chapter.number);
  els.chapterProgress.value = "0";
  els.chapterCurrent.textContent = "0:00";
  els.chapterDuration.textContent = "0:00";
  els.chapterPlayIcon.textContent = "▶";
}

function openChapter(chapter) {
  activeChapter = chapter;
  viewedChapters.add(chapter.number);
  saveProgress();
  lastFocusedElement = document.activeElement;
  document.getElementById("chapterNumber").textContent = `✦ Розділ ${pad(chapter.number)}`;
  document.getElementById("participantName").textContent = chapter.participantName;
  document.getElementById("chapterTitle").textContent = chapter.title;
  document.getElementById("chapterSummary").textContent = chapter.summary;
  document.getElementById("chapterIdea").textContent = chapter.keyIdea;
  document.getElementById("chapterQuote").textContent = chapter.quote;
  resetChapterAudio(chapter);
  els.chapterModal.hidden = false;
  els.chapterDialog.scrollTop = 0;
  els.chapterCloseButton.focus({ preventScroll: true });
  requestAnimationFrame(() => {
    els.chapterDialog.scrollTop = 0;
  });
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

  els.chapterAudio.addEventListener("ended", () => {
    els.chapterPlayIcon.textContent = "▶";
    els.chapterProgress.value = "100";
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
      // Audio playback can be blocked by the browser if files are missing or user gesture rules apply.
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
saveProgress();
if (!prefersReducedMotion) animateParticles();
