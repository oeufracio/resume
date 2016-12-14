
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


/* Call all display functions*/
bio.display();

work.display();