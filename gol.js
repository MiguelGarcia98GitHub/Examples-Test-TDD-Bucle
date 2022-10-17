export const calcNeighborsSum = (i = 0, j = 0, data = []) => {
    const positions = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
    ];

    const filteredPositions = positions.filter(
        (item) =>
            item[0] >= 0 &&
            item[1] >= 0 &&
            item[0] < data.length &&
            item[1] < data.length
    ); // Filter out positions that are not reachable

    let result = 0;

    filteredPositions.forEach((item) => {
        result += data[item[0]][item[1]];
    });

    return result;
};
