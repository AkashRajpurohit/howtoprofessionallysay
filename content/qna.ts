import { IQnA } from 'lib/types';

const qna: IQnA[] = [
  {
    id: 1,
    question: 'You are overcomplicating this',
    answer:
      'Being mindful of timelines. Let’s concentrate on the initial scope.',
    alternativeAnswers: [],
  },
  {
    id: 2,
    question: 'That meeting sounds like a waste of my time',
    answer:
      'I’m unable to add value to this meeting but I would be happy to review the minutes.',
    alternativeAnswers: [],
  },
  {
    id: 3,
    question: 'I told you so',
    answer: 'As per my prediction, this outcome does not come as a surprise.',
    alternativeAnswers: [],
  },
  {
    id: 4,
    question: 'That sounds like a horrible idea',
    answer:
      'Are we confident that this is the best solution or are we still exploring alternatives?',
    alternativeAnswers: [],
  },
  {
    id: 5,
    question: 'I already told you this',
    answer: 'As Indicated prior',
    alternativeAnswers: [
      'The information has not changed since the last time it was communicated.',
    ],
  },
  {
    id: 6,
    question:
      'Can you answer all of the questions I asked and not just pick and choose one',
    answer:
      'Are you able to provide some clarity around the other questions previously asked?',
    alternativeAnswers: [],
  },
  {
    id: 7,
    question: 'Did you even read my email?',
    answer: 'Reattaching my email to provide further clarity',
    alternativeAnswers: ['I’ll provide an update when I have one'],
  },
  {
    id: 8,
    question: 'Stop bothering me',
    answer:
      'You have not heard from me because further information is not available at this time, once I have an update I’ll be sure to loop you in.',
    alternativeAnswers: [],
  },
  {
    id: 9,
    question: 'I don’t want to talk to you right now!',
    answer:
      'I am currently tied up with something but I will connect with you once I am free.',
    alternativeAnswers: [],
  },
  {
    id: 10,
    question: 'Do your job!',
    answer:
      'It is my understanding that you are the appropriate person to contact in regards to this. But if there’s is someone better equipped for this let me know.',
    alternativeAnswers: [],
  },
  {
    id: 11,
    question: 'That’s not my job',
    answer:
      'This falls outside of my responsibilities but I would be happy to connect you with someone who can help.',
    alternativeAnswers: [
      'I’m not the correct person to assist with this but I am happy to connect you with [insert name] who will be able to help',
    ],
  },
  {
    id: 12,
    question:
      'Stop assigning me so many tasks if you want any of them to get done',
    answer:
      'As my workload is quite heavy, can you help me understand what I should reprioritize to accommodate this new task?',
    alternativeAnswers: [],
  },
  {
    id: 13,
    question: 'Answer my emails',
    answer:
      'If there’s a better way to get in contact with you please let me know as I am hoping to have this resolved as soon as possible.',
    alternativeAnswers: [],
  },
  {
    id: 14,
    question: 'This is not my problem',
    answer:
      'I recommend directing this issue to [Name] as they have the proper expertise to best assist you',
    alternativeAnswers: [],
  },
  {
    id: 15,
    question:
      'If you would have read the whole email you’d know the answer to this',
    answer:
      'I have included my initial email below which contains all of the details you are looking for.',
    alternativeAnswers: [],
  },
  {
    id: 16,
    question: 'I have absolutely no idea what you are talking about',
    answer:
      'Can you help me better understand what exactly is it that you require on my end?',
    alternativeAnswers: [],
  },
  {
    id: 17,
    question: 'Stop micromanaging',
    answer:
      'I am confident in my ability to complete this project and will be sure to reach out, if or when I require your input.',
    alternativeAnswers: [],
  },
  {
    id: 18,
    question: 'Please hurry and get this done!',
    answer:
      'It is important that we have this completed in order to meet our targeted deadlines which are quickly approaching.',
    alternativeAnswers: [],
  },
  {
    id: 19,
    question: 'Stay in your own lane',
    answer:
      'Thank you for your input. I’ll keep that in mind as I move forward with decisions that fall within my responsibilities.',
    alternativeAnswers: [],
  },
  {
    id: 20,
    question: 'I’ve told you this multiple times',
    answer:
      'There seems to be a disconnect here as this information has already been provided.',
    alternativeAnswers: [],
  },
  {
    id: 21,
    question: 'I’m not doing your job for you',
    answer:
      'I do not have the capacity to take this on in addition to my own workload but I’m happy to support where it makes sense.',
    alternativeAnswers: [],
  },
  {
    id: 22,
    question: 'We do not need to have a meeting about this',
    answer:
      'Being respectful of everyone’s time let’s discuss this through email until we have a more defined agenda.',
    alternativeAnswers: [
      'Being respectful of everyone’s time, can we communicate about this via email moving forward?',
    ],
  },
  {
    id: 23,
    question: 'Did you just take credit for my work?',
    answer:
      'It is great to see my ideas being exposed to a wider audience and I would have appreciated the opportunity to have been included in the delivery.',
    alternativeAnswers: [],
  },
  {
    id: 24,
    question: 'Google that yourself',
    answer:
      'The internet is a great resource for these types of questions and I am available to clarify elements that you are not able to find online.',
    alternativeAnswers: [],
  },
  {
    id: 25,
    question: 'What you are saying does not make sense',
    answer:
      'We seem to have a different understanding on this. Can you elaborate further on your thought process here?',
    alternativeAnswers: [],
  },
  {
    id: 26,
    question: 'I am not paid enough to do this',
    answer:
      'This falls out of my job description but if the opportunity for a role expansion becomes available I would be happy to discuss reworking my contract to better align with these new responsibilities.',
    alternativeAnswers: [],
  },
  {
    id: 27,
    question: 'I totally forgot about your email',
    answer: 'Thank you for your patience,',
    alternativeAnswers: [],
  },
  {
    id: 28,
    question:
      'I’m going to need a whole lot of more information if you want me to do this',
    answer:
      'Please let me know when further details become available as I require more information to successfully complete this task.',
    alternativeAnswers: [],
  },
  {
    id: 29,
    question: 'Stop calling me before my workday even starts',
    answer:
      'If you need to contact me, please note that my working hours being at 8 am and 6 pm. Communications received prior to this won’t be seen.',
    alternativeAnswers: [],
  },
  {
    id: 30,
    question: 'Check your inbox, I already sent this to you!',
    answer:
      'I previously sent you an email regarding that but please let me know if something went wrong in transit.',
    alternativeAnswers: [],
  },
  {
    id: 31,
    question: 'I couldn’t care less',
    answer:
      'I will defer to your judgment on this as I am not passionate either way and I trust your expertise.',
    alternativeAnswers: [],
  },
  {
    id: 32,
    question: 'I told you so and now this is your problem',
    answer:
      'I did previously note that this was a likely outcome. How do you plan to resolve this?',
    alternativeAnswers: [],
  },
  {
    id: 33,
    question: 'Stop trying to make me do your work!',
    answer:
      'I am not able to offer you additional support in completing your workload.',
    alternativeAnswers: [],
  },
  {
    id: 34,
    question: 'Try problem solving on your own before you come to me',
    answer:
      'I encourage you to brainstorm possible solutions prior to looping me in for additional support.',
    alternativeAnswers: [],
  },
  {
    id: 35,
    question: 'Can you do your job so I don’t have to?',
    answer: 'Please let me know when your deliverables have been completed.',
    alternativeAnswers: [],
  },
  {
    id: 36,
    question: 'If further changes are required do them yourself.',
    answer:
      'If further edits are required, I have attached a version of the document that you can apply your edits directly into.',
    alternativeAnswers: [],
  },
  {
    id: 37,
    question: 'You should be the one doing this, not me.',
    answer:
      'It is my understanding that this is your responsibility. If that is not the case please let me know.',
    alternativeAnswers: [],
  },
  {
    id: 38,
    question: 'I don’t need to be included on this.',
    answer:
      'I do not feel as though I am able to add any value to this conversation. Please remove me from this thread and feel free to loop me back in in the future should my involvement be required.',
    alternativeAnswers: [],
  },
  {
    id: 39,
    question: 'I can’t read your mind. Be more clear on what you want.',
    answer:
      'In order to successfully complete this I will need further details on what is required.',
    alternativeAnswers: [],
  },
  {
    id: 40,
    question: 'Does taking on all this extra work come with extra pay?',
    answer:
      'With my role expanding is there a plan to review my title and compensation to better reflect these additional responsibilities?',
    alternativeAnswers: [
      'As my role has organically evolved, can we schedule time to review my overall compensation and discuss whether or not it is still aligned with my current role and responsibilities?',
      'Will these tasks be part of my job long-term? If so, is there an opportunity to reevaluate my job description, title, and overall compensation to more accurately reflect these additional responsibilities?',
    ],
  },
  {
    id: 41,
    question: 'Stop promising unrealistic timelines.',
    answer:
      'Can you walk me through your thinking on these timelines? I have some hesitations with the dates shared.',
    alternativeAnswers: [],
  },
  {
    id: 42,
    question: 'I’ve not been properly trained on this',
    answer:
      'Is training available in order for me to successfully complete this?',
    alternativeAnswers: [],
  },
  {
    id: 43,
    question:
      'If you have me scheduled in meetings all day, when do you expect me to get this work done?',
    answer:
      'My calendar is currently heavily scheduled with meetings. To ensure appropriate time is available to get this done I can sit out of lower priority meetings this week or extend the deadline on this project. Please let me know which is preferred?',
    alternativeAnswers: [],
  },
  {
    id: 44,
    question: 'If I’m doing your job for you, then what are you doing all day?',
    answer:
      'Is there a higher priority task that is consuming all of your capacity at the moment?',
    alternativeAnswers: [],
  },
  {
    id: 45,
    question: 'I can’t take on anymore work right now',
    answer:
      'I am unable to take that on at the moment as my current workload is quite heavy. Is there someone else who can assist with this?',
    alternativeAnswers: [],
  },
  {
    id: 46,
    question: 'Your micromanaging isn’t making this go any faster',
    answer:
      'Though I appreciate your attention to this, I feel as though I could be more productive if I had an opportunity to work independently here.',
    alternativeAnswers: [],
  },
  {
    id: 47,
    question:
      'If you expect me to do the job of 3 people, then I expect you to pay me the salary of 3 people.',
    answer:
      'Are additional team members being added to take on these roles or will I be expected to absorb these responsibilities?  If the latter, I would be happy to set up some time to discuss appropriate compensation for this role expansion',
    alternativeAnswers: [],
  },
  {
    id: 48,
    question: 'You are not my boss, stop trying to assign me work.',
    answer:
      'Have you connected with [manager name] in regards to me taking this on? As it has not been communicated to me that I’ll be working on this.',
    alternativeAnswers: [],
  },
  {
    id: 49,
    question: 'If you want it done your way then just do it yourself.',
    answer:
      'As you seem to have a very clear vision for the execution of this, I encourage you to take the lead here and I’m happy to support you where necessary.',
    alternativeAnswers: [],
  },
  {
    id: 50,
    question: 'I don’t want to work with you more than I have to.',
    answer:
      'Would you be open to replacing our frequent communications with a monthly touch base where we can discuss all updates during that time?',
    alternativeAnswers: [],
  },
  {
    id: 51,
    question: 'I don’t want to attend a work event during my personal time.',
    answer: 'I’m unable to attend after working hours.',
    alternativeAnswers: [],
  },
  {
    id: 52,
    question: 'Does the company actually care about the employees?',
    answer:
      'Are there resources and boundaries in place to support the physical and mental health of employees?',
    alternativeAnswers: [],
  },
  {
    id: 53,
    question: 'How much does this role pay?',
    answer:
      'Can you share what the overall compensation looks like for this role?',
    alternativeAnswers: [],
  },
  {
    id: 54,
    question: 'Are promotions based on performance or politics?',
    answer:
      'Is there an opportunity for growth within the company and if so what is the main metric for promotion?',
    alternativeAnswers: [],
  },
  {
    id: 55,
    question:
      'Do you have a culture that expects employees to put in over 40 hours each week?',
    answer:
      'Is it common within the company for employees to exceed 40 working hours per week?',
    alternativeAnswers: [],
  },
  {
    id: 56,
    question: 'Is the manager of this role a micromanager?',
    answer: 'How involved is the reporting manager with this role?',
    alternativeAnswers: [],
  },
  {
    id: 57,
    question: 'Do you expect employees to be available 24/7?',
    answer:
      'What is the expectation for being available outside of working hours?',
    alternativeAnswers: [],
  },
  {
    id: 58,
    question: 'I don’t believe you.',
    answer:
      'I’m not confident that the information you have provided is correct.',
    alternativeAnswers: [],
  },
  {
    id: 59,
    question: 'You are wasting my time.',
    answer:
      'Being respectful of time let’s regroup when more details become available.',
    alternativeAnswers: [],
  },
  {
    id: 60,
    question: 'I deserve a raise.',
    answer:
      'Given my contributions to the company’s success along with a current market analysis of my role. I am setting up time to discuss a salary review.',
    alternativeAnswers: [],
  },
  {
    id: 61,
    question: 'The way you speak to me is disrespectful.',
    answer:
      'I encourage you to reevaluate the way you are speaking to me, as the disrespect you are currently displaying towards me is not welcomed nor will it be tolerated.',
    alternativeAnswers: [],
  },
  {
    id: 62,
    question: 'That idea is going to be an epic fail.',
    answer:
      'I am not in agreement with this idea and have hesitations moving forward.',
    alternativeAnswers: [],
  },
  {
    id: 63,
    question: 'I am burning out with this workload and your lack of support.',
    answer:
      'My productivity is being impacted by the overwhelming workload I am currently assigned. Is there any support you or the team can offer?',
    alternativeAnswers: [],
  },
];

export default qna;
