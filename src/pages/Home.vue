<script setup>
import Avatar from "../components/Avatar.vue";
import Divider from "../components/Divider.vue";
</script>

<template>
    <div class="container">
        <div class="row p-3 full">
            <div class="col-md-6 mx-auto text-center">
                <Avatar />
                <h1 class="mt-3">Hi, I'm <span class="text-primary">Ar Rakin</span>!</h1>
            </div>
        </div>
    </div>
    <hr>
    <div class="container">
        <div class="row pt-3">
            <div class="col">
                <h2 class="">About me</h2>
                <Divider width="120px" />
                <p>I'm a common man who has 2+ years of experience in PHP and Fullstack Web Development. That's it! I love playing chess. Also I laugh a lot.</p>
            </div>
        </div>

        <div class="row pt-3" id="contact">
            <div class="col">
                <h2>Contact</h2>
                <Divider width="120px" />
                <p>You can contact me using:</p>
                <br>
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <a href="https://github.com/virtual-designer">
                                    <i class="fab fa-github"></i> GitHub (virtual-designer)
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="https://github.com/onesoft-sudo">
                                    <i class="fab fa-github"></i> GitHub (OSN)
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="https://lichess.org/@rakinar2">
                                    <i class="fas fa-chess"></i> Lichess (@rakinar2)
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="https://discord.gg/Km7ZcfXT6P">
                                    <i class="fab fa-discord"></i> Discord (rakinar2#7578)
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="https://gitter.im/OneCloudNet/community">
                                    <i class="fab fa-gitter"></i> Gitter
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="https://stackoverflow.com/users/14588484/ar-rakin">
                                    <i class="fab fa-stack-overflow"></i> Stack Overflow (Ar Rakin)
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a href="mailto:rakinar2@gmail.com">
                                    <i class="fas fa-envelope"></i> Email (rakinar2@gmail.com)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row pt-5">
            <div class="col">
                <h2>About My Organization</h2>
                <Divider width="120px" />
                <p>At the end of 2020, I founded "OneCloudNet" for promoting open-source software development. Later at 2021, I founded "OneSoftNet" (A. K. A. OSN) which is a sub-organization of OneCloudNet. OSN is a software foundation that promotes and builds free and open source software projects. Now in these days, we're doing very well in our work.</p>
            </div>
        </div>

        <br>
        <br>
        <br>
    </div>
</template>

<style scoped>
    @media screen and (min-width: 970px) {
        .full {
            min-height: 90vh;
        }
    }

    .list-group li {
        background: #363434;
        border-color: #fff;
    }

    .list-group li a:not(:hover) {
        color: #fff;
        text-decoration: none;
    }

    .list-group li a i {
        height: 30px;
        width: 30px;
    }
</style>