import { calendar } from './render/calendar.js';
import { $body, calendarFrame, showDate } from './vars/dom.js';

function init() {
  calendar();

  $body.addEventListener('click', (e) => {
    calendarFrame.style.removeProperty('--display', 'block');
  });

  showDate.addEventListener('click', (e) => {
    e.stopPropagation();
    calendarFrame.style.setProperty('--display', 'block');
  });
}
init();
