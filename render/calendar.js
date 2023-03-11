import { getAllDOM, getDOM } from '../utils/editDOM.js';
import { $monthDays, date } from '../vars/dom.js';

export const calendar = () => {
  date.setDate(1);

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  getDOM('.yearAndMonth h2').innerHTML = months[date.getMonth()]; // 달 가져오기
  getDOM('.yearAndMonth p').innerHTML = date.getFullYear(); // 날짜(년/월/일/요일)를 문장으로 바꾸기

  let days = '';

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="date prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="date today">${i}</div>`;
    } else {
      days += `<div class="date">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="date next-date">${j}</div>`;
  }

  $monthDays.innerHTML = days;

  const sunday = [...getAllDOM('.date')];
  let arr = sunday.filter((_, idx) => idx % 7 === 0);
  arr.map((el) => el.style.setProperty('color', 'red'));
};
