import { renderBlock } from './lib.js'



 interface user {
  name: string,
  avatarUrl: string
}

export const getUserData: user = {
  name: 'usrName',
  avatarUrl: 'avatar.png',
};


 type favouritesAmount = number;
export const getFavoritesAmount: favouritesAmount = 1;




// export const renderUserBlock = (user: user, faves?: favouritesAmount) => {
//   const favoritesCaption = faves ? faves : 'Ничего нет';
//   const hasFavoriteItems = faves > 0 ? true : false;
export const renderUserBlock = (user: user, faves: favouritesAmount): void => {
  let favoritesCaption: number | string;
  if (faves != undefined) {
    favoritesCaption = faves;
  } else {
    favoritesCaption = 'Ничего нет';
  }
  const hasFavoriteItems : boolean = faves > 0 ? true : false;

  renderBlock(
    'user-block',
    `
      <div class="header-container">
        <img class="avatar" src="/img/${user.avatarUrl}" alt="${user.name}"/>
        <div class="info">
          <p class="name">${user.name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ' inactive'}"></i>${favoritesCaption}
          </p>
        </div>
      </div>
    `
  );
};