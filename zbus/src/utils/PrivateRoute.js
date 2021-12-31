import { Navigate } from 'react-router-dom';
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = (props) => {
    let {user} = useContext(AuthContext)
    return !user ? <Navigate to="/login"/> : user.bus_number?<Navigate to="/driverhome"/>:props.child  ;    
}

export default PrivateRoute
