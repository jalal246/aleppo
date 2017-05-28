import {
  TIMES_NUM_HOUR12,
  NUM_HOUR12,
  TIMES_NUM_HOUR24,
  NUM_HOUR24,
} from '../../../../shared';
/**
 * Check user input format. Seprate date from sepreators into array of strings.
 *
 * @param {options} string. Sepreators are: ( - OR / OR . OR : OR space )
 */
const numFromFormat = (options) => {
  // with times?
  if (options.split(/(\d+)/).length > 1) {
    // is it TIMEShr12
    if (options.match(TIMES_NUM_HOUR12)) {
      // "9h12".split(/(\d+)/)
      // (5) ["", "9", "h", "12", ""]
      return {
        times: options.split(/(\d+)/)[1],
        formats: 'hr12',
      };
    } else if (options.match(NUM_HOUR12)) {
      // is it hr12
      return {
        times: 1,
        formats: 'hr12',
      };
    } else if (options.match(TIMES_NUM_HOUR24)) {
      // TIMEhr24
      return {
        times: options.split(/(\d+)/)[1],
        formats: 'hr',
      };
    } else if (options.match(NUM_HOUR24)) {
      // is it hr24
      return {
        times: 1,
        formats: 'hr',
      };
    }
    // others
    const valArray = options.split(/(\d+)/);
    const times = valArray[1];
    const formats = valArray[2];
    return {
      times,
      formats,
    };
  }
  return {
    times: 1,
    formats: options,
  };
};

export default numFromFormat;
