<template>
<footer class="w-full border-t border-solid border-color-border h-20">
    <Container class="py-5 flex lg:flex-row flex-col justify-between items-center">
        <span class="flex items-center text-description-text font-medium text-sm">
            <p>Softgod</p>
            <div class="w-px h-6 bg-color-border mx-4"></div>
            <p>Александр Софтов</p>
        </span>
        <div class="flex justify-between items-center my-4 lg:my-0">
            <a href="https://github.com/Softgod4" class="mx-4">
                <NuxtImg src="/image/navbar/github.svg" class="w-6 h-6"/>
            </a>
            <a href="https://discord.gg/qPcTFHgfHa" class="mx-4">
                <NuxtImg src="/image/navbar/discord.svg" class="w-6 h-6"/>
            </a>
        </div>
        <span class="flex items-center text-description-text font-medium text-sm">
            <a href="blog">Новости</a>
            <div class="w-px h-6 bg-color-border mx-4"></div>
            <p href="#">Главная</p>
        </span>
    </Container>
</footer>
</template>