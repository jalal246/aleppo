/**
 * Check user input format. Seprate date from sepreators into array of strings.
 *
 * @param {options} string. Sepreators are: ( - OR / OR . OR : OR space )
 */
const multiRequest = (options) => {
  let formatsArray;
  let seperator;
  if (options.match(/[-]/g)) {
    formatsArray = options.split('-');
    seperator = '-';
  } else if (options.match(/[/]/g)) {
    formatsArray = options.split('/');
    seperator = '/';
  } else if (options.match(/[.]/g)) {
    formatsArray = options.split('.');
    seperator = '.';
  } else if (options.match(/[:]/g)) {
    formatsArray = options.split(':');
    seperator = ':';
  } else if (options.match(/[ ]/g)) {
    formatsArray = options.split(' ');
    seperator = ' ';
  } else {
    formatsArray = options;
    seperator = '';
  }
  return {
    seperator,
    formatsArray,
  };
};

export default multiRequest;
