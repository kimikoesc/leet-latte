function reverseWords(s: string): string {
    const validWordsList = s.split(' ').filter((w) => w.length > 0);
    return validWordsList.reverse().join(' ')
};