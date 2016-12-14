
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



/* Call all display functions*/
bio.display();