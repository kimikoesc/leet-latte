function removeDuplicates(nums: number[]): number {
    const seen = new Set<number>();
    let currIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.add(nums[i]);
            nums[currIndex] = nums[i];
            currIndex++;
        }
    }
    
    return currIndex;
};