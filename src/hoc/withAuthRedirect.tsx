import { Navigate } from "react-router-dom";
import { useAppSelector } from "../lib/hooks";

export const withAuthRedirect = (Component: React.ComponentType) => {

  const RedirectComponent = (props: any) => {
    const { isAuth } = useAppSelector(state => state.auth);

    if (!isAuth) return <Navigate  to='/login'/>
    return <Component {...props} />
  }

  return RedirectComponent;
}
