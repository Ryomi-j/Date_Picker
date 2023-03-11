import { getAllDOM, getDOM } from '../utils/editDOM.js';
import { $monthDays, date } from '../vars/dom.js';

export const calendar = () => {
    date.setDate(1);
  
    // 해당 달의 마지막 날짜 가져오기
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
    // 이전달의 마지막 날짜 가져오기
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  
    const firstDayIndex = date.getDay();
  
    // 해당 달의 마지막 요일 가져오기 -> 일~토는 0~6번
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  
    // 다음달의 시작 요일 가져오기
    const nextDays = 7 - lastDayIndex - 1;
  
    // 특정 월로 바꾸기
    // date.setMonth(5) // 6월
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
  
    // 현재 달에 이전달 날짜 채우기
    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="date prev-date">${prevLastDay - x + 1}</div>`;
    }
  
    // 1-31일 까지 렌더링
    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="date today">${i}</div>`;
      } else {
        days += `<div class="date">${i}</div>`;
      }
    }
  
    // 현재달에 다음달의 날짜 채우기
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="date next-date">${j}</div>`;
    }
  
    $monthDays.innerHTML = days;
  
    // 일요일에 빨간색 넣기
    const sunday = [...getAllDOM('.date')];
    let arr = sunday.filter((_, idx) => idx % 7 === 0);
    arr.map((el) => el.style.setProperty('color', 'red'));
  };