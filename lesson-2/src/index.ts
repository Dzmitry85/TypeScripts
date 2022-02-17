import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { getUserData, getFavoritesAmount } from './user.js';
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData, getFavoritesAmount);
  renderSearchFormBlock('2022-02-05', '2022-02-10');

  renderSearchStubBlock();
  // renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
});
