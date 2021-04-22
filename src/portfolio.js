/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Katuboyana Tejeswini",
    title: "Good to see, I'm Tejeswini",
    subTitle: emoji(
        "My commitment to my work adds to my personal growth and I have challenging myself to improve the new skills. And I trying to implement it in my code."
    ),
    resumeLink: "https://drive.google.com/file/d/11WxcAHbaDN1H6Mqpj9OoOp59umRB_c7M/view?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    //github: "https://github.com/teja-94",
    linkedin: "https://www.linkedin.com/in/tejeswini-katuboyana-339800147/",
    gmail: "katuboyanatejeswini@gmail.com",
    // gitlab: "https://gitlab.com/",
    // facebook: "https://www.facebook.com/",
    //medium: "https://medium.com/@davidrakosi",
    stackoverflow: "https://stackoverflow.com/users/14755931/tejeswini-k",
    instagram: 'https://www.instagram.com/tezu_9427/',
    twitter: 'https://twitter.com/meet_teju',
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop interactive Front end / User Interfaces for web and mobile applications."
        ),
        emoji("⚡ Ready to give all support, implementation of new solution within the assigned areas."),
        emoji(
            "⚡ Integration of third party services such as Firebase."
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "HTML-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "CSS3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "Bootstrap",
            fontAwesomeClassname: "fab fa-bootstrap"
        },

        {
            skillName: "Reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "Nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "Angular",
            fontAwesomeClassname: "fab fa-angular"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "SQL-Database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "Firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "Java",
            fontAwesomeClassname: "fab fa-java"
        },

        {
            skillName: "Servlets",
            fontAwesomeClassname: "fas fa-server"

        },
        {
            skillName: "Python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "wordpress",
            fontAwesomeClassname: "fab fa-wordpress"

        },


    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        /*{
    schoolName: "RGUKT RK VALLEY",
    logo: require("./assets/images/rkLogo.jpg"),
    subHeader: "PUC-MBiPC",
    duration: "September 2011 - April 2013",
    desc:
      " I completed my graduation in the year 2017 at Rajiv Gandhi University of Knowledge Technologies in Metallurgical and Materials department with aggregate 7.51 CGPA...",
    descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]

  }, */
        {
            schoolName: "RGUKT RK VALLEY",
            logo: require("./assets/images/rkLogo.jpg"),
            subHeader: "Bachelor of Technology in Metallurgical and Materials Science",
            duration: "September 2013 - April 2017",
            desc: " I've completed my graduation in the year 2017 at Rajiv Gandhi University of Knowledge Technologies in Metallurgical and Materials department with aggregate 7.51 CGPA.",

        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend / Design", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "90%"
        }
    ],
    displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Assiocate Software Engineer",
            company: "Gemini Consulting & Services India Pvt Ltd",
            companylogo: require("./assets/images/gemLogo.png"),
            date: "September 2019 – Present",
            desc: "Currently I'm working on Gemini Internal Product Project on React Js.",
            descBullets: [
                "Creating User Application Webpages",
                "API Integration",
                "Adding sharing features",
                "Manual Testing."
            ]
        },
        {
            role: "Wordpress Developer (PSD2)",
            company: "B-CUBE Consulting Private Limited",
            companylogo: require("./assets/images/b-cube.png"),
            date: "October 2018 – December 2018",
            desc: "I've worked on making websites and in order to fulfill the requirements.",
            descBullets: [
                "Using Custom plugins",
                "Creating website",
                "Using template to create user requirements"
            ]
        },
        {
            role: "Digital Marketing Trainee",
            company: "Digital Gannet Pvt Ltd",
            companylogo: require("./assets/images/dgLogo.png"),
            date: "February 2018 – July 2018",
            desc: "I did an internship in Digital Gannet Solutions as Digital Marketing.",
            descBullets: [
                "Practice on Wordpress",
                "Creating sample website",
                "Using plugins,templates",
            ]
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "teja-94", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Personal Projects",
    subtitle: "USING MY SKILLS AND KNOWLEDGE TO CREATE OWN WEBSITE FOR IMPROVEMENT TECH SKILLS.",
    projects: [{
            image: require("./assets/images/milletsLogo.png"),
            projectName: "Millets",
            projectDesc: "I personally worked on millets product website for future business purpose. And this is the sample website",
            footerLink: [{
                    name: "Clone a Repository",
                    url: "https://github.com/teja-94/Millets-Web"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/ppLogo.png"),
            projectName: "Personal Portfolio",
            projectDesc: "I have done my personal portfolio.And In this that I mention all my expertise",
            footerLink: [{
                name: "Clone a Repository",
                url: "https://github.com/teja-94/dev-teja.github.io"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            footerLink: [{
                    name: "Certification",
                    url: ""
                },
                {
                    name: "Award Letter",
                    url: ""
                },
                {
                    name: "Google Code-in Blog",
                    url: ""
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            footerLink: [{
                name: "View Google Assistant Action",
                url: ""
            }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: ""
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        ""
    ),

    talks: [{
        title: "",
        subtitle: "",
        slides_url: "",
        event_url: ""
    }],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        ""
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "8500019854",
    email_address: "katuboyanatejeswini@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "Tejeswini (Teju) Yadav", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};