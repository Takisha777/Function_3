const getDivisorsCount = (number)=>{
    if (isNaN(number)) {
        return NaN;
    }
    if (Number.isInteger(number) && number > 0){
        let counter = 0;
        for (let i = 1; i <=number; i++){
            if(number % i){
                continue;
            }
            counter++;
        }
        return counter;
    }
    alert(`${number} должен быть целым числом и больше нуля!”`);
}
console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
console.log(getDivisorsCount('wer'));
console.log(getDivisorsCount(0));
console.log(getDivisorsCount(30.5));
console.log(getDivisorsCount(-3));
console.log(getDivisorsCount());