const chapters = [
  {
    number: 1,
    participantName: "Ім'я учасника 1",
    title: "Найважливіша справа дня",
    summary: "Розділ пояснює, чому варто починати день із задачі, яка має найбільшу цінність, навіть якщо вона здається складною.",
    keyIdea: "Якщо зробити головну справу першою, решта дня стає легшою і продуктивнішою.",
    quote: "Почніть із найважчого, і ви отримаєте перевагу над власним зволіканням."
  },
  {
    number: 2,
    participantName: "Ім'я учасника 2",
    title: "Чіткість перед дією",
    summary: "Автор наголошує: перед роботою потрібно ясно визначити мету, результат і перший крок.",
    keyIdea: "Нечітка мета створює хаос, а чітка мета скорочує шлях до дії.",
    quote: "Ясність перетворює бажання на план."
  },
  {
    number: 3,
    participantName: "Ім'я учасника 3",
    title: "Планування кожного дня",
    summary: "Розділ показує силу простого списку справ і попереднього планування ввечері або зранку.",
    keyIdea: "Кілька хвилин планування економлять години розгубленої роботи.",
    quote: "Думайте на папері, перш ніж діяти в реальності."
  },
  {
    number: 4,
    participantName: "Ім'я учасника 4",
    title: "Правило 80/20",
    summary: "Невелика кількість задач приносить більшість результату, тому важливо знайти саме ці задачі.",
    keyIdea: "Фокусуйтеся на 20 відсотках дій, які створюють 80 відсотків прогресу.",
    quote: "Не всі справи рівні за своєю цінністю."
  },
  {
    number: 5,
    participantName: "Ім'я учасника 5",
    title: "Наслідки вибору",
    summary: "Розділ навчає оцінювати справи за довгостроковими наслідками, а не за миттєвою зручністю.",
    keyIdea: "Найважливіші задачі мають найбільші наслідки для майбутнього.",
    quote: "Майбутнє формується тими справами, які ви обираєте сьогодні."
  },
  {
    number: 6,
    participantName: "Ім'я учасника 6",
    title: "Творче відкладання",
    summary: "Не все варто робити. Частину справ потрібно свідомо відкласти або прибрати, щоб звільнити місце для головного.",
    keyIdea: "Відмовляйтеся від дрібного, щоб мати енергію для важливого.",
    quote: "Щоб зробити більше цінного, треба робити менше зайвого."
  },
  {
    number: 7,
    participantName: "Ім'я учасника 7",
    title: "Метод ABCDE",
    summary: "Кожна справа отримує пріоритет: від критично важливої до тієї, яку можна не виконувати.",
    keyIdea: "Пріоритети захищають вас від випадкової зайнятості.",
    quote: "Працюйте над A-справами, поки інші губляться в C-справах."
  },
  {
    number: 8,
    participantName: "Ім'я учасника 8",
    title: "Ключові зони результату",
    summary: "Автор радить визначити сфери, від яких залежить успіх у навчанні, роботі чи проєкті.",
    keyIdea: "Слабка ключова зона обмежує весь результат.",
    quote: "Зміцнюйте те, що найбільше впливає на вашу ефективність."
  },
  {
    number: 9,
    participantName: "Ім'я учасника 9",
    title: "Підготовка до роботи",
    summary: "Чисте робоче місце, потрібні матеріали й готовність зменшують опір перед початком.",
    keyIdea: "Підготовлене середовище робить старт майже автоматичним.",
    quote: "Коли все готово, почати значно легше."
  },
  {
    number: 10,
    participantName: "Ім'я учасника 10",
    title: "Крок за кроком",
    summary: "Велика справа стає керованою, якщо розділити її на малі конкретні дії.",
    keyIdea: "Не потрібно бачити всю дорогу, достатньо зробити наступний крок.",
    quote: "Величезні результати складаються з малих завершених кроків."
  },
  {
    number: 11,
    participantName: "Ім'я учасника 11",
    title: "Розвиток навичок",
    summary: "Постійне навчання підвищує швидкість і якість роботи, тому інвестиція в навички повертається багаторазово.",
    keyIdea: "Чим краще ви вмієте робити головну справу, тим менше опору відчуваєте.",
    quote: "Майстерність зменшує страх перед складністю."
  },
  {
    number: 12,
    participantName: "Ім'я учасника 12",
    title: "Використання сильних сторін",
    summary: "Розділ пропонує знаходити задачі, де ваші здібності дають найбільший ефект.",
    keyIdea: "Найкращі результати з'являються там, де сильні сторони зустрічаються з важливою метою.",
    quote: "Працюйте там, де ваша сила має найбільшу ціну."
  },
  {
    number: 13,
    participantName: "Ім'я учасника 13",
    title: "Головне обмеження",
    summary: "У кожному процесі є фактор, який найбільше стримує рух. Його треба знайти й усунути.",
    keyIdea: "Один правильний прорив може прискорити весь проєкт.",
    quote: "Знайдіть вузьке місце, і ви знайдете точку росту."
  },
  {
    number: 14,
    participantName: "Ім'я учасника 14",
    title: "Особиста відповідальність",
    summary: "Автор підкреслює: продуктивність починається з рішення не чекати і не перекладати провину.",
    keyIdea: "Коли ви берете відповідальність, ви повертаєте собі контроль.",
    quote: "Ваш прогрес починається там, де закінчуються виправдання."
  },
  {
    number: 15,
    participantName: "Ім'я учасника 15",
    title: "Енергія і ритм",
    summary: "Розділ говорить про сон, відпочинок і правильний темп як основу стабільної продуктивності.",
    keyIdea: "Висока ефективність потребує не лише часу, а й енергії.",
    quote: "Піклування про себе є частиною роботи над результатом."
  },
  {
    number: 16,
    participantName: "Ім'я учасника 16",
    title: "Позитивний внутрішній діалог",
    summary: "Те, як людина говорить із собою, впливає на сміливість починати і продовжувати.",
    keyIdea: "Сильні слова підтримують сильні дії.",
    quote: "Переконайте себе, що можете, і початок стане ближчим."
  },
  {
    number: 17,
    participantName: "Ім'я учасника 17",
    title: "Технології без відволікань",
    summary: "Гаджети мають допомагати роботі, а не красти увагу через сповіщення й випадковий контент.",
    keyIdea: "Контроль над технологіями повертає контроль над часом.",
    quote: "Інструмент має служити меті, а не керувати увагою."
  },
  {
    number: 18,
    participantName: "Ім'я учасника 18",
    title: "Один фокус",
    summary: "Однозадачність дозволяє швидше завершувати справи і робити їх якісніше.",
    keyIdea: "Глибока концентрація сильніша за постійне перемикання.",
    quote: "Завершена справа цінніша за десять початих."
  },
  {
    number: 19,
    participantName: "Ім'я учасника 19",
    title: "Відчуття терміновості",
    summary: "Швидкий темп і готовність діяти створюють імпульс, який допомагає проходити складні етапи.",
    keyIdea: "Дійте зараз, поки енергія рішення ще жива.",
    quote: "Швидкість дії часто відрізняє мрію від результату."
  },
  {
    number: 20,
    participantName: "Ім'я учасника 20",
    title: "Стан потоку",
    summary: "Коли увага зібрана, робота стає глибшою, швидшою і навіть приємнішою.",
    keyIdea: "Потік з'являється після старту, а не до нього.",
    quote: "Почніть працювати, і натхнення наздожене вас у процесі."
  },
  {
    number: 21,
    participantName: "Ім'я учасника 21",
    title: "Звичка завершувати",
    summary: "Фінальний розділ підсумовує: дисципліна починати з головного поступово стає характером.",
    keyIdea: "Регулярне завершення важливих справ створює впевненість і результат.",
    quote: "Кожна завершена головна справа робить вас сильнішими."
  }
];

const pad = (value) => String(value).padStart(2, "0");

const els = {
  root: document.documentElement,
  canvas: document.getElementById("particles"),
  svg: document.getElementById("connectionSvg"),
  nodesLayer: document.getElementById("nodesLayer"),
  bookButton: document.getElementById("bookButton"),
  bookModal: document.getElementById("bookModal"),
  chapterModal: document.getElementById("chapterModal"),
  mainAudio: document.getElementById("mainAudio"),
  mainPlayButton: document.getElementById("mainPlayButton"),
  mainAudioPanel: document.getElementById("mainAudioPanel"),
  mainProgress: document.getElementById("mainProgress"),
  mainCurrent: document.getElementById("mainCurrent"),
  mainDuration: document.getElementById("mainDuration"),
  mainEq: document.getElementById("mainEq"),
  chapterAudio: document.getElementById("chapterAudio"),
  chapterPlayButton: document.getElementById("chapterPlayButton"),
  chapterPlayIcon: document.getElementById("chapterPlayIcon"),
  chapterProgress: document.getElementById("chapterProgress"),
  chapterCurrent: document.getElementById("chapterCurrent"),
  chapterDuration: document.getElementById("chapterDuration"),
  chapterEq: document.getElementById("chapterEq")
};

const ctx = els.canvas.getContext("2d");
let particles = [];
let particleFrame = 0;
let activeChapter = chapters[0];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${pad(secs)}`;
}

function chapterAudioPath(number) {
  return `audio/chapter-${pad(number)}.mp3`;
}

function addSvgGradient() {
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradient.id = "goldLine";
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("x2", "100%");

  [
    ["0%", "#8f681d"],
    ["48%", "#ffd76a"],
    ["100%", "#d4af37"]
  ].forEach(([offset, color]) => {
    const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", color);
    gradient.appendChild(stop);
  });

  defs.appendChild(gradient);
  els.svg.appendChild(defs);
}

function getNodePosition(index) {
  const angle = (index / chapters.length) * Math.PI * 2 - Math.PI / 2;
  const radius = index % 2 === 0 ? 39 : 44;
  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius
  };
}

function drawMindMap() {
  addSvgGradient();

  chapters.forEach((chapter, index) => {
    const position = getNodePosition(index);
    const node = document.createElement("button");
    node.type = "button";
    node.className = "chapter-node";
    node.style.left = `${position.x}%`;
    node.style.top = `${position.y}%`;
    node.setAttribute("aria-label", `Відкрити розділ ${pad(chapter.number)}: ${chapter.title}`);
    node.innerHTML = `<strong>${pad(chapter.number)}</strong>`;
    node.addEventListener("click", () => openChapter(chapter));
    els.nodesLayer.appendChild(node);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const startX = 500;
    const startY = 500;
    const endX = position.x * 10;
    const endY = position.y * 10;
    const controlX = (startX + endX) / 2 + (index % 2 ? -34 : 34);
    const controlY = (startY + endY) / 2 + (index % 3 ? 20 : -20);
    path.setAttribute("d", `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`);
    els.svg.appendChild(path);

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      { duration: 700, delay: 350 + index * 85, fill: "forwards", easing: "cubic-bezier(.22,1,.36,1)" }
    );

    window.setTimeout(() => node.classList.add("is-visible"), 470 + index * 85);
  });
}

function openChapter(chapter) {
  activeChapter = chapter;
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
  els.chapterEq.classList.remove("is-playing");

  els.chapterModal.hidden = false;
  els.chapterPlayButton.focus();
}

function closeChapter() {
  els.chapterModal.hidden = true;
  els.chapterAudio.pause();
  els.chapterEq.classList.remove("is-playing");
  els.chapterPlayIcon.textContent = "▶";
}

function openBook() {
  els.bookModal.hidden = false;
  els.bookModal.querySelector(".close-button").focus();
}

function closeBook() {
  els.bookModal.hidden = true;
  els.bookButton.focus();
}

async function toggleAudio(audio) {
  if (audio.paused) {
    await audio.play();
  } else {
    audio.pause();
  }
}

function bindAudio(audio, progress, current, duration, eq, onStateChange = () => {}) {
  audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    current.textContent = formatTime(audio.currentTime);
    if (audio.duration) {
      progress.value = String((audio.currentTime / audio.duration) * 100);
    }
  });

  audio.addEventListener("play", () => {
    eq.classList.add("is-playing");
    onStateChange(true);
  });

  audio.addEventListener("pause", () => {
    eq.classList.remove("is-playing");
    onStateChange(false);
  });

  audio.addEventListener("ended", () => {
    eq.classList.remove("is-playing");
    onStateChange(false);
  });

  progress.addEventListener("input", () => {
    if (audio.duration) {
      audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    }
  });
}

function setupAudio() {
  bindAudio(els.mainAudio, els.mainProgress, els.mainCurrent, els.mainDuration, els.mainEq);
  bindAudio(els.chapterAudio, els.chapterProgress, els.chapterCurrent, els.chapterDuration, els.chapterEq, (playing) => {
    els.chapterPlayIcon.textContent = playing ? "Ⅱ" : "▶";
  });

  els.mainPlayButton.addEventListener("click", async () => {
    els.mainAudioPanel.hidden = false;
    try {
      await toggleAudio(els.mainAudio);
    } catch {
      els.mainAudio.src = "audio/audio-book.mp3";
      await toggleAudio(els.mainAudio);
    }
  });

  els.chapterPlayButton.addEventListener("click", async () => {
    try {
      await toggleAudio(els.chapterAudio);
    } catch {
      if (activeChapter.number === 3) {
        els.chapterAudio.src = "audio/chapter-03 .mp3";
        await toggleAudio(els.chapterAudio);
      }
    }
  });
}

function setupModals() {
  els.bookButton.addEventListener("click", openBook);

  document.querySelectorAll("[data-close-book]").forEach((item) => {
    item.addEventListener("click", closeBook);
  });

  document.querySelectorAll("[data-close-chapter]").forEach((item) => {
    item.addEventListener("click", closeChapter);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!els.chapterModal.hidden) closeChapter();
      if (!els.bookModal.hidden) closeBook();
    }
  });
}

function setupParallax() {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    els.root.style.setProperty("--mx", x.toFixed(3));
    els.root.style.setProperty("--my", y.toFixed(3));
  });
}

function resizeParticles() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  els.canvas.width = Math.floor(window.innerWidth * ratio);
  els.canvas.height = Math.floor(window.innerHeight * ratio);
  els.canvas.style.width = `${window.innerWidth}px`;
  els.canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.min(120, Math.max(54, Math.floor(window.innerWidth / 12)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.28 + 0.08,
    drift: Math.random() * 0.28 - 0.14,
    gold: Math.random() > 0.62
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((particle) => {
    particle.y -= particle.speed;
    particle.x += particle.drift;

    if (particle.y < -8) {
      particle.y = window.innerHeight + 8;
      particle.x = Math.random() * window.innerWidth;
    }

    ctx.beginPath();
    ctx.fillStyle = particle.gold ? "rgba(255, 215, 106, 0.72)" : "rgba(216, 180, 254, 0.26)";
    ctx.shadowColor = particle.gold ? "rgba(255, 215, 106, 0.86)" : "rgba(168, 85, 247, 0.64)";
    ctx.shadowBlur = particle.gold ? 12 : 8;
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fill();
  });

  particleFrame = requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", resizeParticles);
window.addEventListener("beforeunload", () => cancelAnimationFrame(particleFrame));

drawMindMap();
setupAudio();
setupModals();
setupParallax();
resizeParticles();
animateParticles();
