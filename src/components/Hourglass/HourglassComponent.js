
import { Hourglass } from 'react-loader-spinner';

 const HourglassComponent = () => {
    return(
        <Hourglass
        visible={true}
        height="70"
        width="70"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#0a2647', '#67f806dc']}
    />
    )
}

export default HourglassComponent;