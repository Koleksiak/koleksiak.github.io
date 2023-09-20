const calendars = document.querySelectorAll('.kalendarz');

const months = [
  'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
  'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
];

const currentMonthIndex = new Date().getMonth();
const currentYear = new Date().getFullYear();
const currentDay = new Date().getDate();

calendars.forEach((calendar, index) => {
  const monthIndex = currentMonthIndex + index - 1;
  const normalizedMonthIndex = (monthIndex + 12) % 12;
  
  // Oblicz ilość dni w bieżącym miesiącu
  const lastDayOfMonth = new Date(currentYear, normalizedMonthIndex + 1, 0).getDate();

  const startDayOfWeek = new Date(currentYear, normalizedMonthIndex, 1).getDay();

  // Znajdź wszystkie kontenery dni
  const dateContainers = calendar.querySelectorAll('.date_container .dzien');

  // Iteruj przez dni
  for (let i = 1; i <= dateContainers.length; i++) {
    const dayIndex = (i + startDayOfWeek - 1) % 7;

    // Aktualizuj treść kontenera dnia
    if (i <= lastDayOfMonth) {
      dateContainers[i - 1].textContent = `${i} (${getDayName(dayIndex)})`;
    } else {
      // Jeśli dni przekraczają liczbę dni w miesiącu, usuń kontenery dni
      dateContainers[i - 1].parentNode.remove();
    }

    // Zaznacz aktualny dzień
    if (i === currentDay && index === 1) {
      dateContainers[i - 1].style.border = '2px solid red';
    }
  }

  // Ustaw nazwę miesiąca
  calendar.querySelector('.month_container span').textContent = months[normalizedMonthIndex];
});

function getDayName(dayIndex) {
  const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  return daysOfWeek[dayIndex];
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
  if (event.keyCode == 123) {
    event.preventDefault();
  }
});

document.addEventListener('contextmenu',
  event => event.preventDefault()
);
