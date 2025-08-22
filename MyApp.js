const allDivs = document.getElementById("allDivs")

let CreateElementFunc = function (Type , IdName , Class , MethodName) {
    let ElementTag = allDivs.appendChild(document.createElement(Type))
    ElementTag.id = IdName
    ElementTag.classList.add(Class,MethodName)

    if(ElementTag.classList[0] === "ClassDiv"){
        let ClassName = ElementTag.appendChild(document.createElement("span"))
        ClassName.textContent = IdName
        ClassName.id = IdName
        ClassName.classList.add("ClassName",MethodName)

        let ClassHr = allDivs.appendChild(document.createElement("hr"))
        ClassHr.id = IdName;
        ClassHr.classList.add("ClassHr",MethodName)
    }else{
        Classifier(ElementTag)
    }
    ChekDivs(allDivs)
}

function ChekDivs(ParentElement){
    
    const allElements = ParentElement.querySelectorAll('*');
    const SimpleDiv = new Set()

    allElements.forEach(element => {

        const ID = element.id || `NoName`&&!"ContetntName";
        const CLASS = Array.from(element.classList).sort().join(" ")
        const Personal = `${ID}_${CLASS}`
    
        if (SimpleDiv.has(Personal)) {
            console.log("Bir Kopya bulundu. Imha ediliyor...");
            console.log(element);
            console.log(`ID --> "${ID}" || Class --> "${CLASS}"`)
            console.log("");
            
            element.remove()
        }else{
            SimpleDiv.add(Personal)
        }
    
    })
}

function Classifier(Element){
    
    let ClassDiv = allDivs.querySelectorAll(".ClassDiv")
    
    ClassDiv.forEach(element => {
        const id = element.id;
        const method = Array.from(element.classList).sort()[1]
        const eDone = (id + method)
        const EDone = (Element.id + Element.classList[1])
        
        if(eDone == EDone){
            element.appendChild(Element)
        }
    })
    
}


CreateElementFunc("div",'String','ClassDiv','Trim')
CreateElementFunc("div",'String','InfoDiv','Trim')
CreateElementFunc("div",'String','ReturnDiv','Trim')
CreateElementFunc("div",'String','ClassDiv','toString')  
CreateElementFunc("div",'Array','ClassDiv','Push')  
CreateElementFunc("div",'Array','InfoDiv','Push')
CreateElementFunc("div",'Array','ReturnDiv','Push')
// ChekDivs(allDivs)

let ClassDiv = document.createElement('div')
ClassDiv.className = "ClassDiv"

// console.log(allDivs.childNodes);



