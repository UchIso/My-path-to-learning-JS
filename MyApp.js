
function CreateNewDiw(idName , className){
    let newDiv = document.createElement('div')
    
    newDiv.id = idName;
    newDiv.className = className

    newDiv.style.height = "100px";
    newDiv.style.width = "100px";
    newDiv.style.backgroundColor = "#3e3e3e"
    newDiv.style.display = "flex"
    newDiv.style.alignItems = "center"
    newDiv.style.justifyContent = "center";
    // document.body.appendChild(newDiv)
    return newDiv
}

function classDiv(classDivSet){
    classDivSet.style.width = "100%";
    classDivSet.style.height = "300px";
    classDivSet.style.backgroundColor = "#1e1e1e";
    classDivSet.style.borderRadius = "15px";
    classDivSet.style.margin = "10px , 10px , 10px , 10px";
    classDivSet.style.padding = "15px , 15px , 15px , 15px";
    document.body.appendChild(classDivSet)
    document.body.appendChild(document.createElement('hr'))
}

function checkClass(targetClass){if(targetClass.className === "classDiv") classDiv(targetClass)}

let StrDiv = new CreateNewDiw("strMetods" , "classDiv")
let NumDiv = new CreateNewDiw("","classDiv")
let BoolDiv = new CreateNewDiw("","classDiv")
let ObjDiv = new CreateNewDiw("","classDiv")

checkClass(StrDiv)
checkClass(NumDiv)
checkClass(BoolDiv)
checkClass(ObjDiv)

// document.body.appendChild(StrDiv)
// document.body.appendChild(NumDiv)

console.log(document.querySelectorAll(".classDiv")[0]);
