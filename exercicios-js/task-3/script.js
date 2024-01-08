const bnt_add = document.getElementById("add");

function somar() {
  const number = document.getElementById("num");
  const total = Number(number.innerText) + 1;
  number.innerText = total;
  if(total < 10){
    number.innerText = total;
  }else {
    console.log("Acabou");
  }
}


if (bnt_add) {
  bnt_add.addEventListener("click", somar);
} else {
  console.log("erro");
}