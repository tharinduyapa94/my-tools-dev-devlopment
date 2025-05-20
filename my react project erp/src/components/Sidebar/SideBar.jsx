import React, { useState } from 'react';
import './Sidebar.css';
import ItemCreate from '../Item/ItemCreate';
import ItemView from '../Item/ItemView';
import ItemMaster from '../Item/ItemMaster';


const Sidebar = () => {

    return (
        <div >
            <div className="navigation">
                <ul>
                    <li>
                        <p>
                            <span className="icon">
                            </span>
                            <span className="title">Inteceft MIS with logo</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className="icon">
                            </span>
                            <span className="title">Dashboard</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className="icon">
                            </span>
                            <span className="title">Item Master</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className="icon">
                            </span>
                            <span className="title">Account</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className="icon">

                            </span>
                            <span className="title">Customer</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className="icon">

                            </span>
                            <span className="title">Supplier</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className="icon">

                            </span>
                            <span className="title">Control Master Setting</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <span className="icon">

                            </span>
                            <span className="title">Sign Out</span>
                        </p>
                    </li>

                </ul>
            </div>
            {/* ========= */}
            <div className="main">
                <div className="topbar">
                    <div className="toggle">

                    </div>
                    <div className="user">
                        <img src="customer01.jpg" alt="" />
                    </div>
                </div>
                <div className="content">
                    <ItemMaster />
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
