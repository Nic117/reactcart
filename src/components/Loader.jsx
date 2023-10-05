import { ThreeCircles } from 'react-loader-spinner';
export const Loader = ({ loading }) => {
  const loaderStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999, // Asegura que el spinner esté en el frente de otros elementos
  };

  return (
    <>
      {loading === true && (
        <div style={loaderStyles}>
          <h2>
            <ThreeCircles
              height="80"
              width="80"
              color="#4D96B8"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </h2>
        </div>
      )}
    </>
  );
};
