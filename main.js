console.log('FUCK')
const page = $('#page-manager')  //document.querySelector('#page-manager');
//const pageParent = page.parent()
const content = $('#content')
page.remove()  //page.parentNode.removeChild(page);
const imgURL = chrome.runtime.getURL("aishath-naj-662589-unsplash.jpg")
const newPageManager = document.createElement("ytd-page-manager")
newPageManager.id = "bullshit"
const img = document.createElement("img")
img.src = imgURL
newPageManager.appendChild(img)
content.appendChild(div)
//content.appendChild(img)
// const image = $('<img />')
//   .attr('src', imgURL)
//   .attr('alt', "Person standing at the top of a mountain in the distance.")
//   content.prepend(image)
//pageParent.prepend(image)
//pageParent.prepend('<img src="aishath-naj-662589-unsplash.jpg">')
//alert("Hello from your Chrome extension!")

