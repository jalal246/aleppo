const LONG_YEAR = /(?:\byear\b|\byears\b|\byrs\b|\byyyy\b)/ig;

const SHORT_YEAR = /(?:\by\b|\byy\b|\byyy\b)/ig;

const NUM_MONTH = /(?:\bmo\b|\bmos\b)/ig;

const SHORT_MONTH = /(?:\bmth\b|\bmths\b)/ig;

const LONG_MONTH = /(?:\bmonth\b|\bmonths\b)/ig;

const NUM_WEEK = /\bw\b/ig;

const SHORT_WEEK = /\bwk\b/ig;

const LONG_WEEK = /(?:\bweek\b|\weeks\b)/ig;

const NUM_DAY = /\bd\b/ig;

const SHORT_DAY = /\bdd\b/ig;

const LONG_DAY = /(?:\bday\b|\bdays\b)/ig;

const NUM_HOUR = /(?:\bh\b|\bhr\b|\bhrs\b|\bhour\b|\bhours\b)/ig;


const NUM_HOUR24 = /(?:\bh\b|\bhr\b|\bhrs\b|\bhour\b|\bhours\b|\bh24\b|\bhr24\b|\bhrs24\b|\bhour24\b|\bhours24\b)/ig;

// 678h24
const TIMES_NUM_HOUR24 = /\d+(?:h24\b|hr24\b|bhrs24\b|hour24\b|hours24\b)/ig;

// 678h12
const TIMES_NUM_HOUR12 = /\d+(?:h12\b|hr12\b|bhrs12\b|hour12\b|hours12\b)/ig;

const NUM_HOUR12 = /(?:\bh12\b|\bhr12\b|\bhrs12\b|\bhour12\b|\bhours12\b)/ig;

const NUM_MINUTE = /(?:\bm\b|\bmin\b|\bmins\b|\bminute\b|\bminutes\b)/ig;

const NUM_SECOND = /(?:\bs\b|\bsec\b|\bsecs\b|\bsecond\b|\bseconds\b)/ig;

const NUM_MILISECOND = /(?:\bms\b|\bmili\b|\bmilisec\b|\bmilisecs\b|\bmilisecond\b|\bmiliseconds\b)/ig;

const TS = /(?:\bts\b|\btimestamp\b)/ig;

const LOCAL = /\blocal\b/ig;

const LOCAL_DATE = /(?:\blocal date\b|\blocaldate\b)/ig;

const LOCAL_TIME = /(?:\blocal time\b|\blocalTime\b)/ig;

export {
  // year
  LONG_YEAR,
  SHORT_YEAR,
  // month
  NUM_MONTH,
  SHORT_MONTH,
  LONG_MONTH,
  // week
  NUM_WEEK,
  SHORT_WEEK,
  LONG_WEEK,
  // day
  NUM_DAY,
  SHORT_DAY,
  LONG_DAY,
  // time
  TIMES_NUM_HOUR24,
  NUM_HOUR24,
  NUM_HOUR,
  TIMES_NUM_HOUR12,
  NUM_HOUR12,
  NUM_MINUTE,
  NUM_SECOND,
  NUM_MILISECOND,
  // ts
  TS,
  LOCAL,
  LOCAL_DATE,
  LOCAL_TIME,
};
