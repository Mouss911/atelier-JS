// let todos = ["Mbaye Ndiaye"]

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(ladji => ladji.json())
//     .then(santos => {
//         let me = "santos"
//         todos = santos
//         console.log({ todos })
//     })

async function getTodos(){
    try {
        let rep = await fetch("https://jsonplaceholder.typicode.com/todos")
        let response = await rep.json()
        console.log(response);
    } catch(err) {
        console.log(err);
    }
    
}
getTodos();