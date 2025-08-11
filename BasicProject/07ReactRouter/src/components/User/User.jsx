import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="text-center text-4xl bg-gray-500 p-4">
      <h1>User : {id}</h1>
    </div>
  );
}

export default User;
