import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",

  });
  // const [username, setusername] = useState("")
  // const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (formData.username === storedUsername && formData.password === storedPassword) {
      dispatch({ type: "HIDE_MODAL"},
      );
      navigate('/dashboard');
      
    }
    else {
      e.preventDefault();
      
      dispatch({ type: "SHOW_MODAL", Message: "Username or Password is incorrect" });

      //showModal();
    }
  }

  return (
    <>
     
      <div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">UserName</label>
            <input type="text" className="form-control" autoComplete="off" name='Username' value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" autoComplete="off" className="form-control" name="Password" value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          </div>

          <input type="submit" value="Submit" />
        </form>

      </div>
    </>
  )
}


export default Login

// export default Login
