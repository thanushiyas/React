import React from 'react'
import "./Login.css"
import { HashLink as Link } from 'react-router-hash-link'

export default function Login() {
  return (
    <div>
        <div id="wrapper">
        <div class="main-content">
            <div class="header">
            {/* <img src="https://i.imgur.com/zqpwkLQ.png" /> */}
           <h1> <b>CHATAPP</b></h1>
            </div>
            <div class="l-part">
            <input type="text" placeholder="Username" class="input-1" />
            <div class="overlap-text">
                <input type="password" placeholder="Password" class="input-2" />
                <a href="#">Forgot?</a>
            </div>
            <Link smooth to='/chat'><input type="button" value="Log in" class="btn" /></Link>
            </div>
        </div>
        <div class="sub-content">
            <div class="s-part">
            Don't have an account?<a href="#">Sign up</a>
            </div>
        </div>
        </div>

    </div>
  )
}

