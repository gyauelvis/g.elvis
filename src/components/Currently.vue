<script setup>
</script>
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
                                I oversee the recruitment of skilled tutors for each track, coordinate mentorship
                                sessions,
                                and ensure the effective supervision of tutors. My role is focused on creating a
                                structured
                                and impactful learning experience, <span class="key-words">bridging the digital skills
                                    gap</span>, and fostering
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
                                For my final year project, my group is working on developing a <span
                                    class="key-words">smart car tracking and
                                    control system for a
                                    2025 Nissan Sunny</span>. This system integrates wireless control of car doors,
                                remote engine
                                start, and intelligent notifications to remind drivers to retrieve belongings when
                                leaving
                                the vehicle. The goal is to enhance vehicle security and convenience using modern IoT
                                technologies. 🚗🔗
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

.red-circle {
    width: 1.5rem;
    height: 1.5rem;
    background-color: red;
    border-radius: 50%;
    margin-right: 1rem;
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

    section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.5rem;
        }
    }

    .date {
        font-style: italic;
    }

    h3 {
        font-weight: bold;
    }

    .key-words {
        font-family: var(--playfair);
        font-weight: bold;
        color: var(--black-text-90);
        background-color: #09122C;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        color: blue;
    }
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

    .current-stuff-container {
        div {
            flex-direction: row !important;
        }
    }
}
</style>