let num = 0;
const butPlus = document.getElementById('plus')
butPlus.onclick =() => {
    num++
    console.log(num)
}
const butMinus = document.getElementById('minus')
butMinus.onclick =() => {
    num--
    console.log(num)
}