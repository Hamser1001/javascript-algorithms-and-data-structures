const creaturesData = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
const creatureData = "https://rpg-creature-api.freecodecamp.rocks/api/creature/{name-or-id}";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const specialName = document.getElementById("special-name");
const specialDescription = document.getElementById("special-description");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

const clearData = () => {
    creatureName.innerText = "";
    creatureId.innerText = "";
    weight.innerText = "";
    height.innerText = "";
    specialName.innerText = "";
    specialDescription.innerText = "";
    types.innerHTML = "";
    ["hp", "attack", "defense", "special-attack", "special-defense", "speed"].forEach(id => {
        document.getElementById(id).innerText = "";
    });
};

const showInfo = (data) => {
    weight.innerText = `Weight: ${data.weight}`;
    height.innerText = `Height: ${data.height}`;
    specialName.innerText = data.special.name;
    specialDescription.innerText = data.special.description;

    data.stats.forEach(stat => {
        const statEl = document.getElementById(stat.name);
        if (statEl) statEl.innerText = stat.base_stat;
    });

    types.innerHTML = data.types.map(t => `<span class="type">${t.name}</span>`).join("");
};

const fetchCreatureByIdOrName = async (input) => {
    try {
        const res = await fetch(creatureData.replace("{name-or-id}", input));
        if (!res.ok) throw new Error("Creature not found");
        const data = await res.json();
        creatureName.innerText = data.name.toUpperCase();
        creatureId.innerText = `#${data.id}`;
        showInfo(data);
    } catch (err) {
        alert("Creature not found");
    }
};

searchBtn.addEventListener("click", () => {
    const input = searchInput.value.trim();
    if (!input) return;

    clearData();
    fetchCreatureByIdOrName(input);
});
