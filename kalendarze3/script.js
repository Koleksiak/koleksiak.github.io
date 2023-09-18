const calendars = document.querySelectorAll('.kalendarz');

const months = [
  'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
  'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
];

const currentMonthIndex = new Date().getMonth();

const currentDay = new Date().getDate();

calendars.forEach((calendar, index) => {
  const monthIndex = currentMonthIndex + index - 1;

  const normalizedMonthIndex = (monthIndex + 12) % 12;

  const currentYear = new Date().getFullYear();

  const startDate = new Date(currentYear, normalizedMonthIndex, 1);

  
  const startDayOfWeek = startDate.getDay();

 
  const dateContainers = calendar.querySelectorAll('.date_container .dzien');

  for (let i = 1; i <= dateContainers.length; i++) {
    const dayIndex = (i + startDayOfWeek - 1) % 7; 

    dateContainers[i - 1].textContent = `${i} (${getDayName(dayIndex)})`;

    if (i === currentDay && index === 1) {
      dateContainers[i - 1].style.border = '2px solid red';
    }
  }

  calendar.querySelector('.month_container span').textContent = months[normalizedMonthIndex];
});

function getDayName(dayIndex) {
  const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  return daysOfWeek[dayIndex];
}
document.addEventListener("keydown", function (event){

    if (event.ctrlKey){
  
       event.preventDefault();
  
    }
  
    if(event.keyCode == 123){
  
       event.preventDefault();
  
    }
  
  })
  document.addEventListener('contextmenu', 

  event => event.preventDefault() 

)