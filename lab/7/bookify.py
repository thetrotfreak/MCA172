import json
import pathlib
import csv


def main():
    bookDict = {"bookList": []}

    csv_file_path = pathlib.Path(r"goodreads_books.csv")
    json_file_path = pathlib.Path(r"books.json")

    with open(csv_file_path) as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for rows in csv_reader:
            res = rows.get("Title")
            if res is not None:
                bookList = bookDict.get("bookList")
                bookList.append(res)

    with open(json_file_path, "w") as json_file:
        json_file.write(json.dumps(bookDict, indent=2))


if __name__ == "__main__":
    main()
