type Weights = number[][]

export const createWeihgtMatrix = (prevLayerCount: number, currentLayerCount: number) => {
    const layerWeight: Weights = []
    for (let i = 0; i < currentLayerCount; i++) {
        layerWeight.push([])
        for (let j = 0; j < prevLayerCount; j++) {
            layerWeight[i][j] = Math.random() * 2 - 1
        }
    }
    return layerWeight
}