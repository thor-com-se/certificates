def lcm(a, b):

    # find the gcd
    gcd_a, gcd_b = a, b
    while gcd_b != 0:
        gcd_a, gcd_b = gcd_b, gcd_a % gcd_b

    # find the product
    product = a * b

    return int(product / gcd_a)

if __name__ == '__main__':
    a, b = map(int, input().split())
    print(lcm(a, b))