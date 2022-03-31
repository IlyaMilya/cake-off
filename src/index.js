// your code here

let cakeName = document.getElementById('cake-name')
let cakeImage = document.getElementById('cake-image')
let reviewList = document.getElementById('review-list')
let description = document.getElementById('cake-description')

let cakeList = document.getElementById('cake-list')
//let reviews = res.reviews[0-3]

let reviewForm = document.getElementById('review-form')
let yourReview = document.getElementById('review')
 


const request = async () => {
    let req = await fetch ('http://localhost:3000/cakes/1')
    let res = await req.json()
    console.log(res)

    cakeName.textContent = res.name 
    cakeImage.src = res.image_url
    description.textContent = res.description
    
    let reviews = res.reviews
    reviews.forEach((element) => {
    let review = document.createElement('li')
    review.innerText = element
    reviewList.append(review)
    })
}
request()

let request2 = async () => {
    let req = await fetch ('http://localhost:3000/cakes')
    let res = await req.json()
    console.log(res)

    res.forEach((element) => {
   let li = document.createElement('li')
   li.innerHTML = element.name
   cakeList.append(li)
   
    })
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let li = document.createElement('li')
        li.innerText = yourReview.value
        reviewList.append(li)
        
    })
}

request2()