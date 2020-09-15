import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import utc from 'dayjs/plugin/utc';
import calendar from 'dayjs/plugin/calendar';
import weekday from 'dayjs/plugin/weekday'

export const useTime = () => {
  dayjs.extend(relativeTime);
  dayjs.extend(calendar);
  dayjs.extend(weekday)
  dayjs.extend(utc);
  dayjs.locale('en');

  const formatDate = (number) => {
    return dayjs(new Date()).add(number, 's').format('ddd, MMM-M')
  }

  return {
    formatDate,
  }
}