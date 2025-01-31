let dd_btn = document.getElementById("btnDragAndDrop");
let bp_label = document.getElementById("lbl-plus");
let dropbox = document.getElementById("dropbox");
let btnSubmit = document.getElementById("btnSubmit");
let btnCancel = document.getElementById("btnCancel");
let btnUpload = document.getElementById("btnUpload");
let fileChosen = document.getElementById("fileChosen");
let driveBoxes = document.getElementsByClassName("driveBox");

let file;

// function uploadFiles(){
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status == 200){
//             const response = JSON.parse(this.responseText)
//             console.log(response["1forge.com"]);
//         }
//     };
//     xhttp.open("Get", "https://api.apis.guru/v2/list.json", true);
//     xhttp.send();
// }



function uploadFiles() {
    var fileInput = document.getElementById('inputId');
    var file = fileInput.files[0];

    if (file) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:5000/admin', true);
        xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        xhr.setRequestHeader('X-Filename', file.name);

        xhr.onload = function () {
            if (xhr.status === 200) {
                alert('File uploaded successfully!');
                fileInput.value = '';
            } else {
                alert('File upload failed!');
            }

        };

        var reader = new FileReader();
        reader.onload = function (event) {
            var blob = new Blob([event.target.result]);
            xhr.send(blob);
        };
        reader.readAsArrayBuffer(file);
    }
}

function deleteFile(){
    let listItemDelete = document.getElementsByClassName("listItemDelete");

    for(let d=0; d<listItemDelete.length; d++){
        listItemDelete[d].addEventListener("click", () => {
            console.log("clicked")
            alert("Are you sure you want to delete this file?");
        });
    }
    
}


dd_btn.addEventListener("click", () => {
    bp_label.style.display = "none"
    dd_btn.style.display = "none";
    dropbox.style.display = "block";
    btnSubmit.style.display = "block";
    btnCancel.style.display = "block";
});

btnCancel.addEventListener("click", () => {
    bp_label.style.display = "block"
    dd_btn.style.display = "block";
    dropbox.style.display = "none";
    btnSubmit.style.display = "none";
    btnCancel.style.display = "none";
    
});

btnSubmit.addEventListener("click", () => {
    bp_label.style.display = "block"
    dd_btn.style.display = "block";
    dropbox.style.display = "none";
    btnSubmit.style.display = "none";
    btnCancel.style.display = "none";
    uploadFiles(file);
});

for(let x=0; x<driveBoxes.length; x++){
    driveBoxes[x].addEventListener("click", () => {
        document.getElementById("driveId").innerText = driveBoxes[x].innerText;
    });
}



document.getElementById("inputId").addEventListener("change", () => {
    
    fileChosen.textContent = document.getElementById("inputId").files[0].name;
    file = fileChosen;
  
});

function dropHandler(ev) {
    console.log("File(s) dropped");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }

  function dragOverHandler(ev) {
    console.log("File(s) in drop zone");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function listItems(){
    var fileList = document.getElementById('fileList');
    data.forEach(function(file) {
        var listItem = document.createElement('li');
        listItem.textContent = file;
        fileList.appendChild(listItem);
    });
  }

