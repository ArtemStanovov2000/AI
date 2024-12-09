import { activation } from "./activation"

export const createActivationsLastsLayer = (prevLayer: number[], weights: number[][], bias: number[]) => {
    const activations = []

    for (let i = 0; i < weights.length; i++) {
        let activationValue = 0
        for (let j = 0; j < weights[i].length; j++) {
            activationValue += weights[i][j] * prevLayer[j]
        }
        activationValue += bias[i]
        activations.push(activation(activationValue))
    }
    return activations
}