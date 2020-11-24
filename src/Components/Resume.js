import React, { Component } from 'react';
import iconreact from '././icons/iconreact.png'
import bootstrap from '././icons/boostrap.png'
import css from '././icons/css.png'
import html from '././icons/html.png'
import javascript from '././icons/javascript.png'
import node from '././icons/node.png'
import redux from '././icons/redux.png'
import sequelize from '././icons/sequelize.png'
import sql from '././icons/sql.png'
class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var ITstudy = this.props.data.ITstudy.map(function(ITstudy){
        return <div key={ITstudy.company}><h3>{ITstudy.company}</h3>
            <p className="info">{ITstudy.title}<span>&bull;</span> <em className="date">{ITstudy.years}</em></p>
            <p>{ITstudy.description}</p>
        </div>
      })
/*       var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      }) */
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row ITstudy">

         <div className="three columns header-col">
            <h1><span>study IT</span></h1>
         </div>

         <div className="nine columns main-col">
          {ITstudy}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {/* {skills} */} 

  
            <img  style={{width: '15%', height: '15%'}} src={html}/>
            <img  style={{width: '15%', height: '15%'}} src={css}/>
            <img  style={{width: '15%', height: '15%'}} src={javascript}/>
            <img  style={{width: '13%', height: '15%'}} src={bootstrap}/>
            <img  style={{width: '15%', height: '15%'}} src={iconreact}/>
            <img  style={{width: '15%', height: '15%'}} src={redux}/>
            <img  style={{width: '19%', height: '15%'}} src={node}/>
            <img  style={{width: '15%', height: '15%'}} src={sql}/>
            <img  style={{width: '15%', height: '15%'}} src={sequelize}/>
       
            <img  style={{width: '40%', height: '15%'}} src='https://mwiki.fib.upc.edu/pti/images/9/9e/Express.png'/>
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
