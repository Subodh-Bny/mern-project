import React from "react";
import UsersList from "../components/UsersList";
function Users() {
  const USERS = [
    {
      id: 1,
      name: "Rembo",
      image:
        "https://fastly.picsum.photos/id/986/50/50.jpg?hmac=UpPdyP2LriJrBWvgzn-8SCHbV7LOiDtxKzyVy0Zkp9o",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
