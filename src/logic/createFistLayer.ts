export const createFistLayer = (currentLayerCount: number, data: number[]) => {
    const firstLayer = []
    for (let i = 0; i < currentLayerCount; i++) {
        firstLayer.push(data[i])

    }
    return firstLayer
}