
## tour-and-travel-server



User
Tour
Review

user {
    name
    email
    age
    photo
    role -> user, admin
    status -> active, inactive
}

tour {
    name
    duration
    rating
    price
    coverImage
    image[]
    startDate
    tourLocation
}

review {
    review
    rating
    tour -> ref
    user -> ref
}



## Higher order function explain by Meheraz
*higher order function
*// A higher-order function is a function that takes one or more functions as arguments, returns a function as its result, or both.
*// In other words, a higher-order function is a function that operates on other functions, either by taking them as arguments or by returning them.
*// This is a powerful concept in functional programming and allows for more abstract and flexible code.
*// Higher-order functions can be used for a variety of purposes, such as creating decorators, implementing callbacks, and composing functions.
*// In JavaScript, many built-in functions are higher-order functions, such as map, filter, and reduce.
