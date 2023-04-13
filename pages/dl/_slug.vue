<template>
    <div>
        <!-- <Navbar /> -->

        <div class="hero min-h-screen bg-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-xl">
                    <NuxtLink to="/">
                        <img src="/assets/img/logo.png" class="m-auto pb-10 pt-10" alt="">
                    </NuxtLink>

                    <video width="265" height="300" controls class="rounded-xl shadow-xl">
                        <source :src="'https://drive.google.com/uc?export=download&id=' + slug" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>

                    <br>
                    <a :href="'https://drive.google.com/uc?export=download&id=' + slug" target="_blank"
                        class="btn  btn-accent btn-wide my-2"><i class="ri-download-2-fill ri-lg"></i>
                        &nbsp;
                        Download
                    </a>
                    <br> <br>



                    <!-- The button to open modal -->

                    <!-- Put this part before </body> tag -->
                    <input type="checkbox" id="my-modal" class="modal-toggle" checked />
                    <div class="modal">
                        <div class="modal-box bg-primary outline-none outline-accent/10 outline-1 p-0">
                            <h3 class="font-bold text-2xl bg-zinc-200 text-primary p-2">PERHATIAN</h3>
                            <div class="px-5 pb-5 pt-2">
                                <p class="py-4">Link hanya berlaku selama 2x24 Jam. Lebih dari itu link akan kadaluarsa dan
                                    video sudah tidak dapat diakses lagi.</p>
                                <p class="py-4">Jika butuh bantuan, silahkan datangi salah satu kru yang menggunakan ID Card
                                    <b>"PIC"</b> atau hubungi melalui live chat di pojok kanan bawah pada halaman ini.
                                </p>
                                <div class="modal-action">
                                    <label for="my-modal" class="btn btn-outline m-auto text-white">Oke,
                                        Mengerti</label>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- <div class="my-10 w-full">
                        <a href="https://www.bridestory.com/tholee-studio" title="Tholee Studio" target="_blank"
                            rel="dofollow"><img alt="Tholee Studio" width="154" height="40" class="m-auto"
                                src="https://business.bridestory.com/assets/images/badges/trusted/darkpink.png" /></a>
                    </div>

                    <div class="grid grid-flow-col gap-3">
                        <div></div>
                        <NuxtLink to="/">
                            <i class="ri-global-fill ri-xl"></i>
                        </NuxtLink>
                        <a href="https://www.instagram.com/tholee.studio/" target="_blank"><i
                                class="ri-instagram-fill ri-xl"></i></a>
                        <a href="https://www.youtube.com/channel/UC-qeR0fROkN9T2zzI1WiVqw" target="_blank"><i
                                class="ri-youtube-fill ri-xl"></i></a>
                        <div></div>
                    </div> -->
                </div>
            </div>
            <WavePrimary />
        </div>
        <!-- 
        <div id="projects">
            <div v-for="project in projects" :key="project.judul" class="hero bg-secondary text-center md:text-left">
                <div class="hero-content flex-col md:flex-row py-20 lg:px-10 gap-10 z-40 border-b-accent/10 border-b-2">
                    <iframe height="215" :src="project.url" class=" sm:w-96 shadow-2xl rounded-3xl"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <div class="text-accent max-w-sm lg:max-w-2xl">
                        <div class="badge badge-accent badge-lg text-secondary font-normal mb-2 uppercase">
                            {{ project.kategori }}</div>
                        <div class="tooltip tooltip-warning font-medium" data-tip="Jobdesk">
                            <div
                                class="badge badge-outline badge-warning badge-lg text-secondary font-normal mb-2 uppercase">
                                {{ project.jobdesk }}</div>
                        </div>
                        <h1 class="text-[2.9rem] font-bold text-white">{{ project.judul }}</h1>

                        <p class="py-6">{{ project.deskripsi }}</p>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <Foot /> -->
    </div>
</template>

<script>
export default {
    async asyncData({ params, $axios }) {
        const slug = params.slug // When calling /abc the slug will be "abc"
        // const result = await $http.$get(`https://api.nuxtjs.dev/results/${params.id}`)
        // const result = await $axios.$get(`https://drive.google.com/uc?export=download&id=1NNLnhUg8pLZ7BaqGqo6MxBecU1VR1kFOa`)

        return { slug }
    }
}
</script>