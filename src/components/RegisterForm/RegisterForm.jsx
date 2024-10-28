/*шаблон сторінки для корекції  */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const registerSchema = yup.object().shape({
	name: yup.string().min(2).max(32).required(),
	email: yup.string().email().required(),
	password: yup.string().min(8).max(64).required(),
})

const RegisterForm = () => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(registerSchema),
	})

	const [showPassword, setShowPassword] = useState(false)

	const onSubmit = data => {
		// Логика регистрации и автоматического логина - написать
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name='name' ref={register} placeholder='Name' />
			{errors.name && <p>{errors.name.message}</p>}

			<input name='email' ref={register} placeholder='Email' />
			{errors.email && <p>{errors.email.message}</p>}

			<input
				name='password'
				type={showPassword ? 'text' : 'password'}
				ref={register}
				placeholder='Password'
			/>
			{errors.password && <p>{errors.password.message}</p>}

			<button type='button' onClick={() => setShowPassword(prev => !prev)}>
				{showPassword ? 'Hide' : 'Show'} Password
			</button>
			<button type='submit'>Register Now</button>
		</form>
	)
}

export default RegisterForm
