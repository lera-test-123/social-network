import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";
import {AppBar, Box, Breadcrumbs, Button, Stack, Toolbar, Typography} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {useEffect} from "react";
import authThunk from "../../redux/auth/thunks";


const Header = () => {
    const { userId, email, login, isAuth } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authThunk.getCurrentUser())
    }, []);

    const logout = () => {
        dispatch(authThunk.logout());
    }

    return (
        <Box component="header" className={styles.header}>
            <AppBar position="static" sx={{ bgcolor: "#554852" }}>
               <Toolbar>
                   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       MUI
                   </Typography>
                   <Stack color="inherit">
                       { isAuth
                           ? <div>{login}  <Button onClick={logout} endIcon={<LogoutIcon/>} color="inherit">Log out</Button></div>
                           : <NavLink to={'/login'}><Button endIcon={<LoginIcon/>} color="inherit">Login</Button></NavLink>
                       }
                   </Stack>
               </Toolbar>
            </AppBar>
</Box>
    )

    // return <header className={styles.header}>
    //     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJPJAmkd2OhV1zOoUt6_qW1Mh1uc4qaoWkQ&s'
    //          className="App-logo" alt="logo"/>
    //
    //     <div className={styles.loginBlock}>
    //         { props.isAuth
    //           ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
    //           : <NavLink to={'/login'}>Login</NavLink>
    //         }
    //     </div>
    // </header>
}

export default Header;