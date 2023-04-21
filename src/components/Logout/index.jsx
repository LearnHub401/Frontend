import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setUser({}));
    logout({ returnTo: window.location.origin })
  }
  return (
    <button style={{ margin:'0.5vw'}} onClick={() => handleClick()}>
      Log Out
      <FontAwesomeIcon className="mx-2" icon={faRightToBracket} size='lg'/>
    </button>
  );
};

export default LogoutButton;
