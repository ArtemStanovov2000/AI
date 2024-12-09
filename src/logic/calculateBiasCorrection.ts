export const calculateBiasCorrection = (step: number, bias: number[], mistakes: number[]) => {
    for (let i = 0; i < bias.length; i++) {
        bias[i] = bias[i] - mistakes[i] * step
    }
}