let page_content = "";
function createContent(one, two, three, four, file) {
  page_content = `
        <img src="img/1.jpg" alt="" />
        <img src="img/2.jpg" alt="" />
        <img src="img/3.jpg" alt="" />
        <img src="img/4.jpg" alt="" />
        <img src="img/5.jpg" alt="" />
    
        <div class="blackness"></div>
    
        <div class="content">
          <h1>This is the ${file} page</h1>
    
          <div style="display: flex; gap: 20px; margin-bottom: 20px">
            <a href="https://www.google.com" target="_blank">Google</a>
            <a href="https://www.youtube.com" target="_blank">YouTube</a>
            <a href="https://unsplash.com/s/photos/car" target="_blank"
              >Unsplash Car Photos</a
            >
          </div>
    
          <div style="display: flex; flex-direction: column; font-size: 22px">
            <a href="${one}.html">${one} Page</a>
            <a href="${two}.html">${two} Page</a>
            <a href="${three}.html">${three} Page</a>
            <a href="${four}.html">${four} Page</a>
          </div>
        </div>`
  document.querySelector("body").innerHTML = page_content;
}
let file = document.querySelector(".file").textContent;
switch (file) {
  case '0':
    createContent("First", "Second", "Third", "Fourth", "Main");
    break;
  case '1':
    createContent("Main", "Second", "Third", "Fourth", "First");
    break;
  case '2':
    createContent("Main", "First", "Third", "Fourth", "Second");
    break;
  case '3':
    createContent("Main", "First", "Second", "Fourth", "Third");
    break;
  case '4':
    createContent("Main", "First", "Second", "Third", "Fourth");
    break;
}