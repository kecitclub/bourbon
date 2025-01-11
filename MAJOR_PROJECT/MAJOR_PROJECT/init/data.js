const sampleListings = [
  {
    id : "teaching",
    title: "Volunteer Teachers for Science and Math",
    topic: "Inspire young minds to love learning!",
    description: "We are seeking enthusiastic individuals to teach Science and Math in underprivileged schools. Your expertise will help students build a strong foundation in critical subjects and prepare them for a brighter future.",
    location: "Baglung, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Teach English in Rural Communities",
    topic: "Be the bridge to global communication!",
    description: "Help students improve their English skills in remote schools. Your contribution will empower them to access better opportunities and connect with the world.",
    location: "Sunsari, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Art and Creativit y Teacher Needed",
    topic: "Unleash the creativity within children!",
    description: "Volunteer as an art teacher to encourage children in rural schools to express themselves through drawing, painting, and crafts. Your guidance will nurture their creative potential.",
    location: "Nuwakot, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Sports Coaches for Underprivileged Schools",
    topic: "Shape champions for tomorrow!",
    description: "Join us to coach sports in schools where physical education is often overlooked. Your involvement will inspire discipline, teamwork, and a love for fitness in young learners.",
    location: "Damak, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Volunteer Music Teacher",
    topic: "Let the melody of hope play on!",
    description: "Teach music in rural schools and bring the joy of singing, instruments, and rhythm to children. Your passion for music will create lasting memories and skills.",
    location: "Bharatpur, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Computer Literacy Volunteer",
    topic: "Empower children with tech skills!",
    description: "Teach basic computer skills to students in schools with limited access to technology. Your effort will help bridge the digital divide and prepare them for modern challenges.",
    location: "Lalitpur, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Volunteer Mentor for Life Skills",
    topic: "Prepare students for real-life challenges!",
    description: "Guide students in developing essential life skills, including problem-solving, communication, and decision-making. Your mentorship will help them navigate life's complexities.",
    location: "Bardiya, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Special Education Volunteers Needed",
    topic: "Every child deserves a chance to learn!",
    description: "Help children with special needs in schools by providing personalized attention and tailored teaching. Your contribution will make a world of difference in their lives.",
    location: "Biratnagar, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Teaching Assistants for Kindergarten",
    topic: "Start young minds on the path to success!",
    description: "Assist teachers in kindergarten classrooms by organizing activities, helping with lessons, and ensuring a nurturing environment for little learners.",
    location: "Dhangadhi, Nepal",
    country: "Nepal",
    reviews: [],
  },
  {
    id : "teaching",
    title: "Environmental Education Volunteer",
    topic: "Teach children to care for the planet!",
    description: "Raise awareness about environmental issues and teach sustainable practices to students. Your lessons will inspire a generation of eco-conscious citizens.",
    location: "Illam, Nepal",
    country: "Nepal", 
    reviews: [],
  },

    {
      id: "women_empowerment",
      title: "Support Women Entrepreneurs",
      topic: "Foster entrepreneurship and innovation!",
      description: "Help women start and grow their small businesses by providing mentorship, business strategy guidance, and financial literacy training. Your contribution will help create sustainable livelihoods for women and their families.",
      location: "Pokhara, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Teach Digital Skills to Women",
      topic: "Empower women through technology!",
      description: "Equip women with essential digital skills, including email usage, social media management, and basic coding. Your expertise will open new doors for employment and entrepreneurship opportunities for women.",
      location: "Lalitpur, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Health Awareness Workshops for Women",
      topic: "Promote health and wellness for women!",
      description: "Conduct workshops to educate women about hygiene, reproductive health, and mental well-being. Your efforts will empower them to take control of their health and lead healthier lives.",
      location: "Biratnagar, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Mentorship for Young Women Leaders",
      topic: "Shape the leaders of tomorrow!",
      description: "Provide mentorship to young women, guiding them in leadership skills, public speaking, and personal development. Your guidance will help them build confidence and thrive as future leaders.",
      location: "Kathmandu, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Skill Development in Handicrafts",
      topic: "Preserve culture while empowering women!",
      description: "Teach women traditional and modern handicraft skills, enabling them to create marketable products. Your efforts will provide them with a sustainable income source while preserving cultural heritage.",
      location: "Bhaktapur, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Advocacy for Womens Rights",
      topic: "Be the voice of change!",
      description: "Support campaigns to educate women about their rights and advocate for gender equality. Help organize community outreach programs and legal awareness sessions to drive social change.",
      location: "Dhulikhel, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Financial Literacy for Women",
      topic: "Empower women to manage their finances!",
      description: "Teach women about budgeting, saving, and financial planning. Your efforts will empower them to make informed financial decisions and gain economic independence.",
      location: "Hetauda, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Support Survivors of Domestic Violence",
      topic: "Help women rebuild their lives!",
      description: "Provide emotional support, counseling, and skill-building workshops for survivors of domestic violence. Your compassion and guidance will help them regain confidence and independence.",
      location: "Chitwan, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Promote Education for Girls",
      topic: "Bridge the education gap for girls!",
      description: "Work to increase school enrollment for girls by engaging with families and communities. Support tutoring programs and provide resources to help girls succeed academically.",
      location: "Janakpur, Nepal",
      country: "Nepal",
      reviews: [],
    },
    {
      id: "women_empowerment",
      title: "Empower Rural Women Through Agriculture",
      topic: "Boost productivity and self-reliance!",
      description: "Train women in sustainable farming techniques and provide them with tools and resources. Your contribution will enhance food security and boost incomes in rural areas.",
      location: "Gorkha, Nepal",
      country: "Nepal",
      reviews: [],
    },
      {
        id: "publicHealth",
        title: "Public Health Awareness and Education",
        topic: "Promote health and safety in communities!",
        description: "We are looking for volunteers to educate communities about preventive healthcare measures, sanitation, nutrition, and hygiene. Your efforts will help reduce the spread of diseases and improve overall health in underprivileged areas.",
        location: "Kathmandu, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "Sanitation Campaigns for Rural Areas",
        topic: "Improve sanitation standards and reduce disease!",
        description: "Join our sanitation awareness programs where you will educate rural communities on safe water practices, waste management, and sanitation infrastructure. Help prevent waterborne diseases and improve public health.",
        location: "Sindhupalchok, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "Nutrition Education for Children and Families",
        topic: "Promote healthy eating habits!",
        description: "Work with families and children to teach the importance of balanced nutrition, healthy meal preparation, and local food sources. Your efforts will help combat malnutrition and promote long-term health.",
        location: "Pokhara, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "Mental Health Awareness Campaigns",
        topic: "Support mental well-being in communities!",
        description: "Lead mental health awareness campaigns to educate communities on recognizing symptoms of mental health issues and accessing local resources for care. Your work will reduce stigma and promote better mental well-being.",
        location: "Chitwan, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "Vaccination Awareness and Support",
        topic: "Help communities protect against preventable diseases!",
        description: "Help spread awareness about the importance of vaccinations, assist in organizing vaccination drives, and educate communities on the benefits of immunization to prevent diseases.",
        location: "Lalitpur, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "First Aid and Emergency Response Training",
        topic: "Prepare communities for health emergencies!",
        description: "Teach first aid, CPR, and emergency response techniques to community members to ensure that people are prepared to handle medical emergencies effectively and save lives.",
        location: "Biratnagar, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "Clean Water Access and Education",
        topic: "Ensure safe water access for all!",
        description: "Work with communities to provide safe drinking water by educating them on water purification techniques and helping install clean water systems. Your work will significantly reduce waterborne diseases.",
        location: "Hetauda, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "Health Education for Women and Children",
        topic: "Promote health equity for women and children!",
        description: "Empower women and children with knowledge on hygiene, reproductive health, and nutrition through education programs. Your work will improve health outcomes for these vulnerable groups.",
        location: "Dhulikhel, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "Fight Against Tuberculosis",
        topic: "Raise awareness and reduce tuberculosis rates!",
        description: "Help prevent the spread of tuberculosis by educating communities on symptoms, prevention methods, and available treatments. Support local health services in providing care to TB patients.",
        location: "Gorkha, Nepal",
        country: "Nepal",
        reviews: [],
      },
      {
        id: "publicHealth",
        title: "Promote Healthy Lifestyles for Youth",
        topic: "Encourage active living and disease prevention!",
        description: "Work with youth groups to promote healthy lifestyles by educating them on the benefits of physical activity, healthy eating, and avoiding unhealthy behaviors like smoking or drug use.",
        location: "Janakpur, Nepal",
        country: "Nepal",
        reviews: [],
      }
    
  ];
  
