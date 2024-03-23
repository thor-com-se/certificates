def fibonacci_huge_naive(n, m):
    # Guard against lower constraint n-values
    if n <= 1:
        return n

    # Compute the Pisano period for m
    if m == 2:
        period = 3
    else:
        a, b = 0, 1
        period = 0
        for i in range(m * m):
            a, b = b, (a + b) % m
            period += 1
            if a == 0 and b == 1:
                break
    
    # Reduce n to its equivalent within the Pisano period for m
    n %= period

    # Compute the n-th Fibonacci number modulo m
    previous, current = 0, 1
    for _ in range(n - 1):
        previous, current = current, (previous + current) % m

    return current

if __name__ == '__main__':
    n, m = map(int, input().split())
    print(fibonacci_huge_naive(n, m))
