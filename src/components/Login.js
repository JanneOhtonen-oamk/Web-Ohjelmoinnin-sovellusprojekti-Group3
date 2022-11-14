import React from "react";

export default function Login() {
  return (
    <div class="col-6">
      <div id="login">
        <h2>Welcome Back</h2>

        <form action="/" method="post">
          <div class="field-wrap">
            <label>Username:</label>
            <input type="text" required autocomplete="off" />
          </div>

          <div class="field-wrap">
            <label>Password:</label>
            <input type="password" required autocomplete="off" />
          </div>
          <p class="forgot">
            <>No User? </> <a href="/SignUp">Sign Up.</a>
          </p>
          <button class="btn-1">Log In</button>
        </form>
      </div>
    </div>
  );
}
