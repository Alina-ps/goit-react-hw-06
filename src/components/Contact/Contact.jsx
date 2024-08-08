import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={s.contactWrapper}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        className={s.contactBtn}
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
