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

    var myHub = $.connection.myHub;
    $.connection.hub.start()
        .done(function () {
            writeToPage("It worked!");
            myHub.server.announce("Connected!");
        })
        .fail(function () { writeToPage("Error connecting to SignalR"); });

    myHub.client.announce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br />");
    }
})()
