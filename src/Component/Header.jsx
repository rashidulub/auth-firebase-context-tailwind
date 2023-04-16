import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Header = () => {
  
  const {user,logOut}=useContext(AuthContext);

    const handleLogOut =()=>{
      logOut()
      .then(()=>{})
      .Catch (console.error(error))
    }


    return (
        <div className='sticky top-0'>
            
<div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
  <Link  className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
{user && <Link  className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>}
  <Link  className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
  <Link  className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
  {
    user ? <>
    <span>{user.email}</span>
    <Link onClick={handleLogOut} className="btn btn-ghost normal-case text-xl" >SignOut</Link>
    </>:
    <Link  className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
    
  }


</div>
        </div>
    );
};

export default Header;