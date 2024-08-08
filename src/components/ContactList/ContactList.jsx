import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <li className={s.item} key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
