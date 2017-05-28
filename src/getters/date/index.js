import general from './general';
import readTs from './readTs';
import { isLeap, isCommon, yearType } from './info';

module.exports = {
  now: (
    opt = 'local',
    argOptions = false,
    reqType = 'now',
   ) => general(opt, argOptions, reqType),
  ago: (
    opt = 'day',
    argOptions = false,
    reqType = 'ago',
  ) => general(opt, argOptions, reqType),
  later: (
    opt = 'day',
    argOptions = false,
    reqType = 'later',
  ) => general(opt, argOptions, reqType),
  readTs,
  isLeap,
  isCommon,
  yearType,
};
