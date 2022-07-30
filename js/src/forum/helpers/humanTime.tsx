import dayjs from 'dayjs';
import type Mithril from 'mithril';
import humanTimeUtil from '../utils/humanTime';

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

/**
 * The `humanTime` helper displays a time in a human-friendly time-ago format
 * (e.g. '12 days ago'), wrapped in a <time> tag with other information about
 * the time.
 */
export default function humanTime(time: Date): Mithril.Vnode {
  const d = dayjs(time);

  const datetime = d.format();
  const full = d.format('YYYY年M月D日dddd HH:mm');
  const ago = humanTimeUtil(time);

  const day = 864e5;
  const diff = d.diff(dayjs());

  if (diff < -30 * day) {
    // ago = d.format('MMM D日');
    return (
      <time pubdate datetime={datetime} title={full}>
        {ago}
      </time>
    );
  } else {
    return (
      <time pubdate datetime={datetime} title={full} data-humantime>
        {ago}
      </time>
    );
  }


}
