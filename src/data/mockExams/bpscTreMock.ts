import { MockExam } from "./types";

/**
 * BPSC TRE 4.0 Computer Science Official Mock Examination
 * Based on Authentic Question Paper from BPSC TRE 3.0 (Class 11-12 Uchcha Madhyamik)
 * Subject Code: 13/HV/M-2024-26/HS-526-E (Computer Science)
 *
 * Full 150 Questions with Signature BPSC 5-Option Format:
 * - Part I: Language Qualifying (Q1 to Q30) — English (Q1–Q8) & Hindi (Q9–Q30)
 * - Part II: General Studies (Q31 to Q70) — Elementary Math, Physics, Bio, INM & Bihar History
 * - Part III: Computer Science (Q71 to Q150) — Full 15 Syllabus Units mapped to authentic CS modules
 */
export const BPSC_TRE_MOCK_EXAM: MockExam = {
  id: "bpsc-tre-4",
  title: "BPSC TRE 4.0 Computer Science Official Mock Examination",
  subtitle: "Official TRE 3.0 Paper (Class 11-12 Higher Secondary) — Full 150 Questions with Solutions",
  examType: "BPSC-TRE",
  date: "Official TRE 3.0 (Series E)",
  totalQuestions: 150,
  durationMinutes: 150,
  totalMarks: 150,
  description: "Authentic Bihar Public Service Commission (BPSC) School Teacher Examination (TRE) Class 11-12 Computer Science paper. Features the signature BPSC 5-option format (A, B, C, D-More than one of the above, E-None of the above) across Language (30 Qs), General Studies (40 Qs), and domain Computer Science (80 Qs) with direct syllabus topic mappings.",
  syllabusCovered: [
    "Part I: Language Qualifying (English & Hindi)",
    "Part II: General Studies (Elementary Math, General Science, INM, Geography, Bihar GK)",
    "Unit 1: Digital Logic & Discrete Structures",
    "Unit 2: Computer Organization & Architecture",
    "Unit 3: Programming & Data Structures (C/C++, Trees, Stacks, Queues)",
    "Unit 4: Algorithms (Searching, Sorting, Big-O, NP-Completeness)",
    "Unit 5: Operating System (Scheduling, Virtual Memory, Paging, Disk FCFS)",
    "Unit 6: Database Management System (SQL, Normalization, Keys, Distributed DBMS)",
    "Unit 7: Computer Networks (OSI, TCP/IP, Subnetting, Routing, Protocols)",
    "Unit 8: Software Engineering (SDLC, Testing, V&V, Prototyping)",
    "Unit 9: Object-Oriented Programming (OOP Pillars, Java Inheritance, Access Modifiers)",
    "Unit 10: Web-Based Application Development (HTML5, Backend Architecture)",
    "Unit 11: Theory of Computation (Turing Machines, Undecidability, Halting Problem)",
    "Unit 12: Internet of Things (IoT Protocols, MQTT, BLE)",
    "Unit 13: Artificial Intelligence (Search, Supervised Learning, Decision Trees)",
    "Unit 14: Fundamentals of E-Commerce (B2C, C2C Models)",
    "Unit 15: Computer Graphics & Multimedia (Authoring Tools, Formats)"
  ],
  questions: [
  {
    "id": 1,
    "originalNumber": 1,
    "question": "Read the passage and answer: 'Kerala is just the place for you if you love variety. There is something here to please everyone. You are sure to fall in love with the serene beauty of Kerala\\'s magical backwaters...'\n\nWhy is Kerala just the place for you if you love variety?",
    "options": [
      {
        "id": "A",
        "text": "There is something here to please everyone"
      },
      {
        "id": "B",
        "text": "Kerala has magical backwaters"
      },
      {
        "id": "C",
        "text": "Kerala is very boring"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "According to the opening lines of the passage: 'Kerala is just the place for you if you love variety. There is something here to please everyone.'",
    "unit": "Part I: Language (English)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 2,
    "originalNumber": 2,
    "question": "According to the passage, why should you take a trip to the spice gardens in the hills?",
    "options": [
      {
        "id": "A",
        "text": "To count the spices that are grown there"
      },
      {
        "id": "B",
        "text": "To buy some spices"
      },
      {
        "id": "C",
        "text": "To inhale the fragrance of fresh cardamoms"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The passage explicitly advises: 'Better still, take a trip to the spice gardens in the hills, to inhale the fragrance of fresh cardamoms...'",
    "unit": "Part I: Language (English)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 3,
    "originalNumber": 3,
    "question": "According to the passage, what is Kerala's cuisine known for?",
    "options": [
      {
        "id": "A",
        "text": "For its bad taste"
      },
      {
        "id": "B",
        "text": "For being bland"
      },
      {
        "id": "C",
        "text": "For its spicy hot flavours"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The text states: 'Kerala\\'s cuisine is known for its spicy hot flavours.'",
    "unit": "Part I: Language (English)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 4,
    "originalNumber": 4,
    "question": "What gives seafood in Kerala its pungency?",
    "options": [
      {
        "id": "A",
        "text": "Coconut and spices"
      },
      {
        "id": "B",
        "text": "Coconut & spices enhanced by tamarind"
      },
      {
        "id": "C",
        "text": "Addition of cocacola"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "The passage states: 'The coconut and the spices give the food - especially the seafood a pungency that is enhanced by tamarind.'",
    "unit": "Part I: Language (English)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 5,
    "originalNumber": 5,
    "question": "Why would foreign bargain-hunter visitors never face a problem in Kerala?",
    "options": [
      {
        "id": "A",
        "text": "Many foreign languages are spoken in Kerala"
      },
      {
        "id": "B",
        "text": "Hindi is the language of communication in the cities of kerala."
      },
      {
        "id": "C",
        "text": "English is spoken and understood everywhere in Kerala."
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The passage confirms: 'Bargain-hunters will never have a problem since English is spoken and understood everywhere in Kerala.'",
    "unit": "Part I: Language (English)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 6,
    "originalNumber": 6,
    "question": "Fill in the blank with suitable article: 'If you reach _____ Airport on time, you will catch the flight.'",
    "options": [
      {
        "id": "A",
        "text": "a"
      },
      {
        "id": "B",
        "text": "an"
      },
      {
        "id": "C",
        "text": "the"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The definite article 'the' is required because a specific airport from which the flight departs is being referred to in the context of catching the flight.",
    "unit": "Part I: Language (English)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 7,
    "originalNumber": 7,
    "question": "Fill in the blank with suitable article: 'You should go for ____ early morning walk.'",
    "options": [
      {
        "id": "A",
        "text": "the"
      },
      {
        "id": "B",
        "text": "a"
      },
      {
        "id": "C",
        "text": "an"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The adjective 'early' begins with an initial vowel sound (/ɜːr/), so the indefinite article 'an' must precede it.",
    "unit": "Part I: Language (English)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 8,
    "originalNumber": 8,
    "question": "If 30th April is Tuesday, what day of the week would be 10th May?",
    "options": [
      {
        "id": "A",
        "text": "Monday"
      },
      {
        "id": "B",
        "text": "Thursday"
      },
      {
        "id": "C",
        "text": "Saturday"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "April has 30 days. If 30th April is Tuesday: 1st May is Wednesday; 8th May is Wednesday (7 days later); 9th May is Thursday; 10th May is Friday. Since Friday is not among options (A) Monday, (B) Thursday, or (C) Saturday, the correct answer is (E) None of the above.",
    "unit": "Part I: Language (English)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 9,
    "originalNumber": 9,
    "question": "गद्यांश आधारित प्रश्न: 'रतन और अजय एक ही स्कूल के छात्र थे। रतन गरीब था और अजय धनी... एक बार रतन से नाराज होकर अजय भाग रहा था। रतन ने दौड़कर अजय को रोकना चाहा। इतने ही में एक मोटर के नीचे वह गिर गया।'\n\nरतन ने दौड़कर अजय को क्यों रोकना चाहा?",
    "options": [
      {
        "id": "A",
        "text": "रतन अजय से प्यार करता था"
      },
      {
        "id": "B",
        "text": "रतन और अजय एक ही स्कूल में पढ़ते थे"
      },
      {
        "id": "C",
        "text": "एक बार रतन से नाराज होकर अजय भाग रहा था"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "C",
    "explanation": "गद्यांश में स्पष्ट उल्लेख है: 'एक बार रतन से नाराज होकर अजय भाग रहा था। रतन ने दौड़कर अजय को रोकना चाहा।'",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 10,
    "originalNumber": 10,
    "question": "रतन अजय को अच्छा छात्र बनने के लिए क्यों सलाह देता था?",
    "options": [
      {
        "id": "A",
        "text": "दिली दोस्त होने के कारण"
      },
      {
        "id": "B",
        "text": "एक स्कूल में पढ़ने के कारण"
      },
      {
        "id": "C",
        "text": "भाई होने के कारण"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "A",
    "explanation": "गद्यांश के अनुसार: 'रतन और अजय दिली दोस्त थे। इसलिए रतन अजय को अच्छा छात्र बनने के लिए सलाह देता था।'",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 11,
    "originalNumber": 11,
    "question": "रतन कैसा छात्र था?",
    "options": [
      {
        "id": "A",
        "text": "गरीब"
      },
      {
        "id": "B",
        "text": "पढ़ने में तेज"
      },
      {
        "id": "C",
        "text": "समझदार"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "D",
    "explanation": "गद्यांश के अनुसार: 'रतन गरीब था...' और 'रतन गरीब होकर भी पढ़ने में तेज था।' चूंकि A (गरीब) और B (पढ़ने में तेज) दोनों सत्य हैं, अतः उत्तर (D) उपर्युक्त में से एक से अधिक है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 12,
    "originalNumber": 12,
    "question": "रतन और अजय आपस में क्या थे?",
    "options": [
      {
        "id": "A",
        "text": "दोस्त"
      },
      {
        "id": "B",
        "text": "दिली दोस्त"
      },
      {
        "id": "C",
        "text": "भाई"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "D",
    "explanation": "गद्यांश में दोनों को 'दोस्त' तथा विशेष रूप से 'दिली दोस्त' कहा गया है। दोनों विकल्प सही होने के कारण उत्तर (D) उपर्युक्त में से एक से अधिक है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 13,
    "originalNumber": 13,
    "question": "सभी शिक्षक रतन से क्यों प्रसन्न रहते थे?",
    "options": [
      {
        "id": "A",
        "text": "रतन की निर्धनता के कारण"
      },
      {
        "id": "B",
        "text": "रतन के परिश्रमी होने के कारण"
      },
      {
        "id": "C",
        "text": "रतन के व्यवहार के कारण"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "C",
    "explanation": "गद्यांश के अनुसार: 'सभी शिक्षक उसके व्यवहार से प्रसन्न रहते थे।'",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 14,
    "originalNumber": 14,
    "question": "अजय किस काम में अधिक ध्यान लगाता था?",
    "options": [
      {
        "id": "A",
        "text": "झगड़ने में"
      },
      {
        "id": "B",
        "text": "पढ़ने में"
      },
      {
        "id": "C",
        "text": "दौड़ने में"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "E",
    "explanation": "गद्यांश में उल्लिखित है कि अजय 'पढ़ने के बदले खेलने-कूदने और बदमाशी में अधिक ध्यान लगाता था'। खेलने-कूदने व बदमाशी विकल्पों में नहीं दिया गया है, अतः सही उत्तर (E) उपर्युक्त में से कोई नहीं है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 15,
    "originalNumber": 15,
    "question": "गद्यांश आधारित प्रश्न: 'शिवाजी भारत के महान् वीरों में से एक थे... वे केवल वीर ही नहीं, बल्कि एक अच्छे राजनीतिज्ञ भी थे।'\n\nशिवाजी वीर होने के साथ और क्या थे?",
    "options": [
      {
        "id": "A",
        "text": "एक अच्छे राजनीतिज्ञ"
      },
      {
        "id": "B",
        "text": "श्रेष्ठ विचारक"
      },
      {
        "id": "C",
        "text": "कुशल सम्राट"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "A",
    "explanation": "गद्यांश के अनुसार: 'वे केवल वीर ही नहीं, बल्कि एक अच्छे राजनीतिज्ञ भी थे।'",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 16,
    "originalNumber": 16,
    "question": "शिवाजी ने लोगों में कौन-सी भावना भर दी?",
    "options": [
      {
        "id": "A",
        "text": "हिन्दुत्व की"
      },
      {
        "id": "B",
        "text": "एक राष्ट्र की"
      },
      {
        "id": "C",
        "text": "वीरता की"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "B",
    "explanation": "गद्यांश के अनुसार: 'उन्होंने लोगों में एक राष्ट्र की भावना भर दी और मराठा राज्य की स्थापना की।'",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 17,
    "originalNumber": 17,
    "question": "शिवाजी कौन थे?",
    "options": [
      {
        "id": "A",
        "text": "भारत का पराक्रमी योद्धा"
      },
      {
        "id": "B",
        "text": "भारत के महान् वीरों में से एक"
      },
      {
        "id": "C",
        "text": "भारत का महान् सम्राट"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "B",
    "explanation": "गद्यांश की प्रथम पंक्ति है: 'शिवाजी भारत के महान् वीरों में से एक थे।'",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 18,
    "originalNumber": 18,
    "question": "लोग शिवाजी का आदर क्यों करते थे?",
    "options": [
      {
        "id": "A",
        "text": "उनकी वीरता के कारण"
      },
      {
        "id": "B",
        "text": "कट्टर हिन्दू होने के कारण"
      },
      {
        "id": "C",
        "text": "उनके अच्छे गुणों के कारण"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "C",
    "explanation": "गद्यांश में लिखा है: 'उनके अच्छे गुणों के कारण सभी लोग उनका आदर करते थे।'",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 19,
    "originalNumber": 19,
    "question": "इनमें 'राजनीतिज्ञ' शब्द का अर्थ है -",
    "options": [
      {
        "id": "A",
        "text": "वह नीति जिससे राष्ट्र का संचालन होता है"
      },
      {
        "id": "B",
        "text": "वह नीति जिससे शासन का संचालन होता है"
      },
      {
        "id": "C",
        "text": "राजनीति से संबंधित नीति"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "E",
    "explanation": "'राजनीतिज्ञ' का अर्थ राजनीति का ज्ञाता अथवा कूटनीतिज्ञ/राजनेता (व्यक्ति) होता है। विकल्पों में दी गई परिभाषाएं 'राजनीति' (नीति) की हैं, राजनीतिज्ञ (व्यक्ति) की नहीं। अतः (E) उपर्युक्त में से कोई नहीं सही उत्तर है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 20,
    "originalNumber": 20,
    "question": "इनमें अपठित गद्यांश का सर्वाधिक उपयुक्त शीर्षक है -",
    "options": [
      {
        "id": "A",
        "text": "शिवाजी की राष्ट्रीय चेतना"
      },
      {
        "id": "B",
        "text": "शिवाजी का जीवन"
      },
      {
        "id": "C",
        "text": "शिवाजी का पराक्रम"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "B",
    "explanation": "गद्यांश छत्रपति शिवाजी के जीवन, चरित्र, शासन-कौशल और आदर्शों का समग्र निरूपण करता है ('हम लोगों को उनके जीवन से शिक्षा लेनी चाहिए'), अतः 'शिवाजी का जीवन' सर्वाधिक उपयुक्त शीर्षक है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 21,
    "originalNumber": 21,
    "question": "इनमें व्यक्तिवाचक संज्ञा है -",
    "options": [
      {
        "id": "A",
        "text": "नदी"
      },
      {
        "id": "B",
        "text": "गंगा"
      },
      {
        "id": "C",
        "text": "ब्रह्मपुत्र"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "D",
    "explanation": "'गंगा' और 'ब्रह्मपुत्र' दोनों विशिष्ट नदियों के नाम होने के कारण व्यक्तिवाचक संज्ञाएँ हैं, जबकि 'नदी' जातिवाचक संज्ञा है। अतः (D) उपर्युक्त में से एक से अधिक सही है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 22,
    "originalNumber": 22,
    "question": "इनमें उत्तमपुरुष सर्वनाम है -",
    "options": [
      {
        "id": "A",
        "text": "मैं"
      },
      {
        "id": "B",
        "text": "तू"
      },
      {
        "id": "C",
        "text": "वह"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "A",
    "explanation": "पुरुषवाचक सर्वनाम में वक्ता अपने लिए उत्तम पुरुष सर्वनाम ('मैं', 'हम') का प्रयोग करता है। 'तू' मध्यम पुरुष है तथा 'वह' अन्य पुरुष है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 23,
    "originalNumber": 23,
    "question": "\"दुकान पर कोई नहीं था।\" वाक्य में किस कारक का चिह्न प्रयुक्त हुआ है?",
    "options": [
      {
        "id": "A",
        "text": "अपादान कारक"
      },
      {
        "id": "B",
        "text": "संबंध कारक"
      },
      {
        "id": "C",
        "text": "अधिकरण कारक"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "C",
    "explanation": "संज्ञा या सर्वनाम के जिस रूप से क्रिया के आधार (स्थान/समय) का बोध हो, उसे अधिकरण कारक कहते हैं। इसके परसर्ग 'में' और 'पर' हैं। अतः 'दुकान पर' में अधिकरण कारक है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 24,
    "originalNumber": 24,
    "question": "इनमें तत्सम शब्द है -",
    "options": [
      {
        "id": "A",
        "text": "बच्चा"
      },
      {
        "id": "B",
        "text": "पुष्प"
      },
      {
        "id": "C",
        "text": "चौदह"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "B",
    "explanation": "'पुष्प' संस्कृत का तत्सम शब्द है (तद्भव 'फूल' होता है)। 'बच्चा' (तत्सम: वत्स) तथा 'चौदह' (तत्सम: चतुर्दश) तद्भव शब्द हैं।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 25,
    "originalNumber": 25,
    "question": "इनमें शुद्ध वर्तनी वाला शब्द है -",
    "options": [
      {
        "id": "A",
        "text": "निरपराधी"
      },
      {
        "id": "B",
        "text": "प्राणिक"
      },
      {
        "id": "C",
        "text": "महत्व"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "E",
    "explanation": "'निरपराधी' अशुद्ध है (शुद्ध रूप 'निरपराध' होता है); 'महत्व' अशुद्ध है (शुद्ध रूप 'महत्त्व' द्वित्व त् के साथ); 'प्राणिक' अशुद्ध है (शुद्ध रूप 'प्राणि'/'प्राणी')। अतः तीनों अशुद्ध हैं, सही विकल्प (E) उपर्युक्त में से कोई नहीं है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 26,
    "originalNumber": 26,
    "question": "इनमें 'उत्कृष्ट' शब्द का विपरीतार्थक शब्द है -",
    "options": [
      {
        "id": "A",
        "text": "निकृष्ट"
      },
      {
        "id": "B",
        "text": "अधम"
      },
      {
        "id": "C",
        "text": "नीच"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "A",
    "explanation": "'उत्कृष्ट' का विलोम शब्द 'निकृष्ट' होता है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 27,
    "originalNumber": 27,
    "question": "इनमें शुद्ध वाक्य है -",
    "options": [
      {
        "id": "A",
        "text": "किसी भी आदमी को भेज दो"
      },
      {
        "id": "B",
        "text": "हम तो अवश्य जायेंगे"
      },
      {
        "id": "C",
        "text": "यह कविता अनेक भाव प्रकट करती है"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "C",
    "explanation": "'यह कविता अनेक भाव प्रकट करती है' व्याकरण एवं अर्थ की दृष्टि से सर्वथा शुद्ध वाक्य है। विकल्प A में 'भी' का अनावश्यक प्रयोग है तथा B में 'तो' व 'अवश्य' का दोहराव त्रुटिपूर्ण है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 28,
    "originalNumber": 28,
    "question": "इनमें 'जल' शब्द का पर्यायवाची शब्द है -",
    "options": [
      {
        "id": "A",
        "text": "जीवन"
      },
      {
        "id": "B",
        "text": "अमृत"
      },
      {
        "id": "C",
        "text": "पानी"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "D",
    "explanation": "हिंदी में 'पानी', 'जीवन' (जल ही जीवन है/जल का अनेकार्थी पर्यायवाची) तथा 'अमृत' (पीयूष/जल) सभी संदर्भानुसार जल के पर्यायवाची माने जाते हैं। अतः (D) उपर्युक्त में से एक से अधिक सही है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 29,
    "originalNumber": 29,
    "question": "\"जहाँ लोगों का मिलन हो\" वाक्यांश के लिए एक शब्द है -",
    "options": [
      {
        "id": "A",
        "text": "मेला"
      },
      {
        "id": "B",
        "text": "सम्मेलन"
      },
      {
        "id": "C",
        "text": "मेल"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "B",
    "explanation": "जहाँ लोगों का औपचारिक या वैचारिक मिलन/एकत्रीकरण हो, उस सभा या मिलन को 'सम्मेलन' कहते हैं।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 30,
    "originalNumber": 30,
    "question": "\"खटाई में पड़ना\" मुहावरे का अर्थ है -",
    "options": [
      {
        "id": "A",
        "text": "झमेले में पड़ना"
      },
      {
        "id": "B",
        "text": "चैन मिलना"
      },
      {
        "id": "C",
        "text": "विघ्न आना"
      },
      {
        "id": "D",
        "text": "उपर्युक्त में से एक से अधिक"
      },
      {
        "id": "E",
        "text": "उपर्युक्त में से कोई नहीं"
      }
    ],
    "correctOption": "D",
    "explanation": "'खटाई में पड़ना' मुहावरे का अर्थ कार्य में अड़चन या विघ्न आना तथा किसी मामले का झमेले/अनिश्चय में लटक जाना होता है। A और C दोनों अर्थ सटीक होने के कारण सही उत्तर (D) उपर्युक्त में से एक से अधिक है।",
    "unit": "Part I: Language (Hindi)",
    "category": "Language (Qualifying)",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 31,
    "originalNumber": 31,
    "question": "Which of the following is the algebraic expansion of (x + 1/x)^2?",
    "options": [
      {
        "id": "A",
        "text": "x^2 + 1/x^2"
      },
      {
        "id": "B",
        "text": "x^2 - 1/x^2"
      },
      {
        "id": "C",
        "text": "x^2 + 1/x^2 + 1"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "Using the algebraic identity (a + b)^2 = a^2 + 2ab + b^2 with a = x and b = 1/x, we get (x + 1/x)^2 = x^2 + 2(x)(1/x) + 1/x^2 = x^2 + 1/x^2 + 2. None of options A, B, or C contains '+ 2', so the correct answer is (E) None of the above.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 32,
    "originalNumber": 32,
    "question": "An article is marked at 10% more than the Cost Price (CP). If a discount of 10% is allowed on the marked price, then which of the following is correct?",
    "options": [
      {
        "id": "A",
        "text": "1% gain"
      },
      {
        "id": "B",
        "text": "1% loss"
      },
      {
        "id": "C",
        "text": "no gain no loss"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Let CP = 100. Marked Price (MP) = 100 + 10 = 110. A discount of 10% on MP = 10% of 110 = 11. Selling Price (SP) = 110 - 11 = 99. Loss = CP - SP = 100 - 99 = 1, which represents a 1% loss.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 33,
    "originalNumber": 33,
    "question": "By what smallest natural number should 81 be divided to obtain a perfect cube?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Prime factorizing 81 gives 81 = 3 * 3 * 3 * 3 = 3^4. A perfect cube requires powers of prime factors to be multiples of 3. Dividing 81 by 3 yields 81 / 3 = 27 = 3^3, which is a perfect cube.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 34,
    "originalNumber": 34,
    "question": "The difference between two whole numbers is 66. The ratio of the two numbers is 2:5. The two numbers are:",
    "options": [
      {
        "id": "A",
        "text": "60 and 6"
      },
      {
        "id": "B",
        "text": "100 and 33"
      },
      {
        "id": "C",
        "text": "110 and 44"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Let the numbers be 2x and 5x. Their difference is 5x - 2x = 3x = 66 => x = 22. Thus, the smaller number is 2(22) = 44, and the larger number is 5(22) = 110.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 35,
    "originalNumber": 35,
    "question": "In a parallelogram ABCD, adjacent angles ∠A and ∠B are in the ratio 1:2. Find the measure of ∠A.",
    "options": [
      {
        "id": "A",
        "text": "30°"
      },
      {
        "id": "B",
        "text": "45°"
      },
      {
        "id": "C",
        "text": "60°"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "In any parallelogram, adjacent angles are supplementary: ∠A + ∠B = 180°. Given ∠A:∠B = 1:2, let ∠A = x and ∠B = 2x. Then x + 2x = 3x = 180° => x = 60°. Therefore, ∠A = 60°.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 36,
    "originalNumber": 36,
    "question": "The height of a right circular cylinder whose radius is 7 cm and total surface area is 968 cm^2 is:",
    "options": [
      {
        "id": "A",
        "text": "15 cm"
      },
      {
        "id": "B",
        "text": "17 cm"
      },
      {
        "id": "C",
        "text": "19 cm"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Total surface area of a cylinder = 2πr(h + r). Substituting r = 7 cm and π = 22/7: 2 * (22/7) * 7 * (h + 7) = 968 => 44 * (h + 7) = 968 => h + 7 = 968 / 44 = 22 => h = 22 - 7 = 15 cm.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 37,
    "originalNumber": 37,
    "question": "If (-3)^(m+1) × (-3)^5 = (-3)^7, then the value of m is:",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Using exponent product rule a^p × a^q = a^(p+q), (-3)^((m+1)+5) = (-3)^7 => (-3)^(m+6) = (-3)^7. Equating powers: m + 6 = 7 => m = 1.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 38,
    "originalNumber": 38,
    "question": "If two quantities x and y are inversely proportional, then which of the following relationships holds true?",
    "options": [
      {
        "id": "A",
        "text": "y/x = constant"
      },
      {
        "id": "B",
        "text": "xy = constant"
      },
      {
        "id": "C",
        "text": "x/y = constant"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "By definition of inverse variation, y ∝ 1/x, which directly implies x × y = k (where k is a non-zero constant).",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 39,
    "originalNumber": 39,
    "question": "A piece of wire of resistance R is cut into 5 equal parts. These parts are then connected in parallel. If the equivalent resistance of the combination is R', then the ratio R/R' is:",
    "options": [
      {
        "id": "A",
        "text": "1/25"
      },
      {
        "id": "B",
        "text": "1/5"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Each of the 5 pieces has resistance r = R/5. When 5 identical resistors of value R/5 are connected in parallel, the equivalent resistance is R' = r / 5 = (R/5) / 5 = R / 25. Therefore, R / R' = R / (R/25) = 25.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 40,
    "originalNumber": 40,
    "question": "An electric heater of resistance 8 Ω draws a 15 A current from service mains for 2 hours. What will be the rate at which heat is developed in the heater?",
    "options": [
      {
        "id": "A",
        "text": "220 watt"
      },
      {
        "id": "B",
        "text": "120 watt"
      },
      {
        "id": "C",
        "text": "210 watt"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "The rate at which heat is developed is power P = I^2 × R. With I = 15 A and R = 8 Ω: P = 15^2 × 8 = 225 × 8 = 1800 W (Joules/sec). Since 1800 W is not among the options (A: 220 W, B: 120 W, C: 210 W), the correct answer is (E) None of the above.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 41,
    "originalNumber": 41,
    "question": "Which of the following lenses would you prefer to use while reading small letters found in a dictionary?",
    "options": [
      {
        "id": "A",
        "text": "A convex lens of focal length 50 cm"
      },
      {
        "id": "B",
        "text": "A concave lens of focal length 50 cm"
      },
      {
        "id": "C",
        "text": "A concave lens of focal length 5 cm"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "For reading small print with high magnification, a convex (converging) lens of short focal length (e.g. 5 cm) is required (Magnification m ≈ 1 + D/f). The options only list a convex lens of 50 cm (very low magnification) and concave lenses (which produce diminished images). A convex lens of 5 cm is not listed, so (E) None of the above is the correct official answer.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 42,
    "originalNumber": 42,
    "question": "The human eye forms the image of an object at its:",
    "options": [
      {
        "id": "A",
        "text": "Cornea"
      },
      {
        "id": "B",
        "text": "Iris"
      },
      {
        "id": "C",
        "text": "Retina"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The light entering the eye is refracted by the cornea and lens to converge and form a real, inverted image on the light-sensitive retina.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 43,
    "originalNumber": 43,
    "question": "Which of the following is NOT a part of the female reproductive system in human beings?",
    "options": [
      {
        "id": "A",
        "text": "Ovary"
      },
      {
        "id": "B",
        "text": "Uterus"
      },
      {
        "id": "C",
        "text": "Vas deferens"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The vas deferens is a duct that transports sperm from the epididymis to the ejaculatory ducts, forming a key part of the male reproductive system.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 44,
    "originalNumber": 44,
    "question": "The anther of a flower contains:",
    "options": [
      {
        "id": "A",
        "text": "Sepals"
      },
      {
        "id": "B",
        "text": "Ovules"
      },
      {
        "id": "C",
        "text": "Pollen grains"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The stamen is the male reproductive part of a plant consisting of a filament and an anther. The anther produces and stores pollen grains (microspores).",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 45,
    "originalNumber": 45,
    "question": "Asexual reproduction takes place through budding in:",
    "options": [
      {
        "id": "A",
        "text": "Amoeba"
      },
      {
        "id": "B",
        "text": "Yeast"
      },
      {
        "id": "C",
        "text": "Plasmodium"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Budding is a form of asexual reproduction characteristic of Yeast and Hydra, where a new organism develops from an outgrowth or bud due to cell division at one particular site. Amoeba reproduces by binary fission and Plasmodium by multiple fission.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 46,
    "originalNumber": 46,
    "question": "Which one of the following types of medicines is used for treating indigestion caused by excess stomach acid?",
    "options": [
      {
        "id": "A",
        "text": "Antibiotic"
      },
      {
        "id": "B",
        "text": "Antacid"
      },
      {
        "id": "C",
        "text": "Analgesic"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Antacids (such as magnesium hydroxide/milk of magnesia and aluminium hydroxide) are basic compounds that neutralize excess hydrochloric acid in the stomach.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 47,
    "originalNumber": 47,
    "question": "The task of physically accepting and processing citizenship document verifications under the Citizenship Amendment Act (CAA) portal rules is assigned primarily via:",
    "options": [
      {
        "id": "A",
        "text": "Postal Department"
      },
      {
        "id": "B",
        "text": "Census Department"
      },
      {
        "id": "C",
        "text": "Central Security IB"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Under the CAA 2024 implementation framework, the Department of Posts (Postal Department / post offices) acts as the physical nodal verification center for document submission and biometric verification.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 48,
    "originalNumber": 48,
    "question": "In which of the following countries did India officially launch its Unified Payments Interface (UPI) cross-border services in early 2024?",
    "options": [
      {
        "id": "A",
        "text": "Thailand"
      },
      {
        "id": "B",
        "text": "Myanmar"
      },
      {
        "id": "C",
        "text": "Mauritius"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "India officially launched UPI and RuPay card services in Mauritius and Sri Lanka via video conferencing on February 12, 2024.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 49,
    "originalNumber": 49,
    "question": "What is the name of the crewed human spaceflight spacecraft project by ISRO designed to carry Indian astronauts into Low Earth Orbit?",
    "options": [
      {
        "id": "A",
        "text": "Akashyan"
      },
      {
        "id": "B",
        "text": "Gaganyaan"
      },
      {
        "id": "C",
        "text": "Bhramyan"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Gaganyaan ('Celestial Vehicle') is India\\'s maiden human spaceflight programme by ISRO aiming to demonstrate human spaceflight capability to Low Earth Orbit (LEO).",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 50,
    "originalNumber": 50,
    "question": "Which country is currently NOT a member of the Group of Seven (G7)?",
    "options": [
      {
        "id": "A",
        "text": "Russia"
      },
      {
        "id": "B",
        "text": "Canada"
      },
      {
        "id": "C",
        "text": "USA"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "The G7 consists of the US, UK, Canada, France, Germany, Italy, and Japan. Russia was suspended indefinitely in 2014 following its annexation of Crimea, returning the forum to the G7.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 51,
    "originalNumber": 51,
    "question": "The primary clean process involved in producing Green Hydrogen using renewable electricity is:",
    "options": [
      {
        "id": "A",
        "text": "Electrolysis"
      },
      {
        "id": "B",
        "text": "Dehydrogenesis"
      },
      {
        "id": "C",
        "text": "Dehydration"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Green hydrogen is produced by water electrolysis—splitting water molecules into hydrogen and oxygen (2H2O -> 2H2 + O2) using renewable electricity (solar or wind) with zero carbon emissions.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 52,
    "originalNumber": 52,
    "question": "Which technology can be used to recreate the likeness, voice, and interactive persona of deceased individuals?",
    "options": [
      {
        "id": "A",
        "text": "Deepfake"
      },
      {
        "id": "B",
        "text": "AI (Artificial Intelligence)"
      },
      {
        "id": "C",
        "text": "Chatbot"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Both Artificial Intelligence (generative neural models), Deepfake voice/video synthesis, and AI conversational chatbots can be used together to recreate deceased personalities (digital resurrection / grief tech). Thus (D) More than one of the above is correct.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 53,
    "originalNumber": 53,
    "question": "In international Cost of Living Index rankings (lower living expense index / cheaper affordability), which neighboring country ranks lower (cheaper) than India?",
    "options": [
      {
        "id": "A",
        "text": "Nigeria"
      },
      {
        "id": "B",
        "text": "Pakistan"
      },
      {
        "id": "C",
        "text": "Bangladesh"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "In global cost-of-living indices (such as Numbeo 2024), Pakistan is ranked with a lower cost-of-living index than India, reflecting cheaper consumer price indices in local currency equivalents.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 54,
    "originalNumber": 54,
    "question": "Who among the following prominent leaders supported and assisted Mahatma Gandhi during the Champaran Satyagraha in 1917?",
    "options": [
      {
        "id": "A",
        "text": "Birsa Munda"
      },
      {
        "id": "B",
        "text": "Dr. Rajendra Prasad"
      },
      {
        "id": "C",
        "text": "Satya Narayan Sinha"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Dr. Rajendra Prasad, along with Acharya J.B. Kripalani, Mazharul Haque, Anugrah Narayan Sinha, and Brajkishore Prasad, accompanied and strongly assisted Mahatma Gandhi during the historic Champaran Satyagraha in 1917 against the Tinkathia system.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 55,
    "originalNumber": 55,
    "question": "Which planet in the Solar System has a surface most similar to Earth\\'s Moon in being heavily cratered, barren, and lacking a substantial atmosphere?",
    "options": [
      {
        "id": "A",
        "text": "Mercury"
      },
      {
        "id": "B",
        "text": "Mars"
      },
      {
        "id": "C",
        "text": "Earth"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Mercury has a heavily cratered, geologically inactive surface that closely resembles Earth\\'s Moon, with no significant atmosphere to retain heat or weather craters.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 56,
    "originalNumber": 56,
    "question": "On the basis of fossil discoveries (e.g. Australopithecus, Homo habilis), which region is recognized as the origin place of early human beings?",
    "options": [
      {
        "id": "A",
        "text": "Rift Valley of Africa"
      },
      {
        "id": "B",
        "text": "Central Asia"
      },
      {
        "id": "C",
        "text": "Jerusalem"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "The East African Great Rift Valley (including Olduvai Gorge in Tanzania, Hadar and Omo in Ethiopia) has yielded the oldest hominid fossil remains, establishing it as the cradle of humankind.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 57,
    "originalNumber": 57,
    "question": "In human geography in India, 'dry point settlements' are typically established in:",
    "options": [
      {
        "id": "A",
        "text": "Flood prone areas"
      },
      {
        "id": "B",
        "text": "Bikaner"
      },
      {
        "id": "C",
        "text": "Aravali region"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Dry point settlements are rural settlements situated on higher, dry ground within low-lying or flood-prone regions to escape recurrent inundation while staying near fertile water basins.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 58,
    "originalNumber": 58,
    "question": "In which district of Bihar is the production of Paddy (rice) the highest?",
    "options": [
      {
        "id": "A",
        "text": "Bhojpur"
      },
      {
        "id": "B",
        "text": "Rohtas"
      },
      {
        "id": "C",
        "text": "Nalanda"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Rohtas district is renowned as the 'Rice Bowl of Bihar' due to its extensive canal irrigation network from the Sone River and highest paddy production in the state.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 59,
    "originalNumber": 59,
    "question": "Tehran, the capital city of Iran, is situated at the foot of which mountain range?",
    "options": [
      {
        "id": "A",
        "text": "Alburz (Alborz)"
      },
      {
        "id": "B",
        "text": "Zagros"
      },
      {
        "id": "C",
        "text": "Makran"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Tehran is located in northern Iran, nestled at the southern foot of the majestic Alborz (Alburz) mountain range.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 60,
    "originalNumber": 60,
    "question": "Which of the following is traditionally designated in NCERT curricula as a prominent peak of the Eastern Ghats of India?",
    "options": [
      {
        "id": "A",
        "text": "Anai Mudi"
      },
      {
        "id": "B",
        "text": "Kanchenjunga"
      },
      {
        "id": "C",
        "text": "Mahendragiri"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Mahendragiri (1,501 m) in Odisha is prominently identified in Indian school geography textbooks as a major peak of the Eastern Ghats. (Anamudi is in Western Ghats, Kanchenjunga in the Himalayas).",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 61,
    "originalNumber": 61,
    "question": "Which of these is NOT considered a major valid driver of massive large-scale deforestation and habitat depletion compared to major infrastructure and clearing?",
    "options": [
      {
        "id": "A",
        "text": "Agricultural expansion"
      },
      {
        "id": "B",
        "text": "Large scale development projects"
      },
      {
        "id": "C",
        "text": "Grazing and fuel wood collection"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "According to environmental geography studies, traditional lopping for fuelwood and local grazing do not typically cause complete destruction of forest canopies, unlike commercial agricultural expansion and large river valley/mining projects.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 62,
    "originalNumber": 62,
    "question": "Which district of Bihar is known as the 'Silk City' and leads in silk textile production (Tussar silk)?",
    "options": [
      {
        "id": "A",
        "text": "Madhubani"
      },
      {
        "id": "B",
        "text": "Bhagalpur"
      },
      {
        "id": "C",
        "text": "Aurangabad"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Bhagalpur is universally renowned as the 'Silk City' (Resham Nagari) of Bihar, globally celebrated for its Bhagalpuri Tussar silk weaving.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 63,
    "originalNumber": 63,
    "question": "Who was the Viceroy of India during the tragic Jallianwala Bagh massacre on 13th April 1919?",
    "options": [
      {
        "id": "A",
        "text": "Lord Curzon"
      },
      {
        "id": "B",
        "text": "Lord Chelmsford"
      },
      {
        "id": "C",
        "text": "Lord Irwin"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Lord Chelmsford served as Viceroy of India from 1916 to 1921, during which the Rowlatt Act and Jallianwala Bagh massacre took place under his administration.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 64,
    "originalNumber": 64,
    "question": "The first President of the Indian National Congress (INC) at its inaugural session in Bombay (December 1885) was:",
    "options": [
      {
        "id": "A",
        "text": "Dadabhai Naoroji"
      },
      {
        "id": "B",
        "text": "W. C. Bonnerjee"
      },
      {
        "id": "C",
        "text": "Badruddin Tyabji"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Womesh Chandra Bonnerjee presided over the first session of the Indian National Congress held at Gokuldas Tejpal Sanskrit College, Bombay, attended by 72 delegates in December 1885.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 65,
    "originalNumber": 65,
    "question": "Who among the following revered leaders is known as the 'Grand Old Man of India'?",
    "options": [
      {
        "id": "A",
        "text": "Bal Gangadhar Tilak"
      },
      {
        "id": "B",
        "text": "Dadabhai Naoroji"
      },
      {
        "id": "C",
        "text": "Gopal Krishna Gokhale"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Dadabhai Naoroji—pioneering economist, author of 'Poverty and Un-British Rule in India', and thrice INC president—is honored as the 'Grand Old Man of India'.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 66,
    "originalNumber": 66,
    "question": "Which of the following mass national movements was launched under the direct leadership of Mahatma Gandhi?",
    "options": [
      {
        "id": "A",
        "text": "Quit India Movement"
      },
      {
        "id": "B",
        "text": "Non-Cooperation Movement"
      },
      {
        "id": "C",
        "text": "Swadeshi Movement"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Both the Non-Cooperation Movement (1920) and the Quit India Movement (1942) were launched under Mahatma Gandhi\\'s direct leadership. (Swadeshi movement was launched in 1905). Since both A and B are correct, the answer is (D) More than one of the above.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 67,
    "originalNumber": 67,
    "question": "Who was the supreme leader of the historic Bardoli Satyagraha (1928), where the local women bestowed upon him the title 'Sardar'?",
    "options": [
      {
        "id": "A",
        "text": "Sardar Vallabhbhai Patel"
      },
      {
        "id": "B",
        "text": "Bal Gangadhar Tilak"
      },
      {
        "id": "C",
        "text": "Jawaharlal Nehru"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Vallabhbhai Patel led the successful non-violent peasant resistance in Bardoli, Gujarat against excessive tax increments in 1928, after which he was honored with the title 'Sardar'.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 68,
    "originalNumber": 68,
    "question": "Who among the following was NOT directly associated with founding or leading the Home Rule Leagues in 1916?",
    "options": [
      {
        "id": "A",
        "text": "Annie Besant"
      },
      {
        "id": "B",
        "text": "Bal Gangadhar Tilak"
      },
      {
        "id": "C",
        "text": "Sarojini Naidu"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The Home Rule Movement was pioneered by Bal Gangadhar Tilak (Indian Home Rule League at Belgaum) and Annie Besant (All India Home Rule League at Madras) in 1916. Sarojini Naidu was not a founder or leader of the Home Rule Leagues.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 69,
    "originalNumber": 69,
    "question": "Who was elected as the first President of the Bihar Provincial Congress Committee formed in 1908?",
    "options": [
      {
        "id": "A",
        "text": "Dr. Rajendra Prasad"
      },
      {
        "id": "B",
        "text": "Anugrah Narayan Sinha"
      },
      {
        "id": "C",
        "text": "Jai Prakash Narayan"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "The Bihar Provincial Congress Committee was formed in 1908 at Patna with Nawab Sarfaraz Hussain Khan as President and Syed Hasan Imam as key leader. Dr. Rajendra Prasad and JP Narayan were not the founders/first presidents, so (E) None of the above is correct.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 70,
    "originalNumber": 70,
    "question": "The All India Kisan Sabha (AIKS) was established in 1936 under the presidential leadership of:",
    "options": [
      {
        "id": "A",
        "text": "Dr. Rajendra Prasad"
      },
      {
        "id": "B",
        "text": "Jai Prakash Narayan"
      },
      {
        "id": "C",
        "text": "Swami Sahajanand Saraswati"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The All India Kisan Sabha was founded at the Lucknow session of the Indian National Congress in April 1936 with Swami Sahajanand Saraswati as its first President and N. G. Ranga as General Secretary.",
    "unit": "Part II: General Studies",
    "category": "General Studies",
    "isGeneralPaper": true,
    "examType": "BPSC-TRE"
  },
  {
    "id": 71,
    "originalNumber": 71,
    "question": "A digital circuit or any Boolean function can be constructed by the repeated and exclusive use of which universal gate(s)?",
    "options": [
      {
        "id": "A",
        "text": "NAND gate"
      },
      {
        "id": "B",
        "text": "NOR gate"
      },
      {
        "id": "C",
        "text": "AND gate"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Both NAND and NOR gates are functionally complete 'universal logic gates' that can individually implement any basic Boolean operation (AND, OR, NOT) and complex combinational logic without any other gate type. Since both A and B are universal gates, the answer is (D) More than one of the above.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 72,
    "originalNumber": 72,
    "question": "Which of the following statements is correct regarding Digital Circuits?",
    "options": [
      {
        "id": "A",
        "text": "They use analog signals for communication"
      },
      {
        "id": "B",
        "text": "They process information using continuous voltage levels"
      },
      {
        "id": "C",
        "text": "They are not suitable for high speed operations"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "Digital circuits represent and process information using discrete binary voltage levels (0 and 1, LOW and HIGH), not continuous analog voltages, and they are extensively used for ultra-high-speed operations. None of the listed statements A, B, or C is correct, making (E) None of the above the right choice.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 73,
    "originalNumber": 73,
    "question": "Which of the following is an example of a digital electronic system?",
    "options": [
      {
        "id": "A",
        "text": "Computers"
      },
      {
        "id": "B",
        "text": "Mobile phones"
      },
      {
        "id": "C",
        "text": "Digital cameras"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Modern computers, smartphones, and digital cameras are all embedded digital electronic systems functioning on binary microprocessors, logic arrays, and digital DSPs. Thus, (D) More than one of the above is correct.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "combinational-sequential-circuits-design",
    "topicTitle": "Combinational & Sequential Circuits Design",
    "examType": "BPSC-TRE"
  },
  {
    "id": 74,
    "originalNumber": 74,
    "question": "An OR gate has 4 binary inputs. What is the total number of words (rows/combinations) in its truth table?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "For any n-variable digital logic gate or Boolean function, the number of distinct input combinations in the truth table is given by 2^n. For n = 4 inputs, the number of combinations is 2^4 = 16.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 75,
    "originalNumber": 75,
    "question": "When does a negative level-triggered (active-low) flip-flop in digital electronics change its state?",
    "options": [
      {
        "id": "A",
        "text": "When the clock is Negative (LOW / 0)"
      },
      {
        "id": "B",
        "text": "When the clock is Positive (HIGH / 1)"
      },
      {
        "id": "C",
        "text": "When the inputs are all zero"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Level-triggered flip-flops/latches respond to the steady voltage level of the clock signal. A negative level-triggered circuit remains transparent and responds to inputs when the clock input is at a low/negative logic level (Clock = 0 / LOW).",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "combinational-sequential-circuits-design",
    "topicTitle": "Combinational & Sequential Circuits Design",
    "examType": "BPSC-TRE"
  },
  {
    "id": 76,
    "originalNumber": 76,
    "question": "What is the result of the bitwise binary operation 1010 AND 1100?",
    "options": [
      {
        "id": "A",
        "text": "1000"
      },
      {
        "id": "B",
        "text": "1110"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Performing bitwise AND on each column:\n  1 AND 1 = 1\n  0 AND 1 = 0\n  1 AND 0 = 0\n  0 AND 0 = 0\nYielding 1000 in binary.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 77,
    "originalNumber": 77,
    "question": "In a digital half-adder combinational circuit, what are the two output signals?",
    "options": [
      {
        "id": "A",
        "text": "Sum and Carry"
      },
      {
        "id": "B",
        "text": "Difference and Borrow"
      },
      {
        "id": "C",
        "text": "Sum and Difference"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "A half adder takes two single-bit inputs (A, B) and generates two outputs: Sum = A ⊕ B (XOR gate) and Carry = A · B (AND gate).",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "combinational-sequential-circuits-design",
    "topicTitle": "Combinational & Sequential Circuits Design",
    "examType": "BPSC-TRE"
  },
  {
    "id": 78,
    "originalNumber": 78,
    "question": "Which of the following is a type of Read Only Memory (ROM)?",
    "options": [
      {
        "id": "A",
        "text": "PROM (Programmable ROM)"
      },
      {
        "id": "B",
        "text": "EPROM (Erasable Programmable ROM)"
      },
      {
        "id": "C",
        "text": "MROM (Masked ROM)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "All three (Masked ROM, Programmable ROM, and UV Erasable Programmable ROM) are established varieties of non-volatile Read Only Memory. Thus, (D) More than one of the above is correct.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "category": "Computer Science & Applications",
    "topicSlug": "cache-memory-organization-co",
    "topicTitle": "Cache Memory Organization, Mapping Techniques, and Replacement Policies",
    "examType": "BPSC-TRE"
  },
  {
    "id": 79,
    "originalNumber": 79,
    "question": "What is the full form of the programmable device acronym PLA in computer architecture?",
    "options": [
      {
        "id": "A",
        "text": "Programmable Logic Application"
      },
      {
        "id": "B",
        "text": "Programmable Logic Array"
      },
      {
        "id": "C",
        "text": "Programmable Logic Architecture"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "PLA stands for Programmable Logic Array, a PLD device with both a programmable AND array and a programmable OR array used to implement sum-of-products Boolean functions.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "combinational-sequential-circuits-design",
    "topicTitle": "Combinational & Sequential Circuits Design",
    "examType": "BPSC-TRE"
  },
  {
    "id": 80,
    "originalNumber": 80,
    "question": "How many select control lines (s) are required for an 8-to-1 Multiplexer (MUX)?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "A 2^m-to-1 multiplexer requires m select lines to address any of the 2^m data input lines. For an 8-to-1 multiplexer, 2^m = 8 => m = log2(8) = 3 select lines.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "combinational-sequential-circuits-design",
    "topicTitle": "Combinational & Sequential Circuits Design",
    "examType": "BPSC-TRE"
  },
  {
    "id": 81,
    "originalNumber": 81,
    "question": "Convert the decimal integer 1234 to binary, octal, and hexadecimal notation. Which option correctly represents all three conversions?",
    "options": [
      {
        "id": "A",
        "text": "Binary: 10011010010, Octal: 2322, Hexadecimal: 4D2"
      },
      {
        "id": "B",
        "text": "Binary: 11001110010, Octal: 1712, Hexadecimal: 72A"
      },
      {
        "id": "C",
        "text": "Binary: 11100110010, Octal: 1642, Hexadecimal: 3CD"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "1234 in hexadecimal: 1234 / 16 = 77 rem 2; 77 / 16 = 4 rem 13 (D); 4 / 16 = 0 rem 4 => 4D2_16.\nIn binary: 4 = 0100, D = 1101, 2 = 0010 => 10011010010_2.\nIn octal: grouping 3 bits (010 011 010 010) => 2322_8.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 82,
    "originalNumber": 82,
    "question": "What is Booth's algorithm primarily used for in computer arithmetic?",
    "options": [
      {
        "id": "A",
        "text": "Binary to decimal conversion"
      },
      {
        "id": "B",
        "text": "Decimal to binary conversion"
      },
      {
        "id": "C",
        "text": "Binary multiplication"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Booth's multiplication algorithm is an efficient hardware algorithm that multiplies two signed binary numbers in two's complement representation by encoding runs of consecutive 1s.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "category": "Computer Science & Applications",
    "topicSlug": "combinational-sequential-circuits-design",
    "topicTitle": "Combinational & Sequential Circuits Design",
    "examType": "BPSC-TRE"
  },
  {
    "id": 83,
    "originalNumber": 83,
    "question": "Which of the following is an error detection/correction code or technique used in digital communications and logic?",
    "options": [
      {
        "id": "A",
        "text": "Hamming code"
      },
      {
        "id": "B",
        "text": "Cyclic Redundancy Check (CRC)"
      },
      {
        "id": "C",
        "text": "Checksum"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Hamming codes (error detection and single-bit correction), CRC (polynomial cyclic redundancy check), and Checksums are all standard error detection mechanisms in computer networks and digital logic. Thus, (D) More than one of the above is correct.",
    "unit": "Unit 7: Computer Networks",
    "category": "Computer Science & Applications",
    "topicSlug": "data-link-layer-framing-error-control",
    "topicTitle": "Data Link Layer: Framing, Flow Control, Error Control, and MAC Protocols",
    "examType": "BPSC-TRE"
  },
  {
    "id": 84,
    "originalNumber": 84,
    "question": "When performing BCD (Binary Coded Decimal) addition, what is the maximum valid decimal value that can be represented by a single BCD nibble?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "15"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "In 8421 BCD, each decimal digit is encoded into 4 bits, valid only for decimal digits 0 through 9 (0000 to 1001). The maximum decimal value a valid single BCD digit can represent is 9. Values 10 to 15 (1010 to 1111) are invalid BCD codes. Since 9 is not among options A (2), B (10), or C (15), the correct answer is (E) None of the above.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 85,
    "originalNumber": 85,
    "question": "Convert the fractional binary number 1011.1101_2 to its exact decimal equivalent:",
    "options": [
      {
        "id": "A",
        "text": "11.75"
      },
      {
        "id": "B",
        "text": "12.125"
      },
      {
        "id": "C",
        "text": "13.5"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "Integer part: 1011_2 = 8 + 0 + 2 + 1 = 11.\nFractional part: .1101_2 = 1*(2^-1) + 1*(2^-2) + 0*(2^-3) + 1*(2^-4) = 0.5 + 0.25 + 0 + 0.0625 = 0.8125.\nTotal decimal value = 11.8125. Since 11.8125 is not listed in options A (11.75), B (12.125), or C (13.5), the answer is (E) None of the above.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 86,
    "originalNumber": 86,
    "question": "What is De Morgan's theorem primarily used for in digital logic and Boolean algebra?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying Boolean expressions"
      },
      {
        "id": "B",
        "text": "Implementing NAND gates"
      },
      {
        "id": "C",
        "text": "Performing binary addition"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "De Morgan's laws ((A + B)' = A' · B' and (A · B)' = A' + B') allow engineers and mathematicians to simplify complex complemented Boolean logic expressions into simpler sum-of-products or product-of-sums forms.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 87,
    "originalNumber": 87,
    "question": "What is the primary role and purpose of 'Don't Care' conditions (X) in Karnaugh Maps (K-maps)?",
    "options": [
      {
        "id": "A",
        "text": "To indicate that the value of a variable does not affect the output (can be chosen as 0 or 1 to form larger groups)"
      },
      {
        "id": "B",
        "text": "To prioritize certain inputs over others"
      },
      {
        "id": "C",
        "text": "To ensure that all possible input combinations are covered in truth tables"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Don't care terms represent input combinations that either can never occur or whose output is irrelevant. In K-maps, they can be assigned 0 or 1 opportunistically to form larger groupings of 1s, thereby minimizing circuit literals and gate count.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "boolean-algebra-k-maps-co",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "examType": "BPSC-TRE"
  },
  {
    "id": 88,
    "originalNumber": 88,
    "question": "Which of the following data structures stores elements in a non-linear hierarchical or interconnected relationship?",
    "options": [
      {
        "id": "A",
        "text": "Stack"
      },
      {
        "id": "B",
        "text": "Queue"
      },
      {
        "id": "C",
        "text": "Array"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "Stacks, Queues, and Arrays are all linear data structures where elements are arranged sequentially. Non-linear data structures include Trees and Graphs. Since neither Tree nor Graph is listed in options A, B, or C, the correct answer is (E) None of the above.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "binary-search-trees-avl-dsa",
    "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
    "examType": "BPSC-TRE"
  },
  {
    "id": 89,
    "originalNumber": 89,
    "question": "Which data structure provides an average time complexity of O(1) for search, insertion, and deletion operations?",
    "options": [
      {
        "id": "A",
        "text": "Stack"
      },
      {
        "id": "B",
        "text": "Queue"
      },
      {
        "id": "C",
        "text": "Hash Table"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "A Hash Table maps keys to bucket slots using a hash function, delivering average-case O(1) constant time lookup, insertion, and deletion.",
    "unit": "Unit 4: Algorithms",
    "category": "Computer Science & Applications",
    "topicSlug": "asymptotic-notation-algorithms",
    "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
    "examType": "BPSC-TRE"
  },
  {
    "id": 90,
    "originalNumber": 90,
    "question": "In a Binary Search Tree (BST), which subtree of a node contains exclusively keys that are strictly greater than the node's key value?",
    "options": [
      {
        "id": "A",
        "text": "Left subtree"
      },
      {
        "id": "B",
        "text": "Right subtree"
      },
      {
        "id": "C",
        "text": "Both subtrees"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "By definition of BST ordering: all keys in the left subtree must be less than the root key, and all keys in the right subtree must be greater than the root key.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "binary-search-trees-avl-dsa",
    "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
    "examType": "BPSC-TRE"
  },
  {
    "id": 91,
    "originalNumber": 91,
    "question": "What is the result of evaluating the postfix (Reverse Polish) expression: 10 5 + 60 6 / * 8 - ?",
    "options": [
      {
        "id": "A",
        "text": "142"
      },
      {
        "id": "B",
        "text": "213"
      },
      {
        "id": "C",
        "text": "284"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Evaluating step-by-step using an evaluation stack:\n1. Push 10, push 5 -> pop both on '+' => 10 + 5 = 15 (stack: [15])\n2. Push 60, push 6 -> pop both on '/' => 60 / 6 = 10 (stack: [15, 10])\n3. On '*' -> pop 15 and 10 => 15 * 10 = 150 (stack: [150])\n4. Push 8 -> on '-' => 150 - 8 = 142.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "c-cpp-pointers-memory",
    "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
    "examType": "BPSC-TRE"
  },
  {
    "id": 92,
    "originalNumber": 92,
    "question": "In an AVL balanced binary search tree, the heights of the two child subtrees of any node cannot differ by more than:",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "In an AVL tree, the balance factor BalanceFactor(N) = Height(Left) - Height(Right) must be strictly within {-1, 0, +1}. The difference in heights can never exceed 1.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "binary-search-trees-avl-dsa",
    "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
    "examType": "BPSC-TRE"
  },
  {
    "id": 93,
    "originalNumber": 93,
    "question": "What is the output or status of the following C code declaration: `int a[] = {1, 2, 3,} *p;`?",
    "options": [
      {
        "id": "A",
        "text": "Junk value"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "Runtime error"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "In C, attempting to declare `int a[] = {1, 2, 3,} *p;` without a separating comma before the pointer or a proper declaration specifier causes a compile-time syntax error. Since 'Compilation / Syntax error' is not listed in options A, B, or C, the correct choice is (E) None of the above.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "c-cpp-pointers-memory",
    "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
    "examType": "BPSC-TRE"
  },
  {
    "id": 94,
    "originalNumber": 94,
    "question": "A standard FIFO queue has the configuration (front to rear) a, b, c, d. If you want to reverse it to d, c, b, a using only standard enqueue/dequeue operations on the queue alone without any auxiliary data structure, how many minimum operations are required?",
    "options": [
      {
        "id": "A",
        "text": "2 deletions and 3 additions"
      },
      {
        "id": "B",
        "text": "3 deletions and 3 additions"
      },
      {
        "id": "C",
        "text": "4 deletions and 4 additions"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "A pure First-In-First-Out (FIFO) queue cannot reverse its internal order solely through queue operations without using an auxiliary LIFO data structure (such as a stack or recursion stack). None of the fixed deletion/addition options can accomplish reversal on a standalone queue.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "c-cpp-pointers-memory",
    "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
    "examType": "BPSC-TRE"
  },
  {
    "id": 95,
    "originalNumber": 95,
    "question": "What is the worst-case asymptotic time complexity order of the Binary Search algorithm on a sorted array of N elements?",
    "options": [
      {
        "id": "A",
        "text": "N"
      },
      {
        "id": "B",
        "text": "N log n"
      },
      {
        "id": "C",
        "text": "N^2"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "Binary search halves the search space at each iteration: T(N) = T(N/2) + O(1), giving an asymptotic order of O(log N). Since O(log N) is not listed in options A (N), B (N log N), or C (N^2), the answer is (E) None of the above.",
    "unit": "Unit 4: Algorithms",
    "category": "Computer Science & Applications",
    "topicSlug": "asymptotic-notation-algorithms",
    "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
    "examType": "BPSC-TRE"
  },
  {
    "id": 96,
    "originalNumber": 96,
    "question": "The preorder traversal of a Binary Search Tree (BST) is: 15, 10, 12, 11, 20, 18, 16, 19. Which one of the following is the postorder traversal of the tree?",
    "options": [
      {
        "id": "A",
        "text": "20, 19, 18, 16, 15, 12, 11, 10"
      },
      {
        "id": "B",
        "text": "11, 12, 10, 16, 19, 18, 20, 15"
      },
      {
        "id": "C",
        "text": "19, 16, 18, 20, 11, 12, 10, 15"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "For any BST, the Inorder traversal is the sorted sequence: 10, 11, 12, 15, 16, 18, 19, 20. Given Preorder = [15, (10, 12, 11), (20, 18, 16, 19)]:\n- Root = 15\n- Left subtree keys < 15: preorder [10, 12, 11] => root 10, right child 12, left child of 12 is 11. Postorder for left subtree: 11, 12, 10.\n- Right subtree keys > 15: preorder [20, 18, 16, 19] => root 20, left child 18 (with left 16, right 19). Postorder for right subtree: 16, 19, 18, 20.\nCombining Left, Right, Root => 11, 12, 10, 16, 19, 18, 20, 15.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "binary-search-trees-avl-dsa",
    "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
    "examType": "BPSC-TRE"
  },
  {
    "id": 97,
    "originalNumber": 97,
    "question": "How many structurally distinct Binary Search Trees (BSTs) can be constructed with n = 4 distinct keys?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The number of structurally unique BSTs with n distinct keys is given by the n-th Catalan number: C_n = (2n)! / ((n+1)! n!). For n = 4: C_4 = (8)! / (5! × 4!) = 40320 / (120 × 24) = 40320 / 2880 = 14.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "binary-search-trees-avl-dsa",
    "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
    "examType": "BPSC-TRE"
  },
  {
    "id": 98,
    "originalNumber": 98,
    "question": "Consider the following C program:\n```c\n#include <stdio.h>\nint main() {\n    int i = 5, j = 10, k = 15;\n    printf(\"%d \", sizeof(k /= i + j));\n    printf(\"%d\", k);\n    return 0;\n}\n```\nAssuming sizeof(int) is 4 bytes, what is the output printed on the console?",
    "options": [
      {
        "id": "A",
        "text": "2 1"
      },
      {
        "id": "B",
        "text": "4 1"
      },
      {
        "id": "C",
        "text": "4 15"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "In C, the `sizeof` operator is evaluated at compile time and does not evaluate side effects inside its operand. The expression `k /= i + j` has type `int`, so `sizeof(...)` yields 4. Because the assignment expression is never executed at runtime, `k` remains unchanged at 15. The output is `4 15`.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "c-cpp-pointers-memory",
    "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
    "examType": "BPSC-TRE"
  },
  {
    "id": 99,
    "originalNumber": 99,
    "question": "Which of the following statements is mathematically accurate regarding Big-O (O) notation in algorithm analysis?",
    "options": [
      {
        "id": "A",
        "text": "It represents the asymptotic lower bound of an algorithm's runtime"
      },
      {
        "id": "B",
        "text": "It represents the asymptotic upper bound of an algorithm's runtime"
      },
      {
        "id": "C",
        "text": "It represents the exact average runtime of an algorithm"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Big-O notation f(n) = O(g(n)) formally provides an asymptotic upper bound: there exist positive constants c and n0 such that 0 <= f(n) <= c*g(n) for all n >= n0. Lower bound is Big-Omega (Ω) and tight bound is Big-Theta (Θ).",
    "unit": "Unit 4: Algorithms",
    "category": "Computer Science & Applications",
    "topicSlug": "asymptotic-notation-algorithms",
    "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
    "examType": "BPSC-TRE"
  },
  {
    "id": 100,
    "originalNumber": 100,
    "question": "Which of the following is NOT one of the three foundational steps in the Divide and Conquer algorithmic paradigm?",
    "options": [
      {
        "id": "A",
        "text": "Combine"
      },
      {
        "id": "B",
        "text": "Conquer"
      },
      {
        "id": "C",
        "text": "Divide"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "The three classical steps of Divide and Conquer are: (1) Divide the problem into smaller subproblems, (2) Conquer the subproblems by solving them recursively, and (3) Combine the solutions to form the global answer. Since all three (A, B, C) are valid steps, none is 'NOT a step', making (E) None of the above the correct answer.",
    "unit": "Unit 4: Algorithms",
    "category": "Computer Science & Applications",
    "topicSlug": "asymptotic-notation-algorithms",
    "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
    "examType": "BPSC-TRE"
  },
  {
    "id": 101,
    "originalNumber": 101,
    "question": "Merge Sort is a classic example of which algorithm design paradigm?",
    "options": [
      {
        "id": "A",
        "text": "Greedy"
      },
      {
        "id": "B",
        "text": "Divide and Conquer"
      },
      {
        "id": "C",
        "text": "Dynamic Programming"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Merge Sort divides the unsorted list into two equal halves, recursively sorts each half (conquer), and then merges the sorted halves into one sorted list (combine).",
    "unit": "Unit 4: Algorithms",
    "category": "Computer Science & Applications",
    "topicSlug": "asymptotic-notation-algorithms",
    "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
    "examType": "BPSC-TRE"
  },
  {
    "id": 102,
    "originalNumber": 102,
    "question": "How many edges are present in a spanning tree of a connected, undirected graph with N vertices?",
    "options": [
      {
        "id": "A",
        "text": "N"
      },
      {
        "id": "B",
        "text": "N - 1"
      },
      {
        "id": "C",
        "text": "N(N - 1)/2"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "A spanning tree is a subgraph that includes all N vertices and is a tree (connected with no cycles). Any tree with N vertices must contain exactly N - 1 edges.",
    "unit": "Unit 4: Algorithms",
    "category": "Computer Science & Applications",
    "topicSlug": "minimum-spanning-trees-greedy-dsa",
    "topicTitle": "Minimum Spanning Trees: Prim's, Kruskal's, and Greedy Strategies",
    "examType": "BPSC-TRE"
  },
  {
    "id": 103,
    "originalNumber": 103,
    "question": "Which of the following is NOT a graph traversal algorithm?",
    "options": [
      {
        "id": "A",
        "text": "Greedy"
      },
      {
        "id": "B",
        "text": "Divide and Conquer"
      },
      {
        "id": "C",
        "text": "Dynamic Programming"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Graph traversal algorithms specifically refer to methods of visiting vertices in a graph, such as Breadth-First Search (BFS) and Depth-First Search (DFS). Greedy, Divide and Conquer, and Dynamic Programming are general algorithmic design paradigms, not graph traversal algorithms. Since all three are NOT graph traversal algorithms, (D) More than one of the above is correct.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "graph-theory-discrete-math",
    "topicTitle": "Graph Theory: Connectivity, Euler/Hamiltonian, Planarity & Trees",
    "examType": "BPSC-TRE"
  },
  {
    "id": 104,
    "originalNumber": 104,
    "question": "Which of the following problems is NOT an NP-Complete problem (i.e. is solvable in deterministic polynomial time P)?",
    "options": [
      {
        "id": "A",
        "text": "Traveling Salesman Problem (decision version)"
      },
      {
        "id": "B",
        "text": "Boolean Satisfiability Problem (SAT)"
      },
      {
        "id": "C",
        "text": "Single-Source Shortest Path Problem"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The Single-Source Shortest Path problem can be solved in polynomial time by Dijkstra's algorithm (O((V + E) log V)) or Bellman-Ford (O(VE)), so it belongs to class P. Both TSP (decision) and SAT are classic NP-Complete problems.",
    "unit": "Unit 4: Algorithms",
    "category": "Computer Science & Applications",
    "topicSlug": "np-completeness-complexity-classes-dsa",
    "topicTitle": "NP-Completeness, Reductions, Complexity Classes & Approximation",
    "examType": "BPSC-TRE"
  },
  {
    "id": 105,
    "originalNumber": 105,
    "question": "Which of the following is a primary architectural advantage of using an array data structure?",
    "options": [
      {
        "id": "A",
        "text": "Constant time insertion and deletion at arbitrary positions"
      },
      {
        "id": "B",
        "text": "Ability to store heterogeneous elements of different data types"
      },
      {
        "id": "C",
        "text": "Constant time O(1) random access to elements using an index"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Because elements of an array are stored in contiguous memory locations, calculating the address of element i via BaseAddress + i × ElementSize enables O(1) direct random access.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "c-cpp-pointers-memory",
    "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
    "examType": "BPSC-TRE"
  },
  {
    "id": 106,
    "originalNumber": 106,
    "question": "Which of the following is NOT considered a fundamental primitive operation on standard data structures?",
    "options": [
      {
        "id": "A",
        "text": "Encryption"
      },
      {
        "id": "B",
        "text": "Deletion"
      },
      {
        "id": "C",
        "text": "Insertion"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "The fundamental primitive operations on data structures are insertion, deletion, searching, traversal, sorting, and merging. Encryption is a cryptographic security transformation, not a data structure primitive.",
    "unit": "Unit 3: Programming & Data Structures",
    "category": "Computer Science & Applications",
    "topicSlug": "c-cpp-pointers-memory",
    "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
    "examType": "BPSC-TRE"
  },
  {
    "id": 107,
    "originalNumber": 107,
    "question": "Which of the following is an established classification type of operating system?",
    "options": [
      {
        "id": "A",
        "text": "Real-Time Operating System (RTOS)"
      },
      {
        "id": "B",
        "text": "Embedded Operating System"
      },
      {
        "id": "C",
        "text": "Network Operating System (NOS)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Operating systems are categorized by operational goals into Real-Time OS, Embedded OS, Network OS, Distributed OS, and Batch/Time-sharing systems. All listed are valid OS categories, so (D) More than one of the above is correct.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "cpu-scheduling-os",
    "topicTitle": "Process Management, Threads & CPU Scheduling Algorithms",
    "examType": "BPSC-TRE"
  },
  {
    "id": 108,
    "originalNumber": 108,
    "question": "Which of the following is NOT a memory management technique employed by operating systems?",
    "options": [
      {
        "id": "A",
        "text": "Paging"
      },
      {
        "id": "B",
        "text": "Segmentation"
      },
      {
        "id": "C",
        "text": "Fragmentation"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Paging and Segmentation are intentional memory management schemes used by an OS to allocate memory. Fragmentation (internal or external) is an undesirable side effect or inefficiency resulting from allocation, not a technique.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-management-virtual-memory-os",
    "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
    "examType": "BPSC-TRE"
  },
  {
    "id": 109,
    "originalNumber": 109,
    "question": "Which of the following is a recognized file system utilized by modern operating systems?",
    "options": [
      {
        "id": "A",
        "text": "NTFS"
      },
      {
        "id": "B",
        "text": "FAT32"
      },
      {
        "id": "C",
        "text": "HFS+"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "NTFS (Windows New Technology File System), FAT32 (File Allocation Table 32), and HFS+ (Apple Hierarchical File System Plus) are all standard operating system file systems. Thus, (D) More than one of the above is correct.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-interleaving-secondary-storage-raid",
    "topicTitle": "Memory Interleaving, Secondary Storage, and RAID Architecture",
    "examType": "BPSC-TRE"
  },
  {
    "id": 110,
    "originalNumber": 110,
    "question": "Which of the following is NOT a recognized architectural category of system interrupts?",
    "options": [
      {
        "id": "A",
        "text": "Hardware interrupt"
      },
      {
        "id": "B",
        "text": "Memory interrupt"
      },
      {
        "id": "C",
        "text": "Software interrupt"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Interrupts are broadly classified into Hardware interrupts (asynchronous signals from I/O peripherals) and Software interrupts (synchronous traps, system calls, or exceptions). 'Memory interrupt' is not a standard interrupt category in computer architecture.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "cpu-scheduling-os",
    "topicTitle": "Process Management, Threads & CPU Scheduling Algorithms",
    "examType": "BPSC-TRE"
  },
  {
    "id": 111,
    "originalNumber": 111,
    "question": "In virtual memory management, what is a 'page' in paging?",
    "options": [
      {
        "id": "A",
        "text": "A fixed-size contiguous block of virtual/logical memory"
      },
      {
        "id": "B",
        "text": "A fixed-size block of physical memory"
      },
      {
        "id": "C",
        "text": "A type of variable memory allocation"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "In paging, the process logical (virtual) address space is divided into fixed-size contiguous units called 'pages'. Physical memory is divided into fixed-size units of identical size called 'frames'.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-management-virtual-memory-os",
    "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
    "examType": "BPSC-TRE"
  },
  {
    "id": 112,
    "originalNumber": 112,
    "question": "In a paging system with a page size of 4 KB and a physical address space of 64 GB, how many bits are required strictly for the page offset (displacement)?",
    "options": [
      {
        "id": "A",
        "text": "10 bits"
      },
      {
        "id": "B",
        "text": "12 bits"
      },
      {
        "id": "C",
        "text": "14 bits"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Page offset bits (d) are determined solely by the page size: Page Size = 4 KB = 4 × 1024 bytes = 4096 bytes = 2^12 bytes. Therefore, d = log2(4096) = 12 bits.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-management-virtual-memory-os",
    "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
    "examType": "BPSC-TRE"
  },
  {
    "id": 113,
    "originalNumber": 113,
    "question": "In memory segmentation, what does the 'segment base' specify in the segment table?",
    "options": [
      {
        "id": "A",
        "text": "The starting physical address of the segment in main memory"
      },
      {
        "id": "B",
        "text": "The starting address of a segment in virtual memory"
      },
      {
        "id": "C",
        "text": "The ending address of a segment in physical memory"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "In segmentation hardware, each segment table entry holds a segment base (the starting physical memory address where the segment resides in RAM) and a segment limit (the length of the segment).",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-management-virtual-memory-os",
    "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
    "examType": "BPSC-TRE"
  },
  {
    "id": 114,
    "originalNumber": 114,
    "question": "What is the primary cause that triggers 'thrashing' in a virtual memory operating system?",
    "options": [
      {
        "id": "A",
        "text": "Excessive paging activity (swapping pages in and out continuously)"
      },
      {
        "id": "B",
        "text": "Insufficient disk space"
      },
      {
        "id": "C",
        "text": "Hardware failures"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Thrashing occurs when a computer spends more time servicing page faults and swapping pages between disk and RAM than executing actual application instructions, caused by an excessively high degree of multiprogramming and insufficient allocated frames.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-management-virtual-memory-os",
    "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
    "examType": "BPSC-TRE"
  },
  {
    "id": 115,
    "originalNumber": 115,
    "question": "Consider a system with a total physical memory of 8 GB and total virtual memory allocated of 16 GB. If active processes are currently consuming 10 GB of virtual memory and occupying 6 GB of physical RAM, how much virtual memory is currently swapped out to secondary backing storage?",
    "options": [
      {
        "id": "A",
        "text": "2 GB"
      },
      {
        "id": "B",
        "text": "4 GB"
      },
      {
        "id": "C",
        "text": "6 GB"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "The total active virtual memory used by processes is 10 GB. Of this, 6 GB is resident in physical RAM. The remaining portion resident on secondary backing store (swap space) is 10 GB - 6 GB = 4 GB.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-management-virtual-memory-os",
    "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
    "examType": "BPSC-TRE"
  },
  {
    "id": 116,
    "originalNumber": 116,
    "question": "How is a Translation Lookaside Buffer (TLB) in CPU memory management hardware typically organized for fast single-cycle parallel lookup?",
    "options": [
      {
        "id": "A",
        "text": "As a direct-mapped cache"
      },
      {
        "id": "B",
        "text": "As an associative (content-addressable) cache"
      },
      {
        "id": "C",
        "text": "As a set-associative cache"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "A Translation Lookaside Buffer (TLB) is constructed using associative content-addressable memory (CAM) where all tags are compared simultaneously. Modern microarchitectures implement TLBs as fully associative or set-associative caches. Since both B (associative cache) and C (set-associative cache) are valid TLB organizations, (D) More than one of the above is the official answer.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-management-virtual-memory-os",
    "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
    "examType": "BPSC-TRE"
  },
  {
    "id": 117,
    "originalNumber": 117,
    "question": "Which of the following is a standard fundamental file management operation provided by operating system system calls?",
    "options": [
      {
        "id": "A",
        "text": "Create"
      },
      {
        "id": "B",
        "text": "Delete"
      },
      {
        "id": "C",
        "text": "Rename"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Operating systems support standard file operations including Create, Open, Read, Write, Delete, Rename, and Reposition (Seek). Because Create, Delete, and Rename are all common file operations, the answer is (D) More than one of the above.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-interleaving-secondary-storage-raid",
    "topicTitle": "Memory Interleaving, Secondary Storage, and RAID Architecture",
    "examType": "BPSC-TRE"
  },
  {
    "id": 118,
    "originalNumber": 118,
    "question": "Consider a disk queue with requests for I/O to blocks on cylinders: 98, 183, 37, 122, 14, 124, 65, 67. Under First-Come First-Served (FCFS) disk scheduling, what is the total number of track/cylinder head movements if the read/write head is initially stationed at cylinder 53?",
    "options": [
      {
        "id": "A",
        "text": "640"
      },
      {
        "id": "B",
        "text": "620"
      },
      {
        "id": "C",
        "text": "630"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Calculating cumulative head movements in FCFS order:\n|53 - 98| = 45\n|98 - 183| = 85\n|183 - 37| = 146\n|37 - 122| = 85\n|122 - 14| = 108\n|14 - 124| = 110\n|124 - 65| = 59\n|65 - 67| = 2\nTotal movements = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 cylinders.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "memory-interleaving-secondary-storage-raid",
    "topicTitle": "Memory Interleaving, Secondary Storage, and RAID Architecture",
    "examType": "BPSC-TRE"
  },
  {
    "id": 119,
    "originalNumber": 119,
    "question": "A thread shares with peer threads belonging to the same parent process which of the following resource sections?",
    "options": [
      {
        "id": "A",
        "text": "Thread ID"
      },
      {
        "id": "B",
        "text": "Program counter and registers"
      },
      {
        "id": "C",
        "text": "Code section and data section"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Threads in the same process share code (text section), data section (global variables), and operating system resources (open files, signals). Each thread retains its own private Thread ID, Program Counter, register set, and stack.",
    "unit": "Unit 5: Operating System",
    "category": "Computer Science & Applications",
    "topicSlug": "process-synchronization-ipc-os",
    "topicTitle": "Process Synchronization, Critical Section, Mutexes & Semaphores",
    "examType": "BPSC-TRE"
  },
  {
    "id": 120,
    "originalNumber": 120,
    "question": "Which of the following is NOT an established architectural model or type of Database Management System (DBMS)?",
    "options": [
      {
        "id": "A",
        "text": "Relational DBMS (RDBMS)"
      },
      {
        "id": "B",
        "text": "Object-Oriented DBMS (OODBMS)"
      },
      {
        "id": "C",
        "text": "Sequential DBMS"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Recognized data models for DBMS include Hierarchical, Network, Relational (RDBMS), Object-Oriented (OODBMS), and NoSQL/Document stores. 'Sequential DBMS' is not a recognized category of database management systems.",
    "unit": "Unit 6: Database Management System",
    "category": "Computer Science & Applications",
    "topicSlug": "relational-algebra-calculus-dbms",
    "topicTitle": "Relational Algebra, Tuple & Domain Calculus with DBMS Mapping",
    "examType": "BPSC-TRE"
  },
  {
    "id": 121,
    "originalNumber": 121,
    "question": "In a relational database table, what is the definition and primary role of a Primary Key?",
    "options": [
      {
        "id": "A",
        "text": "A minimal candidate key chosen to uniquely identify each record (tuple) in a table"
      },
      {
        "id": "B",
        "text": "A key used to establish relationships between tables"
      },
      {
        "id": "C",
        "text": "A key used exclusively to sort records in a table"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "A Primary Key is an attribute or combination of attributes that uniquely identifies each tuple in a relation, enforcing entity integrity (values must be unique and cannot contain NULL). (Foreign keys establish relationships).",
    "unit": "Unit 6: Database Management System",
    "category": "Computer Science & Applications",
    "topicSlug": "relational-algebra-calculus-dbms",
    "topicTitle": "Relational Algebra, Tuple & Domain Calculus with DBMS Mapping",
    "examType": "BPSC-TRE"
  },
  {
    "id": 122,
    "originalNumber": 122,
    "question": "Which database normal form ensures that a table is in 1NF and every non-prime attribute is fully functionally dependent on the entire primary key (no partial functional dependencies)?",
    "options": [
      {
        "id": "A",
        "text": "First Normal Form (1NF)"
      },
      {
        "id": "B",
        "text": "Second Normal Form (2NF)"
      },
      {
        "id": "C",
        "text": "Third Normal Form (3NF)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "A relation is in Second Normal Form (2NF) if and only if it is in 1NF and no non-prime attribute is dependent on any proper subset of any candidate key (eliminating partial functional dependency).",
    "unit": "Unit 6: Database Management System",
    "category": "Computer Science & Applications",
    "topicSlug": "normalization-dbms",
    "topicTitle": "Database Normalization: Functional Dependencies, 1NF to BCNF & Lossless Decomposition",
    "examType": "BPSC-TRE"
  },
  {
    "id": 123,
    "originalNumber": 123,
    "question": "Which standard SQL Data Manipulation Language (DML) statement is used to add new rows of records to an existing database table?",
    "options": [
      {
        "id": "A",
        "text": "ADD"
      },
      {
        "id": "B",
        "text": "CREATE"
      },
      {
        "id": "C",
        "text": "INSERT"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "The standard SQL syntax `INSERT INTO table_name (columns) VALUES (values);` inserts new record tuples into a relation.",
    "unit": "Unit 6: Database Management System",
    "category": "Computer Science & Applications",
    "topicSlug": "sql-queries-views-triggers-dbms",
    "topicTitle": "Advanced SQL Queries, Subqueries, Views, Triggers, and Constraints",
    "examType": "BPSC-TRE"
  },
  {
    "id": 124,
    "originalNumber": 124,
    "question": "Which of the following is a recognized disadvantage or technical challenge of implementing a Distributed Database Management System (DDBMS)?",
    "options": [
      {
        "id": "A",
        "text": "Improved data accessibility"
      },
      {
        "id": "B",
        "text": "Increased data security"
      },
      {
        "id": "C",
        "text": "Risk of data inconsistency across replicas and high network complexity"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Distributed databases face significant challenges in distributed concurrency control, two-phase commits, replication synchronization lag, and maintaining global consistency across networked nodes.",
    "unit": "Unit 6: Database Management System",
    "category": "Computer Science & Applications",
    "topicSlug": "data-warehousing-data-mining-dbms",
    "topicTitle": "Data Warehousing Architecture, OLAP, Data Mining & Association Rules",
    "examType": "BPSC-TRE"
  },
  {
    "id": 125,
    "originalNumber": 125,
    "question": "What is the primary function of a Router in computer networking?",
    "options": [
      {
        "id": "A",
        "text": "To connect devices within the same network"
      },
      {
        "id": "B",
        "text": "To connect multiple disparate networks together and route packets based on IP addresses"
      },
      {
        "id": "C",
        "text": "To filter incoming traffic based on IP addresses exclusively"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "A router operates at the Network Layer (Layer 3) to interconnect multiple distinct logical networks (LANs/WANs) and forward IP packets across intermediate networks toward their destination using routing tables.",
    "unit": "Unit 7: Computer Networks",
    "category": "Computer Science & Applications",
    "topicSlug": "routing-algorithms-congestion-cn",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State), Congestion Control & QoS",
    "examType": "BPSC-TRE"
  },
  {
    "id": 126,
    "originalNumber": 126,
    "question": "In the standard OSI 7-layer reference model, which layer is responsible for logical addressing, path determination, routing, and forwarding of data packets?",
    "options": [
      {
        "id": "A",
        "text": "Data Link Layer"
      },
      {
        "id": "B",
        "text": "Transport Layer"
      },
      {
        "id": "C",
        "text": "Physical Layer"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "Routing and forwarding data packets is the core responsibility of the Network Layer (Layer 3). Because the Network Layer is not listed among options A (Data Link), B (Transport), or C (Physical), the correct answer is (E) None of the above.",
    "unit": "Unit 7: Computer Networks",
    "category": "Computer Science & Applications",
    "topicSlug": "routing-algorithms-congestion-cn",
    "topicTitle": "Routing Algorithms (Distance Vector, Link State), Congestion Control & QoS",
    "examType": "BPSC-TRE"
  },
  {
    "id": 127,
    "originalNumber": 127,
    "question": "Which networking hardware device operates at Layer 2 to connect multiple host devices within the same Local Area Network (LAN) using MAC addresses?",
    "options": [
      {
        "id": "A",
        "text": "Router"
      },
      {
        "id": "B",
        "text": "Switch"
      },
      {
        "id": "C",
        "text": "Bridge"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Both multiport network Switches and Bridges operate at the Data Link Layer (Layer 2) to connect stations within the same local broadcast domain and forward frames based on hardware MAC addresses. Therefore, (D) More than one of the above is the official answer.",
    "unit": "Unit 7: Computer Networks",
    "category": "Computer Science & Applications",
    "topicSlug": "data-link-layer-framing-error-control",
    "topicTitle": "Data Link Layer: Framing, Flow Control, Error Control, and MAC Protocols",
    "examType": "BPSC-TRE"
  },
  {
    "id": 128,
    "originalNumber": 128,
    "question": "Which application-layer protocol is used by mail user agents and transfer servers to push/send electronic mail across the Internet?",
    "options": [
      {
        "id": "A",
        "text": "FTP (File Transfer Protocol)"
      },
      {
        "id": "B",
        "text": "SMTP (Simple Mail Transfer Protocol)"
      },
      {
        "id": "C",
        "text": "HTTP (Hypertext Transfer Protocol)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Simple Mail Transfer Protocol (SMTP, running on TCP port 25/587) is the standard internet protocol for sending and relaying outgoing emails between mail servers. (POP3/IMAP are retrieval protocols).",
    "unit": "Unit 7: Computer Networks",
    "category": "Computer Science & Applications",
    "topicSlug": "application-layer-dns-http-email-protocols",
    "topicTitle": "Application Layer Protocols: DNS, HTTP/HTTPS, Email (SMTP, POP3, IMAP), and FTP",
    "examType": "BPSC-TRE"
  },
  {
    "id": 129,
    "originalNumber": 129,
    "question": "What is the primary technical purpose of a Subnet Mask in IPv4 TCP/IP networking?",
    "options": [
      {
        "id": "A",
        "text": "To identify the network portion of an IP address"
      },
      {
        "id": "B",
        "text": "To identify the host portion of an IP address"
      },
      {
        "id": "C",
        "text": "To convert IP addresses into domain names"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "A 32-bit subnet mask performs bitwise AND masking with an IP address to distinguish the Network ID portion (consecutive 1s) from the Host ID portion (consecutive 0s). Because both A and B are core purposes of the subnet mask, (D) More than one of the above is correct.",
    "unit": "Unit 7: Computer Networks",
    "category": "Computer Science & Applications",
    "topicSlug": "tcp-ip-subnetting-cn",
    "topicTitle": "TCP/IP Protocol Suite, IPv4/IPv6 Addressing, Subnetting & CIDR",
    "examType": "BPSC-TRE"
  },
  {
    "id": 130,
    "originalNumber": 130,
    "question": "What is the maximum theoretical physical layer (PHY) data rate introduced in the Bluetooth version 5.0 core specification?",
    "options": [
      {
        "id": "A",
        "text": "1 Mbps"
      },
      {
        "id": "B",
        "text": "2 Mbps"
      },
      {
        "id": "C",
        "text": "5 Mbps"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Bluetooth 5.0 introduced the 2M PHY mode, doubling the maximum raw data transmission speed from 1 Mbps (in Bluetooth 4.2) to 2 Mbps for low energy devices.",
    "unit": "Unit 12: Internet of Things",
    "category": "Computer Science & Applications",
    "topicSlug": "iot-protocols-coap-mqtt-sensors",
    "topicTitle": "IoT Protocols, CoAP, MQTT, Sensors & Actuators",
    "examType": "BPSC-TRE"
  },
  {
    "id": 131,
    "originalNumber": 131,
    "question": "Which of the following is an established Software Development Life Cycle (SDLC) process model?",
    "options": [
      {
        "id": "A",
        "text": "Waterfall model"
      },
      {
        "id": "B",
        "text": "Agile model"
      },
      {
        "id": "C",
        "text": "Spiral model"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Waterfall (linear sequential), Agile (iterative incremental), and Boehm's Spiral model (risk-driven) are all classic, widely recognized SDLC methodologies. Thus, (D) More than one of the above is correct.",
    "unit": "Unit 8: Software Engineering",
    "category": "Computer Science & Applications",
    "topicSlug": "software-engineering-models-metrics",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "examType": "BPSC-TRE"
  },
  {
    "id": 132,
    "originalNumber": 132,
    "question": "Which of the following is NOT a recognized category of software requirements engineering in SRS documentation?",
    "options": [
      {
        "id": "A",
        "text": "Functional requirements"
      },
      {
        "id": "B",
        "text": "System requirements"
      },
      {
        "id": "C",
        "text": "Physical requirements"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Software Requirements Specifications (SRS) categorize requirements into Functional, Non-functional, System, and User requirements. 'Physical requirements' is not a standard software requirement classification.",
    "unit": "Unit 8: Software Engineering",
    "category": "Computer Science & Applications",
    "topicSlug": "software-engineering-models-metrics",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "examType": "BPSC-TRE"
  },
  {
    "id": 133,
    "originalNumber": 133,
    "question": "What is the classic distinction between Verification and Validation (V&V) in software testing?",
    "options": [
      {
        "id": "A",
        "text": "Verification ensures software is bug-free, while validation ensures it meets requirements"
      },
      {
        "id": "B",
        "text": "Verification is done before coding, while validation is done after coding"
      },
      {
        "id": "C",
        "text": "Verification checks if the software is built right (conforming to specs), while validation checks if the right software is built (meeting user needs)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "In software engineering, Verification answers: 'Are we building the product right?' (static checking of designs, code reviews, and specifications). Validation answers: 'Are we building the right product?' (dynamic testing against user expectations and business goals).",
    "unit": "Unit 8: Software Engineering",
    "category": "Computer Science & Applications",
    "topicSlug": "software-testing-maintenance-se",
    "topicTitle": "Software Testing Strategies, Maintenance Models, Re-engineering & Reverse Engineering",
    "examType": "BPSC-TRE"
  },
  {
    "id": 134,
    "originalNumber": 134,
    "question": "What is the primary purpose and benefit of developing a software prototype during the early phases of SDLC?",
    "options": [
      {
        "id": "A",
        "text": "To serve as the final version of the software"
      },
      {
        "id": "B",
        "text": "To replace detailed documentation completely"
      },
      {
        "id": "C",
        "text": "To speed up the software development process blindly"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "The primary purpose of prototyping is to clarify ambiguous user requirements, validate design feasibility, and gather early customer feedback to avoid costly late revisions. None of A, B, or C describes this purpose accurately, so (E) None of the above is the official correct answer.",
    "unit": "Unit 8: Software Engineering",
    "category": "Computer Science & Applications",
    "topicSlug": "software-engineering-models-metrics",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "examType": "BPSC-TRE"
  },
  {
    "id": 135,
    "originalNumber": 135,
    "question": "What is the primary overarching goal of the discipline of Software Engineering?",
    "options": [
      {
        "id": "A",
        "text": "To write code efficiently"
      },
      {
        "id": "B",
        "text": "To develop reliable, high-quality software that meets user requirements within budget and schedule constraints"
      },
      {
        "id": "C",
        "text": "To develop software with the latest technologies"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Software engineering is the application of systematic, disciplined, and quantifiable engineering approaches to the development, operation, and maintenance of reliable software on time and within budget.",
    "unit": "Unit 8: Software Engineering",
    "category": "Computer Science & Applications",
    "topicSlug": "software-engineering-models-metrics",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "examType": "BPSC-TRE"
  },
  {
    "id": 136,
    "originalNumber": 136,
    "question": "Which of the following is considered a core pillar of Object-Oriented Programming (OOP)?",
    "options": [
      {
        "id": "A",
        "text": "Inheritance"
      },
      {
        "id": "B",
        "text": "Encapsulation"
      },
      {
        "id": "C",
        "text": "Abstraction"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "The four foundational pillars of Object-Oriented Programming are Encapsulation, Abstraction, Inheritance, and Polymorphism. Since all three choices (A, B, C) are fundamental pillars, the answer is (D) More than one of the above.",
    "unit": "Unit 9: Object-Oriented Programming",
    "category": "Computer Science & Applications",
    "topicSlug": "oop-concepts-cpp-java",
    "topicTitle": "OOP Concepts in C++ and Java: Classes, Objects, Inheritance, Polymorphism & Virtual Functions",
    "examType": "BPSC-TRE"
  },
  {
    "id": 137,
    "originalNumber": 137,
    "question": "Which keyword is used in the Java programming language to declare class inheritance (subclassing)?",
    "options": [
      {
        "id": "A",
        "text": "extends"
      },
      {
        "id": "B",
        "text": "inherits"
      },
      {
        "id": "C",
        "text": "implements"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "In Java, the `extends` keyword is used to inherit from a superclass (e.g. `class Dog extends Animal`). The `implements` keyword is used for interfaces.",
    "unit": "Unit 9: Object-Oriented Programming",
    "category": "Computer Science & Applications",
    "topicSlug": "java-multithreading-collections-framework",
    "topicTitle": "Java Multithreading, Synchronization, and Collections Framework",
    "examType": "BPSC-TRE"
  },
  {
    "id": 138,
    "originalNumber": 138,
    "question": "In Java, what is the effective access level when no access modifier keyword is specified, allowing access only within classes of the same package?",
    "options": [
      {
        "id": "A",
        "text": "private"
      },
      {
        "id": "B",
        "text": "public"
      },
      {
        "id": "C",
        "text": "package-private (default access)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "When no modifier is declared, Java applies default (package-private) accessibility, which restricts visibility to classes residing in the identical package.",
    "unit": "Unit 9: Object-Oriented Programming",
    "category": "Computer Science & Applications",
    "topicSlug": "java-multithreading-collections-framework",
    "topicTitle": "Java Multithreading, Synchronization, and Collections Framework",
    "examType": "BPSC-TRE"
  },
  {
    "id": 139,
    "originalNumber": 139,
    "question": "The concept of Inheritance in Object-Oriented Programming primarily allows a derived class to:",
    "options": [
      {
        "id": "A",
        "text": "Inherit state (fields) and behavior (methods) from another base class to promote code reuse"
      },
      {
        "id": "B",
        "text": "Create instances of another class"
      },
      {
        "id": "C",
        "text": "Override methods of another class"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Inheritance establishes an 'is-a' relationship, enabling the subclass to inherit variables and methods from the superclass (A) as well as override inherited methods to provide specialized behavior (C). Thus, (D) More than one of the above is correct.",
    "unit": "Unit 9: Object-Oriented Programming",
    "category": "Computer Science & Applications",
    "topicSlug": "oop-concepts-cpp-java",
    "topicTitle": "OOP Concepts in C++ and Java: Classes, Objects, Inheritance, Polymorphism & Virtual Functions",
    "examType": "BPSC-TRE"
  },
  {
    "id": 140,
    "originalNumber": 140,
    "question": "What is the primary role and purpose of HTML (HyperText Markup Language) in a web application?",
    "options": [
      {
        "id": "A",
        "text": "To define the structure and semantic layout of web page content"
      },
      {
        "id": "B",
        "text": "To style web pages and colors"
      },
      {
        "id": "C",
        "text": "To add interactive client-side logic and event handling"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "HTML defines the structural and semantic foundation of web documents. Styling is handled by CSS, and interactivity is driven by JavaScript.",
    "unit": "Unit 10: Web-Based Application Development",
    "category": "Computer Science & Applications",
    "topicSlug": "web-technologies-xml-security",
    "topicTitle": "Web Technologies: HTML5, CSS3, JavaScript, XML, and Web Security",
    "examType": "BPSC-TRE"
  },
  {
    "id": 141,
    "originalNumber": 141,
    "question": "Which of the following is commonly recognized as a server-side scripting or execution environment used in web backend systems?",
    "options": [
      {
        "id": "A",
        "text": "HTML"
      },
      {
        "id": "B",
        "text": "CSS"
      },
      {
        "id": "C",
        "text": "C++ (via CGI / FastCGI)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "HTML and CSS are purely client-side markup and stylesheet standards. C++ is a compiled systems language (not a traditional scripting language like PHP, Python, or Ruby). Hence, (E) None of the above is the official key.",
    "unit": "Unit 10: Web-Based Application Development",
    "category": "Computer Science & Applications",
    "topicSlug": "php-dom-node-backend-architecture",
    "topicTitle": "PHP, DOM, Node.js, and Backend Web Architecture",
    "examType": "BPSC-TRE"
  },
  {
    "id": 142,
    "originalNumber": 142,
    "question": "What is the computational decidability / complexity status of Turing's famous Halting Problem?",
    "options": [
      {
        "id": "A",
        "text": "O(1)"
      },
      {
        "id": "B",
        "text": "O(n)"
      },
      {
        "id": "C",
        "text": "Not computable (Undecidable)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Alan Turing proved in 1936 that the Halting Problem—determining whether an arbitrary program will finish running or run forever—is undecidable and cannot be computed by any algorithm or Turing machine.",
    "unit": "Unit 11: Theory of Computation",
    "category": "Computer Science & Applications",
    "topicSlug": "turing-machines-undecidability-toc",
    "topicTitle": "Turing Machines, Decidability, Undecidability & Halting Problem",
    "examType": "BPSC-TRE"
  },
  {
    "id": 143,
    "originalNumber": 143,
    "question": "Which of the following is NOT a separate architectural component in the formal mathematical definition of a standard deterministic Turing machine?",
    "options": [
      {
        "id": "A",
        "text": "Input tape"
      },
      {
        "id": "B",
        "text": "Output tape"
      },
      {
        "id": "C",
        "text": "Control unit (finite state control)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "A standard Turing machine has a single, infinite read/write tape that serves for both input and output storage, along with a tape head and a finite state control unit. It does not have a separate, dedicated 'output tape'.",
    "unit": "Unit 11: Theory of Computation",
    "category": "Computer Science & Applications",
    "topicSlug": "turing-machines-undecidability-toc",
    "topicTitle": "Turing Machines, Decidability, Undecidability & Halting Problem",
    "examType": "BPSC-TRE"
  },
  {
    "id": 144,
    "originalNumber": 144,
    "question": "Which wireless communication technology is commonly utilized in Internet of Things (IoT) sensors and edge devices for short-range connectivity?",
    "options": [
      {
        "id": "A",
        "text": "Bluetooth (BLE)"
      },
      {
        "id": "B",
        "text": "Wi-Fi"
      },
      {
        "id": "C",
        "text": "4G LTE"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Both Bluetooth Low Energy (BLE) and Wi-Fi (along with Zigbee) are ubiquitous short-range wireless technologies utilized extensively in smart home and IoT architectures. Therefore, (D) More than one of the above is correct.",
    "unit": "Unit 12: Internet of Things",
    "category": "Computer Science & Applications",
    "topicSlug": "iot-protocols-coap-mqtt-sensors",
    "topicTitle": "IoT Protocols, CoAP, MQTT, Sensors & Actuators",
    "examType": "BPSC-TRE"
  },
  {
    "id": 145,
    "originalNumber": 145,
    "question": "Which of the following lightweight, publish-subscribe protocols is specifically designed for constrained IoT device-to-broker telemetry messaging?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "MQTT (Message Queuing Telemetry Transport)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "MQTT (Message Queuing Telemetry Transport) is an extremely lightweight publish/subscribe messaging transport protocol optimized for resource-constrained devices, high latency, and low-bandwidth IoT networks.",
    "unit": "Unit 12: Internet of Things",
    "category": "Computer Science & Applications",
    "topicSlug": "iot-protocols-coap-mqtt-sensors",
    "topicTitle": "IoT Protocols, CoAP, MQTT, Sensors & Actuators",
    "examType": "BPSC-TRE"
  },
  {
    "id": 146,
    "originalNumber": 146,
    "question": "Which of the following fields is recognized as a major domain or subfield of Artificial Intelligence (AI)?",
    "options": [
      {
        "id": "A",
        "text": "Machine Learning (ML)"
      },
      {
        "id": "B",
        "text": "Robotics"
      },
      {
        "id": "C",
        "text": "Natural Language Processing (NLP)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Artificial Intelligence encompasses Machine Learning, Computer Vision, Robotics, and Natural Language Processing. Since A, B, and C are all prominent subfields of AI, (D) More than one of the above is correct.",
    "unit": "Unit 13: Artificial Intelligence",
    "category": "Computer Science & Applications",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "topicTitle": "AI Search Strategies, Heuristics (A*, AO*), Game Playing & Knowledge Representation",
    "examType": "BPSC-TRE"
  },
  {
    "id": 147,
    "originalNumber": 147,
    "question": "Which of the following algorithms is an example of a Supervised Learning algorithm?",
    "options": [
      {
        "id": "A",
        "text": "Decision Tree"
      },
      {
        "id": "B",
        "text": "K-means Clustering"
      },
      {
        "id": "C",
        "text": "Reinforcement Learning Q-learning"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "A Decision Tree trains on labeled dataset tuples to perform classification or regression under supervised learning. (K-means is unsupervised clustering; Q-learning is reinforcement learning).",
    "unit": "Unit 13: Artificial Intelligence",
    "category": "Computer Science & Applications",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "topicTitle": "AI Search Strategies, Heuristics (A*, AO*), Game Playing & Knowledge Representation",
    "examType": "BPSC-TRE"
  },
  {
    "id": 148,
    "originalNumber": 148,
    "question": "Which of the following is NOT an established commercial business transaction model in E-Commerce?",
    "options": [
      {
        "id": "A",
        "text": "Business-to-Consumer (B2C)"
      },
      {
        "id": "B",
        "text": "Consumer-to-Business (C2B)"
      },
      {
        "id": "C",
        "text": "Consumer-to-Consumer (C2C)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "E",
    "explanation": "B2C (Amazon), C2B (freelance bidding/influencer sponsorships), and C2C (eBay/OLX) are all established, standard e-commerce operational transaction models. Since all are valid models, none is 'NOT a common model', making (E) None of the above the correct answer.",
    "unit": "Unit 14: Fundamentals of E-Commerce",
    "category": "Computer Science & Applications",
    "topicSlug": "ecommerce-frameworks",
    "topicTitle": "E-Commerce Business Models, Frameworks & Payment Systems",
    "examType": "BPSC-TRE"
  },
  {
    "id": 149,
    "originalNumber": 149,
    "question": "Which of the following prominent global websites is a prime example of a Business-to-Consumer (B2C) E-Commerce marketplace?",
    "options": [
      {
        "id": "A",
        "text": "Alibaba (primarily B2B)"
      },
      {
        "id": "B",
        "text": "Amazon"
      },
      {
        "id": "C",
        "text": "Google (Search engine/ad platform)"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Amazon is the archetype of a Business-to-Consumer (B2C) e-commerce retailer selling consumer goods directly to end users. (Alibaba is primarily B2B wholesale).",
    "unit": "Unit 14: Fundamentals of E-Commerce",
    "category": "Computer Science & Applications",
    "topicSlug": "ecommerce-frameworks",
    "topicTitle": "E-Commerce Business Models, Frameworks & Payment Systems",
    "examType": "BPSC-TRE"
  },
  {
    "id": 150,
    "originalNumber": 150,
    "question": "Which of the following software applications was historically developed and used as a comprehensive multimedia authoring and animation tool?",
    "options": [
      {
        "id": "A",
        "text": "Microsoft Word"
      },
      {
        "id": "B",
        "text": "Adobe Photoshop"
      },
      {
        "id": "C",
        "text": "Adobe Flash"
      },
      {
        "id": "D",
        "text": "More than one of the above"
      },
      {
        "id": "E",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Adobe Flash (originally Macromedia Flash) was the industry-standard multimedia authoring environment used to create rich interactive vector graphics, browser animations, audio/video synchronization, and web games. (Photoshop is an image editor, Word is a word processor).",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "category": "Computer Science & Applications",
    "topicSlug": "multimedia-formats",
    "topicTitle": "Multimedia Formats, Audio/Video Compression & Streaming Protocols",
    "examType": "BPSC-TRE"
  }
]
};
