# scripts/part3b_data.py
# Part-III: Computer Science (Questions 111 to 150)

part3b_questions = [
    {
        "id": 111,
        "originalNumber": 111,
        "question": "In virtual memory management, what is a 'page' in paging?",
        "options": [
            {"id": "A", "text": "A fixed-size contiguous block of virtual/logical memory"},
            {"id": "B", "text": "A fixed-size block of physical memory"},
            {"id": "C", "text": "A type of variable memory allocation"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "In paging, the process logical (virtual) address space is divided into fixed-size contiguous units called 'pages'. Physical memory is divided into fixed-size units of identical size called 'frames'.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-management-virtual-memory-os",
        "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
        "examType": "BPSC-TRE"
    },
    {
        "id": 112,
        "originalNumber": 112,
        "question": "In a paging system with a page size of 4 KB and a physical address space of 64 GB, how many bits are required strictly for the page offset (displacement)?",
        "options": [
            {"id": "A", "text": "10 bits"},
            {"id": "B", "text": "12 bits"},
            {"id": "C", "text": "14 bits"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Page offset bits (d) are determined solely by the page size: Page Size = 4 KB = 4 × 1024 bytes = 4096 bytes = 2^12 bytes. Therefore, d = log2(4096) = 12 bits.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-management-virtual-memory-os",
        "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
        "examType": "BPSC-TRE"
    },
    {
        "id": 113,
        "originalNumber": 113,
        "question": "In memory segmentation, what does the 'segment base' specify in the segment table?",
        "options": [
            {"id": "A", "text": "The starting physical address of the segment in main memory"},
            {"id": "B", "text": "The starting address of a segment in virtual memory"},
            {"id": "C", "text": "The ending address of a segment in physical memory"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "In segmentation hardware, each segment table entry holds a segment base (the starting physical memory address where the segment resides in RAM) and a segment limit (the length of the segment).",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-management-virtual-memory-os",
        "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
        "examType": "BPSC-TRE"
    },
    {
        "id": 114,
        "originalNumber": 114,
        "question": "What is the primary cause that triggers 'thrashing' in a virtual memory operating system?",
        "options": [
            {"id": "A", "text": "Excessive paging activity (swapping pages in and out continuously)"},
            {"id": "B", "text": "Insufficient disk space"},
            {"id": "C", "text": "Hardware failures"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Thrashing occurs when a computer spends more time servicing page faults and swapping pages between disk and RAM than executing actual application instructions, caused by an excessively high degree of multiprogramming and insufficient allocated frames.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-management-virtual-memory-os",
        "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
        "examType": "BPSC-TRE"
    },
    {
        "id": 115,
        "originalNumber": 115,
        "question": "Consider a system with a total physical memory of 8 GB and total virtual memory allocated of 16 GB. If active processes are currently consuming 10 GB of virtual memory and occupying 6 GB of physical RAM, how much virtual memory is currently swapped out to secondary backing storage?",
        "options": [
            {"id": "A", "text": "2 GB"},
            {"id": "B", "text": "4 GB"},
            {"id": "C", "text": "6 GB"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "The total active virtual memory used by processes is 10 GB. Of this, 6 GB is resident in physical RAM. The remaining portion resident on secondary backing store (swap space) is 10 GB - 6 GB = 4 GB.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-management-virtual-memory-os",
        "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
        "examType": "BPSC-TRE"
    },
    {
        "id": 116,
        "originalNumber": 116,
        "question": "How is a Translation Lookaside Buffer (TLB) in CPU memory management hardware typically organized for fast single-cycle parallel lookup?",
        "options": [
            {"id": "A", "text": "As a direct-mapped cache"},
            {"id": "B", "text": "As an associative (content-addressable) cache"},
            {"id": "C", "text": "As a set-associative cache"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "A Translation Lookaside Buffer (TLB) is constructed using associative content-addressable memory (CAM) where all tags are compared simultaneously. Modern microarchitectures implement TLBs as fully associative or set-associative caches. Since both B (associative cache) and C (set-associative cache) are valid TLB organizations, (D) More than one of the above is the official answer.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-management-virtual-memory-os",
        "topicTitle": "Memory Management, Paging, Segmentation, and Virtual Memory",
        "examType": "BPSC-TRE"
    },
    {
        "id": 117,
        "originalNumber": 117,
        "question": "Which of the following is a standard fundamental file management operation provided by operating system system calls?",
        "options": [
            {"id": "A", "text": "Create"},
            {"id": "B", "text": "Delete"},
            {"id": "C", "text": "Rename"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Operating systems support standard file operations including Create, Open, Read, Write, Delete, Rename, and Reposition (Seek). Because Create, Delete, and Rename are all common file operations, the answer is (D) More than one of the above.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-interleaving-secondary-storage-raid",
        "topicTitle": "Memory Interleaving, Secondary Storage, and RAID Architecture",
        "examType": "BPSC-TRE"
    },
    {
        "id": 118,
        "originalNumber": 118,
        "question": "Consider a disk queue with requests for I/O to blocks on cylinders: 98, 183, 37, 122, 14, 124, 65, 67. Under First-Come First-Served (FCFS) disk scheduling, what is the total number of track/cylinder head movements if the read/write head is initially stationed at cylinder 53?",
        "options": [
            {"id": "A", "text": "640"},
            {"id": "B", "text": "620"},
            {"id": "C", "text": "630"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "Calculating cumulative head movements in FCFS order:\n|53 - 98| = 45\n|98 - 183| = 85\n|183 - 37| = 146\n|37 - 122| = 85\n|122 - 14| = 108\n|14 - 124| = 110\n|124 - 65| = 59\n|65 - 67| = 2\nTotal movements = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 cylinders.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "memory-interleaving-secondary-storage-raid",
        "topicTitle": "Memory Interleaving, Secondary Storage, and RAID Architecture",
        "examType": "BPSC-TRE"
    },
    {
        "id": 119,
        "originalNumber": 119,
        "question": "A thread shares with peer threads belonging to the same parent process which of the following resource sections?",
        "options": [
            {"id": "A", "text": "Thread ID"},
            {"id": "B", "text": "Program counter and registers"},
            {"id": "C", "text": "Code section and data section"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Threads in the same process share code (text section), data section (global variables), and operating system resources (open files, signals). Each thread retains its own private Thread ID, Program Counter, register set, and stack.",
        "unit": "Unit 5: Operating System",
        "category": "Operating Systems",
        "topicSlug": "process-synchronization-ipc-os",
        "topicTitle": "Process Synchronization, Critical Section, Mutexes & Semaphores",
        "examType": "BPSC-TRE"
    },
    {
        "id": 120,
        "originalNumber": 120,
        "question": "Which of the following is NOT an established architectural model or type of Database Management System (DBMS)?",
        "options": [
            {"id": "A", "text": "Relational DBMS (RDBMS)"},
            {"id": "B", "text": "Object-Oriented DBMS (OODBMS)"},
            {"id": "C", "text": "Sequential DBMS"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Recognized data models for DBMS include Hierarchical, Network, Relational (RDBMS), Object-Oriented (OODBMS), and NoSQL/Document stores. 'Sequential DBMS' is not a recognized category of database management systems.",
        "unit": "Unit 6: Database Management System",
        "category": "Database Systems",
        "topicSlug": "relational-algebra-calculus-dbms",
        "topicTitle": "Relational Algebra, Tuple & Domain Calculus with DBMS Mapping",
        "examType": "BPSC-TRE"
    },
    {
        "id": 121,
        "originalNumber": 121,
        "question": "In a relational database table, what is the definition and primary role of a Primary Key?",
        "options": [
            {"id": "A", "text": "A minimal candidate key chosen to uniquely identify each record (tuple) in a table"},
            {"id": "B", "text": "A key used to establish relationships between tables"},
            {"id": "C", "text": "A key used exclusively to sort records in a table"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "A Primary Key is an attribute or combination of attributes that uniquely identifies each tuple in a relation, enforcing entity integrity (values must be unique and cannot contain NULL). (Foreign keys establish relationships).",
        "unit": "Unit 6: Database Management System",
        "category": "Database Systems",
        "topicSlug": "relational-algebra-calculus-dbms",
        "topicTitle": "Relational Algebra, Tuple & Domain Calculus with DBMS Mapping",
        "examType": "BPSC-TRE"
    },
    {
        "id": 122,
        "originalNumber": 122,
        "question": "Which database normal form ensures that a table is in 1NF and every non-prime attribute is fully functionally dependent on the entire primary key (no partial functional dependencies)?",
        "options": [
            {"id": "A", "text": "First Normal Form (1NF)"},
            {"id": "B", "text": "Second Normal Form (2NF)"},
            {"id": "C", "text": "Third Normal Form (3NF)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "A relation is in Second Normal Form (2NF) if and only if it is in 1NF and no non-prime attribute is dependent on any proper subset of any candidate key (eliminating partial functional dependency).",
        "unit": "Unit 6: Database Management System",
        "category": "Database Systems",
        "topicSlug": "normalization-dbms",
        "topicTitle": "Database Normalization: Functional Dependencies, 1NF to BCNF & Lossless Decomposition",
        "examType": "BPSC-TRE"
    },
    {
        "id": 123,
        "originalNumber": 123,
        "question": "Which standard SQL Data Manipulation Language (DML) statement is used to add new rows of records to an existing database table?",
        "options": [
            {"id": "A", "text": "ADD"},
            {"id": "B", "text": "CREATE"},
            {"id": "C", "text": "INSERT"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "The standard SQL syntax `INSERT INTO table_name (columns) VALUES (values);` inserts new record tuples into a relation.",
        "unit": "Unit 6: Database Management System",
        "category": "Database Systems",
        "topicSlug": "sql-queries-views-triggers-dbms",
        "topicTitle": "Advanced SQL Queries, Subqueries, Views, Triggers, and Constraints",
        "examType": "BPSC-TRE"
    },
    {
        "id": 124,
        "originalNumber": 124,
        "question": "Which of the following is a recognized disadvantage or technical challenge of implementing a Distributed Database Management System (DDBMS)?",
        "options": [
            {"id": "A", "text": "Improved data accessibility"},
            {"id": "B", "text": "Increased data security"},
            {"id": "C", "text": "Risk of data inconsistency across replicas and high network complexity"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Distributed databases face significant challenges in distributed concurrency control, two-phase commits, replication synchronization lag, and maintaining global consistency across networked nodes.",
        "unit": "Unit 6: Database Management System",
        "category": "Database Systems",
        "topicSlug": "data-warehousing-data-mining-dbms",
        "topicTitle": "Data Warehousing Architecture, OLAP, Data Mining & Association Rules",
        "examType": "BPSC-TRE"
    },
    {
        "id": 125,
        "originalNumber": 125,
        "question": "What is the primary function of a Router in computer networking?",
        "options": [
            {"id": "A", "text": "To connect devices within the same network"},
            {"id": "B", "text": "To connect multiple disparate networks together and route packets based on IP addresses"},
            {"id": "C", "text": "To filter incoming traffic based on IP addresses exclusively"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "A router operates at the Network Layer (Layer 3) to interconnect multiple distinct logical networks (LANs/WANs) and forward IP packets across intermediate networks toward their destination using routing tables.",
        "unit": "Unit 7: Computer Networks",
        "category": "Computer Networks",
        "topicSlug": "routing-algorithms-congestion-cn",
        "topicTitle": "Routing Algorithms (Distance Vector, Link State), Congestion Control & QoS",
        "examType": "BPSC-TRE"
    },
    {
        "id": 126,
        "originalNumber": 126,
        "question": "In the standard OSI 7-layer reference model, which layer is responsible for logical addressing, path determination, routing, and forwarding of data packets?",
        "options": [
            {"id": "A", "text": "Data Link Layer"},
            {"id": "B", "text": "Transport Layer"},
            {"id": "C", "text": "Physical Layer"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "Routing and forwarding data packets is the core responsibility of the Network Layer (Layer 3). Because the Network Layer is not listed among options A (Data Link), B (Transport), or C (Physical), the correct answer is (E) None of the above.",
        "unit": "Unit 7: Computer Networks",
        "category": "Computer Networks",
        "topicSlug": "routing-algorithms-congestion-cn",
        "topicTitle": "Routing Algorithms (Distance Vector, Link State), Congestion Control & QoS",
        "examType": "BPSC-TRE"
    },
    {
        "id": 127,
        "originalNumber": 127,
        "question": "Which networking hardware device operates at Layer 2 to connect multiple host devices within the same Local Area Network (LAN) using MAC addresses?",
        "options": [
            {"id": "A", "text": "Router"},
            {"id": "B", "text": "Switch"},
            {"id": "C", "text": "Bridge"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Both multiport network Switches and Bridges operate at the Data Link Layer (Layer 2) to connect stations within the same local broadcast domain and forward frames based on hardware MAC addresses. Therefore, (D) More than one of the above is the official answer.",
        "unit": "Unit 7: Computer Networks",
        "category": "Computer Networks",
        "topicSlug": "data-link-layer-framing-error-control",
        "topicTitle": "Data Link Layer: Framing, Flow Control, Error Control, and MAC Protocols",
        "examType": "BPSC-TRE"
    },
    {
        "id": 128,
        "originalNumber": 128,
        "question": "Which application-layer protocol is used by mail user agents and transfer servers to push/send electronic mail across the Internet?",
        "options": [
            {"id": "A", "text": "FTP (File Transfer Protocol)"},
            {"id": "B", "text": "SMTP (Simple Mail Transfer Protocol)"},
            {"id": "C", "text": "HTTP (Hypertext Transfer Protocol)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Simple Mail Transfer Protocol (SMTP, running on TCP port 25/587) is the standard internet protocol for sending and relaying outgoing emails between mail servers. (POP3/IMAP are retrieval protocols).",
        "unit": "Unit 7: Computer Networks",
        "category": "Computer Networks",
        "topicSlug": "application-layer-dns-http-email-protocols",
        "topicTitle": "Application Layer Protocols: DNS, HTTP/HTTPS, Email (SMTP, POP3, IMAP), and FTP",
        "examType": "BPSC-TRE"
    },
    {
        "id": 129,
        "originalNumber": 129,
        "question": "What is the primary technical purpose of a Subnet Mask in IPv4 TCP/IP networking?",
        "options": [
            {"id": "A", "text": "To identify the network portion of an IP address"},
            {"id": "B", "text": "To identify the host portion of an IP address"},
            {"id": "C", "text": "To convert IP addresses into domain names"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "A 32-bit subnet mask performs bitwise AND masking with an IP address to distinguish the Network ID portion (consecutive 1s) from the Host ID portion (consecutive 0s). Because both A and B are core purposes of the subnet mask, (D) More than one of the above is correct.",
        "unit": "Unit 7: Computer Networks",
        "category": "Computer Networks",
        "topicSlug": "tcp-ip-subnetting-cn",
        "topicTitle": "TCP/IP Protocol Suite, IPv4/IPv6 Addressing, Subnetting & CIDR",
        "examType": "BPSC-TRE"
    },
    {
        "id": 130,
        "originalNumber": 130,
        "question": "What is the maximum theoretical physical layer (PHY) data rate introduced in the Bluetooth version 5.0 core specification?",
        "options": [
            {"id": "A", "text": "1 Mbps"},
            {"id": "B", "text": "2 Mbps"},
            {"id": "C", "text": "5 Mbps"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Bluetooth 5.0 introduced the 2M PHY mode, doubling the maximum raw data transmission speed from 1 Mbps (in Bluetooth 4.2) to 2 Mbps for low energy devices.",
        "unit": "Unit 12: Internet of Things",
        "category": "IoT & Embedded",
        "topicSlug": "iot-protocols-coap-mqtt-sensors",
        "topicTitle": "IoT Protocols, CoAP, MQTT, Sensors & Actuators",
        "examType": "BPSC-TRE"
    },
    {
        "id": 131,
        "originalNumber": 131,
        "question": "Which of the following is an established Software Development Life Cycle (SDLC) process model?",
        "options": [
            {"id": "A", "text": "Waterfall model"},
            {"id": "B", "text": "Agile model"},
            {"id": "C", "text": "Spiral model"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Waterfall (linear sequential), Agile (iterative incremental), and Boehm's Spiral model (risk-driven) are all classic, widely recognized SDLC methodologies. Thus, (D) More than one of the above is correct.",
        "unit": "Unit 8: Software Engineering",
        "category": "Software Engineering",
        "topicSlug": "software-engineering-models-metrics",
        "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
        "examType": "BPSC-TRE"
    },
    {
        "id": 132,
        "originalNumber": 132,
        "question": "Which of the following is NOT a recognized category of software requirements engineering in SRS documentation?",
        "options": [
            {"id": "A", "text": "Functional requirements"},
            {"id": "B", "text": "System requirements"},
            {"id": "C", "text": "Physical requirements"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Software Requirements Specifications (SRS) categorize requirements into Functional, Non-functional, System, and User requirements. 'Physical requirements' is not a standard software requirement classification.",
        "unit": "Unit 8: Software Engineering",
        "category": "Software Engineering",
        "topicSlug": "software-engineering-models-metrics",
        "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
        "examType": "BPSC-TRE"
    },
    {
        "id": 133,
        "originalNumber": 133,
        "question": "What is the classic distinction between Verification and Validation (V&V) in software testing?",
        "options": [
            {"id": "A", "text": "Verification ensures software is bug-free, while validation ensures it meets requirements"},
            {"id": "B", "text": "Verification is done before coding, while validation is done after coding"},
            {"id": "C", "text": "Verification checks if the software is built right (conforming to specs), while validation checks if the right software is built (meeting user needs)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "In software engineering, Verification answers: 'Are we building the product right?' (static checking of designs, code reviews, and specifications). Validation answers: 'Are we building the right product?' (dynamic testing against user expectations and business goals).",
        "unit": "Unit 8: Software Engineering",
        "category": "Software Engineering",
        "topicSlug": "software-testing-maintenance-se",
        "topicTitle": "Software Testing Strategies, Maintenance Models, Re-engineering & Reverse Engineering",
        "examType": "BPSC-TRE"
    },
    {
        "id": 134,
        "originalNumber": 134,
        "question": "What is the primary purpose and benefit of developing a software prototype during the early phases of SDLC?",
        "options": [
            {"id": "A", "text": "To serve as the final version of the software"},
            {"id": "B", "text": "To replace detailed documentation completely"},
            {"id": "C", "text": "To speed up the software development process blindly"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "The primary purpose of prototyping is to clarify ambiguous user requirements, validate design feasibility, and gather early customer feedback to avoid costly late revisions. None of A, B, or C describes this purpose accurately, so (E) None of the above is the official correct answer.",
        "unit": "Unit 8: Software Engineering",
        "category": "Software Engineering",
        "topicSlug": "software-engineering-models-metrics",
        "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
        "examType": "BPSC-TRE"
    },
    {
        "id": 135,
        "originalNumber": 135,
        "question": "What is the primary overarching goal of the discipline of Software Engineering?",
        "options": [
            {"id": "A", "text": "To write code efficiently"},
            {"id": "B", "text": "To develop reliable, high-quality software that meets user requirements within budget and schedule constraints"},
            {"id": "C", "text": "To develop software with the latest technologies"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Software engineering is the application of systematic, disciplined, and quantifiable engineering approaches to the development, operation, and maintenance of reliable software on time and within budget.",
        "unit": "Unit 8: Software Engineering",
        "category": "Software Engineering",
        "topicSlug": "software-engineering-models-metrics",
        "topicTitle": "Software Engineering SDLC Models, COCOMO Estimation, Function Points & Cyclomatic Complexity",
        "examType": "BPSC-TRE"
    },
    {
        "id": 136,
        "originalNumber": 136,
        "question": "Which of the following is considered a core pillar of Object-Oriented Programming (OOP)?",
        "options": [
            {"id": "A", "text": "Inheritance"},
            {"id": "B", "text": "Encapsulation"},
            {"id": "C", "text": "Abstraction"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "The four foundational pillars of Object-Oriented Programming are Encapsulation, Abstraction, Inheritance, and Polymorphism. Since all three choices (A, B, C) are fundamental pillars, the answer is (D) More than one of the above.",
        "unit": "Unit 9: Object-Oriented Programming",
        "category": "OOP",
        "topicSlug": "oop-concepts-cpp-java",
        "topicTitle": "OOP Concepts in C++ and Java: Classes, Objects, Inheritance, Polymorphism & Virtual Functions",
        "examType": "BPSC-TRE"
    },
    {
        "id": 137,
        "originalNumber": 137,
        "question": "Which keyword is used in the Java programming language to declare class inheritance (subclassing)?",
        "options": [
            {"id": "A", "text": "extends"},
            {"id": "B", "text": "inherits"},
            {"id": "C", "text": "implements"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "In Java, the `extends` keyword is used to inherit from a superclass (e.g. `class Dog extends Animal`). The `implements` keyword is used for interfaces.",
        "unit": "Unit 9: Object-Oriented Programming",
        "category": "OOP",
        "topicSlug": "java-multithreading-collections-framework",
        "topicTitle": "Java Multithreading, Synchronization, and Collections Framework",
        "examType": "BPSC-TRE"
    },
    {
        "id": 138,
        "originalNumber": 138,
        "question": "In Java, what is the effective access level when no access modifier keyword is specified, allowing access only within classes of the same package?",
        "options": [
            {"id": "A", "text": "private"},
            {"id": "B", "text": "public"},
            {"id": "C", "text": "package-private (default access)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "When no modifier is declared, Java applies default (package-private) accessibility, which restricts visibility to classes residing in the identical package.",
        "unit": "Unit 9: Object-Oriented Programming",
        "category": "OOP",
        "topicSlug": "java-multithreading-collections-framework",
        "topicTitle": "Java Multithreading, Synchronization, and Collections Framework",
        "examType": "BPSC-TRE"
    },
    {
        "id": 139,
        "originalNumber": 139,
        "question": "The concept of Inheritance in Object-Oriented Programming primarily allows a derived class to:",
        "options": [
            {"id": "A", "text": "Inherit state (fields) and behavior (methods) from another base class to promote code reuse"},
            {"id": "B", "text": "Create instances of another class"},
            {"id": "C", "text": "Override methods of another class"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Inheritance establishes an 'is-a' relationship, enabling the subclass to inherit variables and methods from the superclass (A) as well as override inherited methods to provide specialized behavior (C). Thus, (D) More than one of the above is correct.",
        "unit": "Unit 9: Object-Oriented Programming",
        "category": "OOP",
        "topicSlug": "oop-concepts-cpp-java",
        "topicTitle": "OOP Concepts in C++ and Java: Classes, Objects, Inheritance, Polymorphism & Virtual Functions",
        "examType": "BPSC-TRE"
    },
    {
        "id": 140,
        "originalNumber": 140,
        "question": "What is the primary role and purpose of HTML (HyperText Markup Language) in a web application?",
        "options": [
            {"id": "A", "text": "To define the structure and semantic layout of web page content"},
            {"id": "B", "text": "To style web pages and colors"},
            {"id": "C", "text": "To add interactive client-side logic and event handling"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "HTML defines the structural and semantic foundation of web documents. Styling is handled by CSS, and interactivity is driven by JavaScript.",
        "unit": "Unit 10: Web-Based Application Development",
        "category": "Web Technologies",
        "topicSlug": "web-technologies-xml-security",
        "topicTitle": "Web Technologies: HTML5, CSS3, JavaScript, XML, and Web Security",
        "examType": "BPSC-TRE"
    },
    {
        "id": 141,
        "originalNumber": 141,
        "question": "Which of the following is commonly recognized as a server-side scripting or execution environment used in web backend systems?",
        "options": [
            {"id": "A", "text": "HTML"},
            {"id": "B", "text": "CSS"},
            {"id": "C", "text": "C++ (via CGI / FastCGI)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "HTML and CSS are purely client-side markup and stylesheet standards. C++ is a compiled systems language (not a traditional scripting language like PHP, Python, or Ruby). Hence, (E) None of the above is the official key.",
        "unit": "Unit 10: Web-Based Application Development",
        "category": "Web Technologies",
        "topicSlug": "php-dom-node-backend-architecture",
        "topicTitle": "PHP, DOM, Node.js, and Backend Web Architecture",
        "examType": "BPSC-TRE"
    },
    {
        "id": 142,
        "originalNumber": 142,
        "question": "What is the computational decidability / complexity status of Turing's famous Halting Problem?",
        "options": [
            {"id": "A", "text": "O(1)"},
            {"id": "B", "text": "O(n)"},
            {"id": "C", "text": "Not computable (Undecidable)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Alan Turing proved in 1936 that the Halting Problem—determining whether an arbitrary program will finish running or run forever—is undecidable and cannot be computed by any algorithm or Turing machine.",
        "unit": "Unit 11: Theory of Computation",
        "category": "Theory of Computation",
        "topicSlug": "turing-machines-undecidability-toc",
        "topicTitle": "Turing Machines, Decidability, Undecidability & Halting Problem",
        "examType": "BPSC-TRE"
    },
    {
        "id": 143,
        "originalNumber": 143,
        "question": "Which of the following is NOT a separate architectural component in the formal mathematical definition of a standard deterministic Turing machine?",
        "options": [
            {"id": "A", "text": "Input tape"},
            {"id": "B", "text": "Output tape"},
            {"id": "C", "text": "Control unit (finite state control)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "A standard Turing machine has a single, infinite read/write tape that serves for both input and output storage, along with a tape head and a finite state control unit. It does not have a separate, dedicated 'output tape'.",
        "unit": "Unit 11: Theory of Computation",
        "category": "Theory of Computation",
        "topicSlug": "turing-machines-undecidability-toc",
        "topicTitle": "Turing Machines, Decidability, Undecidability & Halting Problem",
        "examType": "BPSC-TRE"
    },
    {
        "id": 144,
        "originalNumber": 144,
        "question": "Which wireless communication technology is commonly utilized in Internet of Things (IoT) sensors and edge devices for short-range connectivity?",
        "options": [
            {"id": "A", "text": "Bluetooth (BLE)"},
            {"id": "B", "text": "Wi-Fi"},
            {"id": "C", "text": "4G LTE"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Both Bluetooth Low Energy (BLE) and Wi-Fi (along with Zigbee) are ubiquitous short-range wireless technologies utilized extensively in smart home and IoT architectures. Therefore, (D) More than one of the above is correct.",
        "unit": "Unit 12: Internet of Things",
        "category": "IoT & Embedded",
        "topicSlug": "iot-protocols-coap-mqtt-sensors",
        "topicTitle": "IoT Protocols, CoAP, MQTT, Sensors & Actuators",
        "examType": "BPSC-TRE"
    },
    {
        "id": 145,
        "originalNumber": 145,
        "question": "Which of the following lightweight, publish-subscribe protocols is specifically designed for constrained IoT device-to-broker telemetry messaging?",
        "options": [
            {"id": "A", "text": "HTTP"},
            {"id": "B", "text": "FTP"},
            {"id": "C", "text": "MQTT (Message Queuing Telemetry Transport)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "MQTT (Message Queuing Telemetry Transport) is an extremely lightweight publish/subscribe messaging transport protocol optimized for resource-constrained devices, high latency, and low-bandwidth IoT networks.",
        "unit": "Unit 12: Internet of Things",
        "category": "IoT & Embedded",
        "topicSlug": "iot-protocols-coap-mqtt-sensors",
        "topicTitle": "IoT Protocols, CoAP, MQTT, Sensors & Actuators",
        "examType": "BPSC-TRE"
    },
    {
        "id": 146,
        "originalNumber": 146,
        "question": "Which of the following fields is recognized as a major domain or subfield of Artificial Intelligence (AI)?",
        "options": [
            {"id": "A", "text": "Machine Learning (ML)"},
            {"id": "B", "text": "Robotics"},
            {"id": "C", "text": "Natural Language Processing (NLP)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "D",
        "explanation": "Artificial Intelligence encompasses Machine Learning, Computer Vision, Robotics, and Natural Language Processing. Since A, B, and C are all prominent subfields of AI, (D) More than one of the above is correct.",
        "unit": "Unit 13: Artificial Intelligence",
        "category": "Artificial Intelligence",
        "topicSlug": "artificial-intelligence-search-heuristics",
        "topicTitle": "AI Search Strategies, Heuristics (A*, AO*), Game Playing & Knowledge Representation",
        "examType": "BPSC-TRE"
    },
    {
        "id": 147,
        "originalNumber": 147,
        "question": "Which of the following algorithms is an example of a Supervised Learning algorithm?",
        "options": [
            {"id": "A", "text": "Decision Tree"},
            {"id": "B", "text": "K-means Clustering"},
            {"id": "C", "text": "Reinforcement Learning Q-learning"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "A",
        "explanation": "A Decision Tree trains on labeled dataset tuples to perform classification or regression under supervised learning. (K-means is unsupervised clustering; Q-learning is reinforcement learning).",
        "unit": "Unit 13: Artificial Intelligence",
        "category": "Artificial Intelligence",
        "topicSlug": "artificial-intelligence-search-heuristics",
        "topicTitle": "AI Search Strategies, Heuristics (A*, AO*), Game Playing & Knowledge Representation",
        "examType": "BPSC-TRE"
    },
    {
        "id": 148,
        "originalNumber": 148,
        "question": "Which of the following is NOT an established commercial business transaction model in E-Commerce?",
        "options": [
            {"id": "A", "text": "Business-to-Consumer (B2C)"},
            {"id": "B", "text": "Consumer-to-Business (C2B)"},
            {"id": "C", "text": "Consumer-to-Consumer (C2C)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "E",
        "explanation": "B2C (Amazon), C2B (freelance bidding/influencer sponsorships), and C2C (eBay/OLX) are all established, standard e-commerce operational transaction models. Since all are valid models, none is 'NOT a common model', making (E) None of the above the correct answer.",
        "unit": "Unit 14: Fundamentals of E-Commerce",
        "category": "E-Commerce",
        "topicSlug": "ecommerce-frameworks",
        "topicTitle": "E-Commerce Business Models, Frameworks & Payment Systems",
        "examType": "BPSC-TRE"
    },
    {
        "id": 149,
        "originalNumber": 149,
        "question": "Which of the following prominent global websites is a prime example of a Business-to-Consumer (B2C) E-Commerce marketplace?",
        "options": [
            {"id": "A", "text": "Alibaba (primarily B2B)"},
            {"id": "B", "text": "Amazon"},
            {"id": "C", "text": "Google (Search engine/ad platform)"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "B",
        "explanation": "Amazon is the archetype of a Business-to-Consumer (B2C) e-commerce retailer selling consumer goods directly to end users. (Alibaba is primarily B2B wholesale).",
        "unit": "Unit 14: Fundamentals of E-Commerce",
        "category": "E-Commerce",
        "topicSlug": "ecommerce-frameworks",
        "topicTitle": "E-Commerce Business Models, Frameworks & Payment Systems",
        "examType": "BPSC-TRE"
    },
    {
        "id": 150,
        "originalNumber": 150,
        "question": "Which of the following software applications was historically developed and used as a comprehensive multimedia authoring and animation tool?",
        "options": [
            {"id": "A", "text": "Microsoft Word"},
            {"id": "B", "text": "Adobe Photoshop"},
            {"id": "C", "text": "Adobe Flash"},
            {"id": "D", "text": "More than one of the above"},
            {"id": "E", "text": "None of the above"}
        ],
        "correctOption": "C",
        "explanation": "Adobe Flash (originally Macromedia Flash) was the industry-standard multimedia authoring environment used to create rich interactive vector graphics, browser animations, audio/video synchronization, and web games. (Photoshop is an image editor, Word is a word processor).",
        "unit": "Unit 15: Computer Graphics & Multimedia",
        "category": "Multimedia",
        "topicSlug": "multimedia-formats",
        "topicTitle": "Multimedia Formats, Audio/Video Compression & Streaming Protocols",
        "examType": "BPSC-TRE"
    }
]
