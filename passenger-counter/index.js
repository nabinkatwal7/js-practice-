let count = 0
let last_entry = []
let count_el = document.getElementById('count-el')
let saved = document.getElementById('saved')

function increment(){
    count++
    count_el.innerText = count
}

function save(){
    last_entry.push(count)
    saved.innerText = last_entry
}
