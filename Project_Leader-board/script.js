let fName = document.querySelector("#firstName");
let lName = document.querySelector("#lastName");
let region = document.querySelector("#countries");
let score = document.querySelector("#score")
let addBtn = document.querySelector(".box button");
let updateResult = document.querySelector("#show_result tbody");
let players = [];

// addTask function will be triggered when clicking on addBtn
addBtn.addEventListener("click", addTask);

// addTask function will be triggered when clicking on addBtn
function addTask() {
    // create a player object
    let player = {
        my_fName: fName.value,
        my_lName: lName.value,
        my_country: region.value,
        my_score: Number(score.value),
    };

    if (!player.my_fName || player.my_lName || !player
        .my_country === "Select Country" || isNaN(player.my_score)
    ) {
        alert("please fill all the fields correctly");
    }
    // add player to array
    players.push(player);

    // sort players by score(highest frist)
    players.sort((a, b) => b.my_score - a.my_score);

    // update the LeaderBoard
    renderLeaderBoard();

    // clear every input after creating td
    fName.value = "";
    fName.focus();  // added focus on fname input
    lName.value = "";
    region.value = "Select Country";
    score.value = "";
}


function renderLeaderBoard() {

    let tr = document.createElement("tr");
    
    let fName_td = document.createElement('td');
    fName_td.innerHTML = players.my_fName

    let lName_td = document.createElement('td');
    lName_td.innerHTML = players.my_lName;

    let region_td = document.createElement('td');
    region_td.innerHTML = players.my_country;

    let score_td = document.createElement('td');
    score_td.classList = "score";
    score_td.innerHTML = players.my_score;

    let dltIcon = document.createElement("i");
    dltIcon.classList.add("fa-solid", "fa-trash");
    dltIcon.style.color = "red";

    // dltList function will be trigger at the time of click on dltIcon
    dltIcon.addEventListener("click", () => dltList(tr));

    let incrScore = document.createElement("button");
    incrScore.innerHTML = " +5 "

    // scoreBadhao function will be trigger at the time of click on innerScore
    incrScore.addEventListener("click", () => scoreBadhao(score_td));

    let DecrScore = document.createElement("button");
    DecrScore.innerHTML = " -5 "

    // scoreGhatao function will be trigger at the time of click on decrScore
    DecrScore.addEventListener("click", () => scoreGhatao(score_td));

    // append every created td in tr
    tr.append(fName_td, lName_td, region_td, score_td, dltIcon, incrScore, DecrScore);

    updateResult.append(tr);
}

// dltList function will be delete the entire td from tr
function dltList(list) {
    list.remove();
}

// scoreBadhao funcion will be add(plus) 5 more number in current score in Leader Board
function scoreBadhao(score) {
    score.innerHTML = Number(score.innerHTML) + 5;
    // sorting();
}

// scoreGhatao funcion will be remove(minus) 5 number current from score in Leader Board    
function scoreGhatao(score) {
    score.innerHTML = Number(score.innerHTML) - 5;
}

