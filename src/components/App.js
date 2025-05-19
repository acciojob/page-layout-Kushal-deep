
import React from "react";
import './../styles/App.css';
import PageLayout from "./Pagelayout.js";

const App = () => {
  console.log("app")
  return (
    
    <div>
        {/* Do not remove the main div */}
        <PageLayout 
        header={<header>Welcome to my website</header>}
        footer={<footer>&copy; 2023 My Website.All rights reserved.</footer>}
        >
          <div>This is the content of my website</div>

        </PageLayout>
        
    
    </div>
  )
}

export default App
