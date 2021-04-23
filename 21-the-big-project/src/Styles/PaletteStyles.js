

const styles={
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    PaletteColors: {
        height: '90%',
    },
    goBack: {
        height: '50%',
        display: 'inline-block',
        position: 'relative',
        width: '20%',
        margin: '0 auto',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        opacity: 1,
        backgroundColor: 'black',
        
        "& a": {
            color: 'white',
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
        }

    }
}
export default styles;