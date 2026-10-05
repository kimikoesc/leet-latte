function reverseVowels(s: string): string {
    const validVowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelsFromLetters = [];
    
    // return if s is invalid
    if (!s || s.length <= 0) return;

    const sArr = s.split('');
    
    for (let i = sArr.length - 1; i >= 0; i--) {
        if (validVowels.includes(sArr[i].toLowerCase())) {
            vowelsFromLetters.push(sArr[i])
        }
    }

    for (let i = 0; i < sArr.length; i++) {
        if (validVowels.includes(sArr[i].toLowerCase())) {
            sArr[i] = vowelsFromLetters.shift()
        }
    }

    return sArr.join('');
};