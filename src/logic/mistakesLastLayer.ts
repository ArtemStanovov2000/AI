export const mistakesLastLayer = (lastLayer: number[], indexCorrectChoice: number) => {
    const mistakes = []
    for (let i = 0; i < lastLayer.length; i++) {
        if (i === indexCorrectChoice) {
            if (lastLayer[i] === 0) {
                mistakes.push(0)
            } else {
                const mistake = Math.pow((1 - lastLayer[i]), 2) / 2
                mistakes.push(mistake)
            }
        } else {
            if (lastLayer[i] === 0) {
                mistakes.push(0)
            } else {
                const mistake = Math.pow(lastLayer[i], 2) / 2
                mistakes.push(mistake)
            }
        }
    }
    return mistakes
}