/**
 * Check user input format. Seprate date from sepreators into array of strings.
 *
 * @param {options} string. Sepreators are: ( - OR / OR . OR : OR space )
 */
const formatRequest = (options) => {
  let formatsArray;
  let separator;
  if (options.match(/[-]/g)) {
    formatsArray = options.split('-');
    separator = '-';
  } else if (options.match(/[/]/g)) {
    formatsArray = options.split('/');
    separator = '/';
  } else if (options.match(/[.]/g)) {
    formatsArray = options.split('.');
    separator = '.';
  } else if (options.match(/[:]/g)) {
    formatsArray = options.split(':');
    separator = ':';
  } else if (options.match(/[,]/g)) {
    formatsArray = options.split(',');
    separator = ',';
  } else if (options.match(/[ ]/g)) {
    formatsArray = options.split(' ');
    separator = ' ';
  } else {
    formatsArray = options;
    separator = '';
  }
  return {
    separator,
    formatsArray,
  };
};

export default formatRequest;
