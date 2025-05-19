
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
        footer={<footer>@2023 mywebsite. All rights Reserved</footer>}
        >
          <div>This is the content of my website</div>

        </PageLayout>
        
    
    </div>
  )
}

export default App
