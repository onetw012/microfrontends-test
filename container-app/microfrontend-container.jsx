import React, {useCallback} from 'react';
import {loadMicrofrontend, sendMountEvent, sendUnmountEvent} from "./load-utils";

const MicrofrontendContainer = ({metadata}) => {
    const scriptRef = useCallback(node => {
        if (node !== null) {
            sendUnmountEvent(metadata.name);
            const onload = () => {
                sendMountEvent(metadata.name);
            };
            loadMicrofrontend(node, metadata, onload)
        }
    }, [metadata]);

    return (
        <div style={{height: "350px", border: "4px solid grey"}} id={metadata.name} ref={scriptRef}/>
    );
};

export default MicrofrontendContainer;