import { helper } from '@ember/component/helper';

export function esIgual(params/*, hash*/) {
  return params[0] === params[1];
}

export default helper(esIgual);
