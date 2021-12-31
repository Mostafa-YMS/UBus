import { Navigate } from 'react-router-dom';
import { useContext } from 'react'
import DriverContext from '../context/DriverContext'

export const DriverRoute = (props) => {
let {driver} = useContext(DriverContext)

    return driver ? <Navigate to="/driverhome"/> : props.child  ;
    
}
export const DriverLoginRoute = (props)=>{
let {driver} = useContext(DriverContext)

    return !driver ? <Navigate to="/driverlogin"/> : driver.bus_number? props.child : <Navigate to="/home"/>;

}
