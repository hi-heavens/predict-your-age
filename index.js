const expressions = ['Whooops!', 'OMG!', 'Can you believe it?', 'Wow!', 'Yay!', 'Cool!'];
const nameTag = document.querySelector(".name");
const result = document.querySelector(".result");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");

let enteredName = "";
let api_url = "https://api.agify.io?name=";


submit.addEventListener("click", () => {
    enteredName = nameTag.value;
    if(enteredName.length === 0)
        result.innerHTML = `Please, reconfirm your name!`;
    else getAge();
});


async function getAge() {
    const response = await fetch(`${api_url}${enteredName}`);
    const data = await response.json();
    let {age} = data;
    let random = (Math.floor(Math.random() * expressions.length) + 1 - 1);
    if(age === null){
        console.log('Here')
        result.innerHTML = `${expressions[random]} You are Methuselah. No age prediction available!`;
        return;
    }
    result.innerHTML = `${expressions[random]} ${enteredName}, you are ${age} years old.`;
}

reset.addEventListener("click", () => {
    result.innerHTML = "";
    nameTag.value = "";
});