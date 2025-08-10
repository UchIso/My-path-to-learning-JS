
let allDivs = document.getElementById('allDivs')
console.log(allDivs);

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
    document.body.appendChild(newDiv)
    return newDiv
}

function classDiv(classDivSet){

    classDivSet.style.minWidth = "500px";
    classDivSet.style.width = "100%";
    classDivSet.style.height = "300px";
    classDivSet.style.backgroundColor = "#1e1e1e";
    classDivSet.style.borderRadius = "15px";
    classDivSet.style.border = "solid 1px whitesmoke"
    classDivSet.style.margin = "5px 0px 5px 0px";
    classDivSet.style.padding = "15px , 15px , 15px , 15px";
    classDivSet.style.boxShadow = "whitesmoke 0px 0px 10px"
    allDivs.appendChild(classDivSet)
    allDivs.appendChild(document.createElement('hr'))
}

// function checkClass(targetClass){if(targetClass.className === "classDiv") classDiv(targetClass)}

let StrDiv = new CreateNewDiw("strMetods" , "classDiv")
let NumDiv = new CreateNewDiw("numMetods","classDiv")
let BoolDiv = new CreateNewDiw("boolMetods","classDiv")
let ObjDiv = new CreateNewDiw("objMetods","classDiv")
let ArrDiv = new CreateNewDiw("arrMetods","classDiv")

document.querySelectorAll(".classDiv").forEach(target => classDiv(target))

// checkClass(StrDiv)
// checkClass(NumDiv)
// checkClass(BoolDiv)
// checkClass(ObjDiv)

// document.body.appendChild(StrDiv)
// document.body.appendChild(NumDiv)
// document.body.appendChild(BoolDiv)
// document.body.appendChild(ObjDiv)
// document.body.appendChild(ArrDiv)

