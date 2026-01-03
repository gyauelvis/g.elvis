<template>
  <div class="about-card bento-card">
    <span class="card-label">About me</span>

    <div class="about-content">
      <p class="about-text">
        I’m a pretty chill guy on a journey of figuring things out as I go. I do a bit of everything. I write code, I
        design when my love for clean aesthetics kicks in, and I genuinely enjoy making things look and feel simple. But
        what I enjoy the most is breaking down complex ideas until they finally make sense to someone.
      </p>

      <p class="about-text">
        I love showing up at events, meeting new people, and having good conversations. I talk a lot, laugh even more,
        and I’m always down to connect. Say hi to me on
        <a target="_blank" href="https://x.com/gyauboahen">X</a>.
      </p>

      <p class="about-text">
        When I’m not building or talking tech, I’m probably discovering new music. Right now, I can’t get enough of
        <a target="_blank" href="https://open.spotify.com/album/1jK9tjtq7oZcQuaJmYsnjC?si=dJdIIkcdRm2HVay6IkidMA">
          Joshua Baraka</a>
        from Uganda.
      </p>

    </div>
  </div>
</template>

<style scoped>
.about-card {
  display: flex;
  flex-direction: column;
  min-height: 380px;
  padding: 24px;
}

@media (max-width: 640px) {
  .about-card {
    min-height: 520px;
  }
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

.about-content {
  margin-top: auto;
}

.about-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 14px;
}

.about-text:last-child {
  margin-bottom: 0;
}
</style>
