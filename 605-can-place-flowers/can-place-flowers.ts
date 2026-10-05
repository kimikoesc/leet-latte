function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let remainingUnplantedFlowers = n;

    for (let i = 0 ; i < flowerbed.length; i++) {
        if (flowerbed[i] !== 0) continue;
        if (flowerbed[i - 1] && flowerbed[i - 1] !== 0) continue;
        if (flowerbed[i + 1] && flowerbed[i + 1] !== 0) continue;

        flowerbed[i] = 1;
        remainingUnplantedFlowers--
    }

    return remainingUnplantedFlowers <= 0
};