<template>
    <div>
        <div class="hero min-h-screen bg-primary">
            <div class="hero-content  z-40">
                <div class="max-w-xl">

                    <div v-for="music in musics" :key="music.judul">
                        <b>{{ music.judul }}</b> <br>
                        <audio width="265" height="300" controls controlsList="nodownload" class="rounded-xl shadow-xl">
                            <source :src="music.url"
                                type="audio/mpeg">
                            Your browser does not support the video tag.
                        </audio> <br>
                    </div>

                </div>
            </div>
            <WavePrimary />
        </div>

        <Foot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            musics: {
                snap: {
                    judul: "Snap",
                    kategori: "EDM",
                    url: "https://drive.google.com/uc?export=download&id=1IGUPqN67kvY4jLbgd0I18Mv8Ctot4ZyJ",
                },
                lastdance: {
                    judul: "Last Dance",
                    kategori: "EDM",
                    url: "https://drive.google.com/uc?export=download&id=1KBTyyWBnM4xP8Qb3UnVlUFSiQZJPf4hx",
                },
                lonelyworld: {
                    judul: "Lonely World",
                    kategori: "EDM",
                    url: "https://drive.google.com/uc?export=download&id=1DimbiJAcCOd5F5iEQbIB5jd_eBLHXbst",
                },
                beok: {
                    judul: "Be Ok",
                    kategori: "EDM",
                    url: "https://drive.google.com/uc?export=download&id=1DEG7QsoE-ymIkTkyYwourp2yAkCPTW3X",
                },
                bodyback: {
                    judul: "Body Back",
                    kategori: "EDM",
                    url: "https://drive.google.com/uc?export=download&id=1DURpkUKD7V9a-Euq8UVFfRFoTyWxwlZD",
                },
                jarananremix: {
                    judul: "Jaranan Remix",
                    kategori: "Jawa",
                    url: "https://drive.google.com/uc?export=download&id=1q5iQORx03JdotzAeemXHvjVtxMxrxgjk",
                },
            }
        };
    },
    mounted() {
        document.addEventListener('play', function (e) {
            var audios = document.getElementsByTagName('audio');
            for (var i = 0, len = audios.length; i < len; i++) {
                if (audios[i] != e.target) {
                    audios[i].pause();
                }
            }
        }, true);
    }
}
</script>