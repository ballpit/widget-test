var netlifyIdentity = require('./netlify-identity')


netlifyIdentity.on('init', user => console.log(user))
netlifyIdentity.on('login', login => console.log(user))
netlifyIdentity.on('logout', () => console.log("Logged out"))
netlifyIdentity.on('error', err => console.error("Logged out"))
netlifyIdentity.on('open', () => console.log("Widget opened"))
netlifyIdentity.on('close', () => console.log("Widget closed"))


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  netlifyIdentity.init({
    container: "#netlify-modal" 
  });


});
