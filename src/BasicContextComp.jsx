function BasicContextComp({ user }) {
  //   const user123 = useContext(UserContext);

  return (
    // <UserContext.Consumer>
    //   {(user) => <div>{user.email}</div>}
    // </UserContext.Consumer>
    <div>{user.email}</div>
  );
}

export default BasicContextComp;
