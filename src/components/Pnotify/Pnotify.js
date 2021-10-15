import { Stack, alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import s from './Pnotify.module.scss'

function pnotifyMessage(type,alertType) {
   if (typeof window === 'undefined') {
    window = new Stack({
      dir1: 'down',
      dir2: 'right',
      firstpos1: 25,
      firstpos2: 25,
      push: 'top',
      maxStrategy: 'close'
    });
  }

    const opts = {
        title: 'Info',
        text: `message`,
        delay: 6000,
        addClass: s.optsStylesSuccess,
    };
    const optsInfo = {
        title: 'Info',
        text: `message`,
        delay: 6000,
        addClass: s.optsStylesIhfo,
    };
    switch (type) {
    case 'already registered':
      optsInfo.title = 'This email is already registered';
      optsInfo.text = 'Please login!';
        break;
    case 'confirmation mail':
      opts.title = 'To confirm the registration';
      opts.text = 'A letter has been sent to your mail';
        break;
  }
  switch (alertType) {
    case 'opts':
      alert(opts);
      break;
    case 'optsInfo':
      alert(optsInfo);
      break;
  }
}
export { pnotifyMessage }

