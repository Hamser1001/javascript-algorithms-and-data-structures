const creaturesData = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
const creatureData = "https://rpg-creature-api.freecodecamp.rocks/api/creature/{name-or-id}";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");

const types = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");


const showData = (data) => {

    data.forEach(element => {
        if (element.id == searchInput.value || element.name == Number(searchInput.value)) {
            console.log(element.id, element.name);
            const url = creatureData.replace(
                "{name-or-id}",
                searchInput.value
            );
            console.log(url);
            creatureName.innerText = element.name.trim().toUpperCase();
            creatureId.innerText = `#${element.id}`;

        }
    });
}

const fetchData = async () => {
    try {
        const res = await fetch(creaturesData);
        const data = await res.json();
        showData(data);
    } catch (error) {
        console.log(error)
    }
}


searchBtn.addEventListener("click", () => {
    fetchData();
})