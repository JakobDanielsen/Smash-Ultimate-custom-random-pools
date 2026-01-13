/* 
    TODO: 
    + displayPool()
    + display small icons on the pool element
    + prevent mulitple pools with same name (overwrite)
*/

let charRoster = document.getElementById("character_interface");
let poolsList = document.getElementById("pools");


let allFighters = ["Mario","DK","Link","Samus","Dark Samus","Yoshi","Kirby","Fox","Pika","Luigi","Ness","Captian Falcon","Jiggly","Ganondorf","Young Link","Lucina","Marth","Falco","Pichu","Dr Mario","Zelda","Sheik","Ice Climbers","Bowser","Daisy","Peach","Mewtwo","Roy","Chrom","Game&Watch","Meta Knight","Pit","Dark Pit","ZSS","Wario","Snake","Ike","Pokemon Trainer","Diddy","Little Mac","Rosalina","Wii fit","Mega man","Villager","Wolf","Toon Link","ROB","Lucario","Olimar","Dedede","Sonic","Lucas","Greninja","Palutena","Pacman","Robin","Shulk","Bowser jr","Duck hunt","Ryu","Ken","Cloud","Corrin","Bayonetta","Inkling","Ridley","Simon","Ricther","King k rool","Isabelle","Incineroar","Pirhana plant","Joker","Hero","Banjo", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth","Pyra & Mythra", "Kazuya", "Sora"];
let includedFighters = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]

let pools = [];

let rosterHtml = ""; // html code for the roster that is displayed upon render
let poolsHtml = ""; // html code for the pools that is displayed upon render

function render(){

    // roster render
    allFighters.forEach(fighter => {

    if(includedFighters[allFighters.indexOf(fighter)]) {
    rosterHtml += `<li id="${fighter}" onclick="toggleFighter('${fighter}')">${fighter}</li>`;
    } else {
    rosterHtml += `<li class="disabled" id="${fighter}" onclick="toggleFighter('${fighter}')">${fighter}</li>`;
    }
    })
    charRoster.innerHTML = rosterHtml;
    rosterHtml = ""

    // pools render
    
    pools.forEach(pool => {
        poolsHtml +=  `<li class="pool" onclick="displayPool"> 
        <div class="poolTextField"><p>${pool.name}</p></div>
        <div class="poolIconField"></div>
        </li>`;

        /*
        Display character images inside the tab
        pool.data.forEach(fighter => {
            
        })
        */

    })
    poolsList.innerHTML = poolsHtml;
    poolsHtml = ""
}

render(); // initial render


function toggleFighter(fighter){
    console.log("toggle " + fighter); 
    includedFighters[allFighters.indexOf(fighter)] = !includedFighters[allFighters.indexOf(fighter)] 
    render();
}

function collectCurrentPool(){
    let newPool = [];

    let i = 0;
    includedFighters.forEach(fighterActive => {
        if(fighterActive){
            newPool.push(allFighters[i])
        }
        i++;
    })
    // console.log(newPool);

    pools.push({
        name:document.getElementById("poolName").value,
        data: newPool});
    render()
}