import "./scss/App.scss";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { positions, Provider, transitions } from "react-alert";

import AlertTemplate from "./components/AlertTemplate/AlertTemplate";
import InputFile from "./components/InputFile/InputFile";
import Report from "./components/Report/Report";
import Test from "./components/Test/Test";


// interface optionsType{
//   position: any,
//   timeout: number,
//   offset: string, 
//   transition: any
// }


const options: any = {
  position: positions.BOTTOM_RIGHT,
  timeout: 1000,
  offset: '30px',
  transition: transitions.SCALE,
  type: 'error',
};

function App() {
  return (
    // <Provider store={store}>
    <Provider template={AlertTemplate}  {...options}>
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact>
                <InputFile />
            </Route>
            <Route path="/report/:id">
              <Report />
            </Route>
            <Route path="/test" exact><Test /></Route>
            <Route path="/login" exact></Route>
            <Route path="/register" exact></Route>
            <Route path="/workspace" exact></Route>
          </Switch>
        </main>

      </div>
    </Router>
    </Provider>
    // </Provider>
  );
}

export default App;