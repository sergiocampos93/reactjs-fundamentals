const formartDate = (date: Date): string => {
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${day}/${month}/${date.getFullYear()}`;
};

export default formartDate;
