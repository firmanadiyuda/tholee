<template>
    <div>
        <Navbar />



        <!-------------------------------- ALERT ------------------------------>
        <div v-if="alert_enabled" class="fixed mt-[71px] z-[50] w-full px-5">
            <div class="flex rounded-b-lg p-5 bg-yellow-400/90 max-w-2xl m-auto backdrop-blur-md text-primary text-left">
                <div class="bg-primary rounded-full m-auto p-2 mr-3">
                    <i class="ri-price-tag-3-fill text-yellow-400 ri-lg shrink-0 m-auto"></i>
                </div>
                <span class="font-normal font-poppins text-sm m-auto" v-html="alert"></span>
            </div>
        </div>
        <!---------------------------- END OF ALERT ---------------------------->



        <!-------------------------------- HERO ------------------------------>
        <div class="hero min-h-screen bg-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-xl">
                    <p class="text-xl tracking-[0.3em]"><b>360</b> VIDEOBOOTH</p>
                    <h1 class="pt-2 text-6xl font-bold text-yellow-400">TERMURAH</h1>
                    <h1 class="pb-8 pt-2 text-5xl">SE-INDONESIA!</h1>
                    <a href="#pengertian" class="btn btn-outline btn-accent normal-case"> <span
                            class="font-light text-2xl">IDR</span><span class="font-bold text-2xl text-yellow-400">{{ harga
                            }}</span><span class="font-light mt-2">/
                            Jam</span></a>
                </div>
            </div>
            <WavePrimary />
        </div>
        <!---------------------------- END OF HERO ---------------------------->



        <!-------------------------------- PENGERTIAN ------------------------------>
        <div id="pengertian" class="hero min-h-screen bg-secondary">
            <div class="hero-content flex-col lg:flex-row py-20 lg:px-10 gap-10 z-40">
                <img src="/assets/img/promo/360/booth.jpg" class="w-full max-w-sm shadow-2xl rounded-3xl" />
                <div class="text-accent max-w-sm lg:max-w-full">
                    <h1 class="text-[2.9rem] font-bold text-yellow-400 leading-none">360 Videobooth <span
                            class="text-white font-light">Itu Apa Sih?</span></h1>

                    <p class="py-6 text-accent text-sm font-montserrat">Merupakan layanan videobooth yang unik
                        dengan menggunakan kamera yang merekam secara berputar 360 derajat dibantu dengan alat khusus
                        otomatis. Hasil video kemudian diproses dan bisa langsung didownload oleh tamu
                        undangan/pengunjung di acara kamu menggunakan QR code secara instan.</p>

                    <p class="text-accent text-sm font-montserrat">Beberapa poin keunggulan layanan <b>360
                            Videobooth</b> dari kami yaitu:
                    <ul class="pb-6 list-disc ml-10 mt-3 text-sm text-yellow-500 font-montserrat font-bold">
                        <li>QR Code langsung keluar (printed)</li>
                        <li>Cloud Google Drive gallery real-time</li>
                        <li>Jaminan harga TERMURAH se-Indonesia!</li>
                    </ul>
                    </p>

                    <p class="pb-6 text-accent text-sm font-montserrat">Video hasil <b>360 Videobooth</b> dapat
                        ditambahkan watermark berupa logo perusahaan atau acara, brand produk dan juga dapat dimasukkan
                        soundtrack atau jingle produk yang akan meningkatkan <i>Brand Awareness</i> produk atau <i>Brand
                            Activation</i> saat para tamu undangan/pengunjung share ke akun media sosial mereka.
                    </p>
                </div>
            </div>

            <WaveSecondary />
        </div>
        <!---------------------------- END OF PENGERTIAN ---------------------------->



        <!-------------------------------- SAMPLES ------------------------------>
        <div id="samples" class="py-24 px-7 xl:px-48 bg-primary">
            <div
                class="transition-all duration-300 ease-in-out text-5xl text-center w-full font-bold text-white/50 hover:text-white pb-16 tracking-normal hover:tracking-widest">
                <span class="font-extralight">THE</span> <span class="text-yellow-400">SAMPLES</span>
            </div>

            <div class="grid lg:grid-cols-5 gap-12 ">
                <div v-for="sample in samples"
                    class="z-40 transition-all duration-200 ease-in-out outline-none outline-1 outline-accent/5 hover:outline-accent/70 hover:-translate-y-5 card max-w-sm lg:max-w-full mx-auto bg-secondary/70 shadow-xl text-accent">

                    <div class="card-body p-0">
                        <div>
                            <video width="265" height="300" controls controlslist="nodownload" class="rounded-xl shadow-xl">
                                <source :src="sample.id"
                                    type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <WavePrimary />
        <!---------------------------- END OF SAMPLES ---------------------------->



        <!-------------------------------- ADVANTAGES ------------------------------>
        <div id="advantages" class="py-24 px-7 xl:px-48 bg-secondary">
            <div
                class="transition-all duration-300 ease-in-out text-5xl text-center w-full font-bold text-white/50 hover:text-white pb-16 tracking-normal hover:tracking-widest">
                <span class="font-extralight">THE</span> <span class="text-yellow-400">ADVANTAGES</span>
            </div>

            <div class="grid lg:grid-cols-3 gap-12 ">
                <div v-for="jasa in jasas" :key="jasa.nama"
                    class="z-40 transition-all duration-200 ease-in-out outline-none outline-1 outline-accent/20 hover:outline-accent/70 hover:-translate-y-5 card max-w-sm lg:max-w-full mx-auto bg-secondary/70 shadow-xl text-accent">
                    <figure class="bg-neutral-800">
                        <img :src="jasa.ilustrasi" class="px-10 py-5" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title tracking-wide font-bold text-white uppercase">{{ jasa.nama }}</h2>
                        <p class="opacity-70 font-montserrat text-sm">{{ jasa.deskripsi }}</p>
                    </div>
                </div>
            </div>
        </div>
        <WaveSecondary />
        <!---------------------------- END OF ADVANTAGES ---------------------------->



        <!-------------------------------- WORKFLOWS ------------------------------>
        <div id="workflows" class="py-24 px-7 xl:px-48 bg-primary">
            <div
                class="transition-all duration-300 ease-in-out text-5xl text-center w-full font-bold text-white/50 hover:text-white pb-16 tracking-normal hover:tracking-widest">
                <span class="font-extralight">THE</span> <span class="text-yellow-400">WORKFLOW</span>
            </div>

            <ol class="relative border-l border-gray-700 max-w-sm m-auto z-10">
                <li v-for="workflow in workflows" :key="workflow.nomor" class="mb-10 ml-6">
                    <span
                        class="absolute mt-1 flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-yellow-900/20 dark:bg-yellow-600 font-bold text-sm text-primary">
                        {{ workflow.nomor }}
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ workflow.judul }}</h3>
                    <p class="text-sm font-montserrat text-gray-400" v-html="workflow.deskripsi">
                    </p>
                </li>
            </ol>

        </div>
        <WavePrimary />
        <!---------------------------- END OF WORKFLOWS ---------------------------->



        <!-------------------------------- EQUIPMENTS ------------------------------>
        <div id="equipments" class="py-24 px-7 xl:px-48 bg-secondary">
            <div
                class="transition-all duration-300 ease-in-out text-5xl text-center w-full font-bold text-white/50 hover:text-white pb-16 tracking-normal hover:tracking-widest">
                <span class="font-extralight">THE</span> <span class="text-yellow-400">EQUIPMENTS</span>
            </div>

            <div class="grid lg:grid-cols-4 gap-12">
                <div v-for="equipment in equipments" :key="equipment.judul"
                    class="z-40 transition-all duration-200 ease-in-out outline-none outline-1 outline-accent/20 hover:outline-accent/70 hover:-translate-y-5 card w-[100%] max-w-sm mx-auto bg-primary shadow-xl text-accent">
                    <div class="card-body w-full">
                        <h2 class="card-title tracking-wide font-bold text-white uppercase">{{ equipment.judul }}</h2>
                        <p class="opacity-70 font-montserrat text-sm w-full">{{ equipment.deskripsi }}</p>
                    </div>
                </div>
            </div>
        </div>
        <WaveSecondary />
        <!---------------------------- END OF EQUIPMENTS ---------------------------->



        <!-------------------------------- CALL TO ACTION ------------------------------>
        <div id="cta" class="py-24 px-7 xl:px-48 bg-primary">
            <div
                class="transition-all duration-300 ease-in-out text-5xl text-center w-full font-bold text-white/50 hover:text-white pb-16 tracking-normal hover:tracking-widest">
            </div>

            <div
                class="hero relative px-5 py-10 md:px-10 md:py-10 w-full m-auto rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-600 z-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 class="text-5xl font-bold text-primary uppercase"><span class="font-normal">Cuma</span>
                            {{ harga }}<span class="font-normal"> /jam!*</span></h1>
                        <p class="py-6 text-primary font-montserrat font-medium text-sm md:text-lg">Harga termurah
                            se-Indonesia! Jika kamu menemukan vendor lain dengan harga yang lebih murah dari kami dengan
                            fitur serupa, kami akan berikan harga tersebut pada kamu. <br> <br> Hubungi kami dengan klik
                            tombol dibawah ini. <br> Tenang! mau tanya tanya dulu juga boleh kok, gausah sungkan yaa...
                        </p>
                        <button @click="hubungiKami('https://wa.me/6289525009655')"
                            class="btn btn-primary shadow-neutral-900/80 shadow-xl"><i class="ri-whatsapp-line ri-lg"></i>
                            Hubungi
                            Kami</button>
                    </div>
                </div>
            </div>
            <div class="font-montserrat text-sm mt-4 text-neutral-300 relative z-10">
                * Minimal 3 jam.
            </div>

        </div>
        <WavePrimary />
        <!---------------------------- END OF CALL TO ACTION ---------------------------->



        <!-------------------------------- FAQS ------------------------------>
        <div id="faqs" class="py-24 px-7 xl:px-48 bg-secondary">
            <div
                class="transition-all duration-300 ease-in-out text-5xl text-center w-full font-bold text-white/50 hover:text-whitet racking-normal pb-16 hover:tracking-widest">
                <span class="font-extralight">THE</span> <span class="text-yellow-400">FAQ</span>
            </div>

            <div class="z-10 relative max-w-xl m-auto">
                <div v-for="faq in faqs" class="collapse collapse-arrow bg-neutral-800 border border-neutral-700 my-5">
                    <input type="radio" name="my-accordion-2" />
                    <div class="collapse-title text-md font-medium font-poppins text-accent/80">
                        {{ faq.pertanyaan }}
                    </div>
                    <div class="collapse-content font-montserrat font-normal text-sm text-neutral-400">
                        <hr class="-mt-2 mb-7 border-yellow-500 border-dashed">
                        <p v-html="faq.jawaban"></p>
                    </div>
                </div>
            </div>
        </div>
        <WaveSecondary />
        <!---------------------------- END OF FAQS ---------------------------->



        <Foot />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const { gtag } = useGtag()

const route = useRoute();

useHead({
    title: '360 Videobooth',
})


const hubungiKami = (url: string) => {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.open(url, '_blank')
        }
    };
    gtag('config', 'AW-11331048544');
    gtag('event', 'conversion', {
        'send_to': 'AW-11331048544/7oNMCLazzOQYEOCoiJsq',
        'event_callback': callback
    });
    return false;
};


onMounted(() => {
    document.addEventListener('play', (e) => {
        const videos = document.getElementsByTagName('video');
        for (let i = 0, len = videos.length; i < len; i++) {
            if (videos[i] !== e.target) {
                videos[i].pause();
            }
        }
    }, true);
});


const voucher = ref("G03-100")
const storj_link = ref("https://link.storjshare.io/raw/1Ka6CQgHoKoFjjJifSmcwQR6iQFGK44nj34ZwPUCyei8KE4gufEHcP4vF7eDtFAZWmbJuecESY7bifzD3M429XaRRQEJPFFj2Hqwg322HY6WdV79QyXQ48efTQv3iUrJ6pN9GtPA7HdhTc85z2T3ZfuaRBoaq7LF21MQS9uhsNhSaLXo2gxn5Qpf4DgRFz1sQjK7q6FuqWaqkUWJccVhARDnXEXmRR6tX9iSwxmxRSJ46Ug4wC1J5BNt1WPUhRxgYFra8vyWoPCgQvJCE23KHkDLg1icYaszDzUhQsYNaZwJwV8PoV7rAtytgmayQCtX2sYf9k9qrLiLUJxthXpLgU8oJh/tholee-studio/samples/360/")

const alert_enabled = ref(false)
const query_url = route.query.voucher

if (query_url == voucher.value) {
    alert_enabled.value = true
} else {
    alert_enabled.value = false
}

const harga = ref("899.000")
const alert = ref("Diskon <b>10%</b>! beritahu admin kode voucher berikut: <b>" + voucher.value + "</b>")


// Data Jasa
const jasas = ref({
    brand: {
        nama: "Brand Awareness",
        deskripsi: "Acara kamu akan mendapatkan exposure lebih luas karena setiap pengunjung akan memposting di sosial media mereka.",
        ilustrasi: "/assets/img/promo/360/advantages/brand.png"
    },
    harga: {
        nama: "Harga Termurah",
        deskripsi: "Garansi harga termurah se-Indonesia. Kamu tidak akan menemukan harga semurah ini di vendor lain dengan fitur serupa.",
        ilustrasi: "/assets/img/promo/360/advantages/harga.png"
    },
    fleksibel: {
        nama: "Fitur Fleksibel",
        deskripsi: "Kamu bisa memilih fasilitas dan fitur yang akan digunakan sesuai kebutuhan seperti kustom overlay atau menambahkan musik.",
        ilustrasi: "/assets/img/promo/360/advantages/fleksibel.png"
    },
    qr: {
        nama: "Kode QR Instan",
        deskripsi: "Kode QR untuk mendownload hasil dari 360 Videobooth langsung dicetak secara instan dan diberikan ke tamu undangan/pengunjung.",
        ilustrasi: "/assets/img/promo/360/advantages/instan.png"
    },
    kamera: {
        nama: "Peralatan Terbaik",
        deskripsi: "Kami menggunakan kamera dan peralatan pendukung terbaik di kelasnya untuk menunjang kelancaran acara kamu.",
        ilustrasi: "/assets/img/promo/360/advantages/kamera.png"
    },
    cloud: {
        nama: "Cloud Gallery",
        deskripsi: "Semua hasil video langsung diupload ke Google Drive yang dapat kamu akses dan monitor secara real-time.",
        ilustrasi: "/assets/img/promo/360/advantages/cloud.png"
    },
})

// Data Samples
const samples = ref({
    satu: {
        id: storj_link.value + "1.mp4"
    },
    dua: {
        id: storj_link.value + "2.mp4"
    },
    tiga: {
        id: storj_link.value + "3.mp4"
    },
    empat: {
        id: storj_link.value + "4.mp4"
    },
    lima: {
        id: storj_link.value + "5.mp4"
    },
})

// Data Equipments
const equipments = ref({
    satu: {
        judul: "1 Spinner Setup",
        deskripsi: "Untuk memutar kamera dan lighting."
    },
    dua: {
        judul: "1 Lighting Set",
        deskripsi: "Untuk menerangi subjek saat take."
    },
    tiga: {
        judul: "4 Lighting Background",
        deskripsi: "Untuk menerangi environment."
    },
    empat: {
        judul: "1 Tablet Preview",
        deskripsi: "Untuk menampilkan galeri preview."
    },
    lima: {
        judul: "1 GoPro Camera",
        deskripsi: "Untuk merekam 360 videobooth."
    },
    enam: {
        judul: "1 Laptop/PC",
        deskripsi: "Untuk memproses dan mengupload video."
    },
    tujuh: {
        judul: "10+ Props",
        deskripsi: "Sebagai aksesoris pelengkap."
    },
    delapan: {
        judul: "3-4 Dedicated Crew",
        deskripsi: "Kru Teknisi, Operator, dan Pengarah gaya."
    },
})

// Data Workflows
const workflows = ref({
    satu: {
        nomor: 1,
        judul: "Persiapan",
        deskripsi: "Tamu undangan/pengunjung memilih properti yang akan digunakan lalu menaiki 360 Videobooth."
    },
    dua: {
        nomor: 2,
        judul: "Briefing",
        deskripsi: "Briefing pose/gaya dari kru Tholee Studio supaya hasil lebih memuaskan."
    },
    tiga: {
        nomor: 3,
        judul: "Mulai",
        deskripsi: "Kamera pada 360 Videobooth mulai berputar dan merekam selama kurang lebih 13 detik."
    },
    empat: {
        nomor: 4,
        judul: "Kode QR",
        deskripsi: "Setelah selesai, kode QR untuk mendownload hasil video akan langsung dicetak secara instan kemudian diberikan ke tamu undangan/pengunjung yang baru saja mencoba 360 Videobooth."
    },
    lima: {
        nomor: 5,
        judul: "Proses Video",
        deskripsi: "Video akan diproses dan diupload di latar belakang selama kurang lebih 15 detik semenjak selesai merekam. <br> <br> Karna kode QR sudah diberikan di awal, akan memberikan pengalaman instan kepada tamu undangan/pengunjung dan sangat berguna untuk mengurai antrian panjang."
    },
    enam: {
        nomor: 6,
        judul: "Selesai",
        deskripsi: "Setelah selesai, preview video akan muncul di galeri pada device tablet yang sudah kami sediakan."
    }
})

// Data FAQs
const faqs = ref({
    maxvideo: {
        pertanyaan: "Berapa banyak batas maksimal video?",
        jawaban: "<b>Unlimited!</b> alias tidak ada batasan maksimal video. Kamu bisa menggunakan 360 Videobooth dengan video sebanyak mungkin. <br> <br> Kami hanya menggunakan tarif per jam. Selama durasi jam masih tersedia, kamu masih bisa menggunakan 360 Videobooth."
    },
    satujam: {
        pertanyaan: "Apakah bisa booking durasi 1 jam saja?",
        jawaban: "<b>Bisa.</b> <br> <br> Tetapi harganya akan berbeda. Silahkan konsultasi kepada admin ya..."
    },
    luarkota: {
        pertanyaan: "Apakah bisa untuk luar kota?",
        jawaban: "<b>Bisa.</b> <br> <br> Tetapi akan ada biaya tambahan untuk transport tergantung seberapa jauh jaraknya. <br> <br> Untuk saat ini, basis kami berada di Surakarta dan untuk acara area Surakarta tidak ada tambahan biaya transport."
    },
    split: {
        pertanyaan: "Apakah bisa split sesi?",
        jawaban: "<b>Bisa.</b> <br> <br> Split sesi dikenakan biaya tambahan sebesar Rp100.000/jam."
    },
    overtime: {
        pertanyaan: "Bagaimana jika durasi acara ternyata molor?",
        jawaban: "Kamu akan dikenakan biaya <b>overtime</b> sesuai dengan total kelebihan durasi."
    },
    diskon: {
        pertanyaan: "Apakah ada diskon booking durasi banyak?",
        jawaban: "<b>Pasti ada dong!</b> <br> <br> Untuk informasi lebih lanjut langsung hubungi admin aja ya..."
    },
    vendor: {
        pertanyaan: "Apakah ada harga khusus untuk vendor?",
        jawaban: "<b>Pasti ada dong!</b> <br> <br> Untuk informasi lebih lanjut langsung hubungi admin aja ya..."
    },
})


</script>