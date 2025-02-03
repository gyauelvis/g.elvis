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
                                I led my class team in developing a dataspace app using
                                <span class="tech">Next.js</span>,
                                <span class="tech">Prisma ORM</span>, and
                                <span class="tech">Supabase</span> The app allows users to connect to multiple
                                <span class="tech">PostgreSQL</span> databases,
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
    padding: 1.5rem 0;
}

.heading div {
    display: flex;
    align-items: center;
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
    gap: 0.5rem;
}

.date {
    font-style: italic;
    color: #666;
}

h3 {
    font-weight: bold;
}

.tech {
    font-family: var(--playfair);
    font-weight: 500;
    background: linear-gradient(135deg, rgba(9, 18, 44, 0.08) 0%, rgba(9, 18, 44, 0.12) 100%);
    color: #2563eb;
    padding: 0.1rem 0.3rem;
    border-radius: 20px;
    border: 1px solid rgba(37, 99, 235, 0.1);
    transition: all 0.2s ease;
    display: inline-block;
    margin: 0 0.1rem;
    backdrop-filter: blur(4px);
}

.tech:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(37, 99, 235, 0.2);
}

a {
    color: #2563eb;
    text-decoration: underline;
    transition: color 0.2s ease;
}

a:hover {
    color: #1d4ed8;
}

@media screen and (min-width: 768px) {
    .red-circle {
        width: 3rem;
        height: 3rem;
    }

    .current-stuff-container div {
        flex-direction: row !important;
    }
}
</style>