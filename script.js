//part 2
const inputDate = document.getElementById('inputDate') //get form date
const inputInfo = document.getElementById('inputInfo') //get form Info
const year = 31556926000 //year to millisec

//cal age = millisec / year = millisec
function calAge (age) {
    return age/year
}

//listener click on button form inputDate
inputDate.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault() // on click don't refresh page
    const [dateStart, dateEnd] = inputDate.querySelectorAll('input') // destructure array form querySelectorAll
    const calStart = new Date(dateStart.value).getTime()
    const calEnd = new Date(dateEnd.value).getTime()
    const innerP = inputDate.parentNode.querySelector('p')
    const calYear = calEnd - calStart
    if (calYear <= 0) {
        innerP.innerHTML = 'Please select your birth date agian'
        return
    }
    
    console.log(calAge(calYear) + ' Year')
    innerP.innerHTML = 'Age: ' + Math.floor(calAge(calYear))
})

// listener click on button form inputInfo
inputInfo.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault() // on click don't refresh page
    const [name, location, hobby] = inputInfo.querySelectorAll('input') // destructure array form querySelectorAll
    console.log(`
    ${name.value}
    ${location.value}
    ${hobby.value}
    `)

    inputInfo.parentNode.querySelector('.card').innerHTML = `
    <h3>Hi</h3>
    <p>My name is <strong>${name.value}</strong></p>
    <p>I live in <strong>${location.value}</strong></p>
    <p>I enjoy <strong>${hobby.value}</strong></p>
    `
})

// part 1 
let set = [false, true, 0, 1, "0", "000", "1", NaN, Infinity, -Infinity, "", "20", "Twenty", null, undefined]

set.forEach((i) => {
    console.log(i, 'Convert to Number', Number(i))
    console.log(i, 'Convert to String', String(i))
    console.log(i, 'Convert to Boolean', Boolean(i))
})
