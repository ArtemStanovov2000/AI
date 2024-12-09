import { createUseStyles } from "react-jss"
import MainPage from "./page/MainPage/MainPage";

const useStyles = createUseStyles({
  viewport: {
    backgroundColor: "#565967",
    height: "100vh",
    paddingLeft: "15%",
    paddingRight: "15%",
    padding: "20px"
  },
});

function App() {
  const classes = useStyles()

  return (
    <div className={classes.viewport}>
      <main>
        <MainPage />
      </main>
    </div>
  );
}

export default App;
