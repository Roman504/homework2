const student = "Воронов Роман Олегович"; 

document.getElementById("student").innerHTML = student;

const sem1_Week = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);
const sem1_Exam = Array(1).fill([0, 2, 0, 2, 0, 0, 0]);
const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);
const sem2_Week = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);
const sem2_Exam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]);

const array = [sem1_Week, sem1_Exam, holidays, sem2_Week,sem2_Exam];

let weekNumber = 0;
let dayNumber = 0;
let kopilka = 0;

let consolePrise = 23500;
let mealMoney =250;

for (let i = 0; i < array.length; i++) {
    let typeOfWeek = array[i];

    for (let j = 0; j < typeOfWeek.length; j++){
        weekNumber = weekNumber + 1;
        alert(`Неделя номер ${weekNumber}`);
        let week = typeOfWeek[j]
        // alert(week);

        for (let k = 0; k < week.length; k++){
            dayNumber = dayNumber + 1;
            alert(`День номер ${dayNumber}`);
            let kolichectvoPAR = week[k];
            alert(kolichectvoPAR);
            if ((kolichectvoPAR > 0) && (kolichectvoPAR <= 3)) {
                alert(`^_^ / Деньги копим, ибо пар в день: ${kolichectvoPAR}`);

                kopilka = kopilka + mealMoney;

                alert(`Отложил: ${mealMoney} руб.,  в копилке: ${kopilka} руб.`);

            }else if (kolichectvoPAR > 3) {
                (`>_< / Деньги не копим, ибо пар в день: ${kolichectvoPAR}`);
                
            }else{
                alert(`-_- / Деньги не копим, ибо пар в день: ${kolichectvoPAR}`);
            }

            if (kopilka >= consolePrise ) {
                alert(`Ура! Накопил!!! На ${dayNumber} сумму ${kopilka}`);
            }
        }
    
    }
}
