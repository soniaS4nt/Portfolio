import { useDisclosure } from '@chakra-ui/react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export const useEmailJs = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = useRef(null)
	const finalRef = useRef(null)
	const form = useRef({} as HTMLFormElement)

	const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		emailjs
			.sendForm(
				import.meta.env.VITE_YOUR_SERVICE_ID,
				import.meta.env.VITE_APP_YOUR_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_YOUR_PUBLIC_KEY,
			)
			.then(
				result => {
					if (result.status === 200) window.location.href = '/'
				},
				error => {
					console.log(error.text)
				},
			)
	}

	return { form, sendEmail, isOpen, onOpen, onClose, initialRef, finalRef }
}
