import { CardBody, Text } from '@chakra-ui/react'
import github from '../../../public/github.svg'
import { Link } from '@pages/Footer/styles'
import { Props } from './interfaces'
import { CardCustom, ContainerRepo, Image } from './styles'

const RepoGithub: React.FC<Props> = ({ repository }) => {
	return (
		<CardCustom key={repository.id}>
			<CardBody margin='2'>
				<Text color='#F50057' fontWeight='bold' fontSize='2xl'>
					{repository.name}
				</Text>
				<Text>{repository.description}</Text>
				<ContainerRepo>
					<Text color='#ee5122' fontSize='small' aria-label='language'>
						{repository.language}
					</Text>

					<Link
						target='_blank'
						rel='noopener noreferrer'
						href={repository.html_url}
					>
						<Image src={github} alt='Github' />
					</Link>
				</ContainerRepo>
			</CardBody>
		</CardCustom>
	)
}

export default RepoGithub
