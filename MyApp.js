const allDivs = document.getElementById("allDivs")

let CreateElementFunc = function (Type , IdName , ClassName , MethodName) {
    let ElementTag = allDivs.appendChild(document.createElement(Type))
    ElementTag.id = IdName
    ElementTag.classList.add(ClassName,MethodName)

    if(ElementTag.classList[0] === "ClassDiv"){
        let ClassHr = allDivs.appendChild(document.createElement("hr"))
        ClassHr.id = IdName;
        ClassHr.classList.add("ClassHr",MethodName)
    }
}

CreateElementFunc("div",'String','InfoDiv','Trim')
CreateElementFunc("div",'String','ClassDiv','Trim')
CreateElementFunc("div",'String','ClassDiv','toString')
CreateElementFunc("div",'String','InfoDiv','Splice')
CreateElementFunc("div",'String','ReturnDiv','Trim')
CreateElementFunc("div",'Array','ReturnDiv','Push')
CreateElementFunc("div",'Array','ClassDiv','Push')
CreateElementFunc("div",'Array','InfoDiv','Push')
ChekDivs(allDivs)

let ClassDiv = document.createElement('div')
ClassDiv.className = "ClassDiv"

console.log(allDivs.childNodes);

function ChekDivs(ParentElement){

const allElements = ParentElement.querySelectorAll('*');

const SimpleDiv = new Set()

allElements.forEach(element => {

    const ID = element.id || ``;
    const CLASS = Array.from(element.classList).sort().join(" ")
    const Personal = `${ID}_${CLASS}`
    
    if (SimpleDiv.has(Personal)) {
        (function(){console.log(element)})()
        console.log(`ID - "${ID}" ve Class - "${CLASS}" Bir Kopya bulundu. Imha ediliyor`)
        element.remove()
    }else{
        SimpleDiv.add(Personal)
    }
    
})
}


