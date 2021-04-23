
const styles = {
    NavBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },

    logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'Roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        "& a": {
            textDecoration: 'none',
            color:'black',
        },
    },

    slider: {
        display: 'inline-block',
        width: '340px',
        margin: '0 10px',
        "& .rc-slider-rail": {
            height: '8px',
        },

        "& .rc-slider-track": {
            backgroundColor: 'transparent',
        },
        
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle.hover": {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            height: '13px',
            width: '13px',
            marginLeft: '-7px',
            marginTop: '-3px',
        },
    },

    selectContainer: {
        marginLeft: 'auto',
        marginRight: '2rem',
    },
    
};

export default styles;