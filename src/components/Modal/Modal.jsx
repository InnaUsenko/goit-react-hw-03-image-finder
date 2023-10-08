import css from './Modal.module.css';
export const Modal = props => {
  return (
    <div className={css.overlay} onClick={props.closeModal}>
      <div className={css.modal}>
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
};
