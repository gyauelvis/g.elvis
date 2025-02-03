<template>
    <div class="wrapper">
        <div class="container">
            <div class="heading">
                <div>
                    <div class="red-circle"></div>
                    <h2>Experience</h2>
                </div>
                <div class="current-stuff-container">
                    <section>
                        <div>
                            <h3>🛠️ <a href="https://www.3farmate.com/">3farmate Robotics</a></h3>
                            <div class="hyphen"> - </div>
                            <p>Software Engineering Intern</p>
                        </div>
                        <div class="date">
                            October 2024 - December 2024
                        </div>
                        <article>
                            At 3Farmate Robotics, I led the redesign and development of the company's website to
                            enhance user experience and accessibility. Additionally, I built an integrated
                            system combining inventory management, project management, employee management, and an
                            employee portal, streamlining automated farming operations for improved efficiency.
                            🚜💡
                        </article>
                    </section>
                    <section>
                        <div>
                            <h3>🛠️ <a href="https://arnsoninnovate.com/">Arnson Innovate</a></h3>
                            <div class="hyphen"> - </div>
                            <p>Frontend Developer</p>
                        </div>
                        <div class="date">
                            November 2024 - January 2025
                        </div>
                        <article>
                            At Arnson Innovate, I collaborated on building Sikadaka, a community management web app
                            designed to streamline development task contributions and funeral donations. My role
                            involved frontend development in a Laravel environment, creating responsive interfaces, and
                            designing structured database schemas for efficient data management. 🌍💡
                        </article>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hyphen {
    display: none;
}

.container {
    max-width: 1000px;
    padding: 1.5rem 0rem;
}

.heading div {
    display: flex;
    align-items: center;
}

.red-circle {
    width: 1.5rem;
    height: 1.5rem;
    background: linear-gradient(135deg, #ff4646 0%, #ff7676 100%);
    border-radius: 50%;
    margin-right: 1rem;
    box-shadow: 0 4px 6px -1px rgba(255, 70, 70, 0.1), 0 2px 4px -1px rgba(255, 70, 70, 0.06);
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
    color: #666;
}

h3 {
    font-weight: bold;
}

a {
    color: blue;
    text-decoration: underline;
    display: inline;
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