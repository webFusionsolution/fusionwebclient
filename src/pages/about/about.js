import './about.css';

const About =()=>{
   window.scrollTo({top: 0, behavior: 'smooth'});
   return(
    <div className='content-section'>
    <h2>About Us</h2>
    <p>Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overflow for Teams really helps.</p>  <br />
      <ul>
         <li>
         Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.
         </li> 
         <li>
         The word Web Development is made up of two words, that is:

            Web: It refers to websites, web pages or anything that works over the internet.
            Development: Building the application from scratch.
 
         </li> 
         <li>
         Web Development can be classified into two ways:

            Frontend Development
            Backend Development
         </li> 
         <li>
         Frontend Frameworks and Libraries:- <br />

               (a) AngularJS <br />
               (b) React.js <br />
               (c) VueJS <br />
               (d) jQuery <br />
               (e) Bootstrap <br />
               (f) Material UI <br />
               (g) Tailwind CSS <br />
               (h) jQuery UI
            
        <p>Some other libraries and frameworks are: Handlebar.js Backbone.js, Ember.js etc.</p>
         </li> 
         <li>
         <h5>Backend Development:</h5> 
         <p>Backend is the server side of a website. It is the part of the website that users cannot see and interact. It is the portion of software that does not come in direct contact with the users. It is used to store and arrange data.
         </p>
         </li> 
         <li>
         <h5>PHP:</h5> PHP is a server-side scripting language designed specifically for web development. </li> <br />
        <li> <h5>Java:</h5> Java is one of the most popular and widely used programming language. It is highly scalable. </li> <br />
        <li> <h5>Python:</h5> Python is a programming language that lets you work quickly and integrate systems more efficiently.</li> <br />
        <li> <h5>Node.js:</h5> Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside a browser. </li> <br />
       <li> <h5>Back End Frameworks:</h5>  The list of back end frameworks are: Express, Django, Rails, Laravel, Spring, etc. 
         </li>
      </ul>
    </div>
   )

}

export default About;