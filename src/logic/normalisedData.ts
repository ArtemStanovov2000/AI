export const normalisedData = (data: number[]) => {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        sum += data[i]
    }

    const dataInput = []
    for (let i = 0; i < data.length; i++) {
        dataInput.push(data[i] / sum)
    }
    return dataInput
}