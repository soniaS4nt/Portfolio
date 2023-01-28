import { useState } from 'react'
import { IContactForm, IContactFormErrors } from '@models/contactForm.model'
import { validateForm } from '@validations/index'

const useContactForm = () => {
	const [values, setValues] = useState<IContactForm>({
		fullName: '',
		email: '',
		message: '',
	})

	const [errors, setErrors] = useState<IContactFormErrors>({
		fullName: '',
		email: '',
		message: '',
	})

	const [response, setResponse] = useState('')

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target
		setValues({
			...values,
			[name]: value,
		})

		setErrors({
			...errors,
			[name]: '',
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const validationErrors = validateForm(values)
		setErrors(validationErrors)
		if (Object.keys(validationErrors).length === 0) {
			console.log('Form is valid')
		} else {
			console.log('Form is invalid')
		}
	}

	return {
		handleSubmit,
		handleChange,
		values,
		errors,
	}
}
