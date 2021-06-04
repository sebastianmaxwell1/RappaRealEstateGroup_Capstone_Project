// class MessageParser {
//   constructor(actionProvider, state) {
//     this.actionProvider = actionProvider;
//     this.state = state;
//   }

//   parse(message) {
//     const lowercase = message.toLowerCase()

//     if (lowercase.includes("hello")) {
//         this.actionProvider.helloHandler() {
//           this.actionProvider.greet();
//         }
//     }
//   }
// }

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("contact a agent" || lowercase.includes("agent"))) {
      this.actionProvider.contactAgent();
    }
  }
}

export default MessageParser;
 