import { Route, Switch } from 'react-router';
import './App.css';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <div className = "App">
      <Header />
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/contact" component = {Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
