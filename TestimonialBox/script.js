const profileElement = document.querySelector('.profilePic');
const profileNameElement = document.querySelector('.profileName');
const profileRole = document.querySelector(".profileDesignation");
const profileDescription = document.querySelector('.description')


var count = 1;
const profileDetails = {
    profile_1: {
      name: 'Miyah Myles',
      role: 'Marketing',
      path: './Assests/profile_1.jpg',
      description: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
    profile_2: {
      name: 'June Cha',
      role: 'Software Engineer',
      path: './Assests/profile_2.jpg',
      description: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do yourself a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!'
    },
    profile_3: {
      name: 'Iida Niskanen',
      role: 'Data Entry',
      path: './Assests/profile_3.jpg',
      description: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
    },
    profile_4: {
      name: 'Renee Sims',
      role: 'Receptionist',
      path: './Assests/profile_4.jpg',
      description: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
    },
    profile_5: {
      name: 'Jonathan Nunfiez',
      role: 'Graphic Designer',
      path: './Assests/profile_5.jpg',
      description: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!"
    },
    profile_6: {
      name: 'Sasha Ho',
      role: 'Accountant',
      path: './Assests/profile_6.jpeg',
      description: "This guy is a top-notch designer and front-end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
    },
    profile_7: {
      name: 'Veeti Seppanen',
      role: 'Director',
      path: './Assests/profile_7.jpg',
      description: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
    },
    profile_8: {
      name: 'Paul',
      role: 'Tester',
      path: './Assests/profile_8.jpg',
      description: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy find in many freelancers. We'll definitely repeat with him."
    },
    profile_9: {
      name: 'Shelby',
      role: 'Manager',
      path: './Assests/profile_9.jpg',
      description: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do yourself a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!'
    },
    profile_10: {
      name: 'John',
      role: 'Script Writer',
      path: './Assests/profile_10.jpg',
      description: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
    }
};


function renderProfileDetails() {
    if (count <= 10) {
        profileDescription.innerHTML = profileDetails[`profile_${count}`].description;
        profileElement.src = profileDetails[`profile_${count}`].path;
        profileRole.innerHTML = profileDetails[`profile_${count}`].role;
        profileNameElement.innerHTML = profileDetails[`profile_${count}`].name;
        // console.log(`profile_${count}`)
        // console.log(count)
        count++;
        // console.log(count)
    }
    if(count > 10){
        count = 1;
    }
}

renderProfileDetails();
setInterval(renderProfileDetails, 10000);
