import { useEffect, useRef } from 'react'

type useTitleProps = {
	title: string
}

export default function useTitle({ title }: useTitleProps) {
	const prevTitle = useRef(document.title)

	useEffect(() => {
		const previousTitle = prevTitle.current
		document.title = `${title}`
		;() => (document.title = previousTitle)
	}, [title])
}
