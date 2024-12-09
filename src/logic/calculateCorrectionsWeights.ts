export const calculateCorrectionsWeights = (prevLayer: number[], thisMistakes: number[], step: number, weights: number[][]) => {
    for (let i = 0; i < weights.length; i++) {
        for (let j = 0; j < weights[i].length; j++) {
            weights[i][j] = weights[i][j] - prevLayer[j] * thisMistakes[i] * step
        }
    }
}