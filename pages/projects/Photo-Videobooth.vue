<template>
    <div>
        <Navbar />

        <div class="hero min-h-screen bg-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-lg">
                    <p class="text-xl tracking-[0.3em]"><b>OUR</b> PROJECTS</p>
                    <h1 class="pb-8 pt-2 text-5xl font-bold">PHOTO / VIDEOBOOTH</h1>
                    <a href="#projects" class="btn btn-outline btn-accent">Scroll &nbsp; <i
                            class="ri-arrow-down-line pt-1 animate-bounce"></i></a>
                </div>
            </div>
            <WavePrimary />
        </div>

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
        </div>

        <Foot />

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
    title: 'Photo / Videobooth',
})

const projects = ref({
    pestarakyatbri: {
        judul: "PESTA RAKYAT SIMPEDES BRI MADIUN",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/d23e5ioc_8Y",
        deskripsi: "360 Videobooth pada acara Pesta Rakyat Simpedes BRI di Stadion Wilis Madiun tanggal 19 November 2022."
    },
    silviaimam: {
        judul: "THE WEDDING OF SILVIA & IMAM",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/J7pbN_YpF3o",
        deskripsi: "360 Videobooth pada acara akad & resepsi pernikahan Silvia & Imam tanggal 18 November 2022 di Pemalang, Jawa Tengah."
    },
    bebimart12th: {
        judul: "12 TAHUN ANNIVERSARY BEBIMART",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/xCG5zWsxlSw",
        deskripsi: "360 Videobooth pada acara Bebifest 12th Anniversary Bebimart November 2022 di Karanganyar."
    },
    reginapacis: {
        judul: "OPEN HOUSE SMA REGINA PACIS SURAKARTA 2022",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/beKLiMK7ceM",
        deskripsi: "360 Videobooth pada acara Open House PPDB SMA Regina Pacis Surakarta tanggal 5 November 2022."
    },
    sahabatibu: {
        judul: "ANNIVERSARY SAHABAT IBU 2022",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/TpzfUa83dsU",
        deskripsi: "360 Videobooth pada acara Anniversary Sahabat Ibu tanggal 30 Oktober 2022 di hotel Alana Surakarta."
    },
    youthteensimpact: {
        judul: "YOUTH & TEENS IMPACT ANNIVERSARY 2022",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/25zQfgcpsn4",
        deskripsi: "360 Videobooth pada acara Youth & Impact Anniversary tanggal 27 Oktober 2022 di GBI Keluarga Allah."
    },
    lulukakbar: {
        judul: "THE WEDDING OF LULUK & AKBAR",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/fOSN1ys0CkM",
        deskripsi: "360 Videobooth pada acara resepsi pernikahan Luluk & Akbar tanggal 9 Oktober 2022 di Cepogo, Boyolali."
    },
    reunifk: {
        judul: "REUNI FK UNS ANGKATAN 2002",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/AM8gLGROYU0",
        deskripsi: "360 Videobooth pada acara Reuni Fakultas Kedokteran Universitas Sebelas Maret angkatan 2002 tanggal 24 September 2022."
    },
    aktekstil: {
        judul: "WISUDA VI AK-TEKSTIL 2022",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/FZGj_XzgO6I",
        deskripsi: "360 Videobooth pada event Wisuda VI Program Diploma II AK-Tekstil Solo tanggal 22 September 2022."
    },
    hobstudio: {
        judul: "GRAND OPENING HOB STUDIO",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/U2F4YXnKHHc",
        deskripsi: "360 Videobooth pada event Grand Opening studio baru House Of Badriyah tanggal 10 September 2022 di Mojosongo."
    },
    pkkmbisiska2022_360: {
        judul: "PKKMB ISI SURAKARTA 2022",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/EKi3QreuNXo",
        deskripsi: "360 Videobooth pada event PKKMB Gatotkaca, Institut Seni Indonesia Surakarta tanggal 31 Agustus 2022 di Teater Besar ISI Surakarta."
    },
    festivalbalekambang2022_360: {
        judul: "FESTIVAL BALEKAMBANG 2022",
        kategori: "360 Videobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/oezhg8CIId8",
        deskripsi: "360 Videobooth pada event Festival Balekambang 2022 tanggal 20 sampai 21 Agustus 2022 di Taman Balekambang Solo."
    },
    agnesaldo180: {
        judul: "THE WEDDING OF AGNES & ALDO",
        kategori: "180 Photobooth",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/GLk3RJ565F4",
        deskripsi: "180 Photobooth menggunakan 10 kamera DSLR pada acara resepsi pernikahan Agnes & Aldo tanggal 2 Juli 2022."
    },
})

</script>
