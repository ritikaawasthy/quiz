import "./landing-page.css";

export default function LandingPage(){
  return(
    <section className='grid-two-layout-container'>

    <article className='grid-two-layout-left hero-container'>
      <div className='hero-head'>
        <h1 className="fw-med"><div>Learn</div> new concepts <div>for each question</div></h1>
      </div>

      <div className="hero-small">
        <p className='f-m grey fw-li'>We help you prepare for interviews</p>
      </div>
      <div className='container'>
        <button className="button l primary-bg white f-m mg-r-m">Start Solving</button>
        <button className="button-sec l mg-l-m f-m primary">Know More</button>
      </div>
    </article>

    <article className='grid-two-layout-right'>
      <img className="hero-img" src="media/landing-logo.svg"></img>
    </article>


    </section>
  )
}
