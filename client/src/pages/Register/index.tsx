//css
import styles from './register.module.css';
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
				<h1>register</h1>

				<RegisterForm />

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
		<input type="email" placeholder='email' />
		<input type="password" placeholder='password' />
		<input type="password" placeholder='repeat' />
		<button>register</button>
		<Link to='/login'>login</Link>
	</form>
}
