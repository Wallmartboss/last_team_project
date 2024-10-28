/*шаблон сторінки для корекції  */
import { useParams } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

const AuthPage = () => {
	const { id } = useParams()

	return (
		<div className='auth-page'>
			{id === 'login' ? <LoginForm /> : <RegisterForm />}
		</div>
	)
}

export default AuthPage
