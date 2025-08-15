const allDivs = document.getElementById("allDivs")

let CreateElementFunc = function (Type , IdName , ClassName , MethodName) {
    let ElementTag = allDivs.appendChild(document.createElement(Type))
    let ElementsDiv = allDivs.querySelectorAll("div")
    ElementTag.id = IdName
    ElementTag.classList.add(ClassName,MethodName)
    if(ElementTag.classList[0] === "ClassDiv"){
    allDivs.appendChild(document.createElement("hr"))
}
}

CreateElementFunc("div",'String','InfoDiv','Trim')
CreateElementFunc("div",'String','ClassDiv','Trim')
CreateElementFunc("div",'String','InfoDiv','Splice')
CreateElementFunc("div",'String','ReturnDiv','Trim')
CreateElementFunc("div",'Array','ReturnDiv','Push')
CreateElementFunc("div",'Array','ClassDiv','Push')
CreateElementFunc("div",'Array','InfoDiv','Push')
removeDuplicateElementsByAttributes()
// ChekDivs()


// let ClassDiv = document.createElement('div')
// ClassDiv.className = "ClassDiv"
// console.log(allDivs.childNodes);

// function ChekDivs(){

// const SimpleDiv = new Set()

// allDivs.forEach(element => {

//     const ID = element.id || ``;
//     const CLASS = Array.from(element.classList).sort().join(" ")
//     const Person = `${ID}_${CLASS}`
//     console.log(Person);
    
// })

// console.log(Divs);
// }


function removeDuplicateElementsByAttributes() {

  // 1. Ana elementin altındaki tüm elementleri seçelim.
  // querySelectorAll('*') metodu, belirtilen element içindeki tüm alt elementleri NodeList olarak döndürür.
  const allElements = document.querySelectorAll('*');

  // 2. Elementlerin parmak izlerini saklamak için boş bir Set oluşturalım.
  // Set, benzersiz değerler sakladığı için mükemmel bir seçimdir.
  const seenFingerprints = new Set();

  // 3. Seçilen tüm elementler üzerinde döngüye başlayalım.
  // forEach, NodeList üzerinde rahatlıkla kullanılabilir.
  allElements.forEach(element => {

    // 4. Her elementin ID'sini alalım. Eğer yoksa boş bir string olarak kabul edelim.
    const id = element.id || '';

    // 5. Her elementin tüm Class isimlerini alalım ve sıralayarak birleştirelim.
    // Class isimleri listesini alıyoruz (classList).
    // Array.from() ile bunu bir diziye dönüştürüyoruz.
    // .sort() ile class isimlerini alfabetik olarak sıralıyoruz, bu sayede "c a b" ve "a b c" aynı parmak izini verir.
    // .join(' ') ile sıralanmış class isimlerini tek bir string haline getiriyoruz.
    const classNames = Array.from(element.classList).sort().join(' ');

    // 6. ID ve birleştirilmiş Class isimlerini kullanarak element için benzersiz bir parmak izi oluşturalım.
    // Bu parmak izi, iki farklı elementin aynı olup olmadığını kontrol etmek için kullanılacak.
    const fingerprint = `${id}_${classNames}`;

    // 7. Oluşturulan parmak izi daha önce görüldü mü diye kontrol edelim.
    if (seenFingerprints.has(fingerprint)) {

      // Eğer görüldüyse, bu bir yinelenen elementtir. Onu DOM'dan kaldıralım.
      // element.remove() metodu, elementi bulunduğu yerden siler.
      console.log(`Yinelenen element bulundu ve kaldırıldı: ID - "${id}", Class'lar - "${classNames}"`);
      element.remove();

    } else {

      // Eğer ilk kez görüyorsak, parmak izini Set'e ekleyelim.
      seenFingerprints.add(fingerprint);
    }
  });
}