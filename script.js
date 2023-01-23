"use strict"
const currentDate = document.querySelector(".current-date");
 let daysTag = document.querySelector(".days");
 let prevNextIcon = document.querySelectorAll(".icons span");

//Getting new date, current month and year
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const renderCalender = () =>{
    let firstDayofMonth = new Date(currYear,currMonth, 1).getDay(),//getting first day of month
     lastDateofMonth = new Date(currYear,currMonth + 1, 0).getDate();//getting last date of month
      const lastDayofMonth = new Date(currYear,currMonth, lastDateofMonth).getDay();//getting last day of month
      const lastDateofLastMonth = new Date(currYear,currMonth, 0).getDate();//getting last date of previous month
    let liTag= "";

    for(let i =firstDayofMonth; i>0;i--){ //Creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth -i +1}</li>`;

    }

    for (let i = 1; i <=lastDateofMonth; i++) { //Creating li of all days of current month
        //adding active class to li if the current day, month and year matched
        let isToday = i ===date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
       liTag += `<li class="${isToday}">${i}</li>`;
        
    }
    for (let i = lastDayofMonth; i < 6; i++) { // Creating li of next month first days
        liTag += `<li class="inactive">${ i - lastDayofMonth  +1}</li>`;

        
    }

currentDate.innerText = `${months[currMonth]} ${currYear}`;
daysTag.innerHTML = liTag;
}
renderCalender();

prevNextIcon.forEach(icon=>{
    icon.addEventListener("click", () =>{  //adding click events on both icons
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11){ //if current month is less than 0 or greater than 11

            //Creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        }else{ //else pass new Date as date value
            date = new Date();
        }
        renderCalender();
    })
})