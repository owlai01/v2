module.exports = async (context) => {
        const { client, m, dreadedspeed } = context;


await m.reply(`Latency\n${dreadedspeed.toFixed(4)}ms`)

}