import useTitle from '@hooks/useTitle'
import { CustomContainer, Title } from '@styles/styles'
import { INFO } from '@utils/index'

const About: React.FC = () => {
	useTitle({ title: 'About' })

	return (
		<CustomContainer centerContent>
			<Title>About</Title>
			<p>{INFO.description}</p>
		</CustomContainer>
	)
}
export default About
