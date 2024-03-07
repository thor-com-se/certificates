import sys

def max_pairwise_product(numbers):
    first_max = second_max = -sys.maxsize   # Initialize the two number variables to the smallest possible integer value
    
    for number in numbers:
        if number > first_max:              # Current number is greater than the current first maximum
            second_max = first_max          # Update the second maximum to the previous first maximum
            first_max = number              # Update the first maximum to the current number
        elif number > second_max:           # Current number is greater than the current second maximum
            second_max = number             # Update the second maximum to the current number

    max_product = first_max * second_max    # Calculate the product of the two maximum numbers
    return max_product

if __name__ == '__main__':
    _ = int(input())
    input_numbers = list(map(int, input().split()))
    print(max_pairwise_product(input_numbers))