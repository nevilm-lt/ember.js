import { module, test } from 'qunit';
import { setupRenderingTest } from '<%= dasherizedPackageName %>/tests/helpers';
import { render } from '@ember/test-helpers';
<%= hbsImportStatement %>

module('<%= friendlyTestName %>', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{<%= dasherizedModuleName %> this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });
});
