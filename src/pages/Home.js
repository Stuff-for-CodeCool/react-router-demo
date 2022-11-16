import { useAtom } from "jotai";
import state from "../state";

const Home = () => {
    const [logat, setLogat] = useAtom(state.logat);

    const clickHandler = (e) => {
        e.preventDefault();

        setLogat(!logat);
    };

    return (
        <div>
            <button onClick={clickHandler}>Click me</button>

            {logat ? <p>Esti logat</p> : <p>Nu esti logat</p>}
        </div>
    );
};
export default Home;
