import sys
import os

# accept the number of tests as a command line parameter
tests = int(sys.argv[1])
# accept the parameter for the tests as a command line parameter
n = int(sys.argv[2])

for i in range(tests):
    print("Test #" + str(i+1))

    # run the generator generate.py with parameter n and the seed i
    os.system("python3 generate.py " + str(n) + " " + str(i) + " > input.txt")

    # run both models
    os.system("python3 naive.py <input.txt >naive.txt")
    os.system("python3 model.py <input.txt >model.txt")

    # read the output of the model solution:
    with open('naive.txt') as f: model = f.read()
    print("Naive solution: ", model)
    
    # read the output of the main solution:
    with open('model.txt') as f: main = f.read()         
    print("Model solution: ", main)

    # compare and break
    if model != main :
        break

# delete txt files
os.remove("input.txt")
os.remove("naive.txt")
os.remove("model.txt")