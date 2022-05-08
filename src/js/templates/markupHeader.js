const homeMarkup = `<form class="header-form js-header-form">
<input class="header-form__input" placeholder="Search films" type="input" name="input" autocomplete="off">
<button class="header-form__btn"></button></form>
<div class="btn-genre">
    <button class="btn-genre__choose" name="choose-genre">CHOOSE BY GENRE</button>
    <span class="btn-genre__arrow"></span>
    </div>`;
const myLibMarkup = `<div class="header-filter">
<button class="header-filter__btn" name="watched-btn">WATCHED</button>
<button class="header-filter__btn" name="queue-btn">QUEUE</button>
</div>`;

export { myLibMarkup, homeMarkup };
