// p to child communication
// immutable
// props is always an object
// uni directional flow
// props are read only
// default props

// function props({ details = { myName: "default" }, callfromChild = () => {} }) {
function props({ details, callfromChild }) {
  const { myName, age, address } = details;
  return (
    <div>
      props {myName} {age} {address}
      <button onClick={callfromChild}>Call Child</button>
    </div>
  );
}

export default props;
