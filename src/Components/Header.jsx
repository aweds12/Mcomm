import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { HeaderStyle } from "../Styles";

const Header = () => {
  const [logged, setLogged] = useState(false);

  const { user, cart } = useContext(Context);

  useEffect(() => {
    if (user !== undefined) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [user]);

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");

    window.location.reload();
  };

  return (
    <HeaderStyle>
      <ul>
        <div>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/cart">
            <li>Cart {cart.length > 0 ? `(${cart.length})` : null}</li>
          </Link>
        </div>
        {logged ? (
          <>
            <li className="loggedUser" onClick={LogOut}>
              <img src={user.image} alt="" />
              <p>
                {user.firstName} {user.lastName}
              </p>
            </li>
          </>
        ) : (
          <Link to="/login" className="LoginButton">
            <li>Login</li>
          </Link>
        )}
      </ul>
    </HeaderStyle>
  );
};

export default Header;
