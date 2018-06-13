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
        <Route component = {Login} exact path = "/" />
        <Route component = {Dashboard} path = '/Dashboard' />
        <Route component = {Wizard} path = "/Wizard" />
        <Route component = {Step1} path = "/Step-1" />
        <Route component = {Step2} path = "/Step-2" />
        <Route component = {Step3} path = "/Step-3" />
        <Route component = {Step4} path = "/Step-4" />
        <Route component = {Step5} path = "/Step-5" />
    </Switch>
)