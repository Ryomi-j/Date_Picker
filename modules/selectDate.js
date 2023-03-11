import { getDOM } from "../utils/editDOM.js";
import { calendarFrame, date, showDate } from "../vars/dom.js";

export function selectDate(e) {
  if (e.target && !e.target.classList.contains('date')) return;

  const prevDay = getDOM('.selectedDate');
  if (!!prevDay) prevDay.classList.remove('selectedDate');
  e.target.classList.add('selectedDate');

  // yyyy-mm-dd
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const dd = Number(e.target.textContent) < 10 ? '0' + e.target.textContent : e.target.textContent;

  if (!e.target.classList.contains('prev-date') && !e.target.classList.contains('next-date'))
    console.log(`${yyyy}-${mm}-${dd}`);

  if (e.target.classList.contains('prev-date')) {
    if (parseInt(mm) === 1) {
      mm = 12;
    } else {
      mm = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    }

    yyyy = mm === 12 ? yyyy - 1 : yyyy;
    console.log(`${yyyy}-${mm}-${dd}`);
  }

  if (e.target.classList.contains('next-date')) {
    if (mm === 12) {
      mm = '01';
    } else {
      mm = date.getMonth() + 2 < 10 ? '0' + (date.getMonth() + 2) : date.getMonth() + 2;
    }
    yyyy = mm === '01' ? yyyy + 1 : yyyy;
    console.log(`${yyyy}-${mm}-${dd}`);
  }
  showDate.value = `${yyyy}-${mm}-${dd}`;
  calendarFrame.style.setProperty('--display', 'none');
}