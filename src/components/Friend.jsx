function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} srcset="" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes You ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <button className="button" onClick={() => onSelection(friend)}>
        {isSelected ? "close" : "select"}
      </button>
    </li>
  );
}
export default Friend;

// another way
/* {friend.balance < 0 ? (
  <p className="red">
    You owe {friend.name} ${Math.abs(friend.balance)}
  </p>
) : friend.balance > 0 ? (
  <p className="green">
    {friend.name} owe You ${Math.abs(friend.balance)}
  </p>
) : friend.balance === 0 ? <p>
You and ${Math.abs(friend.balance)}
</p> : null} */
