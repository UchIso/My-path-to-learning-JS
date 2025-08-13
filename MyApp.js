const allDivs = document.getElementById("allDivs")

let CreateElementFunc = function (Type , IdName , ClassName , MethodName) {
    let ElementTag = allDivs.appendChild(document.createElement(Type))
    let ElementsDiv = allDivs.querySelectorAll("div")
    ElementTag.id = IdName
    ElementTag.classList.add(ClassName,MethodName)
}

CreateElementFunc("div",'String','InfoDiv','Trim')
CreateElementFunc("div",'String','ClassDiv','Trim')
CreateElementFunc("div",'String','InfoDiv','Splice')
CreateElementFunc("div",'String','ReturDiv','Trim')
CreateElementFunc("div",'Array','ReturnDiv','Push')
CreateElementFunc("div",'Array','ClassDiv','Push')
CreateElementFunc("div",'Array','InfoDiv','Push')
ChekDivs()

// let ClassDiv = document.createElement('dic')
// ClassDiv.className = "ClassDiv"
// console.log(allDivs.childNodes);
function ChekDivs(){
let Divs = allDivs.childNodes
let sameID = new Set()
let sameClass = new Set()
let sameMethod = new Set()

Divs.forEach(element =>{
    let IdN = element.id
    let ClassN = element.classList[0]
    let MethodN = element.classList[1]

    if(IdN && ClassN && MethodN){
        
        if (sameID.has(IdN) && sameClass.has(ClassN) && sameMethod.has(MethodN)) {
            console.log(element);
            element.remove()
        }else{
            sameID.add(IdN)
            sameClass.add(ClassN)
            sameMethod.add(MethodN)
        }
    }
    
})
console.log(sameID,sameClass,sameMethod);
}
// allDivs.append(ClassDiv)