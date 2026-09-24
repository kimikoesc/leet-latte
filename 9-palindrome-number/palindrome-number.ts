function isPalindrome(x: number): boolean {
    const xReverse = x.toString().split('').reverse().join('');

    return x.toString() === xReverse
};