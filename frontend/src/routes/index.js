import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home';
import NewPoint from '../Pages/NewPoint';

export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/points/new' component={NewPoint} />
        </Switch>
    )
}