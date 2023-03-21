// eslint-disable-next-line import/no-cycle
import { createMessage } from './textEntry';

const allMessages = [];

export default function save(message) {
  allMessages.push(message);
  localStorage.setItem('messages', JSON.stringify({ messages: allMessages }));
}

export function load() {
  let savedMsgs;

  try {
    savedMsgs = JSON.parse(localStorage.getItem('messages'));
    if (savedMsgs.messages) {
      savedMsgs.messages.forEach((item) => {
        createMessage(item.time, item.text, item.coords);
      });
    }
  } catch (e) {
    console.log('Invalid savedMsgs', e);
  }
}
