/*шаблон сторінки для корекції  */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup
		.string()
		.min(8, 'Too Short! Please type min 8 symbols')
		.max(64, 'Too Long! Must be up max 64 symbols')
		.required('Required'),
})

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	})

	const [showPassword, setShowPassword] = useState(false)

	const onSubmit = data => {
		// написать логику авторизации
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name='email' ref={register} placeholder='Email' />
			{errors.email && <p>{errors.email.message}</p>}

			<input
				name='password'
				type={showPassword ? 'text' : 'password'}
				{...register('password')}
				placeholder='Password'
			/>
			{errors.password && <p>{errors.password.message}</p>}

			<button type='button' onClick={() => setShowPassword(prev => !prev)}>
				{showPassword ? 'Hide' : 'Show'} Password
			</button>
			<button type='submit'>Log In Now</button>
		</form>
	)
}

export default LoginForm
