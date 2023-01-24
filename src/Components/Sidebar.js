import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Student Board</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link to='/dashboard'><a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a></Link>
            </li>

            <div className="sidebar-heading">
                Interface
            </div>
            <li className="nav-item">
                <Link to='/create-student'><a className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#!collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Create Student</span>
                </a></Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>








        </ul>
    </>
}

export default Sidebar

