import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const withAuthRedirect = (Component) => {

  const RedirectComponent = (props) => {
    const { isAuth } = useSelector(state => state.auth);

    if (!isAuth) return <Navigate  to='/login'/>
    return <Component {...props} />
  }

  return RedirectComponent;
}
