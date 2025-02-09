import React from 'react';
import ChatApp from '../../static/Projects/chat.png';
import VocabularyApp from '../../static/Projects/vocabulary.png';
import Stationery from '../../static/Projects/stationery.png';
import OrderManagement from '../../static/Projects/orders-mangement.png'
import projects from '../../static/Projects/projects.json';

const images = [OrderManagement, Stationery, ChatApp, VocabularyApp]
const Projects = () => {
	return (
		<div className="projects" id="projects">
			<p className="hi">Side Projects</p>
			<div className="project-list">
				{
					projects.map((project, index) => {
						return (
							<Project
								key={index}
								link={project.link}
								image={images[index]}
								name={project.name}
								technology={project.technology}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

const Project = ({ link, image, name, technology }) => {
	return (
		<>
			<a href={link} className="project" target="_blank" rel="noopener noreferrer">
				<div className="project-image">
					<img src={image} alt="Error" />
				</div>
				<div className="project-name">
					{name}
				</div>
				<div className="project-technologies">
					{technology}
				</div>
			</a>
		</>
	)
}

export default Projects;