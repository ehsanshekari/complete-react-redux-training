import Serial from "./Serial";

function SerialList(props) {
  console.log("Serial List > props.serials", props.serials);
  return (
    <div>
      {props.serials.map((serial) => (
        <Serial serial={serial.show} onItemClick={props.onItemClick} />
      ))}
    </div>
  );
}

export default SerialList;
