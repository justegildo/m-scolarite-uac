import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script> © Université d'Abomey-Calavi.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by SPTIC
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;