class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet = () => {
        const message = this.createChatBotMessage("Welcome to Rappa Realty Group! How may we help you?")
        this.addMessagetoState(message);
    }

    contactAgent = () => {
        const message = this.createChatBotMessage("Please type Yes if you would like to contact one of our agents who are avaiable 24/7?")
        this.addMessagetoState(message);
    }

    addMessagetoState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}
  
  export default ActionProvider;
  