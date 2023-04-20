import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>.</h1>
          <p>
            Introducing "Friendify", the next-generation social media app that
            brings people together like never before. With a sleek and
            user-friendly interface, FellowConnect allows users to create
            profiles, share posts, connect with friends and family, and discover
            new communities based on shared interests.
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='text' placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
