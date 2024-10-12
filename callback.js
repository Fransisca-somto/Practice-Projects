//Never use callbacks unnecessarily 

// const mypromise = new Promise((resolve, reject) => {
//     const error = false; 
//     if (!error) {
//         resolve("Yes! resolved the promise!");
//     } else {
//         reject("No! rejected the promise");
//     }
// })

// // console.log(mypromise);

// // mypromise.then(value => {
// //     return value;
// // })
// // .then(nextvalue => {
// //     console.log(nextvalue + " This is the new value.")
// // })
// // .catch(err => {
// //     console.log(err)
// // })
// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("my Next Promise Resolved")
//     }, 3000)
// })

// myNextPromise.then(value => {
//     console.log(value);
// });

// mypromise.then(value => {
//     console.log(value);
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=> {
//         return response.json();
//     })
//     .then(data => {
//         data.forEach(user => {
//             console.log(user);
//         });
//     })

// console.log(users)

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data
}

anotherFunc();
console.log(myUsers.userList)