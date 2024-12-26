const fullname = document.querySelector("#fname");
const lastname = document.querySelector("#lname");
const countries = document.querySelector("#countries");
const score = document.querySelector("#score");
const table = document.querySelector("table tbody");
const btn = document.querySelector("#btn");
let scorearray = [];


btn.addEventListener("click",(e)=>
{
  e.preventDefault();
  let obj1 = {
    id : scorearray.length+1,
    fname:fullname.value,
    lname : lastname.value,
    countries :countries.value,
    score : Number(score.value)
  }
  scorearray.push(obj1)
  sort()
  enterscore()
})

function sort() {
  scorearray.sort((a, b) =>{return Number(b.score) - Number(a.score)});
}

function enterscore() {
table.innerHTML=""
  scorearray.forEach((obj1)=>
  {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.innerHTML = obj1.fname

  const td2 = document.createElement("td");
  td2.innerHTML =  obj1.lname

  const td3 = document.createElement("td");
  td3.innerHTML = obj1.countries

  const td4 = document.createElement("td");
  td4.innerHTML = obj1.score

  
  const deleteicon = document.createElement("i");
  deleteicon.classList.add("fa-solid", "fa-trash");
  deleteicon.addEventListener("click", () => deletetask(tr))



  const span = document.createElement("span");
  span.innerHTML = "+5"
  span.addEventListener("click", () => increase(td4))

  const span1 = document.createElement("span");
  span1.innerHTML = "-5"
  span1.addEventListener("click", () => decrease(td4))


  tr.append(td1, td2, td3, td4);
  tr.append(deleteicon, span, span1)
  table.append(tr);

  fullname.value = ""
  lastname.value = ""
  score.value = ""
  countries.value = "Choose Country"
})
}

function deletetask(list) {
  list.remove()
}

function increase(plus) {
  plus.innerHTML = Number(plus.innerHTML) + 5
}

function decrease(less) {
  less.innerHTML = Number(less.innerHTML) - 5
}
 

  
    