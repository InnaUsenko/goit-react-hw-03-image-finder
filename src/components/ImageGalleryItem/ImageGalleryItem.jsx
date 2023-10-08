import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = props => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={props.src}
        alt={props.alt}
      />
    </li>
  );
};
