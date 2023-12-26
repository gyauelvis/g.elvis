<script setup>
import { gsap } from "gsap";
import { onMounted } from 'vue';
onMounted(() => {
    gsap.to('#stack div', {
        duration: 2
    })
})

</script>

<template>
    <div class="wrapper">
        <div class="container">
            <h2>
                <span>My Stack</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M29.3333 3.33337H2.66663V23.3334H29.3333V3.33337Z" stroke="#222222" stroke-width="1.5"
                        stroke-linejoin="round" />
                    <path
                        d="M24 13.3333L24.7071 14.0404L25.4143 13.3333L24.7071 12.6262L24 13.3333ZM8.00003 13.3333L7.29292 12.6262L6.58582 13.3333L7.29292 14.0404L8.00003 13.3333ZM19.293 10.0404L23.293 14.0404L24.7071 12.6262L20.7071 8.62621L19.293 10.0404ZM23.293 12.6262L19.293 16.6262L20.7071 18.0404L24.7071 14.0404L23.293 12.6262ZM11.2929 8.62621L7.29292 12.6262L8.70714 14.0404L12.7071 10.0404L11.2929 8.62621ZM7.29292 14.0404L11.2929 18.0404L12.7071 16.6262L8.70714 12.6262L7.29292 14.0404ZM16.3632 7.75745L13.6966 18.4241L15.6368 18.9092L18.3035 8.24251L16.3632 7.75745Z"
                        fill="#141B34" />
                    <path d="M18.6667 28.6667V23.3334M13.3334 28.6667V23.3334" stroke="#222222" stroke-width="1.5"
                        stroke-linecap="round" />
                    <path d="M9.33337 28.6666H22.6667" stroke="#222222" stroke-width="1.5" />
                </svg>
            </h2>
            <span class="subtitle">
                Check out the programming languages, frameworks and technologies I’m proficient at.
            </span>
            <div id="stack">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <path
                            d="M56.25 56.25C62.4632 56.25 67.5 51.2132 67.5 45C67.5 38.7868 62.4632 33.75 56.25 33.75C50.0368 33.75 45 38.7868 45 45C45 51.2132 50.0368 56.25 56.25 56.25Z"
                            stroke="#222222" stroke-opacity="0.9" stroke-width="1.5" stroke-linejoin="round" />
                        <path
                            d="M33.75 78.75C39.9634 78.75 45 73.7134 45 67.5V56.25H33.75C27.5368 56.25 22.5 61.2866 22.5 67.5C22.5 73.7134 27.5368 78.75 33.75 78.75Z"
                            stroke="#222222" stroke-opacity="0.9" stroke-width="1.5" stroke-linejoin="round" />
                        <path
                            d="M45 33.75V56.25H33.75C27.5368 56.25 22.5 51.2134 22.5 45C22.5 38.7866 27.5368 33.75 33.75 33.75H45Z"
                            stroke="#222222" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M45 11.25V33.75H33.75C27.5368 33.75 22.5 28.7132 22.5 22.5C22.5 16.2868 27.5368 11.25 33.75 11.25H45Z"
                            stroke="#222222" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M45 11.25V33.75H56.25C62.4634 33.75 67.5 28.7132 67.5 22.5C67.5 16.2868 62.4634 11.25 56.25 11.25H45Z"
                            stroke="#222222" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="#000000" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M7 7H16.5L15.5 17L12 18L8.5 17L8.25 14.5" stroke="#000000" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16 11.5H7.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M12 20.5L22.5 4H18.5L12 14L5.5 4H1.5L12 20.5Z" stroke="#000000" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M18.5 4H14.5L12 7.5L9.5 4H5.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div>
                    <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="#000000" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17 7H7.5L8 11.5H16L15.5 17L12 18L8.5 17L8.25 14.5" stroke="#000000" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z">
                        </path>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <path d="M78.75 78.75V11.25H11.25V78.75H78.75Z" stroke="#222222" stroke-opacity="0.9"
                            stroke-width="1.5" stroke-linejoin="round" />
                        <path
                            d="M46.8091 45V42.1875H41.1841V45H46.8091ZM41.1841 45V60H46.8091V45H41.1841ZM41.1841 60C41.1841 62.589 39.0856 64.6875 36.4967 64.6875V70.3125C42.1921 70.3125 46.8091 65.6955 46.8091 60H41.1841ZM36.4967 64.6875C34.7652 64.6875 33.2493 63.75 32.4346 62.3419L27.5656 65.1581C29.3444 68.2335 32.6761 70.3125 36.4967 70.3125V64.6875Z"
                            fill="#222222" fill-opacity="0.9" />
                        <path
                            d="M66.4965 48.75C65.1998 46.5082 62.7761 45 60 45H58.125C55.0185 45 52.5 47.5185 52.5 50.625C52.5 53.7315 55.0185 56.25 58.125 56.25H61.875C64.9815 56.25 67.5 58.7685 67.5 61.875C67.5 64.9815 64.9815 67.5 61.875 67.5H60C57.2239 67.5 54.8003 65.9918 53.5035 63.75"
                            stroke="#222222" stroke-opacity="0.9" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <path
                            d="M9.375 45C9.375 28.2062 9.375 19.8093 14.5921 14.5921C19.8093 9.375 28.2062 9.375 45 9.375C61.7936 9.375 70.1906 9.375 75.408 14.5921C80.625 19.8093 80.625 28.2062 80.625 45C80.625 61.7936 80.625 70.1906 75.408 75.408C70.1906 80.625 61.7936 80.625 45 80.625C28.2062 80.625 19.8093 80.625 14.5921 75.408C9.375 70.1906 9.375 61.7936 9.375 45Z"
                            stroke="#222222" stroke-width="1.5" />
                        <path
                            d="M58.125 34.3934C52.1201 28.5355 42.384 28.5355 36.3788 34.3934C30.3737 40.2514 30.3737 49.7486 36.3788 55.6065C42.384 61.4644 52.1201 61.4644 58.125 55.6065"
                            stroke="#222222" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#container {
    max-width: 1000px;
    overflow: hidden;
}

div:has(h2) h2 {
    font-family: var(--play-fair);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0;
}

#stack {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1000px;
    overflow: hidden;
    padding: 1rem 0;

}

#stack div {
    transition: transform 300ms linear;
}

#stack svg {
    width: 3rem;
    height: 3rem;
}

.subtitle {
    font-family: var(--poppins);
    font-size: 0.8rem;
    line-height: normal;
    padding: 0.5rem 0;
}
</style>