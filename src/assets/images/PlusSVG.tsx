import { FC } from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    plus: {
        fill: "#ffffff",
        width: "20px",
        height: "20px",
    },
});

const PlusSVG: FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.plus}>
            <svg viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" 
                d="M44.5234 45.0605H82.608V39.0605H44.5234L44.5234 0.882378L38.5234 0.882379L38.5234 39.0605L0.345299 39.0605L0.345299 
                45.0605L38.5234 45.0605L38.5234 83.145L44.5234 83.145L44.5234 45.0605Z" fill="white" />
            </svg>
        </div>
    )
}

export default PlusSVG