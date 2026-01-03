<template>
  <div class="contact-card bento-card">
    <span class="card-label">Contact</span>

    <div class="contact-list">
      <div class="contact-row">
        <span class="contact-label">Email Address</span>
        <span class="contact-dots"></span>
        <span class="contact-value"><a target="_blank" href="mailto:gyauelvis@gmail.com">Say Hello</a></span>
      </div>
      <div class="contact-row">
        <span class="contact-label">Connect With Me</span>
        <span class="contact-dots"></span>
        <span class="contact-value"><a target="_blank"
            href="https://www.linkedin.com/in/gyauboahenelvis/">Connect</a></span>
      </div>
      <div class="contact-row">
        <span class="contact-label">Read My Blogs</span>
        <span class="contact-dots"></span>
        <span class="contact-value"><a target="_blank" href="https://dev.to/gyauelviss">Read</a></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  min-height: 300px;
}

a {
  color: var(--accent-green);
  text-decoration: underline;
}

a:hover {
  color: var(--accent-green);
  text-decoration: none;
}

.card-label {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  border-radius: 100px;
  background: var(--card-label-bg);
  width: fit-content;
}

.contact-list {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.contact-row {
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: none;
}

.contact-row:last-child {
  padding-bottom: 0;
}

.contact-label {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
  flex-shrink: 0;
}

.contact-dots {
  flex-grow: 1;
  border-bottom: 1px dotted var(--border-color);
  margin: 0 12px;
  position: relative;
  top: -4px;
}

.contact-value {
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
  flex-shrink: 0;
}
</style>
