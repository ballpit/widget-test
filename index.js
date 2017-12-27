var netlifyIdentity = require('./netlify-identity')

console.log(netlifyIdentity)

 netlifyIdentity.init({
   container: "#netlify-modal" // defaults to document.body
 });

 console.log('hi')

 // identity.open() // open the modal

 netlifyIdentity.on('init', user => console.log(user))
 netlifyIdentity.on('login', login => console.log(user))
 netlifyIdentity.on('logout', () => console.log("Logged out"))
 netlifyIdentity.on('error', err => console.error("Logged out"))
 netlifyIdentity.on('open', () => console.log("Widget opened"))
 netlifyIdentity.on('close', () => console.log("Widget closed"))

 // Close the modal
 // identity.close()

 // Logout the user
 // loginModal.logout();

 // Access the underlying gotrue instance.
 // Note that doing things directly through gotrue brings a risk of getting out of
 // sync between your state and the widgets state.
 netlifyIdentity.gotrue
