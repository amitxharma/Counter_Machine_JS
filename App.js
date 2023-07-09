const countDataElement = document.getElementById("count-number");
const prevCountElement = document.getElementById("previousCount");
let count = 0;

function counter() {
  count++;
  console.log(count);
  countDataElement.innerHTML = count;
}

function save() {
  let countStr = count + " - ";
  prevCountElement.innerHTML += countStr;
  countDataElement.textContent = 0;
  count = 0;
}

function reset() {
  prevCountElement.innerHTML = "";
}
