import { PropsWithChildren, useState } from 'react'
import { initialState, ContactFormContext } from './index'
import { IContactForm } from '@models/contactForm.model'

export const ContactFormProvider: React.FC<PropsWithChildren<{}>> = ({
	children,
}) => {
	const [form, setForm] = useState<IContactForm>(initialState.form)

	return (
		<ContactFormContext.Provider
			value={{
				form,
				setForm,
			}}
		>
			{children}
		</ContactFormContext.Provider>
	)
}
