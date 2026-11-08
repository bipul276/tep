# compare_sections.py
for mock_file in ["ugcNetMock.ts", "stetMock.ts", "bpscTreMock.ts"]:
    with open("src/data/mockExams/" + mock_file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    cats = set()
    units = set()
    for l in lines:
        if '"category":' in l:
            cats.add(l.split('"category":')[1].strip().strip('",'))
        if '"unit":' in l:
            units.add(l.split('"unit":')[1].strip().strip('",'))

    print(f"=== {mock_file} ===")
    print("  Categories:", sorted(list(cats)))
    print("  Units count:", len(units))
    print("  Units:", sorted(list(units)))
