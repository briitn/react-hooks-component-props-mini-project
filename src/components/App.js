import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"

import ArticleList from "./ArticleList"


function App() {
  return (
    <React.Fragment>
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
    <div>
      <Header name={blogData.name}/>
    </div>
    <div>
      <About image={blogData.image} about={blogData.about}/>
    </div>
   
    <div><ArticleList posts={blogData.posts}/></div>
    </React.Fragment >
    
    
  );
}
;
export default App;
