const plans = [
  {
    provider: "ChatGPT",
    name: "Free",
    price: 0,
    displayPrice: "$0",
    cadence: "/ hó",
    color: "#10a37f",
    meta: "Alap ChatGPT-hozzáférés böngészőben és appban.",
    features: [
      "GPT-5.5 Instant hozzáférés alap limitekkel",
      "Fájlok, képek és hang funkciók korlátozottan",
      "Jó próba mindennapi kérdésekhez",
    ],
    note: "Ingyenes, de a forgalomtól és funkciótól függő használati limitekkel.",
  },
  {
    provider: "ChatGPT",
    name: "Plus",
    price: 20,
    displayPrice: "$20",
    cadence: "/ hó",
    color: "#10a37f",
    meta: "Fejlettebb modellek és bővített limitek egyéni felhasználóknak.",
    features: [
      "Bővített GPT-5.5 Thinking, üzenet- és feltöltési limitek",
      "Deep Research, agent mód, projektek és egyedi GPT-k",
      "Bővített Codex-használat fejlesztéshez",
    ],
    note: "Az EGT-ben webes checkoutnál eurós lokalizált ár jelenhet meg.",
  },
  {
    provider: "ChatGPT",
    name: "Pro",
    price: 100,
    displayPrice: "$100-tól",
    cadence: "/ hó",
    color: "#0b8068",
    meta: "Nagyobb kapacitás komoly, rendszeres AI-munkához.",
    features: [
      "GPT-5.5 Pro és magasabb használati keret",
      "5× vagy 20× Plus-szintű használati allowance",
      "Maximum Deep Research, agent mód, képgenerálás és Codex-feladatok",
    ],
    note: "A Pro két szinten érhető el: $100 és $200 havonta.",
  },
  {
    provider: "Google Gemini",
    name: "Free",
    price: 0,
    displayPrice: "€0",
    cadence: "/ hó",
    color: "#4776e6",
    meta: "Alap Gemini-hozzáférés privát Google-fiókkal Ausztriában.",
    features: [
      "Gemini 3 Flash hozzáférés",
      "Képalkotás, Deep Research, Gemini Live és Canvas korlátozottan",
      "15 GB Google-tárhely Fotókhoz, Drive-hoz és Gmailhez",
    ],
    note: "Jó kiindulás, ha még csak kipróbálnád a Geminit.",
  },
  {
    provider: "Google Gemini",
    name: "Google AI Plus",
    price: 7.99,
    displayPrice: "€7,99",
    cadence: "/ hó",
    color: "#5f7eea",
    meta: "Olcsóbb belépő bővített Gemini-funkciókkal.",
    features: [
      "Bővített hozzáférés Gemini 3.1 Pro és Deep Research funkciókhoz",
      "Gemini Google-appokban, például Gmailben és Vidsben",
      "200 GB Google One-tárhely",
    ],
    note: "Ausztriára publikált ár a Google előfizetési oldalán.",
  },
  {
    provider: "Google Gemini",
    name: "Google AI Pro",
    price: 21.99,
    displayPrice: "€21,99",
    cadence: "/ hó",
    color: "#6a5be8",
    meta: "Erős választás Google Workspace és NotebookLM mellé.",
    features: [
      "Nagyobb hozzáférés Gemini 3.1 Pro, Deep Research és Nano Banana Pro funkciókhoz",
      "Gemini Gmailben, Docsban, Vidsben és további Google-appokban",
      "NotebookLM bővített limitek és 5 TB Google One-tárhely",
    ],
    note: "18+ felhasználóknak, saját kezelésű privát Google-fiókkal.",
  },
  {
    provider: "Google Gemini",
    name: "Google AI Ultra",
    price: 274.99,
    displayPrice: "€274,99",
    cadence: "/ hó",
    color: "#8e54e9",
    meta: "Maximális Gemini/Flow hozzáférés intenzív kreatív munkához.",
    features: [
      "Legmagasabb modell- és videógenerálási limitek",
      "Google Home Premium Advanced és YouTube Premium egyéni tagság",
      "30 TB Google One-tárhely",
    ],
    note: "A legdrágább lakossági Gemini opció Ausztriában.",
  },
];

const grid = document.querySelector("#plans-grid");
const budget = document.querySelector("#budget");
const budgetOutput = document.querySelector("#budget-output");

function formatBudget(value) {
  return `€${Number(value).toLocaleString("hu-HU")}`;
}

function renderPlans(maxBudget = Number(budget.value)) {
  grid.innerHTML = "";

  plans.forEach((plan) => {
    const card = document.createElement("article");
    card.className = "plan-card";
    card.style.setProperty("--card-color", plan.color);

    const comparablePrice = plan.provider === "ChatGPT" ? plan.price : plan.price;
    if (comparablePrice > maxBudget) {
      card.classList.add("hidden");
    }

    card.innerHTML = `
      <span class="card-provider">${plan.provider}</span>
      <h3>${plan.name}</h3>
      <p class="card-meta">${plan.meta}</p>
      <div class="price">${plan.displayPrice} <small>${plan.cadence}</small></div>
      <ul class="features">
        ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
      <p class="card-footer">${plan.note}</p>
    `;

    grid.append(card);
  });
}

budget.addEventListener("input", (event) => {
  budgetOutput.value = formatBudget(event.target.value);
  renderPlans(Number(event.target.value));
});

budgetOutput.value = formatBudget(budget.value);
renderPlans();
