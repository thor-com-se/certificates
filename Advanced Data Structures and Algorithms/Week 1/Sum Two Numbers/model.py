def sum_two_numbers(first, second):
    return first + second

if __name__ == '__main__':
    first, second = map(int, input().split())
    print(sum_two_numbers(first, second))