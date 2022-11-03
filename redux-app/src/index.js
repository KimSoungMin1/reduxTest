import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//리덕스 프로바이더 추가
import { Provider} from 'react-redux';
//store를 만들기 위한 createStore 추가:redux
//applyMiddleware를 통해 미들웨어 추가 가능
import { createStore ,applyMiddleware} from 'redux';
//store에 추가할 counter state와 action
import counter from './modules/counter';
//rootReducer를 통해 한번에 묶어서 사용가능
import rootReducer from './modules';

//미들웨어를 작성 및 설치 후 추가
//import loggerMiddleware from './lib/loggerMiddleware';
//createStore를 이용하여 store 생성
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store=createStore(rootReducer ,applyMiddleware(logger,thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
