<template>
    <footer class="footer footer-center p-10 bg-secondary/30 text-primary-content">
        <div>
            <img width="100px" src="/assets/img/logo.png" alt="">
            <!-- <p class="font-bold">
                Photo & Videography
            </p> -->
            <!-- <a href="https://www.bridestory.com/tholee-studio" class="pt-2" title="Tholee Studio" target="_blank"
                rel="dofollow"><img alt="Tholee Studio" width="154" height="40"
                    src="https://business.bridestory.com/assets/images/badges/trusted/darkpink.png" /></a> -->
            <KontakModal />
            <p>Copyright © 2022 - All right reserved</p>


        </div>
        <div>
            <div class="grid grid-flow-col gap-3">
                <a href="https://www.instagram.com/tholee.studio/" target="_blank"><i
                        class="ri-instagram-fill ri-xl"></i></a>
                <a href="https://www.youtube.com/channel/UC-qeR0fROkN9T2zzI1WiVqw" target="_blank"><i
                        class="ri-youtube-fill ri-xl"></i></a>
            </div>
        </div>


    </footer>
</template>

<script>

export default {
    name: 'Foot',
    mounted() {
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/619a96146885f60a50bcd48d/1fl1tkg5c';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    },
}
</script>