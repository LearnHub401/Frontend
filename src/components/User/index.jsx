import { useSelector } from "react-redux";

const User = () => {
  const { user } = useSelector((state) => state)

  return (
    <>
      <h2>User</h2>
      <h3>Name: {user.userName}</h3>
    </>
  )
}

export default User
