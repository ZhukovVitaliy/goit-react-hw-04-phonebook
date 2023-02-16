export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <br />
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
