function mergeAlternately(word1: string, word2: string): string {
    const res = [];
    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1.split("")[i]) res.push(word1.split("")[i])
        if (word2.split("")[i]) res.push(word2.split("")[i])
    }

    return res.join('')
};