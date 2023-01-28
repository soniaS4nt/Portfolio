import NavPage from '@components/NavPage'
import useTitle from '@hooks/useTitle'
import RepoGithub from '@pages/ReposGitHub'
import useFetchRepo from '@pages/ReposGitHub/hooks/useFetchRepo'
import { ContainerGrid } from '@pages/ReposGitHub/styles'
import { CustomContainer, Title } from '@styles/styles'
import { INFO } from '@utils/index'
import { ContainerNavPagebottom } from './styles'

const Projects: React.FC = () => {
	const { repositories, setPage, page } = useFetchRepo()
	useTitle({ title: 'Projects' })

	return (
		<CustomContainer centerContent>
			<Title>Projects</Title>
			<p>{INFO.projects}</p>
			<div>
				{repositories.map(repository => (
					<ContainerGrid key={repository.id}>
						<RepoGithub repository={repository} />
					</ContainerGrid>
				))}
			</div>
			<ContainerNavPagebottom>
				<NavPage setPage={setPage} page={page} />
			</ContainerNavPagebottom>
		</CustomContainer>
	)
}
export default Projects
