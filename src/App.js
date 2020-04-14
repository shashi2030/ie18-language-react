import React from 'react';
import { Trans } from "react-i18next";
import i18n from './i18n';

class App extends React.Component{
  
  state = {
    value: "en"
  };
  handleChange = e =>{
    let newLanguage = e.target.value;
    this.setState({ value: newLanguage });
   i18n.changeLanguage(newLanguage);
  }
  render(){
    return (
      <div className="App">
        <div>
          Select Language : <select onChange={(e)=> this.handleChange(e)}>
  
            <option val="en">en</option>
            <option val="fr">fr</option>
          </select>
        </div>
        
        <div><Trans i18nKey="create_new_user">default </Trans></div>
      </div>
    );
  }
}


export default App;
