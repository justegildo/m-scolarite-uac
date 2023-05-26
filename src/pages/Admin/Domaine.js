import React from 'react';
import { Link } from 'react-router-dom';

const Domaine = () => {
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0 font-size-18">Tableau de bord</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Accueil</Link></li>
                                        <li className="breadcrumb-item active">Domaine</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Listes des domaines</h4>

                                    <div className="row mb-2">
                                        <div className="col-sm-3">
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-6">
                                                    <div className="d-flex ">
                                                        <p className="me-2" >Voir </p>
                                                        <select className="form-select form-select-sm style" style={{ maxWidth: '80px', maxHeight: '25px' }} required>
                                                            <option value="">10</option>
                                                            <option value="">50</option>
                                                            <option value="">100</option>
                                                            <option value="">200</option>
                                                            <option value="">300</option>
                                                        </select>
                                                        <p style={{ marginLeft: '10px' }} > entrées </p>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="col-sm-9 text-sm-end">
                                            <div className="text-sm-end float-end">

                                                <div className="row">
                                                    <div className="col-lg-6  col-sm-6 ">
                                                        <div className="search-box me-2 mb-2 d-inline-block">
                                                            <div className="position-relative">
                                                                <input type="text" className="form-control" placeholder="Search..." />
                                                                <i className="bx bx-search-alt search-icon"></i>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-6  col-sm-6 ">
                                                        <button type="button" className="btn btn-success btn-rounded waves-effect waves-light me-2">
                                                            <i className="mdi mdi-plus me-1"></i> Ajouter</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                    <div className="table-responsive">
                                        <table className="table align-middle table-nowrap table-hover mb-0 w-100" >
                                            <thead className="table-light">
                                                <tr>
                                                    <th style={{ width: '20px' }} >
                                                        <div className="form-check font-size-16 align-middle">
                                                            <input className="form-check-input" type="checkbox" id="transactionCheck01" />
                                                            <label className="form-check-label" htmlFor="transactionCheck01"></label>
                                                        </div>
                                                    </th>
                                                    {/* <th>Matricule</th> */}
                                                    <th className="align-middle">Code</th>
                                                    <th className="align-middle">Designation </th>
                                                    <th className="align-middle">Actions</th>
                                                    {/* <th className="align-middle">Prénoms</th>
                                                    <th className="align-middle">Sexe</th>
                                                    <th className="align-middle">Email</th>
                                                    <th className="align-middle">Filière</th>
                                                    <th className="align-middle">Status d'inscription</th>
                                                    <th className="align-middle">Actions</th> */}
                                                </tr>

                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>
                                                        <div className="form-check font-size-16">
                                                            <input className="form-check-input" type="checkbox" id="transactionCheck02" />
                                                            <label className="form-check-label" htmlFor="transactionCheck02"></label>
                                                        </div>
                                                    </td>
                                                    <td> 10526365 </td>
                                                    <td> 12-10-2020, 09:45 </td>
                                                    {/* <td >FAGLA </td>
                                                    <td>Prince Mohamed Adbdoul</td>
                                                    <td>Masculin</td>
                                                    <td>prince52012@gmail.com</td>
                                                    <td>IM</td> */}
                                                   {/*  <td>
                                                        <span className="badge badge-pill mdi badge-soft-success  font-size-15"><i className="mdi mdi-clock-time-twelve-outline"></i> Validé</span>
                                                    </td> */}
                                                    <td className="text-center">
                                                        <a href="espace-entite-liste-etudiant-details.html">
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                                <i className="fas fa-eye"></i>
                                                            </button>
                                                        </a>
                                                        <a className="btn btn-outline-secondary btn-rounded btn-sm " href="index.html" title="Edit">
                                                            <i className="fas fa-edit"></i>
                                                        </a>
                                                        <a className="btn btn-outline-danger btn-rounded btn-sm edit" href="index.html" title="Delete">
                                                            <i className="fas fa-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Domaine;