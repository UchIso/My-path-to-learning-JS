const allDivs = document.getElementById("allDivs")

let CreateElementFunc = function (Type , IdName , Class , MethodName) {
    let ElementTag = allDivs.appendChild(document.createElement(Type))
    ElementTag.id = IdName
    ElementTag.classList.add(Class,MethodName)

    if(!(ElementTag.classList[0] === "ClassDiv")){   
        Classifier(ElementTag)
    }
    ChekDivs(allDivs)
}

function ContentDivs(){

    const Divs = document.getElementsByClassName("ClassDiv")

    let ContentDiv
    let ContentInfoDiv
    let ContentReturnDiv
    for(let element of Divs){
        
        const MethotName = element.appendChild(document.createElement("h3"))
        MethotName.id = element.id
        MethotName.className = "MethotName"
        MethotName.textContent = element.classList[1]

        ContentDiv = element.appendChild(document.createElement("div"))
        ContentInfoDiv = element.children[1]
        ContentReturnDiv = element.children[2]
        ContentDiv.appendChild(ContentInfoDiv,ContentReturnDiv)
        ContentDiv.id = element.id
        ContentDiv.classList.add("ContentDiv",element.classList[1])
    }
}

function SameDivsFunc(){
    const AllClass = allDivs.querySelectorAll(".ClassDiv")
    const SameClass=[]

    AllClass.forEach(ClassDiv =>{
        const ClassID = ClassDiv.id
        if(!SameClass[ClassID]){
            SameClass[ClassID]=[]
        }
        SameClass[ClassID].push(ClassDiv)
    })

    for(const ID in SameClass){
        if(SameClass.hasOwnProperty(ID)){
            const SameDiv = allDivs.appendChild(document.createElement("div"))
            SameDiv.id = ID
            
            const ClassName = SameDiv.appendChild(document.createElement("h1"))
            ClassName.textContent = ID
            ClassName.className = "ClassName"
            
            const SameContentDiv = SameDiv.appendChild(document.createElement("div"))
            SameClass[ID].forEach(element => {
                SameContentDiv.appendChild(element)
            })
            const ClassHr = SameDiv.appendChild(document.createElement("hr"))
            ClassHr.id = ID
            ClassHr.className = "ClassHr"
        }
    }
    
}

function ChekDivs(ParentElement){
    
    const allElements = ParentElement.querySelectorAll('*');
    const SimpleDiv = new Set()

    allElements.forEach(element => {

        const ID = element.id || `NoName`//&&!"ContetntName";
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
CreateElementFunc("div",'String','InfoDiv','toString')  
CreateElementFunc("div",'String','ReturnDiv','toString')  
CreateElementFunc("div",'Array','ClassDiv','Includes')
CreateElementFunc("div",'Array','InfoDiv','Includes')
CreateElementFunc("div",'Array','ReturnDiv','Includes')
CreateElementFunc("div",'Array','ClassDiv','Push')
CreateElementFunc("div",'Array','ClassDiv','Find')
CreateElementFunc("div",'Array','InfoDiv','Find')
CreateElementFunc("div",'Array','ReturnDiv','Find')
CreateElementFunc("div",'Array','InfoDiv','Push')
CreateElementFunc("div",'Array','ReturnDiv','Push')

// ChekDivs(allDivs)
ContentDivs()
SameDivsFunc()
// console.log(allDivs.childNodes);



