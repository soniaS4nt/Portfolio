import { PropsWithChildren, useState } from 'react'
import { IContactForm } from '@models/contactForm.model'
import { ContactFormContext, initialState } from '.'

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
