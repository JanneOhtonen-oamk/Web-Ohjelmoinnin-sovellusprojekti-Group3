import React from "react";

export default function SignUp() {
  return (
    <div class="col-6">
      <div class="tab-content">
        <div id="signup">
          <h2>Sign Up</h2>

          <form action="/" method="post">
            <div class="field-wrap">
              <label>Username:</label>
              <input type="text" required autocomplete="off" />
            </div>

            <div class="field-wrap">
              <label>Email Address:</label>
              <input type="email" required autocomplete="off" />
            </div>

            <div class="field-wrap">
              <label>Set A Password:</label>
              <input type="password" required autocomplete="off" />
            </div>

            <button type="submit" class="btn-1">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
