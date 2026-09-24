function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // const result: boolean[] = [];

    // for (let i = 0; i < candies.length; i++) {
    //     const totalCandies = candies[i] + extraCandies;
    //     result.push(Math.max(...candies, totalCandies) === totalCandies)
    // }

    // return result

    return candies.map((c) => Math.max(...candies, c + extraCandies) === c + extraCandies)
};