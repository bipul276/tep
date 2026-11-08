# scripts/part3a_data.py
# Part-III: Computer Science (Questions 71 to 110)

part3a_questions = [
    {
        "id": 71,
        "originalNumber": 71,
        "question": "A digital circuit or any Boolean function can be constructed by the repeated and exclusive use of which universal gate(s)?",
        "options": [
            {"id": "A", "text": "NAND gate"},
            {"id": "B", "text": "NOR gate"},
            {"id": "C", "text": "AND gate"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Both NAND and NOR gates are functionally complete 'universal logic gates' that can individually implement any basic Boolean operation (AND, OR, NOT) and complex combinational logic without any other gate type. Since both A and B are universal gates, the answer is (D) More than one of the above.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 72,
        "originalNumber": 72,
        "question": "Which of the following statements is correct regarding Digital Circuits?",
        "options": [
            {"id": "A", "text": "They use analog signals for communication"},
            {"id": "B", "text": "They process information using continuous voltage levels"},
            {"id": "C", "text": "They are not suitable for high speed operations"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "Digital circuits represent and process information using discrete binary voltage levels (0 and 1, LOW and HIGH), not continuous analog voltages, and they are extensively used for ultra-high-speed operations. None of the listed statements A, B, or C is correct, making (E) None of the above the right choice.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 73,
        "originalNumber": 73,
        "question": "Which of the following is an example of a digital electronic system?",
        "options": [
            {"id": "A", "text": "Computers"},
            {"id": "B", "text": "Mobile phones"},
            {"id": "C", "text": "Digital cameras"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Modern computers, smartphones, and digital cameras are all embedded digital electronic systems functioning on binary microprocessors, logic arrays, and digital DSPs. Thus, (D) More than one of the above is correct.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "combinational-sequential-circuits-design",
        "topicTitle": "Combinational & Sequential Circuits Design",
        "examType": "BPSC-TRE"
    },
    {
        "id": 74,
        "originalNumber": 74,
        "question": "An OR gate has 4 binary inputs. What is the total number of words (rows/combinations) in its truth table?",
        "options": [
            {"id": "A", "text": "4"},
            {"id": "B", "text": "8"},
            {"id": "C", "text": "16"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "For any n-variable digital logic gate or Boolean function, the number of distinct input combinations in the truth table is given by 2^n. For n = 4 inputs, the number of combinations is 2^4 = 16.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 75,
        "originalNumber": 75,
        "question": "When does a negative level-triggered (active-low) flip-flop in digital electronics change its state?",
        "options": [
            {"id": "A", "text": "When the clock is Negative (LOW / 0)"},
            {"id": "B", "text": "When the clock is Positive (HIGH / 1)"},
            {"id": "C", "text": "When the inputs are all zero"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Level-triggered flip-flops/latches respond to the steady voltage level of the clock signal. A negative level-triggered circuit remains transparent and responds to inputs when the clock input is at a low/negative logic level (Clock = 0 / LOW).",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "combinational-sequential-circuits-design",
        "topicTitle": "Combinational & Sequential Circuits Design",
        "examType": "BPSC-TRE"
    },
    {
        "id": 76,
        "originalNumber": 76,
        "question": "What is the result of the bitwise binary operation 1010 AND 1100?",
        "options": [
            {"id": "A", "text": "1000"},
            {"id": "B", "text": "1110"},
            {"id": "C", "text": "100"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Performing bitwise AND on each column:\n  1 AND 1 = 1\n  0 AND 1 = 0\n  1 AND 0 = 0\n  0 AND 0 = 0\nYielding 1000 in binary.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 77,
        "originalNumber": 77,
        "question": "In a digital half-adder combinational circuit, what are the two output signals?",
        "options": [
            {"id": "A", "text": "Sum and Carry"},
            {"id": "B", "text": "Difference and Borrow"},
            {"id": "C", "text": "Sum and Difference"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "A half adder takes two single-bit inputs (A, B) and generates two outputs: Sum = A ⊕ B (XOR gate) and Carry = A · B (AND gate).",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "combinational-sequential-circuits-design",
        "topicTitle": "Combinational & Sequential Circuits Design",
        "examType": "BPSC-TRE"
    },
    {
        "id": 78,
        "originalNumber": 78,
        "question": "Which of the following is a type of Read Only Memory (ROM)?",
        "options": [
            {"id": "A", "text": "PROM (Programmable ROM)"},
            {"id": "B", "text": "EPROM (Erasable Programmable ROM)"},
            {"id": "C", "text": "MROM (Masked ROM)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "All three (Masked ROM, Programmable ROM, and UV Erasable Programmable ROM) are established varieties of non-volatile Read Only Memory. Thus, (D) More than one of the above is correct.",
        "unit": "Unit 2: Computer Organization & Architecture",
        "category": "Computer Architecture",
        "topicSlug": "cache-memory-organization-co",
        "topicTitle": "Cache Memory Organization, Mapping Techniques, and Replacement Policies",
        "examType": "BPSC-TRE"
    },
    {
        "id": 79,
        "originalNumber": 79,
        "question": "What is the full form of the programmable device acronym PLA in computer architecture?",
        "options": [
            {"id": "A", "text": "Programmable Logic Application"},
            {"id": "B", "text": "Programmable Logic Array"},
            {"id": "C", "text": "Programmable Logic Architecture"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "PLA stands for Programmable Logic Array, a PLD device with both a programmable AND array and a programmable OR array used to implement sum-of-products Boolean functions.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "combinational-sequential-circuits-design",
        "topicTitle": "Combinational & Sequential Circuits Design",
        "examType": "BPSC-TRE"
    },
    {
        "id": 80,
        "originalNumber": 80,
        "question": "How many select control lines (s) are required for an 8-to-1 Multiplexer (MUX)?",
        "options": [
            {"id": "A", "text": "2"},
            {"id": "B", "text": "3"},
            {"id": "C", "text": "4"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "A 2^m-to-1 multiplexer requires m select lines to address any of the 2^m data input lines. For an 8-to-1 multiplexer, 2^m = 8 => m = log2(8) = 3 select lines.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "combinational-sequential-circuits-design",
        "topicTitle": "Combinational & Sequential Circuits Design",
        "examType": "BPSC-TRE"
    },
    {
        "id": 81,
        "originalNumber": 81,
        "question": "Convert the decimal integer 1234 to binary, octal, and hexadecimal notation. Which option correctly represents all three conversions?",
        "options": [
            {"id": "A", "text": "Binary: 10011010010, Octal: 2322, Hexadecimal: 4D2"},
            {"id": "B", "text": "Binary: 11001110010, Octal: 1712, Hexadecimal: 72A"},
            {"id": "C", "text": "Binary: 11100110010, Octal: 1642, Hexadecimal: 3CD"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "1234 in hexadecimal: 1234 / 16 = 77 rem 2; 77 / 16 = 4 rem 13 (D); 4 / 16 = 0 rem 4 => 4D2_16.\nIn binary: 4 = 0100, D = 1101, 2 = 0010 => 10011010010_2.\nIn octal: grouping 3 bits (010 011 010 010) => 2322_8.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 82,
        "originalNumber": 82,
        "question": "What is Booth's algorithm primarily used for in computer arithmetic?",
        "options": [
            {"id": "A", "text": "Binary to decimal conversion"},
            {"id": "B", "text": "Decimal to binary conversion"},
            {"id": "C", "text": "Binary multiplication"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Booth's multiplication algorithm is an efficient hardware algorithm that multiplies two signed binary numbers in two's complement representation by encoding runs of consecutive 1s.",
        "unit": "Unit 2: Computer Organization & Architecture",
        "category": "Computer Architecture",
        "topicSlug": "combinational-sequential-circuits-design",
        "topicTitle": "Combinational & Sequential Circuits Design",
        "examType": "BPSC-TRE"
    },
    {
        "id": 83,
        "originalNumber": 83,
        "question": "Which of the following is an error detection/correction code or technique used in digital communications and logic?",
        "options": [
            {"id": "A", "text": "Hamming code"},
            {"id": "B", "text": "Cyclic Redundancy Check (CRC)"},
            {"id": "C", "text": "Checksum"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Hamming codes (error detection and single-bit correction), CRC (polynomial cyclic redundancy check), and Checksums are all standard error detection mechanisms in computer networks and digital logic. Thus, (D) More than one of the above is correct.",
        "unit": "Unit 7: Computer Networks",
        "category": "Computer Networks",
        "topicSlug": "data-link-layer-framing-error-control",
        "topicTitle": "Data Link Layer: Framing, Flow Control, Error Control, and MAC Protocols",
        "examType": "BPSC-TRE"
    },
    {
        "id": 84,
        "originalNumber": 84,
        "question": "When performing BCD (Binary Coded Decimal) addition, what is the maximum valid decimal value that can be represented by a single BCD nibble?",
        "options": [
            {"id": "A", "text": "2"},
            {"id": "B", "text": "10"},
            {"id": "C", "text": "15"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "In 8421 BCD, each decimal digit is encoded into 4 bits, valid only for decimal digits 0 through 9 (0000 to 1001). The maximum decimal value a valid single BCD digit can represent is 9. Values 10 to 15 (1010 to 1111) are invalid BCD codes. Since 9 is not among options A (2), B (10), or C (15), the correct answer is (E) None of the above.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 85,
        "originalNumber": 85,
        "question": "Convert the fractional binary number 1011.1101_2 to its exact decimal equivalent:",
        "options": [
            {"id": "A", "text": "11.75"},
            {"id": "B", "text": "12.125"},
            {"id": "C", "text": "13.5"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "Integer part: 1011_2 = 8 + 0 + 2 + 1 = 11.\nFractional part: .1101_2 = 1*(2^-1) + 1*(2^-2) + 0*(2^-3) + 1*(2^-4) = 0.5 + 0.25 + 0 + 0.0625 = 0.8125.\nTotal decimal value = 11.8125. Since 11.8125 is not listed in options A (11.75), B (12.125), or C (13.5), the answer is (E) None of the above.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 86,
        "originalNumber": 86,
        "question": "What is De Morgan's theorem primarily used for in digital logic and Boolean algebra?",
        "options": [
            {"id": "A", "text": "Simplifying Boolean expressions"},
            {"id": "B", "text": "Implementing NAND gates"},
            {"id": "C", "text": "Performing binary addition"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "De Morgan's laws ((A + B)' = A' · B' and (A · B)' = A' + B') allow engineers and mathematicians to simplify complex complemented Boolean logic expressions into simpler sum-of-products or product-of-sums forms.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 87,
        "originalNumber": 87,
        "question": "What is the primary role and purpose of 'Don't Care' conditions (X) in Karnaugh Maps (K-maps)?",
        "options": [
            {"id": "A", "text": "To indicate that the value of a variable does not affect the output (can be chosen as 0 or 1 to form larger groups)"},
            {"id": "B", "text": "To prioritize certain inputs over others"},
            {"id": "C", "text": "To ensure that all possible input combinations are covered in truth tables"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Don't care terms represent input combinations that either can never occur or whose output is irrelevant. In K-maps, they can be assigned 0 or 1 opportunistically to form larger groupings of 1s, thereby minimizing circuit literals and gate count.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Digital Logic",
        "topicSlug": "boolean-algebra-k-maps-co",
        "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
        "examType": "BPSC-TRE"
    },
    {
        "id": 88,
        "originalNumber": 88,
        "question": "Which of the following data structures stores elements in a non-linear hierarchical or interconnected relationship?",
        "options": [
            {"id": "A", "text": "Stack"},
            {"id": "B", "text": "Queue"},
            {"id": "C", "text": "Array"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "Stacks, Queues, and Arrays are all linear data structures where elements are arranged sequentially. Non-linear data structures include Trees and Graphs. Since neither Tree nor Graph is listed in options A, B, or C, the correct answer is (E) None of the above.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "binary-search-trees-avl-dsa",
        "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
        "examType": "BPSC-TRE"
    },
    {
        "id": 89,
        "originalNumber": 89,
        "question": "Which data structure provides an average time complexity of O(1) for search, insertion, and deletion operations?",
        "options": [
            {"id": "A", "text": "Stack"},
            {"id": "B", "text": "Queue"},
            {"id": "C", "text": "Hash Table"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "A Hash Table maps keys to bucket slots using a hash function, delivering average-case O(1) constant time lookup, insertion, and deletion.",
        "unit": "Unit 4: Algorithms",
        "category": "Algorithms",
        "topicSlug": "asymptotic-notation-algorithms",
        "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
        "examType": "BPSC-TRE"
    },
    {
        "id": 90,
        "originalNumber": 90,
        "question": "In a Binary Search Tree (BST), which subtree of a node contains exclusively keys that are strictly greater than the node's key value?",
        "options": [
            {"id": "A", "text": "Left subtree"},
            {"id": "B", "text": "Right subtree"},
            {"id": "C", "text": "Both subtrees"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "By definition of BST ordering: all keys in the left subtree must be less than the root key, and all keys in the right subtree must be greater than the root key.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "binary-search-trees-avl-dsa",
        "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
        "examType": "BPSC-TRE"
    },
    {
        "id": 91,
        "originalNumber": 91,
        "question": "What is the result of evaluating the postfix (Reverse Polish) expression: 10 5 + 60 6 / * 8 - ?",
        "options": [
            {"id": "A", "text": "142"},
            {"id": "B", "text": "213"},
            {"id": "C", "text": "284"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Evaluating step-by-step using an evaluation stack:\n1. Push 10, push 5 -> pop both on '+' => 10 + 5 = 15 (stack: [15])\n2. Push 60, push 6 -> pop both on '/' => 60 / 6 = 10 (stack: [15, 10])\n3. On '*' -> pop 15 and 10 => 15 * 10 = 150 (stack: [150])\n4. Push 8 -> on '-' => 150 - 8 = 142.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "c-cpp-pointers-memory",
        "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
        "examType": "BPSC-TRE"
    },
    {
        "id": 92,
        "originalNumber": 92,
        "question": "In an AVL balanced binary search tree, the heights of the two child subtrees of any node cannot differ by more than:",
        "options": [
            {"id": "A", "text": "2"},
            {"id": "B", "text": "1"},
            {"id": "C", "text": "0"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "In an AVL tree, the balance factor BalanceFactor(N) = Height(Left) - Height(Right) must be strictly within {-1, 0, +1}. The difference in heights can never exceed 1.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "binary-search-trees-avl-dsa",
        "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
        "examType": "BPSC-TRE"
    },
    {
        "id": 93,
        "originalNumber": 93,
        "question": "What is the output or status of the following C code declaration: `int a[] = {1, 2, 3,} *p;`?",
        "options": [
            {"id": "A", "text": "Junk value"},
            {"id": "B", "text": "3"},
            {"id": "C", "text": "Runtime error"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "In C, attempting to declare `int a[] = {1, 2, 3,} *p;` without a separating comma before the pointer or a proper declaration specifier causes a compile-time syntax error. Since 'Compilation / Syntax error' is not listed in options A, B, or C, the correct choice is (E) None of the above.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Programming",
        "topicSlug": "c-cpp-pointers-memory",
        "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
        "examType": "BPSC-TRE"
    },
    {
        "id": 94,
        "originalNumber": 94,
        "question": "A standard FIFO queue has the configuration (front to rear) a, b, c, d. If you want to reverse it to d, c, b, a using only standard enqueue/dequeue operations on the queue alone without any auxiliary data structure, how many minimum operations are required?",
        "options": [
            {"id": "A", "text": "2 deletions and 3 additions"},
            {"id": "B", "text": "3 deletions and 3 additions"},
            {"id": "C", "text": "4 deletions and 4 additions"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "A pure First-In-First-Out (FIFO) queue cannot reverse its internal order solely through queue operations without using an auxiliary LIFO data structure (such as a stack or recursion stack). None of the fixed deletion/addition options can accomplish reversal on a standalone queue.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "c-cpp-pointers-memory",
        "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
        "examType": "BPSC-TRE"
    },
    {
        "id": 95,
        "originalNumber": 95,
        "question": "What is the worst-case asymptotic time complexity order of the Binary Search algorithm on a sorted array of N elements?",
        "options": [
            {"id": "A", "text": "N"},
            {"id": "B", "text": "N log n"},
            {"id": "C", "text": "N^2"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "Binary search halves the search space at each iteration: T(N) = T(N/2) + O(1), giving an asymptotic order of O(log N). Since O(log N) is not listed in options A (N), B (N log N), or C (N^2), the answer is (E) None of the above.",
        "unit": "Unit 4: Algorithms",
        "category": "Algorithms",
        "topicSlug": "asymptotic-notation-algorithms",
        "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
        "examType": "BPSC-TRE"
    },
    {
        "id": 96,
        "originalNumber": 96,
        "question": "The preorder traversal of a Binary Search Tree (BST) is: 15, 10, 12, 11, 20, 18, 16, 19. Which one of the following is the postorder traversal of the tree?",
        "options": [
            {"id": "A", "text": "20, 19, 18, 16, 15, 12, 11, 10"},
            {"id": "B", "text": "11, 12, 10, 16, 19, 18, 20, 15"},
            {"id": "C", "text": "19, 16, 18, 20, 11, 12, 10, 15"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "For any BST, the Inorder traversal is the sorted sequence: 10, 11, 12, 15, 16, 18, 19, 20. Given Preorder = [15, (10, 12, 11), (20, 18, 16, 19)]:\n- Root = 15\n- Left subtree keys < 15: preorder [10, 12, 11] => root 10, right child 12, left child of 12 is 11. Postorder for left subtree: 11, 12, 10.\n- Right subtree keys > 15: preorder [20, 18, 16, 19] => root 20, left child 18 (with left 16, right 19). Postorder for right subtree: 16, 19, 18, 20.\nCombining Left, Right, Root => 11, 12, 10, 16, 19, 18, 20, 15.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "binary-search-trees-avl-dsa",
        "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
        "examType": "BPSC-TRE"
    },
    {
        "id": 97,
        "originalNumber": 97,
        "question": "How many structurally distinct Binary Search Trees (BSTs) can be constructed with n = 4 distinct keys?",
        "options": [
            {"id": "A", "text": "8"},
            {"id": "B", "text": "24"},
            {"id": "C", "text": "14"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The number of structurally unique BSTs with n distinct keys is given by the n-th Catalan number: C_n = (2n)! / ((n+1)! n!). For n = 4: C_4 = (8)! / (5! × 4!) = 40320 / (120 × 24) = 40320 / 2880 = 14.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "binary-search-trees-avl-dsa",
        "topicTitle": "Binary Search Trees, AVL Trees, and Balancing Operations",
        "examType": "BPSC-TRE"
    },
    {
        "id": 98,
        "originalNumber": 98,
        "question": "Consider the following C program:\n```c\n#include <stdio.h>\nint main() {\n    int i = 5, j = 10, k = 15;\n    printf(\"%d \", sizeof(k /= i + j));\n    printf(\"%d\", k);\n    return 0;\n}\n```\nAssuming sizeof(int) is 4 bytes, what is the output printed on the console?",
        "options": [
            {"id": "A", "text": "2 1"},
            {"id": "B", "text": "4 1"},
            {"id": "C", "text": "4 15"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "In C, the `sizeof` operator is evaluated at compile time and does not evaluate side effects inside its operand. The expression `k /= i + j` has type `int`, so `sizeof(...)` yields 4. Because the assignment expression is never executed at runtime, `k` remains unchanged at 15. The output is `4 15`.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Programming",
        "topicSlug": "c-cpp-pointers-memory",
        "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
        "examType": "BPSC-TRE"
    },
    {
        "id": 99,
        "originalNumber": 99,
        "question": "Which of the following statements is mathematically accurate regarding Big-O (O) notation in algorithm analysis?",
        "options": [
            {"id": "A", "text": "It represents the asymptotic lower bound of an algorithm's runtime"},
            {"id": "B", "text": "It represents the asymptotic upper bound of an algorithm's runtime"},
            {"id": "C", "text": "It represents the exact average runtime of an algorithm"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Big-O notation f(n) = O(g(n)) formally provides an asymptotic upper bound: there exist positive constants c and n0 such that 0 <= f(n) <= c*g(n) for all n >= n0. Lower bound is Big-Omega (Ω) and tight bound is Big-Theta (Θ).",
        "unit": "Unit 4: Algorithms",
        "category": "Algorithms",
        "topicSlug": "asymptotic-notation-algorithms",
        "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
        "examType": "BPSC-TRE"
    },
    {
        "id": 100,
        "originalNumber": 100,
        "question": "Which of the following is NOT one of the three foundational steps in the Divide and Conquer algorithmic paradigm?",
        "options": [
            {"id": "A", "text": "Combine"},
            {"id": "B", "text": "Conquer"},
            {"id": "C", "text": "Divide"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "The three classical steps of Divide and Conquer are: (1) Divide the problem into smaller subproblems, (2) Conquer the subproblems by solving them recursively, and (3) Combine the solutions to form the global answer. Since all three (A, B, C) are valid steps, none is 'NOT a step', making (E) None of the above the correct answer.",
        "unit": "Unit 4: Algorithms",
        "category": "Algorithms",
        "topicSlug": "asymptotic-notation-algorithms",
        "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
        "examType": "BPSC-TRE"
    },
    {
        "id": 101,
        "originalNumber": 101,
        "question": "Merge Sort is a classic example of which algorithm design paradigm?",
        "options": [
            {"id": "A", "text": "Greedy"},
            {"id": "B", "text": "Divide and Conquer"},
            {"id": "C", "text": "Dynamic Programming"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Merge Sort divides the unsorted list into two equal halves, recursively sorts each half (conquer), and then merges the sorted halves into one sorted list (combine).",
        "unit": "Unit 4: Algorithms",
        "category": "Algorithms",
        "topicSlug": "asymptotic-notation-algorithms",
        "topicTitle": "Asymptotic Notation, Recurrence Relations & Master Theorem",
        "examType": "BPSC-TRE"
    },
    {
        "id": 102,
        "originalNumber": 102,
        "question": "How many edges are present in a spanning tree of a connected, undirected graph with N vertices?",
        "options": [
            {"id": "A", "text": "N"},
            {"id": "B", "text": "N - 1"},
            {"id": "C", "text": "N(N - 1)/2"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "A spanning tree is a subgraph that includes all N vertices and is a tree (connected with no cycles). Any tree with N vertices must contain exactly N - 1 edges.",
        "unit": "Unit 4: Algorithms",
        "category": "Algorithms",
        "topicSlug": "minimum-spanning-trees-greedy-dsa",
        "topicTitle": "Minimum Spanning Trees: Prim's, Kruskal's, and Greedy Strategies",
        "examType": "BPSC-TRE"
    },
    {
        "id": 103,
        "originalNumber": 103,
        "question": "Which of the following is NOT a graph traversal algorithm?",
        "options": [
            {"id": "A", "text": "Greedy"},
            {"id": "B", "text": "Divide and Conquer"},
            {"id": "C", "text": "Dynamic Programming"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Graph traversal algorithms specifically refer to methods of visiting vertices in a graph, such as Breadth-First Search (BFS) and Depth-First Search (DFS). Greedy, Divide and Conquer, and Dynamic Programming are general algorithmic design paradigms, not graph traversal algorithms. Since all three are NOT graph traversal algorithms, (D) More than one of the above is correct.",
        "unit": "Unit 1: Digital Logic & Discrete Structures",
        "category": "Algorithms",
        "topicSlug": "graph-theory-discrete-math",
        "topicTitle": "Graph Theory: Connectivity, Euler/Hamiltonian, Planarity & Trees",
        "examType": "BPSC-TRE"
    },
    {
        "id": 104,
        "originalNumber": 104,
        "question": "Which of the following problems is NOT an NP-Complete problem (i.e. is solvable in deterministic polynomial time P)?",
        "options": [
            {"id": "A", "text": "Traveling Salesman Problem (decision version)"},
            {"id": "B", "text": "Boolean Satisfiability Problem (SAT)"},
            {"id": "C", "text": "Single-Source Shortest Path Problem"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The Single-Source Shortest Path problem can be solved in polynomial time by Dijkstra's algorithm (O((V + E) log V)) or Bellman-Ford (O(VE)), so it belongs to class P. Both TSP (decision) and SAT are classic NP-Complete problems.",
        "unit": "Unit 4: Algorithms",
        "category": "Algorithms",
        "topicSlug": "np-completeness-complexity-classes-dsa",
        "topicTitle": "NP-Completeness, Reductions, Complexity Classes & Approximation",
        "examType": "BPSC-TRE"
    },
    {
        "id": 105,
        "originalNumber": 105,
        "question": "Which of the following is a primary architectural advantage of using an array data structure?",
        "options": [
            {"id": "A", "text": "Constant time insertion and deletion at arbitrary positions"},
            {"id": "B", "text": "Ability to store heterogeneous elements of different data types"},
            {"id": "C", "text": "Constant time O(1) random access to elements using an index"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Because elements of an array are stored in contiguous memory locations, calculating the address of element i via BaseAddress + i × ElementSize enables O(1) direct random access.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "c-cpp-pointers-memory",
        "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
        "examType": "BPSC-TRE"
    },
    {
        "id": 106,
        "originalNumber": 106,
        "question": "Which of the following is NOT considered a fundamental primitive operation on standard data structures?",
        "options": [
            {"id": "A", "text": "Encryption"},
            {"id": "B", "text": "Deletion"},
            {"id": "C", "text": "Insertion"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "The fundamental primitive operations on data structures are insertion, deletion, searching, traversal, sorting, and merging. Encryption is a cryptographic security transformation, not a data structure primitive.",
        "unit": "Unit 3: Programming & Data Structures",
        "category": "Data Structures",
        "topicSlug": "c-cpp-pointers-memory",
        "topicTitle": "C/C++ Pointers, Memory Management, and Dynamic Structures",
        "examType": "BPSC-TRE"
    },
    {
        "id": 107,
        "originalNumber": 107,
        "question": "Which of the following is an established classification type of operating system?",
        "options": [
            {"id": "A", "text": "Real-Time Operating System (RTOS)"},
            {"id": "B", "text": "Embedded Operating System"},
            {"id": "C", "text": "Network Operating System (NOS)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Operating systems are categorized by operational goals into Real-Time OS, Embedded OS, Network OS, Distributed OS, and Batch/Time-sharing systems. All listed are valid OS categories, so (D) More than one of the above is correct.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "cpu-scheduling-os",
        "topicTitle": "Process Management, Threads & CPU Scheduling Algorithms",
        "examType": "BPSC-TRE"
    },
    {
        "id": 108,
        "originalNumber": 108,
        "question": "Which of the following is NOT a memory management technique employed by operating systems?",
        "options": [
            {"id": "A", "text": "Paging"},
            {"id": "B", "text": "Segmentation"},
            {"id": "C", "text": "Fragmentation"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Paging and Segmentation are intentional memory management schemes used by an OS to allocate memory. Fragmentation (internal or external) is an undesirable side effect or inefficiency resulting from allocation, not a technique.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-management-virtual-memory-os",
        "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
        "examType": "BPSC-TRE"
    },
    {
        "id": 109,
        "originalNumber": 109,
        "question": "Which of the following is a recognized file system utilized by modern operating systems?",
        "options": [
            {"id": "A", "text": "NTFS"},
            {"id": "B", "text": "FAT32"},
            {"id": "C", "text": "HFS+"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "NTFS (Windows New Technology File System), FAT32 (File Allocation Table 32), and HFS+ (Apple Hierarchical File System Plus) are all standard operating system file systems. Thus, (D) More than one of the above is correct.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-interleaving-secondary-storage-raid",
        "topicTitle": "Memory Interleaving, Secondary Storage, and RAID Architecture",
        "examType": "BPSC-TRE"
    },
    {
        "id": 110,
        "originalNumber": 110,
        "question": "Which of the following is NOT a recognized architectural category of system interrupts?",
        "options": [
            {"id": "A", "text": "Hardware interrupt"},
            {"id": "B", "text": "Memory interrupt"},
            {"id": "C", "text": "Software interrupt"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Interrupts are broadly classified into Hardware interrupts (asynchronous signals from I/O peripherals) and Software interrupts (synchronous traps, system calls, or exceptions). 'Memory interrupt' is not a standard interrupt category in computer architecture.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "cpu-scheduling-os",
        "topicTitle": "Process Management, Threads & CPU Scheduling Algorithms",
        "examType": "BPSC-TRE"
    }
]
