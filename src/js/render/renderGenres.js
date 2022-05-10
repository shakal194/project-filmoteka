import { getGenres } from '../api/api-service';
import { refs } from '../references/refs';
import { updateInterface } from '../base/update';

let activeGenreId = null;

function onDropBtnClick(e) {
  refs.genresDropdown.classList.toggle('show');
  refs.genresList.classList.toggle('show');
  getGenres().then(data => renderGenres(data.genres));
}

function renderGenres(data) {
  const markup = data
    .map(genre => {
      return `<li class ='genres_item' data-id='${genre.id}'>${genre.name}</li>
      `;
    })
    .join('');
  refs.genresList.innerHTML = markup;
}

refs.genresList.addEventListener('click', onGenresClick);
function onGenresClick(e) {
  const genreId = e.target.dataset.id;
  activeGenreId = genreId;
  updateInterface();
}

export { activeGenreId, onDropBtnClick };
