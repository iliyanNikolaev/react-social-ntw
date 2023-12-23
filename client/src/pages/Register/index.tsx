//css
import styles from './register.module.css';
//hooks
import { useAuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export const Register = () => {

  const { registerHandler } = useAuthContext();
  
  return (
    <div className={styles.wrapper}>

    <div className={styles.container}>
      <h1>register</h1>
      <form className={styles.registerForm} onSubmit={registerHandler}>
        <input type="text" placeholder='firstName'/>
        <input type="text" placeholder='lastName'/>
        <input type="password" placeholder='password'/>
        <button>register</button>
        <Link to='/login'>login</Link>
      </form>
    </div>
  </div>
  )
}
