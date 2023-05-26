import { Navigate } from "react-router-dom";
import { accountService } from "../_services/account.service";

const AuthGuard = ({ children }) => {
    let token = accountService.isLogged();
    
    if(token === null){
        return <Navigate to='/auth/login'/>
    } 

    return children;
};

export default AuthGuard;