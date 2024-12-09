import { activation } from "./activation"

export const createActivationsFinalLayer = (prevLayer: number[], weights: number[][], bias: number[]) => {
    const activations = []
    
    let sumActivations = 0
    const notNormalizedActivations = []
    for (let i = 0; i < weights.length; i++) {
        let activationValue = 0
        for (let j = 0; j < weights[i].length; j++) {
            activationValue += weights[i][j] * prevLayer[j]
        }
        activationValue += bias[i]
        notNormalizedActivations.push(activation(activationValue))
        sumActivations += activation(activationValue)
    }

    for (let i = 0; i < notNormalizedActivations.length; i++) {
        activations.push(activation(notNormalizedActivations[i]) / sumActivations || 0)
    }

    return activations
}