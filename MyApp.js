const allDivs = document.getElementById("allDivs")

let CreateElementFunc = function (Type , IdName , ClassName1 , MethodName) {
    allDivs.append(document.createElement(Type))
    let ElementsDiv = allDivs.querySelectorAll("div")
    ElementsDiv.id = IdName
    ElementsDiv.className = ClassName1
}
CreateElementFunc("div",'deneme','InfoDiv','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')
CreateElementFunc("div",'deneme','denem1','deneme2')

// let ClassDiv = document.createElement('dic')
// ClassDiv.className = "ClassDiv"
console.log(allDivs.childNodes);

// allDivs.append(ClassDiv)