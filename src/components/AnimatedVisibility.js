import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

function AnimatedVisibility({
                                visible,
                                children,
                                animationOutDuration,
                                disappearOffset,
                                ...rest
                            }) {
    const [noDisplay, setNoDisplay] = useState(!visible);
    useEffect(() => {
        if (!visible) {
            const delay = animationOutDuration - disappearOffset;
            setTimeout(() => setNoDisplay(true), delay);
        } else setNoDisplay(false);
        // eslint-disable-next-line
    }, [visible]);

    const style = noDisplay ? { display: "none" } : null;
    return (
        <Animated isVisible={visible} style={style} {...rest}>
            {children}
        </Animated>
    );
}

AnimatedVisibility.defaultProps = {
    animationOutDuration: 1000,
    disappearOffset: 350,
    visible: true
};

AnimatedVisibility.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    animationOutDuration: PropTypes.number,
    disappearOffset: PropTypes.number,
    visible: PropTypes.bool
};

export default AnimatedVisibility;
