
import chroma from 'chroma-js';

const styles ={

    colorBox: {
        height: props => props.showFullPalette ? '25%' :  '50%',
        display: 'inline-block',
        position: 'relative',
        width: '20%',
        margin: '0 auto',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover button":{
            opacity: 1,
        }
    },

    copyText: {
        color: props => chroma(props.background).luminance() > 0.5 ? 'rgba(0,0,0,0.5)' : 'white'
    },
    colorName:{
        color: props => chroma(props.background).luminance() < 0.06 ? 'rgba(0,0,0,0.5)' : 'white'
    },
    seeMore:{
        color: props => chroma(props.background).luminance() > 0.7 ? 'rgba(0,0,0,0.5)' : 'white',
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        padding: '10px',
        textTransform: 'uppercase',
        fontSize: '12px',
        background: "rgba(255, 255, 255, 0.3)",
        border: 'none',
        textAlign: 'center',
        lineHeight: '30px',
    },
    copyButton:{
        color: props => chroma(props.background).luminance() > 0.7 ? 'rgba(0,0,0,0.5)' : 'white',
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        marginTop: '-15px',
        left: '50%',
        marginLeft: '-50px',
        width: '100px',
        height: '30px',
        textAlign: 'center',
        outline: 'none',
        border: 'none',
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        opacity: '0',
    },

    boxContent: {
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        width: '100%'
    },

    copyOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '0',
        zIndex: '0',
        transition: 'transform 1s ease-in-out',
    },

    showOverlay: {
        position: 'absolute',
        opacity: '1',
        zIndex: '10',
        transform: 'scale(50)',
    },
     copyMsg: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        textTransform: 'uppercase',
        "& h1": {
                fontWeight: '400',
                textShadow: '1px 2px black',
                background: "rgba(255, 255, 255, 0.2)",
                width: '100%',
                textAlign: 'center',
                marginBottom: '0',
                padding: '1rem',
            },
        "& p": {
            fontSize: '2rem',
            fontWeight: '100',
           },
        },
     showMsg: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '20',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.2s',
     }

};

export default styles;