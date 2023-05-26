import React from 'react';
import '../../pages/Admin/admin.css'
import { accountService } from '../../_services/account.service';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    let user = JSON.parse(localStorage.getItem('user'));

    function selectSecondWord(name) {
        const words = name?.trim().split(' ');
        if (words?.length >= 2) {
            return words[1];
        }
        return '';
    }

    const logout = () => {
        accountService.logout()
        navigate('/auth/login')
    }

    return (
        <div className='AHeader'>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <!-- LOGO --> */}
                        <div className="navbar-brand-box">
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-uac.png" alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-uac-m-scolarite.png" alt="" height="35" />
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-light.svg" alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-uac.png" alt="" height="19" />
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>




                    </div>

                    <div className="d-flex">

                        {/* <!-- App Search--> */}
                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </form>

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                                <i className="bx bx-fullscreen"></i>
                            </button>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-bell bx-tada"></i>
                                <span className="badge bg-danger rounded-pill">3</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0" key="t-notifications"> Notifications </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#!" className="small" key="t-view-all"> View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar style={{ maxHeight: '230px' }}>
                                    <a href="www.goo.com" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="bx bx-cart"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="ww" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <img src="assets/images/users/avatar-3.jpg"
                                                className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="ww" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="bx bx-badge-check"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="ww" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <img src="assets/images/users/avatar-4.jpg"
                                                className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2 border-top d-grid">
                                    <a className="btn btn-sm btn-link font-size-14 text-center" href="ww">
                                        <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar" />
                                <span className="d-none d-xl-inline-block ms-1" key="t-henry">{selectSecondWord(user?.name)}</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                {/* <!-- item--> */}
                                <a className="dropdown-item" href="index.html"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                                <a className="dropdown-item" href="index.html"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                                <a className="dropdown-item d-block" href="index.html"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                                <a className="dropdown-item" href="index.html"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item text-danger" onClick={logout}><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></button>
                            </div>
                        </div>


                    </div>
                </div>
            </header>

            <div className="topnav">
                <div className="container-fluid">
                    <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                        <div className="collapse navbar-collapse" id="topnav-menu-content">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link  arrow-none  text-white" to="/dashboard" id="topnav-dashboard" role="button"
                                    >
                                        <i className="bx bx-home-circle me-1"></i><span key="t-dashboards">Tableau de bord</span>
                                    </Link>

                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link arrow-none text-white" to="/commission" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements"> Commission</span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link arrow-none text-white" to="/domaine" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements"> Domaine</span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link arrow-none text-white" to="/entite-gestionnaire" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements"> Entité gestionnaire</span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link arrow-none text-white" to="/mention" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements">Mention</span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link arrow-none text-white" to="/specialite" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements">Spécialité</span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link arrow-none text-white" href="espace-entite-bilan.html" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements">Bilan</span>
                                    </a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none text-white" href="index.html" id="topnav-dashboard" role="button"
                                    >
                                        <i className="bx bx-home-circle me-2"></i><span key="t-dashboards">Dropdown</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-dashboard">

                                        <a href="index.html" className="dropdown-item" key="t-default">Default</a>
                                        <a href="dashboard-saas.html" className="dropdown-item" key="t-saas">Saas</a>
                                        <a href="dashboard-crypto.html" className="dropdown-item" key="t-crypto">Crypto</a>
                                        <a href="dashboard-blog.html" className="dropdown-item" key="t-blog">Blog</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;