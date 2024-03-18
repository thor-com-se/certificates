import sys
import os

tests = int(sys.argv[1])    # parameter for number of tests
n = int(sys.argv[2])        # parameter used to generate tests

for i in range(tests):
    print("Test #" + str(i+1) + "\n")

    # run the generator generate.py with parameter n and the seed i
    os.system("python3 generate.py " + str(n) + " " + str(i) + " > input.txt")

    # run both models
    os.system("python3 naive.py <input.txt >naive.txt")
    os.system("python3 model.py <input.txt >model.txt")

    # print the generated test
    with open('input.txt') as f: test = f.read()
    print("Generated input:", test)

    # read the output of the model solution:
    with open('naive.txt') as f: model = f.read()
    print("Naive solution:", model)
    
    # read the output of the main solution:
    with open('model.txt') as f: main = f.read()         
    print("Model solution:", main)

    if model != main :
        break

    print("----------------------------------------" + "\n")

# delete txt files
os.remove("input.txt")
os.remove("naive.txt")
os.remove("model.txt")