import { getDOM } from "../utils/editDOM.js";

export const date = new Date();

export let $monthDays = getDOM('.days');

export const $body = getDOM('body');
export const showDate = getDOM('.showDate');
export const calendarFrame = getDOM('.calendar');

export const prevMonth = getDOM('.prev');
export const nextMonth = getDOM('.next');