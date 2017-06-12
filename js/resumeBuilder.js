/*
This is empty on purpose! Your code to build the resume will go here.
 */


 var bio = {

 	name: 'Dana Ng',
 	role: 'Web Developer',
 	contacts: {
 		mobile: '900-123-4567',
 		email: 'ngdana1@gmail.com',
 		github: 'riceball1',
 		twitter: 'ravingdango',
 		location: 'San Jose, CA'
 	},
 	welcomeMessage: 'Hello World!',
 	skills: ['html/css', 'javascript', 'nodejs', 'react', 'angular'],
 	biopic: 'url',
 	display: function displayBio () {
 		return 'displaying bio';
 	}
 };

 var education = {
 	schools: [
 		{}
 	],
 	onlineCourses: [
 		{
 			title: 'Frontend Web Developer',
 			school: 'Udacity',
 			dates: '06/17 - Present',
 			url: 'www.udacity.com'
 		}
 	],
 	display: function displayEducation() {
 		return 'displaying education';
 	}
 };


 var work = {
 	jobs: [
 		{
 			employer: 'self-employed',
 			title: 'Freelance web developer',
 			location: 'remote',
 			dates: '03/17 - Present',
 			description: 'Worked on several frontend projects using html/css/javascript'
 		}
 	],
 	display: function displayWork() {
 		return 'displaying work';
 	}
 };

 var projects = {
 	projects: [
 		{
 			title: 'Simple Code',
 			dates: '04/17 - 05/17',
 			description: 'A react/redux application that allows users to store code snippets',
 			images: []
 		}
 	],
 	display: function displayProjects() {
 		return 'displaying projects';
 	}
 }

