# scripts/part2_data.py
# Part-II: General Studies - 40 Questions (Q31 to Q70)

part2_questions = [
    {
        "id": 31,
        "originalNumber": 31,
        "question": "Which of the following is the algebraic expansion of (x + 1/x)^2?",
        "options": [
            {"id": "A", "text": "x^2 + 1/x^2"},
            {"id": "B", "text": "x^2 - 1/x^2"},
            {"id": "C", "text": "x^2 + 1/x^2 + 1"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "Using the algebraic identity (a + b)^2 = a^2 + 2ab + b^2 with a = x and b = 1/x, we get (x + 1/x)^2 = x^2 + 2(x)(1/x) + 1/x^2 = x^2 + 1/x^2 + 2. None of options A, B, or C contains '+ 2', so the correct answer is (E) None of the above.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 32,
        "originalNumber": 32,
        "question": "An article is marked at 10% more than the Cost Price (CP). If a discount of 10% is allowed on the marked price, then which of the following is correct?",
        "options": [
            {"id": "A", "text": "1% gain"},
            {"id": "B", "text": "1% loss"},
            {"id": "C", "text": "no gain no loss"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Let CP = 100. Marked Price (MP) = 100 + 10 = 110. A discount of 10% on MP = 10% of 110 = 11. Selling Price (SP) = 110 - 11 = 99. Loss = CP - SP = 100 - 99 = 1, which represents a 1% loss.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 33,
        "originalNumber": 33,
        "question": "By what smallest natural number should 81 be divided to obtain a perfect cube?",
        "options": [
            {"id": "A", "text": "3"},
            {"id": "B", "text": "6"},
            {"id": "C", "text": "7"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Prime factorizing 81 gives 81 = 3 * 3 * 3 * 3 = 3^4. A perfect cube requires powers of prime factors to be multiples of 3. Dividing 81 by 3 yields 81 / 3 = 27 = 3^3, which is a perfect cube.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 34,
        "originalNumber": 34,
        "question": "The difference between two whole numbers is 66. The ratio of the two numbers is 2:5. The two numbers are:",
        "options": [
            {"id": "A", "text": "60 and 6"},
            {"id": "B", "text": "100 and 33"},
            {"id": "C", "text": "110 and 44"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Let the numbers be 2x and 5x. Their difference is 5x - 2x = 3x = 66 => x = 22. Thus, the smaller number is 2(22) = 44, and the larger number is 5(22) = 110.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 35,
        "originalNumber": 35,
        "question": "In a parallelogram ABCD, adjacent angles ∠A and ∠B are in the ratio 1:2. Find the measure of ∠A.",
        "options": [
            {"id": "A", "text": "30°"},
            {"id": "B", "text": "45°"},
            {"id": "C", "text": "60°"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "In any parallelogram, adjacent angles are supplementary: ∠A + ∠B = 180°. Given ∠A:∠B = 1:2, let ∠A = x and ∠B = 2x. Then x + 2x = 3x = 180° => x = 60°. Therefore, ∠A = 60°.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 36,
        "originalNumber": 36,
        "question": "The height of a right circular cylinder whose radius is 7 cm and total surface area is 968 cm^2 is:",
        "options": [
            {"id": "A", "text": "15 cm"},
            {"id": "B", "text": "17 cm"},
            {"id": "C", "text": "19 cm"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Total surface area of a cylinder = 2πr(h + r). Substituting r = 7 cm and π = 22/7: 2 * (22/7) * 7 * (h + 7) = 968 => 44 * (h + 7) = 968 => h + 7 = 968 / 44 = 22 => h = 22 - 7 = 15 cm.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 37,
        "originalNumber": 37,
        "question": "If (-3)^(m+1) × (-3)^5 = (-3)^7, then the value of m is:",
        "options": [
            {"id": "A", "text": "5"},
            {"id": "B", "text": "7"},
            {"id": "C", "text": "1"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Using exponent product rule a^p × a^q = a^(p+q), (-3)^((m+1)+5) = (-3)^7 => (-3)^(m+6) = (-3)^7. Equating powers: m + 6 = 7 => m = 1.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 38,
        "originalNumber": 38,
        "question": "If two quantities x and y are inversely proportional, then which of the following relationships holds true?",
        "options": [
            {"id": "A", "text": "y/x = constant"},
            {"id": "B", "text": "xy = constant"},
            {"id": "C", "text": "x/y = constant"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "By definition of inverse variation, y ∝ 1/x, which directly implies x × y = k (where k is a non-zero constant).",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 39,
        "originalNumber": 39,
        "question": "A piece of wire of resistance R is cut into 5 equal parts. These parts are then connected in parallel. If the equivalent resistance of the combination is R', then the ratio R/R' is:",
        "options": [
            {"id": "A", "text": "1/25"},
            {"id": "B", "text": "1/5"},
            {"id": "C", "text": "25"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Each of the 5 pieces has resistance r = R/5. When 5 identical resistors of value R/5 are connected in parallel, the equivalent resistance is R' = r / 5 = (R/5) / 5 = R / 25. Therefore, R / R' = R / (R/25) = 25.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 40,
        "originalNumber": 40,
        "question": "An electric heater of resistance 8 Ω draws a 15 A current from service mains for 2 hours. What will be the rate at which heat is developed in the heater?",
        "options": [
            {"id": "A", "text": "220 watt"},
            {"id": "B", "text": "120 watt"},
            {"id": "C", "text": "210 watt"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "The rate at which heat is developed is power P = I^2 × R. With I = 15 A and R = 8 Ω: P = 15^2 × 8 = 225 × 8 = 1800 W (Joules/sec). Since 1800 W is not among the options (A: 220 W, B: 120 W, C: 210 W), the correct answer is (E) None of the above.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 41,
        "originalNumber": 41,
        "question": "Which of the following lenses would you prefer to use while reading small letters found in a dictionary?",
        "options": [
            {"id": "A", "text": "A convex lens of focal length 50 cm"},
            {"id": "B", "text": "A concave lens of focal length 50 cm"},
            {"id": "C", "text": "A concave lens of focal length 5 cm"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "For reading small print with high magnification, a convex (converging) lens of short focal length (e.g. 5 cm) is required (Magnification m ≈ 1 + D/f). The options only list a convex lens of 50 cm (very low magnification) and concave lenses (which produce diminished images). A convex lens of 5 cm is not listed, so (E) None of the above is the correct official answer.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 42,
        "originalNumber": 42,
        "question": "The human eye forms the image of an object at its:",
        "options": [
            {"id": "A", "text": "Cornea"},
            {"id": "B", "text": "Iris"},
            {"id": "C", "text": "Retina"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The light entering the eye is refracted by the cornea and lens to converge and form a real, inverted image on the light-sensitive retina.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 43,
        "originalNumber": 43,
        "question": "Which of the following is NOT a part of the female reproductive system in human beings?",
        "options": [
            {"id": "A", "text": "Ovary"},
            {"id": "B", "text": "Uterus"},
            {"id": "C", "text": "Vas deferens"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The vas deferens is a duct that transports sperm from the epididymis to the ejaculatory ducts, forming a key part of the male reproductive system.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 44,
        "originalNumber": 44,
        "question": "The anther of a flower contains:",
        "options": [
            {"id": "A", "text": "Sepals"},
            {"id": "B", "text": "Ovules"},
            {"id": "C", "text": "Pollen grains"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The stamen is the male reproductive part of a plant consisting of a filament and an anther. The anther produces and stores pollen grains (microspores).",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 45,
        "originalNumber": 45,
        "question": "Asexual reproduction takes place through budding in:",
        "options": [
            {"id": "A", "text": "Amoeba"},
            {"id": "B", "text": "Yeast"},
            {"id": "C", "text": "Plasmodium"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Budding is a form of asexual reproduction characteristic of Yeast and Hydra, where a new organism develops from an outgrowth or bud due to cell division at one particular site. Amoeba reproduces by binary fission and Plasmodium by multiple fission.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 46,
        "originalNumber": 46,
        "question": "Which one of the following types of medicines is used for treating indigestion caused by excess stomach acid?",
        "options": [
            {"id": "A", "text": "Antibiotic"},
            {"id": "B", "text": "Antacid"},
            {"id": "C", "text": "Analgesic"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Antacids (such as magnesium hydroxide/milk of magnesia and aluminium hydroxide) are basic compounds that neutralize excess hydrochloric acid in the stomach.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 47,
        "originalNumber": 47,
        "question": "The task of physically accepting and processing citizenship document verifications under the Citizenship Amendment Act (CAA) portal rules is assigned primarily via:",
        "options": [
            {"id": "A", "text": "Postal Department"},
            {"id": "B", "text": "Census Department"},
            {"id": "C", "text": "Central Security IB"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Under the CAA 2024 implementation framework, the Department of Posts (Postal Department / post offices) acts as the physical nodal verification center for document submission and biometric verification.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 48,
        "originalNumber": 48,
        "question": "In which of the following countries did India officially launch its Unified Payments Interface (UPI) cross-border services in early 2024?",
        "options": [
            {"id": "A", "text": "Thailand"},
            {"id": "B", "text": "Myanmar"},
            {"id": "C", "text": "Mauritius"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "India officially launched UPI and RuPay card services in Mauritius and Sri Lanka via video conferencing on February 12, 2024.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 49,
        "originalNumber": 49,
        "question": "What is the name of the crewed human spaceflight spacecraft project by ISRO designed to carry Indian astronauts into Low Earth Orbit?",
        "options": [
            {"id": "A", "text": "Akashyan"},
            {"id": "B", "text": "Gaganyaan"},
            {"id": "C", "text": "Bhramyan"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Gaganyaan ('Celestial Vehicle') is India\\'s maiden human spaceflight programme by ISRO aiming to demonstrate human spaceflight capability to Low Earth Orbit (LEO).",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 50,
        "originalNumber": 50,
        "question": "Which country is currently NOT a member of the Group of Seven (G7)?",
        "options": [
            {"id": "A", "text": "Russia"},
            {"id": "B", "text": "Canada"},
            {"id": "C", "text": "USA"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "The G7 consists of the US, UK, Canada, France, Germany, Italy, and Japan. Russia was suspended indefinitely in 2014 following its annexation of Crimea, returning the forum to the G7.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 51,
        "originalNumber": 51,
        "question": "The primary clean process involved in producing Green Hydrogen using renewable electricity is:",
        "options": [
            {"id": "A", "text": "Electrolysis"},
            {"id": "B", "text": "Dehydrogenesis"},
            {"id": "C", "text": "Dehydration"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Green hydrogen is produced by water electrolysis—splitting water molecules into hydrogen and oxygen (2H2O -> 2H2 + O2) using renewable electricity (solar or wind) with zero carbon emissions.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 52,
        "originalNumber": 52,
        "question": "Which technology can be used to recreate the likeness, voice, and interactive persona of deceased individuals?",
        "options": [
            {"id": "A", "text": "Deepfake"},
            {"id": "B", "text": "AI (Artificial Intelligence)"},
            {"id": "C", "text": "Chatbot"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Both Artificial Intelligence (generative neural models), Deepfake voice/video synthesis, and AI conversational chatbots can be used together to recreate deceased personalities (digital resurrection / grief tech). Thus (D) More than one of the above is correct.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 53,
        "originalNumber": 53,
        "question": "In international Cost of Living Index rankings (lower living expense index / cheaper affordability), which neighboring country ranks lower (cheaper) than India?",
        "options": [
            {"id": "A", "text": "Nigeria"},
            {"id": "B", "text": "Pakistan"},
            {"id": "C", "text": "Bangladesh"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "In global cost-of-living indices (such as Numbeo 2024), Pakistan is ranked with a lower cost-of-living index than India, reflecting cheaper consumer price indices in local currency equivalents.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 54,
        "originalNumber": 54,
        "question": "Who among the following prominent leaders supported and assisted Mahatma Gandhi during the Champaran Satyagraha in 1917?",
        "options": [
            {"id": "A", "text": "Birsa Munda"},
            {"id": "B", "text": "Dr. Rajendra Prasad"},
            {"id": "C", "text": "Satya Narayan Sinha"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Dr. Rajendra Prasad, along with Acharya J.B. Kripalani, Mazharul Haque, Anugrah Narayan Sinha, and Brajkishore Prasad, accompanied and strongly assisted Mahatma Gandhi during the historic Champaran Satyagraha in 1917 against the Tinkathia system.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 55,
        "originalNumber": 55,
        "question": "Which planet in the Solar System has a surface most similar to Earth\\'s Moon in being heavily cratered, barren, and lacking a substantial atmosphere?",
        "options": [
            {"id": "A", "text": "Mercury"},
            {"id": "B", "text": "Mars"},
            {"id": "C", "text": "Earth"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Mercury has a heavily cratered, geologically inactive surface that closely resembles Earth\\'s Moon, with no significant atmosphere to retain heat or weather craters.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 56,
        "originalNumber": 56,
        "question": "On the basis of fossil discoveries (e.g. Australopithecus, Homo habilis), which region is recognized as the origin place of early human beings?",
        "options": [
            {"id": "A", "text": "Rift Valley of Africa"},
            {"id": "B", "text": "Central Asia"},
            {"id": "C", "text": "Jerusalem"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "The East African Great Rift Valley (including Olduvai Gorge in Tanzania, Hadar and Omo in Ethiopia) has yielded the oldest hominid fossil remains, establishing it as the cradle of humankind.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 57,
        "originalNumber": 57,
        "question": "In human geography in India, 'dry point settlements' are typically established in:",
        "options": [
            {"id": "A", "text": "Flood prone areas"},
            {"id": "B", "text": "Bikaner"},
            {"id": "C", "text": "Aravali region"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Dry point settlements are rural settlements situated on higher, dry ground within low-lying or flood-prone regions to escape recurrent inundation while staying near fertile water basins.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 58,
        "originalNumber": 58,
        "question": "In which district of Bihar is the production of Paddy (rice) the highest?",
        "options": [
            {"id": "A", "text": "Bhojpur"},
            {"id": "B", "text": "Rohtas"},
            {"id": "C", "text": "Nalanda"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Rohtas district is renowned as the 'Rice Bowl of Bihar' due to its extensive canal irrigation network from the Sone River and highest paddy production in the state.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 59,
        "originalNumber": 59,
        "question": "Tehran, the capital city of Iran, is situated at the foot of which mountain range?",
        "options": [
            {"id": "A", "text": "Alburz (Alborz)"},
            {"id": "B", "text": "Zagros"},
            {"id": "C", "text": "Makran"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Tehran is located in northern Iran, nestled at the southern foot of the majestic Alborz (Alburz) mountain range.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 60,
        "originalNumber": 60,
        "question": "Which of the following is traditionally designated in NCERT curricula as a prominent peak of the Eastern Ghats of India?",
        "options": [
            {"id": "A", "text": "Anai Mudi"},
            {"id": "B", "text": "Kanchenjunga"},
            {"id": "C", "text": "Mahendragiri"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Mahendragiri (1,501 m) in Odisha is prominently identified in Indian school geography textbooks as a major peak of the Eastern Ghats. (Anamudi is in Western Ghats, Kanchenjunga in the Himalayas).",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 61,
        "originalNumber": 61,
        "question": "Which of these is NOT considered a major valid driver of massive large-scale deforestation and habitat depletion compared to major infrastructure and clearing?",
        "options": [
            {"id": "A", "text": "Agricultural expansion"},
            {"id": "B", "text": "Large scale development projects"},
            {"id": "C", "text": "Grazing and fuel wood collection"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "According to environmental geography studies, traditional lopping for fuelwood and local grazing do not typically cause complete destruction of forest canopies, unlike commercial agricultural expansion and large river valley/mining projects.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 62,
        "originalNumber": 62,
        "question": "Which district of Bihar is known as the 'Silk City' and leads in silk textile production (Tussar silk)?",
        "options": [
            {"id": "A", "text": "Madhubani"},
            {"id": "B", "text": "Bhagalpur"},
            {"id": "C", "text": "Aurangabad"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Bhagalpur is universally renowned as the 'Silk City' (Resham Nagari) of Bihar, globally celebrated for its Bhagalpuri Tussar silk weaving.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 63,
        "originalNumber": 63,
        "question": "Who was the Viceroy of India during the tragic Jallianwala Bagh massacre on 13th April 1919?",
        "options": [
            {"id": "A", "text": "Lord Curzon"},
            {"id": "B", "text": "Lord Chelmsford"},
            {"id": "C", "text": "Lord Irwin"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Lord Chelmsford served as Viceroy of India from 1916 to 1921, during which the Rowlatt Act and Jallianwala Bagh massacre took place under his administration.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 64,
        "originalNumber": 64,
        "question": "The first President of the Indian National Congress (INC) at its inaugural session in Bombay (December 1885) was:",
        "options": [
            {"id": "A", "text": "Dadabhai Naoroji"},
            {"id": "B", "text": "W. C. Bonnerjee"},
            {"id": "C", "text": "Badruddin Tyabji"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Womesh Chandra Bonnerjee presided over the first session of the Indian National Congress held at Gokuldas Tejpal Sanskrit College, Bombay, attended by 72 delegates in December 1885.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 65,
        "originalNumber": 65,
        "question": "Who among the following revered leaders is known as the 'Grand Old Man of India'?",
        "options": [
            {"id": "A", "text": "Bal Gangadhar Tilak"},
            {"id": "B", "text": "Dadabhai Naoroji"},
            {"id": "C", "text": "Gopal Krishna Gokhale"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Dadabhai Naoroji—pioneering economist, author of 'Poverty and Un-British Rule in India', and thrice INC president—is honored as the 'Grand Old Man of India'.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 66,
        "originalNumber": 66,
        "question": "Which of the following mass national movements was launched under the direct leadership of Mahatma Gandhi?",
        "options": [
            {"id": "A", "text": "Quit India Movement"},
            {"id": "B", "text": "Non-Cooperation Movement"},
            {"id": "C", "text": "Swadeshi Movement"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Both the Non-Cooperation Movement (1920) and the Quit India Movement (1942) were launched under Mahatma Gandhi\\'s direct leadership. (Swadeshi movement was launched in 1905). Since both A and B are correct, the answer is (D) More than one of the above.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 67,
        "originalNumber": 67,
        "question": "Who was the supreme leader of the historic Bardoli Satyagraha (1928), where the local women bestowed upon him the title 'Sardar'?",
        "options": [
            {"id": "A", "text": "Sardar Vallabhbhai Patel"},
            {"id": "B", "text": "Bal Gangadhar Tilak"},
            {"id": "C", "text": "Jawaharlal Nehru"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Vallabhbhai Patel led the successful non-violent peasant resistance in Bardoli, Gujarat against excessive tax increments in 1928, after which he was honored with the title 'Sardar'.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 68,
        "originalNumber": 68,
        "question": "Who among the following was NOT directly associated with founding or leading the Home Rule Leagues in 1916?",
        "options": [
            {"id": "A", "text": "Annie Besant"},
            {"id": "B", "text": "Bal Gangadhar Tilak"},
            {"id": "C", "text": "Sarojini Naidu"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The Home Rule Movement was pioneered by Bal Gangadhar Tilak (Indian Home Rule League at Belgaum) and Annie Besant (All India Home Rule League at Madras) in 1916. Sarojini Naidu was not a founder or leader of the Home Rule Leagues.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 69,
        "originalNumber": 69,
        "question": "Who was elected as the first President of the Bihar Provincial Congress Committee formed in 1908?",
        "options": [
            {"id": "A", "text": "Dr. Rajendra Prasad"},
            {"id": "B", "text": "Anugrah Narayan Sinha"},
            {"id": "C", "text": "Jai Prakash Narayan"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "The Bihar Provincial Congress Committee was formed in 1908 at Patna with Nawab Sarfaraz Hussain Khan as President and Syed Hasan Imam as key leader. Dr. Rajendra Prasad and JP Narayan were not the founders/first presidents, so (E) None of the above is correct.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    },
    {
        "id": 70,
        "originalNumber": 70,
        "question": "The All India Kisan Sabha (AIKS) was established in 1936 under the presidential leadership of:",
        "options": [
            {"id": "A", "text": "Dr. Rajendra Prasad"},
            {"id": "B", "text": "Jai Prakash Narayan"},
            {"id": "C", "text": "Swami Sahajanand Saraswati"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The All India Kisan Sabha was founded at the Lucknow session of the Indian National Congress in April 1936 with Swami Sahajanand Saraswati as its first President and N. G. Ranga as General Secretary.",
        "unit": "Part II: General Studies",
        "category": "General Studies",
        "isGeneralPaper": True,
        "examType": "BPSC-TRE"
    }
]
