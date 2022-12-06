import { memo } from 'react';

const Names = ({ items, addName }) => {
  console.log('This is Names component!');
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={addName}>Add name</button>
    </div>
  );
};

export default memo(Names);
