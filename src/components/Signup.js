import React from 'react';

export default function SignUp() {
    return (
        <div id="signup">
                    <h2>Sign Up for Free</h2>

                    <form action='/' method='post'>
                        <div class="field-wrap">
                            <label>
                                Username<span class="req">*</span>
                            </label>
                            <input type="text"required autocomplete="off"/>
                        </div>
                
                        <div class="field-wrap">
                            <label>
                                Email Address<span class="req">*</span>
                            </label>
                            <input type="email"required autocomplete="off"/>
                        </div>

                        <div class="field-wrap">
                            <label>
                                Set A Password<span class="req">*</span>
                            </label>
                            <input type="password"required autocomplete="off"/>
                        </div>

                        <button type="submit" class="button button-block">Get Started</button>

                    </form>

                </div>
    )
}
