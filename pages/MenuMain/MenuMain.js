function CreateMenuMain(planetPath){

  const menuInfo = `
    <header>
    <div class="menu-top">
      <div class="explore">
        <h5>Explore </h5>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="inpput">
        <input type="search" placeholder="Search...">
      </div>
      <div class="img-logo">
        <img  src="https://cdn.mos.cms.futurecdn.net/ByJHohidxU3p79FzQy4HxR-650-80.jpg.webp" alt="">
      </div>
      
      <div class="thanh-menu">
        <nav class="big-menu">
          <ul class="menu-level-1">
            <li><a href="">News & Events</a>
              <ul class="menu-level-2">
                <li class="big-li"><a href="">News & Events</a></li>
                <li><a href="">News Releases</a></li>
                <li><a href="">Recently Published</a></li>
                <li><a href="">Video Series on NASA+</a></li>
                <li><a href="">Podcasts & Audio</a></li>
                <li><a href="">Blogs</a></li>
                <li><a href="">Newsletters</a></li>
                <li><a href="">Social Media</a></li>
                <li><a href="">Media Resources</a></li>
                
              </ul>
            </li>
            <li><a href="">Multimedia</a>
              <ul class="menu-level-2">
                <li class="big-li"><a href="">Mutimedia</a></li>
                <li><a href="">NASA+</a></li>
                <li><a href="">Images</a></li>
                <li><a href="">NASA Live</a></li>
                <li><a href="">NASA Apps</a></li>
                <li><a href="">Podcasts</a></li>
                <li><a href="">Image of the Day</a></li>
                <li><a href="">e-Books</a></li>
                <li><a href="">Interactives</a></li>
                <li><a href="">STEM Multimedia</a></li>
                <li><a href="">NASA Brand & Usage Guidelines</a></li>
              </ul>
            </li>
            <li><a href="">NASA+ <span style="border: 1px solid red;">LIVE</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
    
  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", menuInfo);

  const menuMainCss = document.createElement("link");
  menuMainCss.rel = "stylesheet";
  menuMainCss.href = planetPath + "MenuMain.css";
  document.head.appendChild(menuMainCss);

  const fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css";
  document.head.appendChild(fontAwesome);
}