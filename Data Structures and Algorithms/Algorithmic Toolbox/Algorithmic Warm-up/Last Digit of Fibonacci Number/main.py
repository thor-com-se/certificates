import sys
from testing.execution_time import execution_time
from testing.randomize import randomize

from naive import fibonacci_last_digit as naive
from model import fibonacci_last_digit as model

tests = int(sys.argv[1])    # parameter for number of tests
seed = int(sys.argv[2])     # parameter used to generate tests

functions = {"naive": naive, "model": model}

for count in range(1, tests + 1):
    print("Test #" + str(count) + "\n")

    # Generate random input
    random_number = randomize(seed)
    multiplied_number = random_number * count

    # Print input
    print("Seed:", seed)
    print("Randomized:", random_number)
    print("Multiplied:", multiplied_number)
    print("")

    # Print table headers
    print(f"{'Function':<10}{'Result':<10}{'Time (seconds)':<20}")
    print("-" * 45)

    for func_name, func in functions.items():
        result, seconds = execution_time(func, multiplied_number)   # Find result and execution time
        print(f"{func_name:<10}{result:<10}{seconds:<20}")          # Print results in a formatted table row

    print("\n" + "/" * 45 + "\n")