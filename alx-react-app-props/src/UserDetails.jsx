import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserDetails({ userData }) {
    const useData =  useContext(UserContext)
    return (
      <div>
        <p>Name: {useData.name}</p>
        <p>Email: {useData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;