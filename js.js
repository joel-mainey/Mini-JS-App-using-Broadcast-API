function Chat()
{
    // our broadcast channel
    const channel = new BroadcastChannel('cast');

    // our message taken from user input
    let message = document.getElementById('message');

    // are that message will be sent to
    let received = document.getElementById('received');

    // sending message
    channel.postMessage(message.value);

    // display message in receive div
    channel.onmessage = event =>
    {
        received.innerHTML = event.data;
    }
}