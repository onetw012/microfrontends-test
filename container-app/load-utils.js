export const sendMountEvent = (name) => {
    const event = new CustomEvent(`${name}: mount`, { detail: {containerId: name} });
    window.dispatchEvent(event);
    console.log("async");
};

export const sendUnmountEvent = (name) => {
    const event = new CustomEvent(`${name}: unmount`, { detail: {containerId: name} });
    window.dispatchEvent(event);
};

const loadScript = (src, container, onload, onerror) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = onload;
    script.onerror = onerror || (() => null);
    container.appendChild(script);
};

export const loadMicrofrontend = (container, metadata, onload) => {
    loadScript(
        metadata.src,
        container || body,
        onload
    );
};
