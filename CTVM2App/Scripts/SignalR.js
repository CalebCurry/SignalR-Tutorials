(function () {
    var chat = $.connection.chat;

    $.connection.hub.start()
        .done(function () {
            $.connection.hub.logging = true;
            $.connection.hub.log("Connection established");
            chat.server.announceToEverybody("Connected!");
        })
        .fail(function () {
            writeToPage("Error connecting to SignalR");
        });

    chat.client.announce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br />");
    }

    $("#click-me").on("click", function () {
        chat.server.getServerDateTime()
           .done(function (data) {
               writeToPage(data);
           })
           .fail(function (e) {
               writeToPage(e);
           });
    })
})()
