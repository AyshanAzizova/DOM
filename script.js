// const header = document.getElementsByTagName("header")
// const nav = document.createElement("nav")
// const logo = document.createElement("div")
// const h1 = document.createElement("h1")
// const ul = document.createElement("ul")
// const li1 = document.createElement("li")
// const li2 = document.createElement("li")
// const li3 = document.createElement("li")
// const li4 = document.createElement("li")
// const li5 = document.createElement("li")
// const a1 = document.createElement("a")
// a1.setAttribute("href", "#")
// const a2 = document.createElement("a")
// a2.setAttribute("href", "#")
// const a3 = document.createElement("a")
// a3.setAttribute("href", "#")
// const a4 = document.createElement("a")
// a4.setAttribute("href", "#")
// const a5 = document.createElement("a")
// a5.setAttribute("href", "#")



// h1.textContent = "LOGO"
// a1.textContent = "Home"
// a2.textContent = "Blog"
// a3.textContent = "About"
// a4.textContent = "Contact"
// a5.textContent = "Basket"


// header[0].append(nav)
// nav.append(logo, ul)
// logo.append(h1)
// ul.append(li1, li2, li3, li4, li5)
// li1.append(a1)
// li2.append(a2)
// li3.append(a3)
// li4.append(a4)
// li5.append(a5)

// // Navbar style
// nav.style.display = "flex"
// nav.style.justifyContent = "space-around"
// nav.style.alignItems = "center"
// nav.style.background = "black"
// nav.style.color = "white"
// ul.style.listStyleType = "none"
// ul.style.display = "flex"
// ul.style.gap = "40px"
// a1.style.color = "white"
// a2.style.color = "white"
// a3.style.color = "white"
// a4.style.color = "white"
// a5.style.color = "white"
// h1.style.fontSize = "32px"
// a1.style.fontSize = "18px"
// a2.style.fontSize = "18px"
// a3.style.fontSize = "18px"
// a4.style.fontSize = "18px"
// a5.style.fontSize = "18px"


// InnerHtml ile yazilmis nav
const header = document.getElementsByTagName("header")
header[0].innerHTML = `
  <nav>
    <div>
       <h1>Logo</h1>
    </div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Basket</a></li>
    </ul>
  </nav>
`