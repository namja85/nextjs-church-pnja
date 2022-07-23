import nextWednesday from 'date-fns/nextWednesday';
import parseISO from 'date-fns/parseISO';

function setTimes(date, { hour, min }) {
  const target = new Date(date);
  target.setHours(hour, min, 0, 0);
  return target;
}

export function getMainWorshipDateTime(date) {
  const times = { hour: 11, min: 0 };
  return setTimes(date, times);
}

export function getPraiseWorshipDateTime(date) {
  const times = { hour: 13, min: 30 };
  return setTimes(date, times);
}

export function getWedWorshipDateTime(date) {
  const times = { hour: 19, min: 0 };
  return setTimes(nextWednesday(parseISO(date)), times);
}
