const input = document.getElementById("link-input")
const linkForm = document.getElementById("link-form")
const errMsg = document.getElementById("err-msg")
const successMsg = document.getElementById("success-msg")

linkForm.addEventListener("submit", formSubmit)

function validURL(str) {
    let pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ) // fragment locator
    return !!pattern.test(str)
}

function formSubmit(e) {
    e.preventDefault()

    if (input.value === "") {
        errMsg.innerText = "Please enter a link"
        input.classList.remove("border-green-500")
        input.classList.add("border-red")
    } else if (!validURL(input.value)) {
        errMsg.innerText = "Please enter a valid link"
        input.classList.remove("border-green-500")
        input.classList.add("border-red")
    } else {
        errMsg.innerText = ""
        successMsg.innerText = "Success"
        input.classList.remove("border-red")
        input.classList.add("border-green-500")
    }

    console.log(`Here is the input: ${input.value}`)
}
