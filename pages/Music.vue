<template>
    <div>
        <!-- <Navbar /> -->

        <div class="hero min-h-screen bg-primary">
            <div class="hero-content  z-40">
                <div class="max-w-xl">

                    <b>1. Be Ok</b> <br>
                    <audio width="265" height="300" controls class="rounded-xl shadow-xl">
                        <source :src="'https://drive.google.com/uc?export=download&id=1DEG7QsoE-ymIkTkyYwourp2yAkCPTW3X'"
                            type="audio/mpeg">
                        Your browser does not support the video tag.
                    </audio> <br>

                    <b>2. Body Back</b> <br>
                    <audio width="265" height="300" controls class="rounded-xl shadow-xl">
                        <source :src="'https://drive.google.com/uc?export=download&id=1DURpkUKD7V9a-Euq8UVFfRFoTyWxwlZD'"
                            type="audio/mpeg">
                        Your browser does not support the video tag.
                    </audio> <br>

                    <b>3. Last Dance</b> <br>
                    <audio width="265" height="300" controls class="rounded-xl shadow-xl">
                        <source :src="'https://drive.google.com/uc?export=download&id=1KBTyyWBnM4xP8Qb3UnVlUFSiQZJPf4hx'"
                            type="audio/mpeg">
                        Your browser does not support the video tag.
                    </audio> <br>

                    <b>4. Lonely World</b> <br>
                    <audio width="265" height="300" controls class="rounded-xl shadow-xl">
                        <source :src="'https://drive.google.com/uc?export=download&id=1DimbiJAcCOd5F5iEQbIB5jd_eBLHXbst'"
                            type="audio/mpeg">
                        Your browser does not support the video tag.
                    </audio> <br>

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
document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

export default {
    data() {
        return {
            projects: {
                // robotikauns: {
                //     judul: "ROBOTIKA UNS",
                //     kategori: "company profile",
                //     jobdesk: "all in",
                //     url: "https://www.youtube.com/embed/garImIs1Isc",
                //     deskripsi: "Memperkenalkan Unit Kegiatan Mahasiswa Robotika di Universitas Sebelas Maret dengan konsep 'freezing time' untuk merepresentasikan ruang gerak yang terbatas di saat pandemi Covid-19."
                // },
            }
        };
    },
}
</script>