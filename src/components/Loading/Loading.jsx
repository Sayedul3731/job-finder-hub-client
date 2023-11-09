import { RevolvingDot } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className=' flex justify-center items-center my-10'>
            <RevolvingDot
                radius="45"
                strokeWidth="5"
                color="red"
                secondaryColor='green'
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;