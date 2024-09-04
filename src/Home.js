import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";


const App = () =>  {
    return (
  
      <div className="w3-content" style={{maxWidth:"1400px"}}>
        <Header/>
        <MainContent/>
        <Footer/>
     </div>
     
    )};
  
  
  export default  App;