import {format, getTime} from 'date-fns';
import {ru} from 'date-fns/locale';

export function formatDateLastMessage(date: number | Date) {
  const time = getTime(date);
  const now = Date.now();
  const diff = now - time;

  if (diff <= 86400000) {
    return format(time, 'HH:mm');
  } else if (diff <= 86400000 * 7) {
    return format(time, 'EEEEEE', {locale: ru});
  } else if (diff <= 86400000 * 365) {
    return format(time, 'dd.LL');
  } else {
    return format(time, 'dd.LL.yy');
  }
}
