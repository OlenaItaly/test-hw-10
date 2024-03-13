// // Описаний в документації
// import flatpickr from "flatpickr";
// // Додатковий імпорт стилів
// import "flatpickr/dist/flatpickr.min.css";

// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";


const startBtn=document.querySelector('[data-start]')
let userSelectedDate;
let 
startBtn.addEventListener('click', () => {
    const initTime = Date.now();
    setInterval(() => {
        const currentTime = Date.now();
        const diff = currentTime - initTime;
   console.log(diff); 
},1000)
})



// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// flatpickr(selector, options)