import bg from './bg.svg';
import bgc from './Confetti-Doodles.svg';
import mediaQueries from './mediaQueries';

const styles = {
    root: {
        // Background by https://www.svgbackgrounds.com/#confetti-doodles
        backgroundColor: '#0805aa',
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${bgc})`,
        height: '100vh',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: 'scroll',
    },
    heading: {
        fontSize: '2rem', 
    },
    container: {
        width: '50%',
        display:'flex',
        alignItems:'flex-start',
        flexDirection:'column',
        flexWrap: 'wrap',
        [mediaQueries.down('xl')]:{
            width: '80%'
        },
        [mediaQueries.down('xs')]:{
            width: '75%'
        },
    },
    nav: {
        display:'flex',
        width: '100%',
        justifyContent: 'space-between',
        color:'white',
        alignItems: 'center',
        "& a": {
            color: 'white',
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '2.5rem',
        [mediaQueries.down('md')]:{
            gridTemplateColumns: 'repeat(2,50%)',
        },
        [mediaQueries.down('xs')]:{
            gridTemplateColumns: 'repeat(1, 100%)',
            gridGap: '1.5rem',
        },
    }
}

export default styles;
