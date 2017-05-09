import { isUn, isNull } from '../../is';

const err = (objParam) => {
  throw new Error(` Please, enter valid object parameter [${objParam}]`);
};

/*
 * returns key and prop from given parameter.
 * @param {object} obj.
 */
const obj = (objParam) => {
  const key = Object.keys(objParam)[0];
  const prop = objParam[Object.keys(objParam)[0]];
  if (!isUn(key) && !isUn(prop)) {
    if (!isNull(key) && !isNull(prop)) {
      return { key, prop };
    }
    return err(objParam);
  }
  return err(objParam);
};

export default obj;
