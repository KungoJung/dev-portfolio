# <a href="https://www.danny-berger.dev/">My Developer Portfolio Website</a> ⚡️

### Welcome!
My portfolio site was built from a Gatsby template, so I took notes on how a more experienced dev sets up front-end data flow for a static site. It was also my first time working with Gatsby, SaSS, and GraphQL.

### What I Changed
- Added external Link buttons to the top and bottom of the site
- Added Nav buttons to quickly get to your desired section
- Added a new section for skills and changed section order (this messed with the original formatting quite a bit)
- Built a Contact Form and integrated email notifications through Netlify
- Swapped project images for iframes with project demo videos on YouTube
- Skills feature: I built a component that renders a different image of a burger depending on where on the burger the cursor hovers or clicks. The burger images were created in photoshop. I built one div with the burger nested inside, that has a sibling div (position: absolute, same height and width as the img) with 3 child divs each taking up about one third of that div's height. Those three divs had event listeners that triggered state change in React, which rendered a new burger img and skills set. Each skills set had to be a different component to trigger the animation. My favorite part of the site. 😊 🍔


### What I Learned
- Created CSS Variables in SaSS
- Learned how to use clip-path in CSS
- Gatsby project structure
- Deployed a site to Netlify

<h2 align="center">
    <a href="https://www.danny-berger.dev/">
        <img src="https://github.com/KungoJung/dev-portfolio/blob/main/src/images/burger_blank.png?raw=true" alt="Burger" width="400px" />
    </a>
    <br>
</h2>

### Thanks
Thanks to **Jacobo Martinez** - [https://github.com/cobidev](https://github.com/cobidev) for designing this fantastic template. Here's how it looked before I got to it:

#### Here's what the template looked like before, if you're curious:
<h2 align="center">
  <img src="https://github.com/cobidev/gatsby-simplefolio/blob/master/examples/example.gif" alt="Gatsby Simplefolio" width="600px" />
  <br>
</h2>
