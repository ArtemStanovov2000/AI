export const createBiasValues = (currentLayerCount: number) => {
    const biasValues = []
    for (let i = 0; i < currentLayerCount; i++) {
        biasValues.push(Math.random())

    }
    return biasValues
}