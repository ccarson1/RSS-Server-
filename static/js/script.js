let dd_btn = document.getElementById("btnDragAndDrop");
let bp_label = document.getElementById("lbl-plus");
let dropbox = document.getElementById("dropbox");
let btnSubmit = document.getElementById("btnSubmit");
let btnCancel = document.getElementById("btnCancel");
let btnUpload = document.getElementById("btnUpload");
let fileChosen = document.getElementById("fileChosen");
let driveBoxes = document.getElementsByClassName("driveBox");

function uploadFiles(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status == 200){
            const response = JSON.parse(this.responseText)
            console.log(response["1forge.com"]);
        }
    };
    xhttp.open("Get", "https://api.apis.guru/v2/list.json", true);
    xhttp.send();
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

function listItems(){
    for(let x=0; x<filelist.length; x++){
        console.log(filelist[x].children[0].textContent);
        filelist[x].addEventListener("click", () => {
            alert("Opening " + filelist[x].children[0].textContent);
        });
        filelist[x].addEventListener("mouseover", () => {
           filelist[x].children[1].style.display = "flex";
        });
        filelist[x].addEventListener("mouseout", () => {
            filelist[x].children[1].style.display = "none";
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
    uploadFiles();
});

for(let x=0; x<driveBoxes.length; x++){
    driveBoxes[x].addEventListener("click", () => {
        document.getElementById("driveId").innerText = driveBoxes[x].innerText;
    });
}



document.getElementById("inputId").addEventListener("change", () => {
    
    fileChosen.textContent = document.getElementById("inputId").files[0].name;
  
});

