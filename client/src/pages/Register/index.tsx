//css, icons
import styles from './register.module.css';
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRepeat } from "react-icons/fa6";
//hooks
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
// utils and other
import { Link } from 'react-router-dom';
import { FormEvent } from 'react';


export const Register = () => {

	return (
		<div className={styles.wrapper}>

			<div className={styles.container}>
				<h1 className={styles.heading}>register</h1>

				<RegisterForm />
				
				<LoginLink />
			</div>
		</div>
	)
}

const RegisterForm = () => {
	const navigate = useNavigate();

	const { registerHandler } = useAuthContext();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		registerHandler({ email: 'test@test.test', password: '123' });

		navigate('/');
	}

	return <form className={styles.registerForm} onSubmit={onSubmit}>

		<div className={styles.inputContainer}>
			<MdAlternateEmail className={styles.icon} />
			<input className={styles.input} type="email" placeholder='email' />
		</div>

		<div className={styles.inputContainer}>
			<RiLockPasswordLine className={styles.icon} />
			<input className={styles.input} type="password" placeholder='password' />
		</div>

		<div className={styles.inputContainer}>
			<FaRepeat className={styles.icon} />
			<input className={styles.input} type="password" placeholder='repeat' />
		</div>

		<button className={styles.btn}>register</button>
	</form>
}

const LoginLink = () => {
	return <span className={styles.redirect}> If you already have account,
		<Link className={styles.link} to='/login'> login here!</Link>
	</span>
}
