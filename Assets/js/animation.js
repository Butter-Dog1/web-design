function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  

async function animate() {
    var title = document.getElementById("title")
    for (let index = 0; index < 3; index++) {
        await sleep(500)
        title.innerHTML = title.innerHTML.slice(0, -1)
    }
    await sleep(300)
    var word = ["Z", "a", "c", "s", " ", "w", "e", "b", "s", "i", "t", "e"];
    
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
}

window.onload = animate()