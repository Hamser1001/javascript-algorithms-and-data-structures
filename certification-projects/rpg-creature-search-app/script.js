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



const showData = (data) => {
    let url = "";
    data.forEach(element => {
        if (element.id == searchInput.value || element.name == Number(searchInput.value)) {
            console.log(element.id, element.name);
            url = creatureData.replace(
                "{name-or-id}",
                searchInput.value
            );
            creatureName.innerText = element.name.trim().toUpperCase();
            creatureId.innerText = `#${element.id}`;
        }
    });
    console.log(url);
    fetchInfos(url);
}

const showInfo = (data) => {
    weight.innerText = `Weight: ${data.weight}`;
    height.innerText = `Height: ${data.height}`;

    specialName.innerText = data.special.name
    specialDescription.innerText = data.special.description

    data.stats.forEach((el) => {
        const statElement = document.getElementById(el.name); // get element by ID
        if (statElement) {
            statElement.innerText = el.base_stat;
        }
    });
}

const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        showData(data);
    } catch (error) {
        console.log(error)
    }
}


const fetchInfos = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        showInfo(data);
    } catch (error) {
        console.log(error)
    }
}


searchBtn.addEventListener("click", () => {
    fetchData(creaturesData);
})