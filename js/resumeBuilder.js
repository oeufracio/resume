
/* Variables with resume-data */
var bio = {
    "name":"Odin Eufracio",
    "role":"Web-Developer",
    "contacts": {
        "mobile": "(+52 +1) 831 113 9252",
        "email": "odin.eufracio@gmail.com",
        "github": "oeufracio",
        "location": "Guanajuato Guanajuato Mexico"
    },
    "welcomeMessage": "The future belongs to those who believe in the beauty of their dreams",
    "skills":[ "Numerical Optimization", "C / C++", "Python","HTML / CSS / JavaScript"],
    "biopic": "./images/OE1.jpg"
};


var work = {
    "jobs": [
    {
        "employer":"Mante Institute of Technology",
        "title": "Head of Industrial Engineering",
        "location": "Mante Tamaulipas Mexico",
        "dates": "2008 - 2011",
        "description":"Planning of the activities related to the launch of a public university."
    },
    {
        "employer":"Delphi",
        "title": "Industrial Enngineer",
        "location": "Victoria Tamaulipas Mexico",
        "dates": "2006-2008",
        "description":"Coordination of multidisciplinary teams in order to implement engineering changes and launch of new production processes."
    }]
};


var projects = {
    "projects": [
    {
        "title":"Portafolio Site",
        "dates": "2016",
        "description":"Responsive website to display the portfolio projects I built in the Front-End Developer Nanodegree",
        "images": ["./images/p1-sm.png", "./images/p2-sm.png" ]
    }
    ]
};


//Education information
var education = {
    "schools": [
    {
        "name": "Center for Research in Mathematics (CIMAT)",
        "location": "Guanajuato Guanajuato Mexico",
        "degree": "PhD",
        "majors": ["Computer Science and Mathematics"],
        "dates": "2016 - present"
    },
    {
        "name": "Center for Research in Mathematics (CIMAT)",
        "location": "Guanajuato Guanajuato Mexico",
        "degree": "MSc",
        "majors": ["Computer Science and Mathematics"],
        "dates": "2013 - 2015"
    },
    {
        "name": "Fraunhofer Academy",
        "location": "Munich Germany",
        "degree": "Specialization",
        "majors": ["Innovation and Technology Management"],
        "dates": "2011 - 2012"
    },
    {
        "name": "La Salle",
        "location": "Victoria Tamaulipas Mexico",
        "degree": "BE",
        "majors": ["Industrial Engineering"],
        "dates": "2001 - 2006"
    }    
    ],
    "onlineCourses": [
        {
            "title":"Front-End Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url":"https://www.udacity.com/"
        }]
};



/* Display functions for each object */
bio.display = function() {
    $("#header").prepend( HTMLheaderRole.replace("%data%",bio.role) );
    $("#header").prepend( HTMLheaderName.replace("%data%",bio.name) );

    $("#topContacts").append( HTMLmobile.replace("%data%",bio.contacts.mobile) );
    $("#topContacts").append( HTMLemail.replace("%data%",bio.contacts.email) );
    $("#topContacts").append( HTMLgithub.replace("%data%",bio.contacts.github) );
    $("#topContacts").append( HTMLlocation.replace("%data%",bio.contacts.location) );

     $("#header").append( HTMLbioPic.replace("%data%",bio.biopic) );
     $("#header").append( HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage) );

     if( bio.skills.length )
     {
        $("#header").append( HTMLskillsStart );

        for( var i=0; i < bio.skills.length; i++ )
        {
            $("#skills").append( HTMLskills.replace("%data%",bio.skills[i]) );
        }
     }
}


work.display = function() {
    for( var i=0; i < work.jobs.length; i++) 
    {
        $("#workExperience").append( HTMLworkStart );
        
        $(".work-entry:last").append( HTMLworkEmployer.replace("%data%",work.jobs[i].employer) );
        $(".work-entry:last").append( HTMLworkTitle.replace("%data%",work.jobs[i].title) );
        $(".work-entry:last").append( HTMLworkDates.replace("%data%",work.jobs[i].dates) );
        $(".work-entry:last").append( HTMLworkLocation.replace("%data%",work.jobs[i].location) );
        $(".work-entry:last").append( HTMLworkDescription.replace("%data%",work.jobs[i].description) );
    }
}


projects.display = function() {
    for( var i=0; i < projects.projects.length; i++) 
    {
        $("#projects").append( HTMLprojectStart );

        $(".project-entry:last").append( HTMLprojectTitle.replace("%data%",projects.projects[i].title) );
        $(".project-entry:last").append( HTMLprojectDates.replace("%data%",projects.projects[i].dates) );
        $(".project-entry:last").append( HTMLprojectDescription.replace("%data%",projects.projects[i].description) );

        for( var j=0; j < projects.projects[i].images.length; j++) 
        {
            $(".project-entry:last").append( HTMLprojectImage.replace("%data%",projects.projects[i].images[j]) );            
        }
    }
}


education.display = function() {
    for( var i=0; i< education.schools.length; i++)
    {
        $("#education").append( HTMLschoolStart );

        var Name_Degree = HTMLschoolName.replace("%data%",education.schools[i].name) + HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        $(".education-entry:last").append( Name_Degree );
        $(".education-entry:last").append( HTMLschoolDates.replace("%data%",education.schools[i].dates) );
        $(".education-entry:last").append( HTMLschoolLocation.replace("%data%",education.schools[i].location) );

        for(var j=0; j < education.schools[i].majors.length; j++)
        {
            $(".education-entry:last").append( HTMLschoolMajor.replace("%data%",education.schools[i].majors ) );    
        }
    }

    if( education.onlineCourses.length )
    {
        $("#education").append( HTMLonlineClasses );
    
        for( var i=0; i < education.onlineCourses.length; i++)
        {
            $("#education").append( HTMLschoolStart );

            var Tile_School = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title ) + HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school );
            $(".education-entry:last").append( Tile_School );
            $(".education-entry:last").append( HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates) );
            $(".education-entry:last").append( HTMLonlineURL.replace("%data%",education.onlineCourses[i].url) );
        }
    }
}


/* Call all display functions*/
bio.display();

work.display();

projects.display();

education.display();

/* Display Map */
$("#mapDiv").append( googleMap )