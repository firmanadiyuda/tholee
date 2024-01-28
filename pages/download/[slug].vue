<template>
    <div>

        <div class="hero min-h-screen bg-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-xl">
                    <NuxtLink to="/">
                        <img src="/assets/img/logo.png" class="m-auto mb-10 pt-10" alt="">
                    </NuxtLink>
                    <div v-if="result">

                        <div v-if="result.type === 'photobooth'">
                            <div v-if="result.file_video_id && result.file_image_id">
                                <div
                                    class="grid grid-cols-2 gap-2 bg-neutral-900 border border-neutral-100 rounded-xl text-neutral-100 p-1">
                                    <div @click="selectedTab = 'video'"
                                        :class="[selectedTab === 'video' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-100']"
                                        class="cursor-pointer transition-all duration-300 ease-in-out rounded-lg px-3 uppercase text-xs flex font-medium py-2">
                                        <div class="m-auto">
                                            Video
                                        </div>
                                    </div>
                                    <div @click="selectedTab = 'foto'"
                                        :class="[selectedTab === 'foto' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-100']"
                                        class="cursor-pointer transition-all duration-300 ease-in-out rounded-lg px-3 uppercase text-xs flex font-medium py-2">
                                        <div class="m-auto">
                                            Foto
                                        </div>
                                    </div>
                                </div>

                                <div v-if="selectedTab === 'video'">
                                    <div
                                        class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-3 mt-10">
                                        <video width="265" height="300" controls class="rounded-xl shadow-xl ">
                                            <source
                                                :src="s3_link + result.tag + '/' + result.file_video_id"
                                                type="video/mp4">
                                            Your browser does not support the video tag.
                                        </video>

                                        <a :href="s3_link + result.tag + '/' + result.file_video_id + '?download=1'" 
                                            target="_blank" class="btn  btn-accent btn-wide mt-5 mb-2"><i
                                                class="ri-download-2-fill ri-lg"></i>
                                            &nbsp;
                                            Download Video
                                        </a>
                                    </div>
                                </div>

                                <div v-if="selectedTab === 'foto'" class="flex flex-col gap-10 mt-10 mb-24">
                                    <div v-for="img in result.file_image_id"
                                        class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-3">
                                        <img width="265" class="rounded-xl shadow-xl"
                                            :src="s3_link + result.tag + '/' + img" alt="">

                                        <a :href="s3_link + result.tag + '/' + img + '?download=1'" target="_blank"
                                            class="btn btn-accent w-full mt-4"><i class="ri-download-2-fill ri-lg"></i>
                                            &nbsp;
                                            Download Foto
                                        </a>
                                    </div>
                                </div>
                                
                                <!-- <div v-if="selectedTab === 'foto'">
                                    <div
                                        class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-3 mt-10 mb-24">
                                        <img width="265" class="rounded-xl shadow-xl"
                                            :src="s3_link + result.file_image_id"
                                            alt="">

                                        <a :href="s3_link + result.file_image_id"
                                            target="_blank" class="btn  btn-accent btn-wide mt-5 mb-2"><i
                                                class="ri-download-2-fill ri-lg"></i>
                                            &nbsp;
                                            Download Foto
                                        </a>
                                    </div>
                                </div> -->
                            </div>
                            <div v-else class="p-2">
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


                        <div v-else-if="result.type === 'wedding'">
                            <div v-if="result.file_video_id && result.file_image_id">
                                <div
                                    class="grid grid-cols-2 gap-2 bg-neutral-900 border border-neutral-100 rounded-xl text-neutral-100 p-1">
                                    <div @click="selectedTab = 'video'"
                                        :class="[selectedTab === 'video' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-100']"
                                        class="cursor-pointer transition-all duration-300 ease-in-out rounded-lg px-3 uppercase text-xs flex font-medium py-2">
                                        <div class="m-auto">
                                            Video
                                        </div>
                                    </div>
                                    <div @click="selectedTab = 'foto'"
                                        :class="[selectedTab === 'foto' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-100']"
                                        class="cursor-pointer transition-all duration-300 ease-in-out rounded-lg px-3 uppercase text-xs flex font-medium py-2">
                                        <div class="m-auto">
                                            Foto
                                        </div>
                                    </div>
                                </div>

                                <div v-if="selectedTab === 'video'">
                                    <div
                                        class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-3 mt-10">
                                        <video width="265" height="300" controls class="rounded-xl shadow-xl">
                                            <source
                                                :src="s3_link + result.tag + '/' + result.file_video_id"
                                                type="video/mp4">
                                            Your browser does not support the video tag.
                                        </video>

                                        <a :href="s3_link + result.tag + '/' + result.file_video_id + '?download=1'"
                                            target="_blank" class="btn btn-accent w-full mt-4"><i
                                                class="ri-download-2-fill ri-lg"></i>
                                            &nbsp;
                                            Download Video
                                        </a>
                                    </div>

                                </div>

                                <div v-if="selectedTab === 'foto'" class="flex flex-col gap-10 mt-10 mb-24">
                                    <div v-for="img in result.file_image_id"
                                        class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-3">
                                        <img width="265" class="rounded-xl shadow-xl"
                                            :src="s3_link + result.tag + '/' + img" alt="">

                                        <a :href="s3_link + result.tag + '/' + img + '?download=1'" target="_blank"
                                            class="btn btn-accent w-full mt-4"><i class="ri-download-2-fill ri-lg"></i>
                                            &nbsp;
                                            Download Foto
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div v-else
                                class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-5 mx-5 mt-10">
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

                            <div
                                class="rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl shadow-black p-3 mt-10">

                                <div v-if="result.file_id">
                                    <div v-if="result.type == 'video'">
                                        <video width="265" height="300" controls class="rounded-xl shadow-xl">
                                            <source
                                                :src="s3_link + result.tag + '/' + result.file_id"
                                                type="video/mp4">
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div v-if="result.type == 'photo'">
                                        <img width="265"
                                            :src="s3_link + result.tag + '/' + result.file_id"
                                            alt="">
                                    </div>
                                </div>
                                <div v-else class="p-2">
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


                                <a :href="s3_link + result.tag + '/' + result.file_id + '?download=1'"
                                    target="_blank" v-if="result.file_id" class="btn btn-accent w-full my-2 mt-4"><i
                                        class="ri-download-2-fill ri-lg"></i>
                                    &nbsp;
                                    Download
                                </a>


                            </div>

                            <br> <br>
                        </div>

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


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const selectedTab = ref('foto');
const s3_link = ref("https://link.storjshare.io/raw/1Ka6CQgHoKoFjjJifSmcwQR6iQFGK44nj34ZwPUCyei8KE4gufEHcP4vF7eDtFAZWmbJuecESY7bifzD3M429XaRRQEJPFFj2Hqwg322HY6WdV79QyXQ48efTQv3iUrJ6pN9GtPA7HdhTc85z2T3ZfuaRBoaq7LF21MQS9uhsNhSaLXo2gxn5Qpf4DgRFz1sQjK7q6FuqWaqkUWJccVhARDnXEXmRR6tX9iSwxmxRSJ46Ug4wC1J5BNt1WPUhRxgYFra8vyWoPCgQvJCE23KHkDLg1icYaszDzUhQsYNaZwJwV8PoV7rAtytgmayQCtX2sYf9k9qrLiLUJxthXpLgU8oJh/tholee-studio/events/")

useHead({
    title: '[ ' + route.params.slug + ' ]',
})

const reloadPage = () => {
    location.reload();
};

const slug = route.params.slug
const { data: result } = await useFetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ofqhx/endpoint/find?id=${slug}`)

</script>