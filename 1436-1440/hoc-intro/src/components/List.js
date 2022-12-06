const List = ({ items }) => {
  if (!items) return null;
  if (!items.length) return <p>No item to display!</p>;
  return (
    <ul>
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
