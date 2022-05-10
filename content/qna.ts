import { IQnA, Flow } from 'lib/types';

const qna: IQnA[] = [
  {
    question: 'You are overcomplicating this',
    answer:
      'Being mindful of timelines. Let’s concentrate on the initial scope.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'That meeting sounds like a waste of my time',
    answer:
      'I’m unable to add value to this meeting but I would be happy to review the minutes.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I told you so',
    answer: 'As per my prediction, this outcome does not come as a surprise.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'That sounds like a horrible idea',
    answer:
      'Are we confident that this is the best solution or are we still exploring alternatives?',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I already told you this',
    answer: 'As Indicated prior',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question:
      'Can you answer all of the questions I asked and not just pick and choose one',
    answer:
      'Are you able to provide some clarity around the other questions previously asked?',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Did you even read my email?',
    answer: 'Reattaching my email to provide further clarity',
    alternativeAnswers: ['I’ll provide an update when I have one'],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Stop bothering me',
    answer:
      'You have not heard from me because further information is not available at this time, once I have an update I’ll be sure to loop you in.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I don’t want to talk to you right now!',
    answer:
      'I am currently tied up with something but I will connect with you once I am free.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Do your job!',
    answer:
      'It is my understanding that you are the appropriate person to contact in regards to this. But if there’s is someone better equipped for this let me know.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'That’s not my job',
    answer:
      'This falls outside of my responsibilities but I would be happy to connect you with someone who can help.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question:
      'Stop assigning me so many tasks if you want any of them to get done',
    answer:
      'As my workload is quite heavy, can you help me understand what I should reprioritize to accommodate this new task?',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Answer my emails',
    answer:
      'If there’s a better way to get in contact with you please let me know as I am hoping to have this resolved as soon as possible.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'This is not my problem',
    answer:
      'I recommend directing this issue to [Name] as they have the proper expertise to best assist you',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question:
      'If you would have read the whole email you’d know the answer to this',
    answer:
      'I have included my initial email below which contains all of the details you are looking for.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I have absolutely no idea what you are talking about',
    answer:
      'Can you help me better understand what exactly is it that you require on my end?',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Stop micromanaging',
    answer:
      'I am confident in my ability to complete this project and will be sure to reach out, if or when I require your input.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Please hurry and get this done!',
    answer:
      'It is important that we have this completed in order to meet our targeted deadlines which are quickly approaching.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Stay in your own lane',
    answer:
      'Thank you for your input. I’ll keep that in mind as I move forward with decisions that fall within my responsibilities.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I’ve told you this multiple times',
    answer:
      'There seems to be a disconnect here as this information has already been provided.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I’m not doing your job for you',
    answer:
      'I do not have the capacity to take this on in addition to my own workload but I’m happy to support where it makes sense.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'We do not need to have a meeting about this',
    answer:
      'Being respectful of everyone’s time let’s discuss this through email until we have a more defined agenda.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Did you just take credit for my work?',
    answer:
      'It is great to see my ideas being exposed to a wider audience and I would have appreciated the opportunity to have been included in the delivery.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Google that yourself',
    answer:
      'The internet is a great resource for these types of questions and I am available to clarify elements that you are not able to find online.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'What you are saying does not make sense',
    answer:
      'We seem to have a different understanding on this. Can you elaborate further on your thought process here?',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I am not paid enough to do this',
    answer:
      'This falls out of my job description but if the opportunity for a role expansion becomes available I would be happy to discuss reworking my contract to better align with these new responsibilities.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I totally forgot about your email',
    answer: 'Thank you for your patience,',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question:
      'I’m going to need a whole lot of more information if you want me to do this',
    answer:
      'Please let me know when further details become available as I require more information to successfully complete this task.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Stop calling me before my workday even starts',
    answer:
      'If you need to contact me, please note that my working hours being at 8 am and 6 pm. Communications received prior to this won’t be seen.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Check your inbox, I already sent this to you!',
    answer:
      'I previously sent you an email regarding that but please let me know if something went wrong in transit.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I couldn’t care less',
    answer:
      'I will defer to your judgment on this as I am not passionate either way and I trust your expertise.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'I told you so and now this is your problem',
    answer:
      'I did previously note that this was a likely outcome. How do you plan to resolve this?',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Stop trying to make me do your work!',
    answer:
      'I am not able to offer you additional support in completing your workload.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Try problem solving on your own before you come to me',
    answer:
      'I encourage you to brainstorm possible solutions prior to looping me in for additional support.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'Can you do you job so I don’t have to?',
    answer:
        'Please let me know when your deliverables have been completed.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
  {
    question: 'If further changes are required do them yourself.',
    answer:
        'If further edits are required, I have attached a version of the document that you can apply your edits directly into.',
    alternativeAnswers: [],
    flow: Flow.A_TO_B,
  },
];

export default qna;
