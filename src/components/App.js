
import React from "react";
import './../styles/App.css';
import PageLayout from "./Pagelayout.js";

const App = () => {
  console.log("app")
  return (
    
    <div>
        {/* Do not remove the main div */}
        <PageLayout 
        header={<h1>Welcome to my website</h1>}
        footer={<footer>© 2023 My Website. All rights reserved.</footer>}
        >
          <p>This is the content of my website.</p>

        </PageLayout>
        

    
    </div>
  )
}

export default App
