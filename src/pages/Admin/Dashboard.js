import React from 'react';

const Dashboard = () => {
    return (
        <div id="layout-wrapper">
            <div className="topnav">
                <div className="container-fluid">
                    <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                        <div className="collapse navbar-collapse" id="topnav-menu-content">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <a className="nav-link  arrow-none  text-white" href="/dashboard" id="topnav-dashboard" role="button"
                                    >
                                        <i className="bx bx-home-circle me-1"></i><span key="t-dashboards">Tableau de bord</span>
                                    </a>

                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link arrow-none text-white" href="/commission" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements"> Commission</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link arrow-none text-white" href="/domaine" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements"> Domaine</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link arrow-none text-white" href="/entite-gestionnaire" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements"> Entité gestionnaire</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link arrow-none text-white" href="/mention" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements">Mention</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link arrow-none text-white" href="/specialite" id="topnav-uielement" role="button">
                                        <i className="fa fa-list me-1"></i>
                                        <span key="t-ui-elements">Spécialité</span>
                                    </a>
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


            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Tableau de bord</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
                                            <li className="breadcrumb-item active">Espace Admin</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body p-4">

                                        <h4 className="card-title">Rechercher un étudiant.</h4>
                                        <p className="card-title-desc">Entrez votre recherche pour trouver les informations values.</p>



                                        <div className="search-box col-lg-8 mx-auto">
                                            <div className="position-relative form-floating mb-3 ">
                                                <input type="text" className="form-control py-4 rounded bg-light border-light" placeholder="Search..." />
                                                <i className="bx bx-search-alt search-icon "></i>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-5">Activité</h4>
                                        <ul className="verti-timeline list-unstyled">
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">22 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Enregistrement d’étudiant dans la base
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">17 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Enregistrement d’étudiant dans la base... <a href="index.html">Lire plus</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list active">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">15 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Enregistrement d’étudiant dans la base...
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">12 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Enregistrement d’étudiant dans la base...
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i className="bx bx-right-arrow-circle font-size-18"></i>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <h5 className="font-size-14">12 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            Enregistrement d’étudiant dans la base...
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="text-center mt-4"><a href="index.html" className="btn btn-primary waves-effect waves-light btn-lg">Voirplus <i className="mdi mdi-arrow-right ms-1"></i></a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Taux d’inscription</h4>

                                        <div id="line_chart_datalabel" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="right-bar">
            <div data-simplebar className="h-100">
                <div className="rightbar-title d-flex align-items-center px-3 py-4">
            
                    <h5 className="m-0 me-2">Settings</h5>

                    <a href="index" className="right-bar-toggle ms-auto">
                        <i className="mdi mdi-close noti-icon"></i>
                    </a>
                </div>

                
                <hr className="mt-0" />
                <h6 className="text-center mb-0">Choose Layouts</h6>

                <div className="p-4">
                    <div className="mb-2">
                        <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>

                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" />
                        <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
                    </div>
    
                    <div className="mb-2">
                        <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>
                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch"/>
                        <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
                    </div>
    
                    <div className="mb-2">
                        <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>
                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
                        <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <div className="mb-2">
                        <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images"/>
                    </div>
                    <div className="form-check form-switch mb-5">
                        <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch"/>
                        <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
                    </div>

            
                </div>

            </div>
        </div>
            
        </div>
        
    );
};

export default Dashboard;