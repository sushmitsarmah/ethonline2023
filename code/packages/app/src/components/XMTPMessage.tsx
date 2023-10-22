import {
    Client,
    useStreamMessages,
    useClient,
    useMessages,
    useConversations,
    useCanMessage,
    useStartConversation,
} from "@xmtp/react-sdk";
import { useCallback, useState } from "react";

const { client, initialize } = useClient();
const { conversations } = useConversations();
const { startConversation } = useStartConversation();
const { canMessage } = useCanMessage();

//Initialize
// {
//     !isConnected && <button onClick={initXmtp}>Connect to XMTP</button>;
// }








const XMTPMessage = ({ conversation, keys, signer }: any) => {
    //Stream messages
    const [history, setHistory] = useState(null);
    const { messages } = useMessages(conversation);

    // Stream messages
    // const onMessage = useCallback((message: any) => {
    //     setHistory((prevMessages) => {
    //         const msgsnew = [...prevMessages, message];
    //         return msgsnew;
    //     });
    // }, []);

    // useStreamMessages(conversation, { onMessage });

    const startConvo = async () => {
        // Start a conversation with XMTP
        const add = "0x3F11b27F323b62B159D2642964fa27C46C841897";
        if (await canMessage(add)) {
            const conversation = await startConversation(add, "hi");
        }
    };

    const initXmtp = async () => {
        const options = {
            persistConversations: false,
            env: "dev",
        };
        await initialize({ keys, options, signer } as any);
    };

    return (
        <></>
    );
};

export default XMTPMessage;