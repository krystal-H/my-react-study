import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';

// import { Router } from 'react-router'
// import { createBrowserHistory } from 'history'

// Provider包裹在根组件外层，使所有的子组件都可以拿到state
import { Provider } from 'react-redux'
// connected-react-router是一个绑定react-router到redux组件，来实现双向绑定router的数据到redux store中
// 这么做好处就是让应用更redux化，可以在action中实现对路由的操作
import { ConnectedRouter } from "connected-react-router";
import store, {history} from './store'

// const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    {/* <Router history={history}> */}
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
