(function () {
    $("#click-me").on("click", function () {
        myHub.server.getServerDateTime()
           .done(function (data) {
               writeToPage(data);
           })
           .fail(function (e) {
               writeToPage(e);
           });
    })

    var chat = $.connection.chat;
    $.connection.hub.start()
        .done(function () {
            writeToPage("It worked!");
            chat.server.announceToEverybody("Connected!");
        })
        .fail(function () { writeToPage("Error connecting to SignalR"); });

    chat.client.announce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br />");
    }
})()
