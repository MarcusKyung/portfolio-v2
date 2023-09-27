import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="Experience--section" id="Experience">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* <p className="sub--title">September 2023</p> */}
          <h2 className="sections--heading">Experience & Education</h2>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1KgSMv5xuSpI5N-ZVunyz19iWZp0WBV93/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-github">View My Resume</button>
          </a>
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="Experience--section--card">
            <div className="Experience--section--card--author--detail">
              <img src={item.src} alt="Avatar"/>
              <div>
                <p className="text-md Experience--author--name">
                  {item.company_name}
                </p>
                <p className="text-md Experience--author--designation">
                  {item.title}
                </p>
              </div>
            </div>
            {/* <div className="experience--description-container">
              {item.description.split('\n').map((text, idx) => (
                <p className="text-md" key={idx}>
                  {text}
                </p>
              ))}
            </div> */}
          </div>
        ))}
      </div>
      <div className="portfolio--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="Experience--section--card">
            <div className="Experience--section--card--author--detail">
              <img src={item.src} alt="Avatar"/>
              <div>
                <p className="text-md Experience--author--name">
                  {item.company_name}
                </p>
                <p className="text-md Experience--author--designation">
                  {item.title}
                </p>
              </div>
            </div>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
