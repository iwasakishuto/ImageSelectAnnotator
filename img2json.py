#coding: utf-8
import os
import json
import argparse

def validOnly(lst):
    lst = [e for e in lst if e != ".DS_Store"]
    return lst

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--img_dir",     type=str, default="./static/images/")
    parser.add_argument("--from_html",   type=str, default="../")
    parser.add_argument("--json_dir",    type=str, default="./json/")
    parser.add_argument("--makejs",      action="store_true")
    parser.add_argument("--main_js",     default="./static/js/main.js")
    parser.add_argument("--main_footer", default="./static/js/main_footer.js")
    args = parser.parse_args()

    img_dict = {}
    encod_dict = {}
    for i,sub_dir in validOnly(enumerate(os.listdir(args.img_dir))):
        encod_dict[i] = sub_dir
        img_dict[i] = []
        sub_dir_path = os.path.join(args.img_dir, sub_dir)
        for fn in validOnly(os.listdir(sub_dir_path)):
            img_path = os.path.join(args.from_html, sub_dir_path, fn)
            img_dict[i].append(img_path)

    img_info_fn = os.path.join(args.json_dir, "img_info.json")
    with open(img_info_fn, 'w', encoding='utf8') as f:
        json.dump(img_dict, f, indent=2, ensure_ascii=False)

    encode_info_fn = os.path.join(args.json_dir, "encode_info.json")
    with open(encode_info_fn, 'w', encoding='utf8') as f:
        json.dump(encod_dict, f, indent=2, ensure_ascii=False)

    print(f"JSON was created.")

    if args.makejs:
        with open(args.main_js,'w') as f_main, open(args.main_footer) as f_footer, open(img_info_fn) as f_json:
            f_main.write("var json = ")
            f_main.writelines(f_json.readlines() +  ["\n"])
            f_main.writelines(f_footer.readlines())
