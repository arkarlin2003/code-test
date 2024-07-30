import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RouteGuard = ({children}) => {
  const carts = useSelector((state) => state.carts);
    if(carts?.cartItems.length){
        return children
    }
    return <Navigate to={'/'}/>
}

export default RouteGuard