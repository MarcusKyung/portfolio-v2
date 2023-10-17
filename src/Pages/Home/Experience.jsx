import data from "../../data/index.json";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Experience() {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const onOpenModal = (experience) => {
    setSelectedExperience(experience);
    setOpen(true);
  };

  const onCloseModal = () => {
    setSelectedExperience(null);
    setOpen(false);
  };

  return (
    <section className="Experience--section" id="Experience">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading"> Work Experience</h2>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1NxczOcIaxBOPZoU7-9yaYqrhq_ernkZd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-github">View My Resume</button>
          </a>
        </div>
      </div>

      {selectedExperience && (
        <Modal id="modalz" open={open} onClose={onCloseModal} center classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}>
          <h2 id="selectedExperienceCompany"><strong>{selectedExperience.company_name}</strong></h2>
          <h3 id="selectedExperienceTitle">{selectedExperience.title} - {selectedExperience.range}</h3>
          <hr />
          <p className="experienceDetails">{selectedExperience.description1}</p>
          <p className="experienceDetails">{selectedExperience.description2}</p>
          <p className="experienceDetails">{selectedExperience.description3}</p>
          <p className="experienceDetails">{selectedExperience.description4}</p>
          <p className="experienceDetails">{selectedExperience.description5}</p>
          <hr />
        </Modal>
      )}

      <div className="portfolio--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="Experience--section--card" onClick={() => onOpenModal(item)}>
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
          </div>
        ))}
      </div>

      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Education</h2>
        </div>
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
