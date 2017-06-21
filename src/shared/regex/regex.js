const DATE = {
  YEAR: {
    SHORT: /(?:\by\b|\byy\b|\byyy\b)/ig,
    FULL: /(?:\byear\b|\byears\b|\byrs\b|\byyyy\b)/ig,
    ALL: /(?:\by\b|\byy\b|\byyy\b|\byear\b|\byears\b|\byrs\b|\byyyy\b)/ig,
  },
  MONTH: {
    CHAR: /(?:\bmo\b|\bmon\b|\bmos\b|\bmons\b)/ig,
    SHORT: /(?:\bmth\b|\bmths\b)/ig,
    FULL: /(?:\bmonth\b|\bmonths\b)/ig,
    ALL: /(?:\bmo\b|\bmos\b|\bmon\b|\bmons\b|\bmth\b|\bmths|\bmonth\b|\bmonths\b)/ig,
  },
  WEEK: {
    CHAR: /\bw\b/ig,
    SHORT: /\bwk\b/ig,
    FULL: /(?:\bweek\b|\bweeks\b)/ig,
    ALL: /(?:\bw\b|\bwk\b|\bweek\b|\bweeks\b)/ig,
  },
  DAY: {
    CHAR: /\bd\b/ig,
    SHORT: /\bdd\b/ig,
    FULL: /(?:\bday\b|\bdays\b)/ig,
    ALL: /(?:\bdd\b|\bd\b|\bday\b|\bdays\b)/ig,
  },
};

const TIME = {
  HOUR: {
    FULL: /(?:\bh\b|\bhr\b|\bhrs\b|\bhour\b|\bhours\b)/ig,
    FULL_WITH_NUM24: /(?:\bh\b|\bhr\b|\bhrs\b|\bhour\b|\bhours\b|\bh24\b|\bhr24\b|\bhrs24\b|\bhour24\b|\bhours24\b)/ig,
    NUM_12: /(?:\bh12\b|\bhr12\b|\bhrs12\b|\bhour12\b|\bhours12\b)/ig,
    TIMES: {
      NUM_12: /\d+(?:h12\b|hr12\b|bhrs12\b|hour12\b|hours12\b)/ig,
      NUM_24: /\d+(?:h24\b|hr24\b|bhrs24\b|hour24\b|hours24\b)/ig,
    },
  },
  MINUTE: /(?:\bm\b|\bmin\b|\bmins\b|\bminute\b|\bminutes\b)/ig,
  SECOND: /(?:\bs\b|\bsec\b|\bsecs\b|\bsecond\b|\bseconds\b)/ig,
  MILISECOND: /(?:\bms\b|\bmili\b|\bmilisec\b|\bmilisecs\b|\bmilisecond\b|\bmiliseconds\b)/ig,
};

const LOCAL = {
  TS: /(?:\bts\b|\btimestamp\b)/ig,
  LOCAL: /(\blocal\b)/ig,
  LOCAL_DATE: /(?:\blocal date\b|\blocaldate\b)/ig,
  LOCAL_TIME: /(?:\blocal time\b|\blocalTime\b)/ig,
  UTC: /(\butc\b)/ig,
};

const ALL = /(\ball\b)/ig;

export {
  DATE,
  TIME,
  LOCAL,
  ALL,
};
