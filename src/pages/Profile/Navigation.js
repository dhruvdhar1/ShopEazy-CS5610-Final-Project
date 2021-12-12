import React from "react";
import {Link} from "react-router-dom";

const Navigation = (
    {
        active = 'profile'
    }) => {

        return(
            <>
                <div className="list-group pt-2">
                    <Link to="/orders" className={`list-group-item ${active === 'orders' ? 'active' : ''}`}>
                        <i className="fas fa-box"/>
                            <span className="left-padding d-none d-xl-inline-block">
                                Your orders
                            </span>
                    </Link>
                    <Link to="/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                        <i className="fas fa-cog"/>
                            <span className="left-padding d-none d-xl-inline-block">
                                Your account
                            </span>
                    </Link>
                    <Link to="/address" className={`list-group-item ${active === 'address' ? 'active' : ''}`}>
                        <i className="fa fa-address-book"/>
                            <span className="left-padding d-none d-xl-inline-block">
                                Addresses
                            </span>
                    </Link>
                    <Link to="/payment" className={`list-group-item ${active === 'payment' ? 'active' : ''}`}>
                        <i className="far fa-credit-card"/>
                            <span className="left-padding d-none d-xl-inline-block">
                                Payment
                            </span>
                    </Link>
                    <Link to="/subscriptions" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                        <i className="fa fa-bell"/>
                            <span className="left-padding d-none d-xl-inline-block">
                                Notifications
                            </span>
                    </Link>
                    <Link to="/" className="list-group-item">
                        <i className="fas fa-sign-out-alt"/>
                            <span className="left-padding d-none d-xl-inline-block">
                                Log out
                            </span>
                    </Link>
                </div>
            </>
        )
}



export default Navigation;