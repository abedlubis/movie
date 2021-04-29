import { IEventsState, IChannelState, IHomeState, IMovieSingle, IMoviesResponse} from '../modules/home/types';
import { URL_API, API_KEY} from "../constants";

export const updateObject = (oldObject: any, updatedProperties: any) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value: string, rules: any) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = value !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};


export const initialHomeState: IHomeState = {
  loading: false,
  events: [],
  movies: [],
  totalMovies: 0,
  page: 1,
  channel: [],
};

export const loadHomeState = () => {
  try {
    let events: IEventsState[] | [];
    events = getCache('events');

    let channel: IChannelState[] | [];
    channel = getCache('channel');

    let movies: IMovieSingle[] | [];
    movies = getCache('movies');

    const homeState: IHomeState = {
      loading: false,
      movies: movies || [],
      totalMovies: 0,
      events: events || [],
      page: 1,
      channel: channel || [],
    };
    return homeState;
  } catch (error) {
    return initialHomeState;
  }
};

export const formatDate = (value: string, long: boolean = false) => {
  const splitDate = value && value.split('-');
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const formated =
    splitDate &&
    splitDate[2] +
      ' ' +
      (long
        ? monthLong[Number(splitDate[1]) - 1]
        : month[Number(splitDate[1]) - 1]) +
      ' ' +
      splitDate[0];
  return formated;
};

export const addEndTime = (value: string | null, minutes: number) => {
  if (value !== null) {
    const splitTime = value && value.split(':');
    const minute = splitTime && Number(splitTime[0]) + minutes;
    return (minute > 20 ? 20 : minute) + ':' + (splitTime && splitTime[1]);
  }
  return value;
};

export const formatTime = (content: IEventsState) => {
  let start = formatDate(content.start_date);
  let end = formatDate(content.end_date);
  const result =
    start +
    (content.start_time !== null ? ' ' + content.start_time : '') +
    ' - ' +
    end +
    (content.end_time !== null ? ' ' + content.end_time : '');
  return result;
};

export const handleResponseFetchMovies = (response: IMoviesResponse) => {
  const movies: IMovieSingle[] = [];
  response.Search.forEach(movie => {
    movies.push({
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    })
  })
  return movies
}

export const randomNumber = (start: number, end: number) => {
  return Math.floor(Math.random() * end) + start;
};

export const getCache = (key: string) => {
  try {
    let cacheKey = localStorage.getItem(key);
    let cache = null;
    if (cacheKey === null) {
      if (typeof cache === 'object') {
        cache = [];
      } else {
        cache = '';
      }
    } else {
      cache = JSON.parse(cacheKey);
    }
    return cache;
  } catch (error) {
    return null;
  }
};

export const updateEvent = (
  events: IEventsState[] | any,
  id: string,
  key: string,
  value: string | boolean | number | null
): IEventsState[] => {
  const objIndex: number = events.findIndex(
    (event: IEventsState) => event.id === id
  );
  const updatedObj = { ...events[objIndex], [key]: value };
  return [
    ...events.slice(0, objIndex),
    updatedObj,
    ...events.slice(objIndex + 1),
  ];
};

export const itemChannel = (list: IChannelState[]): string[] => {
  const newList = list.map((item: IChannelState) => {
    return item.name;
  });
  return ['All', ...newList];
};

export interface IFilterSearch {
  start_date: Date | string | number;
  end_date: Date | string | number;
  channel: string;
}

export const getSearch = (
  events: IEventsState[] | any,
  filter: IFilterSearch | any
) => {
  const startDate = filter.start_date;
  const endDate = filter.end_date;
  const channel = filter.channel;

  const anytime = typeof startDate === 'undefined';
  const filtered = events.filter(function (item: IEventsState | any) {
    const allChannel = channel === 'All' ? true : item.channel === channel;
    return !anytime
      ? dateFormat(new Date(item.start_date), false, true) >=
          dateFormat(new Date(startDate), false, true) &&
          dateFormat(new Date(item.end_date), false, true) <=
            dateFormat(new Date(endDate), false, true) &&
          allChannel
      : allChannel;
  });
  return anytime && channel === 'All' ? events : filtered;
};

export const dateFormat = (
  d: Date,
  tglbln: boolean = false,
  getTime: boolean = false,
  full: boolean = false
) => {
  if (getTime) {
    return d.getTime();
  }
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const tgl =
    year +
    '-' +
    (month + 1 < 10 ? '0' + (month + 1) : month + 1) +
    '-' +
    (date < 10 ? '0' + date : date);
  if (tglbln) {
    return (
      (date < 10 ? '0' + date : date) +
      '-' +
      (month + 1 < 10 ? '0' + (month + 1) : month + 1)
    );
  }
  if (full) {
    return (
      tgl +
      ' ' +
      (hours < 10 ? '0' + hours : hours) +
      ':' +
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' +
      (seconds < 10 ? '0' + seconds : seconds)
    );
  }
  return tgl;
};

export const getSearchDate = (key: string) => {
  const current = new Date();
  let firstday;
  let lastday;
  switch (key) {
    case 'TODAY':
      return [dateFormat(new Date()), dateFormat(new Date())];
    case 'TOMORROW':
      current.setDate(current.getDate() + 1);
      return [dateFormat(current), dateFormat(current)];
    case 'THIS WEEK':
      const first = current.getDate() - current.getDay();
      const last = first + 6;

      firstday = dateFormat(new Date(current.setDate(first)));
      lastday = dateFormat(new Date(current.setDate(last)));
      return [firstday, lastday];
    case 'THIS MONTH':
      firstday = dateFormat(
        new Date(current.getFullYear(), current.getMonth(), 1)
      );
      lastday = dateFormat(
        new Date(current.getFullYear(), current.getMonth() + 1, 0)
      );
      return [firstday, lastday];
    default:
      return [];
  }
};

export const getProfileTabs = (events: IEventsState[] | any, key: string) => {
  const filtered = events.filter((item: IEventsState | any) => {
    if (key === 'past') {
      return (
        item['is_going'] === true &&
        dateFormat(new Date(item.end_date), false, true) <=
          dateFormat(new Date(), false, true)
      );
    }
    return item[key] === true;
  });
  return filtered;
};

export const updateValue = (
  arr: any[],
  id: string,
  idVal: string | boolean | number | null,
  key: string,
  value: string | boolean | number | null
): any[] => {
  if (arr.length > 0) {
    const objIndex: number = arr.findIndex((obj: any) => obj[id] === idVal);
    arr[objIndex][key] = value;
  }
  return arr;
};

export const getEventDetail = (events: IEventsState[] | any, key: string) => {
  const filtered = events.filter((item: IEventsState | any) => {
    return item['id'] === key;
  });
  return filtered.length > 0 ? filtered[0] : {};
};

export const formatPublish = (created: string) => {
  const timeCreated: number = Number(
    dateFormat(new Date(created), false, true)
  );
  const timeStart: number = Number(dateFormat(new Date(), false, true));
  const diffTime = Math.abs(timeStart - timeCreated);
  const seconds = diffTime / 1000;

  let interval = Math.floor(seconds / 31536000);

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days ago';
  }
  interval = Math.floor(seconds / 60);
  if (interval < 60) {
    return interval + ' minutes ago';
  }
  interval = Math.floor(seconds / 3600);
  if (interval < 60 * 60) {
    return interval + ' hours ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};

export const getRandomTime = () => {
  const d: Date = new Date();
  const h = Number(d.getHours());
  const m = Number(d.getMinutes());
  const hours = randomNumber(0, h);
  const minutes = randomNumber(0, m);
  return (
    dateFormat(d) +
    ' ' +
    (hours < 10 ? '0' + hours : hours > 23 ? 23 : hours) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes > 59 ? 59 : minutes)
  );
};

export const generateUrl = (keyword: string, page: number) => `${URL_API}/?apikey=${API_KEY}&s=*${keyword}*&page='${page}`
