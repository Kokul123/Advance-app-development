import '../css/login.css';
import { useState } from 'react';
import { Link , useNavigate} from "react-router-dom";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password);
      navigate('/home');
  };

  return (
    <>
      <div className="hero">
        <div className="form-box">
          <h1 className='title'>Login</h1>
          <form  id="email" className="input-group">
            <input
              type="email"
              className="input-field"
              id="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="submit-btn" onClick={handleLogin}>
              Login
            </button>
          </form>
          <div className="reg1">
            <Link to = "/reg">
              Dont have an account? Register Here
            </Link>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;