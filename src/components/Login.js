import React from "react";

export default function Login() {
  return (
    <div class="col-6">
      <div id="login">
        <h2>Welcome Back</h2>

        <form action="/" method="post">
          <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email" required autocomplete="off" />
          </div>

          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password" required autocomplete="off" />
          </div>
          <button class="button button-block">Log In</button>
        </form>
      </div>
    </div>
  );
}
