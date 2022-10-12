import React, {useState} from "react";
import AnimatedVisibility from "./AnimatedVisibility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Box({ project }) {
    const [visible] = useState(true);
    let lodingImg = "./img/loading.jpg";
    return (
        <AnimatedVisibility
            visible={visible}
            animationIn="zoomIn"
            animationOut="zoomOut"
        >
            <div className="box" style={{backgroundImage: `url(${project.InProd ? project.image : lodingImg})`,
                backgroundRepeat: 'no-repeat', width: '230px', height: '135px',backgroundSize: 'cover'}}>
                <div className="center titleP">{project.title}</div>
                {project.InProd && <button className="bottom-corner" onClick={() => {
                    window.open(project.url, "_blank");
                }}>
                    <FontAwesomeIcon className="center" icon={faEye}/>
                </button>}
            </div>
        </AnimatedVisibility>
    );
}

export default function Boxes({data}) {
    return (
        <div className="boxes">
            {data.map(p => (
                <Box key={p} project={p} />
            ))}
        </div>
    );
}

