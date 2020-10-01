import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import * as serviceWorker from './components/serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore ,combineReducers, applyMiddleware } from 'redux';
import  UIreducer from './store/reducers/reducer';
import  academicReducer from './store/reducers/academicReducer';
import infrastructureReducer from './store/reducers/infrastructureReducer';
import branchReducer from './store/reducers/branchReducer';
import classReducer from './store/reducers/classReducer';
import sectionReducer from './store/reducers/sectionReducer';
import subjectReducer from './store/reducers/subjectReducer';
import hobbyReducer from './store/reducers/hobbyReducer';
import errorReducer from './store/reducers/errorReducer';
import messageReducer from './store/reducers/messageReducer';
import auth from './store/reducers/auth';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {Provider as AlertProvider,positions,transitions} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './components/Layout/Alerts';
import hobbyassignReducer from './store/reducers/hobbyassignReducer';
import hobbyviewReducer from './store/reducers/hobbyviewReducer'
import sectionbyclassReducer from './store/reducers/sectionbyclassReducer';
import subjectclassReducer from './store/reducers/subjectclassReducer';
import subjectassignReducer from './store/reducers/subjectassignReducer';



//alert options
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


const middleWare = applyMiddleware(thunk);

const rootReducer = combineReducers({
    ui_red:UIreducer,
    years : academicReducer,
    infra : infrastructureReducer,
    branches: branchReducer,
    classes: classReducer,
    sections: sectionReducer,
    subjects: subjectReducer,
    subjectsclass:subjectclassReducer,
    hobbies:hobbyReducer,
    subjectassign:subjectassignReducer,
    hobbiesassign:hobbyassignReducer,
    viewhobbies:hobbyviewReducer,
    sectionsclass:sectionbyclassReducer,
    errors: errorReducer,
    messages: messageReducer,
    token:auth,

});
const store = createStore(rootReducer,middleWare);
const app = [
    <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        
    </AlertProvider>
    </Provider>
];


ReactDOM.render(app, document.getElementById('app'));
serviceWorker.unregister();


