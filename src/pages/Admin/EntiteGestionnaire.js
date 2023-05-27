import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { EntiteGestionnaireService } from '../../_services/entitegestionnaire.service';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};




const EntiteGestionnaire = () => {

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const [open, setOpen] = useState(false);
    const [searching, setSearching] = useState("");

    const loadItems = ()=>{
        EntiteGestionnaireService.getAll()
            .then(response => {
                //console.log(response)
                setItems(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadItems()
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedItem(null);
        setOpen(false);
    };

    const [data, setData] = useState({
        code: '',
        libelle: '',
        date_creation: '',
        responsable: '',
        rapporteur: ''
    });

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        EntiteGestionnaireService.addDomaine(data)
            .then(response => {
                console.log(response)

            })
            .catch(error => console.log(error))
    }


    const editItem = (item) => {
        console.log(item);
        setSelectedItem(item);
        //setData(selectedItem)
        setOpen(true);
        const updatedData = {
            id: item.id,
            code: item.code,
            libelle: item.libelle,
            date_creation: item.date_creation,
            responsable: item.responsable,
            rapporteur: item.rapporteur
        }
        EntiteGestionnaireService.updateEntiteGestionnaire(updatedData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const deleteItem = (item) => {
        console.log(item);
        EntiteGestionnaireService.deleteEntiteGestionnaire(item)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    console.log(searching);

    return (
        <div className="main-content">
            <div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    maxWidth="lg"
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Création d'un domaine
                    </BootstrapDialogTitle>
                    <form className="" onSubmit={handleSubmit}>
                        <DialogContent dividers>


                            <div className="form-group">
                                <label htmlFor='code' className="form-label">Code</label>
                                <input id='code' type='text' className="form-control"
                                    name='code' onChange={onChange}
                                    value={data && data?.code} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='libelle' className="form-label">Libellé</label>
                                <input id='libelle' type='text' className="form-control"
                                    name='libelle' onChange={onChange}
                                    value={data && data?.libelle} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='date_creation' className="form-label">Date création</label>
                                <input id='date_creation' type='date' className="form-control"
                                    name='date_creation' onChange={onChange}
                                    value={data && data?.date_creation} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='responsable' className="form-label">Responsable</label>
                                <input id='responsable' type='text' className="form-control"
                                    name='responsable' onChange={onChange}
                                    value={data && data?.responsable} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor='rapporteur' className="form-label">Rapporteur</label>
                                <input id='rapporteur' type='text' className="form-control"
                                    name='rapporteur' onChange={onChange}
                                    value={data && data?.rapporteur} required />
                            </div>

                        </DialogContent>
                        <DialogActions>
                            <button autoFocus onClick={handleClose}>
                                Fermer
                            </button>
                            <button autoFocus type='submit'>
                                Valider
                            </button>
                        </DialogActions>
                    </form>
                </BootstrapDialog>
            </div>

            <div className="page-content">
                <div className="container-fluid">
                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0 font-size-18">EntiteGestionnaire</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Accueil</Link></li>
                                        <li className="breadcrumb-item active">EntiteGestionnaire</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Liste des EntiteGestionnaires</h4>

                                    <div className="row mb-2">
                                        <div className="col-sm-3">
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-6">
                                                    <div className="d-flex ">
                                                        <p className="me-2" >Voir </p>
                                                        <select className="form-select form-select-sm style" style={{ maxWidth: '80px', maxHeight: '25px' }} required>
                                                            <option value="10">10</option>
                                                            <option value="50">50</option>
                                                            <option value="100">100</option>
                                                            <option value="200">200</option>
                                                            <option value="300">300</option>
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
                                                                <input type="text" className="form-control" placeholder="Search..." onChange={(e) => setSearching(e.target.value)} />
                                                                <i className="bx bx-search-alt search-icon"></i>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-6  col-sm-6 ">
                                                        <button className="btn btn-success btn-rounded waves-effect waves-light me-2" onClick={handleClickOpen}>
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
                                                    <th>Code</th>
                                                    <th className="align-middle">Libellé</th>
                                                    <th className="align-middle">Date création </th>
                                                    <th className="align-middle">Responsable</th>
                                                    <th className="align-middle">Rapporteur</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {
                                                    items.map(item => (
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16">
                                                                    <input className="form-check-input" type="checkbox" id="transactionCheck02" />
                                                                    <label className="form-check-label" htmlFor="transactionCheck02"></label>
                                                                </div>
                                                            </td>
                                                            <td> {item.code} </td>
                                                            <td> {item.libelle}</td>
                                                            <td> {item.date_creation} </td>
                                                            <td> {item.responsable}</td>
                                                            <td> {item.rapporteur}</td>
                                                            <td>
                                                                <button className="btn btn-outline-secondary btn-rounded" onClick={() => editItem(item)}>
                                                                    <i className="fas fa-edit"></i>
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-outline-danger btn-rounded edit" onClick={() => deleteItem(item)}>
                                                                    <i className="fas fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                ))
                                                }
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

export default EntiteGestionnaire;