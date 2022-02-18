function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  

async function animate() {
    var word = ["Z", "a", "c", "s", " ", "w", "e", "b", "s", "i", "t", "e"];
    
    var title = document.getElementById("title")
    var change = true
    for (let index = 0; index < word.length; index++) {
        title.append(word[index])
        await sleep(100)

        if (index == 3 && change) {
            await sleep(500)
            title.innerHTML = "Zac"
            await sleep(500)
            title.append("'")
            index = 2
            change = false
            await sleep(200)
        }
    }
    console.log(word[1-2])
}

window.onload = animate()