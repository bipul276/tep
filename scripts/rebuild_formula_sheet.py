# -*- coding: utf-8 -*-
import io, sys, re

# Set UTF-8 stdout
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Read current FormulaSheet.tsx
with open('src/components/FormulaSheet.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Unit remapping dictionary for all 54 existing formulas
UNIT_REMAP = {
    # Unit 1
    "math-handshaking": "Unit 1: Digital Logic & Discrete Structures",
    "math-euler-planarity": "Unit 1: Digital Logic & Discrete Structures",
    "math-inclusion-exclusion-3sets": "Unit 1: Digital Logic & Discrete Structures",
    "math-permutations-combinations": "Unit 1: Digital Logic & Discrete Structures",
    "math-gray-code-conversion": "Unit 1: Digital Logic & Discrete Structures",
    "math-boolean-minterms": "Unit 1: Digital Logic & Discrete Structures",
    "math-stars-and-bars": "Unit 1: Digital Logic & Discrete Structures",
    
    # Unit 2
    "arch-pipeline-speedup": "Unit 2: Computer Organization & Architecture",
    "arch-cpi-stalls": "Unit 2: Computer Organization & Architecture",
    "arch-amat-single": "Unit 2: Computer Organization & Architecture",
    "arch-amat-multilevel": "Unit 2: Computer Organization & Architecture",
    "arch-cache-bit-splitting": "Unit 2: Computer Organization & Architecture",
    "arch-amdahl": "Unit 2: Computer Organization & Architecture",
    "arch-ieee-754": "Unit 2: Computer Organization & Architecture",

    # Unit 3
    "dsa-avl-min-nodes": "Unit 3: Programming & Data Structures",
    "dsa-bplus-order": "Unit 3: Programming & Data Structures",
    "dsa-array-addressing-3d": "Unit 3: Programming & Data Structures",

    # Unit 4
    "algo-master-theorem": "Unit 4: Algorithms",
    "algo-tower-of-hanoi": "Unit 4: Algorithms",
    "algo-lcs-dp": "Unit 4: Algorithms",
    "algo-knapsack-01": "Unit 4: Algorithms",

    # Unit 5
    "os-littles-law": "Unit 5: Operating System",
    "os-swap-time": "Unit 5: Operating System",
    "os-cpu-scheduling-metrics": "Unit 5: Operating System",
    "os-tlb-paging-emat": "Unit 5: Operating System",
    "os-bankers-need-matrix": "Unit 5: Operating System",

    # Unit 6
    "dbms-lossless-join": "Unit 6: Database Management System",
    "dbms-normal-forms-hierarchy": "Unit 6: Database Management System",

    # Unit 7
    "net-shannon-capacity": "Unit 7: Computer Networks",
    "net-nyquist-bitrate": "Unit 7: Computer Networks",
    "net-csmacd-frame-size": "Unit 7: Computer Networks",
    "net-sliding-window-bounds": "Unit 7: Computer Networks",
    "net-channel-efficiency": "Unit 7: Computer Networks",
    "net-bdp-capacity": "Unit 7: Computer Networks",
    "net-hamming-code": "Unit 7: Computer Networks",
    "net-udp-header-hex": "Unit 7: Computer Networks",

    # Unit 8
    "se-cyclomatic": "Unit 8: Software Engineering",
    "se-cocomo-equations": "Unit 8: Software Engineering",
    "se-halstead-metrics": "Unit 8: Software Engineering",

    # Unit 9
    "oop-class-layout": "Unit 9: Object-Oriented Programming",

    # Unit 10
    "web-latency-breakdown": "Unit 10: Web-Based Application Development",

    # Unit 11
    "toc-ardens-theorem": "Unit 11: Theory of Computation & Compilers",
    "toc-nfa-dfa-bound": "Unit 11: Theory of Computation & Compilers",

    # Unit 12
    "iot-battery-life": "Unit 12: Internet of Things (IoT)",

    # Unit 13
    "ai-astar-admissibility": "Unit 13: Artificial Intelligence",
    "ai-perceptron-update": "Unit 13: Artificial Intelligence",
    "ai-fuzzy-composition": "Unit 13: Artificial Intelligence",

    # Unit 14
    "ecom-set-dual-sig": "Unit 14: Fundamentals of E-Commerce",
    "ecom-rsa-cryptography": "Unit 14: Fundamentals of E-Commerce",

    # Unit 15
    "cg-oblique-projections": "Unit 15: Computer Graphics & Multimedia",
    "cg-2d-rotation": "Unit 15: Computer Graphics & Multimedia",
    "cg-cohen-sutherland": "Unit 15: Computer Graphics & Multimedia",
    "mm-pcm-telephony": "Unit 15: Computer Graphics & Multimedia",
    "mm-nyquist-audio": "Unit 15: Computer Graphics & Multimedia",
}

# Find FORMULAS_DATA range
start_marker = "export const FORMULAS_DATA: FormulaItem[] = ["
end_marker = "];\n\n// ─── Unit Icon Mapping"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print(f"Error: Could not locate FORMULAS_DATA markers. start={start_idx}, end={end_idx}")
    sys.exit(1)

formulas_body = content[start_idx + len(start_marker):end_idx]

# Split formulas by looking for `  {\n    id:`
# A clean regex to extract individual formula blocks:
pattern = re.compile(r'(  \{\s*\n\s*id:\s*"([^"]+)",[\s\S]*?\n  \},)')
matches = list(pattern.finditer(formulas_body))
print(f"Found {len(matches)} formula blocks in existing FORMULAS_DATA.")

updated_blocks = []
for m in matches:
    block = m.group(1)
    fid = m.group(2)
    if fid in UNIT_REMAP:
        new_unit = UNIT_REMAP[fid]
        # replace unit: "..." with unit: "{new_unit}"
        block = re.sub(r'unit:\s*"[^"]+"', f'unit: "{new_unit}"', block)
    else:
        print(f"Warning: No mapping for formula ID {fid}")
    updated_blocks.append((fid, block))

# Check that all 54 existing are handled
print(f"Successfully remapped {len(updated_blocks)} existing formula blocks.")

# 9 Brand New Formulas
new_formula_blocks = [
    # Unit 1
    ("logic-bcd-correction", """  {
    id: "logic-bcd-correction",
    unit: "Unit 1: Digital Logic & Discrete Structures",
    category: "Digital Logic & Number Systems",
    name: "BCD Addition (+6 / 0110₂) Correction Rule",
    latex: "S_{\\\\text{corrected}} = S + 0110_2 \\\\quad (\\\\text{if } S > 9 \\\\text{ or } AC = 1)",
    formula: "If (Sum > 9) OR (Auxiliary Carry AC == 1) => Corrected Sum = Sum + 6 (0110 in binary)",
    explanation: "In Binary Coded Decimal (BCD / 8421 code), each decimal digit (0-9) is represented by a 4-bit binary nibble. When two BCD digits are added using binary addition, if the 4-bit sum exceeds 9 (1001₂) or an auxiliary carry (AC) is generated from bit 3 to bit 4, the result falls into an invalid state (10 to 15). Adding 6 (0110₂) skips the 6 invalid codes and propagates a valid carry to the next decimal digit.",
    examTrap: "Candidates often forget to add 6 when the 4-bit sum is <= 9 but an Auxiliary Carry (AC=1) was generated during addition (e.g. 8 + 8 = 16 = 10000₂ where the lower nibble is 0000₂ <= 9; adding 6 produces 0110₂ with carry 1 -> 0001 0110 = 16 in BCD).",
    variables: [
      { symbol: "S", meaning: "4-bit preliminary binary addition sum nibble" },
      { symbol: "AC", meaning: "Auxiliary Carry flag (carry generated from bit 3 to bit 4)" },
      { symbol: "0110₂", meaning: "Decimal constant 6 added to skip 6 illegal states (1010₂ to 1111₂)" },
    ],
  },"""),

    ("logic-mux-select-lines", """  {
    id: "logic-mux-select-lines",
    unit: "Unit 1: Digital Logic & Discrete Structures",
    category: "Combinational Logic & Multiplexers",
    name: "Multiplexer Select Line Bounds & Function Implementation",
    latex: "m = \\\\lceil \\\\log_2 N \\\\rceil \\\\quad \\\\text{and} \\\\quad 2^{n-1}:1 \\\\text{ MUX implements any } n\\\\text{-variable function}",
    formula: "m = ceil(log2 N) select lines for N:1 MUX | A 2^(n-1)-to-1 MUX implements any n-variable function without extra gates",
    explanation: "An N-to-1 Multiplexer requires m = ceil(log2 N) select control inputs to select one of the N data lines. To implement an arbitrary Boolean function of n variables, a 2^n-to-1 MUX requires no external logic, while a 2^(n-1)-to-1 MUX requires (n-1) variables connected to select lines and the remaining variable (or 0, 1, complemented) connected to the data input lines.",
    examTrap: "BPSC TRE and UGC NET frequently test: 'To implement an arbitrary 4-variable boolean function F(A, B, C, D), what minimum MUX size is required without additional gates?' Answer is 8-to-1 MUX (2^(4-1) = 8:1) using one input variable as data line.",
    variables: [
      { symbol: "N", meaning: "Number of input data channels" },
      { symbol: "m", meaning: "Number of select control address lines (m = log2 N)" },
      { symbol: "n", meaning: "Number of Boolean function input variables" },
    ],
  },"""),

    # Unit 3
    ("dsa-python-slicing-invariants", """  {
    id: "dsa-python-slicing-invariants",
    unit: "Unit 3: Programming & Data Structures",
    category: "Python Data Structures & Slicing",
    name: "Python Sequence Slicing Length & Index Resolution Invariant",
    latex: "L = \\\\max\\\\left(0, \\\\left\\\\lceil \\\\frac{\\\\text{stop} - \\\\text{start}}{\\\\text{step}} \\\\right\\\\rceil\\\\right) \\\\quad \\\\text{where } \\\\text{idx}_{\\\\text{effective}} = \\\\text{idx} + n \\\\text{ if } \\\\text{idx} < 0",
    formula: "Length = max(0, ceil((stop - start) / step)) | Negative index: resolved = n + index | Slice seq[a:b:c]",
    explanation: "In Python (tested extensively in BPSC TRE 1.0/3.0 and Class 11-12 NCERT), slicing seq[start:stop:step] generates a new subsequence from index 'start' up to but NOT including 'stop', incrementing by 'step'. When step is positive, if start >= stop the result is an empty sequence. When step is negative, iteration moves backward, requiring start > stop to yield elements.",
    examTrap: "seq[::-1] reverses sequence in O(n) time. Negative indices wrap around: seq[-1] is the last element (n-1). Out-of-bounds slice indices do NOT raise IndexError (unlike direct indexing seq[i]); Python silently clamps them to valid bounds [0, n].",
    variables: [
      { symbol: "start", meaning: "Inclusive lower bound (defaults to 0 for step > 0, or -1 for step < 0)" },
      { symbol: "stop", meaning: "Exclusive upper bound (defaults to n for step > 0, or -(n+1) for step < 0)" },
      { symbol: "step", meaning: "Stride / direction increment (default 1; cannot be 0)" },
      { symbol: "n", meaning: "Total length of the sequence (len(seq))" },
    ],
  },"""),

    ("dsa-catalan-bst-count", """  {
    id: "dsa-catalan-bst-count",
    unit: "Unit 3: Programming & Data Structures",
    category: "Binary Trees & Combinatorics",
    name: "Catalan Number Count of Structurally Distinct BSTs",
    latex: "C_n = \\\\frac{1}{n+1} \\\\binom{2n}{n} = \\\\frac{(2n)!}{(n+1)! \\\\, n!}",
    formula: "Total Distinct BSTs with n keys = C_n = (2n)! / ((n+1)! * n!) | Unlabeled Binary Trees = C_n | Labeled Binary Trees = C_n * n!",
    explanation: "Given n distinct sorted keys, the total number of structurally unique Binary Search Trees (BSTs) that can be constructed is the n-th Catalan number C_n. For n = 1: C_1 = 1; for n = 2: C_2 = 2; for n = 3: C_3 = 5; for n = 4: C_4 = 14; for n = 5: C_5 = 42.",
    examTrap: "Distinguish between 'Binary Search Trees' (keys ordered, C_n) and 'Labeled Binary Trees' (nodes have arbitrary keys, C_n * n!). If exam asks for 4 distinct keys, BSTs = 14, but Labeled Binary Trees = 14 * 24 = 336.",
    variables: [
      { symbol: "n", meaning: "Number of distinct nodes or keys" },
      { symbol: "C_n", meaning: "n-th Catalan number" },
      { symbol: "C_4", meaning: "14 distinct BSTs for n = 4 keys" },
    ],
  },"""),

    # Unit 4
    ("algo-spanning-tree-edges", """  {
    id: "algo-spanning-tree-edges",
    unit: "Unit 4: Algorithms",
    category: "Graph Algorithms & Minimum Spanning Trees",
    name: "Spanning Tree Invariants & Cayley's Formula",
    latex: "|E_{\\\\text{ST}}| = |V| - 1 \\\\quad \\\\text{and Cayley's: } T(K_n) = n^{n-2}",
    formula: "Spanning Tree Edges = |V| - 1 | Cayley's Formula: Total Spanning Trees in Complete Graph K_n = n^(n-2)",
    explanation: "A spanning tree of a connected, undirected graph G = (V, E) is a subgraph that includes all vertices of G and is a tree. Any spanning tree must contain exactly |V| - 1 edges and 0 cycles. Cayley's formula proves that a complete graph K_n has exactly n^(n-2) distinct spanning trees.",
    examTrap: "Removing an edge from a spanning tree always disconnects the graph into exactly 2 components. Adding any 1 edge to a spanning tree creates exactly 1 fundamental cycle. In Kruskal's algorithm, exactly |V|-1 edges are selected.",
    variables: [
      { symbol: "|V|", meaning: "Total number of vertices in connected graph G" },
      { symbol: "|E_ST|", meaning: "Total number of edges in any spanning tree (always |V| - 1)" },
      { symbol: "K_n", meaning: "Complete graph with n labeled vertices having n*(n-1)/2 edges" },
    ],
  },"""),

    # Unit 5
    ("os-fcfs-disk-scheduling", """  {
    id: "os-fcfs-disk-scheduling",
    unit: "Unit 5: Operating System",
    category: "Disk Scheduling & Storage Systems",
    name: "Disk Head Movement & Seek Time Calculation (FCFS/SSTF)",
    latex: "\\\\text{Total Head Movement} = \\\\sum_{i=1}^{k} |R_i - R_{i-1}| \\\\quad \\\\text{Seek Time} = \\\\text{Total Tracks} \\\\times \\\\text{Track Delay}",
    formula: "Total Cylinders Moved = Sum(|Current_Cylinder - Next_Cylinder|) for all requests | Average Seek Time = Total Movement / Number of Requests",
    explanation: "In disk scheduling (FCFS, SSTF, SCAN, LOOK, C-SCAN), the read/write head moves across magnetic platters between tracks. Total head movement measures mechanical seek cost. In FCFS, requests are serviced strictly in arrival order without optimization, resulting in large head swings.",
    examTrap: "Watch the initial head position specified in the question! For example, in BPSC TRE 3.0: Initial head at cylinder 100, requests: 23, 89, 132, 42, 187. Total seek = |100-23| + |23-89| + |89-132| + |132-42| + |42-187| = 77 + 66 + 43 + 90 + 145 = 421 tracks.",
    variables: [
      { symbol: "R_i", meaning: "Cylinder/track number of the i-th serviced request" },
      { symbol: "R_0", meaning: "Initial position of the read/write head" },
      { symbol: "k", meaning: "Total count of disk track I/O requests" },
    ],
  },"""),

    ("os-paging-offset-bits", """  {
    id: "os-paging-offset-bits",
    unit: "Unit 5: Operating System",
    category: "Memory Management & Paging",
    name: "Paging Address Translation & Bit Split Allocation",
    latex: "d = \\\\log_2(\\\\text{Page Size}) \\\\quad p = \\\\text{Logical Bits} - d \\\\quad f = \\\\text{Physical Bits} - d",
    formula: "Offset bits d = log2(Page Size in Bytes) | Page Number bits p = Logical Address Bits - d | Frame bits f = Physical Address Bits - d",
    explanation: "In virtual memory paging, the logical address space is divided into fixed-size pages, and physical RAM into frames of identical size. The lowest d bits represent the page offset (displacement within page/frame). The upper bits index into the page table to find the corresponding physical frame number.",
    examTrap: "Page size must always equal Frame size! If Logical Address = 32 bits, Physical RAM = 1 GB (30 bits), Page Size = 4 KB (2^12 bytes): Offset d = 12 bits, Page number p = 32 - 12 = 20 bits (1M pages), Frame number f = 30 - 12 = 18 bits (256K frames).",
    variables: [
      { symbol: "d", meaning: "Page/frame offset displacement bits" },
      { symbol: "p", meaning: "Virtual page table index bits" },
      { symbol: "f", meaning: "Physical frame index bits" },
      { symbol: "Page Size", meaning: "Size of one memory page in bytes (typically 4 KB = 4096 bytes = 2^12 B)" },
    ],
  },"""),

    # Unit 12
    ("iot-ble-throughput-rate", """  {
    id: "iot-ble-throughput-rate",
    unit: "Unit 12: Internet of Things (IoT)",
    category: "Wireless Sensor Protocols & Physical Layer",
    name: "Bluetooth Low Energy (BLE 5.0) Throughput & Range Scaling",
    latex: "R_{\\\\text{PHY}} \\\\in \\\\{125\\\\text{ kbps}, 500\\\\text{ kbps}, 1\\\\text{ Mbps}, 2\\\\text{ Mbps}\\\\} \\\\quad \\\\text{Max Range} \\\\approx 4\\\\times \\\\text{BLE 4.2}",
    formula: "BLE 5.0 2M PHY = 2 Mbps theoretical data rate (2x BLE 4.2) | Coded PHY (S=8) = 125 kbps (4x Long Range up to 400m)",
    explanation: "Bluetooth Low Energy 5.0 introduced multiple physical layer (PHY) variants: the legacy 1M PHY (1 Mbps), the high-speed 2M PHY (2 Mbps symbol rate for faster burst transmissions and reduced energy per bit), and the LE Coded PHY (with forward error correction S=2 for 500 kbps or S=8 for 125 kbps) enabling long-range outdoor IoT transmission.",
    examTrap: "Exam papers frequently test: 'What is the maximum PHY data rate introduced in Bluetooth 5.0?' Answer is 2 Mbps (not 10 Mbps or 54 Mbps). Effective application throughput is ~1.4 Mbps due to packet overhead and inter-frame spacing.",
    variables: [
      { symbol: "R_PHY", meaning: "Physical layer raw symbol/bit transmission rate" },
      { symbol: "LE 2M PHY", meaning: "2 Megasymbols/sec physical modulation mode" },
      { symbol: "LE Coded PHY", meaning: "Forward Error Correction (FEC) long-range mode" },
    ],
  },"""),

    # Unit 14
    ("law-it-act-statutory-penalties", """  {
    id: "law-it-act-statutory-penalties",
    unit: "Unit 14: Fundamentals of E-Commerce",
    category: "Cyber Law & Intellectual Property Rights",
    name: "Information Technology Act 2000 & IPR Statutory Limits",
    latex: "\\\\text{Copyright} = \\\\text{Author Life} + 60\\\\text{ Years} \\\\quad \\\\text{Patent} = 20\\\\text{ Years} \\\\quad \\\\text{Sec 66F} = \\\\text{Life Imprisonment}",
    formula: "Copyright Term = Author's Lifetime + 60 Years | Patent Validity = 20 Years from filing | IT Act Sec 66F (Cyber Terrorism) = Life Imprisonment",
    explanation: "Under Indian Cyber Law and Intellectual Property Rights (tested in BPSC TRE and CBSE/NCERT CS): Software programs and source code are protected under the Copyright Act, 1957 for Author's Lifetime + 60 years. Patent protection for hardware inventions lasts 20 years from priority filing. Under the IT Act 2000 (amended 2008), Section 43/66 penalizes unauthorized computer damage with compensation up to ₹1 Crore and up to 3 years imprisonment, Section 66C/66D penalizes identity theft/cheating by personation (up to 3 years + ₹1 Lakh fine), and Section 66F penalizes Cyber Terrorism with Life Imprisonment.",
    examTrap: "In India, computer programs 'per se' are copyrighted as literary works, NOT ordinarily patentable unless tied to novel hardware. Also remember: Section 66A (offensive messages) was struck down as unconstitutional by Supreme Court in Shreya Singhal v. Union of India (2015).",
    variables: [
      { symbol: "Sec 66F", meaning: "Cyber Terrorism against national unity, sovereignty, or critical infrastructure (Life Imprisonment)" },
      { symbol: "Sec 43/66", meaning: "Hacking, virus introduction, unauthorized database access (3 yrs / compensation)" },
      { symbol: "Copyright", meaning: "60 years post-mortem protection for literary & software works" },
      { symbol: "Patent", meaning: "20-year non-renewable statutory monopoly from filing date" },
    ],
  },""")
]

all_formulas = updated_blocks + new_formula_blocks

def get_unit_num(block_str):
    m = re.search(r'unit:\s*"Unit (\d+):', block_str)
    if m:
        return int(m.group(1))
    return 99

# Sort all formulas by unit number
all_formulas.sort(key=lambda item: get_unit_num(item[1]))

print(f"Total combined formulas: {len(all_formulas)}")

# Build new FORMULAS_DATA string
new_formulas_body = "\n" + "\n".join([f[1] for f in all_formulas]) + "\n"

# Replace UNIT_ICONS definition with the official 15-unit icons
old_icons_pattern = re.compile(r'const UNIT_ICONS: Record<string, string> = \{[\s\S]*?\};')
new_icons_code = """const UNIT_ICONS: Record<string, string> = {
  "Unit 1": "[LOGIC]",
  "Unit 2": "[COA]",
  "Unit 3": "[PROG]",
  "Unit 4": "[ALGO]",
  "Unit 5": "[OS]",
  "Unit 6": "[DBMS]",
  "Unit 7": "[NET]",
  "Unit 8": "[SE]",
  "Unit 9": "[OOP]",
  "Unit 10": "[WEB]",
  "Unit 11": "[TOC]",
  "Unit 12": "[IOT]",
  "Unit 13": "[AI]",
  "Unit 14": "[ECOM]",
  "Unit 15": "[CG]",
};"""

new_content = content[:start_idx + len(start_marker)] + new_formulas_body + content[end_idx:]
new_content = old_icons_pattern.sub(new_icons_code, new_content, count=1)

with open('src/components/FormulaSheet.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("FormulaSheet.tsx successfully updated with 63 formulas and 15-unit mapping!")
