import { memo } from 'react';

const Names = ({ names, addName }) => {
  console.log('This is Names Component');

  return (
    <div>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
      <button onClick={addName}>ADD THE NEW FAKE NAME</button>
    </div>
  );
};

export default memo(Names);
