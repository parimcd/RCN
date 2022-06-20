import moment from 'moment';

export const formatDate = (date) => moment(date).format('MMM Do YYYY');

export const remainingDays = (date, age) => {
  let birthday = moment(date);
  let today = moment().format('YYYY-MM-DD');
  let nextBirthday = moment(birthday).add(age, 'years');
  moment(nextBirthday).format('YYYY-MM-DD');
  if (nextBirthday.isBefore(today) || nextBirthday.isSame(today)) {
    nextBirthday = moment(birthday).add(age + 1, 'years');
  }
  return nextBirthday.diff(today, 'days');
};

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const filterByPartName = (users, partName) => {
  partName = partName.trim().toLowerCase();
  return users.filter((obj) => {
    return Object.keys(obj.name).reduce((acc, curr) => {
      return acc || obj.name[curr].toLowerCase().includes(partName);
    }, false);
  });
};
