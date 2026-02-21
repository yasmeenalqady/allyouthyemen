// composables/useI18n.js
import { ref, computed } from 'vue'

const translations = {
  en: {
    // General
    home: 'Home',
    about: 'About',
    programs: 'Programs',
    impact: 'Impact',
    events: 'Events',
    blog: 'Blog',
    contact: 'Contact',
    donateNow: 'Donate Now',
    watchStory: 'Watch Our Story',

    // Stats
    livesImpacted: 'Lives Impacted',
    fundsRaised: 'Funds Raised',
    projects: 'Projects',
    volunteers: 'Volunteers',

    // Programs Section
    ourPrograms: 'Our Programs',
    programsDesc: 'We offer a variety of innovative and impactful activities that empower youth, support marginalized groups, and promote community development.',
    fightPoverty: 'Fight Poverty',
    fightPovertyPrograms: 'Fight Poverty Programs',
    povertyDesc: 'Provides nutritious food, funds, and vocational training to communities suffering from poverty and lack of resources.',
    familySupport: 'Family Support',
    familyCommunity: 'Family & Community',
    familyDesc: 'Support to families, children, refugees, migrants and individuals with special circumstances through comprehensive programs.',
    education: 'Education',
    teenEducation: 'Teen Education Programs',
    educationDesc: 'Keep children in school with tutoring, scholarships, learning spaces, and computer training for a brighter future.',
    learnMore: 'Learn More',
    viewAllProjects: 'View All Programs',

    // Health Section
    healthyStart: 'Every child deserves a healthy start',
    healthcareDesc: 'We provide FREE healthcare services and prescribe basic resources like food and medical supplies to those in need.',
    medicalDesc: 'Our medical teams provide medication and refer patients to specialized programs, improving health outcomes for communities seeking medical care.',
    health: 'Health',
    healthDesc: 'Every child deserves a healthy start',
    educationShortDesc: 'Providing FREE educational services',
    protection: 'Protection',
    protectionDesc: 'Ensuring basic resources for all',
    emergency: 'Emergency',
    emergencyDesc: '24/7 medical care support',

    // Impact Section
    ourImpact: 'Our Impact',
    impactDesc: 'Real stories of change and hope',
    beneficiary: 'Beneficiary',
    volunteer: 'Volunteer',
    communityLeader: 'Community Leader',

    // Events Section
    upcomingEvents: 'Upcoming Events',
    eventsDesc: 'Join us in making a difference',
    charityGala: 'Annual Charity Gala',
    galaDesc: 'Join us for an evening of hope and fundraising to support our education programs.',
    healthCamp: 'Community Health Camp',
    campDesc: 'Free health check-ups and medical consultations for underserved communities.',
    volunteerOrientation: 'Volunteer Orientation',
    orientationDesc: 'Learn how you can make a difference in your community through volunteering.',
    registerNow: 'Register Now',

    // Partners Section
    ourPartners: 'Our Partners',
    partnersDesc: 'Organizations that support our mission',

    // Newsletter
    stayConnected: 'Stay Connected',
    newsletterDesc: 'Subscribe to receive updates about our work and how you can help',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    thankYou: 'Thank you for subscribing!',

    // Footer
    footerDesc: 'All Youth Foundation for Community Development is a non-governmental organization dedicated to empowering youth, protecting minority rights, and promoting equality and social justice in Yemen.',
    quickLinks: 'Quick Links',
    aboutUs: 'About Us',
    partners: 'Partners',
    contactUs: 'Contact Us',
    headquarters: 'Yemen - Taiz',

    // Donation Modal
    makeDonation: 'Make a Donation',
    donationDesc: 'Your generosity helps us continue our mission to create lasting change.',
    customAmount: 'Custom Amount',
    enterAmount: 'Enter amount',
    donationType: 'Donation Type',
    oneTime: 'One-time',
    monthly: 'Monthly',
    annual: 'Annual',
    proceed: 'Proceed to Donation',

    // About Section (detailed)
    aboutDesc1: 'All Youth Foundation for Community Development is a non-governmental, non-partisan, and not-for-profit organization; was established on the International Day for Volunteering in 2008 as an initiative launched by a group of young people belonging to the minority "Akhdam" in Yemen. They are active in the field of youth development and human rights; especially in advocacy, lobbying human rights issues, public participation, and democracy in Yemen.',
    aboutDesc2: 'Our activity is based on the ideas of participation and cooperation and building alliances with all actors in the Yemeni civil field, and designed to provide equal opportunities for all, especially the marginalized groups or oppressed because of origin, sex, religion or social status. The initiative was converted to an Organization at the beginning of 2012.',
    readMore: 'Read More',
    beneficiaries: 'Beneficiaries',
    yearsOfService: 'Years of Experience',
    compassion: 'Compassion',
    compassionDesc: 'We act with empathy and understanding, putting the needs of others first.',
    integrity: 'Integrity',
    integrityDesc: 'We are transparent, accountable, and honest in all our actions.',
    community: 'Community',
    communityDesc: 'We believe in the power of community and work collaboratively to achieve our mission.',

    // Mission & Vision
    mission: 'Our Mission',
    missionDesc: 'To empower vulnerable communities through sustainable development programs that create lasting change and break the cycle of poverty.',
    vision: 'Our Vision',
    visionDesc: 'A world where every individual has access to education, healthcare, and economic opportunities, enabling them to live with dignity and hope.',

    // Goals
    ourGoals: 'Our Goals',
    goal1Title: 'Quality Education',
    goal1Desc: 'Ensure inclusive and equitable quality education for all.',
    goal2Title: 'Good Health',
    goal2Desc: 'Promote well-being and provide access to healthcare.',
    goal3Title: 'Community Support',
    goal3Desc: 'Empower communities through sustainable development.',

    // Hero Section
    heroTitle: 'Empowerment, Justice, Equality',
    heroDesc: 'All Youth Foundation works to promote and protect the rights of minorities in Yemen by raising awareness, providing support, implementing initiatives that foster equality and coexistence, and empowering young people to actively defend rights and freedoms.',
    aboutHeroTitle: 'About Us',
    aboutHeroDesc: 'Learn more about our mission, vision, and the impact we create together.',
    heroWelcome: 'Welcome!',
    callForFree: 'Call for free',
    speakUp: 'Say no to discrimination and exclusion',

    // Hero Slides (new)
    'hero.subtitle.about': 'All Youth Foundation Yemen',
    'hero.title.about': 'For a Just Society\nfor All',
    'hero.desc.about': 'A non-governmental organization established in 2008 by youth from marginalized minorities, working to promote human rights, community participation, and democracy in Yemen.',

    'hero.subtitle.struggle': 'Peaceful Struggle',
    'hero.title.struggle': 'Towards Empowering the Marginalized\nand Their Active Participation',
    'hero.desc.struggle': 'We work to promote the rights of marginalized groups and empower them to participate in society peacefully and democratically through awareness raising and dialogue platforms.',

    'hero.subtitle.minority': 'Minority Rights',
    'hero.title.minority': 'Equality and Dignity\nfor All Without Discrimination',
    'hero.desc.minority': 'We protect minority rights, ensure a safe and respectful environment, and work for their fair access to services and opportunities.',

    'hero.subtitle.youth': 'Youth Empowerment',
    'hero.title.youth': "Today's Youth\nTomorrow's Leaders",
    'hero.desc.youth': 'We develop the capacities of Yemeni youth to enable them to actively participate in society and strengthen their leadership through training and skill-building.',

    // Contact Page
    contactHeroTitle: 'Contact Us',
    contactHeroDesc: 'Get in touch and let us care for your loved ones.',
    getInTouch: 'Get in touch',
    contactInfo: 'Contact Information',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    workingHours: 'Working Hours',
    followUs: 'Follow Us',
    sendMessage: 'Send a Message',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    messageRequired: 'Message is required',
    messageSent: 'Your message has been sent successfully!',

    // All Programs Page
    allProjects: 'All Programs',
    allProjectsDesc: 'Explore our complete range of impactful programs',
    allProjectsHeroTitle: 'Our Programs',
    allProjectsHeroDesc: 'Explore our diverse range of programs making a difference worldwide.',
    all: 'All',
    healthPrograms: 'Health Programs',
    emergencyPrograms: 'Emergency Response',
    waterSanitation: 'Water & Sanitation',
    waterDesc: 'Providing clean water and sanitation facilities to communities in need.',
    noProjects: 'No programs found in this category.',

    // Programs (detailed)
    programStruggle: 'The Peaceful Struggle for the Marginalized in Yemen',
    programStruggleDesc: 'The project aims to promote the rights of marginalized groups and empower them to participate actively in society in a peaceful and democratic manner. The project seeks to raise awareness of human rights, support social justice, and provide platforms for dialogue that enable marginalized communities to express their needs and contribute to local decision-making.',
    programYourRights: '"Your Rights"',
    programYourRightsDesc: 'The "Your Rights" project aims to raise awareness of human rights in Yemen and empower individuals to know and exercise their legal and civil rights. The project supports justice and equality through educational programs, awareness campaigns, and providing legal guidance and assistance to the most vulnerable groups.',
    programYouthEmpowerment: 'The Youth Empowerment',
    programYouthEmpowermentDesc: 'The project aims to develop the capacities of Yemeni youth and enable them to actively participate in social, economic, and cultural spheres. The project focuses on skill-building, fostering leadership, and encouraging initiatives that contribute to sustainable community development.',
    programMinorityProtection: 'The Minority Protection Enhancement',
    programMinorityProtectionDesc: 'The project aims to support marginalized groups and ensure they enjoy their fundamental rights in a safe and respectful environment. The project focuses on raising awareness of rights, providing spaces for dialogue and advocacy, and empowering minorities to access services and opportunities fairly and equally.',

    // Team Section
    ourTeam: 'Our Team',
    samiName: 'Sami Al-Naggar',
    samiRole: 'Board of Directors',
    samiBio: 'Consultant on Minority Protection and Inclusion in Yemen',
    talalName: 'Talal',
    talalRole: 'Financial Officer',
    talalBio: 'Certified Accountant and Auditor',
    jamalName: 'Jamal',
    jamalRole: 'HR Manager',
    jamalBio: 'Professional Journalist, Editor, and Published Author',
    ghadeerName: 'Ghadeer',
    ghadeerRole: 'Executive Manager',
    ghadeerBio: 'Journalist and Consultant on Women’s Rights and Marginalized Groups in Yemen',

    // Stats Section
    letNumbersSpeak: 'Let the Numbers Speak',
    seniorServices: 'Senior Services',
    projectsInitiatives: 'Projects and initiatives',
    yearsOfExperience: 'Years of Experience',
    statSenior: '15',
    statVolunteers: '117+',
    statProjects: '28+',
    statYears: '13+',

    // Values Section
    greatStaff: 'Great Staff',
    greatStaffDesc: 'Our team is composed of dedicated and highly skilled professionals committed to making a positive impact.',
    safety: 'Safety',
    safetyDesc: 'Safety is at the heart of our work, ensuring that youth and minorities can thrive without fear or discrimination.',
    experience: 'Experience',
    experienceDesc: 'Our experience reflects a strong commitment to humanitarian work and high-quality program delivery across diverse communities.',
    activities: 'Activities',
    activitiesDesc: 'Our activities focus on empowering youth, supporting minorities, and strengthening community development to build a more just and inclusive society.',
    ourCarers: 'Our Carers',
    ourCarersDesc: 'Standing with minorities means defending humanity’s core values: equality, dignity, and the right to live without fear.',
    workEnvironment: 'We provide a supportive, inclusive, and dynamic work environment where innovation, teamwork, and social responsibility guide everything we do.',
    careersDesc: 'At All Youth Yemen Foundation, we believe that empowering young people begins with creating meaningful opportunities for growth, learning, and leadership. Our careers focus on attracting passionate individuals who are committed to making a positive impact in Yemeni communities.',

    // Contact details
    location: 'Location',
    locationDetail: 'Yemen, Taiz, Almushki St. Behind Central',
    phoneNumber: '+967771988836',
    email1: 'allyouthnetwork@gmail.com',
    email2: 'allyouthyemen@gmail.com',
    facebook: '@allyouthyemen',
    twitter: '@AllYouthYemen',
    instagram: '@allyouthyemen',
    youtube: 'https://youtube.com/allyouthnetwork',
    linkedin: 'https://www.linkedin.com/in/all-youth-yemen-ab029a30',

    // Cookie Consent
    cookieTitle: 'We respect your privacy',
    cookieMessage: 'Cookies help us improve your experience, deliver personalized content, and analyze traffic. You can choose which cookies to allow by clicking Customize. Click Accept All to consent or Reject All to decline non-essential cookies.',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    customize: 'Customize',
    poweredBy: 'Powered by',
  },

  ar: {
    // General
    home: 'الرئيسية',
    about: 'عننا',
    programs: 'برامجنا',
    impact: 'أثرنا',
    events: 'فعاليات',
    blog: 'مدونة',
    contact: 'اتصل بنا',
    donateNow: 'تبرع الآن',
    watchStory: 'شاهد قصتنا',

    // Stats
    livesImpacted: 'حياة تأثرت',
    fundsRaised: 'تم جمعها',
    projects: 'مشروع',
    volunteers: 'متطوع',

    // Programs Section
    ourPrograms: 'برامجنا',
    programsDesc: 'نقدم مجموعة متنوعة من الأنشطة المبتكرة والمؤثرة التي تمكّن الشباب وتدعم الفئات المهمشة وتعزز التنمية المجتمعية.',
    fightPoverty: 'محاربة الفقر',
    fightPovertyPrograms: 'برامج محاربة الفقر',
    povertyDesc: 'توفر الغذاء المغذي، الأموال، والتدريب المهني للمجتمعات التي تعاني من الفقر وقلة الموارد.',
    familySupport: 'دعم الأسرة',
    familyCommunity: 'الأسرة والمجتمع',
    familyDesc: 'دعم للعائلات، الأطفال، اللاجئين، المهاجرين والأفراد ذوي الظروف الخاصة من خلال برامج شاملة.',
    education: 'التعليم',
    teenEducation: 'برامج تعليم المراهقين',
    educationDesc: 'الحفاظ على الأطفال في المدارس من خلال الدروس الخصوصية، المنح الدراسية، مساحات التعلم، والتدريب على الحاسوب لمستقبل أفضل.',
    learnMore: 'اقرأ المزيد',
    viewAllProjects: 'عرض كل البرامج',

    // Health Section
    healthyStart: 'كل طفل يستحق بداية صحية',
    healthcareDesc: 'نقدم خدمات رعاية صحية مجانية ونصف موارد أساسية مثل الغذاء والمستلزمات الطبية للمحتاجين.',
    medicalDesc: 'تقدم فرقنا الطبية الأدوية وتحول المرضى إلى برامج متخصصة، مما يحسن النتائج الصحية للمجتمعات التي تبحث عن رعاية طبية.',
    health: 'الصحة',
    healthDesc: 'كل طفل يستحق بداية صحية',
    educationShortDesc: 'نقدم خدمات تعليمية مجانية',
    protection: 'الحماية',
    protectionDesc: 'ضمان الموارد الأساسية للجميع',
    emergency: 'الطوارئ',
    emergencyDesc: 'دعم رعاية طبية 24/7',

    // Impact Section
    ourImpact: 'أثرنا',
    impactDesc: 'قصص حقيقية عن التغيير والأمل',
    beneficiary: 'مستفيد',
    volunteer: 'متطوع',
    communityLeader: 'قائد مجتمعي',

    // Events Section
    upcomingEvents: 'الفعاليات القادمة',
    eventsDesc: 'انضم إلينا في صنع الفرق',
    charityGala: 'حفلة خيرية سنوية',
    galaDesc: 'انضم إلينا لأمسية من الأمل وجمع التبرعات لدعم برامجنا التعليمية.',
    healthCamp: 'مخيم صحي مجتمعي',
    campDesc: 'فحوصات صحية مجانية واستشارات طبية للمجتمعات المحرومة.',
    volunteerOrientation: 'توجيه المتطوعين',
    orientationDesc: 'تعلم كيف يمكنك إحداث فرق في مجتمعك من خلال التطوع.',
    registerNow: 'سجل الآن',

    // Partners Section
    ourPartners: 'شركاؤنا',
    partnersDesc: 'منظمات تدعم مهمتنا',

    // Newsletter
    stayConnected: 'ابق على اتصال',
    newsletterDesc: 'اشترك لتلقي تحديثات حول عملنا وكيف يمكنك المساعدة',
    enterEmail: 'أدخل بريدك الإلكتروني',
    subscribe: 'اشترك',
    thankYou: 'شكراً لاشتراكك!',

    // Footer
    footerDesc: 'مؤسسة كل الشباب للتنمية المجتمعية هي منظمة غير حكومية مكرسة لتمكين الشباب وحماية حقوق الأقليات وتعزيز المساواة والعدالة الاجتماعية في اليمن.',
    quickLinks: 'روابط سريعة',
    aboutUs: 'من نحن',
    partners: 'شركاء',
    contactUs: 'اتصل بنا',
    headquarters: 'اليمن - تعز',

    // Donation Modal
    makeDonation: 'قم بالتبرع',
    donationDesc: 'كرمك يساعدنا في مواصلة مهمتنا لخلق تغيير دائم.',
    customAmount: 'مبلغ مخصص',
    enterAmount: 'أدخل المبلغ',
    donationType: 'نوع التبرع',
    oneTime: 'مرة واحدة',
    monthly: 'شهري',
    annual: 'سنوي',
    proceed: 'المتابعة للتبرع',

    // About Section (detailed)
    aboutDesc1: 'مؤسسة كل الشباب للتنمية المجتمعية هي منظمة غير حكومية، غير حزبية، وغير ربحية؛ تأسست في اليوم الدولي للتطوع عام 2008 كمبادرة أطلقها مجموعة من الشباب المنتمين لأقلية "الأخدام" في اليمن. ينشطون في مجال تنمية الشباب وحقوق الإنسان؛ وخاصة في مجالات المناصرة والضغط بشأن قضايا حقوق الإنسان والمشاركة المجتمعية والديمقراطية في اليمن.',
    aboutDesc2: 'يقوم نشاطنا على أفكار المشاركة والتعاون وبناء التحالفات مع جميع الفاعلين في الحقل المدني اليمني، ويهدف إلى توفير فرص متكافئة للجميع وخاصة الفئات المهمشة أو المضطهدة بسبب الأصل أو الجنس أو الدين أو الوضع الاجتماعي. تم تحويل المبادرة إلى منظمة في بداية عام 2012.',
    readMore: 'اقرأ المزيد',
    beneficiaries: 'مستفيد',
    yearsOfService: 'سنوات خبرة',
    compassion: 'الرحمة',
    compassionDesc: 'نعمل بتعاطف وتفهم، واضعين احتياجات الآخرين أولاً.',
    integrity: 'النزاهة',
    integrityDesc: 'نحن شفافون، مسؤولون، وصادقون في جميع أعمالنا.',
    community: 'المجتمع',
    communityDesc: 'نؤمن بقوة المجتمع ونعمل بشكل تعاوني لتحقيق مهمتنا.',

    // Mission & Vision
    mission: 'رسالتنا',
    missionDesc: 'تمكين المجتمعات الضعيفة من خلال برامج تنمية مستدامة تخلق تغييراً دائماً وتكسر حلقة الفقر.',
    vision: 'رؤيتنا',
    visionDesc: 'عالم يتمتع فيه كل فرد بإمكانية الوصول إلى التعليم والرعاية الصحية والفرص الاقتصادية، مما يمكنهم من العيش بكرامة وأمل.',

    // Goals
    ourGoals: 'أهدافنا',
    goal1Title: 'تعليم جيد',
    goal1Desc: 'ضمان تعليم جيد ومنصف للجميع.',
    goal2Title: 'صحة جيدة',
    goal2Desc: 'تعزيز الرفاهية وتوفير الرعاية الصحية.',
    goal3Title: 'دعم المجتمع',
    goal3Desc: 'تمكين المجتمعات من خلال التنمية المستدامة.',

    // Hero Section
    heroTitle: 'التمكين، العدالة، المساواة',
    heroDesc: 'تعمل مؤسسة كل الشباب على تعزيز وحماية حقوق الأقليات في اليمن من خلال التوعية وتقديم الدعم وتنفيذ المبادرات التي تعزز المساواة والتعايش، وتمكين الشباب للدفاع بنشاط عن الحقوق والحريات.',
    aboutHeroTitle: 'من نحن',
    aboutHeroDesc: 'تعرف أكثر على رسالتنا ورؤيتنا والتأثير الذي نصنعه معاً.',
    heroWelcome: 'أهلاً بكم!',
    callForFree: 'اتصل مجاناً',
    speakUp: 'قل لا للتمييز والإقصاء',

    // Hero Slides (new)
    'hero.subtitle.about': 'مؤسسة كل الشباب اليمن',
    'hero.title.about': 'من أجل مجتمع عادل\nللجميع',
    'hero.desc.about': 'منظمة غير حكومية تأسست عام 2008 على يد شباب من الأقليات المهمشة، تعمل على تعزيز حقوق الإنسان والمشاركة المجتمعية والديمقراطية في اليمن.',

    'hero.subtitle.struggle': 'النضال السلمي',
    'hero.title.struggle': 'نحو تمكين المهمشين\nومشاركتهم الفاعلة',
    'hero.desc.struggle': 'نعمل على تعزيز حقوق الفئات المهمشة وتمكينهم من المشاركة في المجتمع بطرق سلمية وديمقراطية، من خلال رفع الوعي ومنصات الحوار.',

    'hero.subtitle.minority': 'حقوق الأقليات',
    'hero.title.minority': 'المساواة والكرامة\nللجميع بلا تمييز',
    'hero.desc.minority': 'نحمي حقوق الأقليات ونضمن لهم بيئة آمنة ومحترمة، ونعمل على وصولهم العادل للخدمات والفرص.',

    'hero.subtitle.youth': 'تمكين الشباب',
    'hero.title.youth': 'شباب اليوم\nقادة الغد',
    'hero.desc.youth': 'نطور قدرات الشباب اليمني لتمكينهم من المشاركة الفاعلة في المجتمع وتعزيز قيادتهم من خلال التدريب وبناء المهارات.',

    // Contact Page
    contactHeroTitle: 'اتصل بنا',
    contactHeroDesc: 'تواصل معنا ودعنا نعتني بأحبائك.',
    getInTouch: 'تواصل معنا',
    contactInfo: 'معلومات الاتصال',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    workingHours: 'ساعات العمل',
    followUs: 'تابعنا',
    sendMessage: 'أرسل رسالة',
    name: 'الاسم',
    subject: 'الموضوع',
    message: 'الرسالة',
    send: 'إرسال',
    nameRequired: 'الاسم مطلوب',
    emailRequired: 'البريد الإلكتروني مطلوب',
    emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
    messageRequired: 'الرسالة مطلوبة',
    messageSent: 'تم إرسال رسالتك بنجاح!',

    // All Programs Page
    allProjects: 'جميع البرامج',
    allProjectsDesc: 'استعرض مجموعتنا الكاملة من البرامج المؤثرة',
    allProjectsHeroTitle: 'برامجنا',
    allProjectsHeroDesc: 'استكشف مجموعتنا المتنوعة من البرامج التي تصنع الفرق في جميع أنحاء العالم.',
    all: 'الكل',
    healthPrograms: 'برامج الصحة',
    emergencyPrograms: 'الاستجابة للطوارئ',
    waterSanitation: 'المياه والصرف الصحي',
    waterDesc: 'توفير مياه نظيفة ومرافق صرف صحي للمجتمعات المحتاجة.',
    noProjects: 'لا توجد برامج في هذه الفئة.',

    // Programs (detailed)
    programStruggle: 'النضال السلمي للمهمشين في اليمن',
    programStruggleDesc: 'يهدف المشروع إلى تعزيز حقوق الفئات المهمشة وتمكينهم من المشاركة الفاعلة في المجتمع بطرق سلمية وديمقراطية. يسعى المشروع إلى نشر الوعي بحقوق الإنسان ودعم العدالة الاجتماعية وتوفير منصات للحوار تمكن المجتمعات المهمشة من التعبير عن احتياجاتها والمساهمة في صنع القرار المحلي.',
    programYourRights: '"حقوقك"',
    programYourRightsDesc: 'يهدف مشروع "حقوقك" إلى نشر الوعي بحقوق الإنسان في اليمن وتمكين الأفراد من معرفة وممارسة حقوقهم القانونية والمدنية. يدعم المشروع العدالة والمساواة من خلال برامج توعوية وحملات تثقيفية وتقديم التوجيه والمساعدة القانونية للفئات الأكثر ضعفاً.',
    programYouthEmpowerment: 'تمكين الشباب',
    programYouthEmpowermentDesc: 'يهدف المشروع إلى تطوير قدرات الشباب اليمني وتمكينهم من المشاركة الفاعلة في المجالات الاجتماعية والاقتصادية والثقافية. يركز المشروع على بناء المهارات وتعزيز القيادة وتشجيع المبادرات التي تساهم في التنمية المجتمعية المستدامة.',
    programMinorityProtection: 'تعزيز حماية الأقليات',
    programMinorityProtectionDesc: 'يهدف المشروع إلى دعم الفئات المهمشة وضمان تمتعهم بحقوقهم الأساسية في بيئة آمنة ومحترمة. يركز المشروع على التوعية بالحقوق وتوفير مساحات للحوار والمناصرة وتمكين الأقليات من الوصول إلى الخدمات والفرص بشكل عادل ومتساوٍ.',

    // Team Section
    ourTeam: 'فريقنا',
    samiName: 'سامي النجار',
    samiRole: 'مجلس الإدارة',
    samiBio: 'مستشار في حماية الأقليات والدمج في اليمن',
    talalName: 'طلال',
    talalRole: 'مسؤول مالي',
    talalBio: 'محاسب ومدقق قانوني معتمد',
    jamalName: 'جمال',
    jamalRole: 'مدير الموارد البشرية',
    jamalBio: 'صحفي محترف ومحرر ومؤلف منشور',
    ghadeerName: 'غدير',
    ghadeerRole: 'مديرة تنفيذية',
    ghadeerBio: 'صحفية ومستشارة في حقوق المرأة والفئات المهمشة في اليمن',

    // Stats Section
    letNumbersSpeak: 'دع الأرقام تتحدث',
    seniorServices: 'خدمة لكبار السن',
    projectsInitiatives: 'مشروع ومبادرة',
    yearsOfExperience: 'سنوات خبرة',
    statSenior: '١٥',
    statVolunteers: '١١٧+',
    statProjects: '٢٨+',
    statYears: '١٣+',

    // Values Section
    greatStaff: 'طاقم رائع',
    greatStaffDesc: 'فريقنا يتكون من محترفين مخلصين وذوي مهارات عالية ملتزمين بإحداث تأثير إيجابي.',
    safety: 'الأمان',
    safetyDesc: 'السلامة هي جوهر عملنا، مما يضمن أن يتمكن الشباب والأقليات من الازدهار دون خوف أو تمييز.',
    experience: 'الخبرة',
    experienceDesc: 'تعكس خبرتنا التزامًا قويًا بالعمل الإنساني وتقديم برامج عالية الجودة في مجتمعات متنوعة.',
    activities: 'الأنشطة',
    activitiesDesc: 'تركز أنشطتنا على تمكين الشباب ودعم الأقليات وتعزيز التنمية المجتمعية لبناء مجتمع أكثر عدالة وشمولية.',
    ourCarers: 'رعاتنا',
    ourCarersDesc: 'الوقوف مع الأقليات يعني الدفاع عن القيم الأساسية للإنسانية: المساواة والكرامة والحق في العيش دون خوف.',
    workEnvironment: 'نوفر بيئة عمل داعمة وشاملة وديناميكية حيث يوجه الابتكار والعمل الجماعي والمسؤولية الاجتماعية كل ما نقوم به.',
    careersDesc: 'في مؤسسة كل الشباب اليمن، نؤمن أن تمكين الشباب يبدأ بخلق فرص هادفة للنمو والتعلم والقيادة. تركز وظائفنا على جذب الأفراد المتحمسين الملتزمين بإحداث تأثير إيجابي في المجتمعات اليمنية.',

    // Contact details
    location: 'الموقع',
    locationDetail: 'اليمن، تعز، شارع المشكي، خلف المركزي',
    phoneNumber: '٩٦٧٧٧١٩٨٨٨٣٦+',
    email1: 'allyouthnetwork@gmail.com',
    email2: 'allyouthyemen@gmail.com',
    facebook: '@allyouthyemen',
    twitter: '@AllYouthYemen',
    instagram: '@allyouthyemen',
    youtube: 'https://youtube.com/allyouthnetwork',
    linkedin: 'https://www.linkedin.com/in/all-youth-yemen-ab029a30',

    // Cookie Consent
    cookieTitle: 'نحن نحترم خصوصيتك',
    cookieMessage: 'تساعدنا ملفات تعريف الارتباط في تحسين تجربتك وتقديم محتوى مخصص وتحليل حركة المرور. يمكنك اختيار ملفات تعريف الارتباط التي تسمح بها من خلال النقر على "تخصيص". انقر فوق "قبول الكل" للموافقة أو "رفض الكل" لرفض ملفات تعريف الارتباط غير الأساسية.',
    acceptAll: 'قبول الكل',
    rejectAll: 'رفض الكل',
    customize: 'تخصيص',
    poweredBy: 'مدعوم من',
  }
}

const currentLang = ref(localStorage.getItem('lang') || 'en')

export function useI18n() {
  const isRTL = computed(() => currentLang.value === 'ar')
  const dir = computed(() => (isRTL.value ? 'rtl' : 'ltr'))

  const t = (key) => {
    return translations[currentLang.value]?.[key] || key
  }

  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'en' ? 'ar' : 'en'
    localStorage.setItem('lang', currentLang.value)
    document.documentElement.dir = dir.value
  }

  return {
    currentLang,
    isRTL,
    dir,
    t,
    toggleLanguage
  }
}