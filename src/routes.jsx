import React, { Component } from "react";
import { Routes, Route } from 'react-router'

import Phones from "./containers/phones/index";
import Phone from "./containers/phone";
import Basket from "./containers/basketCart";

export const ROUTES = {
    HOME: "/",
    PRODUCT: "/phones/:id",
    BASKET: "/basket",
    CATEGORIES: "/categories/:id"
}

export const routes = (
    <Routes>
        <Route path={ROUTES.HOME} Component={Phones} exact/>
        <Route path={ROUTES.PRODUCT} Component={Phone}/>
        <Route path={ROUTES.BASKET} Component={Basket}/>
        <Route path={ROUTES.CATEGORIES} Component={Phones}/>
    </Routes>
)
