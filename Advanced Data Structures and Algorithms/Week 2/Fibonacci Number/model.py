def fibonacci_number(n):

    # return 0 if input is 0
    if n <= 1:
        return n

    # start with numbers 0 and 1
    numbers = []
    numbers.append(0)
    numbers.append(1)

    # add fibonacci numbers
    for i in range(2, n + 1):
        numbers.append(numbers[i - 1] + numbers[i - 2])
    
    # return last fibonacci number
    return numbers[-1]

if __name__ == '__main__':
    input_n = int(input())
    print(fibonacci_number(input_n))