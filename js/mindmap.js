const chapters = [
  {
    id: 1,
    title: "Накрийте на стіл",
    student: "Ілля Войниченко",
    insights: [
      "Лише 3% людей записують цілі — і вони досягають у 5-10 разів більше за інших.",
      "Чіткість цілей — головна зброя проти прокрастинації.",
      "Використовуйте 7-крокову формулу: мета, запис, дедлайн, план, дія, щоденний крок.",
      "Кожного ранку визначайте свою головну «жабу»."
    ],
    action: "Запишіть головну ціль, поставте дедлайн і зробіть перший крок сьогодні."
  },
  {
    id: 2,
    title: "Заздалегідь плануйте кожен день",
    student: "Ілля Войниченко",
    insights: [
      "Кожна хвилина планування заощаджує до 10 хвилин виконання.",
      "Плануйте день напередодні ввечері — підсвідомість працюватиме всю ніч.",
      "Використовуйте рівні планування: основний, місячний, тижневий, щоденний.",
      "Працюйте за списком і викреслюйте виконане."
    ],
    action: "Складіть список справ на завтра ще сьогодні ввечері."
  },
  {
    id: 3,
    title: "Правило 80/20",
    student: "Ольга",
    insights: [
      "20% зусиль дають 80% результатів.",
      "Зосереджуйтесь на завданнях, які приносять найбільшу цінність.",
      "Творча прокрастинація допомагає свідомо відкладати маловажливе.",
      "Питайте себе: яке завдання дасть найбільший результат?"
    ],
    action: "Визначте 1-2 справи з найбільшою віддачею і почніть із них."
  },
  {
    id: 4,
    title: "Думайте про наслідки",
    student: "Оля Макаренко",
    insights: [
      "Важливе лише те, що має довгострокові наслідки.",
      "Якщо у списку 20 завдань — залиште 3 найважливіші.",
      "Робота в останню хвилину створює стрес і більше помилок.",
      "Оцінюйте дії за цінністю, унікальністю і найкращим використанням часу."
    ],
    action: "Перед вибором завдання оцініть його довгострокові наслідки."
  },
  {
    id: 5,
    title: "Творча прокрастинація",
    student: "Ілля Гаврильчик",
    insights: [
      "Не все потрібно робити зараз.",
      "Частину справ краще свідомо відкласти.",
      "Маловажливі завдання не повинні забирати час у головної «жаби».",
      "Справжня продуктивність — це вміння сказати «ні»."
    ],
    action: "Свідомо відкладіть або приберіть одну маловажливу справу."
  },
  {
    id: 6,
    title: "Метод ABCDE",
    student: "Оля Макаренко",
    insights: [
      "Продуктивність — це не кількість дрібних справ.",
      "Починайте з найважчого завдання.",
      "Головна справа має мати реальні довгострокові наслідки.",
      "Повна концентрація на одній «жабі» веде до високих результатів."
    ],
    action: "Позначте справи A, B, C, D, E і почніть із найважливішої A."
  },
  {
    id: 7,
    title: "Ключові результативні сфери",
    student: "Оля Макаренко",
    insights: [
      "Рівень найслабшої навички — це межа успіху.",
      "Прокрастинація часто виникає через страх поганого результату.",
      "Зарплата — це плата не за час, а за конкретний результат.",
      "Фокус на одній «золотій» навичці може змінити життя."
    ],
    action: "Визначте одну навичку, яка найбільше стримує ваш результат."
  },
  {
    id: 8,
    title: "Закон трьох",
    student: "Іванна Вегеш",
    insights: [
      "Визначте три ключові завдання, які дають 90% внеску.",
      "Зосереджуйтесь передусім на цих трьох речах.",
      "Решту справ можна делегувати або відкласти.",
      "Закон трьох дає більше часу для життя."
    ],
    action: "Запишіть три головні завдання, які дають найбільше користі."
  },
  {
    id: 9,
    title: "Ретельна підготовка",
    student: "Андрій Панків",
    insights: [
      "Перед роботою підготуйте все необхідне.",
      "Чисте робоче місце зменшує опір.",
      "Готуйтеся як до важливої зустрічі.",
      "Підготовка допомагає зробити перший крок."
    ],
    action: "Перед стартом приберіть робоче місце і підготуйте всі матеріали."
  },
  {
    id: 10,
    title: "Один крок за раз",
    student: "aremne109",
    insights: [
      "Великі завдання виконуйте крок за кроком.",
      "Не думайте про весь проєкт одразу.",
      "Маленькі завершені кроки створюють мотивацію.",
      "Розбивайте велике завдання на дрібні частини."
    ],
    action: "Виберіть тільки наступний маленький крок і зробіть його."
  },
  {
    id: 11,
    title: "Удосконалюйте навички",
    student: "evhen",
    insights: [
      "Постійно вдосконалюйте ключові навички.",
      "Найслабша навичка визначає швидкість успіху.",
      "Чим кращі навички — тим легше виконувати завдання.",
      "Інвестуйте час у навчання щодня."
    ],
    action: "Виділіть 30 хвилин на розвиток однієї важливої навички."
  },
  {
    id: 12,
    title: "Використовуйте таланти",
    student: "ladycrystalsss",
    insights: [
      "Зосереджуйтесь на тому, що виходить найкраще.",
      "Унікальні таланти — ключ до ефективності.",
      "Робіть те, у чому ви сильні.",
      "Розвивайте сильні сторони."
    ],
    action: "Визначте сильну сторону і використайте її в головному завданні."
  },
  {
    id: 13,
    title: "Визначте обмеження",
    student: "Марія Коваленко",
    insights: [
      "Визначте головну перепону, яка стримує прогрес.",
      "80% обмежень — внутрішні.",
      "Зосередьте енергію на усуненні ключового обмеження.",
      "Подолання однієї великої перепони прискорює результат."
    ],
    action: "Запишіть головну перешкоду і перший крок для її усунення."
  },
  {
    id: 14,
    title: "Тисніть на себе",
    student: "Михайло Кострикін",
    insights: [
      "Працюйте так, ніби завтра їдете на місяць.",
      "Створюйте штучну терміновість.",
      "Підвищуйте планку щодня.",
      "Самодисципліна через дедлайни — потужний інструмент."
    ],
    action: "Поставте короткий дедлайн для важливої справи."
  },
  {
    id: 15,
    title: "Максимізуйте енергію",
    student: "Володимир Ридель",
    insights: [
      "Працюйте у періоди найвищої енергії.",
      "Дбайте про сон, харчування та фізичну активність.",
      "Енергія — основа продуктивності.",
      "Втома — головна причина прокрастинації."
    ],
    action: "Заплануйте найважливішу справу на час найбільшої енергії."
  },
  {
    id: 16,
    title: "Мотивуйте себе",
    student: "zajtseva",
    insights: [
      "Контролюйте внутрішній діалог.",
      "Будьте для себе найкращим мотиватором.",
      "Шукайте позитив і рішення.",
      "Оптимізм — це звичка, яку можна тренувати."
    ],
    action: "Замініть одну негативну думку на конкретне рішення."
  },
  {
    id: 17,
    title: "Технології як інструмент",
    student: "Андрій Міщенко",
    insights: [
      "Технології повинні служити вам, а не керувати вами.",
      "Створюйте зони тиші без телефону та пошти.",
      "Не перевіряйте повідомлення постійно.",
      "День без гаджетів перезавантажує мозок."
    ],
    action: "Вимкніть сповіщення на час глибокої роботи."
  },
  {
    id: 18,
    title: "Розбийте завдання",
    student: "Макс Леворков",
    insights: [
      "Розбивайте великі завдання на маленькі шматочки.",
      "Використовуйте метод «швейцарського сиру».",
      "Маленький старт запускає мотивацію.",
      "Кожне мікрозавдання дає енергію."
    ],
    action: "Розбийте одну велику справу на 5 маленьких кроків."
  },
  {
    id: 19,
    title: "Великі блоки часу",
    student: "Олексій Муха",
    insights: [
      "Важлива робота потребує суцільних блоків часу.",
      "Плануйте 60-90 хвилин для концентрації.",
      "Вимикайте відволікання.",
      "Використовуйте ранкові години та час у дорозі."
    ],
    action: "Забронюйте 90 хвилин без відволікань для головної справи."
  },
  {
    id: 20,
    title: "Відчуття невідкладності",
    student: "Бородіна Євген",
    insights: [
      "Високоефективні люди орієнтовані на дію.",
      "Чіткий план допомагає рухатися швидше.",
      "Спіймайте кураж і підтримуйте темп.",
      "Репутація людини, яка швидко виконує важливу роботу, допомагає карʼєрі."
    ],
    action: "Почніть важливу справу негайно, без довгого обдумування."
  },
  {
    id: 21,
    title: "Однозадачність",
    student: "Бородіна Євген",
    insights: [
      "Якщо почали — не зупиняйтесь.",
      "Зупинка руйнує робочий ритм.",
      "Самодисципліна є основою високого виконання.",
      "Самовдосконалення і самоконтроль формують характер."
    ],
    action: "Працюйте над однією справою до завершення, не перемикаючись."
  }
];

const frogMapNodes = document.getElementById("frogMapNodes");
const frogMapLines = document.getElementById("frogMapLines");
const panelNumber = document.getElementById("knowledgePanelNumber");
const panelTitle = document.getElementById("knowledgePanelTitle");
const panelStudent = document.getElementById("knowledgePanelStudent");
const panelInsights = document.getElementById("knowledgePanelInsights");
const panelAction = document.getElementById("knowledgePanelAction");
const knowledgePanel = document.getElementById("knowledgePanel");
const knowledgeMap = document.getElementById("knowledge-map");
const backToMapButton = document.getElementById("knowledgeBackToMap");

function pad(value) {
  return String(value).padStart(2, "0");
}

function getPosition(index) {
  const width = window.innerWidth;
  const radius = width <= 600 ? 39 : width <= 1024 ? 41 : 45;
  const angle = (index / chapters.length) * Math.PI * 2 - Math.PI / 2;

  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius
  };
}

function getTooltipClass(position) {
  if (position.x <= 32) return "frog-map-tooltip-left";
  if (position.x >= 68) return "frog-map-tooltip-right";
  if (position.y >= 66) return "frog-map-tooltip-bottom";
  return "frog-map-tooltip-top";
}

function setActiveChapter(chapter, shouldScroll = false) {
  panelNumber.textContent = `Розділ ${pad(chapter.id)}`;
  panelTitle.textContent = chapter.title;
  panelStudent.textContent = `Студент: ${chapter.student}`;
  panelInsights.innerHTML = chapter.insights.map((item) => `<li>${item}</li>`).join("");
  panelAction.textContent = chapter.action;

  document.querySelectorAll(".frog-map-node").forEach((node) => {
    node.classList.toggle("frog-map-is-active", Number(node.dataset.chapterId) === chapter.id);
  });

  document.querySelectorAll(".frog-map-line").forEach((line) => {
    const isActive = Number(line.dataset.chapterId) === chapter.id;
    line.classList.toggle("frog-map-line-active", isActive);
    line.classList.remove("frog-map-line-signal");
    if (isActive) {
      line.getBoundingClientRect();
      line.classList.add("frog-map-line-signal");
    }
  });

  if (shouldScroll && window.matchMedia("(max-width: 600px)").matches) {
    knowledgePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function drawLines(positions) {
  frogMapLines.replaceChildren();

  positions.forEach((position, index) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("frog-map-line");
    path.dataset.chapterId = String(chapters[index].id);
    path.setAttribute("d", `M 500 500 L ${position.x * 10} ${position.y * 10}`);
    frogMapLines.appendChild(path);
  });
}

function renderMap(activeId = 1) {
  frogMapNodes.replaceChildren();
  const positions = chapters.map((_, index) => getPosition(index));

  chapters.forEach((chapter, index) => {
    const node = document.createElement("button");
    node.type = "button";
    node.className = "frog-map-node";
    node.dataset.chapterId = String(chapter.id);
    node.style.setProperty("--frog-x", `${positions[index].x}%`);
    node.style.setProperty("--frog-y", `${positions[index].y}%`);
    node.setAttribute("aria-label", `Відкрити розділ ${pad(chapter.id)}: ${chapter.title}`);
    const tooltipClass = getTooltipClass(positions[index]);
    node.innerHTML = `
      <span class="frog-map-node-number">${pad(chapter.id)}</span>
      <span class="frog-map-tooltip ${tooltipClass}">${chapter.title}</span>
    `;
    node.addEventListener("click", () => setActiveChapter(chapter, true));
    frogMapNodes.appendChild(node);
  });

  drawLines(positions);
  setActiveChapter(chapters.find((chapter) => chapter.id === activeId) || chapters[0]);
}

let resizeTimer = 0;
window.addEventListener("resize", () => {
  const activeNode = document.querySelector(".frog-map-node.frog-map-is-active");
  const activeId = activeNode ? Number(activeNode.dataset.chapterId) : 1;
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => renderMap(activeId), 120);
});

backToMapButton.addEventListener("click", () => {
  knowledgeMap.scrollIntoView({ behavior: "smooth", block: "center" });
});

renderMap();
