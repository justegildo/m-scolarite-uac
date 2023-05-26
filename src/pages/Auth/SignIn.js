import React, { useState } from 'react';
import { accountService } from '../../_services/account.service';
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from 'react-icons/fi';


const SignIn = () => {

    let navigate = useNavigate()
    const [hide, setHide] = useState(true);
    const handleTogglePasswordVisibility = () => {
        setHide(!hide);
      };

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })


    const onChange =(e) =>{
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(credentials);
        accountService.login(credentials)
            .then(response => {
                console.log(response)
                accountService.saveToken(response.data.token)
                accountService.saveUilisateur(JSON.stringify(response.data.user, null, 2))
                navigate('/dashboard')
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-cover">
            <div className="container p-0 p-md-5 rounded rounded-sm d-flex align-items-center shadow-sm bg-white">
                <div className="shadow-sm col-12 col-md-6 px-md-4">
                    <div className="p-5 text-center d-flex flex-column">
                        <div className="d-flex flex-1 justify-content-center align-items-center">
                            <img src="/assets/images/logo_uac_connexion.png" className="w-20" alt="logo" />
                        </div>
                        <h2 className="font-bold text-xl my-4">Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex form-control border border-2 p-0 px-3 align-items-center rounded rounded-sm">
                                <input
                                    className="form-control border-0 px-3"
                                    placeholder="Adresse mail"
                                    name="email"
                                    type="email"
                                    required
                                    onChange={onChange}
                                />
                            </div>
                            <div  className="d-flex form-control border border-2 p-0 px-3 my-3 align-items-center rounded rounded-sm">
                                <input
                                    className="form-control border-0 px-3"
                                    placeholder="Mot de passe"
                                    name="password"
                                    type={hide ? "password" : "text"}
                                    required
                                    onChange={onChange}
                                />
                                <button type='button' onClick={handleTogglePasswordVisibility}>
                                        
                                    {hide ? <FiEye/> : <FiEyeOff />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="bg-success border-0 rounded text-white border-success p-2 rounded-sm"
                            >
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block p-5 hidden">
                    <div className="flex flex-1 justify-center items-center">
                        <img src="/assets/images/logo_uac_design.png" alt="logo" width={400} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;