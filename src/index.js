import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import * as firebase from 'firebase/app';
import { firebaseConfig } from './util/firebaseConfig';
import 'typeface-roboto';
import './index.css';
import CodeProject from "./CodeProject"

firebase.initializeApp(firebaseConfig);


ReactDOM.render(<Router><CodeProject/></Router>, document.getElementById('root'));
