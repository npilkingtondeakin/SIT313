import React from 'react';
import Header from './Header';
import './App.css';
import CardListArticles from './CardListArticles';
import CardListTutorials from './CardListTutorials';
import articles from './articleList';
import tutorials from './tutorialList';

      
  function App() {
    return (
      <div>
        <div id='topBar'>
          <Header
            text = "DEV@Deakin"
            />
            <input
           type="search"
           placeholder="Search..."
           />
          
            <button type="button">Post</button>
            <button type="button">Login</button>      
        </div>
        
        <div id="articles">
          <CardListArticles/>
          <button type="button" >See all articles</button>
          <br/>
        </div>

        <div id="articles">
        <CardListTutorials/>
          <button type="button">See all tutorials</button>
          <br/>
        </div>

        <div id="topBar">
          
          <Header
            text = "SIGN UP FOR OUR DAILY INSIDER"
            />
            
            <input
           type="email"
           placeholder="Enter your email"
           />
            <button type="button">Subscribe</button>         
            
        </div>

        <div id= "Footer">

          <table>
            <div>
              <thead>
                <tr>
                  <th id="footerNav"><h2>Explore</h2></th>
                  <th id="footerNav"><h2>Support</h2></th>
                  <th id="socialMedia"><h2>Stay connected</h2></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="footerNav">
                  <button type="button">Home</button>
                  <button type="button">Questions</button>
                  <button type="button">Articles</button>
                  <button type="button">Tutorials</button>
                  </td>
                  <td id="footerNav">
                  <button type="button">FAQs</button>
                  <button type="button">Help</button>
                  <button type="button">Contact Us</button>
                  </td>
                  <td id="socialMedia">
                  <button type="image button" id='imgButton'><img src="Images/Facebook.png" alt="Facebook"/></button>
                  <button type="image button" id='imgButton'><img src="Images/Twitter.png" alt="Twitter"/></button>
                  <button type="image button" id='imgButton'><img src="Images/Instagram.png" alt="Instagram"/></button>  
                  </td>
                </tr>
              </tbody>
            </div>
            <div>
              <thead>
                <tr>
                  <th><Header
                    text = "DEV@Deakin 2024"
                      />
                  </th>    
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="footerNav2">
                  <button type="button">Privacy Policy</button>
                  <button type="button">Terms</button>
                  <button type="button">Code of Conduct</button></td>
                </tr>
              </tbody>
            </div>
          </table>

        </div>
  



      </div> 
    );
  }  
     
       
 


export default App;
