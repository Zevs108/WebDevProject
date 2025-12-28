# обробка jason file
import json

with open('data.json', 'r', encoding='utf-8') as json_file:
    json_string = json_file.read()
    json_file.close

with open('txt.txt', 'w', encoding='utf-8') as txt_file:
    txt_file.write(json_string)
    txt_file.close

# with open('data.json', 'r') as json_file:
#     data = json.load(json_file)  # data is now a Python dictionary or list
#     json_file.close


# with open('txt.txt', 'w') as txt_file:
#     # Example: if 'data' is a dictionary like {'name': 'John', 'age': 30}
#     for key, value in data.items():
#         txt_file.write(f"{key}: {value}\n")
#     txt_file.close
