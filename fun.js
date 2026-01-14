/* 
    TODO: 
    + display small icons on the pool element
    + display icons on roster screen
    + JSON local saving
*/

let charRoster = document.getElementById("character_interface");
let poolsList = document.getElementById("pools");


let pools = [];
let fighters = [
    {fighter: "Mario",active: true, imgpath:""},
    {fighter: "DK",active: true, imgpath:""},
    {fighter: "Link",active: true, imgpath:""},
    {fighter: "Samus",active: true, imgpath:""},
    {fighter: "Dark Samus",active: true, imgpath:""},
    {fighter: "Yoshi",active: true, imgpath:""},
    {fighter: "Kirby",active: true, imgpath:""},
    {fighter: "Fox",active: true, imgpath:""},
    {fighter: "Pikachu",active: true, imgpath:""},
    {fighter: "Luigi",active: true, imgpath:""},
    {fighter: "Ness",active: true, imgpath:""},
    {fighter: "Captain Falcon",active: true, imgpath:""},
    {fighter: "Jigglypuff",active: true, imgpath:""},
    {fighter: "Gandorf",active: true, imgpath:""},
    {fighter: "Young Link",active: true, imgpath:""},
    {fighter: "Lucina",active: true, imgpath:""},
    {fighter: "Marth",active: true, imgpath:""},
    {fighter: "Falco",active: true, imgpath:""},
    {fighter: "Pichu",active: true, imgpath:""},
    {fighter: "Dr. Mario",active: true, imgpath:""},
    {fighter: "Zelda",active: true, imgpath:""},
    {fighter: "Sheik",active: true, imgpath:""},
    {fighter: "Ice Climbers",active: true, imgpath:""},
    {fighter: "Bowser",active: true, imgpath:""},
    {fighter: "Daisy",active: true, imgpath:""},
    {fighter: "Peach",active: true, imgpath:""},
    {fighter: "Mewtwo",active: true, imgpath:""},
    {fighter: "Roy",active: true, imgpath:""},
    {fighter: "Chrom",active: true, imgpath:""},
    {fighter: "Game & Watch",active: true, imgpath:""},
    {fighter: "Meta Knight",active: true, imgpath:""},
    {fighter: "Pit",active: true, imgpath:""},
    {fighter: "Dark Pit",active: true, imgpath:""},
    {fighter: "Zero Suit Samus",active: true, imgpath:""},
    {fighter: "Wario",active: true, imgpath:""},
    {fighter: "Snake",active: true, imgpath:""},
    {fighter: "Ike",active: true, imgpath:""},
    {fighter: "Pokemon Trainer",active: true, imgpath:""},
    {fighter: "Diddy Kong",active: true, imgpath:""},
    {fighter: "Little Mac",active: true, imgpath:""},
    {fighter: "Rosalina",active: true, imgpath:""},
    {fighter: "Wii Fit Trainer",active: true, imgpath:""},
    {fighter: "Mega Man",active: true, imgpath:""},
    {fighter: "Villager",active: true, imgpath:""},
    {fighter: "Wolf",active: true, imgpath:""},
    {fighter: "Toon Link",active: true, imgpath:""},
    {fighter: "ROB",active: true, imgpath:""},
    {fighter: "Lucario",active: true, imgpath:""},
    {fighter: "Olimar",active: true, imgpath:""},
    {fighter: "King Dedede",active: true, imgpath:""},
    {fighter: "Sonic",active: true, imgpath:""},
    {fighter: "Lucas",active: true, imgpath:""},
    {fighter: "Greninja",active: true, imgpath:""},
    {fighter: "Palutena",active: true, imgpath:""},
    {fighter: "Pacman",active: true, imgpath:""},
    {fighter: "Robin",active: true, imgpath:""},
    {fighter: "Shulk",active: true, imgpath:""},
    {fighter: "Bowser Jr.",active: true, imgpath:""},
    {fighter: "Duck Hunt Duo",active: true, imgpath:""},
    {fighter: "Ryu",active: true, imgpath:""},
    {fighter: "Ken",active: true, imgpath:""},
    {fighter: "Cloud",active: true, imgpath:""},
    {fighter: "Corrin",active: true, imgpath:""},
    {fighter: "Bayonetta",active: true, imgpath:""},
    {fighter: "Inkling",active: true, imgpath:""},
    {fighter: "Ridley",active: true, imgpath:""},
    {fighter: "Simon",active: true, imgpath:""},
    {fighter: "Ricther",active: true, imgpath:""},
    {fighter: "King K Rool",active: true, imgpath:""},
    {fighter: "Isabelle",active: true, imgpath:""},
    {fighter: "Incineroar",active: true, imgpath:""},
    {fighter: "Pirhana Plant",active: true, imgpath:""},
    {fighter: "Joker",active: true, imgpath:""},
    {fighter: "Hero",active: true, imgpath:""},
    {fighter: "Banjo",active: true, imgpath:""},
    {fighter: "Terry",active: true, imgpath:""},
    {fighter: "Byleth",active: true, imgpath:""},
    {fighter: "Min Min",active: true, imgpath:""},
    {fighter: "Steve",active: true, imgpath:""},
    {fighter: "Sephiroth",active: true, imgpath:""},
    {fighter: "Pyra & Mythra",active: true, imgpath:""},
    {fighter: "Kazuya",active: true, imgpath:""},
    {fighter: "Sora",active: true, imgpath:""}
    ]
    
let players = [];

let rosterHtml = ""; // html code for the roster that is displayed upon render
let poolsHtml = ""; // html code for the pools that is displayed upon render

function render(){

    // roster render
    fighters.forEach(currentFighter => {

    if(currentFighter.active) {
        rosterHtml += `<li id="${currentFighter.fighter}" onclick="toggleFighter(this.id)">${currentFighter.fighter}</li>`;
    } else {
        rosterHtml += `<li class="disabled" id="${currentFighter.fighter}" onclick="toggleFighter(this.id)">${currentFighter.fighter}</li>`;
    }
    })
    charRoster.innerHTML = rosterHtml;
    rosterHtml = ""

    // pools render
    pools.forEach((pool, index) => {
        poolsHtml +=  `
        <li class="pool"> 
            <div class="poolTextField">
                <p>${pool.name}</p>
            </div>
            <div class="poolIconField">
            ${pool.data}
            </div>
            <div class="poolUIField">
                <input type="checkbox">
                <button onclick="deleteMe(this)" id="${index}">Delete</button>
            </div>
        </li>`;

        /*
        Display character images inside the tab
        pool.data.forEach(fighter => {
            
        })
        */
        index++;
    })
    poolsList.innerHTML = poolsHtml;
    poolsHtml = ""
}

render(); // initial render


function toggleFighter(currentFighter){
    console.log("toggle " + currentFighter); 
    fighterValue = fighters.find(obj => obj.fighter === currentFighter);
    fighterValue.active = !fighterValue.active 
    render();
}

function collectCurrentPool(){
    if (document.getElementById("poolName").value == "") return
    let newPool = [];

    
    fighters.forEach((currentFighter, i) => {
        if(currentFighter.active){
            newPool.push(currentFighter.fighter)
        }
        i++;
    })
    console.log(newPool);

    const existingIndex = pools.findIndex(pool => pool.name.toLowerCase() === document.getElementById("poolName").value.toLowerCase());
    if(existingIndex !==-1){
       console.log(existingIndex);
       pools[existingIndex] = {
            name: document.getElementById("poolName").value,
            data: newPool}
    } else {
        pools.push({
            name:document.getElementById("poolName").value,
            data: newPool});
    }
    render()
    document.getElementById("poolName").value = ""
}

function disableAll(){
    fighters.forEach(currentFighter =>{
        currentFighter.active = false
    })
    render()
}
function enableAll(){
    fighters.forEach(currentFighter =>{
        currentFighter.active = true
    })
    render()
}

function deleteMe(e){
    pools.splice(e.id,1) // e.id: id attribute of pool delete button in html
    render()
}

function playGame() {
    const checkboxes = document.querySelectorAll(".poolUIField input[type='checkbox']");

    const selectedPools = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedPools.push(pools[index]); // samme index som i pools-array
        }
    });

    characterRevealHtml ="";
    selectedPools.forEach(pool =>{
    const randomFighter = pool.data[Math.floor(Math.random() * pool.data.length)];
    console.log(pool.name + ": " + randomFighter);

    characterRevealHtml += 
    `
    <div class="characterDisplaySection">
        <div>
            <h2>${pool.name}: ${randomFighter}</h2>
        </div>
        <div>
            <p> PLACE HOLDER FOR IMG </p>
        </div>
    </div>
    `
    })
    document.getElementById("characterPopup").innerHTML = characterRevealHtml

    if (selectedPools.length > 0) {
            document.getElementById("characterPopup").style.display = "flex"
    }
}

document.getElementById("poolNameForm").addEventListener("submit", (e) => {
    e.preventDefault();
    collectCurrentPool(); 
});

function closeWindow(){
    document.getElementById("characterPopup").style.display = "none"
}
