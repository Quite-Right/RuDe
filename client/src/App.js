import "./scss/App.scss";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import InputFile from "./components/InputFile/InputFile";
import Report from "./components/Report/Report";

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact>
            <InputFile />
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
