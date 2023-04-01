// Add your code here
//  const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
//  }

//  fetch("http://localhost:3000/dogs", configurationObject)

//  split the body of our request

//  const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//  }

//  const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//  }

//  fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (object) {
//         console.log(object)
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarok!")
//         console.log(error.message)
//     })


//pass anonymous object as the second argument to fetch
//  fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
//  });


// function submitData () {
//     fetch(" http://localhost:5500/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify({
//             name: "John Doe",
//             email: "johndoe@example.com"
//         })
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error =>  {
//         alert("Bad things! Ragnarok!")
//         console.log(error.message)
//     })
// }

// submitData()

// const formData = {
//     name: "John",
//     email: "john@example.com"
// }

// const configurationObject = {
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// }

// function submitData () {
// fetch("http://localhost:5500/users", configurationObject)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => error.message)
// }
// submitData()


function submitData() {
  const formData = {
    name: "John",
    email: "user@example.com"
  };

  return fetch('http://localhost:5500/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    const id = data.id;
    const userElement = document.createElement('div');
    userElement.innerHTML = `Name: ${name}, Email: ${email}, ID: ${id}`;
    document.body.appendChild(userElement);
  })
  .catch(error => {
    const errorElement = document.createElement('div');
    errorElement.innerHTML = error.message;
    document.body.appendChild(errorElement);
  });
}
