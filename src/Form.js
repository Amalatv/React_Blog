import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import DashboardFooter from './components/DashboardFooter';
import FormContent from "./components/FormContent";
const Form = () => {
  return (
    <div className="w3-content" style={{maxWidth:"1400px"}}>
    <DashboardHeader/>
    <FormContent/>
    <DashboardFooter/>
 </div>
  )
};

export default Form;


