import React, { createContext } from 'react'
import { IContactForm } from '@models/contactForm.model'

interface InitialState {
	form: IContactForm
	setForm: React.Dispatch<React.SetStateAction<IContactForm>>
}

export const initialState: InitialState = {
	form: {
		fullName: '',
		email: '',
		message: '',
	},
	setForm: () => {},
}

export const ContactFormContext = createContext<InitialState>(initialState)
