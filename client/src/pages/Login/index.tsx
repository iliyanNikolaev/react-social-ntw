//css, icons
import styles from './login.module.css';
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
//hooks
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
// utils and other
import { Link } from 'react-router-dom';
import { FormEvent } from 'react';


export const Login = () => {

	return (
		<div className={styles.wrapper}>

			<div className={styles.container}>
				<h1 className={styles.heading}>login</h1>

				<LoginForm />
				
				<RegisterLink />
			</div>
		</div>
	)
}

const LoginForm = () => {
	const navigate = useNavigate();

	const { registerHandler } = useAuthContext();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		registerHandler({ email: 'test@test.test', password: '123' });

		navigate('/');
	}

	return <form className={styles.loginForm} onSubmit={onSubmit}>

		<div className={styles.inputContainer}>
			<MdAlternateEmail className={styles.icon} />
			<input className={styles.input} type="email" placeholder='email' defaultValue="test@test.com"/>
		</div>

		<div className={styles.inputContainer}>
			<RiLockPasswordLine className={styles.icon} />
			<input className={styles.input} type="password" placeholder='password' defaultValue="123"/>
		</div>

		<button className={styles.btn}>Click for login!!</button>
	</form>
}

const RegisterLink = () => {
	return <span className={styles.redirect}> If you dont have account,
		<Link className={styles.link} to='/register'> register here!</Link>
	</span>
}
