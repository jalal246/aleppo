import tsGen from '../../helper/generator/timestamp';
import formatResolver from './formatResolver';
import recognizer from '../recognizer';

const resolver = (expectedfunc, ...fromUntil) => {
  const len = recognizer.length(fromUntil);
  const inputTyp = [len];
  const frmTl = [false, false];
  if (len === 2) {
    if (expectedfunc === 'format') {
      for (let i = 0; i < 2; i += 1) {
        inputTyp[i] = recognizer.type(fromUntil[i]);
        if (inputTyp[i] === 'format') {
          frmTl[i] = formatResolver(fromUntil[i]);
        }
      }
    } else {
      // user has provided both frm and tl.
      // statr processing.
      for (let i = 0; i < 2; i += 1) {
        inputTyp[i] = recognizer.type(fromUntil[i]);
        if (inputTyp[i] === 'format') {
          frmTl[i] = formatResolver(fromUntil[i]);
        } else if (inputTyp[i] === 'num') {
          if (i === 0) {
            if (expectedfunc === 'year') frmTl[0] = tsGen.beginning.yearKnown(fromUntil[i]);
            else frmTl[0] = tsGen.beginning[expectedfunc](fromUntil[i]);
          } else {
            frmTl[1] = tsGen.now[expectedfunc](fromUntil[i]);
          }
        } else if (inputTyp[i] === 'ts') {
          frmTl[i] = fromUntil[i];
        }
      }
    }
  } else if (len === 1) {
    // user has provided tl.

    // be default frm, index = 0 is beginning of the year
    frmTl[0] = tsGen.beginning.yearDefault();
    // if expectedfunc is format the request must be format.
    if (expectedfunc === 'format') {
      inputTyp[0] = recognizer.type(...fromUntil);
      if (inputTyp[0] === 'format') {
        frmTl[1] = formatResolver(...fromUntil);
      }
    } else {
      // procrss tl. index =1
      inputTyp[0] = recognizer.type(...fromUntil);
      if (inputTyp[0] === 'format') {
        frmTl[1] = formatResolver(...fromUntil);
      } else if (inputTyp[0] === 'num') {
        frmTl[1] = tsGen.now[expectedfunc](...fromUntil);
      } else {
        // if (inputTyp[0] === 'ts')
        frmTl[1] = fromUntil[0];
      }
    }
  } else if (len === 0) {
    // no input was provided.
    // default ftom beginning to now.
    frmTl[0] = tsGen.beginning.yearDefault();
    frmTl[1] = tsGen.now.nw();
  }
  return frmTl;
};

export default resolver;
