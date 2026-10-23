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
    'I am a computer science graduate from East West University in Dhaka, where I finished my B.Sc. in May 2026 with a CGPA of 3.73. My work sits between IoT systems, edge AI and security. Most of my projects involve building a system on real hardware and then measuring how it performs.',
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

export const ongoing = [
  {
    title: 'PAUMIoT, from a conference paper to a journal system',
    meta: 'Journal paper in preparation · builds on IEEE DCOSS-IoT 2026',
    teaser: 'An IoT device that chooses its own protocol as its battery and network change, while a safety shield keeps the learning in check.',
    story: [
      'PAUMIoT started from a simple problem that I kept seeing in IoT projects. Most platforms ask the developer to choose one protocol at design time, although the best choice tends to change once a device is running in the field. For example, MQTT can use less energy than HTTP when a device sends many messages, while CoAP is usually cheaper when it only reports a few times per minute. As a result, a device on a weak battery or a noisy Wi-Fi link is likely to be using the wrong protocol for much of its life.',
      'Our first step was a gateway written in C that accepts MQTT, CoAP and HTTP on a single port. It reads only the first few bytes of a new connection to decide which protocol is arriving, which keeps detection cheap, and it then turns every message into one common format so that the rest of the system does not need to care where it came from. In our tests, this added around 40 to 60 microseconds per message and handled more than 12,000 messages per second at 1 KB. When libcoap began dropping most packets at 20 messages per second, the gateway queued them instead, delivering all of them at the cost of about 130 ms of extra latency.',
      'My own part was the device side. I wrote a small C library for the ESP32 which reads the battery level, signal strength, congestion, message priority, payload size and recent latency, and then chooses a protocol with a LinUCB contextual bandit. Because a learning agent can make poor choices while it is still exploring, I placed a safety shield in front of it. The shield has four rules, which send the device to CoAP when the battery is critical, to MQTT when the signal is very weak, to MQTT with QoS 2 for urgent messages, and to HTTP when a large payload has a good link. Only when none of these rules apply does the bandit decide, and the forced choices are kept out of its training so that it learns only from its own decisions. A small decision tree handles the cold start, while each decision takes under 50 microseconds on the device.',
      'In a 60-second test with 15% packet loss and more than 50 ms of jitter, the client moved from HTTP to MQTT, which cut latency from about 14 ms to 6 ms, and it moved back once the link recovered, while delivery stayed between 99 and 100%. These results were published at IEEE DCOSS-IoT 2026.',
      'However, the conference paper covers only one gateway and a short test. I am now extending the work into a journal paper, where several gateways can share what their devices learn instead of each one starting from zero, and where the reward also accounts for cost. We also plan to add MQTT-SN, LwM2M and WebSocket, and to train a stronger policy offline before distilling it into rules small enough for a microcontroller.',
    ],
  },
  {
    title: 'Who is really attacking IoT devices?',
    meta: 'Honeypot measurement · journal paper in preparation',
    teaser: 'Four honeypots, 112 days and four million events, used to group attackers by behaviour that survives a change of IP address.',
    story: [
      'This project began with a question about who is actually attacking IoT devices. Many studies assume that attackers and victims are the same kind of machine, since a Mirai-style botnet infects a router and then uses it to infect the next one. However, there is growing evidence that attackers now rent servers and proxies, and I wanted to test this with my own data rather than simply accept either view.',
      'In April 2026, I set up four honeypots on one DigitalOcean server, with each sensor listening on its own ports. Cowrie handled SSH and Telnet, Dionaea covered web and database services, OpenCanary offered FTP and a second Telnet port, and Glutton caught every other TCP port. Outbound traffic was blocked apart from DNS and file downloads, which were hashed but never run. Over 112 days, the sensors recorded 4,004,258 events from 29,052 IP addresses.',
      'I first compared these addresses with a census of 51,738 exposed IoT devices. Only 10 attacker addresses appeared in it, and only 537 shared a /24 network with a device, which suggests that the machines attacking IoT and the devices being attacked are largely separate groups. Public threat feeds were not much more helpful, as they listed only about 0.1% of the attackers.',
      'Because IP addresses change so often, I then looked for signals that tend to stay the same when an attacker moves. I built a pipeline that gives each address up to seven labels, including its SSH client fingerprint (HASSH), the passwords it tries and the shell commands it runs. One SSH client build was shared by 2,621 addresses, 6,674 addresses reused the same credential pairs, and 95% of Telnet attackers also used SSH. In total, 40.9% of the addresses carried two or more independent labels, allowing them to be linked even though they shared no IP history.',
      'The most interesting case was a backdoor campaign that I named mdrfckr after the comment on its SSH key. It installed the same key from 389 addresses, starting with a nine-day burst and then continuing quietly for more than three months, and it was still active on the last day of collection. Without the key, these addresses would have looked like hundreds of unrelated attackers.',
      'The study has clear limits, since all four sensors share one host and one IP address, and I can only see what attackers do once they reach the honeypot. I am now refining the analysis and preparing the paper for journal submission, while I also hope to repeat the measurement from more locations in the future.',
    ],
  },
]

export const research = [
  {
    title: 'Adaptive protocol selection for IoT devices',
    meta: 'PAUMIoT · IEEE DCOSS-IoT 2026',
    text: 'Most IoT platforms fix the protocol at design time, although the best choice often changes with battery level and network quality. In PAUMIoT, the gateway accepts MQTT, CoAP and HTTP on one port, while my part was the ESP32 client, which learns which protocol to use with a small contextual bandit. A safety shield makes the device fall back to a safe protocol whenever the battery or signal drops too low.',
    link: { label: 'Paper', href: 'https://doi.org/10.1109/DCOSS-IoT69657.2026.00046' },
  },
  {
    title: 'Attacker attribution from honeypot data',
    meta: 'Independent study · journal paper in preparation',
    text: 'Attackers change IP addresses often, which makes it hard to tell whether two attacks come from the same group. To study this, I ran four honeypots on a cloud server for 112 days and collected about 4.0 million events. I am now looking at signals that tend to stay the same across addresses, such as SSH client fingerprints, passwords and command scripts, and using them to group attackers.',
  },
  {
    title: 'Explainable machine learning',
    meta: 'IEEE BECITHCON 2025 · Engineering Reports, under review',
    text: 'With a group of students at East West University, I worked on two studies that pair standard models with statistical tests and LIME or SHAP explanations, one for early diabetes prediction and one for retail demand and pricing.',
    link: { label: 'Paper', href: 'https://doi.org/10.1109/BECITHCON69222.2025.11504208' },
  },
  {
    title: 'IoT emulation and network measurement',
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
    text: 'Built the payment and access-control parts of an e-commerce platform in Go and PostgreSQL.',
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
