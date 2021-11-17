let sayHelloButton = document.querySelector("#say-hello-button")

sayHelloButton.addEventListener('mouseover', () => {
    sayHelloButton.style.backgroundColor = 'black';
    sayHelloButton.style.color = 'white';
})

sayHelloButton.addEventListener('mouseout', () => {
    sayHelloButton.style.backgroundColor = '#EFEFEF';
    sayHelloButton.style.color = 'black';
})

const sayHello = () => {
    axios.get('http://localhost:4004/say-hello').then((res) => {
        let helloText = document.getElementById('hello-text');
        helloText.style.display = 'block';
        helloText.style.backgroundColor = 'green';
        helloText.textContent = res.data;
    })
}

sayHelloButton.addEventListener('click', sayHello);

const ohMy = () => {
    axios.get('http://localhost:4004/animals')
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            animal = document.createElement('p');
            animal.textContent = response.data[i]
     document.body.appendChild(animal);
     //console.log(response.data[i])
    }
  })
  .catch(error => {
    console.log('ERROR', error)
})
}
document.getElementById('animals-button').addEventListener('click', ohMy)