import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Alfaiz khan',
  title: "Hi all, I'm Alfaiz",
  description:
    'I am a developer who loves building scalable, performant apps. I am passionate about JavaScript, react-native, Application development. Interested in Continuation of learning and Cooperation with excellent people.',
  resumeLink: 'https://drive.google.com/drive/u/0/folders/13Ng_UCG9_tx2tGCO9maV-WzsTfKEynki',
};

export const openSource = {
  githubUserName: 'faizkhan7896',
};

export const contact = {};

export const socialLinks = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/faiz_yousuf_zai/',
  twitter: 'https://twitter.com/Alfaiz_khan789',
  github: 'https://github.com/faizkhan7896',
  linkedin: 'https://www.linkedin.com/in/alfaiz-khan-94647b202/?original_referer=',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY REACT-NATIVE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Android and Ios Application Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building scalable, performant Apps using React Native'),
        emoji('⚡ Building responsive Single-Page-Apps.'),
        emoji('⚡ Building responsive Web Apps.'),
        emoji('⚡ Building responsive static Apps using React Native'),
        // emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        // {
        //   skillName: 'HTML-5',
        //   fontAwesomeClassname: 'vscode-icons:file-type-html',
        // },
        // {
        //   skillName: 'CSS-3',
        //   fontAwesomeClassname: 'vscode-icons:file-type-css',
        // },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'ReactNative',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        // {
        //   skillName: 'Nextjs',
        //   fontAwesomeClassname: 'vscode-icons:file-type-light-next',
        // },
        // {
        //   skillName: 'Python',
        //   fontAwesomeClassname: 'logos:python',
        // },
        // {
        //   skillName: 'Django',
        //   fontAwesomeClassname: 'vscode-icons:file-type-django',
        // },

        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
      ],
    },
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji('⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'),
    //     emoji('⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'AWS',
    //       fontAwesomeClassname: 'logos:aws',
    //     },
    //     {
    //       skillName: 'Azure',
    //       fontAwesomeClassname: 'logos:microsoft-azure',
    //     },
    //     {
    //       skillName: 'Heroku',
    //       fontAwesomeClassname: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       fontAwesomeClassname: 'logos:postgresql',
    //     },
    //     {
    //       skillName: 'Github',
    //       fontAwesomeClassname: 'akar-icons:github-fill',
    //     },
    //     {
    //       skillName: 'Docker',
    //       fontAwesomeClassname: 'logos:docker-icon',
    //     },
    //     {
    //       skillName: 'Github Actions',
    //       fontAwesomeClassname: 'logos:github-actions',
    //     },
    //     {
    //       skillName: 'Cloudinary',
    //       fontAwesomeClassname: 'logos:cloudinary',
    //     },
    //     {
    //       skillName: 'Nginx',
    //       fontAwesomeClassname: 'logos:nginx',
    //     },
    //     {
    //       skillName: 'Sentry',
    //       fontAwesomeClassname: 'logos:sentry-icon',
    //     },
    //   ],
    // },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience in developing Smart Contract using Solidity & Ethereum'),
    //     emoji('⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'),
    //     emoji('⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji('⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassname: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassname: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassname: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassname: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       fontAwesomeClassname: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '30',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo = [
  {
    schoolName: 'ILVA Higher Secondary School',
    subHeader: 'Complete Higher Secondary School',
    duration: 'March 2021',
    desc: 'Participated in the research of XXX and published 3 papers.',
    descBullets: ['Passed Secondary school', 'Passout higher secondary school'],
  },
  {
    schoolName: 'Makhanlal Chaturvedi University',
    subHeader: 'Bachelors in Computer Application',
    duration: 'September 2021 - Present',
    desc: 'Participated in the research of XXX and published 3 papers.',
    descBullets: ['Currently running a 1st year'],
  },
];

export const experience = [
  // {
  //   role: 'API Engineer',
  //   company: 'Duseca Software',
  //   companylogo: '/img/icons/common/dusecaSoftware.jpg',
  //   date: 'Jan 2022 – Mar 2022',
  //   desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  //   // descBullets: [
  //   // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //   // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   // ],
  // },
  {
    role: 'React Native Developer (Intern)',
    company: 'Avalanche Infotech Pvt Ltd',
    companylogo: '/img/icons/common/Avlanche.jpeg',
    date: 'Feb 2020 - Aug 2021',
    desc: 'Worked as React-Native Junior developer to create a Apps UI.',
  },
  {
    role: 'React Native Developer',
    company: 'Technorizen Software Solution',
    companylogo: '/img/icons/common/Techno.jpeg',
    date: 'Sept 2021 (Present)',
    desc: 'Worked as React-Native developer to create a Apps in which I integrated computer vision AI model (built by the team of Technorizen) to process YouTube URLs and show Real Time processing on Apps using React Native.',
  },
];

export const projects = [
  {
    name: 'Viceseo (Recruitment Managing Platform)',
    Screenshots: '/img/icons/common/first.png',
    desc: 'WITH OUR IOS APP IT IS A SIMPLE, FAST, AND EASY TO MANAGE YOUR ACCOUNT AND NEW DRIVERS! • KEEP YOUR CANDIDATES AND HIRING TEAM WITHIN REACH WITH OUR MOBILE APP. • REDUCE TIME TO HIRE AND EASILY MANAGE NEW CDL DRIVERS • PROVIDES STATISTICS FOR HOW MANY POTENTIAL DRIVERS YOUR COMPANY RECEIVED DAY-MONTH-YEAR ',
    link: 'https://apps.apple.com/us/app/viceseo/id1601840773',
  },
  {
    name: 'CodeMode',
    desc: 'It is an online platform for students to take the tests and teachers to create those tests - all examinations covered. CodeMode provides students insight into their preparation and performance using advance data analysis. Students can see their strength and weakness by subject and topics, compare themselves at national and international level, understand their improvement over a period of time, find test taking pattern, access wide variety of practice tests and get a clear picture on speed as well as accuracy. The more you practice, more you will know about yourself and better you will become - that is a how CodeMode helps you.',
    Screenshots: '/img/icons/common/second.png',
    link: 'https://play.google.com/store/apps/details?id=com.perfectice',
  },
  {
    name: 'Binbin Recycle',
    desc: 'Bin bin Recycle is a recycle for Cash apps. Call us for recycling and get cash on the Spot. Bin bin Recycle is a recycle for Cash apps. Call us for recycling and get cash on the Spot',
    Screenshots: '/img/icons/common/third.png',
    link: 'https://play.google.com/store/apps/details?id=com.bin_recycle',
  },
  {
    name: 'Speed Meeting - Connect Online',
    desc: 'We are connecting people. Someone a Girlfriend or just a friend or a contact inside the bankworld, or an investor. People share their interest with others and connect. You make a profile. Write your information and when you login you can choose between private/business. If you chose private you enter the groups where other people are. this is speed meeting. 60 seconds you talk with 5 others. After 60 seconds you get a popup. Where it stands. Do you wanna connect with this person. Yes/no',
    // github: 'https://github.com/1hanzla100',
    Screenshots: '/img/icons/common/fourth.png',
    link: 'https://apps.apple.com/app/1606940095',
  },
  {
    name: 'InLock - Encrypt Decrypt',
    desc: 'InLock is an application that provides a range of encryption and decryption tools. Many traditional ciphers are implemented such as the AES, Rabbit. our all encryptions tools are password protected i.e., they are encrypted using a key & are decrypted using the same key only.',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    Screenshots: '/img/icons/common/fifth.png',
    link: 'https://play.google.com/store/apps/details?id=com.inlock.app',
  },
];

export const feedbacks = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];
