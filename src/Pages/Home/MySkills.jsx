import React from 'react';
import data from "../../data/index.json";
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


export default function MySkills() {

  const explicitTheme = {
    light: ['#ebedf0', '#82b5ff', '#65a0ff', '#488bff', '#307bff'],
    dark: ['#ebedf0', '#82b5ff', '#65a0ff', '#488bff', '#307bff'],
  };

  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 9;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };


  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        {/* <p className="section--title">My Skills</p> */}
        <h2 className="skills--section--heading">My Skillset</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div> 
      <div className="github--graph-center">
        <div>
          <GitHubCalendar labels={{totalCount: '{{count}} Activities in last 9 months'}} showWeekdayLabels="true" transformData={selectLastHalfYear} theme={explicitTheme} username="marcuskyung" renderBlock={(block, activity) => React.cloneElement(block, {'data-tooltip-id': 'react-tooltip', 'data-tooltip-html': `${activity.count} activities on ${activity.date}`,})}/>
          <ReactTooltip id="react-tooltip" />
        </div>
      </div>
    </section>
  );
}
