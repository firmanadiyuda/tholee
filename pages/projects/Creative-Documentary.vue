<template>
    <div>
        <Navbar />

        <div class="hero min-h-screen bg-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-xl">
                    <p class="text-xl tracking-[0.3em]"><b>OUR</b> PROJECTS</p>
                    <h1 class="pb-8 pt-2 text-5xl font-bold">CREATIVE DOCUMENTARY</h1>
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
    title: 'Creative Documentary',
})

const projects = ref({
    yusufpuri: {
        judul: "YUSUF & PURI",
        kategori: "wedding clip",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/VYDyj4U551E",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi acara pernikahan Yusuf & Puri."
    },
    margarethaanggi: {
        judul: "MARGARETHA & ANGGI",
        kategori: "wedding clip",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/JtVdxEG8eJ0",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi pemberkatan dan resepsi acara pernikahan Margaretha & Anggi."
    },
    netyary: {
        judul: "NETY & ARY",
        kategori: "wedding clip",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/Sm8999i1odk",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad pada acara pernikahan Nety & Ary."
    },
    bagusintan: {
        judul: "BAGUS & INTAN",
        kategori: "wedding clip",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/O2UZY_DLf7s",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Bagus & Intan."
    },
    abdurluluk: {
        judul: "ABDUR & LULUK",
        kategori: "wedding clip",
        jobdesk: "editing",
        url: "https://www.youtube.com/embed/GVzzA_mqPps",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Abdur & Luluk."
    },
    ayuheri: {
        judul: "AYU & HERI",
        kategori: "wedding clip",
        jobdesk: "editing",
        url: "https://www.youtube.com/embed/_bFMBiWJFG8",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Ayu & Heri."
    },
    fikafajar: {
        judul: "FIKA & FAJAR",
        kategori: "wedding clip",
        jobdesk: "editing",
        url: "https://www.youtube.com/embed/SVfT5d25V5k",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Fika & Fajar."
    },
    meldacandra: {
        judul: "MELDA & CANDRA",
        kategori: "wedding clip",
        jobdesk: "editing",
        url: "https://www.youtube.com/embed/fjXBXopnSIc",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Melda & Candra."
    },
    meylianaharris: {
        judul: "MEYLIANA & HARRIS",
        kategori: "wedding clip",
        jobdesk: "editing",
        url: "https://www.youtube.com/embed/jtPhwmcZ23s",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Meyliana & Harris."
    },
    niadika: {
        judul: "NIA & DIKA",
        kategori: "wedding clip",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/Dl9JIDxtG7I",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi resepsi pada acara pernikahan Nia & Dika."
    },
    faizindah: {
        judul: "FAIZ & INDAH",
        kategori: "wedding clip",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/gGzKX3MNQgc",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Faiz & Indah."
    },
    adhirifka: {
        judul: "ADHI & RIFKA",
        kategori: "wedding clip",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/0r74vlK2ej4",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Adhi & Rifka."
    },
    sidikfadilla: {
        judul: "SIDIK & FADILLA",
        kategori: "wedding clip",
        jobdesk: "all in",
        url: "https://www.youtube.com/embed/wyzeFTNv7Fw",
        deskripsi: "Creative Documentary berupa Wedding Clip Video pada saat prosesi akad dan resepsi pada acara pernikahan Sidik & Fadilla."
    },
})
</script>