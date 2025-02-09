interface SearchbarProp {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}
const Searchbar: React.FC<SearchbarProp> = ({ setKeyword }) => {
  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return (
    <input
      type="text"
      name="searchbar"
      id="searchbar"
      placeholder="Search projects by title, technologies..."
      onChange={handleChange}
    />
  );
};

export default Searchbar;
