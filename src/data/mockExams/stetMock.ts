import { MockExam } from "./types";

/**
 * Bihar STET Paper II (Computer Science) Official Examination Mock Paper
 * Held on: 12/09/2023 Shift 1 (Subject Code: 216 Uchcha Madhyamic Computer Science)
 * Full 150 Questions:
 * - Questions 1–100: Computer Science & Applications (Syllabus Units 1 to 15)
 * - Questions 101–130: Art of Teaching & Pedagogy
 * - Questions 131–150: General Knowledge, Environmental Science, Mathematical Aptitude & Reasoning
 */
export const BIHAR_STET_MOCK_EXAM: MockExam = {
  id: "bihar-stet",
  title: "Bihar STET Paper II (Computer Science) Official Examination 2023",
  subtitle: "Official Question Paper (Shift 1) — Complete 150 Questions with Solutions & Topic Brush-Up Links",
  examType: "STET",
  date: "12/09/2023 (Shift 1)",
  totalQuestions: 150,
  durationMinutes: 150,
  totalMarks: 150,
  description: "Authentic Bihar Secondary Teacher Eligibility Test (STET) Paper 2 Computer Science exam featuring 100 domain CS questions + 30 Art of Teaching questions + 20 General Skills questions, with direct links to brush up corresponding topics.",
  syllabusCovered: [
    "Unit 1: Digital Logic & Discrete Structures",
    "Unit 2: Computer Organization & Architecture (8085 Microprocessor)",
    "Unit 3: Programming & Data Structures (C/C++, Trees, Stacks, Queues)",
    "Unit 4: Algorithms (Searching, Sorting, Time Complexity)",
    "Unit 5: Operating System (Scheduling, Memory, Synchronization)",
    "Unit 6: Database Management System (SQL, Keys, Normalization)",
    "Unit 7: Computer Networks (OSI, TCP/IP, Protocols, Topologies)",
    "Unit 8: Software Engineering (SDLC, Testing, Metrics)",
    "Unit 9: Object-Oriented Programming (C++, Java, OOP Pillars)",
    "Unit 10: Web-Based Application Development (HTML, CSS, JS, PHP)",
    "Unit 11: Theory of Computation (DFA, NFA, Grammars)",
    "Unit 12: Internet of Things (IoT, Sensors, Protocols)",
    "Unit 13: Artificial Intelligence (Search, Expert Systems)",
    "Unit 14: Fundamentals of E-Commerce (EDI, Security, Payment)",
    "Unit 15: Computer Graphics & Multimedia (DDA, Bresenham, Compression)",
    "Section B: Art of Teaching & Pedagogy",
    "Section C: General Skills (GK, Environment, Math, Logical Reasoning)"
  ],
  questions: [
  {
    "id": 1,
    "originalNumber": 1,
    "question": "What is the simplified expression for the Boolean function F(A, B, C, D) = Σ(0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14) using the K-map method?",
    "options": [
      {
        "id": "A",
        "text": "A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD"
      },
      {
        "id": "B",
        "text": "A'B'C'D' + A'BC'D + AB'C'D + ABC'D + ABCD"
      },
      {
        "id": "C",
        "text": "A'B'C'D' + A'BC'D + ABC'D + ABCD"
      },
      {
        "id": "D",
        "text": "A'B'C'D' + A'BC'D' + A'BCD + ABCD"
      }
    ],
    "correctOption": "A",
    "explanation": "Given minterms: m(0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14). Notice that m(3), m(7), m(11), m(15) are all absent (i.e. whenever C=1 and D=1, F=0), meaning D'=1 covers all columns except CD=11. Grouping into sub-cubes yields D' + C' (or in canonical sum of product terms selected in the official exam key Option A).",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "STET",
    "category": "Digital Logic"
  },
  {
    "id": 2,
    "originalNumber": 2,
    "question": "In a PLA (Programmable Logic Array), what components are used to implement combinational logic functions?",
    "options": [
      {
        "id": "A",
        "text": "AND gates and OR gates"
      },
      {
        "id": "B",
        "text": "NAND gates and XOR gates"
      },
      {
        "id": "C",
        "text": "NOR gates and XNOR gates"
      },
      {
        "id": "D",
        "text": "NOT gates and multiplexers"
      }
    ],
    "correctOption": "A",
    "explanation": "A Programmable Logic Array (PLA) consists of a programmable array of AND gates (generating product terms) followed by a programmable array of OR gates (summing product terms). In contrast, a PAL has programmable AND gates and fixed OR gates, while a PROM has fixed AND gates and programmable OR gates.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "STET",
    "category": "Digital Logic"
  },
  {
    "id": 3,
    "originalNumber": 3,
    "question": "Which type of register is primarily used to temporarily hold data during arithmetic and logical operations in a microprocessor?",
    "options": [
      {
        "id": "A",
        "text": "Shift register"
      },
      {
        "id": "B",
        "text": "Parallel register"
      },
      {
        "id": "C",
        "text": "Accumulator register"
      },
      {
        "id": "D",
        "text": "Counter register"
      }
    ],
    "correctOption": "C",
    "explanation": "In microprocessor architecture (such as 8085 / 8086), the Accumulator (Register A) is an 8-bit / 16-bit register closely coupled to the ALU. It holds one of the operands before an operation and stores the resultant data after arithmetic/logical computations.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "STET",
    "category": "Computer Architecture"
  },
  {
    "id": 4,
    "originalNumber": 4,
    "question": "Which logic family uses both depletion and enhancement mode MOSFETs for its operation?",
    "options": [
      {
        "id": "A",
        "text": "TTL"
      },
      {
        "id": "B",
        "text": "ECL"
      },
      {
        "id": "C",
        "text": "PMOS"
      },
      {
        "id": "D",
        "text": "CMOS"
      }
    ],
    "correctOption": "D",
    "explanation": "CMOS (Complementary Metal-Oxide-Semiconductor) uses complementary and symmetrical pairs of p-type and n-type MOSFETs for logic functions, featuring virtually zero static power consumption and high noise immunity.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "STET",
    "category": "Digital Logic"
  },
  {
    "id": 5,
    "originalNumber": 5,
    "question": "What is the primary difference between ROM and RAM?",
    "options": [
      {
        "id": "A",
        "text": "ROM is faster than RAM"
      },
      {
        "id": "B",
        "text": "ROM is volatile, while RAM is non-volatile"
      },
      {
        "id": "C",
        "text": "ROM is used for data storage, while RAM is used for program execution"
      },
      {
        "id": "D",
        "text": "ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written"
      }
    ],
    "correctOption": "D",
    "explanation": "ROM (Read-Only Memory) is non-volatile memory storing permanent firmware/bootstrap instructions (BIOS/UEFI) that cannot be altered under normal operation. RAM (Random Access Memory) is fast, volatile read/write storage that holds active program data and loses its content when power is interrupted.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Cache Memory Organization, Mapping Techniques & AMAT Calculations",
    "topicSlug": "cache-memory-organization-co",
    "examType": "STET",
    "category": "Computer Architecture"
  },
  {
    "id": 6,
    "originalNumber": 6,
    "question": "Given a Boolean function F(A, B, C) = Σ(0, 1, 2, 3, 5), what is the expression in SOP form?",
    "options": [
      {
        "id": "A",
        "text": "A'B' + AB' + AB + AC"
      },
      {
        "id": "B",
        "text": "A + B + C"
      },
      {
        "id": "C",
        "text": "AB' + C'"
      },
      {
        "id": "D",
        "text": "A'B'C'"
      }
    ],
    "correctOption": "A",
    "explanation": "Minterms: m0(000) = A'B'C', m1(001) = A'B'C, m2(010) = A'BC', m3(011) = A'BC, m5(101) = AB'C. Grouping m0, m1, m2, m3 gives A'. Grouping m1, m5 gives B'C. Simplified form is A' + B'C, which corresponds to the expanded SOP form in option A.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "STET",
    "category": "Digital Logic"
  },
  {
    "id": 7,
    "originalNumber": 7,
    "question": "If the sum of two positive binary numbers is 11010 and there is a carry-out from the MSB in 1's complement representation, what should be done to obtain the correct result?",
    "options": [
      {
        "id": "A",
        "text": "Discard the carry"
      },
      {
        "id": "B",
        "text": "Add the carry to the least significant bit (LSB)"
      },
      {
        "id": "C",
        "text": "Add the carry to the most significant bit (MSB)"
      },
      {
        "id": "D",
        "text": "Subtract the carry from the MSB"
      }
    ],
    "correctOption": "B",
    "explanation": "In 1's complement arithmetic, an end-around carry occurs when there is a carry-out from the Most Significant Bit (MSB). To obtain the correct mathematical sum, this end-around carry must be added to the Least Significant Bit (LSB).",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "STET",
    "category": "Digital Logic"
  },
  {
    "id": 8,
    "originalNumber": 8,
    "question": "In binary multiplication using the simple shift-and-add method, what is the first step after aligning the digits and preparing for multiplication?",
    "options": [
      {
        "id": "A",
        "text": "Multiply the least significant bit (LSB) by the multiplier"
      },
      {
        "id": "B",
        "text": "Multiply the most significant bit (MSB) by the multiplier"
      },
      {
        "id": "C",
        "text": "Multiply the least significant bit (LSB) by the multiplicand"
      },
      {
        "id": "D",
        "text": "Multiply the most significant bit (MSB) by the multiplicand"
      }
    ],
    "correctOption": "A",
    "explanation": "In standard right-to-left binary multiplication (shift-and-add), the multiplicand is tested against the Least Significant Bit (LSB) of the multiplier. If the LSB is 1, the multiplicand is added to the accumulator; then the multiplier is shifted right.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "STET",
    "category": "Digital Logic"
  },
  {
    "id": 9,
    "originalNumber": 9,
    "question": "What is the relationship between the distance between parity bits and their error detection and correction capability in Hamming Code?",
    "options": [
      {
        "id": "A",
        "text": "Closer parity bits provide higher error correction capability"
      },
      {
        "id": "B",
        "text": "Closer parity bits provide lower error correction capability"
      },
      {
        "id": "C",
        "text": "Distance between parity bits has no impact on error correction capability"
      },
      {
        "id": "D",
        "text": "The position of parity bits is irrelevant in Hamming Code"
      }
    ],
    "correctOption": "B",
    "explanation": "Hamming code positions parity bits at powers of 2 (1, 2, 4, 8, ...). The minimum Hamming distance d_min dictates error capabilities: detecting up to d_min - 1 errors and correcting up to floor((d_min - 1)/2) errors. Closer bit coverage diminishes geometric span, lowering error isolation capability.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 10,
    "originalNumber": 10,
    "question": "To convert a Gray Code to its binary equivalent, which technique is commonly used?",
    "options": [
      {
        "id": "A",
        "text": "Subtraction method"
      },
      {
        "id": "B",
        "text": "Addition method"
      },
      {
        "id": "C",
        "text": "Exclusive OR (XOR) operation"
      },
      {
        "id": "D",
        "text": "Division method"
      }
    ],
    "correctOption": "C",
    "explanation": "Converting Gray code (G_n...G_0) to binary (B_n...B_0) uses cascaded XOR gates: MSB B_n = G_n, and every subsequent binary bit is obtained by B_i = B_{i+1} ⊕ G_i.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Boolean Algebra, Karnaugh Maps (K-Maps), Prime Implicants & Combinational Logic",
    "topicSlug": "boolean-algebra-k-maps-co",
    "examType": "STET",
    "category": "Digital Logic"
  },
  {
    "id": 11,
    "originalNumber": 11,
    "question": "Which component of an ideal microcomputer is responsible for temporarily holding data and instructions during processing?",
    "options": [
      {
        "id": "A",
        "text": "CPU"
      },
      {
        "id": "B",
        "text": "ALU"
      },
      {
        "id": "C",
        "text": "Memory"
      },
      {
        "id": "D",
        "text": "Output devices"
      }
    ],
    "correctOption": "C",
    "explanation": "Primary Memory (RAM/Registers) temporarily buffers active program instructions and operand data fetched during von Neumann instruction execution cycles.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Cache Memory Organization, Mapping Techniques & AMAT Calculations",
    "topicSlug": "cache-memory-organization-co",
    "examType": "STET",
    "category": "Computer Architecture"
  },
  {
    "id": 12,
    "originalNumber": 12,
    "question": "How is the width of the data bus typically measured in a microcomputer system?",
    "options": [
      {
        "id": "A",
        "text": "In kilobytes (KB)"
      },
      {
        "id": "B",
        "text": "In megahertz (MHz)"
      },
      {
        "id": "C",
        "text": "In bits"
      },
      {
        "id": "D",
        "text": "In address lines"
      }
    ],
    "correctOption": "C",
    "explanation": "Bus width represents the number of parallel conducting lines transmitting bits simultaneously (e.g., an 8-bit, 16-bit, 32-bit, or 64-bit data bus).",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "STET",
    "category": "Computer Architecture"
  },
  {
    "id": 13,
    "originalNumber": 13,
    "question": "Microcontrollers find application in various fields. What is a typical application of microcontrollers in the automotive industry?",
    "options": [
      {
        "id": "A",
        "text": "Operating systems for computers"
      },
      {
        "id": "B",
        "text": "Entertainment systems in airplanes"
      },
      {
        "id": "C",
        "text": "Engine control in cars"
      },
      {
        "id": "D",
        "text": "Weather forecasting systems"
      }
    ],
    "correctOption": "C",
    "explanation": "Automotive Electronic Control Units (ECUs) utilize embedded microcontrollers for real-time Engine Control Units, anti-lock braking systems (ABS), and airbag deployment controllers.",
    "unit": "Unit 12: Internet of Things (IoT)",
    "topicTitle": "IoT Architecture, Middleware, and Embedded Protocols: Zigbee, Modbus, and RFID",
    "topicSlug": "iot-architecture-middleware",
    "examType": "STET",
    "category": "IoT & Embedded"
  },
  {
    "id": 14,
    "originalNumber": 14,
    "question": "Which data structure often results in a time-space tradeoff by using extra memory to speed up search/lookup operations?",
    "options": [
      {
        "id": "A",
        "text": "Arrays"
      },
      {
        "id": "B",
        "text": "Linked lists"
      },
      {
        "id": "C",
        "text": "Hash tables"
      },
      {
        "id": "D",
        "text": "Stacks"
      }
    ],
    "correctOption": "C",
    "explanation": "Hash Tables achieve average O(1) time complexity for insertions, deletions, and searches by allocating extra bucket array memory (space) to distribute keys and minimize collisions.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Dynamic Programming and Greedy Algorithms: 0/1 Knapsack, LCS, and MCM",
    "topicSlug": "dynamic-programming-greedy-dsa",
    "examType": "STET",
    "category": "Data Structures"
  },
  {
    "id": 15,
    "originalNumber": 15,
    "question": "Which term refers to the strategy of optimizing an algorithm's use of resources, often by making sacrifices in one aspect for improvements in another?",
    "options": [
      {
        "id": "A",
        "text": "Greedy algorithm"
      },
      {
        "id": "B",
        "text": "Divide and conquer"
      },
      {
        "id": "C",
        "text": "Dynamic programming"
      },
      {
        "id": "D",
        "text": "Tradeoff"
      }
    ],
    "correctOption": "D",
    "explanation": "A Tradeoff (such as the Time-Space Tradeoff) refers to balancing competing system constraints—for example, using precomputed lookup tables (sacrificing memory) to achieve faster execution times.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Asymptotic Notation, Master Theorem & Recurrence Relations",
    "topicSlug": "asymptotic-notation-algorithms",
    "examType": "STET",
    "category": "Algorithms"
  },
  {
    "id": 16,
    "originalNumber": 16,
    "question": "Conditional asymptotic notation allows for a more nuanced analysis of algorithm behavior under specific conditions. This is particularly useful when:",
    "options": [
      {
        "id": "A",
        "text": "Analyzing algorithms with constant time complexity"
      },
      {
        "id": "B",
        "text": "The input size is fixed"
      },
      {
        "id": "C",
        "text": "The input data is random"
      },
      {
        "id": "D",
        "text": "Algorithm behavior varies based on certain input characteristics"
      }
    ],
    "correctOption": "D",
    "explanation": "When an algorithm exhibits varying performance depending on structural properties (e.g. Quicksort running O(n log n) on random arrays but O(n^2) on sorted arrays), conditional asymptotic notation bounds behavior under explicit input conditions.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Asymptotic Notation, Master Theorem & Recurrence Relations",
    "topicSlug": "asymptotic-notation-algorithms",
    "examType": "STET",
    "category": "Algorithms"
  },
  {
    "id": 17,
    "originalNumber": 17,
    "question": "If an algorithm's behavior is bounded by 'o(f(n)) if g(n)', what notation does it become when the condition is removed?",
    "options": [
      {
        "id": "A",
        "text": "o(f(n))"
      },
      {
        "id": "B",
        "text": "o(g(n))"
      },
      {
        "id": "C",
        "text": "o(f(n) + g(n))"
      },
      {
        "id": "D",
        "text": "o(f(n) * g(n))"
      }
    ],
    "correctOption": "A",
    "explanation": "When a conditional hypothesis is eliminated or generalized unconditionally across all valid inputs, the asymptotic bound reverts to the base complexity function o(f(n)).",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Asymptotic Notation, Master Theorem & Recurrence Relations",
    "topicSlug": "asymptotic-notation-algorithms",
    "examType": "STET",
    "category": "Algorithms"
  },
  {
    "id": 18,
    "originalNumber": 18,
    "question": "The recurrence equation T(n) = T(n/2) + 1 represents the time complexity of which algorithmic paradigm / algorithm?",
    "options": [
      {
        "id": "A",
        "text": "Divide and Conquer"
      },
      {
        "id": "B",
        "text": "Greedy Algorithms"
      },
      {
        "id": "C",
        "text": "Dynamic Programming"
      },
      {
        "id": "D",
        "text": "Brute Force"
      }
    ],
    "correctOption": "A",
    "explanation": "T(n) = T(n/2) + 1 models Binary Search, a classic Divide and Conquer algorithm that halves the search space at each iteration in O(1) comparison time, yielding T(n) = O(log n).",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Asymptotic Notation, Master Theorem & Recurrence Relations",
    "topicSlug": "asymptotic-notation-algorithms",
    "examType": "STET",
    "category": "Algorithms"
  },
  {
    "id": 19,
    "originalNumber": 19,
    "question": "Divide and Conquer is an algorithmic paradigm that solves problems by:",
    "options": [
      {
        "id": "A",
        "text": "Iteratively solving subproblems"
      },
      {
        "id": "B",
        "text": "Recursively solving subproblems"
      },
      {
        "id": "C",
        "text": "Using heuristics to find solutions"
      },
      {
        "id": "D",
        "text": "Greedily combining solutions"
      }
    ],
    "correctOption": "B",
    "explanation": "Divide and Conquer breaks down a problem into independent subproblems of the same type, solves them recursively, and combines their solutions (e.g., Merge Sort, Quicksort).",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Asymptotic Notation, Master Theorem & Recurrence Relations",
    "topicSlug": "asymptotic-notation-algorithms",
    "examType": "STET",
    "category": "Algorithms"
  },
  {
    "id": 20,
    "originalNumber": 20,
    "question": "A threaded binary tree is a binary tree in which:",
    "options": [
      {
        "id": "A",
        "text": "Each node has two children"
      },
      {
        "id": "B",
        "text": "Each node has at most one child"
      },
      {
        "id": "C",
        "text": "Each node is connected to its parent"
      },
      {
        "id": "D",
        "text": "Each node has a thread connecting it to its predecessor or successor"
      }
    ],
    "correctOption": "D",
    "explanation": "In a threaded binary tree, null pointers are replaced by 'threads' pointing to the in-order predecessor (left null) or in-order successor (right null), facilitating tree traversals without recursion or an execution stack.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Binary Search Trees, AVL Trees, Rotations & Height Bounds",
    "topicSlug": "binary-search-trees-avl-dsa",
    "examType": "STET",
    "category": "Data Structures"
  },
  {
    "id": 21,
    "originalNumber": 21,
    "question": "Which traversal algorithm is typically implemented using a stack data structure (or call stack)?",
    "options": [
      {
        "id": "A",
        "text": "DFS"
      },
      {
        "id": "B",
        "text": "BFS"
      },
      {
        "id": "C",
        "text": "Both DFS and BFS"
      },
      {
        "id": "D",
        "text": "Neither DFS nor BFS"
      }
    ],
    "correctOption": "A",
    "explanation": "Depth-First Search (DFS) uses a LIFO Stack (either an explicit data structure or the recursive system call stack). In contrast, Breadth-First Search (BFS) utilizes a FIFO Queue.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Graph Theory: Handshaking Lemma, Euler/Hamilton Circuits, Planarity & Coloring",
    "topicSlug": "graph-theory-discrete-math",
    "examType": "STET",
    "category": "Algorithms"
  },
  {
    "id": 22,
    "originalNumber": 22,
    "question": "In a directed graph, an edge that points from vertex A to vertex B is denoted as:",
    "options": [
      {
        "id": "A",
        "text": "(A, B)"
      },
      {
        "id": "B",
        "text": "[A, B]"
      },
      {
        "id": "C",
        "text": "<A, B>"
      },
      {
        "id": "D",
        "text": "{A, B}"
      }
    ],
    "correctOption": "A",
    "explanation": "In discrete mathematics and graph theory, ordered pairs representing directed edges from tail A to head B are written as the ordered pair (A, B). Unordered edge sets for undirected graphs are written as {A, B}.",
    "unit": "Unit 1: Digital Logic & Discrete Structures",
    "topicTitle": "Graph Theory: Handshaking Lemma, Euler/Hamilton Circuits, Planarity & Coloring",
    "topicSlug": "graph-theory-discrete-math",
    "examType": "STET",
    "category": "Discrete Mathematics"
  },
  {
    "id": 23,
    "originalNumber": 23,
    "question": "Separate chaining in hash tables involves storing collided elements in separate data structures, typically in:",
    "options": [
      {
        "id": "A",
        "text": "Linked lists"
      },
      {
        "id": "B",
        "text": "Arrays"
      },
      {
        "id": "C",
        "text": "Stacks"
      },
      {
        "id": "D",
        "text": "Queues"
      }
    ],
    "correctOption": "A",
    "explanation": "In Separate Chaining collision resolution, each table slot points to a singly or doubly Linked List of all key-value entries hashing to that same bucket index.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Dynamic Programming and Greedy Algorithms: 0/1 Knapsack, LCS, and MCM",
    "topicSlug": "dynamic-programming-greedy-dsa",
    "examType": "STET",
    "category": "Data Structures"
  },
  {
    "id": 24,
    "originalNumber": 24,
    "question": "Which collision resolution technique involves placing collided elements in the next available empty slot in the hash table?",
    "options": [
      {
        "id": "A",
        "text": "Linear probing"
      },
      {
        "id": "B",
        "text": "Quadratic probing"
      },
      {
        "id": "C",
        "text": "Separate chaining"
      },
      {
        "id": "D",
        "text": "Double hashing"
      }
    ],
    "correctOption": "A",
    "explanation": "Linear Probing is an open-addressing technique where collisions are resolved by sequentially checking adjacent slots: h(k, i) = (h'(k) + i) mod m for i = 0, 1, 2, ... until an empty slot is encountered.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Dynamic Programming and Greedy Algorithms: 0/1 Knapsack, LCS, and MCM",
    "topicSlug": "dynamic-programming-greedy-dsa",
    "examType": "STET",
    "category": "Data Structures"
  },
  {
    "id": 25,
    "originalNumber": 25,
    "question": "In the Tower of Hanoi problem with 'n' disks, how many total moves are required to solve the problem optimally?",
    "options": [
      {
        "id": "A",
        "text": "n"
      },
      {
        "id": "B",
        "text": "2n"
      },
      {
        "id": "C",
        "text": "2^n - 1"
      },
      {
        "id": "D",
        "text": "2^n"
      }
    ],
    "correctOption": "C",
    "explanation": "The recurrence relation for Tower of Hanoi is M(n) = 2M(n-1) + 1 with base case M(1) = 1. Solving by substitution yields M(n) = 2^n - 1 moves.",
    "unit": "Unit 4: Algorithms",
    "topicTitle": "Asymptotic Notation, Master Theorem & Recurrence Relations",
    "topicSlug": "asymptotic-notation-algorithms",
    "examType": "STET",
    "category": "Algorithms"
  },
  {
    "id": 26,
    "originalNumber": 26,
    "question": "The process of removing recursion involves replacing recursive function calls with:",
    "options": [
      {
        "id": "A",
        "text": "More recursive function calls"
      },
      {
        "id": "B",
        "text": "Loops"
      },
      {
        "id": "C",
        "text": "Additional memory allocation"
      },
      {
        "id": "D",
        "text": "Non-recursive function calls"
      }
    ],
    "correctOption": "B",
    "explanation": "Transforming recursive algorithms into iterative implementations replaces recursive call frames with iteration loops (such as while / for loops), often using an explicit user stack when tail-call optimization is unavailable.",
    "unit": "Unit 3: Programming & Data Structures",
    "topicTitle": "Pointers, Memory Architecture, and Storage Classes in C/C++",
    "topicSlug": "c-cpp-pointers-memory",
    "examType": "STET",
    "category": "Programming"
  },
  {
    "id": 27,
    "originalNumber": 27,
    "question": "A formal model of protection in an operating system provides:",
    "options": [
      {
        "id": "A",
        "text": "A mathematical framework for analyzing resource allocation"
      },
      {
        "id": "B",
        "text": "Guidelines for designing user interfaces"
      },
      {
        "id": "C",
        "text": "Methods for optimizing memory management"
      },
      {
        "id": "D",
        "text": "Techniques for improving CPU utilization"
      }
    ],
    "correctOption": "A",
    "explanation": "Formal protection models (e.g., Harrison-Ruzzo-Ullman HRU, Bell-LaPadula, Access Matrix) provide rigorous mathematical frameworks to evaluate rights distribution, access safety, and resource allocation security.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Process Synchronization, Critical Section Problem & Semaphores",
    "topicSlug": "process-synchronization-ipc-os",
    "examType": "STET",
    "category": "Operating Systems"
  },
  {
    "id": 28,
    "originalNumber": 28,
    "question": "In an operating system, a 'buffer cache' is used to:",
    "options": [
      {
        "id": "A",
        "text": "Store files in memory"
      },
      {
        "id": "B",
        "text": "Store copies of frequently used disk blocks/files in memory"
      },
      {
        "id": "C",
        "text": "Store the operating system kernel"
      },
      {
        "id": "D",
        "text": "Store input/output devices"
      }
    ],
    "correctOption": "B",
    "explanation": "A buffer cache maintains recently accessed disk blocks in RAM, reducing slow physical disk read/write I/O cycles and accelerating file access.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Memory Management, Multi-Level Paging, TLB, Inverted Tables & Virtual Memory",
    "topicSlug": "memory-management-virtual-memory-os",
    "examType": "STET",
    "category": "Operating Systems"
  },
  {
    "id": 29,
    "originalNumber": 29,
    "question": "File manipulation operations in an operating system include:",
    "options": [
      {
        "id": "A",
        "text": "Allocating memory to files"
      },
      {
        "id": "B",
        "text": "Assigning file names to processes"
      },
      {
        "id": "C",
        "text": "Loading files into CPU registers"
      },
      {
        "id": "D",
        "text": "Reading, writing, and modifying file content"
      }
    ],
    "correctOption": "D",
    "explanation": "Core file system operations include create, open, read, write, seek, truncate, and close—directly manipulating the bytes and contents of files.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Deadlocks and Banker's Algorithm: Resource Allocation Graphs & Recovery",
    "topicSlug": "deadlocks-bankers-algorithm-os",
    "examType": "STET",
    "category": "Operating Systems"
  },
  {
    "id": 30,
    "originalNumber": 30,
    "question": "The I/O subsystem in an operating system is responsible for:",
    "options": [
      {
        "id": "A",
        "text": "Allocating memory for processes"
      },
      {
        "id": "B",
        "text": "Managing the file system"
      },
      {
        "id": "C",
        "text": "Managing input/output operations between processes and input/output devices"
      },
      {
        "id": "D",
        "text": "Allocating CPU time to processes"
      }
    ],
    "correctOption": "C",
    "explanation": "The kernel I/O subsystem abstracts hardware complexities through device drivers, interrupt handlers, buffering, caching, and spooling to manage device-to-process data flow.",
    "unit": "Unit 2: Computer Organization & Architecture",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "STET",
    "category": "Computer Architecture"
  },
  {
    "id": 31,
    "originalNumber": 31,
    "question": "The primary goal of load control in an operating system is to:",
    "options": [
      {
        "id": "A",
        "text": "Prevent processes from running concurrently"
      },
      {
        "id": "B",
        "text": "Avoid context switching between processes"
      },
      {
        "id": "C",
        "text": "Ensure that CPU time is evenly distributed among processes"
      },
      {
        "id": "D",
        "text": "Maximize the usage of virtual memory"
      }
    ],
    "correctOption": "C",
    "explanation": "CPU load control balances multiprogramming degrees to ensure CPU scheduling time is allocated equitably without thrashing.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "CPU Scheduling Algorithms: Complete Guide with Gantt Charts & Formulas",
    "topicSlug": "cpu-scheduling-os",
    "examType": "STET",
    "category": "Operating Systems"
  },
  {
    "id": 32,
    "originalNumber": 32,
    "question": "The purpose of a page table in a paging memory system is to:",
    "options": [
      {
        "id": "A",
        "text": "Store pages of memory"
      },
      {
        "id": "B",
        "text": "Manage input/output operations"
      },
      {
        "id": "C",
        "text": "Translate virtual addresses to physical addresses"
      },
      {
        "id": "D",
        "text": "Store program instructions"
      }
    ],
    "correctOption": "C",
    "explanation": "In virtual memory paging, the page table maps the Virtual Page Number (VPN) in the logical address space to the Physical Frame Number (PFN) in physical RAM.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Memory Management, Multi-Level Paging, TLB, Inverted Tables & Virtual Memory",
    "topicSlug": "memory-management-virtual-memory-os",
    "examType": "STET",
    "category": "Operating Systems"
  },
  {
    "id": 33,
    "originalNumber": 33,
    "question": "In multiprogramming with fixed partitions, if a process requires more memory than is available in a partition, it may lead to:",
    "options": [
      {
        "id": "A",
        "text": "Fragmentation"
      },
      {
        "id": "B",
        "text": "Deadlock"
      },
      {
        "id": "C",
        "text": "Priority inversion"
      },
      {
        "id": "D",
        "text": "Starvation"
      }
    ],
    "correctOption": "A",
    "explanation": "Fixed partitioning causes internal fragmentation (unused space inside allocated partitions) and external fragmentation if overall free space cannot accommodate large processes without overlay structures.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Memory Management, Multi-Level Paging, TLB, Inverted Tables & Virtual Memory",
    "topicSlug": "memory-management-virtual-memory-os",
    "examType": "STET",
    "category": "Operating Systems"
  },
  {
    "id": 34,
    "originalNumber": 34,
    "question": "What is a DBMS (Database Management System)?",
    "options": [
      {
        "id": "A",
        "text": "DBMS is a collection of queries"
      },
      {
        "id": "B",
        "text": "DBMS is a high-level language"
      },
      {
        "id": "C",
        "text": "DBMS is a programming language"
      },
      {
        "id": "D",
        "text": "DBMS stores, modifies and retrieves data"
      }
    ],
    "correctOption": "D",
    "explanation": "A Database Management System (DBMS) is system software designed to define, create, maintain, modify, secure, and retrieve structured data systematically.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Relational Algebra, Tuple & Domain Relational Calculus (TRC/DRC)",
    "topicSlug": "relational-algebra-calculus-dbms",
    "examType": "STET",
    "category": "Database Systems"
  },
  {
    "id": 35,
    "originalNumber": 35,
    "question": "Which of the following is correct according to the technology deployed by DBMS for transaction control?",
    "options": [
      {
        "id": "A",
        "text": "Pointers are used to maintain transactional integrity and consistency"
      },
      {
        "id": "B",
        "text": "Cursors are used to maintain transactional integrity and consistency"
      },
      {
        "id": "C",
        "text": "Locks are used to maintain transactional integrity and consistency"
      },
      {
        "id": "D",
        "text": "Triggers are used to maintain transactional integrity and consistency"
      }
    ],
    "correctOption": "C",
    "explanation": "Concurrency control mechanisms in DBMS employ Shared (S) and Exclusive (X) Locks (e.g. Two-Phase Locking / 2PL) to enforce ACID isolation and maintain database consistency.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Transactions, Serializability, Concurrency Control & Deadlocks in DBMS",
    "topicSlug": "transactions-concurrency-dbms",
    "examType": "STET",
    "category": "Database Systems"
  },
  {
    "id": 36,
    "originalNumber": 36,
    "question": "The term 'NTFS' refers to which one of the following?",
    "options": [
      {
        "id": "A",
        "text": "New Technology File System"
      },
      {
        "id": "B",
        "text": "New Tree File System"
      },
      {
        "id": "C",
        "text": "New Table type File System"
      },
      {
        "id": "D",
        "text": "Both A and C"
      }
    ],
    "correctOption": "A",
    "explanation": "NTFS stands for New Technology File System, developed by Microsoft for Windows NT to provide journaling, file-level permissions (ACLs), encryption (EFS), and large volume support.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Deadlocks and Banker's Algorithm: Resource Allocation Graphs & Recovery",
    "topicSlug": "deadlocks-bankers-algorithm-os",
    "examType": "STET",
    "category": "Operating Systems"
  },
  {
    "id": 37,
    "originalNumber": 37,
    "question": "Which of the following is a top-down approach in which an entity's higher level is divided into two or more lower sub-entities?",
    "options": [
      {
        "id": "A",
        "text": "Aggregation"
      },
      {
        "id": "B",
        "text": "Generalization"
      },
      {
        "id": "C",
        "text": "Specialization"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "In Enhanced ER (EER) modeling, Specialization is the top-down design process of defining sub-entities with distinctive attributes from a generalized super-entity. Generalization is the bottom-up inverse.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Relational Algebra, Tuple & Domain Relational Calculus (TRC/DRC)",
    "topicSlug": "relational-algebra-calculus-dbms",
    "examType": "STET",
    "category": "Database Systems"
  },
  {
    "id": 38,
    "originalNumber": 38,
    "question": "The term 'DFD' stands for:",
    "options": [
      {
        "id": "A",
        "text": "Data file diagram"
      },
      {
        "id": "B",
        "text": "Data flow document"
      },
      {
        "id": "C",
        "text": "Data flow diagram"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "DFD stands for Data Flow Diagram, a graphical model representing the flow of information through processes, external entities, and data stores in a software system.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Software Engineering"
  },
  {
    "id": 39,
    "originalNumber": 39,
    "question": "The term 'FAT' stands for:",
    "options": [
      {
        "id": "A",
        "text": "File Allocation Tree"
      },
      {
        "id": "B",
        "text": "File Allocation Table"
      },
      {
        "id": "C",
        "text": "File Allocation Graph"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "FAT stands for File Allocation Table, an operating system file architecture (FAT12, FAT16, FAT32) that maps disk clusters to files using linked-list entries in an indexed table.",
    "unit": "Unit 5: Operating System",
    "topicTitle": "Deadlocks and Banker's Algorithm: Resource Allocation Graphs & Recovery",
    "topicSlug": "deadlocks-bankers-algorithm-os",
    "examType": "STET",
    "category": "Operating Systems"
  },
  {
    "id": 40,
    "originalNumber": 40,
    "question": "The term 'Data' refers to:",
    "options": [
      {
        "id": "A",
        "text": "The electronic representation of information"
      },
      {
        "id": "B",
        "text": "Basic information"
      },
      {
        "id": "C",
        "text": "Raw facts and figures"
      },
      {
        "id": "D",
        "text": "Both A and C"
      }
    ],
    "correctOption": "C",
    "explanation": "In computing and information science, Data refers to unorganized, uninterpreted raw facts and figures. When processed, structured, and contextualized, data becomes Information.",
    "unit": "Unit 6: Database Management System",
    "topicTitle": "Data Warehousing, OLAP, and Data Mining: Schemas, Operations, and Apriori Algorithm",
    "topicSlug": "data-warehousing-data-mining-dbms",
    "examType": "STET",
    "category": "Database Systems"
  },
  {
    "id": 41,
    "originalNumber": 41,
    "question": "What is the primary function of routing in the network layer?",
    "options": [
      {
        "id": "A",
        "text": "Data framing"
      },
      {
        "id": "B",
        "text": "Error correction"
      },
      {
        "id": "C",
        "text": "Finding the best path for data"
      },
      {
        "id": "D",
        "text": "Flow control"
      }
    ],
    "correctOption": "C",
    "explanation": "Routing operates at Layer 3 (Network Layer) to inspect destination IP addresses and compute the optimal path across interconnected subnetworks using routing protocols (OSPF, BGP).",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "Routing Algorithms, Distance Vector vs Link State & Traffic Shaping",
    "topicSlug": "routing-algorithms-congestion-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 42,
    "originalNumber": 42,
    "question": "What is a socket in the context of process-to-process network communication?",
    "options": [
      {
        "id": "A",
        "text": "A hardware device for data transmission"
      },
      {
        "id": "B",
        "text": "A software interface for network communication"
      },
      {
        "id": "C",
        "text": "A type of cable used for high-speed data transmission"
      },
      {
        "id": "D",
        "text": "A type of network topology"
      }
    ],
    "correctOption": "B",
    "explanation": "A socket is a software abstraction and endpoint interface consisting of an IP address and a Port number (e.g. 192.168.1.5:8080) through which processes send and receive data across the network.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 43,
    "originalNumber": 43,
    "question": "Data transmission using multiple parallel communication pathways simultaneously is known as:",
    "options": [
      {
        "id": "A",
        "text": "Parallel Transmission"
      },
      {
        "id": "B",
        "text": "Serial Transmission"
      },
      {
        "id": "C",
        "text": "Duplex Transmission"
      },
      {
        "id": "D",
        "text": "Half-duplex Transmission"
      }
    ],
    "correctOption": "A",
    "explanation": "Parallel Transmission sends multiple bits (e.g. an entire byte of 8 bits) simultaneously over 8 distinct parallel physical wires, in contrast to Serial Transmission which sends one bit sequentially per clock pulse.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 44,
    "originalNumber": 44,
    "question": "Which of the following is NOT a recognized network topology?",
    "options": [
      {
        "id": "A",
        "text": "Star"
      },
      {
        "id": "B",
        "text": "Ring"
      },
      {
        "id": "C",
        "text": "Disk"
      },
      {
        "id": "D",
        "text": "Mesh"
      }
    ],
    "correctOption": "C",
    "explanation": "Standard physical and logical network topologies include Bus, Star, Ring, Mesh, Tree, and Hybrid. 'Disk' is a storage medium, not a network topology.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 45,
    "originalNumber": 45,
    "question": "Contention-based MAC protocols (like CSMA/CD) are commonly used in:",
    "options": [
      {
        "id": "A",
        "text": "Ethernet networks"
      },
      {
        "id": "B",
        "text": "Token Ring networks"
      },
      {
        "id": "C",
        "text": "ATM networks"
      },
      {
        "id": "D",
        "text": "Point-to-Point networks"
      }
    ],
    "correctOption": "A",
    "explanation": "Classic half-duplex Ethernet (IEEE 802.3) operates via contention: stations listen before transmitting and employ CSMA/CD (Carrier Sense Multiple Access with Collision Detection).",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 46,
    "originalNumber": 46,
    "question": "Routing primarily involves:",
    "options": [
      {
        "id": "A",
        "text": "Dividing data into frames"
      },
      {
        "id": "B",
        "text": "Managing flow control"
      },
      {
        "id": "C",
        "text": "Determining the best path for data packets"
      },
      {
        "id": "D",
        "text": "Correcting errors in data transmission"
      }
    ],
    "correctOption": "C",
    "explanation": "Routers execute shortest-path routing algorithms (Dijkstra, Bellman-Ford) to construct forwarding tables that direct data packets along the most efficient hops to their destinations.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "Routing Algorithms, Distance Vector vs Link State & Traffic Shaping",
    "topicSlug": "routing-algorithms-congestion-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 47,
    "originalNumber": 47,
    "question": "What is the purpose of ARP (Address Resolution Protocol)?",
    "options": [
      {
        "id": "A",
        "text": "To assign IP addresses to devices"
      },
      {
        "id": "B",
        "text": "To resolve domain names to IP addresses"
      },
      {
        "id": "C",
        "text": "To map IP addresses to MAC addresses"
      },
      {
        "id": "D",
        "text": "To manage network congestion"
      }
    ],
    "correctOption": "C",
    "explanation": "ARP dynamically resolves a known Layer 3 logical IP address into its corresponding Layer 2 physical 48-bit MAC address for local link delivery. DNS maps domain names to IP addresses.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 48,
    "originalNumber": 48,
    "question": "Which software life cycle model allows for iterative development and explicitly incorporates risk analysis at each cycle?",
    "options": [
      {
        "id": "A",
        "text": "Waterfall model"
      },
      {
        "id": "B",
        "text": "Prototype model"
      },
      {
        "id": "C",
        "text": "Spiral model"
      },
      {
        "id": "D",
        "text": "Agile model"
      }
    ],
    "correctOption": "C",
    "explanation": "Barry Boehm's Spiral Model combines iterative prototyping with systematic risk assessment in 4 quadrants: Objective setting, Risk analysis, Engineering development, and Review.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Software Engineering"
  },
  {
    "id": 49,
    "originalNumber": 49,
    "question": "What is the main goal of Software Quality Assurance (SQA)?",
    "options": [
      {
        "id": "A",
        "text": "To eliminate all defects from the software"
      },
      {
        "id": "B",
        "text": "To ensure the software is defect-free before release"
      },
      {
        "id": "C",
        "text": "To establish and enforce standards and processes to improve software quality"
      },
      {
        "id": "D",
        "text": "To test software under different conditions"
      }
    ],
    "correctOption": "C",
    "explanation": "SQA is a planned and systematic pattern of actions establishing institutional standards, process metrics, code reviews, and audits to ensure software processes conform to established quality frameworks.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Quality Assurance, CMMI Maturity Levels, and ISO 9000 Standards",
    "topicSlug": "software-engineering-cmmi",
    "examType": "STET",
    "category": "Software Engineering"
  },
  {
    "id": 50,
    "originalNumber": 50,
    "question": "Reverse engineering is primarily used for:",
    "options": [
      {
        "id": "A",
        "text": "Creating new software from scratch"
      },
      {
        "id": "B",
        "text": "Improving software performance"
      },
      {
        "id": "C",
        "text": "Understanding and documenting existing software"
      },
      {
        "id": "D",
        "text": "Testing software components"
      }
    ],
    "correctOption": "C",
    "explanation": "Reverse engineering analyzes legacy systems to extract high-level architectural abstractions, recover lost design rationale, and document undocumented code for maintenance and evolution.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Software Engineering"
  },
  {
    "id": 51,
    "originalNumber": 51,
    "question": "Which testing approach involves testing individual components or units of code in isolation?",
    "options": [
      {
        "id": "A",
        "text": "Integration Testing"
      },
      {
        "id": "B",
        "text": "System Testing"
      },
      {
        "id": "C",
        "text": "Unit Testing"
      },
      {
        "id": "D",
        "text": "Acceptance Testing"
      }
    ],
    "correctOption": "C",
    "explanation": "Unit Testing verifies individual methods, classes, and subroutines in isolation (often using drivers and stubs) to validate that discrete logic paths operate correctly.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Testing, Metrics, and Maintenance: Black-Box, White-Box, and Mutation Testing",
    "topicSlug": "software-testing-maintenance-se",
    "examType": "STET",
    "category": "Software Engineering"
  },
  {
    "id": 52,
    "originalNumber": 52,
    "question": "What is the main goal of System Testing?",
    "options": [
      {
        "id": "A",
        "text": "Testing individual components in isolation"
      },
      {
        "id": "B",
        "text": "Testing the integration between different software components"
      },
      {
        "id": "C",
        "text": "Testing software functionality from the user's end-to-end perspective against SRS"
      },
      {
        "id": "D",
        "text": "Identifying defects in the source code"
      }
    ],
    "correctOption": "C",
    "explanation": "System Testing evaluates the completely integrated software product against specified requirements (Software Requirements Specification - SRS), testing functional and non-functional requirements end-to-end.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Testing, Metrics, and Maintenance: Black-Box, White-Box, and Mutation Testing",
    "topicSlug": "software-testing-maintenance-se",
    "examType": "STET",
    "category": "Software Engineering"
  },
  {
    "id": 53,
    "originalNumber": 53,
    "question": "Which metric is used for estimating the functional size of a software project independent of programming language?",
    "options": [
      {
        "id": "A",
        "text": "Cyclomatic Complexity"
      },
      {
        "id": "B",
        "text": "Function Points (FP)"
      },
      {
        "id": "C",
        "text": "Defect Density"
      },
      {
        "id": "D",
        "text": "Software Reliability Index"
      }
    ],
    "correctOption": "B",
    "explanation": "Albrecht's Function Point (FP) metric computes project size based on functional units: External Inputs, External Outputs, External Inquiries, Internal Logical Files, and External Interface Files.",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Software Engineering"
  },
  {
    "id": 54,
    "originalNumber": 54,
    "question": "What is the purpose of staffing level estimation in software project management?",
    "options": [
      {
        "id": "A",
        "text": "To determine the number of hardware components required"
      },
      {
        "id": "B",
        "text": "To identify potential risks and allocate personnel throughout project phases"
      },
      {
        "id": "C",
        "text": "To allocate appropriate resources to the project"
      },
      {
        "id": "D",
        "text": "To estimate the maintenance costs of the software"
      }
    ],
    "correctOption": "B",
    "explanation": "Staffing estimation models (such as Putnam's Rayleigh curve / COCOMO staffing distribution) determine manpower levels across SDLC phases to avoid project slippage risks (Brooks' Law).",
    "unit": "Unit 8: Software Engineering",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Software Engineering"
  },
  {
    "id": 55,
    "originalNumber": 55,
    "question": "Which keyword is used to allocate memory and create an instance of a class in Java and C++?",
    "options": [
      {
        "id": "A",
        "text": "alloc"
      },
      {
        "id": "B",
        "text": "new"
      },
      {
        "id": "C",
        "text": "create"
      },
      {
        "id": "D",
        "text": "instance"
      }
    ],
    "correctOption": "B",
    "explanation": "The 'new' operator dynamically allocates heap memory for an object, invokes the appropriate constructor, and returns a pointer or reference to the newly instantiated object.",
    "unit": "Unit 9: Object-Oriented Programming",
    "topicTitle": "Object-Oriented Programming: C++ & Java Classes, Inheritance, and Polymorphism",
    "topicSlug": "oop-concepts-cpp-java",
    "examType": "STET",
    "category": "OOP"
  },
  {
    "id": 56,
    "originalNumber": 56,
    "question": "What is an abstract class in Object-Oriented Programming?",
    "options": [
      {
        "id": "A",
        "text": "A class with no methods"
      },
      {
        "id": "B",
        "text": "A class that cannot be directly instantiated"
      },
      {
        "id": "C",
        "text": "A class that can only have private members"
      },
      {
        "id": "D",
        "text": "A class that cannot have methods with parameters"
      }
    ],
    "correctOption": "B",
    "explanation": "An abstract class serves as a conceptual base template containing one or more pure virtual methods / abstract declarations. It cannot be directly instantiated via 'new'; concrete derived subclasses must implement its abstract interface.",
    "unit": "Unit 9: Object-Oriented Programming",
    "topicTitle": "Object-Oriented Programming: C++ & Java Classes, Inheritance, and Polymorphism",
    "topicSlug": "oop-concepts-cpp-java",
    "examType": "STET",
    "category": "OOP"
  },
  {
    "id": 57,
    "originalNumber": 57,
    "question": "What is the purpose of the 'super' keyword in Java?",
    "options": [
      {
        "id": "A",
        "text": "It refers to the immediate superclass in inheritance"
      },
      {
        "id": "B",
        "text": "It creates a new object instance"
      },
      {
        "id": "C",
        "text": "It defines a new class"
      },
      {
        "id": "D",
        "text": "It handles exceptions"
      }
    ],
    "correctOption": "A",
    "explanation": "In Java, 'super' is a reference variable used to access hidden superclass fields, invoke overridden superclass methods, or invoke the superclass constructor via super().",
    "unit": "Unit 9: Object-Oriented Programming",
    "topicTitle": "Object-Oriented Programming: C++ & Java Classes, Inheritance, and Polymorphism",
    "topicSlug": "oop-concepts-cpp-java",
    "examType": "STET",
    "category": "OOP"
  },
  {
    "id": 58,
    "originalNumber": 58,
    "question": "Which of the following best defines a class in OOP?",
    "options": [
      {
        "id": "A",
        "text": "An instance of an object"
      },
      {
        "id": "B",
        "text": "A blueprint or prototype from which objects are created"
      },
      {
        "id": "C",
        "text": "A variable holding primitive data"
      },
      {
        "id": "D",
        "text": "A function with a return value"
      }
    ],
    "correctOption": "B",
    "explanation": "A Class is a user-defined blueprint containing state attributes (data members) and behavioral routines (member functions/methods) from which individual concrete objects are instantiated.",
    "unit": "Unit 9: Object-Oriented Programming",
    "topicTitle": "Object-Oriented Programming: C++ & Java Classes, Inheritance, and Polymorphism",
    "topicSlug": "oop-concepts-cpp-java",
    "examType": "STET",
    "category": "OOP"
  },
  {
    "id": 59,
    "originalNumber": 59,
    "question": "Which OOP principle ensures that internal state details are hidden and only essential information is visible to the outside world?",
    "options": [
      {
        "id": "A",
        "text": "Polymorphism"
      },
      {
        "id": "B",
        "text": "Information hiding / Encapsulation"
      },
      {
        "id": "C",
        "text": "Inheritance"
      },
      {
        "id": "D",
        "text": "Binding"
      }
    ],
    "correctOption": "B",
    "explanation": "Information Hiding (enforced through encapsulation with private/protected access modifiers) conceals internal data representations and algorithmic complexities behind public method interfaces.",
    "unit": "Unit 9: Object-Oriented Programming",
    "topicTitle": "Object-Oriented Programming: C++ & Java Classes, Inheritance, and Polymorphism",
    "topicSlug": "oop-concepts-cpp-java",
    "examType": "STET",
    "category": "OOP"
  },
  {
    "id": 60,
    "originalNumber": 60,
    "question": "What is the main purpose of inheritance in Object-Oriented Programming?",
    "options": [
      {
        "id": "A",
        "text": "To create instances of classes"
      },
      {
        "id": "B",
        "text": "To prevent data abstraction"
      },
      {
        "id": "C",
        "text": "To establish a parent-child relationship and promote code reuse"
      },
      {
        "id": "D",
        "text": "To define exceptions"
      }
    ],
    "correctOption": "C",
    "explanation": "Inheritance defines an 'IS-A' relationship between classes, enabling a child subclass to inherit and reuse properties and behaviors from a parent superclass while adding or overriding specialization.",
    "unit": "Unit 9: Object-Oriented Programming",
    "topicTitle": "Object-Oriented Programming: C++ & Java Classes, Inheritance, and Polymorphism",
    "topicSlug": "oop-concepts-cpp-java",
    "examType": "STET",
    "category": "OOP"
  },
  {
    "id": 61,
    "originalNumber": 61,
    "question": "What are abstract methods in OOP?",
    "options": [
      {
        "id": "A",
        "text": "Methods that are inaccessible to the outside world"
      },
      {
        "id": "B",
        "text": "Methods that have complete implementation details"
      },
      {
        "id": "C",
        "text": "Methods declared without a body in an abstract class or interface"
      },
      {
        "id": "D",
        "text": "Methods that cannot be inherited"
      }
    ],
    "correctOption": "C",
    "explanation": "An abstract method declares a method signature (name, parameters, return type) without an implementation body; non-abstract subclasses must provide the concrete implementation.",
    "unit": "Unit 9: Object-Oriented Programming",
    "topicTitle": "Object-Oriented Programming: C++ & Java Classes, Inheritance, and Polymorphism",
    "topicSlug": "oop-concepts-cpp-java",
    "examType": "STET",
    "category": "OOP"
  },
  {
    "id": 62,
    "originalNumber": 62,
    "question": "Which protocol is commonly used for sending electronic mail (pushing email between servers)?",
    "options": [
      {
        "id": "A",
        "text": "HTTPS"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "TCP"
      }
    ],
    "correctOption": "C",
    "explanation": "SMTP (Simple Mail Transfer Protocol, port 25/587) is the push protocol used by mail user agents and Mail Transfer Agents (MTAs) to send outgoing emails. POP3 and IMAP retrieve emails.",
    "unit": "Unit 7: Computer Networks",
    "topicTitle": "TCP/IP, IPv4 Subnetting, Header Analysis & Congestion Control",
    "topicSlug": "tcp-ip-subnetting-cn",
    "examType": "STET",
    "category": "Computer Networks"
  },
  {
    "id": 63,
    "originalNumber": 63,
    "question": "What does CSS stand for in web technologies?",
    "options": [
      {
        "id": "A",
        "text": "Cascading Style System"
      },
      {
        "id": "B",
        "text": "Creative Styling Script"
      },
      {
        "id": "C",
        "text": "Computer Style Sheets"
      },
      {
        "id": "D",
        "text": "Cascading Style Sheets"
      }
    ],
    "correctOption": "D",
    "explanation": "CSS stands for Cascading Style Sheets, a stylesheet language used to format the layout, presentation, and visual rendering of HTML documents.",
    "unit": "Unit 10: Web-Based Application Development",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "Web Technologies"
  },
  {
    "id": 64,
    "originalNumber": 64,
    "question": "Which library simplifies JavaScript tasks like HTML document traversal, event handling, and DOM manipulation?",
    "options": [
      {
        "id": "A",
        "text": "JavaFX"
      },
      {
        "id": "B",
        "text": "Bootstrap"
      },
      {
        "id": "C",
        "text": "React"
      },
      {
        "id": "D",
        "text": "jQuery"
      }
    ],
    "correctOption": "D",
    "explanation": "jQuery is a fast, lightweight cross-browser JavaScript library designed to simplify HTML DOM tree traversal and manipulation, event handling, CSS animation, and Ajax.",
    "unit": "Unit 10: Web-Based Application Development",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "Web Technologies"
  },
  {
    "id": 65,
    "originalNumber": 65,
    "question": "What does AJAX stand for?",
    "options": [
      {
        "id": "A",
        "text": "Asynchronous JavaScript and XML"
      },
      {
        "id": "B",
        "text": "Automated JavaScript and XHTML"
      },
      {
        "id": "C",
        "text": "Advanced JavaScript and XML"
      },
      {
        "id": "D",
        "text": "Asynchronous JSON and XHTML"
      }
    ],
    "correctOption": "A",
    "explanation": "AJAX stands for Asynchronous JavaScript and XML, a suite of web development techniques using XMLHttpRequest or fetch() to send and retrieve data asynchronously from a web server without reloading the full page.",
    "unit": "Unit 10: Web-Based Application Development",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "Web Technologies"
  },
  {
    "id": 66,
    "originalNumber": 66,
    "question": "How does the DOM (Document Object Model) tree structure reflect the hierarchy of HTML elements?",
    "options": [
      {
        "id": "A",
        "text": "In alphabetical order"
      },
      {
        "id": "B",
        "text": "Based on the element's size"
      },
      {
        "id": "C",
        "text": "In a parent-child relationship"
      },
      {
        "id": "D",
        "text": "According to the element's color"
      }
    ],
    "correctOption": "C",
    "explanation": "The DOM represents an HTML document as a hierarchical tree where nested elements become child nodes of their containing parent element (e.g. document -> html -> body -> div).",
    "unit": "Unit 10: Web-Based Application Development",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "Web Technologies"
  },
  {
    "id": 67,
    "originalNumber": 67,
    "question": "In XML and HTML, which attribute is used to uniquely identify an element across the document?",
    "options": [
      {
        "id": "A",
        "text": "id"
      },
      {
        "id": "B",
        "text": "class"
      },
      {
        "id": "C",
        "text": "name"
      },
      {
        "id": "D",
        "text": "tag"
      }
    ],
    "correctOption": "A",
    "explanation": "The 'id' attribute specifies a unique identifier for an element; no two elements in a well-formed document may share the same id value.",
    "unit": "Unit 10: Web-Based Application Development",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "Web Technologies"
  },
  {
    "id": 68,
    "originalNumber": 68,
    "question": "The Kleene Star operation over a set of valid strings containing an even number of 0s and 1s accepts which of the following string subsets?",
    "options": [
      {
        "id": "A",
        "text": "01, 0011, 010101"
      },
      {
        "id": "B",
        "text": "0011, 11001100"
      },
      {
        "id": "C",
        "text": "ε, 0011, 11001101"
      },
      {
        "id": "D",
        "text": "ε, 0011, 11001100"
      }
    ],
    "correctOption": "D",
    "explanation": "The Kleene star (*) always includes the null string ε (which has zero 0s and zero 1s, both even). String '0011' has two 0s and two 1s (both even). String '11001100' has four 0s and four 1s (both even). Thus ε, 0011, 11001100 is valid.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Regular Expressions, Finite Automata, Arden's Theorem & Pumping Lemma",
    "topicSlug": "regular-expressions-finite-automata-toc",
    "examType": "STET",
    "category": "Theory of Computation"
  },
  {
    "id": 69,
    "originalNumber": 69,
    "question": "A language for which a Deterministic Finite Automaton (DFA) exists is a:",
    "options": [
      {
        "id": "A",
        "text": "Regular Language"
      },
      {
        "id": "B",
        "text": "Non-Regular Language"
      },
      {
        "id": "C",
        "text": "Any language"
      },
      {
        "id": "D",
        "text": "Cannot be said"
      }
    ],
    "correctOption": "A",
    "explanation": "By Kleene's Theorem, a language L is Regular if and only if there exists a Deterministic Finite Automaton (DFA) that accepts L.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Regular Expressions, Finite Automata, Arden's Theorem & Pumping Lemma",
    "topicSlug": "regular-expressions-finite-automata-toc",
    "examType": "STET",
    "category": "Theory of Computation"
  },
  {
    "id": 70,
    "originalNumber": 70,
    "question": "Let u = '1101', v = '0001'. For any string w, what is the identity element under string concatenation?",
    "options": [
      {
        "id": "A",
        "text": "u^-1"
      },
      {
        "id": "B",
        "text": "v^-1"
      },
      {
        "id": "C",
        "text": "u^-1 v^-1"
      },
      {
        "id": "D",
        "text": "ε"
      }
    ],
    "correctOption": "D",
    "explanation": "In formal language theory, the empty string ε (or λ) is the identity element for concatenation: w • ε = ε • w = w for all strings w in Σ*.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Regular Expressions, Finite Automata, Arden's Theorem & Pumping Lemma",
    "topicSlug": "regular-expressions-finite-automata-toc",
    "examType": "STET",
    "category": "Theory of Computation"
  },
  {
    "id": 71,
    "originalNumber": 71,
    "question": "For a DFA accepting binary numbers whose decimal equivalent is divisible by 3, what are all the possible remainders?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "0, 2"
      },
      {
        "id": "C",
        "text": "0, 1, 2"
      },
      {
        "id": "D",
        "text": "0, 1, 2, 3"
      }
    ],
    "correctOption": "C",
    "explanation": "By the Division Algorithm, dividing any integer n by 3 yields remainder r ∈ {0, 1, 2}. A minimal DFA for modulo 3 has 3 states corresponding to remainders 0, 1, and 2.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Regular Expressions, Finite Automata, Arden's Theorem & Pumping Lemma",
    "topicSlug": "regular-expressions-finite-automata-toc",
    "examType": "STET",
    "category": "Theory of Computation"
  },
  {
    "id": 72,
    "originalNumber": 72,
    "question": "Minimum number of states required in a DFA to accept all strings over {0,1} ending with '101':",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "can't be represented"
      }
    ],
    "correctOption": "C",
    "explanation": "For any pattern of length k ending with a specific substring, a minimal DFA requires k + 1 states (states: ε, '1', '10', '101'). Since k=3 for '101', the minimal DFA requires 3 + 1 = 4 states. (In NFA it requires 2-4 states, as noted in exam keys).",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Regular Expressions, Finite Automata, Arden's Theorem & Pumping Lemma",
    "topicSlug": "regular-expressions-finite-automata-toc",
    "examType": "STET",
    "category": "Theory of Computation"
  },
  {
    "id": 73,
    "originalNumber": 73,
    "question": "If an NFA of 5 states excluding the initial state (total 6 states) is converted into a DFA, the maximum possible number of states for the DFA is:",
    "options": [
      {
        "id": "A",
        "text": "64"
      },
      {
        "id": "B",
        "text": "32"
      },
      {
        "id": "C",
        "text": "128"
      },
      {
        "id": "D",
        "text": "187"
      }
    ],
    "correctOption": "A",
    "explanation": "The NFA contains 1 initial state + 5 other states = 6 states. By the Rabin-Scott subset construction theorem, the power set 2^Q has 2^6 = 64 maximum possible DFA states.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Regular Expressions, Finite Automata, Arden's Theorem & Pumping Lemma",
    "topicSlug": "regular-expressions-finite-automata-toc",
    "examType": "STET",
    "category": "Theory of Computation"
  },
  {
    "id": 74,
    "originalNumber": 74,
    "question": "The class of Context-Free Languages (CFL) is NOT closed under:",
    "options": [
      {
        "id": "A",
        "text": "Concatenation"
      },
      {
        "id": "B",
        "text": "Intersection"
      },
      {
        "id": "C",
        "text": "Union"
      },
      {
        "id": "D",
        "text": "Kleene Star"
      }
    ],
    "correctOption": "B",
    "explanation": "Context-Free Languages are closed under Union, Concatenation, and Kleene Star. They are NOT closed under Intersection (e.g. L1 = a^n b^n c^m and L2 = a^m b^n c^n are both CFLs, but L1 ∩ L2 = a^n b^n c^n is context-sensitive) or Complement.",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Chomsky Hierarchy, Pushdown Automata (PDA), Decidability & Closure Properties",
    "topicSlug": "chomsky-hierarchy-pda-toc",
    "examType": "STET",
    "category": "Theory of Computation"
  },
  {
    "id": 75,
    "originalNumber": 75,
    "question": "Which among the following is NOT true about IoT (Internet of Things)?",
    "options": [
      {
        "id": "A",
        "text": "IoT uses Micro Controllers"
      },
      {
        "id": "B",
        "text": "IoT is fully safe"
      },
      {
        "id": "C",
        "text": "IoT uses Sensors and Actuators"
      },
      {
        "id": "D",
        "text": "IoT uses wireless technology"
      }
    ],
    "correctOption": "B",
    "explanation": "IoT devices frequently suffer from security vulnerabilities due to constrained memory, unencrypted transmissions, and lack of firmware updates. Stating that 'IoT is fully safe' is completely false.",
    "unit": "Unit 12: Internet of Things (IoT)",
    "topicTitle": "IoT Architecture, Middleware, and Embedded Protocols: Zigbee, Modbus, and RFID",
    "topicSlug": "iot-architecture-middleware",
    "examType": "STET",
    "category": "IoT & Embedded"
  },
  {
    "id": 76,
    "originalNumber": 76,
    "question": "About IoT sensors, which among the following is NOT correct?",
    "options": [
      {
        "id": "A",
        "text": "Light sensor is analog"
      },
      {
        "id": "B",
        "text": "Microphone is a digital sensor"
      },
      {
        "id": "C",
        "text": "Keyboard is a digital sensor"
      },
      {
        "id": "D",
        "text": "Push button is a digital sensor"
      }
    ],
    "correctOption": "B",
    "explanation": "A microphone is fundamentally an analog acoustic transducer that converts continuous sound pressure waves into continuous analog electrical voltage signals (which then require an ADC for digital processing). Stating that a microphone is a digital sensor is incorrect.",
    "unit": "Unit 12: Internet of Things (IoT)",
    "topicTitle": "IoT Architecture, Middleware, and Embedded Protocols: Zigbee, Modbus, and RFID",
    "topicSlug": "iot-architecture-middleware",
    "examType": "STET",
    "category": "IoT & Embedded"
  },
  {
    "id": 77,
    "originalNumber": 77,
    "question": "BLE stands for:",
    "options": [
      {
        "id": "A",
        "text": "Bluetooth large energy"
      },
      {
        "id": "B",
        "text": "Bluetooth low energy"
      },
      {
        "id": "C",
        "text": "Bluetooth light energy"
      },
      {
        "id": "D",
        "text": "Bluetooth long energy"
      }
    ],
    "correctOption": "B",
    "explanation": "BLE stands for Bluetooth Low Energy (Bluetooth 4.0+ Smart), designed specifically for short-range low-power IoT devices and wearable sensors running for months on coin-cell batteries.",
    "unit": "Unit 12: Internet of Things (IoT)",
    "topicTitle": "IoT Architecture, Middleware, and Embedded Protocols: Zigbee, Modbus, and RFID",
    "topicSlug": "iot-architecture-middleware",
    "examType": "STET",
    "category": "IoT & Embedded"
  },
  {
    "id": 78,
    "originalNumber": 78,
    "question": "WSN stands for:",
    "options": [
      {
        "id": "A",
        "text": "Wireless Standard Protocol"
      },
      {
        "id": "B",
        "text": "Wireless Sensor Network / Protocol"
      },
      {
        "id": "C",
        "text": "Wireless Serial Protocol"
      },
      {
        "id": "D",
        "text": "Wireless Single Protocol"
      }
    ],
    "correctOption": "B",
    "explanation": "WSN stands for Wireless Sensor Network (or Wireless Sensor Protocol in industrial contexts), comprising spatially distributed autonomous sensor nodes that collaboratively monitor physical or environmental conditions.",
    "unit": "Unit 12: Internet of Things (IoT)",
    "topicTitle": "IoT Architecture, Middleware, and Embedded Protocols: Zigbee, Modbus, and RFID",
    "topicSlug": "iot-architecture-middleware",
    "examType": "STET",
    "category": "IoT & Embedded"
  },
  {
    "id": 79,
    "originalNumber": 79,
    "question": "A complex SCADA (Supervisory Control and Data Acquisition) system typically has how many levels?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctOption": "D",
    "explanation": "Standard SCADA hierarchical architectures define 4 operational levels: Level 0 (Field Instrumentation: sensors/actuators), Level 1 (Direct Control: PLCs and RTUs), Level 2 (Supervisory Plant Control: HMI and SCADA servers), and Level 3 (Production Scheduling and Enterprise Management).",
    "unit": "Unit 12: Internet of Things (IoT)",
    "topicTitle": "IoT Architecture, Middleware, and Embedded Protocols: Zigbee, Modbus, and RFID",
    "topicSlug": "iot-architecture-middleware",
    "examType": "STET",
    "category": "IoT & Embedded"
  },
  {
    "id": 80,
    "originalNumber": 80,
    "question": "What is the role of the MISO pin in the RFID / SPI interface module?",
    "options": [
      {
        "id": "A",
        "text": "Master In Slave Out"
      },
      {
        "id": "B",
        "text": "Manage Internal Slave Output"
      },
      {
        "id": "C",
        "text": "Master Internal Search Optimization"
      },
      {
        "id": "D",
        "text": "Manage Input Slave Op"
      }
    ],
    "correctOption": "A",
    "explanation": "In SPI (Serial Peripheral Interface) communication used by RFID readers (e.g. RC522), MISO stands for Master In Slave Out—the serial data line through which the slave peripheral transmits data to the master microcontroller.",
    "unit": "Unit 12: Internet of Things (IoT)",
    "topicTitle": "IoT Architecture, Middleware, and Embedded Protocols: Zigbee, Modbus, and RFID",
    "topicSlug": "iot-architecture-middleware",
    "examType": "STET",
    "category": "IoT & Embedded"
  },
  {
    "id": 81,
    "originalNumber": 81,
    "question": "Who is recognized as the father of Artificial Intelligence (AI)?",
    "options": [
      {
        "id": "A",
        "text": "Fisher Ada"
      },
      {
        "id": "B",
        "text": "Alan Turing"
      },
      {
        "id": "C",
        "text": "John McCarthy"
      },
      {
        "id": "D",
        "text": "Allen Newell"
      }
    ],
    "correctOption": "C",
    "explanation": "John McCarthy coined the term 'Artificial Intelligence' at the Dartmouth Conference (1956) and invented the Lisp programming language, earning recognition as the father of AI. Alan Turing is considered the father of modern computer science.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "STET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 82,
    "originalNumber": 82,
    "question": "Which programming language was developed and traditionally used for symbolic Artificial Intelligence?",
    "options": [
      {
        "id": "A",
        "text": "Lisp"
      },
      {
        "id": "B",
        "text": "Perl"
      },
      {
        "id": "C",
        "text": "Prolog"
      },
      {
        "id": "D",
        "text": "C++"
      }
    ],
    "correctOption": "A",
    "explanation": "Lisp (invented by John McCarthy in 1958) and Prolog (invented by Alain Colmerauer in 1972) are the quintessential functional and logic programming languages created for symbolic AI research.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "STET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 83,
    "originalNumber": 83,
    "question": "The algorithm used in adversarial game trees to make optimal decisions of Win/Lose is:",
    "options": [
      {
        "id": "A",
        "text": "Heuristic Search Algorithm"
      },
      {
        "id": "B",
        "text": "DFS / BFS algorithm"
      },
      {
        "id": "C",
        "text": "Greedy Search algorithm"
      },
      {
        "id": "D",
        "text": "Minimax (Min/Max) algorithm"
      }
    ],
    "correctOption": "D",
    "explanation": "The Minimax algorithm computes the optimal move for the maximizing player assuming the adversary chooses moves that minimize the score, used extensively in two-player zero-sum games (Chess, Tic-Tac-Toe).",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "STET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 84,
    "originalNumber": 84,
    "question": "Uniform-Cost Search (UCS) expands the node n with the:",
    "options": [
      {
        "id": "A",
        "text": "Lowest path cost g(n)"
      },
      {
        "id": "B",
        "text": "Heuristic cost h(n)"
      },
      {
        "id": "C",
        "text": "Highest path cost"
      },
      {
        "id": "D",
        "text": "Average path cost"
      }
    ],
    "correctOption": "A",
    "explanation": "Uniform-Cost Search (equivalent to Dijkstra's algorithm on trees) expands frontier nodes in order of non-decreasing path cost g(n) from the root, guaranteeing an optimal solution for positive step costs.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "STET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 85,
    "originalNumber": 85,
    "question": "The process of removing unnecessary details from a given state representation in AI problem formulation is called:",
    "options": [
      {
        "id": "A",
        "text": "Extraction"
      },
      {
        "id": "B",
        "text": "Abstraction"
      },
      {
        "id": "C",
        "text": "Data Mining"
      },
      {
        "id": "D",
        "text": "Information Retrieval"
      }
    ],
    "correctOption": "B",
    "explanation": "Abstraction is the process of eliminating extraneous real-world complexities from state definitions and actions to focus purely on the essential features required to search for a valid solution.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "STET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 86,
    "originalNumber": 86,
    "question": "In formal logic, what does an atomic sentence in first-order predicate logic contain?",
    "options": [
      {
        "id": "A",
        "text": "Predicate and a subject/arguments"
      },
      {
        "id": "B",
        "text": "Predicate and a Preposition"
      },
      {
        "id": "C",
        "text": "Subject and an object"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "An atomic sentence in First-Order Logic (FOL) consists of a Predicate symbol followed by an argument list of terms / subjects: P(t1, t2, ..., tn) (e.g. Loves(John, Mary)).",
    "unit": "Unit 11: Theory of Computation & Compilers",
    "topicTitle": "Propositional Logic: Tautologies, Equivalences & Truth Table Mastery",
    "topicSlug": "propositional-logic-toc",
    "examType": "STET",
    "category": "Mathematical Logic"
  },
  {
    "id": 87,
    "originalNumber": 87,
    "question": "Which of the following processes allows an AI agent to adapt and improve its performance over time?",
    "options": [
      {
        "id": "A",
        "text": "Precision"
      },
      {
        "id": "B",
        "text": "Learning"
      },
      {
        "id": "C",
        "text": "Observing"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "A learning agent consists of four components: learning element, performance element, critic, and problem generator. The learning element utilizes feedback to modify the performance element, improving future actions.",
    "unit": "Unit 13: Artificial Intelligence",
    "topicTitle": "Fuzzy Logic and Artificial Neural Networks: Sets, Defuzzification, and Backpropagation",
    "topicSlug": "fuzzy-logic-neural-networks-ai",
    "examType": "STET",
    "category": "Artificial Intelligence"
  },
  {
    "id": 88,
    "originalNumber": 88,
    "question": "Which of the following is part of the four primary operational classifications for E-commerce?",
    "options": [
      {
        "id": "A",
        "text": "B2B (Business-to-Business)"
      },
      {
        "id": "B",
        "text": "B2C (Business-to-Consumer)"
      },
      {
        "id": "C",
        "text": "C2B (Consumer-to-Business)"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "The foundational e-commerce transaction models are B2B, B2C, C2C (Consumer-to-Consumer), and C2B. All three listed options are core models.",
    "unit": "Unit 14: Fundamentals of E-Commerce",
    "topicTitle": "E-Commerce Frameworks, EDI, and Secure Electronic Payment Systems",
    "topicSlug": "ecommerce-frameworks",
    "examType": "STET",
    "category": "E-Commerce"
  },
  {
    "id": 89,
    "originalNumber": 89,
    "question": "What is the process in which a buyer posts interest in buying items, and sellers compete by submitting successively lower bids until one seller remains?",
    "options": [
      {
        "id": "A",
        "text": "B2B Marketplace"
      },
      {
        "id": "B",
        "text": "Forward Auction"
      },
      {
        "id": "C",
        "text": "Reverse Auction"
      },
      {
        "id": "D",
        "text": "Intranet"
      }
    ],
    "correctOption": "C",
    "explanation": "In a Reverse Auction (procurement auction), the buyer defines procurement specifications and competing suppliers bid downward against each other to offer the lowest acceptable price.",
    "unit": "Unit 14: Fundamentals of E-Commerce",
    "topicTitle": "E-Commerce Frameworks, EDI, and Secure Electronic Payment Systems",
    "topicSlug": "ecommerce-frameworks",
    "examType": "STET",
    "category": "E-Commerce"
  },
  {
    "id": 90,
    "originalNumber": 90,
    "question": "In Michael Porter's Five Forces model, if it is easy and inexpensive for competitors to enter the market, the threat of new entrants is considered:",
    "options": [
      {
        "id": "A",
        "text": "Low"
      },
      {
        "id": "B",
        "text": "High"
      },
      {
        "id": "C",
        "text": "Moderate"
      },
      {
        "id": "D",
        "text": "Negligible"
      }
    ],
    "correctOption": "B",
    "explanation": "Low barriers to entry (minimal capital requirements, lack of patent protections, ease of digital replication) mean new competitors can enter effortlessly, creating a High threat of new entrants.",
    "unit": "Unit 14: Fundamentals of E-Commerce",
    "topicTitle": "E-Commerce Frameworks, EDI, and Secure Electronic Payment Systems",
    "topicSlug": "ecommerce-frameworks",
    "examType": "STET",
    "category": "E-Commerce"
  },
  {
    "id": 91,
    "originalNumber": 91,
    "question": "Which of the following refers to creating goods and services tailored to individual customer specifications?",
    "options": [
      {
        "id": "A",
        "text": "Customization (Mass Customization)"
      },
      {
        "id": "B",
        "text": "Adaptation"
      },
      {
        "id": "C",
        "text": "Direct material"
      },
      {
        "id": "D",
        "text": "Auction"
      }
    ],
    "correctOption": "A",
    "explanation": "Customization (and Mass Customization) uses flexible automated production and digital storefronts to allow individual end-users to specify personalized product configurations.",
    "unit": "Unit 14: Fundamentals of E-Commerce",
    "topicTitle": "E-Commerce Frameworks, EDI, and Secure Electronic Payment Systems",
    "topicSlug": "ecommerce-frameworks",
    "examType": "STET",
    "category": "E-Commerce"
  },
  {
    "id": 92,
    "originalNumber": 92,
    "question": "Which form of e-marketplace brings together buyers and sellers exclusively from the same specific industry?",
    "options": [
      {
        "id": "A",
        "text": "Horizontal e-marketplace"
      },
      {
        "id": "B",
        "text": "Vertical e-marketplace"
      },
      {
        "id": "C",
        "text": "Integrated e-marketplace"
      },
      {
        "id": "D",
        "text": "Isolated e-marketplace"
      }
    ],
    "correctOption": "B",
    "explanation": "A Vertical e-marketplace connects participants within one specific industry niche (e.g. automotive components or chemicals). A Horizontal e-marketplace sells cross-industry maintenance and office supplies (MRO) across diverse sectors.",
    "unit": "Unit 14: Fundamentals of E-Commerce",
    "topicTitle": "E-Commerce Frameworks, EDI, and Secure Electronic Payment Systems",
    "topicSlug": "ecommerce-frameworks",
    "examType": "STET",
    "category": "E-Commerce"
  },
  {
    "id": 93,
    "originalNumber": 93,
    "question": "Which of the following functions is performed by SSL / TLS (Secure Sockets Layer)?",
    "options": [
      {
        "id": "A",
        "text": "Creates a secure, private connection to a web server"
      },
      {
        "id": "B",
        "text": "Encrypts confidential information"
      },
      {
        "id": "C",
        "text": "Authenticates communicating parties over the internet"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctOption": "D",
    "explanation": "SSL/TLS provides privacy via symmetric session encryption, integrity via HMAC hashes, and server authentication via digital certificates (X.509). Thus, all statements are performed by SSL.",
    "unit": "Unit 14: Fundamentals of E-Commerce",
    "topicTitle": "E-Commerce Frameworks, EDI, and Secure Electronic Payment Systems",
    "topicSlug": "ecommerce-frameworks",
    "examType": "STET",
    "category": "E-Commerce"
  },
  {
    "id": 94,
    "originalNumber": 94,
    "question": "The variation in packet arrival delay that occurs during the playback of a multimedia stream is called:",
    "options": [
      {
        "id": "A",
        "text": "Stream delay"
      },
      {
        "id": "B",
        "text": "Playback delay"
      },
      {
        "id": "C",
        "text": "Jitter"
      },
      {
        "id": "D",
        "text": "Event delay"
      }
    ],
    "correctOption": "C",
    "explanation": "Jitter is the statistical packet delay variation (PDV) between successive media packets, requiring a playback de-jitter buffer to ensure smooth, un-interrupted streaming audio/video playback.",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Multimedia Systems: Audio Compression (MP3 vs MIDI), Video Standards (MPEG), and Animation Principles",
    "topicSlug": "multimedia-formats",
    "examType": "STET",
    "category": "Multimedia"
  },
  {
    "id": 95,
    "originalNumber": 95,
    "question": "In the teardown state of the Real Time Streaming Protocol (RTSP):",
    "options": [
      {
        "id": "A",
        "text": "The server allocates resources for the client"
      },
      {
        "id": "B",
        "text": "The server delivers the stream to client"
      },
      {
        "id": "C",
        "text": "The server suspends delivery of stream"
      },
      {
        "id": "D",
        "text": "The server breaks down the connection and releases allocated resources"
      }
    ],
    "correctOption": "D",
    "explanation": "In RTSP (RFC 2326), sending a TEARDOWN request stops the media stream playback, terminates the session, and releases associated network and server resources.",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Multimedia Systems: Audio Compression (MP3 vs MIDI), Video Standards (MPEG), and Animation Principles",
    "topicSlug": "multimedia-formats",
    "examType": "STET",
    "category": "Multimedia"
  },
  {
    "id": 96,
    "originalNumber": 96,
    "question": "In Real-Time Interactive Audio and Video, Jitter is introduced in real-time data by delay differences between:",
    "options": [
      {
        "id": "A",
        "text": "Pixels"
      },
      {
        "id": "B",
        "text": "Layers"
      },
      {
        "id": "C",
        "text": "Frames"
      },
      {
        "id": "D",
        "text": "Packets"
      }
    ],
    "correctOption": "D",
    "explanation": "In packet-switched IP networks, packets travel along disparate paths or encounter variable queuing delays, producing arrival time variations (jitter) between successive data packets.",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Multimedia Systems: Audio Compression (MP3 vs MIDI), Video Standards (MPEG), and Animation Principles",
    "topicSlug": "multimedia-formats",
    "examType": "STET",
    "category": "Multimedia"
  },
  {
    "id": 97,
    "originalNumber": 97,
    "question": "In Audio and Video Compression (standard PCM telephony), human voice is sampled at 8000 samples per second with:",
    "options": [
      {
        "id": "A",
        "text": "8 bits per sample"
      },
      {
        "id": "B",
        "text": "5 bits per sample"
      },
      {
        "id": "C",
        "text": "7 bits per sample"
      },
      {
        "id": "D",
        "text": "6 bits per sample"
      }
    ],
    "correctOption": "A",
    "explanation": "By the Nyquist Sampling Theorem, voice up to 4 kHz requires sampling at 2 × 4000 = 8,000 samples/sec. With 8 bits per sample (ITU-T G.711 A-law/μ-law), standard bit rate is 8000 × 8 = 64 kbps (DS0).",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Multimedia Systems: Audio Compression (MP3 vs MIDI), Video Standards (MPEG), and Animation Principles",
    "topicSlug": "multimedia-formats",
    "examType": "STET",
    "category": "Multimedia"
  },
  {
    "id": 98,
    "originalNumber": 98,
    "question": "Audio compression techniques (such as MP3 and AAC) are primarily optimized for compressing:",
    "options": [
      {
        "id": "A",
        "text": "Voice and alphanumeric data"
      },
      {
        "id": "B",
        "text": "Video and voice"
      },
      {
        "id": "C",
        "text": "Speech or music"
      },
      {
        "id": "D",
        "text": "Pictures and colors"
      }
    ],
    "correctOption": "C",
    "explanation": "Perceptual audio compression algorithms exploit psychoacoustic models of the human auditory system (frequency masking and temporal masking) specifically tuned to compress speech and music.",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Multimedia Systems: Audio Compression (MP3 vs MIDI), Video Standards (MPEG), and Animation Principles",
    "topicSlug": "multimedia-formats",
    "examType": "STET",
    "category": "Multimedia"
  },
  {
    "id": 99,
    "originalNumber": 99,
    "question": "In digital display systems, each pixel value represents a particular:",
    "options": [
      {
        "id": "A",
        "text": "Frame"
      },
      {
        "id": "B",
        "text": "Character"
      },
      {
        "id": "C",
        "text": "Colour (intensity value)"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "A pixel (picture element) stores numeric values encoding luminance and chrominance (e.g. 24-bit TrueColor RGB: 8 bits Red, 8 bits Green, 8 bits Blue) determining its display color.",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Computer Graphics: 2D & 3D Geometric Transformations and Homogeneous Coordinates",
    "topicSlug": "computer-graphics-transformations",
    "examType": "STET",
    "category": "Computer Graphics"
  },
  {
    "id": 100,
    "originalNumber": 100,
    "question": "Which of the following is basically a sequence of visual images displaying rapid simulated movement?",
    "options": [
      {
        "id": "A",
        "text": "Photography"
      },
      {
        "id": "B",
        "text": "Animations"
      },
      {
        "id": "C",
        "text": "Drawing"
      },
      {
        "id": "D",
        "text": "Creativity"
      }
    ],
    "correctOption": "B",
    "explanation": "Animation is the optical illusion of motion created by displaying a sequence of consecutive still drawings or rendered computer models at speeds above persistence of vision (≥24 fps).",
    "unit": "Unit 15: Computer Graphics & Multimedia",
    "topicTitle": "Multimedia Systems: Audio Compression (MP3 vs MIDI), Video Standards (MPEG), and Animation Principles",
    "topicSlug": "multimedia-formats",
    "examType": "STET",
    "category": "Multimedia"
  },
  {
    "id": 101,
    "originalNumber": 101,
    "question": "The main aim of classroom teaching is:",
    "options": [
      {
        "id": "A",
        "text": "To give information"
      },
      {
        "id": "B",
        "text": "Help to pass examination"
      },
      {
        "id": "C",
        "text": "Syllabus coverage"
      },
      {
        "id": "D",
        "text": "To develop all-round personality"
      }
    ],
    "correctOption": "D",
    "explanation": "Modern holistic pedagogical philosophy holds that the overarching purpose of classroom education is the comprehensive development of the student's cognitive, emotional, and social personality.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 102,
    "originalNumber": 102,
    "question": "To ensure active participation of students in the classroom, the teacher should use:",
    "options": [
      {
        "id": "A",
        "text": "Demonstration"
      },
      {
        "id": "B",
        "text": "Lecture method"
      },
      {
        "id": "C",
        "text": "Discussion method"
      },
      {
        "id": "D",
        "text": "Illustration"
      }
    ],
    "correctOption": "C",
    "explanation": "The group discussion method stimulates two-way dialogue, critical thinking, active peer engagement, and learner-centered classroom participation.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 103,
    "originalNumber": 103,
    "question": "Learning through independent effort and self-direction is called:",
    "options": [
      {
        "id": "A",
        "text": "Autonomous learning"
      },
      {
        "id": "B",
        "text": "Autocratic learning"
      },
      {
        "id": "C",
        "text": "Democratic learning"
      },
      {
        "id": "D",
        "text": "All the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Autonomous learning (self-regulated learning) empowers students to take ownership of setting goals, monitoring comprehension, and acquiring knowledge independently.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 104,
    "originalNumber": 104,
    "question": "Educational Aims (as distinguished from specific classroom objectives):",
    "options": [
      {
        "id": "A",
        "text": "May include abstract concepts"
      },
      {
        "id": "B",
        "text": "Are difficult to measure directly in a single class"
      },
      {
        "id": "C",
        "text": "May include appreciation and character values"
      },
      {
        "id": "D",
        "text": "All the above"
      }
    ],
    "correctOption": "D",
    "explanation": "Broad educational aims reflect philosophical ideals (citizenship, character, aesthetic appreciation), encompass abstract values, and cannot be measured by a single daily lesson test.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 105,
    "originalNumber": 105,
    "question": "In Bloom's Taxonomy, the Psychomotor domain relates to:",
    "options": [
      {
        "id": "A",
        "text": "Map making"
      },
      {
        "id": "B",
        "text": "Project making / craft construction"
      },
      {
        "id": "C",
        "text": "Playing games and physical coordination"
      },
      {
        "id": "D",
        "text": "All the above"
      }
    ],
    "correctOption": "D",
    "explanation": "The psychomotor domain encompasses physical movement, motor skills, coordination, and muscular activity—including drawing maps, crafting models, and kinesthetic sports.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 106,
    "originalNumber": 106,
    "question": "The term 'Heuristic' (derived from the Greek 'heurisko') means:",
    "options": [
      {
        "id": "A",
        "text": "To investigate / discover"
      },
      {
        "id": "B",
        "text": "To show"
      },
      {
        "id": "C",
        "text": "To do"
      },
      {
        "id": "D",
        "text": "To act"
      }
    ],
    "correctOption": "A",
    "explanation": "'Heuriskein' in Greek means 'to find' or 'to discover / investigate', signifying problem-solving by discovery rather than rote instruction.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 107,
    "originalNumber": 107,
    "question": "Professor H. E. Armstrong advocated which teaching method?",
    "options": [
      {
        "id": "A",
        "text": "Project method"
      },
      {
        "id": "B",
        "text": "Heuristic method"
      },
      {
        "id": "C",
        "text": "Team teaching"
      },
      {
        "id": "D",
        "text": "Blended method"
      }
    ],
    "correctOption": "B",
    "explanation": "Professor Henry Edward Armstrong pioneered the Heuristic Method of science teaching, placing the student in the attitude of an original discoverer.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 108,
    "originalNumber": 108,
    "question": "In Herbartian lesson planning, 'Set Induction' (Introduction) relates to:",
    "options": [
      {
        "id": "A",
        "text": "Connecting to previous knowledge"
      },
      {
        "id": "B",
        "text": "New knowledge"
      },
      {
        "id": "C",
        "text": "Specific objectives"
      },
      {
        "id": "D",
        "text": "Statement of aim"
      }
    ],
    "correctOption": "A",
    "explanation": "Set induction hooks the learner's attention by probing and arousing their existing schema (previous knowledge) to build a bridge to new concepts.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 109,
    "originalNumber": 109,
    "question": "Didactic teaching apparatus and sensory materials were introduced by:",
    "options": [
      {
        "id": "A",
        "text": "Pestalozzi"
      },
      {
        "id": "B",
        "text": "Froebel"
      },
      {
        "id": "C",
        "text": "Maria Montessori"
      },
      {
        "id": "D",
        "text": "John Dewey"
      }
    ],
    "correctOption": "C",
    "explanation": "Dr. Maria Montessori developed self-correcting didactic sensory apparatus (pink tower, cylinder blocks) for early childhood development.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 110,
    "originalNumber": 110,
    "question": "The centerpiece and focal reference of an effective lesson plan is the:",
    "options": [
      {
        "id": "A",
        "text": "Principal"
      },
      {
        "id": "B",
        "text": "Teacher"
      },
      {
        "id": "C",
        "text": "Student"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Modern constructive pedagogy requires child-centric/student-centric lesson design structured around learner needs, abilities, and learning outcomes.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 111,
    "originalNumber": 111,
    "question": "According to Howard Gardner's theory of Multiple Intelligences, a philosopher has predominantly _______ intelligence and a sculptor has more _______ intelligence.",
    "options": [
      {
        "id": "A",
        "text": "Interpersonal; linguistic"
      },
      {
        "id": "B",
        "text": "Linguistic; interpersonal"
      },
      {
        "id": "C",
        "text": "Spatial; intrapersonal"
      },
      {
        "id": "D",
        "text": "Intrapersonal; spatial"
      }
    ],
    "correctOption": "D",
    "explanation": "Philosophers excel in introspective self-reflection (Intrapersonal Intelligence), while sculptors manipulate 3D spatial forms and volumes (Visual-Spatial Intelligence).",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 112,
    "originalNumber": 112,
    "question": "Which of the following statements is an example of an internal attribution for failure?",
    "options": [
      {
        "id": "A",
        "text": "I failed the test because my friends were distracting me."
      },
      {
        "id": "B",
        "text": "I received a low grade because the teacher is a tough grader."
      },
      {
        "id": "C",
        "text": "I failed the test because I didn't study enough."
      },
      {
        "id": "D",
        "text": "I didn't get good marks because the teacher was biased."
      }
    ],
    "correctOption": "C",
    "explanation": "In Weiner's Attribution Theory, attributing outcomes to internal, controllable factors ('I did not put in adequate study effort') promotes growth mindset, whereas blaming teachers or friends is external attribution.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 113,
    "originalNumber": 113,
    "question": "Which of the following is an example of a metacognitive question that requires students to reflect on their own thinking?",
    "options": [
      {
        "id": "A",
        "text": "How has your thinking about the use of verbs changed since the beginning of the class?"
      },
      {
        "id": "B",
        "text": "What is the relationship between nouns and verbs in a sentence?"
      },
      {
        "id": "C",
        "text": "What is the definition of a verb?"
      },
      {
        "id": "D",
        "text": "How do you change a verb to the present tense?"
      }
    ],
    "correctOption": "A",
    "explanation": "Metacognition ('thinking about thinking') involves self-monitoring and cognitive reflection. Asking how one's own understanding has evolved over time requires metacognitive self-evaluation.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 114,
    "originalNumber": 114,
    "question": "Micro-teaching is most effective:",
    "options": [
      {
        "id": "A",
        "text": "Always"
      },
      {
        "id": "B",
        "text": "After the teaching-practice"
      },
      {
        "id": "C",
        "text": "During the teaching-practice"
      },
      {
        "id": "D",
        "text": "During the preparation for teaching-practice"
      }
    ],
    "correctOption": "C",
    "explanation": "Micro-teaching provides focused, scaled-down practice of specific teaching skills with immediate peer feedback during teacher training internships.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 115,
    "originalNumber": 115,
    "question": "Which of the following is a primary characteristic of a person with a scientific attitude?",
    "options": [
      {
        "id": "A",
        "text": "Brevity"
      },
      {
        "id": "B",
        "text": "Objectivity"
      },
      {
        "id": "C",
        "text": "Adventure"
      },
      {
        "id": "D",
        "text": "Sharp memory"
      }
    ],
    "correctOption": "B",
    "explanation": "Objectivity—evaluating evidence free from personal bias, prejudice, or superstition—is the hallmark of a genuine scientific mindset.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 116,
    "originalNumber": 116,
    "question": "Modern educational libraries provide:",
    "options": [
      {
        "id": "A",
        "text": "Physical print material"
      },
      {
        "id": "B",
        "text": "Digital and electronic resources"
      },
      {
        "id": "C",
        "text": "Both A & B"
      },
      {
        "id": "D",
        "text": "None of these"
      }
    ],
    "correctOption": "C",
    "explanation": "Hybrid academic libraries provide both physical books/journals and digital databases, e-books, and scholarly portals.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 117,
    "originalNumber": 117,
    "question": "Which of the following functions is fundamental and essential to a library?",
    "options": [
      {
        "id": "A",
        "text": "Learning and study"
      },
      {
        "id": "B",
        "text": "Walking"
      },
      {
        "id": "C",
        "text": "Playing"
      },
      {
        "id": "D",
        "text": "None of these"
      }
    ],
    "correctOption": "A",
    "explanation": "A library is an intellectual sanctuary dedicated to self-directed reading, research, inquiry, and lifelong learning.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 118,
    "originalNumber": 118,
    "question": "A teacher should ask questions that are:",
    "options": [
      {
        "id": "A",
        "text": "Meaningful and thought-provoking"
      },
      {
        "id": "B",
        "text": "Maximum number of questions in a fixed time"
      },
      {
        "id": "C",
        "text": "As many trivial questions as possible"
      },
      {
        "id": "D",
        "text": "None of these"
      }
    ],
    "correctOption": "A",
    "explanation": "Effective classroom questions stimulate conceptual inquiry, critical evaluation, and higher-order thinking (Bloom's analysis and synthesis).",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 119,
    "originalNumber": 119,
    "question": "Which of the following is considered an important cause of failure for a teacher?",
    "options": [
      {
        "id": "A",
        "text": "Interpersonal relationship"
      },
      {
        "id": "B",
        "text": "Verbal ability"
      },
      {
        "id": "C",
        "text": "Lack of command over the knowledge of the subject"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Subject matter mastery is the primary prerequisite of teaching; without deep subject knowledge, pedagogy loses credibility and effectiveness.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 120,
    "originalNumber": 120,
    "question": "A professional teacher should strive to master:",
    "options": [
      {
        "id": "A",
        "text": "Only one single teaching method"
      },
      {
        "id": "B",
        "text": "Equally across diverse teaching methods according to learner needs"
      },
      {
        "id": "C",
        "text": "Both A & B"
      },
      {
        "id": "D",
        "text": "None of these"
      }
    ],
    "correctOption": "B",
    "explanation": "Differentiated instruction requires teachers to adapt flexibly across diverse methodologies (inquiry, lecture, laboratory, cooperative learning).",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 121,
    "originalNumber": 121,
    "question": "In the DIKW pyramid, Knowledge represents structured understanding synthesized from:",
    "options": [
      {
        "id": "A",
        "text": "Information and experience"
      },
      {
        "id": "B",
        "text": "Application"
      },
      {
        "id": "C",
        "text": "Analysis"
      },
      {
        "id": "D",
        "text": "Understanding"
      }
    ],
    "correctOption": "A",
    "explanation": "In cognitive hierarchies, raw Data is processed into Information, which is contextualized and internalized as Knowledge.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Data Warehousing, OLAP, and Data Mining: Schemas, Operations, and Apriori Algorithm",
    "topicSlug": "data-warehousing-data-mining-dbms",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 122,
    "originalNumber": 122,
    "question": "Formative evaluation is conducted:",
    "options": [
      {
        "id": "A",
        "text": "After the teaching-learning process"
      },
      {
        "id": "B",
        "text": "Before the teaching-learning process"
      },
      {
        "id": "C",
        "text": "Continuously during the teaching-learning process"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Formative assessment provides ongoing diagnostic feedback during instruction to guide remediation (Assessment FOR learning), in contrast to summative assessment (Assessment OF learning).",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Testing, Metrics, and Maintenance: Black-Box, White-Box, and Mutation Testing",
    "topicSlug": "software-testing-maintenance-se",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 123,
    "originalNumber": 123,
    "question": "Which measurement technique is commonly used for evaluating student interests and attitudes?",
    "options": [
      {
        "id": "A",
        "text": "Observation technique"
      },
      {
        "id": "B",
        "text": "Check list"
      },
      {
        "id": "C",
        "text": "Rating scale / Likert scale"
      },
      {
        "id": "D",
        "text": "Projective Technique"
      }
    ],
    "correctOption": "C",
    "explanation": "Attitude and interest inventories commonly employ graduated Rating Scales (such as Likert 5-point scales) to quantify affective domain values.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Testing, Metrics, and Maintenance: Black-Box, White-Box, and Mutation Testing",
    "topicSlug": "software-testing-maintenance-se",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 124,
    "originalNumber": 124,
    "question": "Which of the following is NOT a recognized curriculum design model?",
    "options": [
      {
        "id": "A",
        "text": "Subject-centered design"
      },
      {
        "id": "B",
        "text": "Problem-centered design"
      },
      {
        "id": "C",
        "text": "Learner-centered design"
      },
      {
        "id": "D",
        "text": "Teacher-centered curriculum design"
      }
    ],
    "correctOption": "D",
    "explanation": "Standard curriculum design models are Subject-Centered, Learner-Centered, and Problem-Centered. 'Teacher-centered' is an instructional delivery style, not a valid curriculum framework.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 125,
    "originalNumber": 125,
    "question": "Which of the following is NOT considered a fundamental nature of an academic curriculum?",
    "options": [
      {
        "id": "A",
        "text": "Critical"
      },
      {
        "id": "B",
        "text": "Creative"
      },
      {
        "id": "C",
        "text": "Conservative (preserving cultural heritage)"
      },
      {
        "id": "D",
        "text": "Active / Passive"
      }
    ],
    "correctOption": "D",
    "explanation": "Curriculum theory identifies three functions: Conservative (transmitting heritage), Creative (fostering innovation), and Critical (evaluating society).",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 126,
    "originalNumber": 126,
    "question": "A major ideological and social challenge confronting modern democratic societies is:",
    "options": [
      {
        "id": "A",
        "text": "Fundamentalism"
      },
      {
        "id": "B",
        "text": "Casteism"
      },
      {
        "id": "C",
        "text": "Regionalism"
      },
      {
        "id": "D",
        "text": "All the above"
      }
    ],
    "correctOption": "A",
    "explanation": "Religious and political fundamentalism undermines secular tolerance, constitutional liberties, and democratic dialogue.",
    "unit": "General Awareness & Society",
    "topicTitle": "Software Quality Assurance, CMMI Maturity Levels, and ISO 9000 Standards",
    "topicSlug": "software-engineering-cmmi",
    "examType": "STET",
    "category": "General Awareness"
  },
  {
    "id": 127,
    "originalNumber": 127,
    "question": "An ideal teacher should interact with students primarily as a:",
    "options": [
      {
        "id": "A",
        "text": "Friend, philosopher, and guide"
      },
      {
        "id": "B",
        "text": "Master/autocrat"
      },
      {
        "id": "C",
        "text": "Strict disciplinarian only"
      },
      {
        "id": "D",
        "text": "Impersonal instructor"
      }
    ],
    "correctOption": "A",
    "explanation": "Progressive education emphasizes establishing empathetic, supportive rapport as a guide and facilitator rather than an authoritarian ruler.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
    "topicSlug": "software-engineering-models-metrics",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 128,
    "originalNumber": 128,
    "question": "Failure can become our greatest teacher if:",
    "options": [
      {
        "id": "A",
        "text": "We work harder blindly"
      },
      {
        "id": "B",
        "text": "We ignore mistakes"
      },
      {
        "id": "C",
        "text": "We analyze root causes of failure and apply constructive effort with renewed resilience"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOption": "C",
    "explanation": "Reflective learning requires identifying error root causes and translating diagnostic insights into targeted improvement.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Software Testing, Metrics, and Maintenance: Black-Box, White-Box, and Mutation Testing",
    "topicSlug": "software-testing-maintenance-se",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 129,
    "originalNumber": 129,
    "question": "A Chalk-Board is categorized under which type of teaching aid?",
    "options": [
      {
        "id": "A",
        "text": "Visual aid"
      },
      {
        "id": "B",
        "text": "Audio aid"
      },
      {
        "id": "C",
        "text": "Audio-Visual aid"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctOption": "A",
    "explanation": "A chalkboard appeals purely to visual perception, classifying it as a traditional visual display aid.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 130,
    "originalNumber": 130,
    "question": "Television and multimedia video projectors are categorized as:",
    "options": [
      {
        "id": "A",
        "text": "Visual aid only"
      },
      {
        "id": "B",
        "text": "Audio-visual aid"
      },
      {
        "id": "C",
        "text": "Audio aid only"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOption": "B",
    "explanation": "Television simultaneously stimulates both sight and hearing, making it an audio-visual aid.",
    "unit": "Art of Teaching & Pedagogy",
    "topicTitle": "Multimedia Systems: Audio Compression (MP3 vs MIDI), Video Standards (MPEG), and Animation Principles",
    "topicSlug": "multimedia-formats",
    "examType": "STET",
    "category": "Art of Teaching"
  },
  {
    "id": 131,
    "originalNumber": 131,
    "question": "There were widespread tribal and agrarian uprisings against the British in the 1820s. Which of the following did NOT revolt in the 1820s?",
    "options": [
      {
        "id": "A",
        "text": "Santhals"
      },
      {
        "id": "B",
        "text": "Ahoms"
      },
      {
        "id": "C",
        "text": "Pagal Panthis"
      },
      {
        "id": "D",
        "text": "Ramosi"
      }
    ],
    "correctOption": "A",
    "explanation": "The Santhal Hul rebellion occurred in 1855-1856 led by Sidhu and Kanhu Murmu (not in the 1820s). The Ahoms revolted in 1828, Ramosi in 1822, and Pagal Panthis in 1825.",
    "unit": "General Awareness: History",
    "topicTitle": "Software Quality Assurance, CMMI Maturity Levels, and ISO 9000 Standards",
    "topicSlug": "software-engineering-cmmi",
    "examType": "STET",
    "category": "General Knowledge"
  },
  {
    "id": 132,
    "originalNumber": 132,
    "question": "If the Sun rises at Tirap in Arunachal Pradesh at 5:00 AM (IST), approximately when (IST) will the Sun rise in Kandla, Gujarat?",
    "options": [
      {
        "id": "A",
        "text": "About 5:00 AM"
      },
      {
        "id": "B",
        "text": "About 6:20 AM"
      },
      {
        "id": "C",
        "text": "About 7:30 AM"
      },
      {
        "id": "D",
        "text": "About 7:00 AM"
      }
    ],
    "correctOption": "D",
    "explanation": "India spans ~30° of longitude (from 68°7'E in Gujarat to 97°25'E in Arunachal Pradesh). Earth rotates 1° every 4 minutes: 30° × 4 min = 120 minutes = 2 hours. Sun rises 2 hours later in Gujarat: 5:00 AM + 2 hours = ~7:00 AM.",
    "unit": "General Awareness: Geography",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "General Knowledge"
  },
  {
    "id": 133,
    "originalNumber": 133,
    "question": "In corporate finance regulations, what is the maximum individual portfolio investment limit by a single foreign portfolio investor in an Indian company?",
    "options": [
      {
        "id": "A",
        "text": "10%"
      },
      {
        "id": "B",
        "text": "15%"
      },
      {
        "id": "C",
        "text": "20%"
      },
      {
        "id": "D",
        "text": "25%"
      }
    ],
    "correctOption": "A",
    "explanation": "Under SEBI and FEMA guidelines, a single Foreign Portfolio Investor (FPI) can invest up to a maximum of 10% of the paid-up equity capital of an Indian company; holdings of 10% or more are classified as Foreign Direct Investment (FDI).",
    "unit": "General Awareness: Economics",
    "topicTitle": "E-Commerce Frameworks, EDI, and Secure Electronic Payment Systems",
    "topicSlug": "ecommerce-frameworks",
    "examType": "STET",
    "category": "General Knowledge"
  },
  {
    "id": 134,
    "originalNumber": 134,
    "question": "Who among the following national leaders was NOT associated with Mahatma Gandhi's 1917 Champaran Satyagraha in Bihar?",
    "options": [
      {
        "id": "A",
        "text": "Dr. Rajendra Prasad"
      },
      {
        "id": "B",
        "text": "Anugrah Narayan Singh"
      },
      {
        "id": "C",
        "text": "J. B. Kripalani"
      },
      {
        "id": "D",
        "text": "Jai Prakash Narayan"
      }
    ],
    "correctOption": "D",
    "explanation": "Dr. Rajendra Prasad, Anugrah Narayan Sinha, J.B. Kripalani, and Mahadev Desai assisted Gandhi in Champaran in 1917. Loknayak Jayaprakash Narayan was a schoolboy in 1917 and joined the freedom movement later during the 1930s and 1942 Quit India Movement.",
    "unit": "General Awareness: Bihar History",
    "topicTitle": "Software Quality Assurance, CMMI Maturity Levels, and ISO 9000 Standards",
    "topicSlug": "software-engineering-cmmi",
    "examType": "STET",
    "category": "General Knowledge"
  },
  {
    "id": 135,
    "originalNumber": 135,
    "question": "Visva-Bharati University, recognized as a UNESCO World Heritage site, is located in which Indian state?",
    "options": [
      {
        "id": "A",
        "text": "Uttar Pradesh"
      },
      {
        "id": "B",
        "text": "Bihar"
      },
      {
        "id": "C",
        "text": "West Bengal"
      },
      {
        "id": "D",
        "text": "Odisha"
      }
    ],
    "correctOption": "C",
    "explanation": "Visva-Bharati University was founded by Nobel Laureate Rabindranath Tagore in 1921 in Santiniketan, West Bengal.",
    "unit": "General Awareness: Culture",
    "topicTitle": "Web Technologies, XML, and Application Security: HTTP, DOM, and Cyber Defense",
    "topicSlug": "web-technologies-xml-security",
    "examType": "STET",
    "category": "General Knowledge"
  },
  {
    "id": 136,
    "originalNumber": 136,
    "question": "Rama plays cricket with his friends every evening. Which form of energy does he directly exert to bowl and bat?",
    "options": [
      {
        "id": "A",
        "text": "Sound energy"
      },
      {
        "id": "B",
        "text": "Light energy"
      },
      {
        "id": "C",
        "text": "Chemical energy"
      },
      {
        "id": "D",
        "text": "Muscular energy"
      }
    ],
    "correctOption": "D",
    "explanation": "Human physical exertion during sports involves contraction of skeletal muscle fibers, utilizing muscular mechanical energy.",
    "unit": "General Science",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "STET",
    "category": "General Science"
  },
  {
    "id": 137,
    "originalNumber": 137,
    "question": "Which one of the following is a traditional 'sticky rice' variety indigenous to Assam?",
    "options": [
      {
        "id": "A",
        "text": "Ponni rice"
      },
      {
        "id": "B",
        "text": "Bora rice"
      },
      {
        "id": "C",
        "text": "Arborio rice"
      },
      {
        "id": "D",
        "text": "Bomba rice"
      }
    ],
    "correctOption": "B",
    "explanation": "Bora saul is an indigenous glutinous sticky rice widely cultivated and consumed in Assam during festivals such as Bihu.",
    "unit": "General Science & Geography",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "General Knowledge"
  },
  {
    "id": 138,
    "originalNumber": 138,
    "question": "When we burn hydrocarbon fuels (combustion reaction), we release:",
    "options": [
      {
        "id": "A",
        "text": "Light and sound energy"
      },
      {
        "id": "B",
        "text": "Only light energy"
      },
      {
        "id": "C",
        "text": "Heat and light energy"
      },
      {
        "id": "D",
        "text": "Mechanical and Light energy"
      }
    ],
    "correctOption": "C",
    "explanation": "Combustion is an exothermic chemical reaction between a fuel and oxygen, releasing thermal energy (heat) and electromagnetic radiation (light).",
    "unit": "General Science",
    "topicTitle": "Instruction Pipelining, Hazards, Speedup & Branch Prediction",
    "topicSlug": "instruction-pipelining-hazards-co",
    "examType": "STET",
    "category": "General Science"
  },
  {
    "id": 139,
    "originalNumber": 139,
    "question": "Consider the biological characteristics of snakes and identify the INCORRECT statement:",
    "options": [
      {
        "id": "A",
        "text": "They chew up their prey"
      },
      {
        "id": "B",
        "text": "They swallow their food whole"
      },
      {
        "id": "C",
        "text": "Snakes have backward-curving teeth"
      },
      {
        "id": "D",
        "text": "Poisonous snakes have hollow fangs"
      }
    ],
    "correctOption": "A",
    "explanation": "Snakes do not possess chewing dentition or molars; their jaw bones unhinge to allow them to swallow prey whole. Stating that they chew their prey is incorrect.",
    "unit": "General Science",
    "topicTitle": "Artificial Intelligence: Search Strategies, A* Algorithm, and Alpha-Beta Pruning",
    "topicSlug": "artificial-intelligence-search-heuristics",
    "examType": "STET",
    "category": "General Science"
  },
  {
    "id": 140,
    "originalNumber": 140,
    "question": "With respect to Gujarat on the map of India, the geographical directions of Uttar Pradesh and Andhra Pradesh, respectively, are:",
    "options": [
      {
        "id": "A",
        "text": "North-West; South-East"
      },
      {
        "id": "B",
        "text": "North-West; South-West"
      },
      {
        "id": "C",
        "text": "North-East; South-West"
      },
      {
        "id": "D",
        "text": "North-East; South-East"
      }
    ],
    "correctOption": "D",
    "explanation": "Positioning Gujarat at origin (0,0): Uttar Pradesh lies to the North and East (North-East), while Andhra Pradesh lies to the South and East (South-East).",
    "unit": "General Awareness: Geography",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Reasoning"
  },
  {
    "id": 141,
    "originalNumber": 141,
    "question": "Which one of the following groups consists exclusively of 3-dimensional solid geometric figures?",
    "options": [
      {
        "id": "A",
        "text": "Cube, Cuboid, Sphere, Cylinder"
      },
      {
        "id": "B",
        "text": "Cube, Cuboid, Semi-Circle, Cone"
      },
      {
        "id": "C",
        "text": "Cube, Cuboid, Circle, Cone"
      },
      {
        "id": "D",
        "text": "Cube, Cuboid, Circle, Triangle"
      }
    ],
    "correctOption": "A",
    "explanation": "Cube, cuboid, sphere, and cylinder each have three spatial dimensions (length, width, height) and volume. Circles, semi-circles, and triangles are 2D planar figures.",
    "unit": "General Mathematics & Graphics",
    "topicTitle": "Computer Graphics: 2D & 3D Geometric Transformations and Homogeneous Coordinates",
    "topicSlug": "computer-graphics-transformations",
    "examType": "STET",
    "category": "Mathematics"
  },
  {
    "id": 142,
    "originalNumber": 142,
    "question": "What is the missing number in the sequence pattern: 1, 6, 15, ____, 45, 66, 91?",
    "options": [
      {
        "id": "A",
        "text": "25"
      },
      {
        "id": "B",
        "text": "36"
      },
      {
        "id": "C",
        "text": "28"
      },
      {
        "id": "D",
        "text": "32"
      }
    ],
    "correctOption": "C",
    "explanation": "Examine consecutive differences:\n6 - 1 = 5\n15 - 6 = 9 (difference increased by 4)\nNext difference: 9 + 4 = 13 -> 15 + 13 = 28\nNext difference: 13 + 4 = 17 -> 28 + 17 = 45\nNext difference: 17 + 4 = 21 -> 45 + 21 = 66\nNext difference: 21 + 4 = 25 -> 66 + 25 = 91.\nThe missing number is 28.",
    "unit": "Quantitative Aptitude",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Reasoning"
  },
  {
    "id": 143,
    "originalNumber": 143,
    "question": "A whole number x is added to 100, and the same number x is subtracted from 100. The sum of the two resulting numbers is:",
    "options": [
      {
        "id": "A",
        "text": "100"
      },
      {
        "id": "B",
        "text": "200"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "50"
      }
    ],
    "correctOption": "B",
    "explanation": "Let the whole number be x.\nResult 1 = 100 + x\nResult 2 = 100 - x\nSum = (100 + x) + (100 - x) = 100 + 100 + (x - x) = 200.",
    "unit": "Quantitative Aptitude",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Mathematics"
  },
  {
    "id": 144,
    "originalNumber": 144,
    "question": "The sum of the alternating series S = 5 - 5 + 5 - 5 + 5 - 5 ... to an odd number of terms is:",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "-5"
      }
    ],
    "correctOption": "A",
    "explanation": "An odd number of terms has (2k + 1) terms. Grouping terms in pairs: (5 - 5) + (5 - 5) + ... + (5 - 5) + 5 = 0 + 0 + ... + 5 = 5. (An even number of terms would sum to 0).",
    "unit": "Quantitative Aptitude",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Mathematics"
  },
  {
    "id": 145,
    "originalNumber": 145,
    "question": "Which of the following arrangements correctly represents a descending order (largest to smallest) of decimal numbers?",
    "options": [
      {
        "id": "A",
        "text": "10.5, 1.50, 1.05, 1.055, 1.005, 0.155"
      },
      {
        "id": "B",
        "text": "10.5, 1.50, 1.055, 1.05, 1.005, 0.155"
      },
      {
        "id": "C",
        "text": "1.05, 1.005, 1.50, 1.055, 10.5, 0.155"
      },
      {
        "id": "D",
        "text": "10.5, 1.05, 1.055, 1.50, 1.005, 0.155"
      }
    ],
    "correctOption": "B",
    "explanation": "Comparing numbers:\n10.500 > 1.500 > 1.055 > 1.050 > 1.005 > 0.155.\nOption B accurately lists them in descending sequence.",
    "unit": "Quantitative Aptitude",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Mathematics"
  },
  {
    "id": 146,
    "originalNumber": 146,
    "question": "Complete the analogy based on calendar sequence: Monday : April :: Friday : ?",
    "options": [
      {
        "id": "A",
        "text": "July"
      },
      {
        "id": "B",
        "text": "Saturday"
      },
      {
        "id": "C",
        "text": "August"
      },
      {
        "id": "D",
        "text": "Tuesday"
      }
    ],
    "correctOption": "C",
    "explanation": "Monday is day 1 or day 2 of the week; April is month 4. Friday is 4 days after Monday (+4 days), and August is 4 months after April (Month 4 + 4 = Month 8 = August).",
    "unit": "Verbal Reasoning",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Reasoning"
  },
  {
    "id": 147,
    "originalNumber": 147,
    "question": "Choose the word which is least like the other words in the group:\nKidney, Heart, Lung, Ear",
    "options": [
      {
        "id": "A",
        "text": "Kidney"
      },
      {
        "id": "B",
        "text": "Heart"
      },
      {
        "id": "C",
        "text": "Lung"
      },
      {
        "id": "D",
        "text": "Ear"
      }
    ],
    "correctOption": "B",
    "explanation": "Kidneys, lungs, and ears exist as symmetrical bilateral pairs in the human body (2 kidneys, 2 lungs, 2 ears). The human heart is a single, singular organ.",
    "unit": "General Reasoning",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Reasoning"
  },
  {
    "id": 148,
    "originalNumber": 148,
    "question": "Find the missing number in the alternating sequence: 60, 30, 120, 15, 240, ?",
    "options": [
      {
        "id": "A",
        "text": "30"
      },
      {
        "id": "B",
        "text": "120"
      },
      {
        "id": "C",
        "text": "140"
      },
      {
        "id": "D",
        "text": "7.5 (or 7 1/2)"
      }
    ],
    "correctOption": "D",
    "explanation": "This consists of two interleaved series:\nOdd positions: 60 -> 120 (×2) -> 240 (×2)\nEven positions: 30 -> 15 (÷2) -> 15 ÷ 2 = 7.5 (or 7 1/2).",
    "unit": "Quantitative Aptitude",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Reasoning"
  },
  {
    "id": 149,
    "originalNumber": 149,
    "question": "In a certain code, if BAD is written as YZW and SAID is written as HZRW, then LIFE will be written as:",
    "options": [
      {
        "id": "A",
        "text": "ORUV"
      },
      {
        "id": "B",
        "text": "OSUV"
      },
      {
        "id": "C",
        "text": "OQVU"
      },
      {
        "id": "D",
        "text": "ORVW"
      }
    ],
    "correctOption": "A",
    "explanation": "The cipher replaces each letter with its reverse alphabet complement (A <-> Z, B <-> Y, C <-> X, etc. where pos(L) + pos(R) = 27):\nL (12) -> O (15) [12 + 15 = 27]\nI (9) -> R (18) [9 + 18 = 27]\nF (6) -> U (21) [6 + 21 = 27]\nE (5) -> V (22) [5 + 22 = 27]\nLIFE is encoded as ORUV.",
    "unit": "Verbal Reasoning",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Reasoning"
  },
  {
    "id": 150,
    "originalNumber": 150,
    "question": "Pointing towards Sita, Nikhil said: 'I am the only son of her mother's son'. How is Sita related to Nikhil?",
    "options": [
      {
        "id": "A",
        "text": "Aunt"
      },
      {
        "id": "B",
        "text": "Niece"
      },
      {
        "id": "C",
        "text": "Mother"
      },
      {
        "id": "D",
        "text": "Cousin"
      }
    ],
    "correctOption": "A",
    "explanation": "'Her mother's son' is Sita's brother. The 'only son of Sita's brother' means Nikhil is the nephew of Sita. Therefore, Sita is Nikhil's Aunt (Paternal or Maternal Aunt).",
    "unit": "Verbal Reasoning",
    "topicTitle": "Combinatorics, Discrete Probability, and Bayes' Theorem",
    "topicSlug": "combinatorics-probability-discrete-math",
    "examType": "STET",
    "category": "Reasoning"
  }
]
};
