import { calendar } from '../render/calendar.js';
import { $body, $monthDays, $calendarFrame, date, $nextMonth, $prevMonth, $showDate } from '../vars/dom.js';
import { selectDate } from './selectDate.js';

export function events() {
  $body.addEventListener('click', (e) => {
    if (e.target.tagName === 'H1' || e.target.tagName === 'BODY'){
      $calendarFrame.style.removeProperty('--display', 'block');
    }
  });

  $showDate.addEventListener('click', (e) => {
    e.stopPropagation();
    $calendarFrame.style.setProperty('--display', 'block');
  });

  $monthDays.addEventListener('click', (e) => {
    e.stopPropagation();
    selectDate(e);
  });

  $prevMonth.addEventListener('click', (e) => {
    e.stopPropagation();
    date.setMonth(date.getMonth() - 1);
    calendar();
  });

  $nextMonth.addEventListener('click', (e) => {
    e.stopPropagation();
    date.setMonth(date.getMonth() + 1);
    calendar();
  });
}
