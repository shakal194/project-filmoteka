import { refs } from '../references/refs';
import images from '../../images/plug/*.png'
import { isInteger } from 'lodash';

function renderGallery(data) {
  //функция которая принимает массив объектов, полученный от api (при чем не важно будут это тренды, либо поисковой запрос пользователя, либо бибилиотека)
  //ничего не возвращает

  if(data.length === 0 || data === null){
      const plugMarkup =`<div class="plug">
   
      <img src="${images['noresult']}" alt="Nothing was found" width="240px">
    
      <h2 class="plug_title">Opps! Nothing was found</h2>
      <p class="plug_text">Try another search query!</p>
  </div>`
  refs.gallery.insertAdjacentHTML('afterend', plugMarkup);
  } else{

 console.log(data)
  const markup = data
    .map(({ id, poster_path, title, genres, vote_average, release_date = '' }) => {
      if (genres.length > 2) {
        genres = genres.slice(0, 2);
      }
      if(isInteger(vote_average)){
        vote_average = vote_average+'.0'
      }
      const genreStr = genres.map(genre => genre.name).join(', ');
      return `
            <li class="film-card" data-id=${id}>
              <img class="film-card__image" src='https://image.tmdb.org/t/p/w500/${poster_path}' alt="${title}"/>
              <h2 class="film-card__title">${title}</h2>
              <p class="film-card__genre">${genreStr} | ${release_date.substr(0, 4)} <span class="film-card__raiting">${vote_average}</span> </p>       
            </li>`;
    })
    .join('');
    refs.gallery.innerHTML = markup;
  }
}
export { renderGallery };
