//css
import styles from './login.module.css';
//hooks
import { useAuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export const Login = () => {

  const { loginHandler } = useAuthContext();
  
  return (
    <div className={styles.wrapper}>

    <div className={styles.container}>
      <h1>login</h1>
      <form className={styles.loginForm} onSubmit={loginHandler}>
        <input type="text" placeholder='firstName'/>
        <input type="text" placeholder='lastName'/>
        <input type="password" placeholder='password'/>
        <button>login</button>
        <Link to='/register'>register</Link>
      </form>
    </div>
  </div>
  )
}
