import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>

            <Route path="/Products">
              <Products />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
      <footer>
        <p className="footer-text">2021 © copyright</p>
      </footer>
    </>
  );
}

export default App;
