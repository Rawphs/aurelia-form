import {bindable, customElement, bindingMode} from 'aurelia-framework';
import {resolvedView} from 'aurelia-view-manager';

@resolvedView('spoonx/form', 'form-group')
@customElement('form-group')
export class FormGroup {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = null;

  @bindable classes;

  @bindable element = 'input';

  @bindable placeholder = '';

  @bindable state;

  @bindable name;

  @bindable label;

  @bindable error;

  @bindable message;

  @bindable type = 'text';

  @bindable behavior;

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable autofocus;

  @bindable required;

  @bindable multiple = false;

  @bindable selectOptions = [];

  @bindable optionLabel;

  is(oneOf, then, source) {
    if (typeof oneOf === 'string') {
      oneOf = oneOf.split(',').map(one => one.trim());
    }

    source = source || this.element;
    then   = then || true;

    return oneOf.indexOf(source) > -1 ? then : false;
  }

  when(conditional, value, otherwise) {
    return conditional ? value : (otherwise || '');
  }
}
