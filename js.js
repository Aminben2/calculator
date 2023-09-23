
let numbers = document.getElementsByClassName("number")
let res = document.getElementById("results")


for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    element.addEventListener("click", function (e) {
        if (this.innerHTML === ".") {
            let test = 0
            let str = res.value.split("")
            for (let i = 0; i < str.length; i++) {
                if (str[i] === ".") {
                    test += 1
                }
            }
            if (test >= 1) {
                e.preventDefault()

            } else {
                res.value += element.innerHTML
            }
        }
        else {
            res.value += element.innerHTML
        }

    })
}



let c = document.getElementById("c")
c.addEventListener("click", function () {
    res.value = ""
})


let backspace = document.getElementById("backspace")
backspace.addEventListener("click", function () {
    let ress = res.value
    let newre = ress.split("")
    newre.pop()
    res.value = newre.join("")
})

let per = document.getElementById("persentage")
per.addEventListener("click", function () {
    let newRes = parseFloat(res.value / 10)
    res.value = newRes
})


let opers = document.getElementsByClassName("oper")
for (let index = 0; index < opers.length; index++) {
    const element = opers[index];
    element.addEventListener("click", function (e) {
        if (res.value === "" && (element.innerHTML === "/" || element.innerHTML === "*")) {
            e.preventDefault()
        } else {
            res.value += element.innerHTML
        }
    })
}



let localStorageOperations = {};
let operationId = 0;
let eq = document.getElementById("eq")
eq.addEventListener("click", function (e) {
    if (res.value === "") {
        e.preventDefault()
    } else {
        operationId++;
        ds.innerHTML += `${res.value}=${eval(res.value)}<br>`
        let object = { id: operationId, resultat: `${res.value}=${eval(res.value)}` }
        localStorageOperations[operationId] = object
        window.localStorage.setItem("oprs", JSON.stringify(localStorageOperations))
        res.value = eval(res.value)
    }
})




let neg = document.getElementById("neg")
neg.addEventListener("click", function (e) {
    if (res.value === "") {
        e.preventDefault()
    } else {
        res.value = -eval(res.value)
    }
})



let sv = document.querySelector(".btn")
let ds = document.querySelector(".sv")
sv.addEventListener("click", function () {
    ds.classList.toggle("reveal");
    ds.classList.toggle("hidden");
})



let previousOpers = JSON.parse(window.localStorage.getItem("oprs"));
if (window.localStorage.getItem("oprs")) {
    for (const key in previousOpers) {
        if (Object.hasOwnProperty.call(previousOpers, key)) {
            const element = previousOpers[key];
            ds.innerHTML += `${element.resultat}<br>`
        }
    }
} else {
    console.log("no");
}
