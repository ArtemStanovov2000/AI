import { FC } from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    list: {
        fill: "#ffffff",
        width: "20px",
        height: "20px",
    },
});

const ListSVG: FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.list}>
            <svg viewBox="0 0 93 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="9" y1="27.5" x2="84" y2="27.5" stroke="white" strokeWidth="6" />
                <line y1="52" x2="75" y2="52" stroke="white" strokeWidth="6" />
                <line x1="18" y1="3" x2="93" y2="3" stroke="white" strokeWidth="6" />
            </svg>
        </div>
    )
}

export default ListSVG