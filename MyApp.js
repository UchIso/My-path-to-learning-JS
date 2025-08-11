
// let allDivs = document.getElementById('allDivs')
// console.log(allDivs.childNodes);


// function CreateNewDiw(idName , className , methodName){
//     let newDiv = document.createElement('div')
    
//     newDiv.id = idName;
//     newDiv.className = className
//     newDiv.classList.add = methodName

//     newDiv.style.height = "100px";
//     newDiv.style.width = "100px";
//     newDiv.style.backgroundColor = "#3e3e3e"
//     newDiv.style.display = "flex"
//     newDiv.style.alignItems = "center"
//     newDiv.style.justifyContent = "center";
//     allDivs.appendChild(newDiv)
//     return newDiv

// }

// function classDiv(classDivSet){

//     classDivSet.style.minWidth = "500px";
//     classDivSet.style.width = "100%";
//     classDivSet.style.minHeight = "300px";
//     classDivSet.style.backgroundColor = "#1e1e1e";
//     classDivSet.style.borderRadius = "15px";
//     classDivSet.style.border = "solid 1px whitesmoke"
//     classDivSet.style.margin = "5px 0px 5px 0px";
//     classDivSet.style.padding = "0px 5px 0px 5px ";
//     classDivSet.style.boxShadow = "whitesmoke 0px 0px 10px"
//     allDivs.appendChild(classDivSet)
//     allDivs.appendChild(document.createElement('hr'))
            
//     document.querySelectorAll(".infoDiv").forEach(target => infoDiv(target))
//     function infoDiv(infoDivSet){

//         let infoDivs = document.createElement('div')
//         classDivSet.appendChild(infoDivs)
        
//         infoDivSet.style.minWidth = "225px";
//         infoDivSet.style.width = "50%";
//         infoDivSet.style.minHeight = "200px"
//         infoDivSet.style.height = "85%"
//         infoDivSet.style.margin = "10px"
//         infoDivSet.style.borderRadius = "20px"
//         infoDivSet.style.border = "whitesmoke 1px solid"
//         infoDivSet.style.boxShadow = "whitesmoke 0px 0px 5px"

//         document.querySelectorAll('.refCode').forEach(target => refCode(target))
//         function refCode(refCodeSet){
//             refCodeSet.style.color ="green"
//             refCodeSet.style.fontFamily ="Courier New"
//         }
            
//         if (classDivSet.id === infoDivSet.id) {
//             infoDivs.appendChild(infoDivSet)
//         }

//     }

//     document.querySelectorAll(".returnDiv").forEach(target => returnDiv(target))
//     function returnDiv(returnDivSet){
        
//         returnDivSet.style.minWidth = "225px";
//         returnDivSet.style.width = "50%";
//         returnDivSet.style.minHeight = "200px"
//         returnDivSet.style.height = "85%"
//         returnDivSet.style.margin = "10px"
//         returnDivSet.style.borderRadius = "20px"
//         returnDivSet.style.border = "whitesmoke 1px solid"
//         returnDivSet.style.boxShadow = "whitesmoke 0px 0px 5px"
//         returnDivSet.style.backgroundColor ="#0e0e0e"

//         if (classDivSet.id === returnDivSet.id) {
//             classDivSet.appendChild(returnDivSet)
//         }
//     }
    
    
// }

// // function checkClass(targetClass){if(targetClass.className === "classDiv") classDiv(targetClass)}

// let StrInfo = new CreateNewDiw("strMetods","infoDiv","trim")
// let StrInfo2 = new CreateNewDiw("strMetods","infoDiv")
// let StrInfo3 = new CreateNewDiw("strMetods","infoDiv","trin")
// let StrInfo4 = new CreateNewDiw("strMetods","infoDiv")
// let StrInfo5 = new CreateNewDiw("strMetods","infoDiv")
// let StrReturn = new CreateNewDiw("strMetods","returnDiv","trim")
// let StrDiv = new CreateNewDiw("strMetods","classDiv")
// let NumDiv = new CreateNewDiw("numMetods","classDiv")   
// let BoolDiv = new CreateNewDiw("boolMetods","classDiv")
// let ObjDiv = new CreateNewDiw("objMetods","classDiv")
// let ArrDiv = new CreateNewDiw("arrMetods","classDiv")



// document.querySelectorAll(".classDiv").forEach(target => classDiv(target))


// // document.querySelectorAll(".infoDiv").forEach(target => infoDiv(target))

// // checkClass(StrDiv)
// // checkClass(NumDiv)
// // checkClass(BoolDiv)
// // checkClass(ObjDiv)

// // document.body.appendChild(StrDiv)
// // document.body.appendChild(NumDiv)
// // document.body.appendChild(BoolDiv)
// // document.body.appendChild(ObjDiv)
// // document.body.appendChild(ArrDiv)


let allDivs = document.getElementById('allDivs')

function CreateElementFunc(type,idName,className,methodName,){
const elementType = allDivs.appendChild(document.createElement(type))
elementType.id(idName)
elementType.classList
}