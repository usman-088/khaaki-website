import React from "react";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
// import All_Products from "../components/All_Products";
// import SideBar from "../components/AdminPortal/sideBar/SideBar";
import Add_Product from "../components/AdminPortal/Products/Add_Product";
import ProductDes from "../components/AdminPortal/Products/DescriptionProduct";
import View_Products from "../components/AdminPortal/Products/View_Products";
import Update_Product from "../components/AdminPortal/Products/Update_Product";
import Add_Catagory from "../components/AdminPortal/catagory/Add_Catagory";
import Update_Catagory from "../components/AdminPortal/catagory/Update_Catagory";
import SideBarSlider from "../components/AdminPortal/sideBar/SideBarSlider";

function Routing(){
    return(
        <Router>
            {/* <SideBar/> */}
            <SideBarSlider/>
            <Switch>
                <Route exact path='/' component={Add_Product} />
                <Route exact path='/product/:id' component={Add_Product} />
                <Route exact path='/viewProduct' component={View_Products} />
                <Route exact path='/updateProduct' component={Update_Product} />
                <Route exact path='/addCatagory' component={Add_Catagory} />
                <Route exact path='/updateCatagory' component={Update_Catagory} />
                <Route exact path='/productDescription' component={ProductDes} />
                {/* <Route exact path='/' component={All_Products} />
                <Route exact path='/' component={All_Products} /> */}
            </Switch>
        </Router>
    )
}

export default Routing;
