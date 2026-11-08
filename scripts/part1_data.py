# scripts/part1_data.py
# Part-I: Language (Qualifying) - 30 Questions (Q1 to Q30)
# English: Q1 to Q8 | Hindi: Q9 to Q30

part1_questions = [
    {
        "id": 1,
        "originalNumber": 1,
        "question": "Read the passage and answer: 'Kerala is just the place for you if you love variety. There is something here to please everyone. You are sure to fall in love with the serene beauty of Kerala\\'s magical backwaters...'\n\nWhy is Kerala just the place for you if you love variety?",
        "options": [
            {"id": "A", "text": "There is something here to please everyone"},
            {"id": "B", "text": "Kerala has magical backwaters"},
            {"id": "C", "text": "Kerala is very boring"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "According to the opening lines of the passage: 'Kerala is just the place for you if you love variety. There is something here to please everyone.'",
        "unit": "Part I: Language (English)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 2,
        "originalNumber": 2,
        "question": "According to the passage, why should you take a trip to the spice gardens in the hills?",
        "options": [
            {"id": "A", "text": "To count the spices that are grown there"},
            {"id": "B", "text": "To buy some spices"},
            {"id": "C", "text": "To inhale the fragrance of fresh cardamoms"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The passage explicitly advises: 'Better still, take a trip to the spice gardens in the hills, to inhale the fragrance of fresh cardamoms...'",
        "unit": "Part I: Language (English)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 3,
        "originalNumber": 3,
        "question": "According to the passage, what is Kerala's cuisine known for?",
        "options": [
            {"id": "A", "text": "For its bad taste"},
            {"id": "B", "text": "For being bland"},
            {"id": "C", "text": "For its spicy hot flavours"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The text states: 'Kerala\\'s cuisine is known for its spicy hot flavours.'",
        "unit": "Part I: Language (English)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 4,
        "originalNumber": 4,
        "question": "What gives seafood in Kerala its pungency?",
        "options": [
            {"id": "A", "text": "Coconut and spices"},
            {"id": "B", "text": "Coconut & spices enhanced by tamarind"},
            {"id": "C", "text": "Addition of cocacola"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "The passage states: 'The coconut and the spices give the food - especially the seafood a pungency that is enhanced by tamarind.'",
        "unit": "Part I: Language (English)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 5,
        "originalNumber": 5,
        "question": "Why would foreign bargain-hunter visitors never face a problem in Kerala?",
        "options": [
            {"id": "A", "text": "Many foreign languages are spoken in Kerala"},
            {"id": "B", "text": "Hindi is the language of communication in the cities of kerala."},
            {"id": "C", "text": "English is spoken and understood everywhere in Kerala."},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The passage confirms: 'Bargain-hunters will never have a problem since English is spoken and understood everywhere in Kerala.'",
        "unit": "Part I: Language (English)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 6,
        "originalNumber": 6,
        "question": "Fill in the blank with suitable article: 'If you reach _____ Airport on time, you will catch the flight.'",
        "options": [
            {"id": "A", "text": "a"},
            {"id": "B", "text": "an"},
            {"id": "C", "text": "the"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The definite article 'the' is required because a specific airport from which the flight departs is being referred to in the context of catching the flight.",
        "unit": "Part I: Language (English)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 7,
        "originalNumber": 7,
        "question": "Fill in the blank with suitable article: 'You should go for ____ early morning walk.'",
        "options": [
            {"id": "A", "text": "the"},
            {"id": "B", "text": "a"},
            {"id": "C", "text": "an"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The adjective 'early' begins with an initial vowel sound (/ɜːr/), so the indefinite article 'an' must precede it.",
        "unit": "Part I: Language (English)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 8,
        "originalNumber": 8,
        "question": "If 30th April is Tuesday, what day of the week would be 10th May?",
        "options": [
            {"id": "A", "text": "Monday"},
            {"id": "B", "text": "Thursday"},
            {"id": "C", "text": "Saturday"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "April has 30 days. If 30th April is Tuesday: 1st May is Wednesday; 8th May is Wednesday (7 days later); 9th May is Thursday; 10th May is Friday. Since Friday is not among options (A) Monday, (B) Thursday, or (C) Saturday, the correct answer is (E) None of the above.",
        "unit": "Part I: Language (English)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 9,
        "originalNumber": 9,
        "question": "गद्यांश आधारित प्रश्न: 'रतन और अजय एक ही स्कूल के छात्र थे। रतन गरीब था और अजय धनी... एक बार रतन से नाराज होकर अजय भाग रहा था। रतन ने दौड़कर अजय को रोकना चाहा। इतने ही में एक मोटर के नीचे वह गिर गया।'\n\nरतन ने दौड़कर अजय को क्यों रोकना चाहा?",
        "options": [
            {"id": "A", "text": "रतन अजय से प्यार करता था"},
            {"id": "B", "text": "रतन और अजय एक ही स्कूल में पढ़ते थे"},
            {"id": "C", "text": "एक बार रतन से नाराज होकर अजय भाग रहा था"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "C",
        "explanation": "गद्यांश में स्पष्ट उल्लेख है: 'एक बार रतन से नाराज होकर अजय भाग रहा था। रतन ने दौड़कर अजय को रोकना चाहा।'",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 10,
        "originalNumber": 10,
        "question": "रतन अजय को अच्छा छात्र बनने के लिए क्यों सलाह देता था?",
        "options": [
            {"id": "A", "text": "दिली दोस्त होने के कारण"},
            {"id": "B", "text": "एक स्कूल में पढ़ने के कारण"},
            {"id": "C", "text": "भाई होने के कारण"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "A",
        "explanation": "गद्यांश के अनुसार: 'रतन और अजय दिली दोस्त थे। इसलिए रतन अजय को अच्छा छात्र बनने के लिए सलाह देता था।'",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 11,
        "originalNumber": 11,
        "question": "रतन कैसा छात्र था?",
        "options": [
            {"id": "A", "text": "गरीब"},
            {"id": "B", "text": "पढ़ने में तेज"},
            {"id": "C", "text": "समझदार"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "D",
        "explanation": "गद्यांश के अनुसार: 'रतन गरीब था...' और 'रतन गरीब होकर भी पढ़ने में तेज था।' चूंकि A (गरीब) और B (पढ़ने में तेज) दोनों सत्य हैं, अतः उत्तर (D) उपर्युक्त में से एक से अधिक है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 12,
        "originalNumber": 12,
        "question": "रतन और अजय आपस में क्या थे?",
        "options": [
            {"id": "A", "text": "दोस्त"},
            {"id": "B", "text": "दिली दोस्त"},
            {"id": "C", "text": "भाई"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "D",
        "explanation": "गद्यांश में दोनों को 'दोस्त' तथा विशेष रूप से 'दिली दोस्त' कहा गया है। दोनों विकल्प सही होने के कारण उत्तर (D) उपर्युक्त में से एक से अधिक है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 13,
        "originalNumber": 13,
        "question": "सभी शिक्षक रतन से क्यों प्रसन्न रहते थे?",
        "options": [
            {"id": "A", "text": "रतन की निर्धनता के कारण"},
            {"id": "B", "text": "रतन के परिश्रमी होने के कारण"},
            {"id": "C", "text": "रतन के व्यवहार के कारण"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "C",
        "explanation": "गद्यांश के अनुसार: 'सभी शिक्षक उसके व्यवहार से प्रसन्न रहते थे।'",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 14,
        "originalNumber": 14,
        "question": "अजय किस काम में अधिक ध्यान लगाता था?",
        "options": [
            {"id": "A", "text": "झगड़ने में"},
            {"id": "B", "text": "पढ़ने में"},
            {"id": "C", "text": "दौड़ने में"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "E",
        "explanation": "गद्यांश में उल्लिखित है कि अजय 'पढ़ने के बदले खेलने-कूदने और बदमाशी में अधिक ध्यान लगाता था'। खेलने-कूदने व बदमाशी विकल्पों में नहीं दिया गया है, अतः सही उत्तर (E) उपर्युक्त में से कोई नहीं है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 15,
        "originalNumber": 15,
        "question": "गद्यांश आधारित प्रश्न: 'शिवाजी भारत के महान् वीरों में से एक थे... वे केवल वीर ही नहीं, बल्कि एक अच्छे राजनीतिज्ञ भी थे।'\n\nशिवाजी वीर होने के साथ और क्या थे?",
        "options": [
            {"id": "A", "text": "एक अच्छे राजनीतिज्ञ"},
            {"id": "B", "text": "श्रेष्ठ विचारक"},
            {"id": "C", "text": "कुशल सम्राट"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "A",
        "explanation": "गद्यांश के अनुसार: 'वे केवल वीर ही नहीं, बल्कि एक अच्छे राजनीतिज्ञ भी थे।'",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 16,
        "originalNumber": 16,
        "question": "शिवाजी ने लोगों में कौन-सी भावना भर दी?",
        "options": [
            {"id": "A", "text": "हिन्दुत्व की"},
            {"id": "B", "text": "एक राष्ट्र की"},
            {"id": "C", "text": "वीरता की"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "B",
        "explanation": "गद्यांश के अनुसार: 'उन्होंने लोगों में एक राष्ट्र की भावना भर दी और मराठा राज्य की स्थापना की।'",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 17,
        "originalNumber": 17,
        "question": "शिवाजी कौन थे?",
        "options": [
            {"id": "A", "text": "भारत का पराक्रमी योद्धा"},
            {"id": "B", "text": "भारत के महान् वीरों में से एक"},
            {"id": "C", "text": "भारत का महान् सम्राट"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "B",
        "explanation": "गद्यांश की प्रथम पंक्ति है: 'शिवाजी भारत के महान् वीरों में से एक थे।'",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 18,
        "originalNumber": 18,
        "question": "लोग शिवाजी का आदर क्यों करते थे?",
        "options": [
            {"id": "A", "text": "उनकी वीरता के कारण"},
            {"id": "B", "text": "कट्टर हिन्दू होने के कारण"},
            {"id": "C", "text": "उनके अच्छे गुणों के कारण"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "C",
        "explanation": "गद्यांश में लिखा है: 'उनके अच्छे गुणों के कारण सभी लोग उनका आदर करते थे।'",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 19,
        "originalNumber": 19,
        "question": "इनमें 'राजनीतिज्ञ' शब्द का अर्थ है -",
        "options": [
            {"id": "A", "text": "वह नीति जिससे राष्ट्र का संचालन होता है"},
            {"id": "B", "text": "वह नीति जिससे शासन का संचालन होता है"},
            {"id": "C", "text": "राजनीति से संबंधित नीति"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "E",
        "explanation": "'राजनीतिज्ञ' का अर्थ राजनीति का ज्ञाता अथवा कूटनीतिज्ञ/राजनेता (व्यक्ति) होता है। विकल्पों में दी गई परिभाषाएं 'राजनीति' (नीति) की हैं, राजनीतिज्ञ (व्यक्ति) की नहीं। अतः (E) उपर्युक्त में से कोई नहीं सही उत्तर है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 20,
        "originalNumber": 20,
        "question": "इनमें अपठित गद्यांश का सर्वाधिक उपयुक्त शीर्षक है -",
        "options": [
            {"id": "A", "text": "शिवाजी की राष्ट्रीय चेतना"},
            {"id": "B", "text": "शिवाजी का जीवन"},
            {"id": "C", "text": "शिवाजी का पराक्रम"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "B",
        "explanation": "गद्यांश छत्रपति शिवाजी के जीवन, चरित्र, शासन-कौशल और आदर्शों का समग्र निरूपण करता है ('हम लोगों को उनके जीवन से शिक्षा लेनी चाहिए'), अतः 'शिवाजी का जीवन' सर्वाधिक उपयुक्त शीर्षक है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 21,
        "originalNumber": 21,
        "question": "इनमें व्यक्तिवाचक संज्ञा है -",
        "options": [
            {"id": "A", "text": "नदी"},
            {"id": "B", "text": "गंगा"},
            {"id": "C", "text": "ब्रह्मपुत्र"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "D",
        "explanation": "'गंगा' और 'ब्रह्मपुत्र' दोनों विशिष्ट नदियों के नाम होने के कारण व्यक्तिवाचक संज्ञाएँ हैं, जबकि 'नदी' जातिवाचक संज्ञा है। अतः (D) उपर्युक्त में से एक से अधिक सही है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 22,
        "originalNumber": 22,
        "question": "इनमें उत्तमपुरुष सर्वनाम है -",
        "options": [
            {"id": "A", "text": "मैं"},
            {"id": "B", "text": "तू"},
            {"id": "C", "text": "वह"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "A",
        "explanation": "पुरुषवाचक सर्वनाम में वक्ता अपने लिए उत्तम पुरुष सर्वनाम ('मैं', 'हम') का प्रयोग करता है। 'तू' मध्यम पुरुष है तथा 'वह' अन्य पुरुष है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 23,
        "originalNumber": 23,
        "question": "\"दुकान पर कोई नहीं था।\" वाक्य में किस कारक का चिह्न प्रयुक्त हुआ है?",
        "options": [
            {"id": "A", "text": "अपादान कारक"},
            {"id": "B", "text": "संबंध कारक"},
            {"id": "C", "text": "अधिकरण कारक"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "C",
        "explanation": "संज्ञा या सर्वनाम के जिस रूप से क्रिया के आधार (स्थान/समय) का बोध हो, उसे अधिकरण कारक कहते हैं। इसके परसर्ग 'में' और 'पर' हैं। अतः 'दुकान पर' में अधिकरण कारक है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 24,
        "originalNumber": 24,
        "question": "इनमें तत्सम शब्द है -",
        "options": [
            {"id": "A", "text": "बच्चा"},
            {"id": "B", "text": "पुष्प"},
            {"id": "C", "text": "चौदह"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "B",
        "explanation": "'पुष्प' संस्कृत का तत्सम शब्द है (तद्भव 'फूल' होता है)। 'बच्चा' (तत्सम: वत्स) तथा 'चौदह' (तत्सम: चतुर्दश) तद्भव शब्द हैं।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 25,
        "originalNumber": 25,
        "question": "इनमें शुद्ध वर्तनी वाला शब्द है -",
        "options": [
            {"id": "A", "text": "निरपराधी"},
            {"id": "B", "text": "प्राणिक"},
            {"id": "C", "text": "महत्व"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "E",
        "explanation": "'निरपराधी' अशुद्ध है (शुद्ध रूप 'निरपराध' होता है); 'महत्व' अशुद्ध है (शुद्ध रूप 'महत्त्व' द्वित्व त् के साथ); 'प्राणिक' अशुद्ध है (शुद्ध रूप 'प्राणि'/'प्राणी')। अतः तीनों अशुद्ध हैं, सही विकल्प (E) उपर्युक्त में से कोई नहीं है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 26,
        "originalNumber": 26,
        "question": "इनमें 'उत्कृष्ट' शब्द का विपरीतार्थक शब्द है -",
        "options": [
            {"id": "A", "text": "निकृष्ट"},
            {"id": "B", "text": "अधम"},
            {"id": "C", "text": "नीच"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "A",
        "explanation": "'उत्कृष्ट' का विलोम शब्द 'निकृष्ट' होता है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 27,
        "originalNumber": 27,
        "question": "इनमें शुद्ध वाक्य है -",
        "options": [
            {"id": "A", "text": "किसी भी आदमी को भेज दो"},
            {"id": "B", "text": "हम तो अवश्य जायेंगे"},
            {"id": "C", "text": "यह कविता अनेक भाव प्रकट करती है"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "C",
        "explanation": "'यह कविता अनेक भाव प्रकट करती है' व्याकरण एवं अर्थ की दृष्टि से सर्वथा शुद्ध वाक्य है। विकल्प A में 'भी' का अनावश्यक प्रयोग है तथा B में 'तो' व 'अवश्य' का दोहराव त्रुटिपूर्ण है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 28,
        "originalNumber": 28,
        "question": "इनमें 'जल' शब्द का पर्यायवाची शब्द है -",
        "options": [
            {"id": "A", "text": "जीवन"},
            {"id": "B", "text": "अमृत"},
            {"id": "C", "text": "पानी"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "D",
        "explanation": "हिंदी में 'पानी', 'जीवन' (जल ही जीवन है/जल का अनेकार्थी पर्यायवाची) तथा 'अमृत' (पीयूष/जल) सभी संदर्भानुसार जल के पर्यायवाची माने जाते हैं। अतः (D) उपर्युक्त में से एक से अधिक सही है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 29,
        "originalNumber": 29,
        "question": "\"जहाँ लोगों का मिलन हो\" वाक्यांश के लिए एक शब्द है -",
        "options": [
            {"id": "A", "text": "मेला"},
            {"id": "B", "text": "सम्मेलन"},
            {"id": "C", "text": "मेल"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "B",
        "explanation": "जहाँ लोगों का औपचारिक या वैचारिक मिलन/एकत्रीकरण हो, उस सभा या मिलन को 'सम्मेलन' कहते हैं।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 30,
        "originalNumber": 30,
        "question": "\"खटाई में पड़ना\" मुहावरे का अर्थ है -",
        "options": [
            {"id": "A", "text": "झमेले में पड़ना"},
            {"id": "B", "text": "चैन मिलना"},
            {"id": "C", "text": "विघ्न आना"},
            {"id": "D", "text": "उपर्युक्त में से एक से अधिक"},
            {"id": "E", "text": "उपर्युक्त में से कोई नहीं"}
        ],
        "correctOption": "D",
        "explanation": "'खटाई में पड़ना' मुहावरे का अर्थ कार्य में अड़चन या विघ्न आना तथा किसी मामले का झमेले/अनिश्चय में लटक जाना होता है। A और C दोनों अर्थ सटीक होने के कारण सही उत्तर (D) उपर्युक्त में से एक से अधिक है।",
        "unit": "Part I: Language (Hindi)",
        "category": "Language (Qualifying)",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    }
]
