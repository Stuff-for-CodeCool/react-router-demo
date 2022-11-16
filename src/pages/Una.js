import { useParams } from "react-router-dom";

const Una = () => {
    const { id } = useParams();

    return `Esti pe pagina ${id}`;
};

export default Una;
