# check_cats.py
with open("src/data/mockExams/stetMock.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

curr_id = None
curr_cat = None
curr_unit = None
for l in lines:
    if '"id":' in l and curr_id is None:
        curr_id = l.split('"id":')[1].strip().strip(',')
    elif '"category":' in l:
        curr_cat = l.split('"category":')[1].strip().strip('",')
    elif '"unit":' in l:
        curr_unit = l.split('"unit":')[1].strip().strip('",')
        if curr_id and int(curr_id) <= 25:
            print(f"Q{curr_id}: cat='{curr_cat}' | unit='{curr_unit}'")
        curr_id = None
        curr_cat = None
        curr_unit = None
