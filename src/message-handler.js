const COMMANDS = {
    '!help': helpCommand,
    '!ping': pingCommand
};

const COMMANDS_DESCRIPTION = {
    '!ping': 'Who could happen?',
    '!youtube': 'This will do youtube stuff'
};
export function handleMessage(message) {
    const [command, option] = message.content.split(' ');
    if (COMMANDS[command]) {
        COMMANDS[command](message, option);
    }
}

function helpCommand(message, option) {
    Object.keys(COMMANDS_DESCRIPTION).forEach(function (key) {
        message.reply(`[${key}] - ${COMMANDS_DESCRIPTION[key]}`);
    });
}

function pingCommand(message) {
    message.reply('Pong!');
}
