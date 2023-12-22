<script setup>

</script>

<template>
    <div class="nav">
        <div class="nav-bar">
            <span>
                g.elvis
            </span>
            <a href="#">say hello</a>
        </div>
    </div>
</template>

<style scoped>

.nav{
    display: flex;
    justify-content: center;
}
.nav-bar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    width: 100vw;
    padding: 0 1.5rem;
    max-width: 1000px;
}

.nav-bar :is(span, a){
    font-family: var(--poppins);
    color: var(--black-text-90);
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
}
.nav-bar span::before{
    content: '<';
}
.nav-bar span::after{
    content: ' />';
}

@media screen and (min-width: 550px) and (max-width: 1000px) {
    .nav-bar{
        max-width: 700px;
    }
}

</style>