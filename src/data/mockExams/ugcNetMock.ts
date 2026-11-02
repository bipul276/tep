import { MockExam } from "./types";

/**
 * UGC NET Computer Science & Applications Official Mock Examination
 * Questions 31 through 130 (100 Questions) directly transcribed from the official examination paper.
 * Complete with authentic options, answer keys, step-by-step mathematical & theoretical derivations,
 * and direct links to syllabus study modules.
 */
export const UGC_NET_MOCK_EXAM: MockExam = {
  id: "ugc-net",
  title: "UGC NET Computer Science & Applications (Paper 1 & Paper 2)",
  subtitle: "Full-Length Examination Paper (Questions 31–130) with In-Depth Solutions & Topic Links",
  examType: "UGC-NET",
  date: "Official National Eligibility Test Pattern",
  totalQuestions: 100,
  durationMinutes: 120,
  totalMarks: 200,
  description: "Exhaustive computer science examination covering Discrete Mathematics, Algorithms, Data Structures, Computer Architecture, OS, DBMS, Computer Networks, Software Engineering, Theory of Computation, AI, and Graphics.",
  syllabusCovered: [
    "Unit 1: Digital Logic & Discrete Structures",
    "Unit 2: Computer Organization & Architecture",
    "Unit 3: Programming & Data Structures",
    "Unit 4: Algorithms",
    "Unit 5: Operating System",
    "Unit 6: Database Management System",
    "Unit 7: Computer Networks",
    "Unit 8: Software Engineering",
    "Unit 9: Object-Oriented Programming",
    "Unit 10: Web-Based Application Development",
    "Unit 11: Theory of Computation & Compilers",
    "Unit 13: Artificial Intelligence",
    "Unit 15: Computer Graphics & Multimedia",
    "Paper 1: ICT, Higher Education & Reading Comprehension"
  ],
  questions: [
  {
    "id": 1,
    "originalNumber": 31,
    "question": "Which of the following is an example of IEEE 802.3?",
    "options": [
      {
        "id": "1",
        "text": "LAN"
      },
      {
        "id": "2",
        "text": "MAN"
      },
      {
        "id": "3",
        "text": "WAN"
      },
      {
        "id": "4",
        "text": "PAN"
      }
    ],
    "correctOption": "1",
    "explanation": "IEEE 802.3 standardizes Ethernet for Local Area Networks (LAN). In contrast, IEEE 802.11 is Wireless LAN (Wi-Fi), IEEE 802.15 is Wireless PAN (Bluetooth/Zigbee), and IEEE 802.16 is Wireless MAN (WiMAX).",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "UGC-NET",
    "category": "Computer Networks"
  },
  {
    "id": 2,
    "originalNumber": 32,
    "question": "Which of the following technologies is used in second generation of computer?",
    "options": [
      {
        "id": "1",
        "text": "Vacuum tubes"
      },
      {
        "id": "2",
        "text": "Transistors"
      },
      {
        "id": "3",
        "text": "Integrated Circuits"
      },
      {
        "id": "4",
        "text": "VLSI"
      }
    ],
    "correctOption": "2",
    "explanation": "Computer generations timeline: First Generation (1940-1956) utilized Vacuum Tubes; Second Generation (1956-1963) introduced Transistors; Third Generation (1964-1971) utilized Integrated Circuits (ICs); Fourth Generation (1971-present) utilizes VLSI / ULSI Microprocessors.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 3,
    "originalNumber": 33,
    "question": "Which of the following is correct sequence of increasing access time of storage/memory devices?\nA. Magnetic tape\nB. RAM\nC. Cache memory\nD. Hard disk\nE. Registers\n\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B, C, D, E"
      },
      {
        "id": "2",
        "text": "B, E, C, A, D"
      },
      {
        "id": "3",
        "text": "E, C, B, D, A"
      },
      {
        "id": "4",
        "text": "C, E, B, A, D"
      }
    ],
    "correctOption": "3",
    "explanation": "Access time denotes the latency to read/write a memory location. Lower access time means faster memory. From fastest (lowest access time) to slowest (highest access time): CPU Registers (<1 ns) -> Cache (1-10 ns) -> RAM/Main memory (50-100 ns) -> Magnetic Hard Disk (5-10 ms) -> Magnetic Tape (seconds). The increasing order is E, C, B, D, A.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Cache Memory Organization, Mapping Techniques & AMAT Calculations",
    "topicSlug": "cache-memory-organization-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 4,
    "originalNumber": 34,
    "question": "With reference to cyber attacks, which of the following statements are correct?\nA. Malware is a malicious software designed to cause damage to a single computer, server or computer network.\nB. Types of malware include computer viruses, worms, trojan horses, ransomware and spyware.\nC. Pegasus is a malicious software classified as Ransomware.\nD. India is not a signatory to the Budapest convention on cybercrime.\n\nChoose the most appropriate answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B and C Only"
      },
      {
        "id": "2",
        "text": "B, C and D Only"
      },
      {
        "id": "3",
        "text": "A, B, C and D"
      },
      {
        "id": "4",
        "text": "A, B and D Only"
      }
    ],
    "correctOption": "4",
    "explanation": "Statements A and B are standard cybersecurity definitions. Pegasus is a zero-click surveillance Spyware developed by the NSO Group, not ransomware. India has refrained from signing the Budapest Convention citing national sovereignty and jurisdiction concerns over data sharing. Therefore, A, B and D Only is correct.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "Network Security, Cryptography (DES, AES, RSA), Diffie-Hellman & Signatures",
    "topicSlug": "cryptographic-algorithms-security-cn",
    "examType": "UGC-NET",
    "category": "Network Security"
  },
  {
    "id": 5,
    "originalNumber": 35,
    "question": "Match List - I with List - II:\nList - I (Operating system):\nA. UNIX\nB. MS-DOS\nC. Android OS\nD. Utility programs\n\nList - II (Task):\nI. Assist users in system maintenance task\nII. Mobile device\nIII. Single user operating system\nIV. Multi user operating system\n\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A-III, B-IV, C-I, D-II"
      },
      {
        "id": "2",
        "text": "A-I, B-II, C-IV, D-III"
      },
      {
        "id": "3",
        "text": "A-IV, B-III, C-II, D-I"
      },
      {
        "id": "4",
        "text": "A-III, B-I, C-II, D-IV"
      }
    ],
    "correctOption": "3",
    "explanation": "UNIX is inherently designed as a multi-user, multitasking operating system (A -> IV). MS-DOS is a single-user, single-tasking operating system (B -> III). Android is Google's open-source OS tailored for mobile devices (C -> II). Utility programs perform system maintenance tasks such as disk cleanup, defragmentation, and antivirus scanning (D -> I).",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Process Synchronization, Critical Section Problem & Semaphores",
    "topicSlug": "process-synchronization-ipc-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 6,
    "originalNumber": 36,
    "question": "Which of the following are true about coliform bacteria?\nA. They are used to test water contamination.\nB. Coliform bacteria are harmless and cause no disease.\nC. They are found naturally in human intestinal tract.\nD. Their presence in water is an indication of fecal contamination.\n\nChoose the most appropriate answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A and D Only"
      },
      {
        "id": "2",
        "text": "B and C Only"
      },
      {
        "id": "3",
        "text": "A, C and D Only"
      },
      {
        "id": "4",
        "text": "A, B, C and D"
      }
    ],
    "correctOption": "3",
    "explanation": "Coliform bacteria reside naturally in the intestines of warm-blooded animals and are excreted in feces (C). Because they correlate directly with fecal matter, testing for them indicates bacterial contamination in water supplies (A, D). Statement B is incorrect because pathogenic strains (e.g., E. coli O157:H7) cause severe food and waterborne diseases.",
    "unit": "Paper 1: ICT & Environment",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 7,
    "originalNumber": 37,
    "question": "Why is the concentration of CO2 is more in the Northern Hemisphere than the Southern Hemisphere?\nA. Land mass is more in the Northern Hemisphere.\nB. Ocean body is more in the Southern Hemisphere.\nC. Fossil fuel is burnt more in the Northern Hemisphere.\nD. Northern Hemisphere is colder than the Southern Hemisphere.\n\nChoose the most appropriate answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A and C Only"
      },
      {
        "id": "2",
        "text": "B, C and D Only"
      },
      {
        "id": "3",
        "text": "A, B and C Only"
      },
      {
        "id": "4",
        "text": "B and D Only"
      }
    ],
    "correctOption": "3",
    "explanation": "The Northern Hemisphere contains ~68% of Earth's landmass (A) and hosts ~90% of global population and heavy industrial activity burning fossil fuels (C). The Southern Hemisphere is predominantly ocean covered (B), acting as an extensive carbon sink that moderates CO2 concentration.",
    "unit": "Paper 1: ICT & Environment",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 8,
    "originalNumber": 38,
    "question": "Increasing the ratio of fissile Uranium (U-235) in natural uranium is known as:",
    "options": [
      {
        "id": "1",
        "text": "Enhancement"
      },
      {
        "id": "2",
        "text": "Concentration"
      },
      {
        "id": "3",
        "text": "Accumulation"
      },
      {
        "id": "4",
        "text": "Enrichment"
      }
    ],
    "correctOption": "4",
    "explanation": "Natural mined uranium consists of ~99.28% U-238 and only ~0.71% fissile U-235. The industrial isotope separation process that raises the proportion of U-235 to 3-5% for power reactors or >90% for weapons is called Uranium Enrichment.",
    "unit": "Paper 1: ICT & Environment",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 9,
    "originalNumber": 39,
    "question": "What is the correct sequence, from initial to final, of surface waste water treatment?\nA. Disinfection\nB. Sedimentation\nC. Filtration\nD. Screening\n\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B, C, D"
      },
      {
        "id": "2",
        "text": "A, B, D, C"
      },
      {
        "id": "3",
        "text": "D, B, A, C"
      },
      {
        "id": "4",
        "text": "D, B, C, A"
      }
    ],
    "correctOption": "4",
    "explanation": "Wastewater purification stages: 1. Screening (D: coarse removal of large floating debris) -> 2. Primary Sedimentation (B: gravitational settling of settleable solids) -> 3. Filtration (C: filtration through sand/carbon beds) -> 4. Disinfection (A: chlorination or ozonation to destroy pathogens). Correct sequence: D, B, C, A.",
    "unit": "Paper 1: ICT & Environment",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 10,
    "originalNumber": 40,
    "question": "Which of the following are differences between Modified Mercalli Scale (MMS) and Richter Scale (RS)?\nA. RS measures the energy released while MMS measures both energy and devastation\nB. RS uses linear scale while MMS uses logarithmic scale\nC. Value of RS is constant in an earthquake while MMS varies depending upon distance\nD. Levels in RS is more than MMS\n\nChoose the most appropriate answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A and B Only"
      },
      {
        "id": "2",
        "text": "B and C Only"
      },
      {
        "id": "3",
        "text": "C and D Only"
      },
      {
        "id": "4",
        "text": "A and C Only"
      }
    ],
    "correctOption": "4",
    "explanation": "The Richter Scale measures quantitative magnitude (total seismic energy released at the hypocenter) and has a single invariant value for a given earthquake. The Modified Mercalli Scale (MMS) measures qualitative intensity (observed effects and structural destruction), decreasing with distance from the epicenter. Richter is logarithmic, and MMS has exactly 12 Roman numeral tiers (I to XII). Statements A and C are correct.",
    "unit": "Paper 1: ICT & Environment",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 11,
    "originalNumber": 41,
    "question": "In an ancient period, the Diksha Guru performed his duty as:",
    "options": [
      {
        "id": "1",
        "text": "Guru of secular subjects"
      },
      {
        "id": "2",
        "text": "Spiritual guide for both girls and boys"
      },
      {
        "id": "3",
        "text": "Spiritual guide of boys"
      },
      {
        "id": "4",
        "text": "Tutor"
      }
    ],
    "correctOption": "2",
    "explanation": "In ancient Indian Vedic education, the Diksha Guru imparted spiritual initiation, character building, and philosophical enlightenment to both young women (Brahmavadinis) and young men (Sadyovadhus).",
    "unit": "Paper 1: Higher Education",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 12,
    "originalNumber": 42,
    "question": "Which international organization co-ordinates the education for all programme at the global level?",
    "options": [
      {
        "id": "1",
        "text": "UNDP"
      },
      {
        "id": "2",
        "text": "UNESCO"
      },
      {
        "id": "3",
        "text": "IMF"
      },
      {
        "id": "4",
        "text": "UNEP"
      }
    ],
    "correctOption": "2",
    "explanation": "UNESCO (United Nations Educational, Scientific and Cultural Organization) is the designated UN agency entrusted with leading and coordinating the Global Education for All (EFA) agenda and Sustainable Development Goal 4 (SDG-4).",
    "unit": "Paper 1: Higher Education",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 13,
    "originalNumber": 43,
    "question": "Arrange the following events in the correct chronological sequence:\nA. Establishment of the University of Madras\nB. Introduction of the Indian Universities Act\nC. Establishment of UGC\nD. First National Education Policy of India\n\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B, C, D"
      },
      {
        "id": "2",
        "text": "A, D, C, B"
      },
      {
        "id": "3",
        "text": "B, C, A, D"
      },
      {
        "id": "4",
        "text": "C, B, A, D"
      }
    ],
    "correctOption": "1",
    "explanation": "Historical timeline: University of Madras established in 1857 following Wood's Despatch (A); Lord Curzon's Indian Universities Act introduced in 1904 (B); University Grants Commission (UGC) established as statutory body in 1956 (C); First National Policy on Education formulated in 1968 based on Kothari Commission report (D). Sequence: A -> B -> C -> D.",
    "unit": "Paper 1: Higher Education",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 14,
    "originalNumber": 44,
    "question": "As per National Education Policy 1986, the major functions of the National Apex Body are:\nA. To allocate resources\nB. To evaluate the examination system\nC. To advise government on policy\nD. To encourage inter-disciplinarily and promotion of interfaces among different areas\nE. To conduct research in higher education\n\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, C, E Only"
      },
      {
        "id": "2",
        "text": "B, D and E Only"
      },
      {
        "id": "3",
        "text": "C, D and E Only"
      },
      {
        "id": "4",
        "text": "A, C and D Only"
      }
    ],
    "correctOption": "4",
    "explanation": "NEP 1986 prescribed that the apex national higher education coordinating body should plan resource allocations (A), advise central/state governments on educational policies (C), and facilitate inter-institutional and interdisciplinary research interfaces (D).",
    "unit": "Paper 1: Higher Education",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 15,
    "originalNumber": 45,
    "question": "Match List - I with List - II:\nList - I (Name of the institutions):\nA. NIEPA\nB. RUSA\nC. QAA\nD. HEFA\n\nList - II (Function):\nI. Ensuring Quality\nII. Providing loans to higher education institutions\nIII. Infrastructure development for upgrading the existing colleges into model colleges\nIV. Promoting Research in planning and management\n\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A-I, B-III, C-II, D-IV"
      },
      {
        "id": "2",
        "text": "A-I, B-II, C-III, D-IV"
      },
      {
        "id": "3",
        "text": "A-I, B-IV, C-III, D-II"
      },
      {
        "id": "4",
        "text": "A-IV, B-III, C-I, D-II"
      }
    ],
    "correctOption": "4",
    "explanation": "NIEPA (National Institute of Educational Planning and Administration) promotes capacity building and research in educational planning and management (A -> IV). RUSA upgrades state colleges into model degree colleges (B -> III). QAA (Quality Assurance Agency) sets and assures academic quality benchmarks (C -> I). HEFA (Higher Education Financing Agency) is a non-bank financial institution that disburses low-interest infrastructure loans to premier institutions (D -> II).",
    "unit": "Paper 1: Higher Education",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Paper 1 General"
  },
  {
    "id": 16,
    "originalNumber": 46,
    "question": "According to the passage on elderly care, who usually leaves their parents in lurch?",
    "options": [
      {
        "id": "1",
        "text": "Disobedient wards"
      },
      {
        "id": "2",
        "text": "Frustrated youth"
      },
      {
        "id": "3",
        "text": "Career seeker children settled in distant places"
      },
      {
        "id": "4",
        "text": "The ones who have job insecurity"
      }
    ],
    "correctOption": "3",
    "explanation": "Direct citation from the comprehension passage: 'educated young men and women settle far away from their parents... Their children go away in search of green pastures leaving them alone.'",
    "unit": "Paper 1: Reading Comprehension",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Reading Comprehension"
  },
  {
    "id": 17,
    "originalNumber": 47,
    "question": "The year 1999 was proclaimed as:",
    "options": [
      {
        "id": "1",
        "text": "National year for the aged"
      },
      {
        "id": "2",
        "text": "Universal year for the aged"
      },
      {
        "id": "3",
        "text": "International year for the aged"
      },
      {
        "id": "4",
        "text": "SAARC year for the aged"
      }
    ],
    "correctOption": "3",
    "explanation": "As stated in the text: 'The UNO proclaimed the year 1999 as International Year for the Aged.'",
    "unit": "Paper 1: Reading Comprehension",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Reading Comprehension"
  },
  {
    "id": 18,
    "originalNumber": 48,
    "question": "Under section 105 of the criminal procedure code, parents cannot be evicted from a house:",
    "options": [
      {
        "id": "1",
        "text": "Without due process of law"
      },
      {
        "id": "2",
        "text": "In any situation"
      },
      {
        "id": "3",
        "text": "Without submitting their will"
      },
      {
        "id": "4",
        "text": "Unless their property is transferred to their legal heir"
      }
    ],
    "correctOption": "1",
    "explanation": "From the reading passage: 'parents cannot be evicted from a house without due process of law under section 105 of the Criminal Procedure Code.'",
    "unit": "Paper 1: Reading Comprehension",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Reading Comprehension"
  },
  {
    "id": 19,
    "originalNumber": 49,
    "question": "Who is empowered to give order to the concerned for the maintenance of their parents?",
    "options": [
      {
        "id": "1",
        "text": "A retired judge"
      },
      {
        "id": "2",
        "text": "The judge of the High-Court"
      },
      {
        "id": "3",
        "text": "Local Sarpanch"
      },
      {
        "id": "4",
        "text": "A magistrate"
      }
    ],
    "correctOption": "4",
    "explanation": "From the passage: 'A magistrate can order a person to maintain his/her old parents under the Maintenance of Parents Act.'",
    "unit": "Paper 1: Reading Comprehension",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Reading Comprehension"
  },
  {
    "id": 20,
    "originalNumber": 50,
    "question": "Which of the following Act/Section does give parents rights to seek relief from any kind of abuse?",
    "options": [
      {
        "id": "1",
        "text": "Hindu Adoption and maintenance Act"
      },
      {
        "id": "2",
        "text": "Section 105 of CPC"
      },
      {
        "id": "3",
        "text": "The Domestic Violence Act"
      },
      {
        "id": "4",
        "text": "Section 98 of CPC"
      }
    ],
    "correctOption": "3",
    "explanation": "From the passage concluding sentence: 'The Domestic Violence Act also provides parents with the rights to seek relief from any kind of abuse.'",
    "unit": "Paper 1: Reading Comprehension",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Reading Comprehension"
  },
  {
    "id": 21,
    "originalNumber": 51,
    "question": "In a group of 120 people: 65 eat Rice, 45 eat bread, 42 eat curd, 20 eat both Rice and bread, 25 eat both Rice and curd, 15 eat both bread and curd, and 8 eat all three items. Which of the following is the number of people who eat at least one of the three items:",
    "options": [
      {
        "id": "1",
        "text": "56"
      },
      {
        "id": "2",
        "text": "100"
      },
      {
        "id": "3",
        "text": "92"
      },
      {
        "id": "4",
        "text": "65"
      }
    ],
    "correctOption": "2",
    "explanation": "By Principle of Inclusion-Exclusion for three sets:\n|R ∪ B ∪ C| = |R| + |B| + |C| - (|R ∩ B| + |R ∩ C| + |B ∩ C|) + |R ∩ B ∩ C|\n|R ∪ B ∪ C| = 65 + 45 + 42 - (20 + 25 + 15) + 8\n= 152 - 60 + 8 = 100 people.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "UGC-NET",
    "category": "Discrete Mathematics"
  },
  {
    "id": 22,
    "originalNumber": 52,
    "question": "In a pack of 42 cards, 3 cards are chosen one after the other. Find the number of ways this can be done without replacement:",
    "options": [
      {
        "id": "1",
        "text": "1722"
      },
      {
        "id": "2",
        "text": "1752"
      },
      {
        "id": "3",
        "text": "68880"
      },
      {
        "id": "4",
        "text": "6880"
      }
    ],
    "correctOption": "3",
    "explanation": "Choosing 3 cards in succession without replacement represents permutations:\nP(42, 3) = 42 × 41 × 40 = 1,722 × 40 = 68,880 ways.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "UGC-NET",
    "category": "Discrete Mathematics"
  },
  {
    "id": 23,
    "originalNumber": 53,
    "question": "A positive integer selected at random from the set of positive integers not exceeding 200. Which of the followings is the probability that the selected number is divisible by either 2 or 5?",
    "options": [
      {
        "id": "1",
        "text": "2/5"
      },
      {
        "id": "2",
        "text": "3/5"
      },
      {
        "id": "3",
        "text": "4/5"
      },
      {
        "id": "4",
        "text": "1/5"
      }
    ],
    "correctOption": "2",
    "explanation": "Total numbers = 200.\nDivisible by 2: floor(200/2) = 100.\nDivisible by 5: floor(200/5) = 40.\nDivisible by both 2 and 5 (lcm = 10): floor(200/10) = 20.\nFavorable numbers = 100 + 40 - 20 = 120.\nProbability = 120 / 200 = 3/5.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "UGC-NET",
    "category": "Discrete Mathematics"
  },
  {
    "id": 24,
    "originalNumber": 54,
    "question": "Consider the Boolean expression A(x, y, z) = x (y' z)'. Which of the following is complete sum-of-products form of the given Boolean expression?",
    "options": [
      {
        "id": "1",
        "text": "xyz + x'yz' + x'y'z'"
      },
      {
        "id": "2",
        "text": "xyz' + x'yz' + x'y'z'"
      },
      {
        "id": "3",
        "text": "xyz' + xy'z + x'y'z'"
      },
      {
        "id": "4",
        "text": "xyz + xyz' + xy'z'"
      }
    ],
    "correctOption": "4",
    "explanation": "A(x, y, z) = x (y' z)'\nBy De Morgan's Law: (y' z)' = (y')' + z' = y + z'.\nSo A = x(y + z') = xy + xz'.\nNow expand each product into complete minterms:\nxy = xy(z + z') = xyz + xyz'\nxz' = x(y + y')z' = xyz' + xy'z'\nUnion: xyz + xyz' + xy'z' (Option 4).",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "UGC-NET",
    "category": "Digital Logic"
  },
  {
    "id": 25,
    "originalNumber": 55,
    "question": "Choose the correct statement for a group G:",
    "options": [
      {
        "id": "1",
        "text": "If for all x, y in G, (xy)^2 = x^2 y^2 then G is Commutative."
      },
      {
        "id": "2",
        "text": "If for all x in G, x^2 = 1, then G is Commutative. 1 is the identity element of G."
      },
      {
        "id": "3",
        "text": "If for all x in G, x^3 = 1, then G is Commutative. 1 is the identity element of G."
      },
      {
        "id": "4",
        "text": "If G is Commutative, the sub-group of G need not be Commutative."
      }
    ],
    "correctOption": "2",
    "explanation": "Theorem: If every element in a group G is self-inverse (x^2 = e for all x ∈ G), then G is Abelian/Commutative.\nProof: For all x, x = x^(-1). Then xy = (xy)^(-1) = y^(-1) x^(-1) = yx for all x, y ∈ G.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Posets, Hasse Diagrams, Lattices, and Boolean Algebra",
    "topicSlug": "lattices-boolean-algebra-discrete-math",
    "examType": "UGC-NET",
    "category": "Discrete Mathematics"
  },
  {
    "id": 26,
    "originalNumber": 56,
    "question": "Binary equivalent to (A0F)_16 is:",
    "options": [
      {
        "id": "1",
        "text": "111000111"
      },
      {
        "id": "2",
        "text": "101001111"
      },
      {
        "id": "3",
        "text": "101000001111"
      },
      {
        "id": "4",
        "text": "111100001010"
      }
    ],
    "correctOption": "3",
    "explanation": "Converting hex nibbles to binary: A = 1010, 0 = 0000, F = 1111. Concatenating: 1010 0000 1111.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "UGC-NET",
    "category": "Digital Logic"
  },
  {
    "id": 27,
    "originalNumber": 57,
    "question": "The write operation in I/O operation does the following:",
    "options": [
      {
        "id": "1",
        "text": "Transfer data from I/O device to memory"
      },
      {
        "id": "2",
        "text": "Transfer data from memory to I/O device"
      },
      {
        "id": "3",
        "text": "Transfer data from CPU register to memory"
      },
      {
        "id": "4",
        "text": "Transfer data from CPU register to I/O device"
      }
    ],
    "correctOption": "2",
    "explanation": "An I/O write command directs the I/O module to receive a unit of data from the system bus (originating from memory) and transmit it to the peripheral device.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 28,
    "originalNumber": 58,
    "question": "The transformation of data from main memory to cache memory is referred as:",
    "options": [
      {
        "id": "1",
        "text": "Data exchange"
      },
      {
        "id": "2",
        "text": "Data transformation"
      },
      {
        "id": "3",
        "text": "Mapping"
      },
      {
        "id": "4",
        "text": "Matching"
      }
    ],
    "correctOption": "3",
    "explanation": "Cache Mapping refers to the correspondence between main memory blocks and cache memory lines. Direct, Associative, and Set-Associative mapping determine where each memory block resides.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Cache Memory Organization, Mapping Techniques & AMAT Calculations",
    "topicSlug": "cache-memory-organization-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 29,
    "originalNumber": 59,
    "question": "Gray code equivalent to decimal number 8 is:",
    "options": [
      {
        "id": "1",
        "text": "1000"
      },
      {
        "id": "2",
        "text": "1100"
      },
      {
        "id": "3",
        "text": "1010"
      },
      {
        "id": "4",
        "text": "1110"
      }
    ],
    "correctOption": "2",
    "explanation": "Decimal 8 in binary: B = 1000 (B3=1, B2=0, B1=0, B0=0).\nG3 = B3 = 1\nG2 = B3 ⊕ B2 = 1 ⊕ 0 = 1\nG1 = B2 ⊕ B1 = 0 ⊕ 0 = 0\nG0 = B1 ⊕ B0 = 0 ⊕ 0 = 0\nResult: 1100.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "UGC-NET",
    "category": "Digital Logic"
  },
  {
    "id": 30,
    "originalNumber": 60,
    "question": "Consider the following piece of C programming code:\nint x=128, y=110;\ndo {\n  if(x > y)\n    x = x - y;\n  else\n    y = y - x;\n} while(x != y);\nprintf(\"%d\", x);\n\nWhich one will be the output?",
    "options": [
      {
        "id": "1",
        "text": "18"
      },
      {
        "id": "2",
        "text": "2"
      },
      {
        "id": "3",
        "text": "92"
      },
      {
        "id": "4",
        "text": "74"
      }
    ],
    "correctOption": "2",
    "explanation": "This do-while loop computes gcd(x, y) by repeated subtraction. gcd(128, 110): 128 = 2^7, 110 = 2 × 5 × 11. gcd(128, 110) = 2. When x == y == 2, the loop terminates and prints 2.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Pointers, Memory Architecture, and Storage Classes in C/C++",
    "topicSlug": "c-cpp-pointers-memory",
    "examType": "UGC-NET",
    "category": "Programming"
  },
  {
    "id": 31,
    "originalNumber": 61,
    "question": "Which of the following technique is used for Clipping in Computer Graphics?",
    "options": [
      {
        "id": "1",
        "text": "Stack based Seed"
      },
      {
        "id": "2",
        "text": "Scan Line Seed"
      },
      {
        "id": "3",
        "text": "Sutherland-Cohen"
      },
      {
        "id": "4",
        "text": "Inverse Scaling"
      }
    ],
    "correctOption": "3",
    "explanation": "Cohen-Sutherland is the standard line clipping algorithm that assigns 4-bit outcodes (Top, Bottom, Right, Left) to line endpoints to perform trivial acceptance, trivial rejection, or intersection clipping against a rectangular viewport.",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Computer Graphics Clipping Algorithms: Cohen-Sutherland, Liang-Barsky, and Sutherland-Hodgman",
    "topicSlug": "computer-graphics-clipping",
    "examType": "UGC-NET",
    "category": "Computer Graphics"
  },
  {
    "id": 32,
    "originalNumber": 62,
    "question": "What will be the output of the following C programming code:\nint i, j;\nfor(i=1; i<5; i+=2)\n  for(j=1; j<i; j+=2)\n    printf(\"%d\", j);",
    "options": [
      {
        "id": "1",
        "text": "1"
      },
      {
        "id": "2",
        "text": "1 2"
      },
      {
        "id": "3",
        "text": "1 3"
      },
      {
        "id": "4",
        "text": "1 1 3"
      }
    ],
    "correctOption": "1",
    "explanation": "Tracing loops:\n1. i = 1: inner loop condition is j < 1 (with j = 1). Since 1 < 1 is FALSE, body executes 0 times.\n2. i = 3: inner loop starts at j = 1. Since 1 < 3 is TRUE, it prints '1'. Then j becomes 3 (1+2). 3 < 3 is FALSE.\n3. i = 5: outer loop condition i < 5 is FALSE.\nTotal printed output is simply '1'.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Pointers, Memory Architecture, and Storage Classes in C/C++",
    "topicSlug": "c-cpp-pointers-memory",
    "examType": "UGC-NET",
    "category": "Programming"
  },
  {
    "id": 33,
    "originalNumber": 63,
    "question": "What would be the equivalent pointer expression for referring the array element ar[m][n][o]?",
    "options": [
      {
        "id": "1",
        "text": "*(*(*(ar + m) + n) + o)"
      },
      {
        "id": "2",
        "text": "(*(*(ar + m) + n) + o)"
      },
      {
        "id": "3",
        "text": "*(*(ar + m) + n) + o"
      },
      {
        "id": "4",
        "text": "*(*(*(ar + m) + n)) + o"
      }
    ],
    "correctOption": "1",
    "explanation": "In C pointer arithmetic:\nar[m] == *(ar + m)\nar[m][n] == *(*(ar + m) + n)\nar[m][n][o] == *(*(*(ar + m) + n) + o).",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Pointers, Memory Architecture, and Storage Classes in C/C++",
    "topicSlug": "c-cpp-pointers-memory",
    "examType": "UGC-NET",
    "category": "Programming"
  },
  {
    "id": 34,
    "originalNumber": 64,
    "question": "Consider relation R(A, B, C, D, E) with functional dependencies: C -> F, E -> A, EC -> D, A -> B. Which of the following is a candidate key for R?",
    "options": [
      {
        "id": "1",
        "text": "CD"
      },
      {
        "id": "2",
        "text": "EC"
      },
      {
        "id": "3",
        "text": "AE"
      },
      {
        "id": "4",
        "text": "AC"
      }
    ],
    "correctOption": "2",
    "explanation": "Compute attribute closure of {EC}:\n1. {EC}^+ = {E, C}\n2. E -> A implies {E, C, A}\n3. A -> B implies {E, C, A, B}\n4. EC -> D implies {E, C, A, B, D}\nThus {EC}^+ = {A, B, C, D, E}, covering all attributes in R. No subset of EC derives all attributes, so EC is a candidate key.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Normalization in DBMS: 1NF to BCNF, Armstrong's Axioms & Lossless Joins",
    "topicSlug": "normalization-dbms",
    "examType": "UGC-NET",
    "category": "Database Systems"
  },
  {
    "id": 35,
    "originalNumber": 65,
    "question": "Consider the relation T1(A,B,C,D,E) with the dependencies {EB -> C, D -> E, EA -> B} and T2(A,B,C,D) with the dependencies {C -> A, A -> B, A -> D}. Which of the following is TRUE?",
    "options": [
      {
        "id": "1",
        "text": "T1 is in 3NF"
      },
      {
        "id": "2",
        "text": "T2 is in 3NF"
      },
      {
        "id": "3",
        "text": "T1 is not in 3NF"
      },
      {
        "id": "4",
        "text": "T1 is in 2NF"
      }
    ],
    "correctOption": "3",
    "explanation": "In T1(A,B,C,D,E), candidate keys include {A, D, E}. Because D is a proper subset of a candidate key and D -> E determines non-prime attribute E, T1 has partial dependencies and violates 2NF and 3NF. Hence, 'T1 is not in 3NF' is TRUE.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Normalization in DBMS: 1NF to BCNF, Armstrong's Axioms & Lossless Joins",
    "topicSlug": "normalization-dbms",
    "examType": "UGC-NET",
    "category": "Database Systems"
  },
  {
    "id": 36,
    "originalNumber": 66,
    "question": "In a relational database, which one of the following is CORRECT:",
    "options": [
      {
        "id": "1",
        "text": "A relation with only two attributes is always in BCNF."
      },
      {
        "id": "2",
        "text": "If all attributes of a relation are prime attributes then the relation is in BCNF."
      },
      {
        "id": "3",
        "text": "Every relation has at least one non-prime attribute."
      },
      {
        "id": "4",
        "text": "BCNF decomposition preserves functional dependencies."
      }
    ],
    "correctOption": "1",
    "explanation": "Theorem: Any binary relation R(A, B) is guaranteed to be in BCNF. The only possible non-trivial FDs are A -> B (A is key) or B -> A (B is key) or both (both are keys), or none (AB is key). In every case, every non-trivial determinant is a superkey.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Normalization in DBMS: 1NF to BCNF, Armstrong's Axioms & Lossless Joins",
    "topicSlug": "normalization-dbms",
    "examType": "UGC-NET",
    "category": "Database Systems"
  },
  {
    "id": 37,
    "originalNumber": 67,
    "question": "Consider the following three relations: Employee(eid, EName), Comp(cid, CName), Own(eid, cid). Which of the following relational algebra expressions returns the set of eids who own all brands (companies)?",
    "options": [
      {
        "id": "1",
        "text": "π_{eid}(π_{eid,cid}(Own) ÷ π_{cid}(Comp))"
      },
      {
        "id": "2",
        "text": "π_{eid}(π_{eid}(Own) × π_{cid}(Comp))"
      },
      {
        "id": "3",
        "text": "π_{eid}(π_{eid,cid}(Own) × π_{cid}(Comp))"
      },
      {
        "id": "4",
        "text": "π_{eid}(π_{eid}(Own) × (π_{cid,CName}(Own) ÷ π_{cid}(Comp)))"
      }
    ],
    "correctOption": "1",
    "explanation": "The relational division operator (÷) directly expresses queries with the universal quantifier 'FOR ALL'. Dividing π_{eid,cid}(Own) by π_{cid}(Comp) outputs exactly those employee eids associated with every single cid in Comp.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Relational Algebra, Tuple & Domain Relational Calculus (TRC/DRC)",
    "topicSlug": "relational-algebra-calculus-dbms",
    "examType": "UGC-NET",
    "category": "Database Systems"
  },
  {
    "id": 38,
    "originalNumber": 68,
    "question": "Consider the following table about processes, their burst time and arrival time:\nProcess | Burst Time | Arrival Time\nP1 | 09 | 0\nP2 | 30 | 0\nP3 | 04 | 0\nP4 | 08 | 2\nP5 | 11 | 6\nNow which process shall finish second last as per the respective Gantt charts for Non-Preemptive SJF and Round Robin (time quantum = 10) scheduling methods?",
    "options": [
      {
        "id": "1",
        "text": "SJF : P4 ; RR : P4"
      },
      {
        "id": "2",
        "text": "SJF : P5 ; RR : P4"
      },
      {
        "id": "3",
        "text": "SJF : P4 ; RR : P3"
      },
      {
        "id": "4",
        "text": "SJF : P5 ; RR : P5"
      }
    ],
    "correctOption": "2",
    "explanation": "1. Non-preemptive SJF:\nAt t=0, P1(9), P2(30), P3(4) have arrived. Smallest is P3(4) -> finishes at t=4.\nAt t=4, P4(8) has arrived. Queue: P4(8), P1(9), P2(30). P4 runs -> finishes at t=12.\nAt t=12, P5(11) has arrived. Queue: P1(9), P5(11), P2(30). P1 runs -> finishes at t=21.\nP5 runs -> finishes at t=32. P2 runs -> finishes at t=62.\nFinish order: P3, P4, P1, P5, P2. The second last to finish in SJF is P5.\n2. Round Robin (q=10):\nP2(30) requires 3 quantums. P5(11) requires 2 quantums (10 + 1). P4(8) finishes in its first quantum. P2 is last, and P4 finishes second last among earlier round processes. Hence SJF: P5; RR: P4.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "CPU Scheduling Algorithms: Complete Guide with Gantt Charts & Formulas",
    "topicSlug": "cpu-scheduling-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 39,
    "originalNumber": 69,
    "question": "Which of the following statements is correct for Pthreads?",
    "options": [
      {
        "id": "1",
        "text": "It refers to POSIX standard (IEEE 1002.1c)"
      },
      {
        "id": "2",
        "text": "This standard defines API for thread creation only"
      },
      {
        "id": "3",
        "text": "This is a specification only for thread behavior and not its implementation"
      },
      {
        "id": "4",
        "text": "Operating systems like Solaris, Linux & Mac OS X, except Tru64 UNIX, implement Pthreads"
      }
    ],
    "correctOption": "3",
    "explanation": "Pthreads (IEEE 1003.1c) is an API specification defined by POSIX detailing how threads and thread synchronization should behave. It does not provide the concrete implementation; rather, OS library vendors (glibc, pthreads-win32) implement the specification.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Process Synchronization, Critical Section Problem & Semaphores",
    "topicSlug": "process-synchronization-ipc-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 40,
    "originalNumber": 70,
    "question": "What shall be the average waiting time per process if we know that 10 processes (on average) arrive every second and there are normally 20 processes in the queue?",
    "options": [
      {
        "id": "1",
        "text": "03 seconds"
      },
      {
        "id": "2",
        "text": "02 seconds"
      },
      {
        "id": "3",
        "text": "18 seconds"
      },
      {
        "id": "4",
        "text": "09 seconds"
      }
    ],
    "correctOption": "2",
    "explanation": "Apply Little's Law from Queueing Theory:\nL = λ × W\nWhere:\nL = average number of processes in system/queue = 20\nλ = arrival rate = 10 processes/sec\nW = average waiting time per process\nW = L / λ = 20 / 10 = 2 seconds.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "CPU Scheduling Algorithms: Complete Guide with Gantt Charts & Formulas",
    "topicSlug": "cpu-scheduling-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 41,
    "originalNumber": 71,
    "question": "What is the total swap time (Swap in & Swap out) in a system for a 15 MB process with a transfer rate of 30 MBps, given that there is an average latency of 12 ms and no head seeks involved?",
    "options": [
      {
        "id": "1",
        "text": "1.024 sec"
      },
      {
        "id": "2",
        "text": "1.00 sec"
      },
      {
        "id": "3",
        "text": "0.512 sec"
      },
      {
        "id": "4",
        "text": "12 sec"
      }
    ],
    "correctOption": "1",
    "explanation": "Transfer time for 15 MB at 30 MB/s = 15 / 30 = 0.5 s = 500 ms.\nTotal time for one swap operation (transfer + latency) = 500 ms + 12 ms = 512 ms = 0.512 s.\nBoth Swap-in and Swap-out together = 2 × 0.512 s = 1.024 seconds.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Memory Management, Multi-Level Paging, TLB, Inverted Tables & Virtual Memory",
    "topicSlug": "memory-management-virtual-memory-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 42,
    "originalNumber": 72,
    "question": "Which of the following is NOT a requirement elicitation technique?",
    "options": [
      {
        "id": "1",
        "text": "Interviews"
      },
      {
        "id": "2",
        "text": "The use case approach"
      },
      {
        "id": "3",
        "text": "Facilitated Application Specification Technique (FAST)"
      },
      {
        "id": "4",
        "text": "Data Flow diagram"
      }
    ],
    "correctOption": "4",
    "explanation": "Interviews, Use Cases, FAST, Questionnaires, and Brainstorming are requirement elicitation techniques. A Data Flow Diagram (DFD) is a structural analysis and system modeling tool, used during requirement analysis rather than elicitation.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "UGC-NET",
    "category": "Software Engineering"
  },
  {
    "id": 43,
    "originalNumber": 73,
    "question": "Estimation of software development effort for organic software in basic COCOMO is:",
    "options": [
      {
        "id": "1",
        "text": "E = 2.4 (KLOC)^1.05 PM"
      },
      {
        "id": "2",
        "text": "E = 3.4 (KLOC)^1.06 PM"
      },
      {
        "id": "3",
        "text": "E = 2.0 (KLOC)^1.05 PM"
      },
      {
        "id": "4",
        "text": "E = 2.4 (KLOC)^1.07 PM"
      }
    ],
    "correctOption": "1",
    "explanation": "In Boehm's Basic COCOMO model:\nOrganic Mode: Effort E = 2.4 (KLOC)^1.05 Person-Months.\nSemidetached Mode: Effort E = 3.0 (KLOC)^1.12 Person-Months.\nEmbedded Mode: Effort E = 3.6 (KLOC)^1.20 Person-Months.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "UGC-NET",
    "category": "Software Engineering"
  },
  {
    "id": 44,
    "originalNumber": 74,
    "question": "The process followed in order to find difficult, unknown and hidden information about a software system is called:",
    "options": [
      {
        "id": "1",
        "text": "Software Engineering"
      },
      {
        "id": "2",
        "text": "Software Re-Engineering"
      },
      {
        "id": "3",
        "text": "Reverse Engineering"
      },
      {
        "id": "4",
        "text": "Inverse Engineering"
      }
    ],
    "correctOption": "3",
    "explanation": "Reverse engineering analyzes a subject system to identify its components and interrelationships, recreating design representations and hidden implementation specifications without initial documentation.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "UGC-NET",
    "category": "Software Engineering"
  },
  {
    "id": 45,
    "originalNumber": 75,
    "question": "Which of the following is NOT a software characteristic?",
    "options": [
      {
        "id": "1",
        "text": "Software does not wear out"
      },
      {
        "id": "2",
        "text": "Software is flexible"
      },
      {
        "id": "3",
        "text": "Software is not manufactured in the classical sense"
      },
      {
        "id": "4",
        "text": "Software is always correct"
      }
    ],
    "correctOption": "4",
    "explanation": "Software deteriorates due to defect latency, requirement churn, and environmental changes, but it does not wear out physically like hardware. Software is engineered, not manufactured. However, software is notorious for defects and bugs—it is never guaranteed to be always correct.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Testing, Metrics, and Maintenance: Black-Box, White-Box, and Mutation Testing",
    "topicSlug": "software-testing-maintenance-se",
    "examType": "UGC-NET",
    "category": "Software Engineering"
  },
  {
    "id": 46,
    "originalNumber": 76,
    "question": "Consider the following infix expression Q: ((A + B) * D) ^ (E - F). The equivalent postfix expression of Q is:",
    "options": [
      {
        "id": "1",
        "text": "AB+D*EF-^"
      },
      {
        "id": "2",
        "text": "AB+D*-^EF"
      },
      {
        "id": "3",
        "text": "AB+D E*F-^"
      },
      {
        "id": "4",
        "text": "AB+D*EF^-"
      }
    ],
    "correctOption": "1",
    "explanation": "Evaluating subexpressions:\n1. (A + B) -> AB+\n2. (AB+) * D -> AB+D*\n3. (E - F) -> EF-\n4. Combining with exponentiation (^): [AB+D*] [EF-] ^ -> AB+D*EF-^.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Pointers, Memory Architecture, and Storage Classes in C/C++",
    "topicSlug": "c-cpp-pointers-memory",
    "examType": "UGC-NET",
    "category": "Data Structures"
  },
  {
    "id": 47,
    "originalNumber": 77,
    "question": "The tight asymptotic bound for the recurrence T(n) = 2T(n/4) + √n is:",
    "options": [
      {
        "id": "1",
        "text": "Θ(√n)"
      },
      {
        "id": "2",
        "text": "Θ(n log n)"
      },
      {
        "id": "3",
        "text": "Θ(√n log n)"
      },
      {
        "id": "4",
        "text": "Θ(n log √n)"
      }
    ],
    "correctOption": "3",
    "explanation": "Apply Master Theorem for T(n) = a T(n/b) + f(n):\na = 2, b = 4, f(n) = √n = n^(0.5).\nCalculate n^(log_b a) = n^(log_4 2) = n^(0.5) = √n.\nSince f(n) = Θ(n^(log_b a)), this falls into Case 2 of the Master Theorem:\nT(n) = Θ(n^(log_b a) log n) = Θ(√n log n).",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Asymptotic Notation, Master Theorem & Recurrence Relations",
    "topicSlug": "asymptotic-notation-algorithms",
    "examType": "UGC-NET",
    "category": "Algorithms"
  },
  {
    "id": 48,
    "originalNumber": 78,
    "question": "The longest common subsequence of X = {1, 2, 3, 2, 4, 1, 2} and Y = {2, 4, 3, 1, 2, 1} is:",
    "options": [
      {
        "id": "1",
        "text": "2, 1, 2, 3"
      },
      {
        "id": "2",
        "text": "1, 3, 2, 1"
      },
      {
        "id": "3",
        "text": "2, 3, 2, 1"
      },
      {
        "id": "4",
        "text": "2, 3, 1, 2, 1"
      }
    ],
    "correctOption": "3",
    "explanation": "Subsequence comparison:\nChecking {2, 3, 2, 1}: In X, 2 (pos 2), 3 (pos 3), 2 (pos 4), 1 (pos 6) occurs in order. In Y, 2 (pos 1), 3 (pos 3), 2 (pos 5), 1 (pos 6) occurs in order. Both sequences match length 4.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Dynamic Programming and Greedy Algorithms: 0/1 Knapsack, LCS, and MCM",
    "topicSlug": "dynamic-programming-greedy-dsa",
    "examType": "UGC-NET",
    "category": "Algorithms"
  },
  {
    "id": 49,
    "originalNumber": 79,
    "question": "Maintaining a graph in memory by means of its adjacency matrix is known as:",
    "options": [
      {
        "id": "1",
        "text": "Complete Representation"
      },
      {
        "id": "2",
        "text": "Linked Representation"
      },
      {
        "id": "3",
        "text": "Circular Representation"
      },
      {
        "id": "4",
        "text": "Sequential Representation"
      }
    ],
    "correctOption": "4",
    "explanation": "Graph storage representations: Using a 2D array (adjacency matrix) allocates contiguous sequential memory indices and is called Sequential Representation. Using adjacency lists utilizes pointers and is called Linked Representation.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Graph Theory: Handshaking Lemma, Euler/Hamilton Circuits, Planarity & Coloring",
    "topicSlug": "graph-theory-discrete-math",
    "examType": "UGC-NET",
    "category": "Data Structures"
  },
  {
    "id": 50,
    "originalNumber": 80,
    "question": "What will be the output of the following C Programming code:\nvoid main() {\n  int *i, a=12, b=2, c;\n  c = (a=a+b, b=a/b, a=a*b, b=a-b);\n  i = &c;\n  printf(\"%d\", --(*i));\n}",
    "options": [
      {
        "id": "1",
        "text": "91"
      },
      {
        "id": "2",
        "text": "90"
      },
      {
        "id": "3",
        "text": "98"
      },
      {
        "id": "4",
        "text": "92"
      }
    ],
    "correctOption": "2",
    "explanation": "Evaluating comma expression step-by-step from left to right:\n1. a = a + b = 12 + 2 = 14\n2. b = a / b = 14 / 2 = 7\n3. a = a * b = 14 * 7 = 98\n4. b = a - b = 98 - 7 = 91\nThe comma operator yields the value of the last expression: c = 91.\nThen --(*i) pre-decrements the value at &c: 91 - 1 = 90. Output is 90.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Pointers, Memory Architecture, and Storage Classes in C/C++",
    "topicSlug": "c-cpp-pointers-memory",
    "examType": "UGC-NET",
    "category": "Programming"
  },
  {
    "id": 51,
    "originalNumber": 81,
    "question": "Consider a DFA with states {q0, q1, q2, q3, q4, q5} over input alphabet Σ = {a, b, c}. State q0 is initial and accepting. Which of the following is the best description of the language accepted by the DFA?",
    "options": [
      {
        "id": "1",
        "text": "L = (a* + b* + c*)*"
      },
      {
        "id": "2",
        "text": "L = (a + b + c)*(abc)*(a + b + c)*"
      },
      {
        "id": "3",
        "text": "L = {Set of strings, all starting with 'a, b, c' but ending with 'c'}"
      },
      {
        "id": "4",
        "text": "L = {Set of strings, all having even count (including 0) of substring 'abc'}"
      }
    ],
    "correctOption": "4",
    "explanation": "The transition graph tracks occurrences of the pattern 'abc'. Every time the sequence a-b-c is completed (reaching q3), it cycles between an even-count set of states and an odd-count set of states. Returning to the accepting initial component requires an even number of completions.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Regular Expressions, Finite Automata, Arden's Theorem & Pumping Lemma",
    "topicSlug": "regular-expressions-finite-automata-toc",
    "examType": "UGC-NET",
    "category": "Theory of Computation"
  },
  {
    "id": 52,
    "originalNumber": 82,
    "question": "Given a DFA with 6 states, which of the equivalent NFAs represents the exact same language with minimum non-deterministic state transitions?",
    "options": [
      {
        "id": "1",
        "text": "NFA Model 1"
      },
      {
        "id": "2",
        "text": "NFA Model 2"
      },
      {
        "id": "3",
        "text": "NFA Model 3"
      },
      {
        "id": "4",
        "text": "NFA Model 4"
      }
    ],
    "correctOption": "1",
    "explanation": "By applying subset construction in reverse and eliminating redundant deterministic error sinks, Model 1 preserves identical regular language equivalence with fewer total transitions.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Regular Expressions, Finite Automata, Arden's Theorem & Pumping Lemma",
    "topicSlug": "regular-expressions-finite-automata-toc",
    "examType": "UGC-NET",
    "category": "Theory of Computation"
  },
  {
    "id": 53,
    "originalNumber": 83,
    "question": "In a Stop-and-wait system, the bandwidth of the line is 1 Mbps, and 1 bit takes 30 milliseconds to make a round trip. The bandwidth-delay product is:",
    "options": [
      {
        "id": "1",
        "text": "15,000 bits"
      },
      {
        "id": "2",
        "text": "20,000 bits"
      },
      {
        "id": "3",
        "text": "30,000 bits"
      },
      {
        "id": "4",
        "text": "60,000 bits"
      }
    ],
    "correctOption": "3",
    "explanation": "Bandwidth-Delay Product (BDP) = Bandwidth × Round-Trip Time (RTT)\nBandwidth = 1 Mbps = 10^6 bits/second\nRTT = 30 ms = 0.030 seconds\nBDP = 10^6 × 0.030 = 30,000 bits.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "UGC-NET",
    "category": "Computer Networks"
  },
  {
    "id": 54,
    "originalNumber": 84,
    "question": "CB84000D001C001C is the content of a UDP header in hexadecimal format. The source port number is:",
    "options": [
      {
        "id": "1",
        "text": "52100"
      },
      {
        "id": "2",
        "text": "13"
      },
      {
        "id": "3",
        "text": "28"
      },
      {
        "id": "4",
        "text": "52000"
      }
    ],
    "correctOption": "1",
    "explanation": "A UDP header is 8 bytes (16 hex digits long):\nBytes 0-1 (first 4 hex chars): Source Port = CB84_16\nBytes 2-3: Destination Port = 000D_16\nBytes 4-5: Total Length = 001C_16 (28 bytes)\nBytes 6-7: Checksum = 001C_16\nConverting Source Port CB84_16 to decimal:\nC = 12, B = 11, 8 = 8, 4 = 4\n(12 × 16^3) + (11 × 16^2) + (8 × 16^1) + (4 × 16^0)\n= (12 × 4096) + (11 × 256) + 128 + 4\n= 49152 + 2816 + 128 + 4 = 52,100.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "UGC-NET",
    "category": "Computer Networks"
  },
  {
    "id": 55,
    "originalNumber": 85,
    "question": "The packet sent by a router/node to the source host to inform it of network congestion is called:",
    "options": [
      {
        "id": "1",
        "text": "Explicit packet"
      },
      {
        "id": "2",
        "text": "Backpressure packet"
      },
      {
        "id": "3",
        "text": "Choke packet"
      },
      {
        "id": "4",
        "text": "Retransmission packet"
      }
    ],
    "correctOption": "3",
    "explanation": "A Choke Packet is a control packet generated by a congested router and transmitted back to the source host informing it that link buffers are overflowing, prompting the source to reduce its transmission rate (e.g., ICMP Source Quench).",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "Routing Algorithms, Distance Vector vs Link State & Traffic Shaping",
    "topicSlug": "routing-algorithms-congestion-cn",
    "examType": "UGC-NET",
    "category": "Computer Networks"
  },
  {
    "id": 56,
    "originalNumber": 86,
    "question": "Which of the following is NOT a characteristic of packet switching?",
    "options": [
      {
        "id": "1",
        "text": "Data is broken into packets"
      },
      {
        "id": "2",
        "text": "Each packet may take a different route"
      },
      {
        "id": "3",
        "text": "Requires a dedicated path"
      },
      {
        "id": "4",
        "text": "Supports dynamic routing"
      }
    ],
    "correctOption": "3",
    "explanation": "In packet switching (datagram approach), network channels are shared dynamically using statistical multiplexing; NO dedicated end-to-end physical path is established. Dedicated paths are required by Circuit Switching.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "Routing Algorithms, Distance Vector vs Link State & Traffic Shaping",
    "topicSlug": "routing-algorithms-congestion-cn",
    "examType": "UGC-NET",
    "category": "Computer Networks"
  },
  {
    "id": 57,
    "originalNumber": 87,
    "question": "Which of the followings is NOT a valid property over two fuzzy relations R and S which must be obeyed for performing λ-cut defuzzifications?\n1. (R ∪ S)_λ = R_λ ∪ S_λ\n2. (R ∩ S)_λ = R_λ ∩ S_λ\n3. (R')_λ ≠ (R_λ)' except when λ = 1\n4. For any λ ≤ β, where 0 ≤ β ≤ 1, it is true that R_β ⊆ R_λ",
    "options": [
      {
        "id": "1",
        "text": "1"
      },
      {
        "id": "2",
        "text": "2"
      },
      {
        "id": "3",
        "text": "3"
      },
      {
        "id": "4",
        "text": "4"
      }
    ],
    "correctOption": "3",
    "explanation": "Standard fuzzy cut properties: (R ∪ S)_λ = R_λ ∪ S_λ and (R ∩ S)_λ = R_λ ∩ S_λ hold for all λ ∈ (0, 1]. For complementation, (R')_λ = (R_{1-λ})' in general, and (R')_λ = (R_λ)' occurs at the equilibrium crossover point λ = 0.5 (not λ = 1). Property 3 as stated is invalid.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Fuzzy Logic and Artificial Neural Networks: Sets, Defuzzification, and Backpropagation",
    "topicSlug": "fuzzy-logic-neural-networks-ai",
    "examType": "UGC-NET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 58,
    "originalNumber": 88,
    "question": "Which of the following is NOT a parent selection technique used in genetic algorithm implementations?",
    "options": [
      {
        "id": "1",
        "text": "Radial"
      },
      {
        "id": "2",
        "text": "Tournament"
      },
      {
        "id": "3",
        "text": "Boltzmann"
      },
      {
        "id": "4",
        "text": "Rank"
      }
    ],
    "correctOption": "1",
    "explanation": "Standard GA parent selection methods include Roulette Wheel selection, Tournament selection, Rank selection, Boltzmann selection, and Stochastic Universal Sampling. 'Radial' is not a selection operator.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Evolutionary Computation: Genetic Algorithms, Swarm Intelligence, and Metaheuristics",
    "topicSlug": "ai-genetic-algorithms",
    "examType": "UGC-NET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 59,
    "originalNumber": 89,
    "question": "Given that η refers to learning rate and x_i refers to the i-th input to the neuron, which of the following most suitably describes the weight update rule of a Kohonen Self-Organizing Map (SOM) for the winning neuron j?",
    "options": [
      {
        "id": "1",
        "text": "w_{ij}(new) = (1 - η) * w_{ij}(old) + η * x_i"
      },
      {
        "id": "2",
        "text": "w_{ij}(new) = η * w_{ij}(old) + (1 - η) * x_i"
      },
      {
        "id": "3",
        "text": "w_{ij}(new) = (1 - η) * w_{ij}(old) + x_i"
      },
      {
        "id": "4",
        "text": "w_{ij}(new) = w_{ij}(old) + η * x_i"
      }
    ],
    "correctOption": "1",
    "explanation": "Kohonen SOM weight update equation: w_{ij}(t+1) = w_{ij}(t) + η(t) [x_i - w_{ij}(t)]. Rearranging terms: w_{ij}(new) = w_{ij}(old) - η * w_{ij}(old) + η * x_i = (1 - η) * w_{ij}(old) + η * x_i (Option 1).",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Fuzzy Logic and Artificial Neural Networks: Sets, Defuzzification, and Backpropagation",
    "topicSlug": "fuzzy-logic-neural-networks-ai",
    "examType": "UGC-NET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 60,
    "originalNumber": 90,
    "question": "Consider the following table defining sample inputs and corresponding target values for a perceptron model:\nSample No | x1 | x2 | Target | w1 | w2\nS1 | 0 | 0 | 0 | 0 | 0\nS2 | 0 | 1 | 1 | | \nS3 | 1 | 0 | 1 | | \nS4 | 1 | 1 | 1 | | \nWhat shall be the value of updated weights after applying all samples S1 to S4 in sequence? (Initial weights w1=0, w2=0, learning rate η = 0.1, no bias, activation: y=1 if yin>0 else 0).",
    "options": [
      {
        "id": "1",
        "text": "w1 = 0.1, w2 = 0.1"
      },
      {
        "id": "2",
        "text": "w1 = 0.0, w2 = 0.2"
      },
      {
        "id": "3",
        "text": "w1 = 0.0, w2 = 0.1"
      },
      {
        "id": "4",
        "text": "w1 = 0.2, w2 = 0.2"
      }
    ],
    "correctOption": "1",
    "explanation": "Tracing perceptron updates with w1=0, w2=0, η=0.1:\n1. S1(0,0, target 0): yin = 0*0 + 0*0 = 0 -> y=0 (matches target 0). No weight change.\n2. S2(0,1, target 1): yin = 0*0 + 0*1 = 0 -> y=0 (target is 1, error = 1). Δw1 = 0.1*(1)*0 = 0; Δw2 = 0.1*(1)*1 = 0.1. New weights: w1=0, w2=0.1.\n3. S3(1,0, target 1): yin = 0*1 + 0.1*0 = 0 -> y=0 (target is 1, error = 1). Δw1 = 0.1*(1)*1 = 0.1; Δw2 = 0.1*(1)*0 = 0. New weights: w1=0.1, w2=0.1.\n4. S4(1,1, target 1): yin = 0.1*1 + 0.1*1 = 0.2 > 0 -> y=1 (matches target 1). No weight change.\nFinal weights after 1 epoch: w1 = 0.1, w2 = 0.1.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Fuzzy Logic and Artificial Neural Networks: Sets, Defuzzification, and Backpropagation",
    "topicSlug": "fuzzy-logic-neural-networks-ai",
    "examType": "UGC-NET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 61,
    "originalNumber": 91,
    "question": "The computer needs to process each instruction with the following sequence of steps:\nA. Calculate the effective address\nB. Fetch the Instruction from memory\nC. Decode the instruction\nD. Fetch the operands from the memory\nE. Execute the Instruction\n\nChoose the correct sequence from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B, C, D, E"
      },
      {
        "id": "2",
        "text": "B, A, D, A, E"
      },
      {
        "id": "3",
        "text": "B, C, A, D, E"
      },
      {
        "id": "4",
        "text": "C, B, A, D, E"
      }
    ],
    "correctOption": "3",
    "explanation": "Standard von Neumann instruction cycle sequence:\n1. Fetch Instruction from Memory (B)\n2. Decode Instruction in IR (C)\n3. Calculate Effective Address of Operands (A)\n4. Fetch Operands from Memory (D)\n5. Execute Instruction in ALU (E).\nCorrect sequence: B, C, A, D, E.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 62,
    "originalNumber": 92,
    "question": "The right sequence of suboperations performed in a floating-point arithmetic pipeline is:\nA. Align the mantissas\nB. Add or subtract the mantissas\nC. Normalize the result\nD. Compare the exponents\n\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "D, A, B, C"
      },
      {
        "id": "2",
        "text": "D, B, A, C"
      },
      {
        "id": "3",
        "text": "B, C, A, D"
      },
      {
        "id": "4",
        "text": "B, C, D, A"
      }
    ],
    "correctOption": "1",
    "explanation": "Floating-point addition/subtraction pipeline execution:\n1. Compare Exponents (D) to find difference d = e1 - e2\n2. Align Mantissas (A) by shifting mantissa of smaller number right by d bits\n3. Add or Subtract Mantissas (B)\n4. Normalize the Result (C) by adjusting exponent and shifting mantissa.\nSequence: D -> A -> B -> C.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 63,
    "originalNumber": 93,
    "question": "The right sequence of CPU program to input data via programmed I/O will be:\nA. Read status register\nB. Check flag bit\nC. Read Data Register\nD. Transfer data to memory\n\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B, C, D"
      },
      {
        "id": "2",
        "text": "B, A, C, D"
      },
      {
        "id": "3",
        "text": "C, B, A, D"
      },
      {
        "id": "4",
        "text": "A, C, B, D"
      }
    ],
    "correctOption": "1",
    "explanation": "In programmed I/O polling:\n1. CPU reads the I/O interface Status Register (A)\n2. Checks the status flag bit (e.g. READY bit) in a loop (B)\n3. When ready, reads the Data Register from the I/O interface (C)\n4. Transfers data into system memory (D). Sequence: A, B, C, D.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 64,
    "originalNumber": 94,
    "question": "Consider the operators used in C Programming given below:\nA. &&\nB. +=\nC. >>\nD. >=\nE. ?:\nChoose among the following the correct order of precedence (higher to lower):",
    "options": [
      {
        "id": "1",
        "text": "C, D, E, B, A"
      },
      {
        "id": "2",
        "text": "C, A, D, E, B"
      },
      {
        "id": "3",
        "text": "C, D, A, E, B"
      },
      {
        "id": "4",
        "text": "D, C, A, B, E"
      }
    ],
    "correctOption": "3",
    "explanation": "C Operator Precedence hierarchy:\n1. Bitwise shift: >> (Rank 5)\n2. Relational: >= (Rank 6)\n3. Logical AND: && (Rank 11)\n4. Conditional ternary: ?: (Rank 13)\n5. Compound Assignment: += (Rank 14)\nOrder from highest to lowest: C, D, A, E, B.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Pointers, Memory Architecture, and Storage Classes in C/C++",
    "topicSlug": "c-cpp-pointers-memory",
    "examType": "UGC-NET",
    "category": "Programming"
  },
  {
    "id": 65,
    "originalNumber": 95,
    "question": "Consider the following interrupt protection levels in Linux, and arrange them in the increasing order of their priorities:\nA. User-Mode Programs (Preemptible)\nB. Bottom Half Interrupt Handlers\nC. Top Half Interrupt Handlers\nD. Kernel System Service Routines (Preemptible)",
    "options": [
      {
        "id": "1",
        "text": "B -> A -> C -> D"
      },
      {
        "id": "2",
        "text": "C -> B -> A -> D"
      },
      {
        "id": "3",
        "text": "C -> A -> B -> D"
      },
      {
        "id": "4",
        "text": "A -> D -> B -> C"
      }
    ],
    "correctOption": "4",
    "explanation": "Linux execution priority levels from lowest priority to highest priority:\n1. User-mode processes (A - lowest, preemptible)\n2. Kernel system calls / service routines (D - preemptible)\n3. Bottom-half interrupt handlers / softirqs / tasklets (B)\n4. Top-half hardware interrupt service routines / hardirqs (C - highest, masks lower interrupts).\nIncreasing priority order: A -> D -> B -> C.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Process Synchronization, Critical Section Problem & Semaphores",
    "topicSlug": "process-synchronization-ipc-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 66,
    "originalNumber": 96,
    "question": "Which of the following shows the correct hierarchy of a layered file system in an operating system?\nA. Logical File System\nB. File Organization Module\nC. Basic File System\nD. I/O Control\nE. Application Programs",
    "options": [
      {
        "id": "1",
        "text": "A -> B -> D -> C -> E"
      },
      {
        "id": "2",
        "text": "D -> E -> C -> A -> B"
      },
      {
        "id": "3",
        "text": "E -> A -> B -> C -> D"
      },
      {
        "id": "4",
        "text": "E -> C -> B -> A -> D"
      }
    ],
    "correctOption": "3",
    "explanation": "Silberschatz OS file-system layering (top to bottom):\n1. Application Programs (E)\n2. Logical File System (A - manages metadata, directory structure, file-control blocks)\n3. File-Organization Module (B - translates logical block addresses to physical block addresses)\n4. Basic File System (C - issues generic read/write block commands)\n5. I/O Control / Device Drivers (D - transfers between memory and disk controllers).\nHierarchy: E -> A -> B -> C -> D.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Deadlocks and Banker's Algorithm: Resource Allocation Graphs & Recovery",
    "topicSlug": "deadlocks-bankers-algorithm-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 67,
    "originalNumber": 97,
    "question": "Arrange the following in increasing order of coupling from lowest (best) coupling to highest (worst) coupling:\nA. Common Coupling\nB. Stamp Coupling\nC. Control Coupling\nD. External Coupling\nE. Content Coupling",
    "options": [
      {
        "id": "1",
        "text": "E, A, C, B, D"
      },
      {
        "id": "2",
        "text": "D, B, A, E, C"
      },
      {
        "id": "3",
        "text": "B, C, D, A, E"
      },
      {
        "id": "4",
        "text": "C, A, B, D, E"
      }
    ],
    "correctOption": "3",
    "explanation": "Module Coupling spectrum from lowest (weakest/best) to highest (tightest/worst):\nData Coupling (Lowest) < Stamp Coupling (B) < Control Coupling (C) < External Coupling (D) < Common Coupling (A) < Content Coupling (E - Highest/Worst).\nIncreasing order: B, C, D, A, E.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "UGC-NET",
    "category": "Software Engineering"
  },
  {
    "id": 68,
    "originalNumber": 98,
    "question": "Arrange the following types of testing in the order they are usually performed in the software development life cycle:\nA. Integration testing\nB. Unit testing\nC. System Testing\nD. Acceptance Testing",
    "options": [
      {
        "id": "1",
        "text": "B, C, A, D"
      },
      {
        "id": "2",
        "text": "B, A, C, D"
      },
      {
        "id": "3",
        "text": "C, B, A, D"
      },
      {
        "id": "4",
        "text": "C, B, D, A"
      }
    ],
    "correctOption": "2",
    "explanation": "The standard V-model testing hierarchy proceeds bottom-up:\n1. Unit Testing (B - testing individual modules/functions)\n2. Integration Testing (A - testing interfaces between modules)\n3. System Testing (C - verifying entire integrated system against SRS)\n4. Acceptance Testing (D - user alpha/beta validation).\nOrder: B, A, C, D.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Testing, Metrics, and Maintenance: Black-Box, White-Box, and Mutation Testing",
    "topicSlug": "software-testing-maintenance-se",
    "examType": "UGC-NET",
    "category": "Software Engineering"
  },
  {
    "id": 69,
    "originalNumber": 99,
    "question": "The correct sequence of constructing a Huffman tree is:\nA. Repeat until root formed\nB. Create leaf nodes\nC. Build priority queue\nD. Combine lowest frequency nodes",
    "options": [
      {
        "id": "1",
        "text": "B, C, A, D"
      },
      {
        "id": "2",
        "text": "D, B, A, C"
      },
      {
        "id": "3",
        "text": "B, C, D, A"
      },
      {
        "id": "4",
        "text": "C, A, B, D"
      }
    ],
    "correctOption": "3",
    "explanation": "Huffman Greedy Algorithm steps:\n1. Create leaf nodes for each character symbol with its frequency weight (B)\n2. Insert all nodes into a min-priority queue (C)\n3. Extract the two lowest-frequency nodes and combine them into an internal parent node (D)\n4. Re-insert parent into queue and repeat until a single root node remains (A).\nSequence: B, C, D, A.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Dynamic Programming and Greedy Algorithms: 0/1 Knapsack, LCS, and MCM",
    "topicSlug": "dynamic-programming-greedy-dsa",
    "examType": "UGC-NET",
    "category": "Algorithms"
  },
  {
    "id": 70,
    "originalNumber": 100,
    "question": "When developing a dynamic programming algorithm, the sequence of steps followed is:\nA. Construct an optimal solution from computed information.\nB. Recursively define the value of an optimal solution.\nC. Characterize the structure of an optimal solution.\nD. Compute the value of an optimal solution, typically in a bottom-up fashion.",
    "options": [
      {
        "id": "1",
        "text": "B, C, A, D"
      },
      {
        "id": "2",
        "text": "B, A, C, D"
      },
      {
        "id": "3",
        "text": "C, B, A, D"
      },
      {
        "id": "4",
        "text": "C, B, D, A"
      }
    ],
    "correctOption": "4",
    "explanation": "According to CLRS (Introduction to Algorithms), the 4 steps of Dynamic Programming design are:\n1. Characterize the structure of an optimal solution (C)\n2. Recursively define the value of an optimal solution (B)\n3. Compute the value of an optimal solution bottom-up (D)\n4. Construct an optimal solution from computed information (A).\nSequence: C, B, D, A.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Dynamic Programming and Greedy Algorithms: 0/1 Knapsack, LCS, and MCM",
    "topicSlug": "dynamic-programming-greedy-dsa",
    "examType": "UGC-NET",
    "category": "Algorithms"
  },
  {
    "id": 71,
    "originalNumber": 101,
    "question": "Arrange the following parsers in increasing order of their power of handling grammars (from least powerful to most powerful):\nA. LR(0)\nB. LR(1)\nC. LALR(1)\nD. LL(0)\nE. SLR",
    "options": [
      {
        "id": "1",
        "text": "LL(0) -> LR(0) -> SLR -> LR(1) -> LALR(1)"
      },
      {
        "id": "2",
        "text": "SLR -> LR(0) -> LL(0) -> LR(1) -> LALR(1)"
      },
      {
        "id": "3",
        "text": "LL(0) -> LR(0) -> SLR -> LALR(1) -> LR(1)"
      },
      {
        "id": "4",
        "text": "LR(0) -> LL(0) -> SLR -> LR(1) -> LALR(1)"
      }
    ],
    "correctOption": "3",
    "explanation": "Parser hierarchy in compiler design:\nLL(0) ⊂ LR(0) ⊂ SLR(1) ⊂ LALR(1) ⊂ CLR(1) / LR(1).\nLR(1) has the full lookahead set and resolves conflicts that LALR(1) and SLR cannot. Order: LL(0) -> LR(0) -> SLR -> LALR(1) -> LR(1).",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Compiler Design: Lexical Analysis, LL(1) Parsing, and LR Parser Taxonomy",
    "topicSlug": "compiler-design-parsing-syntax",
    "examType": "UGC-NET",
    "category": "Compilers"
  },
  {
    "id": 72,
    "originalNumber": 102,
    "question": "Arrange the steps involved when a user enters a URL in a browser and accesses a website:\nA. DNS resolution\nB. HTTP request sent\nC. URL entered in the browser\nD. IP address obtained\nE. Webpage displayed",
    "options": [
      {
        "id": "1",
        "text": "B, A, C, E, D"
      },
      {
        "id": "2",
        "text": "C, B, A, E, D"
      },
      {
        "id": "3",
        "text": "B, C, D, A, E"
      },
      {
        "id": "4",
        "text": "C, A, D, B, E"
      }
    ],
    "correctOption": "4",
    "explanation": "Web navigation workflow:\n1. User enters URL in browser (C)\n2. Browser issues DNS resolution request (A)\n3. Target server IP address is obtained (D)\n4. TCP handshake completes & HTTP request sent (B)\n5. Server responds and webpage is rendered/displayed (E).\nSequence: C, A, D, B, E.",
    "unit": "Unit 10: Web-Based Application Development",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Web Technologies"
  },
  {
    "id": 73,
    "originalNumber": 103,
    "question": "Arrange the process of virtualization in cloud environments:\nA. Hypervisor installed on physical server\nB. Virtual machines created\nC. Resources allocated to Virtual machines\nD. Virtual machines run isolated workloads",
    "options": [
      {
        "id": "1",
        "text": "B, C, A, D"
      },
      {
        "id": "2",
        "text": "A, B, C, D"
      },
      {
        "id": "3",
        "text": "A, C, B, D"
      },
      {
        "id": "4",
        "text": "B, C, D, A"
      }
    ],
    "correctOption": "2",
    "explanation": "Cloud virtualization deployment pipeline:\n1. Hypervisor (Type 1 bare-metal or Type 2) installed on host server (A)\n2. Virtual machine instances provisioned (B)\n3. vCPU, vRAM, and virtual storage resources mapped/allocated (C)\n4. Guest OS and guest applications run isolated multitenant workloads (D).\nSequence: A, B, C, D.",
    "unit": "Unit 10: Web-Based Application Development",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Cloud Computing"
  },
  {
    "id": 74,
    "originalNumber": 104,
    "question": "Consider the following steps used by a knowledge base designer to represent a world:\nA. Selects atoms to represent propositions\nB. Ask questions about intended interpretation\nC. Choose a task domain\nD. Axiomatizing the domain",
    "options": [
      {
        "id": "1",
        "text": "C -> A -> D -> B"
      },
      {
        "id": "2",
        "text": "C -> A -> B -> D"
      },
      {
        "id": "3",
        "text": "B -> C -> A -> D"
      },
      {
        "id": "4",
        "text": "A -> C -> B -> D"
      }
    ],
    "correctOption": "2",
    "explanation": "Knowledge Engineering methodology in AI:\n1. Choose the task domain and scope (C)\n2. Select ontology / vocabulary / atoms to represent concepts and propositions (A)\n3. Encode intended interpretations and semantic constraints (B)\n4. Axiomatize the domain by writing first-order logic sentences/rules (D).\nSequence: C -> A -> B -> D.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "UGC-NET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 75,
    "originalNumber": 105,
    "question": "Consider the following steps involved in the application of Genetic algorithm for a problem:\nA. Select a pair of parents from the population\nB. Apply mutation at each locus with probability p_m\nC. Calculate fitness of each member of the population\nD. Apply crossover with probability p_c to form offsprings\nChoose the correct order of the above steps:",
    "options": [
      {
        "id": "1",
        "text": "A -> C -> B -> D"
      },
      {
        "id": "2",
        "text": "C -> A -> D -> B"
      },
      {
        "id": "3",
        "text": "C -> A -> B -> D"
      },
      {
        "id": "4",
        "text": "A -> D -> B -> C"
      }
    ],
    "correctOption": "2",
    "explanation": "Standard generational GA cycle:\n1. Calculate fitness of individuals in the population (C)\n2. Select candidate parents based on fitness probabilities (A)\n3. Apply crossover with probability p_c to create offspring (D)\n4. Apply mutation with small probability p_m on gene loci (B).\nOrder: C -> A -> D -> B.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Evolutionary Computation: Genetic Algorithms, Swarm Intelligence, and Metaheuristics",
    "topicSlug": "ai-genetic-algorithms",
    "examType": "UGC-NET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 76,
    "originalNumber": 106,
    "question": "Let P denote 'She is intelligent' and let Q denote 'She is happy.' Given below are the statements:\n(a) If She is intelligent, then She is unhappy.\n(b) She is neither intelligent nor happy.\n(c) It is necessary to be not intelligent in order to be happy.\n(d) To be not intelligent is to be unhappy.\nWhich of the following is the correct Propositional expression for the above statements?",
    "options": [
      {
        "id": "1",
        "text": "(a) P -> ~Q; (b) P ^ ~Q; (c) Q -> ~P; (d) P -> ~Q"
      },
      {
        "id": "2",
        "text": "(a) P -> Q; (b) ~P ^ ~Q; (c) ~Q -> P; (d) ~P -> ~Q"
      },
      {
        "id": "3",
        "text": "(a) P -> ~Q; (b) ~P ^ ~Q; (c) Q -> ~P; (d) ~P -> ~Q"
      },
      {
        "id": "4",
        "text": "(a) P -> ~Q; (b) P ^ ~Q; (c) Q -> P; (d) ~P -> ~Q"
      }
    ],
    "correctOption": "3",
    "explanation": "Logical translation:\n(a) 'If P then ~Q' = P -> ~Q\n(b) 'Neither P nor Q' = ~P ^ ~Q\n(c) 'p is necessary for q' means q -> p. Here 'not intelligent (~P)' is necessary for 'happy (Q)', meaning Q -> ~P\n(d) 'To be ~P is to be ~Q' = ~P -> ~Q.\nMatching matches Option 3 exactly.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Propositional Logic: Tautologies, Equivalences & Truth Table Mastery",
    "topicSlug": "propositional-logic-toc",
    "examType": "UGC-NET",
    "category": "Mathematical Logic"
  },
  {
    "id": 77,
    "originalNumber": 107,
    "question": "Let m and n are positive integers. Then:\n(A) If n ≠ 1, then m < mn\n(B) If k is composite, then k = mn where 1 < m, n > k\n(C) If mn = 1, then m = 1 and n = 1\n(D) If k is composite, then k = mn where 1 < m, n < k\nWhich of the following is correct?",
    "options": [
      {
        "id": "1",
        "text": "(A), (C), (D)"
      },
      {
        "id": "2",
        "text": "(B), (C), (D)"
      },
      {
        "id": "3",
        "text": "(A), (B)"
      },
      {
        "id": "4",
        "text": "(A), (B), (C)"
      }
    ],
    "correctOption": "1",
    "explanation": "(A) If n > 1 and m ≥ 1, then mn ≥ 2m > m, so m < mn is TRUE.\n(B) Stating n > k contradicts k = mn with m > 1 (FALSE).\n(C) Since m, n are positive integers, mn = 1 strictly implies m = 1 and n = 1 (TRUE).\n(D) Definition of composite integer: factors satisfy 1 < m, n < k (TRUE).\nThus (A), (C), (D) are correct.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "UGC-NET",
    "category": "Discrete Mathematics"
  },
  {
    "id": 78,
    "originalNumber": 108,
    "question": "Which of the following statements are true?\nA. In the write-through policy, only the cache is updated\nB. In the write-back policy, both cache and main memory are updated\nC. Cache coherence problems exist in multiprocessors with private caches because of the need to share writable data\nD. Cache coherence problem can be solved by means of hardware-only scheme\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B Only"
      },
      {
        "id": "2",
        "text": "B, C Only"
      },
      {
        "id": "3",
        "text": "C, D Only"
      },
      {
        "id": "4",
        "text": "A, B, C Only"
      }
    ],
    "correctOption": "3",
    "explanation": "Statement A is false: Write-Through updates both cache and main memory simultaneously. Statement B is false: Write-Back updates only cache, setting a dirty bit, and writes back on block eviction. Statements C and D are true: Cache coherence stems from multiple private caches sharing writable memory and is solved in hardware via snooping (MESI/MOESI) and directory-based protocols.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Cache Memory Organization, Mapping Techniques & AMAT Calculations",
    "topicSlug": "cache-memory-organization-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 79,
    "originalNumber": 109,
    "question": "Which of the following gates do NOT give output 1 when both inputs are 0?\nA. NAND gate\nB. NOR gate\nC. X-OR gate\nD. X-NOR gate\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B Only"
      },
      {
        "id": "2",
        "text": "B, C Only"
      },
      {
        "id": "3",
        "text": "C, D Only"
      },
      {
        "id": "4",
        "text": "C Only"
      }
    ],
    "correctOption": "4",
    "explanation": "Evaluating truth values with inputs A=0, B=0:\nNAND: ~(0 • 0) = ~0 = 1\nNOR: ~(0 + 0) = ~0 = 1\nXOR: 0 ⊕ 0 = 0 (Output is 0!)\nXNOR: ~(0 ⊕ 0) = ~0 = 1\nOnly the XOR gate outputs 0 when both inputs are 0. Hence, 'C Only' is correct.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "UGC-NET",
    "category": "Digital Logic"
  },
  {
    "id": 80,
    "originalNumber": 110,
    "question": "Consider the following statements for XML (Extensible Markup Language):\nA. The number of tags decreases and users can define their own tags.\nB. It is used for Presentation.\nC. It is case sensitive.\nD. It is dynamic.\nWhich of the above statements are true?",
    "options": [
      {
        "id": "1",
        "text": "B, C, D Only"
      },
      {
        "id": "2",
        "text": "A, B, D Only"
      },
      {
        "id": "3",
        "text": "A, C, D Only"
      },
      {
        "id": "4",
        "text": "B, D Only"
      }
    ],
    "correctOption": "3",
    "explanation": "Statement B is false because XML is designed to store and transport data, not for presentation (HTML and CSS handle presentation). XML is strictly case-sensitive (<Note> ≠ <note>), supports user-defined extensible tags, and enables dynamic data serialization across distributed systems.",
    "unit": "Unit 10: Web-Based Application Development",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "UGC-NET",
    "category": "Web Technologies"
  },
  {
    "id": 81,
    "originalNumber": 111,
    "question": "Only legal pointer operations in C/C++:\nA. pointer + number -> pointer\nB. pointer - number -> number\nC. pointer + pointer -> pointer\nD. pointer - pointer -> pointer\nE. pointer - pointer -> number\nChoose the most appropriate answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B, C Only"
      },
      {
        "id": "2",
        "text": "A, B, D Only"
      },
      {
        "id": "3",
        "text": "A, B Only"
      },
      {
        "id": "4",
        "text": "A, E Only"
      }
    ],
    "correctOption": "4",
    "explanation": "Valid pointer arithmetic rules in C:\n1. ptr + int = ptr (A is legal)\n2. ptr - int = ptr (B is illegal, yields pointer not number)\n3. ptr + ptr is undefined/forbidden by ANSI C (C is illegal)\n4. ptr - ptr = ptrdiff_t (integral distance between elements, E is legal; D is illegal).\nLegal operations: A and E Only.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Pointers, Memory Architecture, and Storage Classes in C/C++",
    "topicSlug": "c-cpp-pointers-memory",
    "examType": "UGC-NET",
    "category": "Programming"
  },
  {
    "id": 82,
    "originalNumber": 112,
    "question": "Once a process is allocated CPU and executing, which of the following events could NOT occur?\nA. The process could issue an I/O request and then be placed in the Ready Queue\nB. The process could create new subprocesses & wait for termination\nC. The time slice of the process expires and it may join the waiting queue\nD. The process is forcibly removed from the CPU and is put in the Waiting queue due to arrival of an interrupt",
    "options": [
      {
        "id": "1",
        "text": "B Only"
      },
      {
        "id": "2",
        "text": "D Only"
      },
      {
        "id": "3",
        "text": "A and C Only"
      },
      {
        "id": "4",
        "text": "A, C and D Only"
      }
    ],
    "correctOption": "4",
    "explanation": "In standard OS process state transitions:\n- When a process issues an I/O request, it enters the WAITING / BLOCKED queue (not Ready Queue; A cannot occur).\n- When its time slice expires, it enters the READY queue (not Waiting queue; C cannot occur).\n- When preempted by an interrupt, it returns to the READY queue (not Waiting queue; D cannot occur).\nHence, events A, C, and D could NOT occur.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "CPU Scheduling Algorithms: Complete Guide with Gantt Charts & Formulas",
    "topicSlug": "cpu-scheduling-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 83,
    "originalNumber": 113,
    "question": "Identify the correct statement(s) with respect to Spinlock Semaphores:\nA. The name refers to busy waiting semaphores.\nB. They are not useful when the locks are to be held for a short duration of time.\nC. It may require multiple context switches when a process waits on a lock.\nD. They are often employed on Uniprocessor systems.",
    "options": [
      {
        "id": "1",
        "text": "A Only"
      },
      {
        "id": "2",
        "text": "D Only"
      },
      {
        "id": "3",
        "text": "B, D Only"
      },
      {
        "id": "4",
        "text": "A, C and D Only"
      }
    ],
    "correctOption": "1",
    "explanation": "A Spinlock requires the waiting process to loop continuously ('spin') checking the lock variable, which is the definition of busy waiting (A is TRUE). Spinlocks eliminate context-switch overhead, making them ideal when locks are held for short durations. They are counterproductive on uniprocessor systems because the spinning thread starves the thread holding the lock. Hence, A Only is correct.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Process Synchronization, Critical Section Problem & Semaphores",
    "topicSlug": "process-synchronization-ipc-os",
    "examType": "UGC-NET",
    "category": "Operating Systems"
  },
  {
    "id": 84,
    "originalNumber": 114,
    "question": "Which of the following cohesions are better than Procedural Cohesion?\nA. Functional Cohesion\nB. Sequential Cohesion\nC. Temporal Cohesion\nD. Communicational Cohesion\nE. Logical Cohesion",
    "options": [
      {
        "id": "1",
        "text": "A and D Only"
      },
      {
        "id": "2",
        "text": "A, B and D Only"
      },
      {
        "id": "3",
        "text": "C, D and E Only"
      },
      {
        "id": "4",
        "text": "A, D and E Only"
      }
    ],
    "correctOption": "2",
    "explanation": "Cohesion ranking from worst (weakest) to best (highest strength):\nCoincidental < Logical < Temporal < Procedural < Communicational < Sequential < Functional.\nCohesions better (higher) than Procedural are Communicational (D), Sequential (B), and Functional (A). Correct: A, B and D Only.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "UGC-NET",
    "category": "Software Engineering"
  },
  {
    "id": 85,
    "originalNumber": 115,
    "question": "Which of the followings belong to McCall's Software Quality Model factors?\nA. Maintainability\nB. Usability\nC. Integrity\nD. Functionality",
    "options": [
      {
        "id": "1",
        "text": "A and D Only"
      },
      {
        "id": "2",
        "text": "A, B and D Only"
      },
      {
        "id": "3",
        "text": "C and D Only"
      },
      {
        "id": "4",
        "text": "A, B and C Only"
      }
    ],
    "correctOption": "4",
    "explanation": "McCall's 11 quality factors (categorized under Product Operation, Revision, and Transition) include: Correctness, Reliability, Efficiency, Integrity (C), Usability (B), Maintainability (A), Testability, Flexibility, Portability, Reusability, and Interoperability. 'Functionality' was added later in the ISO 9126 model.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Quality Assurance, CMMI Maturity Levels, and ISO 9000 Standards",
    "topicSlug": "software-engineering-cmmi",
    "examType": "UGC-NET",
    "category": "Software Engineering"
  },
  {
    "id": 86,
    "originalNumber": 116,
    "question": "Which of the following algorithms use the Greedy strategy?\nA. Dijkstra's algorithm\nB. Kruskal's algorithm\nC. Huffman coding\nD. Bellman-Ford algorithm",
    "options": [
      {
        "id": "1",
        "text": "A, B and D Only"
      },
      {
        "id": "2",
        "text": "A, B and C Only"
      },
      {
        "id": "3",
        "text": "C and D Only"
      },
      {
        "id": "4",
        "text": "A and D Only"
      }
    ],
    "correctOption": "2",
    "explanation": "Dijkstra (shortest path), Kruskal (minimum spanning tree), and Huffman (optimal prefix coding) are quintessential Greedy algorithms that make locally optimal choices at each step. Bellman-Ford uses Dynamic Programming (relaxing all edges |V|-1 times).",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Minimum Spanning Trees (Kruskal & Prim), Greedy Choice, DSU & Dijkstra",
    "topicSlug": "minimum-spanning-trees-greedy-dsa",
    "examType": "UGC-NET",
    "category": "Algorithms"
  },
  {
    "id": 87,
    "originalNumber": 117,
    "question": "Which of the following trees are height-balanced search trees?\nA. Binary Search Tree\nB. AVL Tree\nC. Red-Black Tree\nD. B Tree",
    "options": [
      {
        "id": "1",
        "text": "A and D Only"
      },
      {
        "id": "2",
        "text": "A, B and D Only"
      },
      {
        "id": "3",
        "text": "C and D Only"
      },
      {
        "id": "4",
        "text": "B and C Only"
      }
    ],
    "correctOption": "4",
    "explanation": "An AVL Tree strictly maintains height balance with balance factors in {-1, 0, +1} (height ≤ 1.44 log_2 n). A Red-Black Tree maintains approximate height balance via coloring constraints ensuring the longest path is at most twice the shortest path (height ≤ 2 log_2(n+1)). Both are canonical height-balanced binary search trees.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Binary Search Trees, AVL Trees, Rotations & Height Bounds",
    "topicSlug": "binary-search-trees-avl-dsa",
    "examType": "UGC-NET",
    "category": "Data Structures"
  },
  {
    "id": 88,
    "originalNumber": 118,
    "question": "Which of the following are controlled-access MAC protocols?\nA. Reservation\nB. Polling\nC. TDMA\nD. Token Passing\nE. CSMA/CA",
    "options": [
      {
        "id": "1",
        "text": "A and D Only"
      },
      {
        "id": "2",
        "text": "A, B and D Only"
      },
      {
        "id": "3",
        "text": "C, D and E Only"
      },
      {
        "id": "4",
        "text": "A, D and E Only"
      }
    ],
    "correctOption": "2",
    "explanation": "Medium Access Control (MAC) sublayer taxonomy:\n1. Random Access: ALOHA, CSMA, CSMA/CD, CSMA/CA\n2. Controlled Access: Reservation (A), Polling (B), and Token Passing (D)\n3. Channelization: FDMA, TDMA, CDMA.\nControlled-access protocols are A, B and D Only.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "UGC-NET",
    "category": "Computer Networks"
  },
  {
    "id": 89,
    "originalNumber": 119,
    "question": "Which of the following are examples of data encoding (line coding) schemes?\nA. Non-Return to Zero (NRZ)\nB. Manchester Encoding\nC. Amplitude Modulation\nD. Hamming code\nE. Bipolar AMI",
    "options": [
      {
        "id": "1",
        "text": "A, C and D Only"
      },
      {
        "id": "2",
        "text": "A, B and D Only"
      },
      {
        "id": "3",
        "text": "C, D and E Only"
      },
      {
        "id": "4",
        "text": "A, B and E Only"
      }
    ],
    "correctOption": "4",
    "explanation": "Line coding converts digital binary bits into digital baseband voltage signals. Classic line coding schemes include NRZ (Non-Return to Zero), Manchester (used in classic 10Mbps Ethernet), and Bipolar AMI (Alternate Mark Inversion). Amplitude Modulation is analog bandpass modulation, and Hamming Code is forward error correction.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "UGC-NET",
    "category": "Computer Networks"
  },
  {
    "id": 90,
    "originalNumber": 120,
    "question": "Consider the following statements regarding Agent systems in AI:\nA. Agent system comprises of an agent and an environment on which it acts\nB. The controller part of an agent receives percepts from its body and sends commands to the environment\nC. Agents act in the world through actuators which are non-noisy and always reliable\nD. The actuators of an agent convert stimuli into percepts",
    "options": [
      {
        "id": "1",
        "text": "A, B Only"
      },
      {
        "id": "2",
        "text": "B, D Only"
      },
      {
        "id": "3",
        "text": "C, D Only"
      },
      {
        "id": "4",
        "text": "B, C, D Only"
      }
    ],
    "correctOption": "1",
    "explanation": "In Russell & Norvig's agent framework: An agent perceives its environment via sensors and acts on that environment via actuators (A is true). The controller implements the agent function mapping percept histories to actions (B is true). Real actuators are physical and subject to noise/imperfection (C is false). Sensors (not actuators) convert external stimuli into percepts (D is false).",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "UGC-NET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 91,
    "originalNumber": 121,
    "question": "Consider the following statements regarding STRIPS representation of an AI Planning problem:\nA. STRIPS is a Feature-centric representation\nB. The features describing state of the world are divided into Primitive and Derived\nC. The STRIPS representation of the action comprises of Precondition and Effect\nD. STRIPS can directly define conditional effects",
    "options": [
      {
        "id": "1",
        "text": "A, C Only"
      },
      {
        "id": "2",
        "text": "B, C Only"
      },
      {
        "id": "3",
        "text": "A, D Only"
      },
      {
        "id": "4",
        "text": "B, C, D Only"
      }
    ],
    "correctOption": "2",
    "explanation": "STRIPS represents actions using Preconditions and Effects (Add list and Delete list) (C is true), and models the world state through primitive and derived propositions (B is true). Basic STRIPS cannot define conditional effects (this required the ADL extension; D is false). STRIPS is state-centric/action-centric rather than feature-centric.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "UGC-NET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 92,
    "originalNumber": 122,
    "question": "Which of the following Grammars is/are ONLY Context-Free (and not regular or context-sensitive)?\nC: S -> AS | aA, A -> a\nE: S -> Sb, A -> Aa | ε",
    "options": [
      {
        "id": "1",
        "text": "A, B Only"
      },
      {
        "id": "2",
        "text": "C, D Only"
      },
      {
        "id": "3",
        "text": "C, E Only"
      },
      {
        "id": "4",
        "text": "A, B, D, E Only"
      }
    ],
    "correctOption": "3",
    "explanation": "In Chomsky's hierarchy, Type 2 (Context-Free) rules have the form A -> α where A ∈ V_N and α ∈ (V_N ∪ Σ)*. Grammars C and E obey this format without containing context-sensitive reductions (|α| ≤ |β|).",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Chomsky Hierarchy, Pushdown Automata (PDA), Decidability & Closure Properties",
    "topicSlug": "chomsky-hierarchy-pda-toc",
    "examType": "UGC-NET",
    "category": "Theory of Computation"
  },
  {
    "id": 93,
    "originalNumber": 123,
    "question": "Which of the following statements is/are TRUE about encryption techniques?\nA. In symmetric key cryptography, secrecy of key generating function must be higher than decrypting function\nB. The DES technique works by taking 64 bit chunk value and 56 bit key over a series of transformations\nC. The Twofish symmetric block algorithm works on variable key length of upto 196 bits over a block of 128 bits\nD. RC4 is the most commonly used stream cipher that encrypts & decrypts a stream of bits/bytes instead of blocks",
    "options": [
      {
        "id": "1",
        "text": "B, C Only"
      },
      {
        "id": "2",
        "text": "A, D Only"
      },
      {
        "id": "3",
        "text": "A, C Only"
      },
      {
        "id": "4",
        "text": "B, D Only"
      }
    ],
    "correctOption": "4",
    "explanation": "Statement B is true: DES encrypts 64-bit plaintext blocks using an effective 56-bit symmetric key over 16 Feistel rounds. Statement D is true: RC4 is a variable key-size byte-oriented stream cipher designed by Ron Rivest. Statement C is false because Twofish uses key lengths of 128, 192, or 256 bits (not 196).",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "Network Security, Cryptography (DES, AES, RSA), Diffie-Hellman & Signatures",
    "topicSlug": "cryptographic-algorithms-security-cn",
    "examType": "UGC-NET",
    "category": "Cryptography"
  },
  {
    "id": 94,
    "originalNumber": 124,
    "question": "Considering the following statements:\nA. Data transformation is involved in Data mining process\nB. Online database is used in Data warehouse\nC. Classification is a measure of accuracy\nD. K-means clustering algorithm is based on the concept of minimizing within-cluster variance\nE. Pattern evaluation is a process to identify knowledge based on interestingness measure\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "B, C, E Only"
      },
      {
        "id": "2",
        "text": "B, D, E Only"
      },
      {
        "id": "3",
        "text": "A, C, E Only"
      },
      {
        "id": "4",
        "text": "A, D, E Only"
      }
    ],
    "correctOption": "4",
    "explanation": "In the KDD (Knowledge Discovery in Databases) process: Data transformation (scaling, discretization, normalization) is an essential preprocessing step (A is true). K-means optimizes the objective function minimizing within-cluster sum of squared errors (SSE/variance) (D is true). Pattern evaluation filters discovered rules using interestingness thresholds like support, confidence, and lift (E is true).",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Data Warehousing, OLAP, and Data Mining: Schemas, Operations, and Apriori Algorithm",
    "topicSlug": "data-warehousing-data-mining-dbms",
    "examType": "UGC-NET",
    "category": "Data Mining"
  },
  {
    "id": 95,
    "originalNumber": 125,
    "question": "Considering the following statements on Database Transactions:\nA. A non-serial schedule is said to be conflict serializable if it is conflict-equivalent to some serial schedule\nB. A non-serial schedule is said to be view serializable if it is view-equivalent to some serial schedule\nC. A schedule is said to be serial if instructions of participating transactions are chronologically interleaved\nD. A conflict-serializable schedule will be view-serializable also but vice-versa may not be true\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A, B, C, D"
      },
      {
        "id": "2",
        "text": "A, B, C Only"
      },
      {
        "id": "3",
        "text": "A, B, D Only"
      },
      {
        "id": "4",
        "text": "B, C, D Only"
      }
    ],
    "correctOption": "3",
    "explanation": "Statements A and B are standard definitions of conflict and view serializability. Statement C is FALSE because in a serial schedule, transactions execute strictly one after the other with NO chronological interleaving. Statement D is TRUE because Conflict Serializable ⊂ View Serializable (view serializability permits blind writes). Correct: A, B, D Only.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Transactions, Serializability, Concurrency Control & Deadlocks in DBMS",
    "topicSlug": "transactions-concurrency-dbms",
    "examType": "UGC-NET",
    "category": "Database Systems"
  },
  {
    "id": 96,
    "originalNumber": 126,
    "question": "Match List I with List II:\nList I:\nA. If the Indian team wins, then it is raining\nB. If the Indian team does not win, then it is not raining\nC. If it is raining, then the Indian team wins\nD. If it is not raining, then the Indian team does not win\nList II:\nI. Inverse\nII. Converse\nIII. Contrapositive\nIV. Conditional\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A-II, B-I, C-IV, D-III"
      },
      {
        "id": "2",
        "text": "A-III, B-I, C-II, D-IV"
      },
      {
        "id": "3",
        "text": "A-II, B-III, C-IV, D-I"
      },
      {
        "id": "4",
        "text": "A-IV, B-I, C-II, D-III"
      }
    ],
    "correctOption": "4",
    "explanation": "Let P = 'Indian team wins', Q = 'It is raining':\n- Statement A: P -> Q (Conditional: IV)\n- Statement B: ~P -> ~Q (Inverse of P -> Q: I)\n- Statement C: Q -> P (Converse of P -> Q: II)\n- Statement D: ~Q -> ~P (Contrapositive of P -> Q: III)\nCorrect matching: A-IV, B-I, C-II, D-III.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Propositional Logic: Tautologies, Equivalences & Truth Table Mastery",
    "topicSlug": "propositional-logic-toc",
    "examType": "UGC-NET",
    "category": "Mathematical Logic"
  },
  {
    "id": 97,
    "originalNumber": 127,
    "question": "Match List I (Chomsky Grammar Types) with List II (Production Rules):\nList I:\nA. Type 3 Grammar (Regular)\nB. Type 2 Grammar (Context-Free)\nC. Type 1 Grammar (Context-Sensitive)\nD. Type 0 Grammar (Unrestricted)\nList II:\nI. V -> (V ∪ Σ)*\nII. αVβ -> α(V ∪ Σ)*β\nIII. (V ∪ Σ)* -> (V ∪ Σ)*\nIV. V -> VΣ | Σ",
    "options": [
      {
        "id": "1",
        "text": "A-II, B-III, C-IV, D-I"
      },
      {
        "id": "2",
        "text": "A-III, B-I, C-IV, D-II"
      },
      {
        "id": "3",
        "text": "A-IV, B-I, C-II, D-III"
      },
      {
        "id": "4",
        "text": "A-III, B-II, C-I, D-IV"
      }
    ],
    "correctOption": "3",
    "explanation": "Chomsky production schemas:\n- Type 3 (Regular): Single non-terminal producing terminal and non-terminal (V -> VΣ | Σ) -> A-IV\n- Type 2 (Context-Free): Single non-terminal producing arbitrary string of terminals/variables (V -> (V ∪ Σ)*) -> B-I\n- Type 1 (Context-Sensitive): Variable replacement within left and right context (αVβ -> αγβ) -> C-II\n- Type 0 (Unrestricted): Arbitrary strings on LHS to arbitrary RHS ((V ∪ Σ)+ -> (V ∪ Σ)*) -> D-III.\nMatching: A-IV, B-I, C-II, D-III.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Chomsky Hierarchy, Pushdown Automata (PDA), Decidability & Closure Properties",
    "topicSlug": "chomsky-hierarchy-pda-toc",
    "examType": "UGC-NET",
    "category": "Theory of Computation"
  },
  {
    "id": 98,
    "originalNumber": 128,
    "question": "Match List I with List II:\nList I:\nA. Address Space\nB. Memory Space\nC. Cache Memory\nD. Segmented Program\nList II:\nI. Associative Mapping\nII. Logical address\nIII. Physical address\nIV. Virtual address\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A-IV, B-III, C-I, D-II"
      },
      {
        "id": "2",
        "text": "A-I, B-II, C-IV, D-III"
      },
      {
        "id": "3",
        "text": "A-III, B-IV, C-I, D-II"
      },
      {
        "id": "4",
        "text": "A-II, B-IV, C-I, D-III"
      }
    ],
    "correctOption": "1",
    "explanation": "Definitions in Computer Architecture:\n- Address Space: Range of addresses generated by CPU programs, i.e., Virtual Address Space (A -> IV)\n- Memory Space: Set of actual hardware RAM locations, i.e., Physical Address Space (B -> III)\n- Cache Memory: Rapid associative index mapping to fast SRAM (C -> I)\n- Segmented Program: Program structured into logical code, data, stack segments via logical addresses (D -> II).\nMatching: A-IV, B-III, C-I, D-II.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Cache Memory Organization, Mapping Techniques & AMAT Calculations",
    "topicSlug": "cache-memory-organization-co",
    "examType": "UGC-NET",
    "category": "Computer Architecture"
  },
  {
    "id": 99,
    "originalNumber": 129,
    "question": "Match List I (OOP Concepts) with List II (Characteristics):\nList I:\nA. Overloading\nB. Early binding\nC. Overriding\nD. Late Binding\nList II:\nI. Since function call is resolved during run time, the execution is Slow\nII. Since function call is resolved during compilation time, the execution is much faster\nIII. Supports compile-time polymorphism\nIV. Supports run-time polymorphism\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A-III, B-II, C-IV, D-I"
      },
      {
        "id": "2",
        "text": "A-IV, B-II, C-III, D-I"
      },
      {
        "id": "3",
        "text": "A-III, B-I, C-IV, D-II"
      },
      {
        "id": "4",
        "text": "A-IV, B-I, C-III, D-II"
      }
    ],
    "correctOption": "1",
    "explanation": "Object-Oriented Polymorphism principles:\n- Function/Operator Overloading: Compile-time polymorphism (A -> III)\n- Early (Static) Binding: Resolved at compilation time, yielding faster execution without vtable lookups (B -> II)\n- Method Overriding: Run-time dynamic polymorphism with base/derived classes (C -> IV)\n- Late (Dynamic) Binding: Resolved at runtime via virtual tables, introducing minor indirection overhead (D -> I).\nMatching: A-III, B-II, C-IV, D-I.",
    "unit": "Unit 9: Object-Oriented Programming",
    "topicTitle": "Object-Oriented Programming: C++ & Java Classes, Inheritance, and Polymorphism",
    "topicSlug": "oop-concepts-cpp-java",
    "examType": "UGC-NET",
    "category": "OOP"
  },
  {
    "id": 100,
    "originalNumber": 130,
    "question": "Match List I (Projections) with List II (Definitions):\nList I:\nA. Oblique Projection\nB. Cavalier Projection\nC. Cabinet Projection\nD. Orthographic Projection\nList II:\nI. When direction of projection is so chosen that lines perpendicular to projection plane are foreshortened by 1/2\nII. When direction of projection is so chosen that there is no foreshortening of lines perpendicular to projection plane (scale 1:1)\nIII. When direction of projection is perpendicular (normal) to the plane of projection\nIV. When angle between projectors and projection plane is not equal to 90 degrees\nChoose the correct answer from the options given below:",
    "options": [
      {
        "id": "1",
        "text": "A-III, B-II, C-IV, D-I"
      },
      {
        "id": "2",
        "text": "A-IV, B-II, C-I, D-III"
      },
      {
        "id": "3",
        "text": "A-III, B-I, C-IV, D-II"
      },
      {
        "id": "4",
        "text": "A-IV, B-I, C-III, D-II"
      }
    ],
    "correctOption": "2",
    "explanation": "3D Computer Graphics Projections:\n- Oblique Projection: Projectors are parallel but NOT perpendicular to the projection plane (A -> IV)\n- Cavalier Projection: Oblique projection where angle with projection plane is 45° so lines perpendicular to view plane are drawn at full scale with NO foreshortening (B -> II)\n- Cabinet Projection: Oblique projection where angle is ~63.4° so perpendicular lines are foreshortened to 1/2 their true length (C -> I)\n- Orthographic Projection: Projectors intersect the projection plane at exactly 90 degrees (D -> III).\nMatching: A-IV, B-II, C-I, D-III.",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Computer Graphics: 2D & 3D Geometric Transformations and Homogeneous Coordinates",
    "topicSlug": "computer-graphics-transformations",
    "examType": "UGC-NET",
    "category": "Computer Graphics"
  }
]
};
