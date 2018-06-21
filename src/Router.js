import React from 'react';
import {Switch, Route} from 'react-router-dom';
//Components
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';
import Step3 from './Components/Steps/Step3';
import Step4 from './Components/Steps/Step4';
import Step5 from './Components/Steps/Step5';

export default(
    <Switch>
        <Route exact path = "/" component = {Login} />
        <Route path = '/Dashboard' component = {Dashboard} />
        <Route path = "/Wizard" component = {Wizard} />
        <Route path = "/Step-1" component = {Step1} />
        <Route path = "/Step-2" component = {Step2} />
        <Route path = "/Step-3" component = {Step3} />
        <Route path = "/Step-4" component = {Step4} />
        <Route path = "/Step-5" component = {Step5} />
    </Switch>
)