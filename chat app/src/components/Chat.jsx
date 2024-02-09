import React from 'react'
import "./Chat.css"
import { HashLink as Link } from 'react-router-hash-link'
export default function Chat () {
  return (
    <div>
        <header class="contact">
            <section class="contact--details">
                <h1 class="contact--details__name online">Homer</h1>
                <p class="contact--details__tel">+44 9 555 66 777</p>
            </section>
        </header>
        <section class="messages">
            <section>
                <h3 class="msg--date">Today - 19:44</h3>
                <div class="msg msg--me">
                    <blockquote>hiii....how are you?</blockquote>
                </div>
                <div class="msg msg--them">
                    <blockquote>iam fine!!</blockquote>
                </div>
            </section>
            <section>
                <h3 class="msg--date">Yesterday - 08:17</h3>
                <div class="msg msg--them">
                    <blockquote>Come to aroma</blockquote>
                </div>
                <div class="msg msg--me">
                    <blockquote>okayyy.....</blockquote>
                </div>
                <div class="msg msg--them">
                    <blockquote>Mmmmmm...</blockquote>
                    <input type="text" placeholder="Type here da sotta" class="input-1" />
                </div>
            </section>
        </section>
        <form>
            {/* <input type="text" placeholder="Your message"> */}
          <div class="msg-send"><span class="fontawesome-play"/></div>
          <div><Link smooth to='/'><button>Logout</button></Link></div>
        </form>

    </div>
    
  )
}
