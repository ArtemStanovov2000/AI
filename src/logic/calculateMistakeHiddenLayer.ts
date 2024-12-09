export const calculateMistakeHiddenLayer = (mistakesLastLayer: number[], weights: number[][]) => {
    const mistakesList = []
    for (let i = 0; i < weights[0].length; i++) {
        let mistakeThisNeuron = 0
        for (let j = 0; j < weights.length; j++) {
            mistakeThisNeuron += weights[j][i] * mistakesLastLayer[j]
        }
        mistakesList.push(mistakeThisNeuron)
    }
    return mistakesList
}