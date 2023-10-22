import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    MessageModel
} from '@chatscope/chat-ui-kit-react';

const chats: MessageModel[] = [
    {
        message: "Hello my friend",
        sentTime: "just now",
        sender: "Joe",
        direction: "incoming",
        position: "first"
    },
    {
        message: "Hello back",
        sentTime: "just now",
        sender: "you",
        direction: "outgoing",
        position: "normal"
    },
];

const ChatComponent = () => {
    return (
        <div style={{ position: "relative", height: "500px" }}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>
                        {chats.map((obj: any, i: number) =>
                            <Message model={obj} key={i} />
                        )}
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    )
};

export default ChatComponent;