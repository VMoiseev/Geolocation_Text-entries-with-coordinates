import validate from './validateCoords';

export default function getCoords(value) {
  const coorArr = value.split(',');
  const latitude = coorArr[0].trim();
  const longitude = coorArr[1].trim();
  if (validate(value)) {
    return `[${latitude}, ${longitude}]`;
  }
  return false;
}
