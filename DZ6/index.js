let count = 0;
let count2 = 0;

const counter = () => {
    const innerCount = document.getElementById("count")
    innerCount.innerText = count;
    const innerCount2 = document.getElementById("count2")
    innerCount2.innerText = count2;
}

const plus = () => {
    count++;
    counter();
}
const minus = () => {
    count--;
    counter();
}
const reset =() =>{
    count = 0;
    counter();
}

const sqr = () => {
    if (count < 0) {
        const error = "Отрицательные числа сложнее возводить в степень";
        const errorText = document.getElementById("error")
        errorText.innerText = error;
    } else {
        count = count * count;
        counter();
    }
}
