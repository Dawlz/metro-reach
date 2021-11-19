import { Route, Switch } from "react-router";
import "./App.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Services from "./components/services";
import Home from "./components/home";

function App() {
  return (
    <div className = "App">
      <Header />
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/contact" component = {Contact} />
        <Route path="/services" component = {Services} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
