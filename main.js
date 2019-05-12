console.log('FUCK')
//const page = $('#page-manager')  
const page = document.querySelector('#page-manager');
//const pageParent = page.parent()
//const content = $('#content')
const content = document.querySelector('#content')
//page.remove()  
page.parentNode.removeChild(page);
const imgURL = chrome.runtime.getURL("images/aishath-naj-662589-unsplash.jpg")
//const newPageManager = document.createElement("ytd-page-manager")
const div = document.createElement("div")
//newPageManager.id = "bullshit"
div.id = "fuck"
const message = document.createElement("h1")
message.className = "fancy-text"
message.innerHTML = "Keep pushing... you'll get there."
message.style.margin = "60px 0px 0px 75px" 
div.appendChild(message)
const img = document.createElement("img")
img.src = imgURL
img.height = 840
img.width = 1260
div.appendChild(img)
//newPageManager.appendChild(div)
content.appendChild(div)
//content.appendChild(img)
// const image = $('<img />')
//   .attr('src', imgURL)
//   .attr('alt', "Person standing at the top of a mountain in the distance.")
//   content.prepend(image)
//pageParent.prepend(image)
//pageParent.prepend('<img src="aishath-naj-662589-unsplash.jpg">')
//alert("Hello from your Chrome extension!")

