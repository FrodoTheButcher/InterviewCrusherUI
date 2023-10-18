import Message from "../components/Message";

export const ErrorPrinter = ({ error }) => {
    return (
        <div>
            {error &&
                Object.entries(error).map(([key, value]) => (
                    <Message key={key} variant={"danger"}>
                        {key}: {value}
                    </Message>
                ))}
        </div>
    );
};
