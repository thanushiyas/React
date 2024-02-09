import React from 'react'
import "./Home.css"
import { HashLink as Link} from 'react-router-hash-link'
export default function Home() {
  return (
    <div>
    {/* <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
    {/* <link rel="stylesheet" href="styles.css"> */}
    <title>Fitness App Landing Page</title>

<body>

    <header>
        <h1>Fitness App</h1>
        <p>Your Personalized Fitness Solution</p>
    </header>
<div style={{marginLeft:1250,marginTop:-120,paddingBottom:80}}><Link smooth to='/'><button>Logout</button></Link></div>

    <section id="main-section">
        <h2>Transform Your Life with Our Fitness App</h2>
        <p>Discover personalized workout programs, video tutorials, and more to help you achieve your fitness goals.</p>
        
        <button class="cta-button" onclick="window.location.href='#contact-form'">RUNNING</button><br></br><br></br>
        <button class="cta-button" onclick="window.location.href='#contact-form'">HEALTHY DIET PLAN</button><br></br><br></br>
        <button class="cta-button" onclick="window.location.href='#contact-form'">WALKING</button><br></br><br></br>
        <button class="cta-button" onclick="window.location.href='#contact-form'">YOGA</button><br></br><br></br>
        <button class="cta-button" onclick="window.location.href='#contact-form'">Start Changing Your Life Now</button>
    </section>

    <footer>
        <p>&copy; 2023 Fitness App</p>
    </footer>
    <script src="script.js"></script>
</body>
</div>
  )
}
