// Preview the page at https://undilut-ed.github.io/cen414CalendarAssignmentJS
var currentMonth = document.querySelector(".current-month");
var daysOfTheMonth = document.querySelector(".calendarbody");
var initDate = new Date((year = 2023), (month = 0));
currentMonth.textContent = initDate.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});
displayCalendar();

function displayCalendar() {
  const monthDays = new Date(
    initDate.getFullYear(),
    initDate.getMonth() + 1,
    0
  ).getDate();
  const lastMonthDays = new Date(
    initDate.getFullYear(),
    initDate.getMonth(),
    0
  ).getDate();

  const startWeekDay = new Date(
    initDate.getFullYear(),
    initDate.getMonth(),
    1
  ).getDay();

  let totalCalendarDay = 6 * 7;

  let listOfDates = document.getElementById("highlights");
  listOfDates.innerHTML = "";

  daysOfTheMonth.innerHTML = "";

  for (let i = 1; i <= totalCalendarDay; i++) {
    let day = i - startWeekDay;
    if (i <= startWeekDay) {
      daysOfTheMonth.innerHTML += `<div class='padding-day'>${
        lastMonthDays + day
      }</div>`;
    } else if (i <= startWeekDay + monthDays) {
      daysOfTheMonth.innerHTML += `<div class='month-day'>${day}</div>`;
    } else {
      daysOfTheMonth.innerHTML += `<div class='padding-day'>${
        day - monthDays
      }</div>`;
    }
  }
  highlightedDates = {
    "My Birthday": [5, 14],
    "CU Anniversary": [9, 20],
    "Mum's Birthday": [4, 8],
    "Dad's Birthday": [2, 6],
    Christmas: [11, 24],
    "Boxing Day": [11, 25],
    "New Year": [0, 0],
    "New Year Holiday": [0, 1],
    "Good Friday": [3, 6],
    "Easter Monday": [3, 10],
    "Id El Fitr": [3, 21],
    "Id El Fitr Holiday": [3, 22],
    "Workers Day": [4, 0],
    "Childrens Day": [4, 26],
    "Democracy Day": [5, 11],
    "Id El Kabir": [5, 27],
    "Id El Kabir Holiday": [5, 28],
    "Id El Maluud": [8, 26],
    "Independence Day": [9, 0],
    "Independence Day Holiday": [9, 1],
  };
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let key in highlightedDates) {
    let colour;
    if (key === "My Birthday") {
      colour = "gold";
    } else if (key === "Mum's Birthday") {
      colour = "rgb(241, 82, 180)";
    } else if (key === "Dad's Birthday") {
      colour = "rgb(128, 128, 128)";
     } else if (key === "CU Anniversary") {
      colour = "black";
    } else {
      colour = "rgb(124, 75, 0)";
    }
    if (initDate.getMonth() == highlightedDates[key][0]) {
      let days = document.querySelectorAll(".month-day");
      listOfDates.innerHTML += `<li>${highlightedDates[key][1] + 1} ${
        months[highlightedDates[key][0]]
      }: ${key}</li>`;
      for (let i = 0; i < days.length; i++) {
        if (i == highlightedDates[key][1]) {
          days[i].style.backgroundColor = colour;
        }
      }
    }
  }
}

document.querySelectorAll(".nav-btn").forEach(function (element) {
  element.addEventListener("click", function () {
    initDate = new Date(currentMonth.textContent);
    if (initDate.getMonth() == 0) {
      initDate.setMonth(
        initDate.getMonth() + (element.classList.contains("previous") ? 0 : 1)
      );
    } else if (initDate.getMonth() == 11) {
      initDate.setMonth(
        initDate.getMonth() + (element.classList.contains("previous") ? -1 : 0)
      );
    } else {
      initDate.setMonth(
        initDate.getMonth() + (element.classList.contains("previous") ? -1 : 1)
      );
    }
    currentMonth.textContent = initDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    displayCalendar();
  });
});
