import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello User</h1>
          <p>
            Introducing "Friendify", the next-generation social media app that
            brings people together like never before. With a sleek and
            user-friendly interface, FellowConnect allows users to create
            profiles, share posts, connect with friends and family, and discover
            new communities based on shared interests.
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
            <Link to='/home'>
              <button>Demo</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
