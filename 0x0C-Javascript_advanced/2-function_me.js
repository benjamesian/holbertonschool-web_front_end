function welcomeMessage(fullName) {
  alert("Welcome " + fullName);
};

const guillaume = welcomeMessage.bind(null, "Guillaume");
const alex = welcomeMessage.bind(null, "Alex");
const fred = welcomeMessage.bind(null, "Fred");
