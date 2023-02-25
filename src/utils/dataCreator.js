import { formatDistanceToNow, format } from 'date-fns';

export const dataCreator = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export const transactionDate = date => {
  return format(new Date(date), 'Pp');
};
