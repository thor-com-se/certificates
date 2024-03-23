import sys
from testing.execution_time import execution_time
from testing.randomize import randomize

from naive import gcd as naive
from model import gcd as model

tests = int(sys.argv[1])    # parameter for number of tests
a = int(sys.argv[2])        # parameter used to generate tests
b = int(sys.argv[3])        # parameter used to generate tests

functions = {"naive": naive, "model": model}

for count in range(1, tests + 1):
    print("Test #" + str(count) + "\n")

    # Generate random input
    random_a = randomize(a)
    multiplied_a = random_a * count
    random_b = randomize(b)
    multiplied_b = random_b * count

    # Print input
    print("A:", a)
    print("Randomized:", random_a)
    print("Multiplied:", multiplied_a)
    print("")
    print("B:", b)
    print("Randomized:", random_b)
    print("Multiplied:", multiplied_b)
    print("")

    # Print table headers
    print(f"{'Function':<10}{'Result':<10}{'Time (seconds)':<20}")
    print("-" * 45)

    for func_name, func in functions.items():
        result, seconds = execution_time(func, multiplied_a, multiplied_b)      # Find result and execution time
        print(f"{func_name:<10}{result:<10}{seconds:<20}")                      # Print results in a formatted table row

    print("\n" + "/" * 45 + "\n")