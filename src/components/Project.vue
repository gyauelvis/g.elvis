<script setup>
</script>
<template>
    <div class="wrapper">
        <div class="container">
            <div class="heading">
                <div>
                    <div class="red-circle"></div>
                    <h2>Projects</h2>
                </div>
                <div class="current-stuff-container">
                    <section>
                        <div>
                            <span>🤖</span>
                            <h3><a href="https://github.com/jdboachie/dbex">Dbex</a></h3>
                            <div> - </div>
                            <p>Project Lead</p>
                        </div>
                        <div>
                            <article>
                                I led my class team in developing a dataspace app using <span
                                    class="tech">Next.js</span>,
                                <span class="tech">Prisma ORM</span>, and
                                <span class="tech">Supabase</span> The app allows users to connect to multiple <span
                                    class="tech">PostgreSQL</span> databases,
                                write, execute, save, and export <span class="tech">SQL</span> queries seamlessly. This
                                project enhances database
                                management efficiency by providing an intuitive and interactive interface for handling
                                queries. 🚀💾
                            </article>
                        </div>
                    </section>
                    <section>
                        <div>
                            <span>🤖</span>
                            <h3>Shell</h3>
                        </div>
                        <div class="date">
                            Jan 2025 - Present
                        </div>
                        <div>
                            <article>
                                I built a functional shell using <span class="tech">fork(), execvp(), and
                                    waitpid()</span> system
                                calls. This involved implementing command execution, managing parent-child
                                processes, and handling dynamic memory allocation and cleanup for efficient command
                                processing. 🖥️💻
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
    width: 3rem;
    height: 3rem;
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
            gap: 0.5rem;
        }
    }

    .date {
        font-style: italic;
    }

    h3 {
        font-weight: bold;
    }

    .tech {
        font-family: var(--playfair);
        font-weight: bold;
        color: var(--black-text-90);
        background-color: #09122C;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        color: blue;
    }

}

a {
    color: blue;
    text-decoration: underline;
}
</style>