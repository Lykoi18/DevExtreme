import { ClientFunction, Selector } from 'testcafe';
import { WidgetName } from '../helpers/createWidget';
import Widget from './internal/widget';

const CLASS = {
  content: 'dx-overlay-content',
  wrapper: 'dx-overlay-wrapper',
  toolbar: 'dx-popup-title',
};
export default class Popup extends Widget {
  content: Selector;

  wrapper: Selector;

  toolbar: Selector;

  constructor(id: string | Selector) {
    super(id);

    this.content = this.element.find(`.${CLASS.content}`);
    this.wrapper = this.element.find(`.${CLASS.wrapper}`);
    this.toolbar = this.element.find(`.${CLASS.toolbar}`);
  }

  // eslint-disable-next-line class-methods-use-this
  getName(): WidgetName { return 'dxPopup'; }

  // eslint-disable-next-line class-methods-use-this
  getWrapper(): Selector {
    return Selector(`.${CLASS.wrapper}`);
  }

  // eslint-disable-next-line class-methods-use-this
  getContent(): Selector {
    return Selector(`.${CLASS.content}`);
  }

  // eslint-disable-next-line class-methods-use-this
  getToolbar(): Selector {
    return Selector(`.${CLASS.toolbar}`);
  }

  show(): Promise<{ top: number; left: number }> {
    const { getInstance } = this;

    return ClientFunction(
      () => (getInstance() as any).show(),
      { dependencies: { getInstance } },
    )();
  }
}
