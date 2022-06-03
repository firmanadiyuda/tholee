<template>
    <div>
        <div id="services" class="py-24 px-7 xl:px-48 bg-primary">
            <div
                class="transition-all duration-300 ease-in-out text-5xl text-center w-full font-bold text-white/50 hover:text-white pb-16 tracking-normal hover:tracking-widest">
                <span class="font-extralight">OUR</span> SERVICES
            </div>

            <div class="grid lg:grid-cols-3 gap-12 ">
                <div v-for="jasa in jasas" :key="jasa.nama"
                    class="z-40 transition-all duration-200 ease-in-out outline-none outline-1 outline-accent/5 hover:outline-accent/70 hover:-translate-y-5 card max-w-sm lg:max-w-full mx-auto bg-secondary/70 shadow-xl text-accent">
                    <figure class="bg-accent">
                        <img :src="jasa.ilustrasi" class="px-10 py-5" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title tracking-wide font-bold text-white">{{ jasa.nama }}</h2>
                        <p class="opacity-70">{{ jasa.deskripsi }}</p>
                        <div class="card-actions justify-end mt-5">
                            <button class="btn btn-accent">Konsultasi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WavePrimary />
    </div>
</template>

<script>
export default {
    name: 'JasaComponent',
    data() {
        return {
            jasas: {
                profile: {
                    nama: "Company Profile",
                    deskripsi: "Perkenalkan perusahaan atau organisasi melalui video company profile yang akan membuat penonton mengenal lebih dekat.",
                    ilustrasi: "/assets/img/ilustrasi/company-profile.svg"
                },
                documentary: {
                    nama: "Creative Documentary",
                    deskripsi: "Dokumentasikan segala kegiatan menjadi 1 video highlight seperti event tahunan, pernikahan, outbond, hingga ulang tahun.",
                    ilustrasi: "/assets/img/ilustrasi/creative-documentary.svg"
                },
                movie: {
                    nama: "Movie Production",
                    deskripsi: "Kami melayani jasa konsultasi ide ataupun jasa eksekusi untuk pembuatan film panjang maupun film pendek.",
                    ilustrasi: "/assets/img/ilustrasi/movie-production.svg"
                },
                tvc: {
                    nama: "TVC/PSA",
                    deskripsi: "Buat iklan komersil, iklan produk, atau iklan layanan masyarakat yang membuat penonton tertarik dan terkesan.",
                    ilustrasi: "/assets/img/ilustrasi/tvc-psa.svg"
                },
                promo: {
                    nama: "Event Promotional",
                    deskripsi: "Promosikan acara dan event yang akan datang ke seluruh penjuru dunia maya melalui video atau motion graphic.",
                    ilustrasi: "/assets/img/ilustrasi/event-promotional.svg"
                },
                music: {
                    nama: "Photo/Videobooth",
                    deskripsi: "Buat event anda menjadi lebih memorable dengan menyediakan photo/videobooth (3D & 360) di lokasi event.",
                    ilustrasi: "/assets/img/ilustrasi/photo-videobooth.svg"
                },
            }
        }
    }
}
</script>

