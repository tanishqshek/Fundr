import React from 'react';
import './App.css';


export default function SignInPage() {
  return (
      <div className="text-center m-5-auto" align = "center">
          <h2>Log In</h2>
          <form action="/home">
              <p>
                  <label>Username or email address</label><br/>
                  <input type="text" name="first_name" required />
              </p>
              <p>
                  <label>Password</label>
                  <br/>
                  <input type="password" name="password" required />
              </p>
              <p>
                  <button id="sub_btn" type="submit">Login</button>
              </p>
          </form>
      </div>
  )
}
