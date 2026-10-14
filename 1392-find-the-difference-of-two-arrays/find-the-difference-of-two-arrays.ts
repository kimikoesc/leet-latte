function findDifference(nums1: number[], nums2: number[]): number[][] {
    const nums1Unique = new Set(nums1.filter((n) => !nums2.includes(n)));
    const nums2Unique = new Set(nums2.filter((n) => !nums1.includes(n)));

    return [[...nums1Unique], [...nums2Unique]]
};