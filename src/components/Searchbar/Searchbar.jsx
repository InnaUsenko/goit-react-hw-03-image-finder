import css from './Searchbar.module.css';
export const Searchbar = props => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-49 141 512 512"
            width="16"
            height="16"
            aria-hidden="true"
            class="_8pb48z0 _1n5grcp84 _1n5grcp1m _1n5grcp2pm"
          >
            <path d="M448.178 602.822 316.426 471.071c26.355-33.88 42.074-76.422 42.074-122.571 0-110.28-89.72-200-200-200s-200 89.72-200 200 89.72 200 200 200c46.149 0 88.691-15.719 122.571-42.074l131.751 131.751c4.882 4.882 11.28 7.323 17.678 7.323s12.796-2.441 17.678-7.322c9.762-9.763 9.762-25.593 0-35.356zM8.5 348.5c0-82.71 67.29-150 150-150s150 67.29 150 150-67.29 150-150 150-150-67.29-150-150z"></path>
          </svg>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};