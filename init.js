let saveNum = document.getElementById("save-el");
let peopleNum = document.getElementById("people-num");
let count = 0;

function increment() {
  let increment = count++;
  peopleNum.innerHTML = count;
}

function save() {
  let save = count + " " + "-" + " ";
  saveNum.innerHTML += save;
  peopleNum.textContent = 0;
  count = 0;
}
