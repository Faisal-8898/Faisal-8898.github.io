// All site text lives here, so updates don't need any layout changes.

export const profile = {
  name: 'Faisal Ahmed',
  tagline: 'IoT systems, edge AI and security',
  affiliation: 'B.Sc. in Computer Science and Engineering, East West University, Dhaka',
  email: 'faaisal8898@gmail.com',
  links: [
    { label: 'Email', href: 'mailto:faaisal8898@gmail.com' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=ryqQnJMAAAAJ' },
    { label: 'GitHub', href: 'https://github.com/Faisal-8898' },
    { label: 'CV', href: '/assets/cv.pdf' },
  ],
  bio: [
    'I am a computer science graduate from East West University in Dhaka, where I finished my B.Sc. in May 2026 with a CGPA of 3.73. My work sits between IoT systems, edge AI and security. I tend to build systems that run on real, constrained hardware and then measure how they behave, which has taken me from ESP32 testbeds to honeypots on the open Internet.',
    'For my capstone, I worked on PAUMIoT under Dr. Hasan Mahmood Aminul Islam, where I built an ESP32 client that learns which protocol to use while a safety shield keeps it away from unsafe choices. Alongside this, I have been running an independent honeypot study of IoT attacks. I am now looking for a thesis-based master’s position starting in Fall 2027, especially in groups working on edge AI, IoT security or agentic AI.',
  ],
}

export const news = [
  { date: '2026', text: 'Our paper on content freshness in CCN over delay-tolerant networks was submitted to NSysS 2026.' },
  { date: '2026', text: 'PAUMIoT was published at IEEE DCOSS-IoT 2026.' },
  { date: 'May 2026', text: 'Graduated from East West University with a B.Sc. in Computer Science and Engineering.' },
  { date: 'Apr 2026', text: 'SEFIoT was presented at IEEE QPAIN 2026 in Chittagong.' },
  { date: 'Nov 2025', text: 'Our diabetes prediction paper was presented at IEEE BECITHCON 2025 in Dhaka.' },
]

export const research = [
  {
    title: 'Learning which protocol to use on IoT devices',
    meta: 'PAUMIoT · IEEE DCOSS-IoT 2026',
    text: 'Most IoT platforms fix the protocol at design time, although the best choice often changes with battery level and network quality. In PAUMIoT, the gateway accepts MQTT, CoAP and HTTP on one port, while my part was the ESP32 client, which learns which protocol to use with a small contextual bandit. A safety shield sits in front of the learner, so the device falls back to a safe protocol whenever the battery or signal drops too low.',
    link: { label: 'Paper', href: 'https://doi.org/10.1109/DCOSS-IoT69657.2026.00046' },
  },
  {
    title: 'Telling IoT attackers apart when their IPs keep changing',
    meta: 'Independent study · journal paper in preparation',
    text: 'Attackers change IP addresses often, which makes it hard to tell whether two attacks come from the same group. To study this, I ran four honeypots on a cloud server for 112 days and collected about 4.0 million events. I am now looking at signals that tend to stay the same across addresses, such as SSH client fingerprints, passwords and command scripts, and using them to group attackers.',
  },
  {
    title: 'Predictions that people can check',
    meta: 'IEEE BECITHCON 2025 · Engineering Reports, under review',
    text: 'In medical and business settings, a prediction is rarely useful unless people can see why the model made it. With a group of students at East West University, I worked on two studies that pair standard models with statistical tests and LIME or SHAP explanations, one for early diabetes prediction and one for retail demand and pricing.',
    link: { label: 'Paper', href: 'https://doi.org/10.1109/BECITHCON69222.2025.11504208' },
  },
  {
    title: 'Testing networks without a large testbed',
    meta: 'SEFIoT · IEEE QPAIN 2026 · NSysS 2026, submitted',
    text: 'Testing IoT systems at scale is difficult when there is no large testbed and simulated traffic looks unrealistic. SEFIoT is a lightweight emulator that generates sensor data modelled on Dhaka, and it can run thousands of virtual sensors on one machine. In a related study, I extended The ONE simulator to measure how often content cached in delay-tolerant networks is already out of date when it is served.',
    link: { label: 'Paper', href: 'https://doi.org/10.1109/QPAIN69676.2026.11546398' },
  },
]

export const publications = [
  {
    group: 'Conference papers',
    items: [
      {
        title: 'Towards a protocol-agnostic universal middleware for IoT with edge intelligence',
        authors: ['H. M. A. Islam', 'M. M. R. Maharaz', 'F. Ahmed', 'M. F. H. Dipto', 'M. M. H. Shafin', 'M. Georgiades'],
        venue: 'IEEE DCOSS-IoT, 2026',
        doi: '10.1109/DCOSS-IoT69657.2026.00046',
      },
      {
        title: 'Emulating sensor profile towards IoT simulator development',
        authors: ['M. M. Rahman', 'F. Ahmed', 'M. F. H. Dipto', 'M. M. H. Shafin', 'S. M. N. Shahriar', 'P. Akibuzzaman', 'H. M. A. Islam'],
        venue: 'IEEE QPAIN, Chittagong, 2026',
        doi: '10.1109/QPAIN69676.2026.11546398',
      },
      {
        title: 'Interpretable machine learning for early diabetes prediction with statistical validation and explainable AI',
        authors: ['F. R. Sams', 'S. K. Supti', 'M. J. Ali', 'F. Ahmed', 'M. F. H. Dipto', 'R. Gani', 'M. B. N. Shuci', 'M. R. A. Rashid', 'S. H. Ripon'],
        venue: 'IEEE BECITHCON, Dhaka, 2025',
        doi: '10.1109/BECITHCON69222.2025.11504208',
      },
    ],
  },
  {
    group: 'Under review',
    items: [
      {
        title: 'An integrated explainable machine learning framework for demand forecasting, inventory planning, and dynamic pricing in retail supply chains',
        authors: ['R. Gani', 'F. R. Sams', 'F. Ahmed', 'Y. Salehin', 'M. S. Bhuiyan', 'M. F. H. Dipto', 'S. K. Supti', 'M. J. Ali'],
        venue: 'Engineering Reports (Wiley), under review',
      },
      {
        title: 'Freshness before the cache: Measuring content staleness at ingress in CCN over delay-tolerant networks',
        authors: ['M. M. Rahman', 'F. Ahmed', 'M. F. H. Dipto', 'M. M. H. Shafin'],
        venue: 'NSysS, 2026, submitted',
      },
    ],
  },
  {
    group: 'In preparation',
    items: [
      {
        title: 'PAUMIoT: Safety-shielded, federated, cost-aware transport adaptation for heterogeneous IoT',
        authors: ['F. Ahmed', 'M. M. R. Maharaz', 'M. F. H. Dipto', 'M. M. H. Shafin', 'M. Georgiades'],
      },
      {
        title: 'Passive attribution of role-separated IoT attack ecosystems through orthogonal behavioral fingerprints',
        authors: ['F. Ahmed', 'N. Yeasmin', 'R. Hossen', 'M. Georgiades'],
      },
    ],
  },
]

export const experience = [
  {
    role: 'Co-Founder & Software Engineer',
    org: 'Trelet, Dhaka',
    date: 'Jul 2025 – Present',
    text: 'Built the payment and access-control parts of an e-commerce platform in Go and PostgreSQL. While auditing the code, I found a hard-coded secret that allowed a login bypass and removed it.',
  },
  {
    role: 'Full-stack Developer (Remote)',
    org: 'RN Jobforce, Shropshire, England',
    date: 'Oct – Dec 2025',
    text: 'Worked on the Django backend and built an interview module on the OpenAI API, which generates questions and gives candidates feedback during the session.',
  },
  {
    role: 'Software Engineering Intern',
    org: 'Progress IT Solution, Dhaka',
    date: 'Apr – Sep 2025',
    text: 'Wrote a C# video processor using FFmpeg and OpenCV, and a Windows tool for a cybersecurity client that automates domain registration and Group Policy setup.',
  },
  {
    role: 'Instructor',
    org: 'Step to Backend, online sessions',
    date: 'Oct 2023 – Mar 2024',
    text: 'Taught backend basics, mainly databases and how to deploy an app.',
  },
]
