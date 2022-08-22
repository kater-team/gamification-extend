import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

dayjs.locale({
    name: 'zh-tw',
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    ordinal: n => `${n}日`,
    formats: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日dddd HH:mm:ss',
    },
    relativeTime: {
        future: '%s內',
        past: '%s前',
        s: '幾秒',
        m: '1 分鐘',
        mm: '%d 分鐘',
        h: '1 小時',
        hh: '%d 小時',
        d: '1 天',
        dd: '%d 天',
        M: '1 個月',
        MM: '%d 個月',
        y: '1 年',
        yy: '%d 年'
    }
});

/**
 * The `humanTime` utility converts a date to a localized, human-readable time-
 * ago string.
 */
export default function humanTime(time: dayjs.ConfigType): string {
    let d = dayjs(time);
    const now = dayjs();

    // To prevent showing things like "in a few seconds" due to small offsets
    // between client and server time, we always reset future dates to the
    // current time. This will result in "just now" being shown instead.
    if (d.isAfter(now)) {
        d = now;
    }

    const day = 864e5;
    const diff = d.diff(dayjs());
    let ago: string;

    // If this date was more than a month ago, we'll show the name of the month
    // in the string. If it wasn't this year, we'll show the year as well.
    //   if (diff < -30 * day) {
    //     if (d.year() === dayjs().year()) {
    //       ago = d.format('D MMM');
    //     } else {
    //       ago = d.format('ll');
    //     }
    //   } else {
    //     ago = d.fromNow();
    //   }

    if (diff < -30 * day) {
        // ago = d.format('MMM D日');
        ago = d.format('YYYY年M月D日  HH:mm:ss')
    } else {
        ago = d.fromNow();
    }

    return ago;
}
