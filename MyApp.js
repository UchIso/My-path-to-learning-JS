const allDivs = document.getElementById("allDivs")

let CreateElementFunc = function (Type , IdName , ClassName , MethodName) {
    let ElementTag = allDivs.appendChild(document.createElement(Type))
    let ElementsDiv = allDivs.querySelectorAll("div")
    ElementTag.id = IdName
    ElementTag.classList.add(ClassName,MethodName)
}

CreateElementFunc("div",'deneme','InfoDiv','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','InfoDiv','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','InfoDiv','deneme2')
CreateElementFunc("div",'deneme','InfoDiv','deneme2')
CreateElementFunc("div",'deneme','InfoDiv','deneme2')
CreateElementFunc("div",'deneme','InfoDiv','deneme2')
CreateElementFunc("div",'deneme','InfoDiv','deneme2')

// let ClassDiv = document.createElement('dic')
// ClassDiv.className = "ClassDiv"
// console.log(allDivs.childNodes);
let Divs = allDivs.childNodes
let sameID = new Set()

Divs.forEach(element =>{
    let classN = element.classList[0]
    if(classN){
        if (sameID.has(classN)) {
            element.remove()
        }else{
            sameID.add(classN)
        }
    }
    
})
console.log(sameID);

console.log(Divs)
// allDivs.append(ClassDiv)