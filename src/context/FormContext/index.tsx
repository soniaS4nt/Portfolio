import { IContactForm } from '@models/contactForm.model'
import React, { createContext } from 'react'

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
