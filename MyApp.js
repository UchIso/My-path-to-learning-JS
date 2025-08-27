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
function ChekDivs(ParentElement){
    
    const allElements = ParentElement.querySelectorAll('*');
    const SimpleDiv = new Set()
    allElements.forEach(element => {

        const ID = element.id || `NoName`
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
            SameContentDiv.id = ID
            SameContentDiv.classList.add("SameContentDiv")
            
            SameClass[ID].forEach(Element => {
                
                const MethodName = document.createElement("h3")
                MethodName.textContent = Element.classList[1]
                MethodName.id = ID
                MethodName.classList.add("MethotName",Element.classList[1])
                
                Element.prepend(MethodName)
                SameContentDiv.appendChild(Element)
                Element.after(document.createElement("hr"))
                
                ContentDivFunc(Element)               
            })
            SameContentDiv.lastChild.remove()
            
            const ClassHr = allDivs.appendChild(document.createElement("hr"))
            ClassHr.id = ID
            ClassHr.className = "ClassHr"
        }
    }
}
function ContentDivFunc(ClassDivs){

    const ContentDiv = ClassDivs.appendChild(document.createElement("div"))
    ContentDiv.id = ClassDivs.id
    ContentDiv.classList.add("ClassContentDiv",ClassDivs.classList[1])
    
    const InfoDivs = ClassDivs.querySelector(".InfoDiv")
    const ReturnDivs = ClassDivs.querySelector(".ReturnDiv")
    
    ContentDiv.appendChild(InfoDivs)
    ContentDiv.appendChild(ReturnDivs)   
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
CreateElementFunc("div",'Array','InfoDiv','Push')
CreateElementFunc("div",'Array','ReturnDiv','Push')
CreateElementFunc("div",'Array','ClassDiv','Find')
CreateElementFunc("div",'Array','InfoDiv','Find')
CreateElementFunc("div",'Array','ReturnDiv','Find')
SameDivsFunc()