import './style.css';

export const InputSearch = ({ onChange, Value }) => {
  return (
    <input
      className="input-search"
      onChange={onChange}
      value={Value}
      type="search"
      placeholder="Type your search"
    />
  );
};
