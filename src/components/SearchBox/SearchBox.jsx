import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchWrapper}>
      <p className={s.searchName}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
