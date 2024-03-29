import roll from '../../client/src/helpers/roll';
import yell from './yell';

type FN = (...args: string[]) => string;

class Action<F extends FN> {
  static all: Record<string, Action<FN>> = {};

  name: string;
  fn: F;

  constructor(name: string, fn: F) {
    this.name = '/' + name;
    this.fn = fn;

    Action.all[this.name] = this;
  }

  static create<F extends FN>(name: string, fn: F) {
    return new Action(name, fn);
  }
}

Action.create('!', yell);
Action.create('r', roll);

export default Action;
