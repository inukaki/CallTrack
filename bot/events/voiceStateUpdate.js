module.exports = {
    voiceStateUpdateEvent: function(client) {
        // ボイスチャンネルに参加したり退出したりしたときに実行されるイベント
        client.on('voiceStateUpdate', (oldState, newState) => {
            // チャンネルに入退出したユーザー
            user = newState.guild.members.resolve(newState.id).user;
            // チャンネルに参加したとき
            if (oldState.channelId === null && newState.channelId !== null) {
                console.log(`${user.username} が ${newState.channel.name} に参加しました`);
            }
            // チャンネルから退出したとき
            if (oldState.channelId !== null && newState.channelId === null) {
                console.log(`${oldState.member.user.username} が ${oldState.channel.name} から退出しました`);
            }
        });
    }
}