const color = prompt("Введите цвет")

switch (color) {
    case "Красный":
        console.log("Ехать нельзя");
        break;
    case "Желтый":
        console.log("Предупреждение");
        break;
    case "Зеленный":
        console.log("Ехать можно");
        break;
    default:
        console.log("В светофоре только 3 цвета: Красный, Желтый и Зеленый");
        break;
}