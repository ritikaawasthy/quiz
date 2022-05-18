import "./navbar.css"

export default function Navbar(){
  return(
    <header>
    <nav class="nav navbar">
           <img class="start" src="/media/QuizGrad.png">
           </img>
           <ul class="list list-inline f-m sec-c">
             <li>Home</li>
             <li>Tab 1</li>
             <li>Tab 2</li>
             <li>Tab 3</li>
             <li>Tab 4</li>
           </ul>
         </nav>
        <hr className="nav-line"></hr>
    </header>
      )
}
