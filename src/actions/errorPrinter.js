
export const ErrorPrinter = ( error ) => {
    
    if(!error) return;
    console.log("error",error)
    return (
        <div>
            {typeof error === 'string' ? (
                <p>{error}</p>
            ) : (
                error &&
                Object.entries(error).map(([key, value]) => (
                    <p>
                        {key}: {value}
                    </p>
                ))
            )}
        </div>
    );
};

export default ErrorPrinter;