<template>
    <div>
        <Navbar />

        <div class="hero min-h-screen bg-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-xl">
                    <p class="text-xl tracking-[0.3em]"><b>OUR</b> PROJECTS</p>
                    <h1 class="pb-8 pt-2 text-5xl font-bold">TVC/PSA</h1>
                    <a href="#projects" class="btn btn-outline btn-accent">Scroll &nbsp; <i
                            class="ri-arrow-down-line pt-1 animate-bounce"></i></a>
                </div>
            </div>
            <WavePrimary />
        </div>

        <div id="projects">
            <div v-for="project in projects" :key="project.judul" class="hero bg-secondary text-center md:text-left">
                <div class="hero-content flex-col md:flex-row py-20 lg:px-10 gap-10 z-40 border-b-accent/10 border-b-2">
                    <iframe height="215" :src="project.url" class="w-full sm:w-[420px] shadow-2xl rounded-3xl"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <div class="text-accent max-w-sm lg:max-w-full">
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
        </div>

        <Foot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: {
                malingdata: {
                    judul: "MALING DATA",
                    kategori: "public service announcement",
                    jobdesk: "all in",
                    url: "https://www.youtube.com/embed/_IqVofcfJCw",
                    deskripsi: "Maling data mengedukasi penonton bahwa kita tidak boleh sembarangan mengisi data pribadi pada situs yang kredibilitasnya tidak dapat dipercaya."
                },
                prokessmkbatik2: {
                    judul: "PROKES NEW NORMAL",
                    kategori: "public service announcement",
                    jobdesk: "all in",
                    url: "https://www.youtube.com/embed/fWTWTZ2ExOA",
                    deskripsi: "Video ini mengedukasi penonton tentang protokol kesehatan yang diberlakukan di SMK Batik 2 Surakarta pada saat era New Normal."
                },
            }
        };
    },
}
</script>