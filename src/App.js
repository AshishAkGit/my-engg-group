import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation,Footer, Home, About, Contact } from "./components";
import './App.css';

const App=()=> {
  let languageStoredInLocalStorage = localStorage.getItem("language"); 
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
 
  return (
    <div className="App">
      <Router>
        <Navigation 
          language={language} 
          handleSetLanguage={language=>{
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
            />           
        <Switch>
          <Route path="/my-engg-group/" exact component={() => <Home language={language}/>} />
          <Route path="/my-engg-group/about" exact component={() => <About language={language} />} />
          <Route path="/my-engg-group/contact" exact component={() => <Contact language={language}/>} />
        </Switch>
        <Footer language={language} />
      </Router>
    </div>
  );
}

const storeLanguageInLocalStorage=(language)=> {
  localStorage.setItem("language", language);
}

export default App;
