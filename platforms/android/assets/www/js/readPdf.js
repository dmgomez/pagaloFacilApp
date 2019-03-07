// !! Assumes variable fileURL contains a valid URL to a path on the device,
//    for example, cdvfile://localhost/persistent/path/to/downloads/
/*
var fileTransfer = new FileTransfer();
var uri = encodeURI("http://some.server.com/download.php");

fileTransfer.download(
    uri,
    fileURL,
    function(entry) {
        console.log("download complete: " + entry.toURL());
    },
    function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("download error code" + error.code);
    },
    false,
    {
        headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    }
);

*/


function downloadFile() { alert("entra");
window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);

    // Make sure you add the domain name to the Content-Security-Policy <meta> element.
    var url = 'https://www.pagalofacil.com/download/terminos_de_uso.pdf';
    // Parameters passed to getFile create a new file or return the file if it already exists.
    fs.root.getFile('downloaded-condiciones-de-uso.pdf', { create: true, exclusive: false }, function (fileEntry) {
        download(fileEntry, url, true);

    }, onErrorCreateFile);

}, onErrorLoadFs);
}

function download(fileEntry, uri, readBinaryData) {

    var fileTransfer = new FileTransfer();
    var fileURL = fileEntry.toURL();

    fileTransfer.download(
        uri,
        fileURL,
        function (entry) {
            console.log("Successful download...");
            console.log("download complete: " + entry.toURL());
            if (readBinaryData) {
              // Read the file...
              readBinaryFile(entry);
            }
            else {
              // Or just display it.
              displayImageByFileURL(entry);
            }
        },
        function (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        null, // or, pass false
        {
            //headers: {
            //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            //}
        }
    );
}
/*
function displayPdfByFileURL(fileEntry) {
    var elem = document.getElementById('pdfElement');
    elem.src = fileEntry.toURL();
}*/

document.getElementById("downloadFile").addEventListener("click", downloadFile);
/*
function downloadFile() {
   var fileTransfer = new FileTransfer();
   var uri = encodeURI("https://www.pagalofacil.com/download/terminos_de_uso.pdf");
   var fileURL =  "///storage/emulated/0/Download/condiciones-de-uso.pdf";

   fileTransfer.download(
      uri, fileURL, function(entry) {
         console.log("download complete: " + entry.toURL());
      },
        
      function(error) {
         console.log("download error source " + error.source);
         console.log("download error target " + error.target);
         console.log("download error code" + error.code);
      },
        
      false, {
         headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
         }
      }
   );
}
*/

document.getElementById("readFile").addEventListener("click", readFile);
/*
function readFile() {
   var type = window.TEMPORARY;
   var size = 5*1024*1024;
   window.requestFileSystem(type, size, successCallback, errorCallback)

   function successCallback(fs) {
      fs.root.getFile('log.txt', {}, function(fileEntry) {

         fileEntry.file(function(file) {
            var reader = new FileReader();

            reader.onloadend = function(e) {
               var txtArea = document.getElementById('textarea');
               txtArea.value = this.result;
            };
            reader.readAsText(file);
         }, errorCallback);
      }, errorCallback);
   }

   function errorCallback(error) {
      alert("ERROR: " + error.code)
   }
}   
*/

//document.addEventListener('deviceready', function () {
function readFile() {
    var url = "https://www.pagalofacil.com/download/terminos_de_uso.pdf";
    var targetPath = cordova.file.documentsDirectory + "condiciones.pdf";
    var trustHosts = true;
    var options = {};

    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
      .then(function(result) {
        // Success!
      }, function(err) {
        // Error
      }, function (progress) {
        $timeout(function () {
          $scope.downloadProgress = (progress.loaded / progress.total) * 100;
        });
      });

   //}, false);
}