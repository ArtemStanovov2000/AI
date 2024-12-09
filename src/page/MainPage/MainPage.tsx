import { FC } from "react"
import { createUseStyles } from "react-jss"
import NeuronsLayerList from "../../shared/NeuronsLayerList/NeuronsLayerList";
import { createWeihgtMatrix } from "../../logic/createWeightsMatrix";
import { createFistLayer } from "../../logic/createFistLayer";
import { data } from "../../logic/data";
import { createBiasValues } from "../../logic/createBiasValues";
import { createActivationsLastsLayer } from "../../logic/createActivationsLastsLayer";
import { mistakesLastLayer } from "../../logic/mistakesLastLayer";
import { createActivationsFinalLayer } from "../../logic/createActivationsFinalLayer";
import { calculateMistakeHiddenLayer } from "../../logic/calculateMistakeHiddenLayer";
import { calculateCorrectionsWeights } from "../../logic/calculateCorrectionsWeights";
import { calculateBiasCorrection } from "../../logic/calculateBiasCorrection";
import { normalisedData } from "../../logic/normalisedData";

const useStyles = createUseStyles({
    main: {
        display: "flex",
        alignItems: "center",
        gap: "300px"
    }
});

const COUNT_NEURONS_FIRST_LAYER = 4
const COUNT_NEURONS_SECOND_LAYER = 7
const COUNT_NEURONS_THIRD_LAYER = 7
const COUNT_NEURONS_FOURTH_LAYER = 3

const inputData = normalisedData(data[0].params)

let firstLayer = createFistLayer(COUNT_NEURONS_FIRST_LAYER, inputData)
let firstLayerWeight = createWeihgtMatrix(COUNT_NEURONS_FIRST_LAYER, COUNT_NEURONS_SECOND_LAYER)

const secondLayerBias = createBiasValues(COUNT_NEURONS_SECOND_LAYER)
let secondLayer = createActivationsLastsLayer(firstLayer, firstLayerWeight, secondLayerBias)
const secondLayerWeight = createWeihgtMatrix(COUNT_NEURONS_SECOND_LAYER, COUNT_NEURONS_THIRD_LAYER)

const thirdLayerBias = createBiasValues(COUNT_NEURONS_THIRD_LAYER)
let thirdLayer = createActivationsLastsLayer(secondLayer, secondLayerWeight, thirdLayerBias)
const thirdLayerWeight = createWeihgtMatrix(COUNT_NEURONS_THIRD_LAYER, COUNT_NEURONS_FOURTH_LAYER)

const fourthLayerBias = createBiasValues(COUNT_NEURONS_FOURTH_LAYER)
let fourthLayer = createActivationsFinalLayer(thirdLayer, thirdLayerWeight, fourthLayerBias)

const count = 1000

for (let i = 0; i < count; i++) {
    const STEP = 0.007

    const randomIndex = 6

    firstLayer = createFistLayer(COUNT_NEURONS_FIRST_LAYER, normalisedData(data[randomIndex].params))
    secondLayer = createActivationsLastsLayer(firstLayer, firstLayerWeight, secondLayerBias)
    thirdLayer = createActivationsLastsLayer(secondLayer, secondLayerWeight, thirdLayerBias)
    fourthLayer = createActivationsFinalLayer(thirdLayer, thirdLayerWeight, fourthLayerBias)

    if (fourthLayer[0] === 0 && fourthLayer[1] === 0 && fourthLayer[2] === 0 ) {
        firstLayerWeight = createWeihgtMatrix(COUNT_NEURONS_FIRST_LAYER, COUNT_NEURONS_SECOND_LAYER)
    }

    const mistakeFourthLayer = mistakesLastLayer(fourthLayer, data[randomIndex].statuette)
    const mistakeThirdLayer = calculateMistakeHiddenLayer(mistakeFourthLayer, thirdLayerWeight)
    const mistakeSecondLayer = calculateMistakeHiddenLayer(mistakeThirdLayer, secondLayerWeight)

    calculateCorrectionsWeights(firstLayer, mistakeSecondLayer, STEP, firstLayerWeight)
    calculateCorrectionsWeights(secondLayer, mistakeThirdLayer, STEP, secondLayerWeight)
    calculateCorrectionsWeights(thirdLayer, mistakeFourthLayer, STEP, thirdLayerWeight)

    calculateBiasCorrection(STEP, fourthLayerBias, mistakeFourthLayer)
    calculateBiasCorrection(STEP, thirdLayerBias, mistakeThirdLayer)
    calculateBiasCorrection(STEP, secondLayerBias, mistakeSecondLayer)
}


const MainPage: FC = () => {
    const classes = useStyles()


    return (
        <div className={classes.main}>
            <NeuronsLayerList layer={firstLayer} />
            <NeuronsLayerList layer={secondLayer} />
            <NeuronsLayerList layer={thirdLayer} />
            <NeuronsLayerList layer={fourthLayer} />
        </div>
    )
}

export default MainPage