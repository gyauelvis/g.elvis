<template>
    <div class="wrapper">
      <div class="container">
        <div class="heading">
          <div>
            <div class="red-circle"></div>
            <h2>Currently</h2>
          </div>
          <div class="current-stuff-container">
            <section>
              <div>
                <h3>🚀 TechAble</h3>
                <span class="hyphen"> - </span>
                <p>Programs Manager</p>
              </div>
              <div class="date">
                Feb 2025 - Present
              </div>
              <div>
                <article>
                  I oversee the recruitment of skilled tutors for each track, coordinate mentorship sessions,
                  and ensure the effective supervision of tutors. My role is focused on creating a structured
                  and impactful learning experience, <span class="key-words">bridging the digital skills gap</span>, and fostering
                  inclusivity for students with disabilities.
                </article>
              </div>
            </section>
            <section>
              <div>
                <h3>🚀 Final Year Project</h3>
                <span class="hyphen"> - </span>
                <p>Group Lead</p>
              </div>
              <div class="date">
                Jan 2025 - Present
              </div>
              <div>
                <article>
                  For my final year project, my group is working on developing a <span class="key-words">smart car tracking and
                  control system for a 2025 Nissan Sunny</span>. This system integrates wireless control of car doors,
                  remote engine start, and intelligent notifications to remind drivers to retrieve belongings when leaving
                  the vehicle. The goal is to enhance vehicle security and convenience using modern IoT technologies. 🚗🔗
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    max-width: 1000px;
    padding: 1.5rem 0rem;
  }
  
  .heading div {
    display: flex;
    align-items: center;
  }
  
  
  .green-circle {
    width: 1rem;
    height: 1rem;
    background-color: green;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  .current-stuff-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    font-family: var(--space-mono);
    color: var(--gray);
  }
  
  .current-stuff-container section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .current-stuff-container section div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
  }
  
  .date {
    font-style: italic;
  }
  
  h3 {
    font-weight: bold;
  }
  
  .key-words {
    font-family: var(--playfair);
    font-weight: 500;
    color: #2563eb;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    border: 1px solid rgba(37, 99, 235, 0.2);
    transition: all 0.2s ease;
    display: inline;
    margin: 0 0.1rem;
    position: relative;
    box-shadow: 0 2px 4px rgba(37, 99, 235, 0.05);
    backdrop-filter: blur(4px);
  }
  
  .key-words:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
    border-color: rgba(37, 99, 235, 0.3);
  }
  
  .hyphen {
    display: none;
  }
  
  @media screen and (min-width: 768px) {
    .red-circle {
      width: 3rem;
      height: 3rem;
    }
    
    .hyphen {
      display: inline-block;
    }
    
    .current-stuff-container div {
      flex-direction: row !important;
    }
  }
  </style>