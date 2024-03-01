import random

uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lowercase_letters = uppercase_letters.lower()
digits = "0123456789"
symbols = "()[]{},;:.-/\\?+*# "

upper = True if input("Include uppercase letters? (y/n): ").lower() == 'y' else False
lower = True if input("Include lowercase letters? (y/n): ").lower() == 'y' else False
nums = True if input("Include numbers? (y/n): ").lower() == 'y' else False
syms = True if input("Include symbols? (y/n): ").lower() == 'y' else False

all_chars = ""

if upper:
    all_chars += uppercase_letters
if lower:
    all_chars += lowercase_letters
if nums:
    all_chars += digits
if syms:
    all_chars += symbols

length = int(input("Enter the length of the password: "))
amount = int(input("Enter the number of passwords to generate: "))

for _ in range(amount):
    password = "".join(random.sample(all_chars, length))
    print(password)

