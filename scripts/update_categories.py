# scripts/update_categories.py
import re

# Update part1_data.py
with open("scripts/part1_data.py", "r", encoding="utf-8") as f:
    p1 = f.read()

# In part1: Q1-8 is English, Q9-30 is Hindi
# Replace "category": "Language (Qualifying)" based on Q id
lines1 = p1.split("\n")
new_lines1 = []
curr_id = 1
for line in lines1:
    if '"id":' in line:
        m = re.search(r'"id":\s*(\d+)', line)
        if m:
            curr_id = int(m.group(1))
    if '"category": "Language (Qualifying)"' in line:
        if curr_id <= 8:
            line = line.replace('"category": "Language (Qualifying)"', '"category": "English Language"')
        else:
            line = line.replace('"category": "Language (Qualifying)"', '"category": "Hindi Language"')
    new_lines1.append(line)

with open("scripts/part1_data.py", "w", encoding="utf-8") as f:
    f.write("\n".join(new_lines1))
print("part1_data.py updated")

# Update part2_data.py
with open("scripts/part2_data.py", "r", encoding="utf-8") as f:
    p2 = f.read()

lines2 = p2.split("\n")
new_lines2 = []
curr_id = 31
for line in lines2:
    if '"id":' in line:
        m = re.search(r'"id":\s*(\d+)', line)
        if m:
            curr_id = int(m.group(1))
    if '"category": "General Studies"' in line:
        if curr_id <= 38:
            new_cat = "Elementary Mathematics"
        elif curr_id <= 46:
            new_cat = "General Science"
        elif curr_id <= 53:
            new_cat = "Current Affairs & Tech"
        elif curr_id <= 62:
            new_cat = "Geography & Bihar GK"
        else:
            new_cat = "Indian National Movement"
        line = line.replace('"category": "General Studies"', f'"category": "{new_cat}"')
    new_lines2.append(line)

with open("scripts/part2_data.py", "w", encoding="utf-8") as f:
    f.write("\n".join(new_lines2))
print("part2_data.py updated")

# Mapping for CS part3a:
cat_map_3a = {
    71: "Digital Logic",
    72: "Digital Logic",
    73: "Digital Logic",
    74: "Digital Logic",
    75: "Digital Logic",
    76: "Digital Logic",
    77: "Digital Logic",
    78: "Computer Architecture",
    79: "Digital Logic",
    80: "Digital Logic",
    81: "Digital Logic",
    82: "Computer Architecture",
    83: "Computer Networks",
    84: "Digital Logic",
    85: "Digital Logic",
    86: "Digital Logic",
    87: "Digital Logic",
    88: "Data Structures",
    89: "Algorithms",
    90: "Data Structures",
    91: "Data Structures",
    92: "Data Structures",
    93: "Programming",
    94: "Data Structures",
    95: "Algorithms",
    96: "Data Structures",
    97: "Data Structures",
    98: "Programming",
    99: "Algorithms",
    100: "Algorithms",
    101: "Algorithms",
    102: "Algorithms",
    103: "Algorithms",
    104: "Algorithms",
    105: "Data Structures",
    106: "Data Structures",
    107: "Operating Systems",
    108: "Operating Systems",
    109: "Operating Systems",
    110: "Operating Systems"
}

with open("scripts/part3a_data.py", "r", encoding="utf-8") as f:
    p3a = f.read()

lines3a = p3a.split("\n")
new_lines3a = []
curr_id = 71
for line in lines3a:
    if '"id":' in line:
        m = re.search(r'"id":\s*(\d+)', line)
        if m:
            curr_id = int(m.group(1))
    if '"category": "Computer Science & Applications"' in line:
        new_cat = cat_map_3a.get(curr_id, "Computer Science")
        line = line.replace('"category": "Computer Science & Applications"', f'"category": "{new_cat}"')
    new_lines3a.append(line)

with open("scripts/part3a_data.py", "w", encoding="utf-8") as f:
    f.write("\n".join(new_lines3a))
print("part3a_data.py updated")

# Mapping for CS part3b:
cat_map_3b = {
    111: "Operating Systems",
    112: "Operating Systems",
    113: "Operating Systems",
    114: "Operating Systems",
    115: "Operating Systems",
    116: "Operating Systems",
    117: "Operating Systems",
    118: "Operating Systems",
    119: "Operating Systems",
    120: "Database Systems",
    121: "Database Systems",
    122: "Database Systems",
    123: "Database Systems",
    124: "Database Systems",
    125: "Computer Networks",
    126: "Computer Networks",
    127: "Computer Networks",
    128: "Computer Networks",
    129: "Computer Networks",
    130: "IoT & Embedded",
    131: "Software Engineering",
    132: "Software Engineering",
    133: "Software Engineering",
    134: "Software Engineering",
    135: "Software Engineering",
    136: "OOP",
    137: "OOP",
    138: "OOP",
    139: "OOP",
    140: "Web Technologies",
    141: "Web Technologies",
    142: "Theory of Computation",
    143: "Theory of Computation",
    144: "IoT & Embedded",
    145: "IoT & Embedded",
    146: "Artificial Intelligence",
    147: "Artificial Intelligence",
    148: "E-Commerce",
    149: "E-Commerce",
    150: "Multimedia"
}

with open("scripts/part3b_data.py", "r", encoding="utf-8") as f:
    p3b = f.read()

lines3b = p3b.split("\n")
new_lines3b = []
curr_id = 111
for line in lines3b:
    if '"id":' in line:
        m = re.search(r'"id":\s*(\d+)', line)
        if m:
            curr_id = int(m.group(1))
    if '"category": "Computer Science & Applications"' in line:
        new_cat = cat_map_3b.get(curr_id, "Computer Science")
        line = line.replace('"category": "Computer Science & Applications"', f'"category": "{new_cat}"')
    new_lines3b.append(line)

with open("scripts/part3b_data.py", "w", encoding="utf-8") as f:
    f.write("\n".join(new_lines3b))
print("part3b_data.py updated")
