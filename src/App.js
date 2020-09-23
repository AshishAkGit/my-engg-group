import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation,Footer, Home, About, Contact,News,Locations, Careers,Divisions,ProjectLifecycle,Vision,Mission,GlobalBusiness,WhyDynateq } from "./components";
import './App.css';



const App=()=> { 
  return (
    <div className="App">       
      <Router>       
        <Navigation  />                    
        <Switch>
          <Route path="/my-engg-group/" exact component={() => <Home/>} />
          <Route path="/my-engg-group/about" exact component={() => <About  />} />
          <Route path="/my-engg-group/locations" exact component={() => <Locations/>} />
          <Route path="/my-engg-group/careers" exact component={() => <Careers/>} />
          <Route path="/my-engg-group/divisions" exact component={() => <Divisions/>} />
          <Route path="/my-engg-group/news" exact component={() => <News/>} />
          <Route path="/my-engg-group/contactus" exact component={() => <Contact/>} />
          <Route path="/my-engg-group/projectlifecycle" exact component={() => <ProjectLifecycle/>} />
          <Route path="/my-engg-group/vision" exact component={() => <Vision/>} />
          <Route path="/my-engg-group/mission" exact component={() => <Mission/>} />
          <Route path="/my-engg-group/globalbusiness" exact component={() => <GlobalBusiness/>} />
          <Route path="/my-engg-group/whydynateq" exact component={() => <WhyDynateq/>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
