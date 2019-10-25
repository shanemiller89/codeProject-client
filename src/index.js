import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import 'typeface-roboto';
import './index.css';
import CodeProject from "./CodeProject"

ReactDOM.render(<Router><CodeProject/></Router>, document.getElementById('root'));
