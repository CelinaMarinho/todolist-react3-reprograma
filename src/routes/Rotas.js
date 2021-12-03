
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import ToDoList from "../pages/ToDoList";



function Rotas() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/lista' component={ToDoList} />
        </Switch>
    </BrowserRouter>
    )

}

export default Rotas 