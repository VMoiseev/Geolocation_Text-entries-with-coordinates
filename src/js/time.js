export default function getTime() {
  const now = new Date();

  let date = now.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let month = now.getMonth();
  if (month < 10) {
    month = `0${month + 1}`;
  }

  const year = now.getFullYear();

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${date}.${month}.${year} ${hours}:${minutes}`;
}
