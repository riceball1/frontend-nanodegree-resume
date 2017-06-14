/*
This is empty on purpose! Your code to build the resume will go here.
 */

"use strict";

var bio = {
    name: 'Dana Ng',
    role: 'Web Developer',
    contacts: {
        mobile: '859-123-4567',
        email: 'ngdana1@gmail.com',
        github: 'riceball1',
        twitter: '@ravingdango',
        location: 'San Jose, CA'
    },
    welcomeMessage: 'Welcome to my portfolio website',
    skills: ['html/css', 'javascript', 'nodejs', 'react', 'angular'],
    biopic: 'https://avatars2.githubusercontent.com/u/14253024?v=3&s=460',
    display() {
        var formattedHeaderName = HTMLheaderName.replace("%data%", this.name);
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#topContacts").before(formattedHeaderName);
        $("#topContacts").before(formattedHeaderRole);
        $("#header").append(formattedBiopic, formattedWelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedTwitter, formattedLocation);
    }
};

var education = {
    schools: [{
        name: 'University of Cincinnati',
        location: 'Cincinnati, OH',
        degree: 'MEd',
        majors: ["Second Language Studies and Literacy"],
        dates: '11/11 - 12/12',
        url: 'www.uc.edu'
    }, {
        name: 'Northern Kentucky University',
        location: 'Highland Heights, KY',
        degree: 'MA',
        majors: ["Communication"],
        dates: '08/08 - 12/10',
        url: 'www.nku.edu'
    }, {
        name: 'Northern Kentucky University',
        location: 'Highland Heights, KY',
        degree: 'BA',
        majors: ["Public Relations"],
        dates: '08/04 - 12/07',
        url: 'www.nku.edu'
    }],
    onlineCourses: [{
        title: 'Frontend Web Developer',
        school: 'Udacity',
        dates: '06/17 - Present',
        url: 'www.udacity.com'
    }, {
        title: 'Flexible Full Stack Web Developer Program',
        school: 'Thinkful',
        dates: '11/16 - 05/17',
        url: 'www.thinkful.com'
    }],
    display() {
        // make sure that it can handle empty objects

        // initiate education div
        $("#education").append(HTMLschoolStart);

        // interate over school experiences
        if (this.schools.length > 0) {
            this.schools.forEach(function(school) {
                // formatted data
                var formattedName = HTMLschoolName.replace("%data%", school.name);
                var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
                var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
                var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
                var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

                // append data to html dom
                $(".education-entry").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
            });
        }

        if (this.onlineCourses.length > 0) {
            $(".education-entry").append(HTMLonlineClasses);
            this.onlineCourses.forEach(function(online) {
                // // formatted data
                var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", online.dates);
                var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
                var formattedonlineURL = HTMLonlineURL.replace("%data%", online.url);

                // append data to html dom
                $(".education-entry").append(formattedonlineTitle + formattedonlineSchool, formattedonlineDates, formattedonlineURL);
            });
        }

    }
};


var work = {
    jobs: [{
        employer: 'Self-Employed',
        title: 'Freelance web developer',
        location: 'remote',
        dates: '03/17 - Present',
        description: 'Worked on several frontend projects using html/css/javascript'
    }, {
        employer: 'Open Form',
        title: 'Junior web developer',
        location: 'Tucson, AZ',
        dates: '05/16 - 11/16',
        description: 'Used html/css/javascript in a wordpress environment as a support for web development projects for local businesses.'
    }],
    display() {

        // interate over work experiences
        if (this.jobs.length > 0) {
            this.jobs.forEach(function(work) {
                // add div for each work experience
                $("#workExperience").append(HTMLworkStart);
                // formatted data
                var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
                var formattedDates = HTMLworkDates.replace("%data%", work.dates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.description);

                // append data to html dom
                $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);
            });
        }
    }
};

var projects = {
    projects: [{
        title: 'Simple Code',
        dates: 'April 2017',
        description: 'A react/redux application that allows users to store code snippets',
        images: ["http://www.danafng.com/public/simple-code.png"]
    }, {
        title: 'Multipurpose',
        dates: 'January 2017',
        description: 'An online community to share information for multipurpose uses for common household items. Uses node/express, mongoDB, bootstrap, and handlebars.',
        images: ["http://www.danafng.com/public/multipurpose.png"]
    }, {
        title: 'Multilingual Twitter',
        dates: 'December 2016',
        description: 'A simple app that uses Yandex Translate API and Twitter API to translate tweets into different languages. Uses jQuery and ajax requests.',
        images: ["http://www.danafng.com/public/multilingual.png"]
    }],
    display() {

        // iterate over each project
        if (this.projects.length > 0) {
            this.projects.forEach(function(project) {
                // add div for each project-entry
                $("#projects").append(HTMLprojectStart);
                // formatted data
                var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
                var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
                var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
                var formattedprojectImage = HTMLprojectImage.replace("%data%", project.images);

                // append data to html dom
                $(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription, formattedprojectImage);
            });
        }
    }
};

// Display Data
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
