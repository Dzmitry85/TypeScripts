import { renderBlock } from './lib.js'



export const renderUserBlock = (userName: string, userAvatar: string, userFaves: number) => {
  const favoritesCaption = userFaves ? userFaves : 'Ничего нет';
  const hasFavoriteItems = userFaves > 0 ? true : false;

  renderBlock(
    'user-block',
    `
      <div class="header-container">
        <img class="avatar" src="/img/${userAvatar}" alt="${userName}"/>
        <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ' inactive'}"></i>${favoritesCaption}
          </p>
        </div>
      </div>
    `
  );
};