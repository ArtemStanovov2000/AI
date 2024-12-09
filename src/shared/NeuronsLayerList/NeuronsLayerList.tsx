import { FC } from "react"
import { createUseStyles } from "react-jss";

type Props = {
    layer: number[]
}

const useStyles = createUseStyles({
    list: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        display: "grid",
        gap: "11px"
    },
    items: {
        backgroundColor: "#85818c",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        fontSize: "12px"
    }
});

const NeuronsLayerList: FC<Props> = ({layer}) => {
    const classes = useStyles()

    const fixedLayer = []

    for (let i = 0; i < layer.length; i++) {
        fixedLayer.push(Number(layer[i].toFixed(4)))
    }

    return (
        <ul className={classes.list}>
            {fixedLayer.map((element: number, index: number) => <li className={classes.items} key={index}>{element}</li>)}
        </ul>
    )
}

export default NeuronsLayerList

