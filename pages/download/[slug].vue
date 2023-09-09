<template>
    <div>

        <div class="hero min-h-screen bg-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-xl">
                    <NuxtLink to="/">
                        <img src="/assets/img/logo.png" class="m-auto pb-10 pt-10" alt="">
                    </NuxtLink>
                    <div v-if="result">

                        <div v-if="result.file_id">
                            <div v-if="result.type == 'video'">
                                <video width="265" height="300" controls class="rounded-xl shadow-xl">
                                    <source :src="'https://drive.google.com/uc?export=download&id=' + result.file_id"
                                        type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div v-if="result.type == 'photo'">
                                <img width="265" :src="'https://drive.google.com/uc?export=download&id=' + result.file_id"
                                    alt="">
                            </div>
                        </div>
                        <div v-else>
                            Hasil sedang diproses / dalam antrian proses.
                            <br>
                            Tunggu beberapa menit lalu refresh halaman ini.
                        </div>

                        <br>

                        <a :href="'https://drive.google.com/uc?export=download&id=' + result.file_id" target="_blank"
                            v-if="result.file_id" class="btn  btn-accent btn-wide my-2"><i
                                class="ri-download-2-fill ri-lg"></i>
                            &nbsp;
                            Download
                        </a>

                        <button v-else @click="reloadPage()" class="btn  btn-accent btn-wide my-2"><i
                                class="ri-refresh-line ri-lg"></i>
                            &nbsp;
                            Refresh
                        </button>

                        <br> <br>
                    </div>

                    <div v-else>
                        QR sudah kadaluarsa.
                    </div>




                    <!-- <input type="checkbox" id="my-modal" class="modal-toggle" checked />
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
                    </div> -->



                    <!-- <div class="my-10 w-full">
                        <a href="https://www.bridestory.com/tholee-studio" title="Tholee Studio" target="_blank"
                            rel="dofollow"><img alt="Tholee Studio" width="154" height="40" class="m-auto"
                                src="https://business.bridestory.com/assets/images/badges/trusted/darkpink.png" /></a>
                    </div> -->

                    <!-- <hr class="mt-10 mb-5 border-zinc-700">
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

    </div>
</template>

<!-- <script>
export default {
    async asyncData({ params, $axios }) {
        const slug = params.slug // When calling /abc the slug will be "abc"
        // const result = await $http.$get(`https://api.nuxtjs.dev/results/${params.id}`)
        // const result = await $axios.$get(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ofqhx/endpoint/find?id=${slug}`)
        const result = await $http.$get(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ofqhx/endpoint/find?id=${slug}`)

        // console.log(result)
        return { slug, result }
    },

    methods: {
        reloadPage() {
            location.reload();
        }
    }
}
</script> -->

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();

useHead({
    title: '[ ' + route.params.slug + ' ]',
})

const reloadPage = () => {
    location.reload();
};

const slug = route.params.slug
const { data: result } = await useFetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ofqhx/endpoint/find?id=${slug}`)

</script>