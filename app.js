
const chatlog = document.querySelector('.chatlog');
const inputbox = document.querySelector('#inputbox');
const sendbutton = document.querySelector('#sendbutton');

const qa = {
  "tribal welfare" : "Tribal welfare refers to the efforts made by governments and other organizations to promote the social, economic, and cultural development of tribal communities.",
  "గిరిజన సంక్షేమం":"Tribal welfare refers to the efforts made by governments and other organizations to promote the social, economic, and cultural development of tribal communities.",
"what is tribal welfare?":"Tribal welfare refers to the efforts made by governments and other organizations to promote the social, economic, and cultural development of tribal communities.",
"గిరిజన సంక్షేమం అంటే ఏమిటి?":"Tribal welfare refers to the efforts made by governments and other organizations to promote the social, economic, and cultural development of tribal communities.",

"EDUCATIONAL SCHEMES" : "Eklavya Model Residential Schools , Post Matric Scholarship for ST students,Pre-Matric Scholarship for ST students, National Fellowship and Scholarship for Higher Education of ST students, Ashram Schools",
"విద్యా పథకాలు" : "Eklavya Model Residential Schools , Post Matric Scholarship for ST students,Pre-Matric Scholarship for ST students, National Fellowship and Scholarship for Higher Education of ST students, Ashram Schools",

"TRIBAL SCHEMES UNDER EDUCATION?":"Eklavya Model Residential Schools , Post Matric Scholarship for ST students,Pre-Matric Scholarship for ST students, National Fellowship and Scholarship for Higher Education of ST students, Ashram Schools",

"చదువు":"Eklavya Model Residential Schools , Post Matric Scholarship for ST students,Pre-Matric Scholarship for ST students, National Fellowship and Scholarship for Higher Education of ST students, Ashram Schools",


"eklavya model" : "The objective of the Eklavya Model is to provide a conducive learning environment for tribal students to help them excel academically and realize their full potential.",
"what is eklavya model?":"The objective of the Eklavya Model is to provide a conducive learning environment for tribal students to help them excel academically and realize their full potential.",

"economic schemes":"Economic schmees include TSP,VDY,TRIFED",
"ఆర్థిక పథకాలు":"Economic schmees include TSP,VDY,TRIFED",

"TSP":"TSP stands for Tribal Sub-Plan. It is a mechanism adopted by the Government of India to channelize funds for the development of Scheduled Tribes (ST) in India.",
"what is TSP?": "TSP stands for Tribal Sub-Plan. It is a mechanism adopted by the Government of India to channelize funds for the development of Scheduled Tribes (ST) in India.",

"VDY అంటే ఏమిటి?":"VDY stands for Van Dhan Yojana. It is a scheme launched by the Ministry of Tribal Affairs, Government of India in 2018. The scheme aims to promote the livelihoods of tribal communities through the sustainable management of forest resources.",
"VDY":"VDY stands for Van Dhan Yojana. It is a scheme launched by the Ministry of Tribal Affairs, Government of India in 2018. The scheme aims to promote the livelihoods of tribal communities through the sustainable management of forest resources.",

"TRIFED అంటే ఏమిటి?":"TRIFED stands for Tribal Cooperative Marketing Development Federation of India. It is a national-level apex organization established by the Ministry of Tribal Affairs, Government of India in 1987. The objective of TRIFED is to promote the economic development of tribal communities in India by providing marketing support to their products.",
"TRIFED":"TRIFED stands for Tribal Cooperative Marketing Development Federation of India. It is a national-level apex organization established by the Ministry of Tribal Affairs, Government of India in 1987. The objective of TRIFED is to promote the economic development of tribal communities in India by providing marketing support to their products.",

"tribal healthcare": "Tribal healthcare refers to the healthcare services and facilities provided to the tribal communities in India. The healthcare system for tribal communities is designed to cater to the specific healthcare needs and challenges faced by these communities, such as a lack of accessibility to healthcare facilities, poor living conditions, and the prevalence of communicable diseases.",
"ఆరోగ్య సంరక్షణ": "Tribal healthcare refers to the healthcare services and facilities provided to the tribal communities in India. The healthcare system for tribal communities is designed to cater to the specific healthcare needs and challenges faced by these communities, such as a lack of accessibility to healthcare facilities, poor living conditions, and the prevalence of communicable diseases.",

"what is Tribal Health and Nutrition Portal?": "The Ministry of Tribal Affairs, Government of India launched the Tribal Health and Nutrition Portal in 2018. The portal aims to provide information and resources related to the healthcare and nutrition of tribal communities.",
"గిరిజన ఆరోగ్యం మరియు పోషకాహార పోర్టల్ అంటే ఏమిటి?": "The Ministry of Tribal Affairs, Government of India launched the Tribal Health and Nutrition Portal in 2018. The portal aims to provide information and resources related to the healthcare and nutrition of tribal communities.",

"what are Mobile Medical Units?": "The government has deployed Mobile Medical Units (MMUs) in remote and hilly areas where accessibility to healthcare facilities is low. These MMUs provide basic healthcare services such as vaccinations, health check-ups, and treatments.",

"మొబైల్ మెడికల్ యూనిట్లు అంటే ఏమిటి?": "The government has deployed Mobile Medical Units (MMUs) in remote and hilly areas where accessibility to healthcare facilities is low. These MMUs provide basic healthcare services such as vaccinations, health check-ups, and treatments.",

"what is Janani Shishu Suraksha Karyakram?": "This scheme provides free healthcare services to pregnant women and children in tribal areas. The services include free delivery, transport, and medical care for mother and child.",
"జననీ శిశు సురక్ష కార్యక్రమం అంటే ఏమిటి?": "This scheme provides free healthcare services to pregnant women and children in tribal areas. The services include free delivery, transport, and medical care for mother and child.",



"what is NHM?":"The NHM aims to provide accessible, affordable, and quality healthcare services to all citizens, especially those living in rural and remote areas, under-served and underprivileged communities, and women and children.",
"NHM అంటే ఏమిటి?":"The NHM aims to provide accessible, affordable, and quality healthcare services to all citizens, especially those living in rural and remote areas, under-served and underprivileged communities, and women and children.",

"tribal lifestyle": "Tribal lifestyle refers to the way of life, customs, traditions, and practices of the indigenous communities living in various parts of India. The tribal lifestyle is deeply rooted in nature and is closely linked to their environment, culture, and social practices.",
"గిరిజన జీవనశైలి": "Tribal lifestyle refers to the way of life, customs, traditions, and practices of the indigenous communities living in various parts of India. The tribal lifestyle is deeply rooted in nature and is closely linked to their environment, culture, and social practices.",


"how to help tribals":
"Promoting their products, Supporting their education, Providing healthcare services, Protecting their land and natural resources",
"గిరిజనులకు ఎలా సహాయం చేయాలి":
"Promoting their products, Supporting their education, Providing healthcare services, Protecting their land and natural resources",

"do tribals know English": "the level of English proficiency among tribal communities is likely to vary widely depending on factors such as their geographic location, access to education, exposure to other cultures, and individual aptitude and interest in learning the language.",
"గిరిజనులకు ఇంగ్లీషు తెలుసా": "the level of English proficiency among tribal communities is likely to vary widely depending on factors such as their geographic location, access to education, exposure to other cultures, and individual aptitude and interest in learning the language.",

"problems faced by tribals": "Land and resource rights, Education, Healthcare, Poverty, Discrimination",
"గిరిజనులు ఎదుర్కొంటున్న సమస్యలు":"Land and resource rights, Education, Healthcare, Poverty, Discrimination",
"what do tribals do for a living?":
"Agriculture, Forestry, Handicrafts, Wage labor",
"గిరిజనులు జీవనోపాధి కోసం ఏమి చేస్తారు?":
"Agriculture, Forestry, Handicrafts, Wage labor",

"How many tribes are there in India?":"645",
"భారతదేశంలో ఎన్ని తెగలు ఉన్నాయి?":"645",
 "In which state of India resides the maximum number of tribes?":
"Madhya Pradesh",
 "భారతదేశంలోని ఏ రాష్ట్రంలో అత్యధిక సంఖ్యలో గిరిజనులు నివసిస్తున్నారు?":
"Madhya Pradesh",


"Which is the largest tribe in India?":
"Bhil",
"భారతదేశంలో అతిపెద్ద తెగ ఏది?":
"Bhil",

"What is the percentage of tribal population in India?": " 8.6%",
"భారతదేశంలో గిరిజన జనాభా శాతం ఎంత?": " 8.6%",

"Who is the current Minister of Tribal Affairs?":
"Jual Oram",
"ప్రస్తుత గిరిజన వ్యవహారాల మంత్రి ఎవరు?":
"Jual Oram",
};

function getAnswer(question) {
  return qa[question];
}

function appendQuestion(question) {
  const p = document.createElement('p');
  p.textContent = question;
  p.classList.add('question');
  chatlog.appendChild(p);
}

function appendAnswer(answer) {
  const p = document.createElement('p');
  p.textContent = answer;
  p.classList.add('answer');
  chatlog.appendChild(p);
}

sendbutton.addEventListener('click', function() {
  const question = inputbox.value.trim();
  if (question !== '') {
    appendQuestion(question);
    const answer = getAnswer(question) || "I'm sorry, I don't know the answer to that.";
    appendAnswer(answer);
    inputbox.value = '';
    chatlog.scrollTop = chatlog.scrollHeight;
  }
});

inputbox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendbutton.click();
  }
});



		function displayAnswer() {
			// Get the selected radio button
			var selectedRadio = document.querySelector('input[name="option"]:checked');

			// Get the value of the selected radio button
			var selectedOption = selectedRadio.value;

			// Check which option was selected and display the corresponding answer
			var answerDiv = document.getElementById('answer');
			if (selectedOption === 'Option 1') {
				answerDiv.innerHTML = 'Tribal welfare refers to the efforts made by governments and other organizations to promote the social, economic, and cultural development of tribal communities.';
			} else if (selectedOption === 'Option 2') {
				answerDiv.innerHTML = 'Eklavya Model Residential Schools , Post Matric Scholarship for ST students,Pre-Matric Scholarship for ST students, National Fellowship and Scholarship for Higher Education of ST students, Ashram Schools';
			} else if (selectedOption === 'Option 3') {
				answerDiv.innerHTML = 'Economic schmees include TSP,VDY,TRIFED';
			}
			 else if (selectedOption === 'Option 4') {
				answerDiv.innerHTML = 'Tribal healthcare refers to the healthcare services and facilities provided to the tribal communities in India. The healthcare system for tribal communities is designed to cater to the specific healthcare needs and challenges faced by these communities, such as a lack of accessibility to healthcare facilities, poor living conditions, and the prevalence of communicable diseases.';
			}
		}








