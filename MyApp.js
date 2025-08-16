const allDivs = document.getElementById("allDivs")

let CreateElementFunc = function (Type , IdName , ClassName , MethodName) {
    let ElementTag = allDivs.appendChild(document.createElement(Type))
    ElementTag.id = IdName
    ElementTag.classList.add(ClassName,MethodName)

    
    if(ElementTag.classList[0] === "ClassDiv"){
        let ClassHr = allDivs.appendChild(document.createElement("hr"))
        ClassHr.id = IdName;
        ClassHr.classList.add("ClassHr",MethodName)
    }else{
        Classifier(ElementTag)
        ElementTag.remove()
    }
    ChekDivs(allDivs)
}

function ChekDivs(ParentElement){

    const allElements = ParentElement.querySelectorAll('*');
    const SimpleDiv = new Set()

    allElements.forEach(element => {

        const ID = element.id || ``;
        const CLASS = Array.from(element.classList).sort().join(" ")
        const Personal = `${ID}_${CLASS}`
    
        if (SimpleDiv.has(Personal)) {

            console.log(element);
            console.log("Bir Kopya bulundu. Imha ediliyor");
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
    // console.log(Element);
    console.log(ClassDiv);
        
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



