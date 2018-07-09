let square = (num) => num * num
console.log(square(9))

let user = {
  name: 'Matt',
  sayHi: () => {
    console.log('Hi')
  },
  sayHiAlt () {
    console.log(`Hi I'm ${this.name}`)
  }
}

user.sayHi()
user.sayHiAlt()
