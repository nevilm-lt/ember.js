import Component from '@ember/-internals/glimmer/lib/component';
import { getValue } from '@ember/-internals/metal';
import Helper from '@ember/component/helper';
import { invokeHelper } from '@ember/helper';
import { Cache } from '@glimmer/validator';
import { expectTypeOf } from 'expect-type';

// NOTE: The types should probably be stricter, but they're from glimmer itself

class PlusOne extends Helper {
  compute([number]: [number]) {
    return number + 1;
  }
}

class PlusOneComponent extends Component {
  // Glint would help with this
  declare args: { number: number };

  plusOne = invokeHelper(this, PlusOne, () => {
    return {
      positional: [this.args.number],
    };
  });

  get value() {
    return getValue(this.plusOne);
  }
}

let component = PlusOneComponent.create();

expectTypeOf(component.plusOne).toEqualTypeOf<Cache<unknown>>();
