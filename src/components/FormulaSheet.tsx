"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { SYLLABUS_UNITS, getUnitNumber } from "@/lib/units";
import { BrandLogo } from "@/components/BrandLogo";

// ─── Interfaces ───────────────────────────────────────────────────────
export interface FormulaItem {
  id: string;
  unit: string;
  category: string;
  name: string;
  latex?: string;
  formula: string;
  explanation: string;
  examTrap?: string;
  variables?: { symbol: string; meaning: string }[];
}

export interface ExamSymbolItem {
  symbol: string;
  name: string;
  category: string;
  meaning: string;
  examContext: string;
  example: string;
}

// ─── Examination Custom Symbols & Notation Data ───────────────────────
export const EXAM_SYMBOLS_DATA: ExamSymbolItem[] = [
  {
    symbol: "^",
    name: "Power / Exponentiation (or Logical AND / Bitwise XOR)",
    category: "Arithmetic & Powers",
    meaning: "Exponentiation: raises base to the exponent power (e.g. 2^n is 2 raised to power n).",
    examContext: "CRITICAL EXAM AMBIGUITY: In math/architecture questions, '^' denotes exponentiation (2^n). In discrete mathematics/logic papers, '^' or '∧' denotes logical AND (conjunction). In C/C++/Java programming questions, '^' is bitwise XOR (exclusive OR)!",
    example: "Math: 2^3 = 8 | Logic: P ^ Q (both true) | Code: 5 ^ 3 = 6 (0101 XOR 0011 = 0110)",
  },
  {
    symbol: "* or ·",
    name: "Multiplication / Dot Product / Kleene Star",
    category: "Arithmetic & Powers",
    meaning: "Scalar arithmetic product between two terms; or dot product.",
    examContext: "In numerical questions, '*' or '·' is multiplication (e.g., 2 · |E|). In Theory of Computation, '*' is the Kleene Star closure (zero or more repetitions, including ε).",
    example: "Math: 4 · 5 = 20 | TOC: (0 + 1)* denotes all binary strings",
  },
  {
    symbol: " x ",
    name: "Floor Function (Greatest Integer Function)",
    category: "Arithmetic & Powers",
    meaning: "Rounds real number x down to the greatest integer less than or equal to x.",
    examContext: "Used in binary tree heights (log2 n), hash buckets, and integer division bounds. Always round DOWN toward negative infinity.",
    example: "3.8 = 3, -2.3 = -3, log2(15) = 3",
  },
  {
    symbol: " x ",
    name: "Ceiling Function (Smallest Integer Function)",
    category: "Arithmetic & Powers",
    meaning: "Rounds real number x up to the smallest integer greater than or equal to x.",
    examContext: "Crucial in B-Tree/B+ Tree node order (min keys = m/2 - 1), Hamming error-correction parity bits (2^p ≥ m + p + 1), and packet fragment counts.",
    example: "3.1 = 4, m/2 - 1 for B+ Tree internal nodes",
  },
  {
    symbol: "mod or %",
    name: "Modulo (Remainder Operator)",
    category: "Arithmetic & Powers",
    meaning: "Computes the integer remainder after division of one number by another (a mod b).",
    examContext: "Core to RSA cryptography (C = M^e mod n), hash table index distribution (key % table_size), and cyclic group arithmetic.",
    example: "17 mod 5 = 2, 28 % 7 = 0, (A · B) mod n = ((A mod n) · (B mod n)) mod n",
  },
  {
    symbol: "!",
    name: "Factorial (or Logical NOT in programming)",
    category: "Arithmetic & Powers",
    meaning: "Product of all positive integers less than or equal to n (n! = n × (n-1) × ... × 1).",
    examContext: "Standard in combinatorics and permutations P(n, r) = n! / (n-r)!. Special invariant tested constantly: 0! = 1. In C/Java, '!' is boolean NOT.",
    example: "5! = 120, 0! = 1, in C: !true == false",
  },
  {
    symbol: "log or lg",
    name: "Binary Logarithm (Base 2)",
    category: "Arithmetic & Powers",
    meaning: "Logarithm base 2: the power to which 2 must be raised to yield the operand.",
    examContext: "In Computer Science literature (UGC NET, Bihar STET, GATE), 'log n' and 'lg n' default strictly to log2(n) unless base 10 or 'ln' (base e) is explicitly marked.",
    example: "log2(8) = 3, log2(1024) = 10, log2(n) levels in balanced trees",
  },
  {
    symbol: "^ or ∧",
    name: "Logical AND (Conjunction)",
    category: "Logic & Set Theory",
    meaning: "Boolean operator that outputs True if and only if BOTH operands are True.",
    examContext: "Often typed as '^' in plain text exam questions or '∧' in LaTeX. Truth table: T ∧ T = T; all other combinations evaluate to F.",
    example: "P ∧ Q is True only when P = True and Q = True",
  },
  {
    symbol: "v or ∨",
    name: "Logical OR (Disjunction)",
    category: "Logic & Set Theory",
    meaning: "Boolean operator that outputs True if AT LEAST ONE operand is True.",
    examContext: "Often typed as lowercase 'v' in ASCII exam papers. Evaluates to False if and only if BOTH operands are False.",
    example: "P ∨ Q is False only when P = False and Q = False",
  },
  {
    symbol: "~ or ¬ or !",
    name: "Logical NOT (Negation / Complement)",
    category: "Logic & Set Theory",
    meaning: "Unary operator reversing the truth value of a proposition (T  F, F  T).",
    examContext: "Represented as '~P', '¬P', '!P', or prime 'P''. De Morgan's Laws: ~(P ∧ Q) ≡ ~P ∨ ~Q and ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    example: "~(True) = False, ~P ∨ P ≡ True (Tautology / Law of Excluded Middle)",
  },
  {
    symbol: "-> or →",
    name: "Material Implication (Conditional) / Functional Dependency",
    category: "Logic & Set Theory",
    meaning: "Propositional logic: 'If P then Q'. In DBMS: 'X determines Y'.",
    examContext: "TRAP ALERT: P -> Q is logically equivalent to ~P ∨ Q. It is FALSE ONLY when P is True and Q is False! If P is False, P -> Q is always True (Vacuous Truth).",
    example: "(True -> False) = False | (False -> False) = True | DBMS: EmpID -> EmpName",
  },
  {
    symbol: "<-> or ↔",
    name: "Biconditional (Equivalence / XNOR)",
    category: "Logic & Set Theory",
    meaning: "'P if and only if Q' (iff). Evaluates to True when both propositions have identical truth values.",
    examContext: "Logically equivalent to (P -> Q) ∧ (Q -> P). In digital logic, this corresponds to the XNOR (equality detector) gate.",
    example: "(True <-> True) = True, (False <-> False) = True, (True <-> False) = False",
  },
  {
    symbol: "⊕",
    name: "Exclusive-OR (XOR / Modulo-2 Addition)",
    category: "Logic & Set Theory",
    meaning: "Outputs True if strictly one operand is True and the other is False.",
    examContext: "Self-inverse: A ⊕ A = 0, A ⊕ 0 = A. Parity generator: odd count of 1s yields 1, even count yields 0. In C/Java, written as '^'.",
    example: "1 ⊕ 0 = 1, 1 ⊕ 1 = 0, A ⊕ B = (A ∧ ~B) ∨ (~A ∧ B)",
  },
  {
    symbol: "|S| or #S",
    name: "Set Cardinality / Size",
    category: "Logic & Set Theory",
    meaning: "The total count of distinct elements in set S.",
    examContext: "In Graph Theory: |V| is number of vertices, |E| is number of edges. Power set size: |P(S)| = 2^|S|.",
    example: "If S = {1, 2, 5}, |S| = 3; |P(S)| = 2^3 = 8",
  },
  {
    symbol: "∪ and ∩",
    name: "Set Union & Intersection",
    category: "Logic & Set Theory",
    meaning: "Union (∪) combines all members; Intersection (∩) selects only common members.",
    examContext: "Principle of Inclusion-Exclusion: |A ∪ B| = |A| + |B| - |A ∩ B|. For 3 sets: add back the triple intersection |A ∩ B ∩ C|.",
    example: "{1, 2} ∪ {2, 3} = {1, 2, 3} | {1, 2} ∩ {2, 3} = {2}",
  },
  {
    symbol: "Σ (Sigma)",
    name: "Alphabet (TOC) / Summation (Math)",
    category: "Theory of Computation",
    meaning: "In Automata: finite non-empty set of symbols. In Mathematics: summation over a range.",
    examContext: "In TOC questions, Σ represents the base symbols. Σ* is the set of all strings over Σ of all lengths including ε. Math: ∑ i = n(n+1)/2.",
    example: "Σ = {0, 1}  Σ* = {ε, 0, 1, 00, 01, 10, 11, ...}",
  },
  {
    symbol: "* (Kleene Star)",
    name: "Kleene Star Closure",
    category: "Theory of Computation",
    meaning: "Zero or more concatenations of strings from a set or regular expression.",
    examContext: "CRITICAL: Kleene Star ALWAYS contains the empty string ε (i.e. L^0 = {ε}). Therefore, ε ∈ L* is always true for any language L.",
    example: "a* = {ε, a, aa, aaa, ...}, (a+b)* generates all strings over {a, b}",
  },
  {
    symbol: "+ (Positive Closure)",
    name: "Positive Closure (TOC) / OR (Logic)",
    category: "Theory of Computation",
    meaning: "One or more concatenations of strings: L+ = L* - {ε}.",
    examContext: "Does NOT include the empty string ε unless the base language itself contains ε. Relation: L+ = L · L*.",
    example: "a+ = {a, aa, aaa, ...} (excludes ε)",
  },
  {
    symbol: "ε or λ",
    name: "Empty / Null String",
    category: "Theory of Computation",
    meaning: "The unique string of length zero (|ε| = 0).",
    examContext: "Identity for concatenation: w · ε = ε · w = w. Do NOT confuse {ε} (language with 1 string) with ∅ (empty set with 0 strings). |{ε}| = 1, but |∅| = 0.",
    example: "Length: |ε| = 0, Language: L · {ε} = L",
  },
  {
    symbol: "δ (Delta)",
    name: "State Transition Function",
    category: "Theory of Computation",
    meaning: "Mathematical function specifying state transitions upon reading an input symbol.",
    examContext: "DFA: δ: Q × Σ  Q (deterministic, single next state). NFA: δ: Q × (Σ ∪ {ε})  2^Q (set of next states).",
    example: "δ(q0, 0) = q1 means 'at state q0 reading 0, transition to state q1'",
  },
  {
    symbol: "σ (Sigma)",
    name: "Selection Operator (Relational Algebra)",
    category: "Databases & Relations",
    meaning: "Horizontal slice: filters tuples (rows) in a relation that satisfy condition C.",
    examContext: "Always lowercase σ. Commutative: σ_c1(σ_c2(R)) ≡ σ_c2(σ_c1(R)). Does not alter relation degree (column count).",
    example: "σ_{salary > 50000}(Instructor)",
  },
  {
    symbol: "π (Pi)",
    name: "Projection Operator (Relational Algebra)",
    category: "Databases & Relations",
    meaning: "Vertical slice: selects specified columns and eliminates duplicate rows from result.",
    examContext: "Always lowercase π. Result is a mathematical set (duplicates removed). Degree of result equals count of attributes projected.",
    example: "π_{name, salary}(Instructor)",
  },
  {
    symbol: "⋈",
    name: "Natural Join Operator",
    category: "Databases & Relations",
    meaning: "Equi-joins two relations on all attributes with identical names, preserving only one copy of join columns.",
    examContext: "Lossless Join Decomposition Condition: Decomposition of R into (R1, R2) is lossless iff (R1 ∩ R2  R1) OR (R1 ∩ R2  R2) is in F+.",
    example: "Student ⋈ Enrolled (joins on common attribute RollNo)",
  },
  {
    symbol: "÷",
    name: "Division Operator (Relational Algebra)",
    category: "Databases & Relations",
    meaning: "Finds tuples in R that are associated with ALL tuples in relation S.",
    examContext: "Answers universal quantification queries ('students who enrolled in ALL computer science courses').",
    example: "Enrolled ÷ RequiredCourses",
  },
  {
    symbol: "O, Ω, Θ",
    name: "Asymptotic Complexity Bounds",
    category: "Complexity & Hardware",
    meaning: "Big-O: Asymptotic Upper Bound. Big-Omega: Asymptotic Lower Bound. Big-Theta: Tight Bound.",
    examContext: "MergeSort is O(n log n), Ω(n log n), and Θ(n log n). QuickSort worst case is O(n^2), but average case is Θ(n log n).",
    example: "Binary Search: Θ(log2 n) | BubbleSort worst: O(n^2)",
  },
  {
    symbol: "τ (Tau)",
    name: "Clock Cycle Duration / Period",
    category: "Complexity & Hardware",
    meaning: "Time period of one CPU clock pulse (τ = 1 / Frequency).",
    examContext: "Pipeline clock: τ = max(stage delays) + latch delay. Pipelining can never run faster than the slowest individual stage delay.",
    example: "At 2.5 GHz: τ = 1 / (2.5 × 10^9) = 0.4 ns = 400 ps",
  },
  {
    symbol: "η (Eta)",
    name: "Efficiency / Link Utilization Factor",
    category: "Complexity & Hardware",
    meaning: "Fraction of total transmission time during which useful packet data is sent (0.0 to 1.0 or 0% to 100%).",
    examContext: "Sliding window protocols: η = W_s / (1 + 2a) where a = T_prop / T_trans. Stop-and-Wait is W_s = 1.",
    example: "If a = 1 and W_s = 1, η = 1 / (1 + 2) = 33.3%",
  },
  {
    symbol: "RTT",
    name: "Round-Trip Time",
    category: "Complexity & Hardware",
    meaning: "Total elapsed time for a data packet to travel to destination and its ACK to return (RTT = 2 · T_prop).",
    examContext: "CSMA/CD minimum frame transmission time must be ≥ RTT to detect collisions reliably before frame finishes transmitting.",
    example: "BDP = Bandwidth × RTT bits",
  },
];

// ─── Exhaustive Formulas Database (All 15 Units) ──────────────────────
export const FORMULAS_DATA: FormulaItem[] = [
  {
    id: "math-handshaking",
    unit: "Unit 1: Discrete Mathematics & Optimization",
    category: "Graph Theory",
    name: "Handshaking Lemma & Odd Degree Invariant",
    formula: "∑ deg(v) = 2 · |E|  ──►  Number of odd-degree vertices must be EVEN",
    latex: "\\sum_{v \\in V} \\deg(v) = 2|E|",
    explanation: "Every undirected edge has two endpoints, contributing exactly 2 to the sum of all vertex degrees. Consequently, the sum of degrees is always even, which mathematically forces the count of vertices with odd degrees to be strictly even.",
    examTrap: "In directed graphs, ∑ in-deg(v) = ∑ out-deg(v) = |E|. Do not multiply by 2 for directed edges!",
    variables: [
      { symbol: "∑", meaning: "Summation operator across all vertices v in vertex set V" },
      { symbol: "v", meaning: "Individual vertex (node) in the graph G" },
      { symbol: "deg(v)", meaning: "Degree of vertex v: number of edges incident on v (self-loops count twice)" },
      { symbol: "|E|", meaning: "Total count (cardinality) of undirected edges in graph G ('| |' denotes set size)" },
      { symbol: "·", meaning: "Arithmetic multiplication operator (2 multiplied by |E|)" },
      { symbol: "V", meaning: "Finite set of all vertices in graph G = (V, E)" },
    ],
  },
  {
    id: "math-euler-planarity",
    unit: "Unit 1: Discrete Mathematics & Optimization",
    category: "Planar Graphs",
    name: "Euler's Formula & Planarity Bounds",
    formula: "V - E + F = 2  |  Planar Graph Bounds: E ≤ 3V - 6 (triangle-free: E ≤ 2V - 4)",
    latex: "V - E + F = 2, \\quad E \\le 3V - 6 \\quad (\\text{if triangle-free}: E \\le 2V - 4)",
    explanation: "For any connected planar graph drawn without edge crossings, vertices minus edges plus bounded and unbounded faces strictly equals 2. The edge bounds prevent non-planar subgraphs like K5 and K3,3 (Kuratowski's Theorem).",
    examTrap: "Remember that F includes the exterior (outer) face! If a question asks for 'bounded faces/regions only', subtract 1 from F.",
    variables: [
      { symbol: "V", meaning: "Total number of vertices in the connected planar graph (V ≥ 3)" },
      { symbol: "E", meaning: "Total number of edges in the graph" },
      { symbol: "F", meaning: "Total number of faces/regions enclosed by edges, including the unbounded exterior face" },
      { symbol: "≤", meaning: "Less than or equal to inequality upper bound" },
      { symbol: "3V - 6", meaning: "Maximum possible edges for any simple planar graph; if E > 3V - 6, graph is non-planar" },
      { symbol: "2V - 4", meaning: "Tighter edge bound if the graph has no triangles (e.g. bipartite graphs like K3,3)" },
    ],
  },
  {
    id: "math-inclusion-exclusion-3sets",
    unit: "Unit 1: Discrete Mathematics & Optimization",
    category: "Set Theory",
    name: "Principle of Inclusion-Exclusion (2 & 3 Sets)",
    formula: "|A ∪ B ∪ C| = |A| + |B| + |C| - (|A ∩ B| + |B ∩ C| + |C ∩ A|) + |A ∩ B ∩ C|",
    latex: "|A \\cup B \\cup C| = \\sum |A_i| - \\sum |A_i \\cap A_j| + |A \\cap B \\cap C|",
    explanation: "Calculates the cardinality of the union of multiple sets by adding the sizes of individual sets, subtracting pairwise overlaps to eliminate double counting, and re-adding the triple overlap that was subtracted three times.",
    examTrap: "For questions asking 'exactly one set', use: ∑|A| - 2∑|A ∩ B| + 3|A ∩ B ∩ C|. For 'exactly two sets': ∑|A ∩ B| - 3|A ∩ B ∩ C|.",
    variables: [
      { symbol: "|A|, |B|, |C|", meaning: "Cardinalities (element counts) of individual sets A, B, and C ('| |' denotes set size)" },
      { symbol: "∪", meaning: "Set Union operator: elements present in at least one of the sets" },
      { symbol: "∩", meaning: "Set Intersection operator: elements simultaneously present in both sets" },
      { symbol: "|A ∩ B|", meaning: "Size of pairwise intersection between sets A and B" },
      { symbol: "|A ∩ B ∩ C|", meaning: "Size of triple intersection: elements present in all three sets A, B, and C" },
      { symbol: "Neither", meaning: "Elements outside all sets: N - |A ∪ B ∪ C| where N is the universal set size" },
    ],
  },
  {
    id: "math-permutations-combinations",
    unit: "Unit 1: Discrete Mathematics & Optimization",
    category: "Combinatorics",
    name: "Permutations & Combinations (Ordered vs Unordered)",
    formula: "P(n, r) = n! / (n - r)!  |  C(n, r) = n! / [r! · (n - r)!]  |  With Repetition: n^r vs C(n+r-1, r)",
    latex: "P(n,r) = \\frac{n!}{(n-r)!}, \\quad C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}",
    explanation: "Permutations count arrangements where sequence order matters (e.g. passwords, race positions). Combinations count selections where order does NOT matter (e.g. committees, hand of cards).",
    examTrap: "Remember n^r is for ordered selections with replacement; C(n+r-1, r) is for unordered selections with replacement (stars & bars)!",
    variables: [
      { symbol: "n", meaning: "Total number of distinct available items in the master set" },
      { symbol: "r", meaning: "Number of items chosen or arranged from the set (0 ≤ r ≤ n)" },
      { symbol: "!", meaning: "Factorial operator: n! = n × (n-1) × ... × 1, with 0! = 1 by definition" },
      { symbol: "^", meaning: "Exponentiation / Power operator: n^r denotes n multiplied by itself r times (choices with replacement)" },
      { symbol: "P(n, r)", meaning: "Permutations: ordered sequences of r items chosen from n distinct items" },
      { symbol: "C(n, r)", meaning: "Combinations / binomial coefficient: unordered subsets of r items chosen from n" },
    ],
  },
  {
    id: "math-gray-code-conversion",
    unit: "Unit 1: Discrete Mathematics & Optimization",
    category: "Digital Logic",
    name: "Binary to Gray Code & Gray to Binary Conversion",
    formula: "Binary  Gray: G_MSB = B_MSB, G_i = B_{i+1} ⊕ B_i  |  Gray  Binary: B_MSB = G_MSB, B_i = B_{i+1} ⊕ G_i",
    latex: "G_i = B_{i+1} \\oplus B_i, \\quad B_i = B_{i+1} \\oplus G_i",
    explanation: "Gray code is an unweighted unit-distance code where adjacent numerical values differ by exactly one bit. Conversion uses bitwise XOR between adjacent bits from left (MSB) to right.",
    examTrap: "In Binary to Gray: each Gray bit is XOR of two adjacent BINARY bits. In Gray to Binary: each Binary bit is XOR of PREVIOUS BINARY BIT with CURRENT GRAY BIT!",
    variables: [
      { symbol: "B_i", meaning: "Binary code digit at bit position i (from 0 up to n-1)" },
      { symbol: "G_i", meaning: "Gray code bit at bit position i" },
      { symbol: "⊕", meaning: "Bitwise Exclusive-OR (XOR) operator: outputs 1 if bits differ, 0 if identical (addition mod 2)" },
      { symbol: "MSB", meaning: "Most Significant Bit: always remains identical between Binary and Gray code (B_MSB = G_MSB)" },
    ],
  },
  {
    id: "math-boolean-minterms",
    unit: "Unit 1: Discrete Mathematics & Optimization",
    category: "Boolean Algebra",
    name: "Boolean Function & Minterm Counting",
    formula: "Minterms for n variables = 2^n  |  Total Boolean Functions of n variables = 2^(2^n)",
    latex: "\\text{Minterms} = 2^n, \\quad \\text{Total Functions} = 2^{2^n}, \\quad \\text{Self-Dual} = 2^{2^{n-1}}",
    explanation: "A truth table of n binary variables has 2^n distinct rows (minterms). Because each output row can be independently set to 0 or 1, there are 2^(2^n) unique switching functions possible.",
    examTrap: "For n = 4: Total functions = 2^(2^4) = 2^16 = 65,536! Self-dual functions = 2^(2^3) = 2^8 = 256. Do not confuse 2^(2^n) with (2^2)^n!",
    variables: [
      { symbol: "n", meaning: "Number of Boolean input variables (e.g. A, B, C implies n = 3)" },
      { symbol: "^", meaning: "Exponentiation / Power operator: 2^n is 2 raised to power n; 2^(2^n) is 2 raised to (2^n)" },
      { symbol: "2^n", meaning: "Total canonical minterms (rows in truth table) or maxterms" },
      { symbol: "2^(2^n)", meaning: "Total possible distinct Boolean functions constructible from n variables" },
      { symbol: "Self-Dual", meaning: "Functions where f(x1..xn) = ~f(~x1..~xn); count is exactly 2^(2^(n-1))" },
    ],
  },
  {
    id: "math-stars-and-bars",
    unit: "Unit 1: Discrete Mathematics & Optimization",
    category: "Combinatorics",
    name: "Stars-and-Bars Non-Negative Integer Solutions",
    formula: "x_1 + x_2 + ... + x_k = n  ──►  Non-negative (x_i ≥ 0): C(n + k - 1, k - 1)",
    latex: "\\text{Non-negative}: \\binom{n + k - 1}{k - 1}, \\quad \\text{Positive } (x_i \\ge 1): \\binom{n - 1}{k - 1}",
    explanation: "Finds the number of ways to distribute n identical objects into k distinct bins. If variables must be strictly positive (x_i ≥ 1), each bin pre-receives 1 object, leaving C(n - 1, k - 1) solutions.",
    examTrap: "Always check the domain! If variables must be strictly positive (x_i ≥ 1), the formula is C(n - 1, k - 1), NOT C(n + k - 1, k - 1).",
    variables: [
      { symbol: "n", meaning: "Sum total / number of identical indistinguishable objects (stars) to distribute" },
      { symbol: "k", meaning: "Number of distinct variables / labeled target bins" },
      { symbol: "k - 1", meaning: "Number of dividers (bars) needed to partition items into k compartments" },
      { symbol: "C(n, r)", meaning: "Combinations / binomial coefficient: n! / (r! · (n - r)!)" },
      { symbol: "≥", meaning: "Greater than or equal to inequality condition on variable domains" },
    ],
  },
  {
    id: "arch-pipeline-speedup",
    unit: "Unit 2: Computer Architecture & Organization",
    category: "Pipelining",
    name: "Pipeline Speedup (Ideal & Non-Ideal)",
    formula: "S = (n · k) / (k + n - 1)  ──►  S_max = k as n → ∞",
    latex: "S = \\frac{T_{\\text{seq}}}{T_{\\text{pipe}}} = \\frac{n \\cdot k \\cdot \\tau}{(k + n - 1)\\tau + \\text{StallCycles}} \\le k",
    explanation: "Quantifies the throughput improvement of instruction pipelining over unpipelined sequential execution. As the instruction count n approaches infinity, speedup approaches the number of stages k.",
    examTrap: "When stages have unequal delays, the pipeline clock period τ is bounded by the SLOWEST stage delay + latch overhead. S_max = (∑ stage_times) / (max(stage_times) + latch).",
    variables: [
      { symbol: "S", meaning: "Speedup ratio: execution time of sequential processor divided by pipelined processor" },
      { symbol: "k", meaning: "Number of pipeline stages (depth of the pipeline)" },
      { symbol: "n", meaning: "Total number of instructions executed in the program" },
      { symbol: "τ (Tau)", meaning: "Clock cycle period duration (determined by slowest stage delay + latch delay)" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
      { symbol: "k + n - 1", meaning: "Total clock cycles required to execute n instructions through a k-stage pipeline without stalls" },
    ],
  },
  {
    id: "arch-cpi-stalls",
    unit: "Unit 2: Computer Architecture & Organization",
    category: "CPU Performance",
    name: "Effective CPI with Hazards & Stalls",
    formula: "CPI_eff = CPI_ideal + Stalls_structural + Stalls_data + Stalls_control + Stalls_memory",
    latex: "\\text{CPI}_{\\text{eff}} = \\text{CPI}_{\\text{ideal}} + \\sum (\\text{Frequency}_i \\times \\text{StallCycles}_i)",
    explanation: "Calculates the realistic average clock cycles per instruction by adding stall cycles caused by resource conflicts, data dependencies (load-use), and branch mispredictions to the base CPI.",
    examTrap: "If branch frequency is 20% and branch penalty is 3 cycles, control stalls = 0.20 × 3 = 0.60 CPI.",
    variables: [
      { symbol: "CPI_eff", meaning: "Effective / average Cycles Per Instruction executed by processor" },
      { symbol: "CPI_ideal", meaning: "Ideal base CPI assuming zero hazard stalls (typically 1.0 for a single-issue pipeline)" },
      { symbol: "Stalls_data", meaning: "Stall cycles incurred per instruction due to RAW (Read-After-Write) data dependencies" },
      { symbol: "Stalls_control", meaning: "Stall cycles per instruction from branch mispredictions (= Branch_Frequency × Branch_Penalty)" },
      { symbol: "Branch Penalty", meaning: "Number of clock cycles wasted flushing the pipeline on a mispredicted branch" },
    ],
  },
  {
    id: "arch-amat-single",
    unit: "Unit 2: Computer Architecture & Organization",
    category: "Memory Hierarchy",
    name: "Average Memory Access Time (AMAT) — Single Level",
    formula: "Hierarchical: AMAT = t_c + (1 - h) · t_m  |  Simultaneous: AMAT = h · t_c + (1 - h) · t_m",
    latex: "\\text{AMAT}_{\\text{hierarchical}} = t_c + (1 - h) \\cdot t_m, \\quad \\text{AMAT}_{\\text{simultaneous}} = h \\cdot t_c + (1 - h) \\cdot t_m",
    explanation: "Measures effective memory latency perceived by CPU. In hierarchical access, cache is checked first; on miss, main memory is accessed (miss penalty t_m). In simultaneous access, both are probed concurrently.",
    examTrap: "Read question carefully! If it says 'simultaneous access', use h·t_c + (1-h)·t_m. If it says 'hierarchical' or mentions cache is accessed first, use t_c + (1-h)·t_m.",
    variables: [
      { symbol: "AMAT", meaning: "Average Memory Access Time (in nanoseconds ns or CPU clock cycles)" },
      { symbol: "h", meaning: "Cache Hit Rate (dimensionless fraction from 0.0 to 1.0, e.g. 95% = 0.95)" },
      { symbol: "1 - h", meaning: "Cache Miss Rate (m = 1 - h), fraction of accesses that miss the cache" },
      { symbol: "t_c", meaning: "Cache access latency / hit time (in ns or cycles)" },
      { symbol: "t_m", meaning: "Main memory access latency / miss penalty (in ns or cycles)" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
    ],
  },
  {
    id: "arch-amat-multilevel",
    unit: "Unit 2: Computer Architecture & Organization",
    category: "Memory Hierarchy",
    name: "Multi-Level Cache AMAT (L1, L2, L3)",
    formula: "AMAT = t_L1 + (1 - h1) · [ t_L2 + (1 - h2) · [ t_L3 + (1 - h3) · t_RAM ] ]",
    latex: "\\text{AMAT} = t_{L1} + m_1 \\cdot (t_{L2} + m_2 \\cdot (t_{L3} + m_3 \\cdot t_{\\text{RAM}}))",
    explanation: "Calculates recursive AMAT through multiple hierarchical cache tiers. Each missed level cascades down to query the next slower, larger level until hitting main RAM.",
    examTrap: "Local miss rate vs Global miss rate: If problem says 'Global miss rate of L2 is 2%', do NOT multiply by m1 again; global miss rate already includes m1!",
    variables: [
      { symbol: "t_L1, t_L2, t_L3", meaning: "Access hit times for L1, L2, and L3 caches respectively (in nanoseconds ns)" },
      { symbol: "m1, m2, m3", meaning: "LOCAL miss rates at L1, L2, and L3 (m_i = 1 - h_i, relative to accesses that reach level i)" },
      { symbol: "t_RAM", meaning: "Main memory access latency (in ns)" },
      { symbol: "Global Miss Rate (L2)", meaning: "Fraction of all CPU references that miss both L1 and L2: m_global,L2 = m1 × m2" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
    ],
  },
  {
    id: "arch-cache-bit-splitting",
    unit: "Unit 2: Computer Architecture & Organization",
    category: "Cache Mapping",
    name: "Cache Address Bit-Splitting Formulas",
    formula: "Offset = log2(Block_Size) | Index = log2(Num_Sets) | Tag = Address_Bits - (Index + Offset)",
    latex: "\\text{Offset} = \\log_2 B, \\quad \\text{Index} = \\log_2 \\left(\\frac{C}{B \\cdot k}\\right), \\quad \\text{Tag} = \\text{AddrBits} - (\\text{Index} + \\text{Offset})",
    explanation: "Deconstructs a physical memory address into Byte Offset, Set Index, and Tag fields for k-way set-associative cache mapping.",
    examTrap: "In Direct Mapped: Num_Sets = Total_Blocks (k=1). In Fully Associative: Index bits = 0 (only Tag and Offset exist)!",
    variables: [
      { symbol: "Offset", meaning: "Number of address bits used to select a byte within a cache line block (= log2(Block_Size))" },
      { symbol: "Index", meaning: "Number of address bits used to select the specific cache set (= log2(Number_of_Sets))" },
      { symbol: "Tag", meaning: "Remaining high-order address bits compared to verify if block matches" },
      { symbol: "C", meaning: "Total cache data capacity in bytes (e.g. 64 KB = 65,536 bytes)" },
      { symbol: "B", meaning: "Block (cache line) size in bytes (e.g. 64 bytes)" },
      { symbol: "k", meaning: "Degree of associativity (k=1 for Direct Mapped; k=Total Blocks for Fully Associative)" },
      { symbol: "log2", meaning: "Logarithm base 2: number of binary address bits required to encode the count" },
    ],
  },
  {
    id: "arch-amdahl",
    unit: "Unit 2: Computer Architecture & Organization",
    category: "Parallel Computing",
    name: "Amdahl's Law for Speedup",
    formula: "S_overall = 1 / [ (1 - f) + (f / s) ]  ──►  S_max = 1 / (1 - f) as s → ∞",
    latex: "S_{\\text{overall}} = \\frac{1}{(1 - f) + \\frac{f}{s}} \\quad \\xrightarrow{s \\to \\infty} \\quad S_{\\max} = \\frac{1}{1 - f}",
    explanation: "Predicts the maximum theoretical speedup of an entire system when only a fraction f of the execution time can be accelerated by factor s.",
    examTrap: "If 20% of code is serial, f = 0.80 and (1 - f) = 0.20. Even with infinite processors (s = ∞), speedup can NEVER exceed 1 / 0.20 = 5×!",
    variables: [
      { symbol: "S_overall", meaning: "Overall speedup factor achieved across the entire workload" },
      { symbol: "f", meaning: "Fraction of execution time that can be parallelized or improved (0.0 ≤ f ≤ 1.0)" },
      { symbol: "1 - f", meaning: "Strictly serial fraction of the workload that cannot be sped up (the bottleneck)" },
      { symbol: "s", meaning: "Speedup multiplier factor applied strictly to the parallel fraction f" },
      { symbol: "S_max", meaning: "Asymptotic theoretical speedup limit as processor count approaches infinity (= 1 / (1 - f))" },
    ],
  },
  {
    id: "arch-ieee-754",
    unit: "Unit 2: Computer Architecture & Organization",
    category: "Data Representation",
    name: "IEEE 754 Floating-Point Representation",
    formula: "V = (-1)^s · (1 + M) · 2^(E - Bias)  |  Single: 1+8+23 bits (Bias 127) | Double: 1+11+52 bits (Bias 1023)",
    latex: "V = (-1)^s \\times (1.M)_2 \\times 2^{E - \\text{Bias}} \\quad (\\text{Bias} = 2^{k-1} - 1)",
    explanation: "Standardizes binary floating-point numbers into Sign (s), Biased Exponent (E), and Mantissa/Fraction (M). Normalized numbers feature an implicit leading 1 bit preceding the binary point.",
    examTrap: "Special cases: If E = 255 and M = 0  ±Infinity. If E = 255 and M ≠ 0  NaN (Not a Number). If E = 0 and M = 0  ±0. If E = 0 and M ≠ 0  Denormalized number (formula: (-1)^s · 0.M · 2^(-126)).",
    variables: [
      { symbol: "s", meaning: "Sign bit (1 bit: s=0 represents positive, s=1 represents negative value)" },
      { symbol: "(-1)^s", meaning: "Sign multiplier: (-1)^0 = +1, (-1)^1 = -1 ('^' denotes power/exponentiation)" },
      { symbol: "E", meaning: "Biased exponent field (8 bits for 32-bit single precision; 11 bits for 64-bit double precision)" },
      { symbol: "Bias", meaning: "Exponent bias constant: 127 for single precision (2^(8-1) - 1); 1023 for double precision (2^(11-1) - 1)" },
      { symbol: "M", meaning: "Mantissa / fractional significand (23 bits in single precision, 52 bits in double precision)" },
      { symbol: "1 + M", meaning: "Implicit normalized significand: leading 1 bit is hidden and not stored in memory" },
    ],
  },
  {
    id: "cg-oblique-projections",
    unit: "Unit 3: Programming Languages & Computer Graphics",
    category: "3D Projections",
    name: "3D Oblique Projections: Cavalier vs. Cabinet",
    formula: "xp = x + z · L · cos α | yp = y + z · L · sin α | Cavalier: α = 45°, L = 1.0 | Cabinet: α ≈ 63.4°, L = 0.5",
    latex: "x_p = x + z \\cdot L \\cos\\alpha, \\quad y_p = y + z \\cdot L \\sin\\alpha",
    explanation: "Maps 3D coordinates onto a 2D projection plane where projection lines are not perpendicular to the plane. Cavalier retains full scale along receding axis (L = 1.0); Cabinet reduces receding depth by half (L = 0.5) for natural realism.",
    examTrap: "Cavalier has L = 1.0 (no foreshortening, shapes look distortedly elongated). Cabinet has L = 0.5 (half foreshortening, tan α = 2  α ≈ 63.4°, looks visually natural).",
    variables: [
      { symbol: "xp, yp", meaning: "Projected 2D coordinates on the display view plane" },
      { symbol: "x, y, z", meaning: "Original 3D Cartesian coordinates of the object vertex in world space" },
      { symbol: "L", meaning: "Foreshortening ratio factor along receding z-axis (L = 1.0 for Cavalier; L = 0.5 for Cabinet)" },
      { symbol: "α (Alpha)", meaning: "Angle of receding lines with the horizontal screen axis (typically 45° or 30°)" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
    ],
  },
  {
    id: "cg-2d-rotation",
    unit: "Unit 3: Programming Languages & Computer Graphics",
    category: "2D Transformations",
    name: "2D Rotation Matrix (Counter-Clockwise about Origin)",
    formula: "x' = x·cos θ - y·sin θ | y' = x·sin θ + y·cos θ | Matrix: [[cos θ, -sin θ], [sin θ, cos θ]]",
    latex: "\\begin{bmatrix} x' \\\\ y' \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ 1 \\end{bmatrix}",
    explanation: "Rotates 2D coordinates counter-clockwise about the origin (0,0) by angle θ. In homogeneous coordinates, it forms an orthogonal 3×3 matrix with determinant strictly equal to +1.",
    examTrap: "For CLOCKWISE rotation: replace θ with -θ, causing the matrix first row to become [cos θ, +sin θ] and second row [-sin θ, cos θ]!",
    variables: [
      { symbol: "x, y", meaning: "Original 2D Cartesian coordinates of the point prior to rotation" },
      { symbol: "x', y'", meaning: "New transformed coordinates of the rotated point" },
      { symbol: "θ (Theta)", meaning: "Angle of rotation (positive indicates counter-clockwise direction)" },
      { symbol: "·", meaning: "Arithmetic scalar multiplication operator" },
      { symbol: "det(R)", meaning: "Determinant of rotation matrix: (cos θ)(cos θ) - (-sin θ)(sin θ) = cos^2 θ + sin^2 θ = +1" },
    ],
  },
  {
    id: "cg-cohen-sutherland",
    unit: "Unit 3: Programming Languages & Computer Graphics",
    category: "Clipping Algorithms",
    name: "Cohen-Sutherland Line Clipping 4-bit Outcode",
    formula: "Outcode = [Top, Bottom, Right, Left] | Trivial Accept: C1 = 0000 AND C2 = 0000 | Trivial Reject: C1 & C2 ≠ 0000",
    latex: "\\text{Accept}: C_1 = 0000 \\land C_2 = 0000, \\quad \\text{Reject}: C_1 \\land C_2 \\ne 0000",
    explanation: "Partitions 2D space into 9 regions relative to a rectangular clipping window using a 4-bit TBRL outcode. Bitwise logical operations rapidly determine trivial acceptance or rejection without trigonometric division.",
    examTrap: "If C1 & C2 == 0000, the line is NOT necessarily accepted! It merely indicates it cannot be trivially rejected, requiring clipping calculation against boundary planes.",
    variables: [
      { symbol: "C1, C2", meaning: "4-bit region outcodes representing line endpoints P1 and P2" },
      { symbol: "[T, B, R, L]", meaning: "4 bit positions: Bit 3 = Top, Bit 2 = Bottom, Bit 1 = Right, Bit 0 = Left" },
      { symbol: "& or ∧", meaning: "Bitwise logical AND operation between outcodes C1 and C2" },
      { symbol: "0000", meaning: "Region code for the interior of the clipping window (both endpoints inside = trivially accepted)" },
      { symbol: "≠", meaning: "Not equal to: if (C1 & C2) ≠ 0000, line is entirely outside one boundary plane and trivially rejected" },
    ],
  },
  {
    id: "dbms-lossless-join",
    unit: "Unit 4: Database Management Systems",
    category: "Relational Normalization",
    name: "Lossless Join Decomposition Condition",
    formula: "(R1 ∩ R2  R1)  OR  (R1 ∩ R2  R2)  must belong to F+",
    latex: "(R_1 \\cap R_2 \\to R_1) \\in F^+ \\quad \\lor \\quad (R_1 \\cap R_2 \\to R_2) \\in F^+",
    explanation: "A binary decomposition of relation schema R into R1 and R2 is lossless (non-additive) if and only if the attributes common to both relations form a superkey of at least one of the decomposed schemas.",
    examTrap: "Lossless join is mandatory for relational database design. Dependency preservation is desirable but NOT always achievable in BCNF!",
    variables: [
      { symbol: "R1, R2", meaning: "Decomposed sub-relation schemas such that R1 ∪ R2 = R" },
      { symbol: "∩", meaning: "Attribute intersection operator: common attributes shared by both R1 and R2" },
      { symbol: " or ->", meaning: "Functional Dependency operator: common attributes uniquely determine all attributes of R1 or R2" },
      { symbol: "F+", meaning: "Closure of the given set of functional dependencies F under Armstrong's Axioms" },
      { symbol: "OR", meaning: "Logical disjunction: condition holds if true for either R1 OR R2 (or both)" },
    ],
  },
  {
    id: "dbms-normal-forms-hierarchy",
    unit: "Unit 4: Database Management Systems",
    category: "Relational Normalization",
    name: "Normal Forms Determinant Invariants (1NF to BCNF)",
    formula: "1NF: Atomic values | 2NF: No partial key FDs | 3NF: X is Superkey OR Y is Prime | BCNF: X MUST be Superkey",
    latex: "\\text{BCNF} \\subset \\text{3NF} \\subset \\text{2NF} \\subset \\text{1NF}",
    explanation: "Strict hierarchy of relational normalization. Every BCNF relation is in 3NF; every 3NF is in 2NF; every 2NF is in 1NF. 3NF allows non-trivial FD X  Y if Y is a prime attribute, while BCNF strictly forbids this.",
    examTrap: "A relation with only two attributes is ALWAYS in BCNF! Any relation where all attributes are prime is automatically in 3NF.",
    variables: [
      { symbol: "1NF", meaning: "First Normal Form: attribute values in relation must be atomic (indivisible scalars); no repeating groups" },
      { symbol: "2NF", meaning: "Second Normal Form: in 1NF and no non-prime attribute is partially functionally dependent on a candidate key" },
      { symbol: "3NF", meaning: "Third Normal Form: in 2NF and for every non-trivial X  Y, either X is a superkey OR Y is a prime attribute" },
      { symbol: "BCNF", meaning: "Boyce-Codd Normal Form: for every non-trivial X  Y, determinant X must strictly be a superkey" },
      { symbol: "Prime Attribute", meaning: "Any attribute that is a constituent member of ANY candidate key in the relation" },
    ],
  },
  {
    id: "os-littles-law",
    unit: "Unit 5: System Software & Operating Systems",
    category: "Queuing Theory",
    name: "Little's Law for Queuing & System Latency",
    formula: "L = λ · W  ──►  W = L / λ",
    latex: "L = \\lambda W \\quad \\implies \\quad W = \\frac{L}{\\lambda}",
    explanation: "Fundamental queuing theorem stating that the long-term average number of processes (L) in a stationary queuing system equals long-term average arrival rate (λ) multiplied by average time (W) spent in system.",
    examTrap: "Units must match! If arrival rate λ is given in processes/minute and residence time W is in seconds, convert W to minutes or λ to seconds before multiplying.",
    variables: [
      { symbol: "L", meaning: "Average number of processes / requests concurrently inside the system / queue" },
      { symbol: "λ (Lambda)", meaning: "Average arrival rate of incoming processes per unit time (e.g. processes per second)" },
      { symbol: "W", meaning: "Average residence / turnaround time a process spends inside the system (in seconds)" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
    ],
  },
  {
    id: "os-swap-time",
    unit: "Unit 5: System Software & Operating Systems",
    category: "Memory Management",
    name: "Process Swapping Time & Disk Transfer Latency",
    formula: "Transfer Time = Process_Size / Transfer_Rate | Total Swap (Out + In) = 2 · (Size / Rate)",
    latex: "T_{\\text{transfer}} = \\frac{\\text{Size}}{\\text{Rate}}, \\quad T_{\\text{swap\\_total}} = 2 \\times \\left( \\frac{\\text{Size}}{\\text{Rate}} + T_{\\text{latency}} \\right)",
    explanation: "Calculates operating system overhead of medium-term scheduling swapping. Swapping out a victim process to backing store disk and swapping in a new ready process requires two full I/O transfers.",
    examTrap: "Do not forget the factor of 2 when context-switching between two memory-resident processes via swap space!",
    variables: [
      { symbol: "Size", meaning: "Total memory footprint of the swapped process (in Megabytes MB or Kilobytes KB)" },
      { symbol: "Rate", meaning: "Disk I/O bus transfer bandwidth throughput (in MB/sec or KB/sec)" },
      { symbol: "2 · (Size / Rate)", meaning: "Factor of 2 accounts for swapping OUT the victim process and swapping IN the replacement process" },
      { symbol: "T_latency", meaning: "Rotational latency plus disk head seek time overhead per transfer operation" },
    ],
  },
  {
    id: "os-cpu-scheduling-metrics",
    unit: "Unit 5: System Software & Operating Systems",
    category: "CPU Scheduling",
    name: "CPU Scheduling Turnaround & Waiting Times",
    formula: "TAT = Completion_Time - Arrival_Time | WT = TAT - Burst_Time | RT = First_CPU_Time - Arrival_Time",
    latex: "\\text{TAT} = T_{\\text{complete}} - T_{\\text{arrive}}, \\quad \\text{WT} = \\text{TAT} - T_{\\text{burst}}, \\quad \\text{RT} = T_{\\text{first\\_response}} - T_{\\text{arrive}}",
    explanation: "Core evaluation metrics for process scheduling algorithms (FCFS, SJF, SRTF, Round Robin). Turnaround time is total elapsed lifespan; Waiting time is spent sitting idle in ready queue.",
    examTrap: "In non-preemptive algorithms, Waiting Time = Response Time! In preemptive algorithms (e.g. Round Robin, SRTF), RT and WT differ significantly.",
    variables: [
      { symbol: "TAT", meaning: "Turnaround Time: total lifespan of process from arrival to final completion" },
      { symbol: "WT", meaning: "Waiting Time: total duration process spends waiting inside the ready queue" },
      { symbol: "RT", meaning: "Response Time: elapsed duration from arrival until process first receives CPU execution time" },
      { symbol: "Arrival_Time", meaning: "Timestamp when the process entered the operating system ready queue" },
      { symbol: "Burst_Time", meaning: "Total CPU execution duration required by the process to complete its work" },
    ],
  },
  {
    id: "os-tlb-paging-emat",
    unit: "Unit 5: System Software & Operating Systems",
    category: "Paging & Memory",
    name: "Effective Memory Access Time with TLB Paging",
    formula: "EMAT = h · (t_tlb + t_m) + (1 - h) · (t_tlb + 2 · t_m)  [Single Level Page Table]",
    latex: "\\text{EMAT} = h(t_{\\text{tlb}} + t_m) + (1 - h)(t_{\\text{tlb}} + (k + 1)t_m)",
    explanation: "Calculates average memory latency under virtual memory paging with a Translation Lookaside Buffer. On TLB hit, physical memory is accessed once; on TLB miss, k page table lookups in RAM are required before accessing data.",
    examTrap: "On TLB miss in k-level paging, total memory accesses = k (for page table walks) + 1 (for actual data) = k + 1 memory accesses! For 2-level paging on TLB miss, time is t_tlb + 3·t_m.",
    variables: [
      { symbol: "EMAT", meaning: "Effective Memory Access Time (in nanoseconds ns)" },
      { symbol: "h", meaning: "TLB Hit Ratio (dimensionless fraction between 0.0 and 1.0, e.g. 90% = 0.90)" },
      { symbol: "1 - h", meaning: "TLB Miss Ratio (fraction of address translations missing the TLB cache)" },
      { symbol: "t_tlb", meaning: "Associative TLB lookup latency (typically 5 to 20 ns)" },
      { symbol: "t_m", meaning: "Main memory access latency (typically 50 to 100 ns)" },
      { symbol: "k", meaning: "Number of hierarchical page table levels (k=1 for single-level; k=2 for two-level paging)" },
    ],
  },
  {
    id: "os-bankers-need-matrix",
    unit: "Unit 5: System Software & Operating Systems",
    category: "Deadlock Avoidance",
    name: "Banker's Algorithm Need Matrix Invariant",
    formula: "Need[i][j] = Max[i][j] - Allocation[i][j]  |  Safety Check: Need_i ≤ Available",
    latex: "\\text{Need}[i][j] = \\text{Max}[i][j] - \\text{Allocation}[i][j], \\quad \\text{Condition}: \\text{Need}_i \\le \\text{Available}",
    explanation: "Dijkstra's Banker's Algorithm prevents deadlock by maintaining the system in a safe state. A process Pi can only be granted requested resources if its remaining Need can be satisfied by current Available resources.",
    examTrap: "When a process finishes, it releases ALL its allocated resources back to the pool: Available_new = Available_old + Allocation_i!",
    variables: [
      { symbol: "Need[i][j]", meaning: "Remaining units of resource type j process Pi may require to finish execution" },
      { symbol: "Max[i][j]", meaning: "Maximum units of resource type j declared by process Pi upon admission" },
      { symbol: "Allocation[i][j]", meaning: "Current units of resource type j allocated to process Pi" },
      { symbol: "Available[j]", meaning: "Current unallocated units of resource type j free in the operating system pool" },
      { symbol: "≤", meaning: "Vector comparison: every component Need[i][j] must be ≤ Available[j] simultaneously" },
    ],
  },
  {
    id: "se-cyclomatic",
    unit: "Unit 6: Software Engineering",
    category: "Software Metrics",
    name: "McCabe's Cyclomatic Complexity",
    formula: "V(G) = E - N + 2·P  |  Single module (P = 1): V(G) = E - N + 2 = Predicate_Nodes + 1",
    latex: "V(G) = E - N + 2P = P_n + 1 = \\text{Number of Bounded Regions} + 1",
    explanation: "Measures software structural complexity by computing the number of linearly independent paths through program source code. Derived from the program's control flow graph.",
    examTrap: "For compound conditions: 'if (A && B)' counts as TWO predicate decisions, contributing 2 to cyclomatic complexity!",
    variables: [
      { symbol: "V(G)", meaning: "Cyclomatic complexity metric: minimum test cases required to achieve 100% branch path coverage" },
      { symbol: "E", meaning: "Number of edges (directed control flow transfers) in the control flow graph" },
      { symbol: "N", meaning: "Number of nodes (sequential basic code blocks) in the control flow graph" },
      { symbol: "P", meaning: "Number of connected components / independent program subroutines (P = 1 for a single program)" },
      { symbol: "Predicate_Nodes", meaning: "Number of conditional decision points (e.g. 'if', 'while', 'case', 'for'; V(G) = Predicate_Nodes + 1)" },
    ],
  },
  {
    id: "se-cocomo-equations",
    unit: "Unit 6: Software Engineering",
    category: "Cost Estimation",
    name: "Basic COCOMO Software Effort Estimation",
    formula: "Effort = a · (KLOC)^b [Person-Months] | Time = c · (Effort)^d [Months]",
    latex: "\\text{Effort} = a \\cdot (\\text{KLOC})^b, \\quad T_{\\text{dev}} = c \\cdot (\\text{Effort})^d, \\quad \\text{Staff} = \\frac{\\text{Effort}}{T_{\\text{dev}}}",
    explanation: "Boehm's Constructive Cost Model estimates engineering person-months and project schedule duration based on project source size in KLOC. Models: Organic (b=1.05), Semi-detached (b=1.12), Embedded (b=1.20).",
    examTrap: "Embedded systems have the highest exponent b = 1.20 due to strict real-time hardware constraints and complex interfacing overhead.",
    variables: [
      { symbol: "Effort", meaning: "Total human engineering effort required (measured in Person-Months, PM)" },
      { symbol: "KLOC", meaning: "Kilo Lines Of Code: software source code size in thousands of lines" },
      { symbol: "^", meaning: "Exponentiation / Power operator: (KLOC)^b accounts for non-linear scale complexity" },
      { symbol: "a, b", meaning: "COCOMO effort parameters: Organic (2.4, 1.05), Semi-detached (3.0, 1.12), Embedded (3.6, 1.20)" },
      { symbol: "c, d", meaning: "Schedule duration parameters: Organic (2.5, 0.38), Semi-detached (2.5, 0.35), Embedded (2.5, 0.32)" },
      { symbol: "Tdev", meaning: "Nominal development project schedule duration in calendar months" },
    ],
  },
  {
    id: "se-halstead-metrics",
    unit: "Unit 6: Software Engineering",
    category: "Software Science",
    name: "Halstead's Software Complexity Metrics",
    formula: "Volume V = N · log2(η) | Difficulty D = (η1 / 2) · (N2 / η2) | Effort E = D · V",
    latex: "N = N_1 + N_2, \\quad \\eta = \\eta_1 + \\eta_2, \\quad V = N \\log_2 \\eta, \\quad D = \\frac{\\eta_1}{2} \\cdot \\frac{N_2}{\\eta_2}, \\quad E = D \\cdot V",
    explanation: "Algorithmic software metrics based on count of tokens: unique operators (η1), unique operands (η2), total operators (N1), and total operands (N2). Measures mental effort required to implement an algorithm.",
    examTrap: "Difficulty is proportional to unique operators η1 and the average usage of operands (N2 / η2).",
    variables: [
      { symbol: "η1", meaning: "Number of distinct unique operators in the code (e.g. '+', '=', 'if', 'return')" },
      { symbol: "η2", meaning: "Number of distinct unique operands in the code (e.g. variable names, numeric constants)" },
      { symbol: "N1", meaning: "Total count of all operator occurrences in the program" },
      { symbol: "N2", meaning: "Total count of all operand occurrences in the program" },
      { symbol: "N", meaning: "Total program length: N = N1 + N2" },
      { symbol: "η (Eta)", meaning: "Program vocabulary size: η = η1 + η2" },
      { symbol: "log2", meaning: "Logarithm base 2: number of bits required to encode each token in vocabulary" },
      { symbol: "V", meaning: "Halstead Program Volume in bits (information content): V = N · log2(η)" },
      { symbol: "D", meaning: "Program Difficulty: D = (η1 / 2) · (N2 / η2)" },
    ],
  },
  {
    id: "dsa-avl-min-nodes",
    unit: "Unit 7: Data Structures & Algorithms",
    category: "Self-Balancing Trees",
    name: "Minimum Nodes in AVL Tree of Height h",
    formula: "N(h) = N(h-1) + N(h-2) + 1  ──►  N(0) = 1, N(1) = 2, N(2) = 4, N(3) = 7, N(4) = 12",
    latex: "N(h) = N(h-1) + N(h-2) + 1, \\quad N(0) = 1, \\; N(1) = 2, \\; N(h) \\approx F_{h+2} - 1",
    explanation: "Calculates the minimum node count needed to construct a valid AVL tree of height h where the balance factor balance invariant (|hL - hR| ≤ 1) holds at every node. Follows Fibonacci-like progression.",
    examTrap: "Check height convention! If the question defines height of single node as 1: N(1) = 1, N(2) = 2, N(3) = 4, N(4) = 7, N(5) = 12.",
    variables: [
      { symbol: "h", meaning: "Height of the AVL tree (standard convention: single-node tree has height h = 0)" },
      { symbol: "N(h)", meaning: "Minimum number of nodes required to construct an AVL tree of height h" },
      { symbol: "N(h-1)", meaning: "Minimum nodes in the taller subtree of height h-1" },
      { symbol: "N(h-2)", meaning: "Minimum nodes in the shorter subtree of height h-2 (maintains balance factor of 1)" },
      { symbol: "+ 1", meaning: "Accounts for the root node itself" },
      { symbol: "F_{h+2}", meaning: "Fibonacci relation: N(h) = Fibonacci(h+3) - 1" },
    ],
  },
  {
    id: "dsa-bplus-order",
    unit: "Unit 7: Data Structures & Algorithms",
    category: "Multi-way Trees",
    name: "B+ Tree Internal Node Order Formula",
    formula: "p · R_p + (p - 1) · K_size ≤ Block_Size  ──►  Solve for max integer order p",
    latex: "p \\cdot R_p + (p - 1) \\cdot K_{\\text{size}} \\le B \\implies p \\le \\left\\lfloor \\frac{B + K_{\\text{size}}}{R_p + K_{\\text{size}}} \\right\\rfloor",
    explanation: "Derives the maximum order p (maximum child block pointers) of an internal node in a B+ Tree such that the node fits entirely inside a single disk block without spanning multiple pages.",
    examTrap: "For LEAF nodes: formula differs! Leaf holds data record pointers (R_d) and a sibling block pointer: p_leaf · (K_size + R_d) + R_p ≤ Block_Size.",
    variables: [
      { symbol: "p", meaning: "Order of internal node: maximum number of child block tree pointers (fan-out)" },
      { symbol: "R_p", meaning: "Byte size of each child block disk pointer (typically 4 to 8 bytes)" },
      { symbol: "K_size", meaning: "Byte size of search key field (e.g. 10 bytes)" },
      { symbol: "p - 1", meaning: "Maximum search keys in an internal node of order p" },
      { symbol: "Block_Size", meaning: "Fixed physical disk block / page size in bytes (e.g. 512, 1024, or 4096 bytes)" },
      { symbol: " ", meaning: "Floor function: takes the integer part because pointer count p must be an integer" },
    ],
  },
  {
    id: "dsa-array-addressing-3d",
    unit: "Unit 7: Data Structures & Algorithms",
    category: "Memory Layout",
    name: "Multi-Dimensional Array Addressing & Pointer Equivalence",
    formula: "2D Row-Major: Base + [i · N + j] · c | 3D Pointer Identity: ar[m][n][o] ≡ *(*(*(ar + m) + n) + o)",
    latex: "\\text{Addr}(A[i][j]) = \\text{Base} + [ (i - \\text{LB}_1) \\cdot N_2 + (j - \\text{LB}_2) ] \\cdot c",
    explanation: "Calculates byte offset of element A[i][j] in row-major memory storage where consecutive rows are laid out contiguously. Column-major swaps dimensions to [ (j - LB_2) · N_1 + (i - LB_1) ].",
    examTrap: "Column-Major formula: Base + [ (j - LB_2)·N_1 + (i - LB_1) ]·c. Notice column index j is multiplied by number of rows N_1!",
    variables: [
      { symbol: "Base", meaning: "Starting memory byte address of first array element A[0][0]" },
      { symbol: "i, j", meaning: "Target row index (i) and column index (j) of the sought array element" },
      { symbol: "N_2", meaning: "Number of columns per row in the 2D array (Row length)" },
      { symbol: "c", meaning: "Element size in memory bytes (e.g. sizeof(int) = 4 bytes)" },
      { symbol: "LB_1, LB_2", meaning: "Lower bounds of first and second array dimensions (0 in C, 1 in Fortran)" },
      { symbol: "*", meaning: "Pointer dereference operator in C: *ptr retrieves the value stored at memory address ptr" },
    ],
  },
  {
    id: "algo-master-theorem",
    unit: "Unit 7: Data Structures & Algorithms",
    category: "Recurrence Relations",
    name: "Master Theorem for Divide-and-Conquer (Extended)",
    formula: "T(n) = a·T(n/b) + Θ(n^c · log^k n)  |  Compare c with log_b(a)  |  Case 2: c = log_b(a)  Θ(n^c · log^(k+1) n)",
    latex: "T(n) = a T(n/b) + \\Theta(n^c \\log^k n) \\implies T(n) = \\begin{cases} \\Theta(n^{\\log_b a}) & c < \\log_b a \\\\ \\Theta(n^c \\log^{k+1} n) & c = \\log_b a \\\\ \\Theta(n^c \\log^k n) & c > \\log_b a \\end{cases}",
    explanation: "Asymptotic recipe for solving divide-and-conquer recurrences. Compares the critical exponent log_b(a) (work done at the leaf leaves) against c (work done splitting/combining at the root).",
    examTrap: "Master Theorem cannot be applied if a < 1, b ≤ 1, or if f(n) is not polynomial (e.g. T(n) = 2T(n/2) + n!).",
    variables: [
      { symbol: "a", meaning: "Number of recursive subproblems generated at each step (a ≥ 1)" },
      { symbol: "b", meaning: "Subproblem size reduction factor (b > 1)" },
      { symbol: "n^c", meaning: "Polynomial growth rate of work done outside recursive calls ('^' denotes power)" },
      { symbol: "log_b(a)", meaning: "Critical exponent determining whether work is leaf-dominated or root-dominated" },
      { symbol: "Θ (Theta)", meaning: "Asymptotically tight complexity bound notation" },
      { symbol: "k", meaning: "Power exponent of the logarithmic factor in non-recursive work (k ≥ 0)" },
    ],
  },
  {
    id: "algo-tower-of-hanoi",
    unit: "Unit 7: Data Structures & Algorithms",
    category: "Recursion",
    name: "Tower of Hanoi Minimum Moves",
    formula: "M(n) = 2·M(n - 1) + 1  ──►  M(n) = 2^n - 1",
    latex: "M(n) = 2M(n-1) + 1 \\implies M(n) = 2^n - 1 = \\Theta(2^n)",
    explanation: "To move n disks from source peg to destination peg using an auxiliary peg: recursively move n-1 disks to auxiliary (M(n-1)), move largest disk to destination (1 move), and move n-1 disks to destination (M(n-1)).",
    examTrap: "For n = 3: 2^3 - 1 = 7 moves. For n = 4: 2^4 - 1 = 15 moves. For n = 64: 2^64 - 1 moves (~585 billion years at 1 move/sec).",
    variables: [
      { symbol: "n", meaning: "Total number of disks on the starting source peg" },
      { symbol: "M(n)", meaning: "Minimum number of valid single-disk moves required to solve the puzzle" },
      { symbol: "2^n", meaning: "2 raised to the power n ('^' denotes exponentiation)" },
      { symbol: "·", meaning: "Arithmetic multiplication operator in recurrence: M(n) = 2 · M(n-1) + 1" },
    ],
  },
  {
    id: "algo-lcs-dp",
    unit: "Unit 7: Data Structures & Algorithms",
    category: "Dynamic Programming",
    name: "Longest Common Subsequence (LCS) Recurrence",
    formula: "L[i,j] = L[i-1,j-1] + 1 if X[i]=Y[j] | else max(L[i-1,j], L[i,j-1])",
    latex: "L[i, j] = \\begin{cases} 0 & i = 0 \\lor j = 0 \\\\ L[i-1, j-1] + 1 & X[i] = Y[j] \\\\ \\max(L[i-1, j], L[i, j-1]) & X[i] \\ne Y[j] \\end{cases}",
    explanation: "Dynamic programming formulation to compute the length of the longest subsequence present in both strings X and Y in the same relative order (not necessarily contiguous). Time and Space: O(m · n).",
    examTrap: "Do not confuse Subsequence (characters do not need to be consecutive) with Substring (characters MUST be contiguous)!",
    variables: [
      { symbol: "X, Y", meaning: "The two input sequences/strings of lengths m and n respectively" },
      { symbol: "i, j", meaning: "Prefix lengths: considering prefix X[1..i] and prefix Y[1..j]" },
      { symbol: "L[i, j]", meaning: "Length of Longest Common Subsequence of prefixes X[1..i] and Y[1..j]" },
      { symbol: "max", meaning: "Maximum function selecting the optimal sub-solution when characters do not match" },
      { symbol: "+ 1", meaning: "Extends the common subsequence length when current characters match (X[i] == Y[j])" },
    ],
  },
  {
    id: "algo-knapsack-01",
    unit: "Unit 7: Data Structures & Algorithms",
    category: "Dynamic Programming",
    name: "0/1 Knapsack DP Recurrence",
    formula: "dp[i, w] = max(dp[i-1, w], dp[i-1, w - w_i] + v_i) if w_i ≤ w | else dp[i-1, w]",
    latex: "dp[i, w] = \\begin{cases} dp[i-1, w] & w_i > w \\\\ \\max(dp[i-1, w], dp[i-1, w - w_i] + v_i) & w_i \\le w \\end{cases}",
    explanation: "Finds the subset of items that maximizes total value without exceeding total weight capacity W. Each item can be selected at most once (0 or 1). Solved via DP in pseudo-polynomial time O(n · W).",
    examTrap: "Fractional Knapsack can be solved greedily in O(n log n). 0/1 Knapsack is NP-Complete and CANNOT be solved greedily!",
    variables: [
      { symbol: "dp[i, w]", meaning: "Maximum profit achievable using a subset of the first i items with knapsack capacity w" },
      { symbol: "w_i", meaning: "Weight of the i-th item" },
      { symbol: "v_i", meaning: "Value / profit of the i-th item" },
      { symbol: "w", meaning: "Current remaining weight capacity of the knapsack (0 ≤ w ≤ W)" },
      { symbol: "max", meaning: "Optimal choice: exclude item i (dp[i-1, w]) vs include item i (dp[i-1, w - w_i] + v_i)" },
    ],
  },
  {
    id: "toc-ardens-theorem",
    unit: "Unit 8: Theory of Computation & Compilers",
    category: "Formal Languages",
    name: "Arden's Theorem for Regular Equations",
    formula: "R = Q + R·P  ──►  R = Q·P*  (Unique solution provided ε ∉ P)",
    latex: "R = Q + RP \\implies R = QP^* \\quad (\\text{provided } \\varepsilon \\notin P)",
    explanation: "Solves linear regular language equations to extract the equivalent regular expression from a Finite Automaton transition diagram. If P contains the empty string ε, the solution is not unique.",
    examTrap: "Arden's form MUST be R = Q + RP (R on left of P). If equation is R = Q + PR, the solution is R = P*Q!",
    variables: [
      { symbol: "R", meaning: "Unknown regular expression / language variable representing paths to target state" },
      { symbol: "Q", meaning: "Regular expression for incoming transitions into state from initial state" },
      { symbol: "P", meaning: "Regular expression for self-loop transitions on the state" },
      { symbol: "* (Star)", meaning: "Kleene Star operator: zero or more repetitions of regular expression P ('*' includes ε)" },
      { symbol: "+", meaning: "Regular expression union / alternative operator (A + B = A ∪ B)" },
      { symbol: "ε (Epsilon)", meaning: "Empty / null string of length 0 (condition requires ε ∉ P for unique solution)" },
    ],
  },
  {
    id: "toc-nfa-dfa-bound",
    unit: "Unit 8: Theory of Computation & Compilers",
    category: "Automata Theory",
    name: "NFA to DFA State Explosion Upper Bound",
    formula: "Max DFA States = 2^n  (where n is the number of states in NFA)",
    latex: "|Q_{\\text{DFA}}| \\le 2^{|Q_{\\text{NFA}}|} = 2^n",
    explanation: "During subset construction (powerset conversion) from an NFA to an equivalent DFA, each DFA state corresponds to a subset of NFA states. Thus, an n-state NFA generates at most 2^n DFA states.",
    examTrap: "Classic exam question: 'Language of all strings where n-th symbol from right is 1'. NFA needs n + 1 states, but minimum DFA strictly requires 2^n states!",
    variables: [
      { symbol: "n", meaning: "Total count of internal states in the Non-Deterministic Finite Automaton (|Q_NFA| = n)" },
      { symbol: "^", meaning: "Exponentiation / Power operator: 2^n denotes 2 raised to the power n" },
      { symbol: "2^n", meaning: "Total number of elements in the power set P(Q), which is the upper bound on DFA states" },
      { symbol: "Dead State", meaning: "The empty set ∅ corresponds to the trap/dead state in the converted DFA" },
    ],
  },
  {
    id: "net-shannon-capacity",
    unit: "Unit 9: Data Communication & Computer Networks",
    category: "Physical Layer",
    name: "Shannon Channel Capacity (Noisy Channel)",
    formula: "C = B · log2(1 + SNR)  ──►  SNR_linear = 10^(SNR_dB / 10)",
    latex: "C = B \\log_2(1 + \\text{SNR}) \\quad \\left[\\text{where } \\text{SNR}_{\\text{linear}} = 10^{\\frac{\\text{SNR}_{\\text{dB}}}{10}}\\right]",
    explanation: "Establishes the theoretical maximum data transmission rate over a noisy channel with Gaussian white noise without error, regardless of modulation scheme.",
    examTrap: "Exams almost always provide SNR in dB (e.g. 30 dB). You MUST convert: SNR = 10^(30/10) = 10^3 = 1000! Then C = B · log2(1 + 1000) ≈ B · 10.",
    variables: [
      { symbol: "C", meaning: "Channel capacity in bits per second (bps)" },
      { symbol: "B", meaning: "Bandwidth of physical channel in Hertz (Hz)" },
      { symbol: "SNR", meaning: "Signal-to-Noise power ratio as a linear ratio (S/N) — NOT in decibels dB!" },
      { symbol: "log2", meaning: "Logarithm base 2: represents binary bit capacity" },
      { symbol: "SNR_dB", meaning: "Signal-to-Noise ratio given in decibels (convert via SNR_linear = 10^(SNR_dB / 10))" },
      { symbol: "^", meaning: "Exponentiation / Power operator in 10^(dB/10)" },
    ],
  },
  {
    id: "net-nyquist-bitrate",
    unit: "Unit 9: Data Communication & Computer Networks",
    category: "Physical Layer",
    name: "Nyquist Maximum Bit Rate (Noiseless Channel)",
    formula: "Bit Rate = 2 · B · log2(L)  (where L = number of signal levels)",
    latex: "\\text{BitRate} = 2B \\log_2(L) \\quad (\\text{bps})",
    explanation: "Defines theoretical maximum data rate of a noiseless transmission channel based on bandwidth B and the discrete signaling levels L available per symbol.",
    examTrap: "If signal has 8 voltage levels, log2(8) = 3 bits/signal level. If B = 4000 Hz, BitRate = 2 · 4000 · 3 = 24,000 bps.",
    variables: [
      { symbol: "Bit Rate", meaning: "Maximum theoretical noiseless transmission throughput in bits per second (bps)" },
      { symbol: "B", meaning: "Bandwidth of channel in Hertz (Hz)" },
      { symbol: "L", meaning: "Number of discrete signal voltage levels / constellation states per symbol" },
      { symbol: "log2(L)", meaning: "Number of data bits carried by each discrete signaling symbol level" },
      { symbol: "2 · B", meaning: "Nyquist sampling rate: maximum baud rate (symbols/sec) achievable without intersymbol interference" },
    ],
  },
  {
    id: "net-csmacd-frame-size",
    unit: "Unit 9: Data Communication & Computer Networks",
    category: "MAC Sublayer",
    name: "CSMA/CD Minimum Frame Size Invariant",
    formula: "L_min ≥ 2 · Propagation_Delay · Bandwidth = 2 · (Distance / Propagation_Speed) · B",
    latex: "L_{\\min} \\ge 2 \\cdot T_p \\cdot B = 2 \\cdot \\left(\\frac{d}{v}\\right) \\cdot B = \\text{RTT} \\cdot B",
    explanation: "Ensures that a transmitting station does not finish sending a frame before collision signals can return from the farthest destination on the Ethernet cable. Frame transmission time must be at least round-trip time (RTT).",
    examTrap: "If bandwidth increases 10-fold (e.g. 10 Mbps to 100 Mbps) while maintaining the same minimum frame size, maximum cable distance MUST decrease by 10-fold!",
    variables: [
      { symbol: "L_min", meaning: "Minimum required frame length in bits (e.g. 64 bytes = 512 bits in standard Ethernet)" },
      { symbol: "T_p", meaning: "One-way propagation delay in seconds (T_p = Distance / Speed = d / v)" },
      { symbol: "2 · T_p", meaning: "Round-Trip Time (RTT / slot time / collision window) in seconds" },
      { symbol: "B", meaning: "Network transmission data bandwidth in bits per second (bps)" },
      { symbol: "d", meaning: "Maximum physical cable distance between the two farthest stations (in meters)" },
      { symbol: "v", meaning: "Signal propagation velocity through cable (typically 2 × 10^8 m/s)" },
    ],
  },
  {
    id: "net-sliding-window-bounds",
    unit: "Unit 9: Data Communication & Computer Networks",
    category: "Flow Control",
    name: "Sliding Window Sequence Number Bounds",
    formula: "Stop-and-Wait: 1-bit (Seq 0..1) | Go-Back-N: W_s + 1 ≤ 2^k | Selective Repeat: W_s + W_r ≤ 2^k (W_s = W_r = 2^(k-1))",
    latex: "\\text{GBN}: W_s \\le 2^k - 1, \\quad \\text{SR}: W_s = W_r \\le 2^{k-1}",
    explanation: "Sequence number space size (2^k for k bits) must be strictly large enough to distinguish retransmissions of old frames from new frames when acknowledgments are lost.",
    examTrap: "For k = 3 bits (8 numbers 0..7): In GBN, max W_s = 7. In Selective Repeat, max W_s = 4! If SR used W_s = 5, sequence number wraparound ambiguity would corrupt data.",
    variables: [
      { symbol: "k", meaning: "Number of bits allocated for the sequence number field in packet header" },
      { symbol: "2^k", meaning: "Total sequence numbers available in the modulus space (0 through 2^k - 1; '^' denotes power)" },
      { symbol: "W_s", meaning: "Sender sliding window size (in frames)" },
      { symbol: "W_r", meaning: "Receiver sliding window size (W_r = 1 in Go-Back-N; W_r = W_s in Selective Repeat)" },
      { symbol: "2^(k-1)", meaning: "Maximum sender and receiver window size in Selective Repeat to prevent overlap" },
    ],
  },
  {
    id: "net-channel-efficiency",
    unit: "Unit 9: Data Communication & Computer Networks",
    category: "Flow Control",
    name: "Sliding Window Channel Utilization (Efficiency η)",
    formula: "η = W_s / (1 + 2·a)  where a = t_p / t_tx = (Distance / v) / (Frame_Size / Bandwidth)",
    latex: "\\eta = \\frac{W_s}{1 + 2a} \\le 1.0, \\quad a = \\frac{T_{\\text{prop}}}{T_{\\text{trans}}} = \\frac{d/v}{L/B}, \\quad \\text{Throughput} = \\eta \\cdot B",
    explanation: "Calculates link utilization efficiency of ARQ flow control protocols. For 100% efficiency, sender window must satisfy W_s ≥ 1 + 2a (window must cover the round-trip delay).",
    examTrap: "For Stop-and-Wait: η = 1 / (1 + 2a). If acknowledgment transmission time is NOT negligible, use η = T_trans / (T_trans + 2·T_prop + T_ack).",
    variables: [
      { symbol: "η (Eta)", meaning: "Link efficiency / utilization ratio (dimensionless fraction: 0.0 to 1.0, or 0% to 100%)" },
      { symbol: "W_s", meaning: "Sender window capacity in frames (W_s = 1 for Stop-and-Wait)" },
      { symbol: "a", meaning: "Propagation-to-transmission delay ratio: a = T_prop / T_trans" },
      { symbol: "t_p", meaning: "One-way cable propagation delay: Distance / Speed" },
      { symbol: "t_tx", meaning: "Frame transmission delay: Frame_Size_bits / Bandwidth_bps" },
    ],
  },
  {
    id: "net-bdp-capacity",
    unit: "Unit 9: Data Communication & Computer Networks",
    category: "Transport Layer",
    name: "Bandwidth-Delay Product (BDP) & Bit Capacity",
    formula: "BDP = Bandwidth · RTT  (Bits in transit to fill the pipe)",
    latex: "\\text{BDP} = B \\times \\text{RTT} \\quad (\\text{bits})",
    explanation: "Determines the maximum amount of unacknowledged data that can be 'in flight' on a network path at any instant. TCP window must be at least BDP to achieve maximum link throughput.",
    examTrap: "Remember that BDP is in BITS. If TCP window options ask for BYTES, divide BDP by 8!",
    variables: [
      { symbol: "BDP", meaning: "Bandwidth-Delay Product: volume of bits required to completely fill the communication pipe" },
      { symbol: "Bandwidth", meaning: "Transmission bandwidth capacity of link in bits per second (bps)" },
      { symbol: "RTT", meaning: "Round-Trip Time latency between sender and receiver in seconds (RTT = 2 · T_prop)" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
    ],
  },
  {
    id: "net-hamming-code",
    unit: "Unit 9: Data Communication & Computer Networks",
    category: "Error Control",
    name: "Hamming Code Parity Bits & Distance Bounds",
    formula: "2^p ≥ m + p + 1  |  Distance d_min ≥ 2t + 1 (to correct t errors)",
    latex: "2^p \\ge m + p + 1, \\quad d_{\\min} \\ge 2t + 1 \\quad (\\text{error correction}), \\quad d_{\\min} \\ge s + 1 \\quad (\\text{detection})",
    explanation: "Calculates the minimum redundant parity bits p required to detect and correct single-bit errors in an m-bit data word. The Hamming distance bounds dictate error detection and correction thresholds.",
    examTrap: "For m = 7 data bits: 2^p ≥ 7 + p + 1  For p=3: 2^3=8 < 11 (fails); For p=4: 2^4=16 ≥ 12 (satisfies). Total codeword length = 7 + 4 = 11 bits.",
    variables: [
      { symbol: "m", meaning: "Number of original message/data information bits" },
      { symbol: "p", meaning: "Number of redundant/parity check bits added at bit positions that are powers of 2 (1, 2, 4, 8...)" },
      { symbol: "2^p", meaning: "Total distinct error syndrome states encoded by p parity bits ('^' denotes power)" },
      { symbol: "d_min", meaning: "Minimum Hamming distance between any two valid codewords in the codebook" },
      { symbol: "t", meaning: "Number of bit errors guaranteed to be corrected simultaneously" },
      { symbol: "s", meaning: "Number of bit errors guaranteed to be detected (d_min ≥ s + 1)" },
    ],
  },
  {
    id: "net-udp-header-hex",
    unit: "Unit 9: Data Communication & Computer Networks",
    category: "Transport Layer",
    name: "UDP Header Hexadecimal Field Offset Decoding",
    formula: "Header = 8 Bytes (16 hex digits): [Src_Port: 4 hex] [Dst_Port: 4 hex] [Length: 4 hex] [Checksum: 4 hex]",
    latex: "\\text{UDP Header} = 8 \\text{ Bytes} = 64 \\text{ bits} \\quad [0\\text{..}1: \\text{SrcPort}, \\; 2\\text{..}3: \\text{DstPort}, \\; 4\\text{..}5: \\text{TotalLen}, \\; 6\\text{..}7: \\text{Checksum}]",
    explanation: "Decodes raw hexadecimal network packet packet sniff traces. Fixed 8-byte UDP header comprises 4 consecutive 16-bit fields: Source Port, Destination Port, Total Length (header + data), and Checksum.",
    examTrap: "To find Payload (Data) length: Payload_Size = Length_field - 8 bytes. If hex dump shows Length as '00 20' = 32 bytes, payload data is 32 - 8 = 24 bytes!",
    variables: [
      { symbol: "Src_Port", meaning: "16-bit source application port number (Bytes 0-1, first 4 hex digits)" },
      { symbol: "Dst_Port", meaning: "16-bit destination application port number (Bytes 2-3, second 4 hex digits)" },
      { symbol: "Length", meaning: "16-bit total length of UDP datagram in bytes (Header 8 bytes + Payload data; Bytes 4-5)" },
      { symbol: "Checksum", meaning: "16-bit one's complement checksum field for error detection (Bytes 6-7)" },
      { symbol: "Hex Digits", meaning: "Every 2 hexadecimal characters represent exactly 1 byte (8 bits)" },
    ],
  },
  {
    id: "ai-astar-admissibility",
    unit: "Unit 10: Artificial Intelligence",
    category: "Heuristic Search",
    name: "A* Algorithm Admissibility & Monotonicity",
    formula: "Admissibility: h(n) ≤ h*(n)  |  Monotonicity / Consistency: h(n) ≤ c(n, a, n') + h(n')",
    latex: "h(n) \\le h^*(n) \\quad (\\text{admissible}), \\quad h(n) \\le c(n, a, n') + h(n') \\quad (\\text{consistent})",
    explanation: "Heuristic h(n) is admissible if it never overestimates the true cost to reach the goal. It is consistent (monotonic) if it satisfies the triangle inequality. Consistency guarantees optimal path without revisiting closed nodes.",
    examTrap: "Every consistent heuristic is admissible, but NOT every admissible heuristic is consistent! If h(n) = 0 for all nodes, A* degenerates into Dijkstra's Algorithm.",
    variables: [
      { symbol: "h(n)", meaning: "Estimated heuristic cost from current node n to the target goal node" },
      { symbol: "h*(n)", meaning: "True, optimal minimal cost path from node n to the goal node" },
      { symbol: "c(n, a, n')", meaning: "Step cost of taking action a to transition from state n to successor state n'" },
      { symbol: "≤", meaning: "Less than or equal to: heuristic must underestimate or equal true optimal cost" },
    ],
  },
  {
    id: "ai-perceptron-update",
    unit: "Unit 10: Artificial Intelligence",
    category: "Neural Networks",
    name: "Perceptron Learning Rule & Weight Update",
    formula: "Δw_i = η · (y - y_hat) · x_i  ──►  w_i^(t+1) = w_i^(t) + Δw_i",
    latex: "w_i^{(t+1)} = w_i^{(t)} + \\eta (y - \\hat{y}) x_i \\quad \\left[\\text{where } \\hat{y} = \\text{step}\\left(\\sum w_i x_i - \\theta\\right)\\right]",
    explanation: "Iterative weight adjustment rule for single-layer perceptron. If prediction matches label (y = y_hat), weights remain unchanged; on misclassification, weights shift toward or away from input vector.",
    examTrap: "Single-layer perceptron can ONLY learn linearly separable functions! It cannot solve XOR unless an extra hidden layer is added.",
    variables: [
      { symbol: "w_i", meaning: "Weight assigned to input connection i" },
      { symbol: "η (Eta)", meaning: "Learning rate parameter (0.0 < η ≤ 1.0, controls magnitude of gradient step)" },
      { symbol: "y", meaning: "True target label (ground truth: e.g. 0 or 1, or -1 or +1)" },
      { symbol: "y_hat", meaning: "Current perceptron prediction output from activation function" },
      { symbol: "x_i", meaning: "Input feature component value at index i" },
      { symbol: "(t+1)", meaning: "Time step / iteration index representing the updated state" },
    ],
  },
  {
    id: "ai-fuzzy-composition",
    unit: "Unit 10: Artificial Intelligence",
    category: "Fuzzy Logic",
    name: "Fuzzy Set Operations & Max-Min Composition",
    formula: "A ∩ B = min(μA, μB) | A ∪ B = max(μA, μB) | Max-Min: (R ∘ S)(x, z) = max_y [ min(R(x,y), S(y,z)) ]",
    latex: "\\mu_{A \\cap B}(x) = \\min(\\mu_A(x), \\mu_B(x)), \\quad \\mu_{R \\circ S}(x, z) = \\max_y \\left[ \\min(R(x,y), S(y,z)) \\right]",
    explanation: "Standard Zadeh operations for fuzzy sets. Membership degrees range continuously from 0.0 to 1.0. Max-Min composition combines relation R(X, Y) and relation S(Y, Z) analogous to matrix multiplication with (max, min) replacing (+, ·).",
    examTrap: "In Max-Min composition: find the minimum of each pair (R(x,y), S(y,z)), then take the MAXIMUM among all those minimums for the row-column combination.",
    variables: [
      { symbol: "μA(x)", meaning: "Degree of membership of element x in fuzzy set A (0.0 ≤ μA(x) ≤ 1.0)" },
      { symbol: "∩", meaning: "Fuzzy intersection operator (= min(μA, μB))" },
      { symbol: "∪", meaning: "Fuzzy union operator (= max(μA, μB))" },
      { symbol: "R ∘ S", meaning: "Max-Min composition of fuzzy relation matrix R and fuzzy relation matrix S" },
      { symbol: "max_y", meaning: "Outer maximum operator evaluated across all connecting elements y in intermediate domain Y" },
    ],
  },
  {
    id: "web-latency-breakdown",
    unit: "Unit 11: Web Technologies & Information Systems",
    category: "Web Performance",
    name: "Web Transmission & Latency Breakdown",
    formula: "T_total = T_dns + T_tcp (1 RTT) + T_tls (1-2 RTT) + T_http (RTT) + Content_Size / Bandwidth",
    latex: "T_{\\text{total}} = T_{\\text{DNS}} + \\text{RTT}_{\\text{TCP}} + 2\\text{RTT}_{\\text{TLS}} + \\text{RTT}_{\\text{HTTP}} + \\frac{\\text{Size}}{B}",
    explanation: "End-to-end breakdown of HTTP page load latency. Every new unpersisted TCP connection incurs 1 RTT for TCP 3-way handshake, 1 to 2 RTTs for TLS key exchange, and 1 RTT for HTTP GET request/response headers.",
    examTrap: "HTTP/1.1 Keep-Alive / Persistent Connections eliminates the TCP and TLS handshakes for subsequent asset requests on the same host.",
    variables: [
      { symbol: "T_total", meaning: "Total user-perceived page load latency in seconds" },
      { symbol: "T_dns", meaning: "Domain Name System resolution latency to translate domain into IP address" },
      { symbol: "RTT", meaning: "Round Trip Time between client browser and web server" },
      { symbol: "Size", meaning: "Payload content size in bits (HTML, CSS, JavaScript, images)" },
      { symbol: "B", meaning: "Available download bandwidth capacity in bits per second (bps)" },
    ],
  },
  {
    id: "oop-class-layout",
    unit: "Unit 12: Object-Oriented Programming",
    category: "C++ Object Model",
    name: "Object Memory Layout & Virtual Pointer Overhead",
    formula: "Empty Class Size = 1 Byte | Polymorphic Class Size = Member_Sizes + sizeof(vptr)",
    latex: "\\text{Size}(\\text{Class}) = \\text{Align}\\left( \\sum \\text{sizeof}(\\text{member}_i) + [\\text{sizeof}(\\text{vptr}) \\text{ if virtual}] \\right)",
    explanation: "C++ object memory footprint. An empty class has non-zero size (1 byte) to guarantee distinct addresses in memory arrays. Declaring ANY virtual function adds a virtual table pointer (vptr, 4 or 8 bytes) to the object instance.",
    examTrap: "Static variables do NOT contribute to object instance size (they are allocated once in static memory, not per instance)!",
    variables: [
      { symbol: "vptr", meaning: "Virtual table pointer pointing to class vtable (4 bytes in 32-bit architecture, 8 bytes in 64-bit)" },
      { symbol: "Member_Sizes", meaning: "Sum of byte sizes of all non-static instance data members" },
      { symbol: "Padding", meaning: "Structure alignment padding bytes inserted by compiler to align fields on word boundaries" },
      { symbol: "sizeof()", meaning: "Compile-time operator returning byte storage size of a data type or object" },
    ],
  },
  {
    id: "iot-battery-life",
    unit: "Unit 13: Internet of Things",
    category: "Embedded Systems",
    name: "IoT Sensor Battery Lifetime Estimation",
    formula: "Lifetime (hours) = Battery_Capacity / I_avg | I_avg = (T_active·I_active + T_sleep·I_sleep) / (T_active + T_sleep)",
    latex: "\\text{Lifetime} = \\frac{C_{\\text{battery}}}{I_{\\text{avg}}}, \\quad I_{\\text{avg}} = \\frac{T_{\\text{act}} \\cdot I_{\\text{act}} + T_{\\text{sleep}} \\cdot I_{\\text{sleep}}}{T_{\\text{act}} + T_{\\text{sleep}}}",
    explanation: "Calculates operating life of duty-cycled battery-powered IoT sensor nodes. Active radio transmission draws heavy current, whereas low-power sleep states draw microamperes.",
    examTrap: "Remember that Lifetime is in hours! Divide by 24 for days, or 8760 for years.",
    variables: [
      { symbol: "C_battery", meaning: "Battery capacity in milliampere-hours (mAh)" },
      { symbol: "I_avg", meaning: "Duty-cycle weighted average current draw in milliamperes (mA)" },
      { symbol: "T_act, T_sleep", meaning: "Time spent in active mode vs deep sleep mode per duty cycle" },
      { symbol: "I_act, I_sleep", meaning: "Current drawn during active radio transmission vs deep sleep" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
    ],
  },
  {
    id: "ecom-set-dual-sig",
    unit: "Unit 14: E-Commerce & Cryptography",
    category: "Electronic Payments",
    name: "SET Protocol Dual Signature Formulation",
    formula: "DS = E_Kpriv [ H( H(PI) || H(OI) ) ]  ──►  Merchant sees OI; Bank sees PI",
    latex: "\\text{DS} = E_{K_{\\text{priv\\_cardholder}}}\\left( H( H(\\text{PI}) \\mathbin{\\Vert} H(\\text{OI}) ) \\right)",
    explanation: "Secure Electronic Transaction (SET) protocol mechanism. Connects order information (OI) for the merchant with payment instructions (PI) for the bank without revealing customer credit card details to the merchant or order details to the bank.",
    examTrap: "Dual signature is verified by both parties: Merchant computes H(OI), gets H(PI) from customer, and checks signature against H(H(PI) || H(OI)).",
    variables: [
      { symbol: "PI", meaning: "Payment Instructions (credit card number, CVV, amount intended exclusively for acquiring bank)" },
      { symbol: "OI", meaning: "Order Information (items purchased, quantities, delivery address intended for merchant)" },
      { symbol: "H", meaning: "One-way cryptographic hash function (e.g. SHA-256 producing message digest)" },
      { symbol: "||", meaning: "String concatenation operator combining two message digests" },
      { symbol: "E_Kpriv", meaning: "Asymmetric digital signature encryption using cardholder's private key" },
    ],
  },
  {
    id: "ecom-rsa-cryptography",
    unit: "Unit 14: E-Commerce & Cryptography",
    category: "Public-Key Cryptography",
    name: "RSA Asymmetric Cryptography Formulation",
    formula: "n = p · q | φ(n) = (p-1)(q-1) | e · d ≡ 1 (mod φ(n)) | Cipher: C = M^e mod n | Plain: M = C^d mod n",
    latex: "n = pq, \\quad \\phi(n) = (p-1)(q-1), \\quad e \\cdot d \\equiv 1 \\pmod{\\phi(n)}, \\quad C = M^e \\bmod n, \\quad M = C^d \\bmod n",
    explanation: "Rivest-Shamir-Adleman asymmetric cryptosystem based on mathematical hardness of integer factorization. Public key is (e, n); private decryption key is (d, n).",
    examTrap: "Private key d is computed modulo φ(n) = (p-1)(q-1), NOT modulo n! But encryption/decryption (C = M^e mod n) is strictly modulo n!",
    variables: [
      { symbol: "p, q", meaning: "Two distinct large secret prime numbers" },
      { symbol: "n", meaning: "Modulus used for both public and private keys (n = p · q)" },
      { symbol: "φ(n) (Phi)", meaning: "Euler's Totient function: count of positive integers coprime to n (= (p-1)(q-1))" },
      { symbol: "e", meaning: "Public encryption exponent: must satisfy 1 < e < φ(n) and gcd(e, φ(n)) = 1" },
      { symbol: "d", meaning: "Private decryption exponent: multiplicative inverse of e modulo φ(n)" },
      { symbol: "^", meaning: "Exponentiation / Power operator: M^e is M raised to power e" },
      { symbol: "mod", meaning: "Modulo operator: returns remainder of division by n" },
      { symbol: "M, C", meaning: "Plaintext integer message M (0 ≤ M < n) and encrypted ciphertext integer C" },
    ],
  },
  {
    id: "mm-pcm-telephony",
    unit: "Unit 15: Computer Graphics & Multimedia",
    category: "Digital Audio",
    name: "PCM Telephony Standard Bitrate (DS0 Channel)",
    formula: "Bitrate = f_s · n = (2 · f_max) · n = 8000 samples/sec · 8 bits = 64 kbps",
    latex: "\\text{Bitrate} = f_s \\times n = (2 \\times f_{\\max}) \\times n = 8000 \\times 8 = 64 \\text{ kbps} \\quad (\\text{DS0})",
    explanation: "Telephony voice bandwidth is filtered to 4 kHz (300 Hz - 3400 Hz). Nyquist sampling rate requires 2 × 4000 = 8000 samples/second. With 8 bits/sample (μ-law/A-law), bandwidth is exactly 64 kbps.",
    examTrap: "For a T1 carrier (24 DS0 channels + 1 framing bit): Frame = 24 × 8 + 1 = 193 bits. Bitrate = 193 bits × 8000 frames/sec = 1.544 Mbps!",
    variables: [
      { symbol: "f_max", meaning: "Maximum analog audio frequency in voice band (4 kHz = 4000 Hz)" },
      { symbol: "f_s", meaning: "Nyquist sampling frequency (= 2 · f_max = 8000 samples per second)" },
      { symbol: "n", meaning: "Quantization resolution in bits per sample (8 bits = 256 quantization levels)" },
      { symbol: "Bitrate", meaning: "Digital transmission throughput in kilobits per second (64 kbps = standard DS0 channel)" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
    ],
  },
  {
    id: "mm-nyquist-audio",
    unit: "Unit 15: Computer Graphics & Multimedia",
    category: "Digital Audio",
    name: "Audio Sampling & Uncompressed Bitrate",
    formula: "f_s ≥ 2 · f_max | Bitrate = f_s · Bit_Depth · Channels  (CD: 44.1 kHz · 16 · 2 = 1411.2 kbps)",
    latex: "\\text{Bitrate} = f_s \\times B \\times N_{\\text{channels}} \\quad (f_s \\ge 2 f_{\\max})",
    explanation: "Nyquist-Shannon sampling theorem. Prevents frequency aliasing by sampling at least twice the maximum audible bandwidth. Audio CD samples at 44.1 kHz (covering human hearing up to 20 kHz) with 16-bit stereo resolution.",
    examTrap: "Compact Disc (CD) storage: 1 minute of uncompressed stereo CD audio = (44100 × 16 × 2 × 60) / (8 × 1024 × 1024) ≈ 10.09 Megabytes (MB)!",
    variables: [
      { symbol: "f_s", meaning: "Nyquist audio sampling frequency in Hertz (Hz; e.g. 44,100 Hz for CD audio)" },
      { symbol: "f_max", meaning: "Highest analog audio frequency present in signal (human ear audible limit ≈ 20 kHz)" },
      { symbol: "Bit_Depth (B)", meaning: "Quantization resolution in bits per sample (e.g. 16-bit audio provides 2^16 = 65,536 levels)" },
      { symbol: "Channels", meaning: "Number of audio sound channels (1 for Mono, 2 for Stereo audio)" },
      { symbol: "Bitrate", meaning: "Uncompressed PCM digital throughput: Bitrate = f_s · B · Channels in bps" },
      { symbol: "·", meaning: "Arithmetic multiplication operator" },
    ],
  },
];

// ─── Unit Icon Mapping ───────────────────────────────────────────────
const UNIT_ICONS: Record<string, string> = {
  "Unit 1": "[FORMULA]",
  "Unit 2": "[CO]",
  "Unit 3": "",
  "Unit 4": "[DBMS]",
  "Unit 5": "[OS]",
  "Unit 6": "[SE]",
  "Unit 7": "[DSA]",
  "Unit 8": "[TOC]",
  "Unit 9": "[CN]",
  "Unit 10": "[AI]",
  "Unit 11": "[WEB]",
  "Unit 12": "[OOP]",
  "Unit 13": "[IOT]",
  "Unit 14": "[ECOM]",
  "Unit 15": "[CG]",
};

function getUnitIcon(unit: string): string {
  for (const [key, icon] of Object.entries(UNIT_ICONS)) {
    if (unit.startsWith(key)) return icon;
  }
  return "[MODULE]";
}

// ─── Examination Custom Symbols Glossary Component ───────────────────
function ExamSymbolsGlossary() {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("ALL");

  const categories = [
    "ALL",
    "Arithmetic & Powers",
    "Logic & Set Theory",
    "Theory of Computation",
    "Databases & Relations",
    "Complexity & Hardware",
  ];

  const filteredSymbols = useMemo(() => {
    return EXAM_SYMBOLS_DATA.filter((sym) => {
      const matchesCat = selectedCat === "ALL" || sym.category === selectedCat;
      if (!matchesCat) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        sym.symbol.toLowerCase().includes(q) ||
        sym.name.toLowerCase().includes(q) ||
        sym.meaning.toLowerCase().includes(q) ||
        sym.examContext.toLowerCase().includes(q) ||
        sym.example.toLowerCase().includes(q)
      );
    });
  }, [search, selectedCat]);

  return (
    <div className="mb-6 bg-white border border-[#E6E4DF] rounded-xl shadow-xs overflow-hidden transition-all print:border-gray-400">
      {/* Header bar / Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-3.5 bg-[#FAF9F5] hover:bg-[#F4F3EF] flex items-center justify-between transition-colors border-b border-[#E6E4DF] text-left"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-base sm:text-lg">[MODULE]</span>
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-[#2F3437] flex items-center gap-2">
              <span>Official Examination Symbol & Notation Glossary</span>
              <span className="text-[10px] bg-[#EFEFEA] text-[#57564F] px-2 py-0.5 rounded-full font-mono font-semibold">
                {EXAM_SYMBOLS_DATA.length} Symbols
              </span>
            </h2>
            <p className="text-[11px] text-[#787774] mt-0.5">
              Decodes shorthand notations, power markers (^), logic symbols, and operators used in UGC NET & Bihar STET papers
            </p>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-[#787774] px-2 py-1 rounded bg-white border border-[#E6E4DF]">
          {isOpen ? "Hide ▲" : "View Notations ▼"}
        </span>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="p-4 sm:p-5">
          {/* Controls: Search & Category Chips */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
            <div className="relative flex-1 sm:max-w-xs">
              <input
                type="text"
                placeholder="Search symbol (e.g. ^, mod, ceil, xor)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 bg-[#FAF9F6] border border-[#E6E4DF] rounded-lg text-xs text-[#2F3437] placeholder:text-[#787774] focus:outline-none focus:border-[#2F3437]"
              />
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-[#787774]">
                [SEARCH]
              </span>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#787774] hover:text-[#2F3437]"
                >
                  ×
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                    selectedCat === cat
                      ? "bg-[#2F3437] text-white shadow-xs"
                      : "bg-[#F4F3EF] text-[#57564F] hover:bg-[#EAE8E1] border border-[#E6E4DF]"
                  }`}
                >
                  {cat === "ALL" ? "All Domains" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Symbols Grid */}
          {filteredSymbols.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSymbols.map((item) => (
                <div
                  key={item.symbol + item.name}
                  className="p-3 rounded-lg border border-[#EAE8E1] bg-[#FAF9F6] flex flex-col justify-between hover:border-[#2F3437] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-sm sm:text-base font-extrabold text-[#2F3437] bg-white px-2 py-0.5 rounded border border-[#E6E4DF]">
                        {item.symbol}
                      </span>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-[#787774] bg-white px-1.5 py-0.5 rounded border border-[#EAE8E1]">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-[#2F3437] mb-1">
                      {item.name}
                    </h4>

                    <p className="text-[11px] text-[#57564F] leading-relaxed mb-2">
                      {item.meaning}
                    </p>

                    <div className="p-2 bg-[#FBF9F0] border border-[#F2ECC8] rounded text-[10px] text-[#714E15] leading-snug mb-2">
                      <span className="font-bold">[WARNING] Paper Context: </span>
                      {item.examContext}
                    </div>
                  </div>

                  <div className="pt-1.5 border-t border-[#ECEBE5] flex items-center justify-between text-[10px] text-[#787774]">
                    <span className="font-semibold">Example:</span>
                    <span className="font-mono text-[#2F3437] font-medium bg-white px-1.5 py-0.5 rounded border border-[#E6E4DF] max-w-[80%] truncate">
                      {item.example}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-xs text-[#787774]">
              No symbol matches &ldquo;{search}&rdquo;. Try another search keyword.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Single Formula Card Component ───────────────────────────────────
function FormulaCard({ item }: { item: FormulaItem }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-[#E6E4DF] rounded-xl p-5 shadow-xs hover:border-[#2F3437] transition-all flex flex-col justify-between print:border-gray-400 print:shadow-none">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#787774] bg-[#F4F3EF] px-2 py-0.5 rounded border border-[#E6E4DF]">
              {item.category}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[#2F3437] mt-1.5 leading-snug">
              {item.name}
            </h3>
          </div>
          <button
            onClick={handleCopy}
            className="text-[11px] font-mono px-2 py-1 rounded bg-[#F4F3EF] hover:bg-[#EAE8E1] text-[#57564F] border border-[#E6E4DF] transition-colors flex-shrink-0 print:hidden"
            title="Copy formula text"
          >
            {copied ? "[CORRECT] Copied" : "Copy"}
          </button>
        </div>

        {/* Formula Display Box */}
        <div className="my-3 p-3 bg-[#FAF9F5] border border-[#E6E4DF] rounded-lg">
          <p className="font-mono text-xs sm:text-sm font-semibold text-[#2F3437] break-all leading-relaxed">
            {item.formula}
          </p>
        </div>

        {/* Explanation */}
        <p className="text-xs text-[#57564F] leading-relaxed mb-3">
          {item.explanation}
        </p>

        {/* Variables & Exam Notation List */}
        {item.variables && item.variables.length > 0 && (
          <div className="mb-3 pt-2.5 border-t border-[#F0EFEA]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#787774] flex items-center gap-1">
                <span></span>
                <span>Letter & Symbol Meanings ({item.variables.length}):</span>
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-[#57564F]">
              {item.variables.map((v) => (
                <div
                  key={v.symbol}
                  className="flex items-start gap-2 p-1.5 rounded bg-[#FAF9F6] border border-[#F0EFEA] hover:border-[#E0DED9] transition-colors"
                >
                  <span className="font-mono font-bold text-[11px] text-[#2F3437] bg-white px-1.5 py-0.5 rounded border border-[#E6E4DF] shrink-0">
                    {v.symbol}
                  </span>
                  <span className="text-[11px] text-[#57564F] leading-snug break-words">
                    {v.meaning}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Exam Trap Alert Box */}
      {item.examTrap && (
        <div className="mt-3 p-2.5 bg-[#FBEAE5] border border-[#F5C7BC] rounded-lg text-xs text-[#9A3412] leading-snug">
          <span className="font-bold">[WARNING] Exam Trap: </span>
          {item.examTrap}
        </div>
      )}
    </div>
  );
}

// ─── Main Multi-Tabbed Component ─────────────────────────────────────
export default function FormulaSheet() {
  const [selectedUnit, setSelectedUnit] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter formulas by tab and query
  const filteredFormulas = useMemo(() => {
    return FORMULAS_DATA.filter((item) => {
      // Unit filter
      const matchesUnit =
        selectedUnit === "ALL" ||
        item.unit.startsWith(selectedUnit.split(":")[0]);

      // Query filter
      if (!matchesUnit) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inVariables = item.variables?.some(
        (v) =>
          v.symbol.toLowerCase().includes(q) ||
          v.meaning.toLowerCase().includes(q)
      );

      return (
        item.name.toLowerCase().includes(q) ||
        item.formula.toLowerCase().includes(q) ||
        item.explanation.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.unit.toLowerCase().includes(q) ||
        inVariables
      );
    });
  }, [selectedUnit, searchQuery]);

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#151515] print:bg-white print:text-black">
      {/* ── Sticky Header Navigation ──────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b border-[#D8D2C7] bg-[#EFECE6]/95 backdrop-blur-md px-4 sm:px-6 py-3 print:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandLogo href="/" size="sm" />
            <span className="text-[#A5A098] font-mono text-xs hidden sm:inline">|</span>
            <span className="font-sans text-xs font-semibold text-[#151515] uppercase tracking-wider hidden sm:inline">
              [FM] 15-Unit Formula Reference &amp; Notation
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/mock-exams"
              className="px-3 py-1.5 rounded-lg bg-[#2F3437] text-white text-xs font-semibold hover:bg-[#1E2224] transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>[MOCK]</span>
              <span className="hidden sm:inline">Mock Exams</span>
            </Link>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-white border border-[#E0DED9] text-[#2F3437] text-xs font-semibold hover:border-[#2F3437] transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>️</span>
              <span className="hidden sm:inline">Print / Export PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Canvas ───────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 print:p-0">
        {/* Title Banner */}
        <div className="mb-6 border-b border-[#E6E4DF] pb-5 print:mb-3 print:pb-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#8F3B2C] uppercase tracking-wider">
                Multi-Unit Mathematical Reference & Notation Guide
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2F3437] mt-1">
                Computer Science Formulas & Exam Symbol Repository
              </h1>
              <p className="text-xs sm:text-sm text-[#787774] mt-1">
                Detailed formulas with variable notation, units, and custom paper symbols (^, ⊕, mod, ceil/floor) across all 15 syllabus units
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="w-full sm:w-72 relative print:hidden">
              <input
                type="text"
                placeholder="Search formulas, variables, symbols..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-2 bg-white border border-[#E6E4DF] rounded-lg text-xs sm:text-sm text-[#2F3437] placeholder:text-[#787774] focus:outline-none focus:border-[#2F3437]"
              />
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-[#787774]">
                [SEARCH]
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#787774] hover:text-[#2F3437]"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Interactive Examination Custom Symbols Glossary ───────── */}
        <ExamSymbolsGlossary />

        {/* ── Unit Tabs Selector (Horizontal Multi-Tab Bar) ─────────── */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-none print:hidden">
          <div className="flex items-center gap-1.5 min-w-max">
            {/* All Units Tab */}
            <button
              onClick={() => setSelectedUnit("ALL")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedUnit === "ALL"
                  ? "bg-[#2F3437] text-white shadow-xs"
                  : "bg-white text-[#57564F] hover:bg-[#EFEFEA] border border-[#E6E4DF]"
              }`}
            >
              [SYLLABUS] All Units ({FORMULAS_DATA.length})
            </button>

            {/* Unit Tabs 1 through 15 */}
            {SYLLABUS_UNITS.map((unit) => {
              const prefix = unit.split(":")[0];
              const isSelected = selectedUnit === unit || selectedUnit === prefix;
              const unitNum = getUnitNumber(unit);
              const count = FORMULAS_DATA.filter((f) => f.unit.startsWith(prefix)).length;

              return (
                <button
                  key={unit}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#2F3437] text-white shadow-xs"
                      : "bg-white text-[#57564F] hover:bg-[#EFEFEA] border border-[#E6E4DF]"
                  }`}
                >
                  <span>{getUnitIcon(unit)}</span>
                  <span>U{unitNum}</span>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1 py-0.2 rounded font-mono ${
                        isSelected ? "bg-white/20 text-white" : "bg-[#F0EFEA] text-[#787774]"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active Tab Indicator / Search Stat ────────────────────── */}
        <div className="mb-4 flex items-center justify-between text-xs text-[#787774] px-1">
          <p>
            {selectedUnit === "ALL" ? (
              <span>Showing all categories ({filteredFormulas.length} formulas)</span>
            ) : (
              <span>
                Active Tab: <strong className="text-[#2F3437]">{selectedUnit}</strong> ({filteredFormulas.length} formulas)
              </span>
            )}
          </p>
          {selectedUnit !== "ALL" && (
            <button
              onClick={() => setSelectedUnit("ALL")}
              className="text-[#8F3B2C] hover:underline font-semibold"
            >
              Show all units
            </button>
          )}
        </div>

        {/* ── Formulas Grid ─────────────────────────────────────────── */}
        {filteredFormulas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            {filteredFormulas.map((item) => (
              <FormulaCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-[#E6E4DF] rounded-xl">
            <span className="text-3xl mb-2 block">[FORMULA]</span>
            <p className="text-sm font-bold text-[#2F3437]">No formulas found matching query</p>
            <p className="text-xs text-[#787774] mt-1">Try clearing your search term or select another unit tab.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedUnit("ALL");
              }}
              className="mt-3 px-3 py-1.5 bg-[#2F3437] text-white rounded-lg text-xs font-semibold"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* ── Legal & Exam Statutory Footer ─────────────────────────── */}
        <footer className="mt-16 pt-8 border-t border-[#E6E4DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787774] font-sans print:hidden">
          <p>
            True Exam Preparation (TEP) is an independent non-commercial study platform. Not affiliated with NTA, UGC, or BSEB.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/disclaimer" className="hover:text-[#2F3437] transition-colors">
              Exam Disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-[#2F3437] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#2F3437] transition-colors">
              Terms of Service
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
