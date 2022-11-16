import { useEffect, useRef, useState } from "react";

import { useAtom } from "jotai";
import state from "../state";

const Altceva = () => {
    const altcevaRef = useRef(null);
    const [posts, setPosts] = useState(null);
    const [logat] = useAtom(state.logat);
    

    const loader = async () => {
        const req = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const res = await req.json();
        setPosts(res);

        const [ userId, title ] = res;
        
        console.log(userId);
        console.log(title);
    };

    // useEffect(() => {
    //     setTimeout(loader, 1000);
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            if (logat) loader();
        }, 1);
    }, [logat]);

    return (
        <pre ref={altcevaRef}>
            <code>{JSON.stringify(posts, null, 4)}</code>
        </pre>
    );
};
export default Altceva;
