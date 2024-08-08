function Button({ children, showAddFriend }) {
  return (
    <div>
      <button className="button" onClick={showAddFriend}>
        {children}
      </button>
    </div>
  );
}

export default Button;
