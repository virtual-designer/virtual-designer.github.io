<script>
    export default {
        name: 'Navbar',
    };
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://avatars.githubusercontent.com/u/68149013?s=40&v=4" class="img-fluid"> | Ar Rakin
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="https://github.com/virtual-designer">GitHub</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link" aria-current="page">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
</template>

<style>

</style>