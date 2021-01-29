import "./scss/App.scss";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { positions, Provider, transitions } from "react-alert";

import AlertTemplate from "./components/AlertTemplate/AlertTemplate";
import InputFile from "./components/InputFile/InputFile";
import Report from "./components/Report/Report";

// interface optionsType{
//   position: any,
//   timeout: number,
//   offset: string, 
//   transition: any
// }


const options:any = {
  position: positions.BOTTOM_RIGHT,
  timeout: 1000,
  offset:'30px',
  transition: transitions.SCALE,
  type: 'error',
};

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact>
            <Provider template={AlertTemplate}  {...options}>
              <InputFile />
            </Provider>
          </Route>
          <Route path="/report/:id">
            <Report />
          </Route>
          <Route path="/login" exact></Route>
          <Route path="/register" exact></Route>
          <Route path="/workspace" exact></Route>
        </Switch>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;