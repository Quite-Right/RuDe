import "./scss/App.scss";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import InputFile from "./components/InputFile/InputFile";
import Report from "./components/Report/Report";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_RIGHT
};

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact>
            <Provider template={AlertTemplate} {...options}>
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
