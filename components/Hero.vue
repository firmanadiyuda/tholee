<template>
    <div class="hero min-h-screen bg-primary">
        <WaveTop />
        <video id="myVideo" autoplay muted loop class="opacity-10"
            style="object-fit: cover; width: 100vw; height: 100vh; top: 0; left: 0">
            <source src="https://drive.google.com/uc?export=download&id=1ShkK1qnsOTtvFZEE_rPGtO9kq3gGG6ys"
                type="video/mp4" />
        </video>
        <!-- <div class="hero-overlay bg-opacity-30"></div> -->
        <div class="hero-content text-center text-neutral-content z-40">
            <div class="max-w-lg">
                <!-- <h1 class="mb-5 text-5xl text-white font-bold">VIDEOGRAPHY</h1> -->
                <div class="scroller">
                    <span class="tracking-wider text-white uppercase">
                        Videography<br />
                        Photography<br />
                        Editing<br />
                        Live Streaming
                    </span>
                </div>
                <p class="mb-5 text-lg font-extralight">
                    <b>Tholee Studio</b> merupakan <b>rumah produksi</b> yang melayani jasa dalam bidang <b>foto &
                        videografi</b>. Berdiri sejak tahun <b>2019</b>, Kami sudah melayani banyak klien
                    dengan berbagai jenis permintaan video.
                </p>
                <a href="#services" class="btn btn-outline btn-accent">Our Services &nbsp; <i
                        class="ri-arrow-down-line pt-1 animate-bounce"></i></a>
            </div>
        </div>
        <WavePrimary />
    </div>
</template>

