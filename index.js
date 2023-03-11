import { selectDate } from './modules/selectDate.js';
import { calendar } from './render/calendar.js';
import { $body, $monthDays, calendarFrame, showDate } from './vars/dom.js';

function init() {
  calendar();

  $body.addEventListener('click', (e) => {
    calendarFrame.style.removeProperty('--display', 'block');
  });

  showDate.addEventListener('click', (e) => {
    e.stopPropagation();
    calendarFrame.style.setProperty('--display', 'block');
  });

  $monthDays.addEventListener('click', (e) => {
    e.stopPropagation();
    selectDate(e);
  });
}

init();