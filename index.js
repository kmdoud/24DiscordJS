
// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
//load the token from the configuration file to pass the the login on line 18
dotenv.config();
// Create a new client instance
//a "guild" is a discord "server"
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);