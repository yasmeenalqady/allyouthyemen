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
    projects: 'Projects', // kept as is (could be changed to "Programs" if needed)
    volunteers: 'Volunteers',

    // Programs Section
    ourPrograms: 'Our Programs',
    programsDesc: "It's our mission to help people reduce their poverty through impactful campaigns that create sustainable change.",
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
    viewAllProjects: 'View All Programs', // changed

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
    footerDesc: 'Global aid network dedicated to building a world where justice begins and inequality ends.',
    quickLinks: 'Quick Links',
    aboutUs: 'About Us',
    partners: 'Partners',
    contactUs: 'Contact Us',
    headquarters: 'Global Headquarters',

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
    aboutDesc1: 'We are a global aid network dedicated to building a world where justice begins and inequality ends. Since 2010, we have been working tirelessly to support vulnerable communities around the world.',
    aboutDesc2: 'Our approach combines emergency relief with long-term development programs, ensuring that the people we serve not only survive but thrive.',
    readMore: 'Read More',
    beneficiaries: 'Beneficiaries',
    yearsOfService: 'Years of Service',
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
    heroTitle: 'Together for a Better World',
    heroDesc: 'Join us in making a difference through impactful programs that change lives.',
    aboutHeroTitle: 'About Us',
    aboutHeroDesc: 'Learn more about our mission, vision, and the impact we create together.',

    // Contact Page
    contactHeroTitle: 'Contact Us',
    contactHeroDesc: 'We\'d love to hear from you. Get in touch with our team.',
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
    allProjects: 'All Programs', // changed
    allProjectsDesc: 'Explore our complete range of impactful programs',
    allProjectsHeroTitle: 'Our Programs', // changed
    allProjectsHeroDesc: 'Explore our diverse range of programs making a difference worldwide.',
    all: 'All',
    healthPrograms: 'Health Programs',
    emergencyPrograms: 'Emergency Response',
    waterSanitation: 'Water & Sanitation',
    waterDesc: 'Providing clean water and sanitation facilities to communities in need.',
    noProjects: 'No programs found in this category.', // changed
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
    projects: 'مشروع', // kept as is or could be changed to "برنامج" depending on context
    volunteers: 'متطوع',

    // Programs Section
    ourPrograms: 'برامجنا',
    programsDesc: 'مهمتنا هي مساعدة الناس على تقليل الفقر من خلال حملات مؤثرة تخلق تغييراً مستداماً.',
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
    viewAllProjects: 'عرض كل البرامج', // added and changed

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
    footerDesc: 'شبكة مساعدات عالمية مكرسة لبناء عالم تبدأ فيه العدالة وينتهي فيه عدم المساواة.',
    quickLinks: 'روابط سريعة',
    aboutUs: 'من نحن',
    partners: 'شركاء',
    contactUs: 'اتصل بنا',
    headquarters: 'المقر الرئيسي',

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
    aboutDesc1: 'نحن شبكة مساعدات عالمية مكرسة لبناء عالم تبدأ فيه العدالة وينتهي فيه عدم المساواة. منذ عام 2010، نعمل بلا كلل لدعم المجتمعات الضعيفة في جميع أنحاء العالم.',
    aboutDesc2: 'يجمع نهجنا بين الإغاثة الطارئة وبرامج التنمية طويلة الأجل، مما يضمن أن الأشخاص الذين نخدمهم لا ينجون فحسب، بل يزدهرون.',
    readMore: 'اقرأ المزيد',
    beneficiaries: 'مستفيد',
    yearsOfService: 'سنوات من الخدمة',
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
    heroTitle: 'معاً من أجل عالم أفضل',
    heroDesc: 'انضم إلينا في صنع الفرق من خلال برامج مؤثرة تغير حياة الناس.',
    aboutHeroTitle: 'من نحن',
    aboutHeroDesc: 'تعرف أكثر على رسالتنا ورؤيتنا والتأثير الذي نصنعه معاً.',

    // Contact Page
    contactHeroTitle: 'اتصل بنا',
    contactHeroDesc: 'يسعدنا سماع رأيك. تواصل مع فريقنا.',
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
    allProjects: 'جميع البرامج', // changed
    allProjectsDesc: 'استعرض مجموعتنا الكاملة من البرامج المؤثرة',
    allProjectsHeroTitle: 'برامجنا', // changed
    allProjectsHeroDesc: 'استكشف مجموعتنا المتنوعة من البرامج التي تصنع الفرق في جميع أنحاء العالم.',
    all: 'الكل',
    healthPrograms: 'برامج الصحة',
    emergencyPrograms: 'الاستجابة للطوارئ',
    waterSanitation: 'المياه والصرف الصحي',
    waterDesc: 'توفير مياه نظيفة ومرافق صرف صحي للمجتمعات المحتاجة.',
    noProjects: 'لا توجد برامج في هذه الفئة.', // changed
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