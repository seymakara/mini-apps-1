function submitForm() {
    console.log("submit event");
    var fd = new FormData(document);
    fd.append('file', getElementById("fileinfo"));
    console.log("fd", fd)
    $.ajax({
        url: "upload",
        type: "POST",
        data: fd,
        processData: false,  // tell jQuery not to process the data
        contentType: false   // tell jQuery not to set contentType
    }).done(function (data) {
        console.log(data);
    });
    return false;
}