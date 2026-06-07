const chapters = [
  { id: 1, title: "Накрийте на стіл", insight: "Найкращий спосіб подолати прокрастинацію — чітко визначити головну задачу.", action: "Запишіть одну найважливішу справу дня і почніть саме з неї." },
  { id: 2, title: "Заздалегідь плануйте кожен день", insight: "План зменшує хаос і допомагає швидше перейти до дії.", action: "Складіть список задач увечері або перед початком роботи." },
  { id: 3, title: "Правило 80/20", insight: "Невелика частина справ створює більшість результату.", action: "Позначте 20% задач, які мають найбільшу цінність." },
  { id: 4, title: "Думайте про наслідки", insight: "Важливі справи мають сильні довгострокові наслідки.", action: "Перед вибором задачі запитайте: що це змінить через місяць або рік?" },
  { id: 5, title: "Творча прокрастинація", insight: "Не все потрібно робити зараз, а дещо не потрібно робити взагалі.", action: "Свідомо відкладіть або приберіть одну маловажливу справу." },
  { id: 6, title: "Метод ABCDE", insight: "Пріоритети допомагають не плутати зайнятість із результативністю.", action: "Позначте задачі літерами A, B, C, D, E і почніть із A-1." },
  { id: 7, title: "Ключові результативні сфери", insight: "Ваш успіх залежить від кількох головних зон відповідальності.", action: "Визначте сферу, яка найбільше впливає на вашу оцінку або результат." },
  { id: 8, title: "Закон трьох", insight: "Три головні справи часто дають більшість реального прогресу.", action: "Випишіть три задачі, які сьогодні мають найбільшу вагу." },
  { id: 9, title: "Ретельна підготовка", insight: "Підготовлене середовище зменшує опір перед стартом.", action: "Заздалегідь відкрийте матеріали, документи й інструменти для роботи." },
  { id: 10, title: "Один крок за раз", insight: "Велика задача стає простішою, якщо бачити лише наступну дію.", action: "Розбийте складне завдання на перші три маленькі кроки." },
  { id: 11, title: "Удосконалюйте навички", insight: "Ключові навички прямо впливають на швидкість і якість роботи.", action: "Оберіть одну навичку, яку варто прокачати цього тижня." },
  { id: 12, title: "Використовуйте таланти", insight: "Найсильніший результат зʼявляється там, де працюють ваші сильні сторони.", action: "Знайдіть задачу, де ваші здібності дадуть найбільший ефект." },
  { id: 13, title: "Визначте обмеження", insight: "Один головний барʼєр часто стримує весь прогрес.", action: "Назвіть головну перепону і заплануйте дію для її зменшення." },
  { id: 14, title: "Тисніть на себе", insight: "Самодисципліна створює темп навіть без зовнішнього контролю.", action: "Поставте собі короткий дедлайн і працюйте до завершення." },
  { id: 15, title: "Максимізуйте енергію", insight: "Продуктивність залежить не лише від часу, а й від фізичного ресурсу.", action: "Заплануйте найважчу справу на період найвищої енергії." },
  { id: 16, title: "Мотивуйте себе", insight: "Внутрішній діалог впливає на готовність почати.", action: "Замініть фразу «пізніше» на конкретне «починаю з цього кроку»." },
  { id: 17, title: "Технології як інструмент", insight: "Технології мають допомагати, а не керувати увагою.", action: "Вимкніть зайві сповіщення на час глибокої роботи." },
  { id: 18, title: "Розбийте завдання", insight: "Маленькі частини знижують страх перед великою роботою.", action: "Виконайте найменший можливий фрагмент задачі за 10 хвилин." },
  { id: 19, title: "Великі блоки часу", insight: "Глибока робота потребує безперервних проміжків.", action: "Забронюйте один блок 45-90 хвилин без перемикань." },
  { id: 20, title: "Відчуття невідкладності", insight: "Швидкість дії допомагає не втратити імпульс.", action: "Після рішення зробіть першу дію протягом двох хвилин." },
  { id: 21, title: "Однозадачність", insight: "Завершена головна справа цінніша за багато початих.", action: "Працюйте над одним завданням, поки не доведете його до завершення." }
];

const frogMapNodes = document.getElementById("frogMapNodes");
const frogMapLines = document.getElementById("frogMapLines");
const panelNumber = document.getElementById("knowledgePanelNumber");
const panelTitle = document.getElementById("knowledgePanelTitle");
const panelInsight = document.getElementById("knowledgePanelInsight");
const panelAction = document.getElementById("knowledgePanelAction");

function pad(value) {
  return String(value).padStart(2, "0");
}

function getPosition(index) {
  const width = window.innerWidth;
  const radius = width <= 1024 ? 39 : 42;
  const angle = (index / chapters.length) * Math.PI * 2 - Math.PI / 2;

  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius
  };
}

function setActiveChapter(chapter) {
  panelNumber.textContent = `Розділ ${pad(chapter.id)}`;
  panelTitle.textContent = chapter.title;
  panelInsight.textContent = chapter.insight;
  panelAction.textContent = chapter.action;

  document.querySelectorAll(".frog-map-node").forEach((node) => {
    node.classList.toggle("frog-map-is-active", Number(node.dataset.chapterId) === chapter.id);
  });
}

function drawLines(positions) {
  frogMapLines.replaceChildren();

  positions.forEach((position) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M 500 500 L ${position.x * 10} ${position.y * 10}`);
    frogMapLines.appendChild(path);
  });
}

function renderMap() {
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
    node.innerHTML = `
      <span class="frog-map-node-number">${pad(chapter.id)}</span>
      <span class="frog-map-tooltip">${chapter.title}</span>
    `;
    node.addEventListener("click", () => setActiveChapter(chapter));
    frogMapNodes.appendChild(node);
  });

  drawLines(positions);
  setActiveChapter(chapters[0]);
}

let resizeTimer = 0;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(renderMap, 120);
});

renderMap();
