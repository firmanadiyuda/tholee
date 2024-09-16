<template>
    <div>

        <div class="hero min-h-screen bg-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-xs px-3">
                    <NuxtLink to="/">
                        <div class="border border-neutral-400 rounded-2xl py-5 mt-10 shadow-xl shadow-black">
                            <img src="/assets/img/logo.png" class="m-auto" alt="">
                        </div>
                    </NuxtLink>
                    <div v-if="result" class="pt-10">
                        <div class="bg-neutral-100 font-poppins shadow-xl shadow-black border rounded-lg py-5 px-5 font-bold text-sm text-neutral-800" v-text="result.event.name"></div>
                        <div class="px-5">
                            <div class="font-poppins border shadow-xl shadow-black border-neutral-500 rounded-b-lg py-2 px-5 text-[10px] text-neutral-300">
                                powered by <b>@tholee.studio</b><br>
                            </div>
                        </div>
                        <!-- Jika proses sudah selesai, ditandai dengan adanya record file -->
                        <div v-if="result.file" class="grid gap-10 mt-10">
                            <div v-if="result.file.video.length > 0" class="grid gap-10">
                                <div
                                    class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-3">
                                    <video  controls class="rounded-xl shadow-xl ">
                                        <source :src="s3_link + result.file.video" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>

                                    <a :href="s3_link + result.file.video + '?download=1'" target="_blank"
                                        class="btn  btn-accent w-full mt-4 font-sans text-xs"><i
                                            class="ri-download-2-fill ri-lg"></i>
                                        &nbsp;
                                        Download Video
                                    </a>
                                </div>
                            </div>
                            <div v-if="result.file.image.length > 0" class="grid gap-10">
                                <div v-for="img in result.file.image"
                                    class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-3">
                                    <img class="rounded-xl shadow-xl" :src="s3_link + img" alt="">

                                    <a :href="s3_link + img + '?download=1'" target="_blank"
                                        class="btn btn-accent w-full mt-4 font-sans text-xs"><i
                                            class="ri-download-2-fill ri-lg"></i>
                                        &nbsp;
                                        Download Foto
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Jika proses belum selesai, ditandai dengan record file bernilai null -->
                        <div v-else
                            class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-5 mx-5 mt-10 font-poppins">
                            Hasil sedang diproses / dalam antrian proses.
                            <br>
                            Tunggu beberapa menit lalu refresh halaman ini.
                            <br>
                            <br>
                            <button @click="reloadPage()" class="btn  btn-accent w-full my-2"><i
                                    class="ri-refresh-line ri-lg"></i>
                                &nbsp;
                                Refresh
                            </button>
                        </div>

                    </div>

                    <div v-else>
                        <div class="mt-16 font-poppins text-sm">
                            Upss! QR kadaluarsa
                        </div>
                    </div>

                    <div class="border border-neutral-400 text-sm font-poppins rounded-2xl py-10 px-5 mt-16 mb-24 shadow-xl shadow-black">
                         Butuh bantuan?<br>
                         <a href="https://wa.me/6289525009655" class="btn font-light mt-5"><i
                            class="ri-whatsapp-line ri-lg"></i>Hubungi Kami</a>
                    </div>
                </div>
            </div>
            <WavePrimary />
        </div>

    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const selectedTab = ref('foto');
const s3_link = ref("https://link.storjshare.io/raw/1Ka6CQgHoKoFjjJifSmcwQR6iQFGK44nj34ZwPUCyei8KE4gufEHcP4vF7eDtFAZWmbJuecESY7bifzD3M429XaRRQEJPFFj2Hqwg322HY6WdV79QyXQ48efTQv3iUrJ6pN9GtPA7HdhTc85z2T3ZfuaRBoaq7LF21MQS9uhsNhSaLXo2gxn5Qpf4DgRFz1sQjK7q6FuqWaqkUWJccVhARDnXEXmRR6tX9iSwxmxRSJ46Ug4wC1J5BNt1WPUhRxgYFra8vyWoPCgQvJCE23KHkDLg1icYaszDzUhQsYNaZwJwV8PoV7rAtytgmayQCtX2sYf9k9qrLiLUJxthXpLgU8oJh/tholee-studio/")

const reloadPage = () => {
    location.reload();
};

const slug = route.params.slug
const { data: result } = await useFetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ofqhx/endpoint/find?id=${slug}`)

var titlepage = result.value == null ? "QR Kadaluarsa" : result.value.event.name

useHead({
    title: titlepage,
})
</script>