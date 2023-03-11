import { events } from './modules/eventListener.js';
import { calendar } from './render/calendar.js';

function init() {
  calendar();
  events()
}

init();