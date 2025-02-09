import React from 'react';

const diplomaDetail = ["Major: Information Technology", "Achieved WAM - 86.9"];
const bachelorDetail = ["Estimated completion July 2021", "Awarded Deakin STEM Scholarship (20% of total course tuition fees)"];
const Education = () => {
	return (
		<div className="education" id="education">
			<p className="hi">Education</p>
			<div className="education-list">
				<EducationItem
					courseName={"Bachelor of Computer Science"}
					period={"07/2019 - Current"}
					location={"Deakin University, Burwood"}
					detail={bachelorDetail}
				/>
				<EducationItem
					courseName={"Diploma of Information Technology"}
					period={"10/2018 - 01/2020"}
					location={"Deakin College, Burwood"}
					detail={diplomaDetail}
				/>
			</div>
		</div>
	)
}

const EducationItem = ({ courseName, period, location, detail }) => {
	return (
		<div className="education-item">
			<div className="name">{courseName}</div>
			<div className="period">{period}</div>
			<div className="location">{location}</div>
			<ul>
				{detail.map((el, i) => {
					return (
						<li key={i}>{el}</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Education;