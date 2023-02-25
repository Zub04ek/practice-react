import { formatDistanceToNow } from 'date-fns';

export const dataCreator = (data) => {
    return formatDistanceToNow(new Date(data), { addSuffix: true });
}