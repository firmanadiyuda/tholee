<template>
    <div>
        <!-- <Navbar /> -->

        <div class="hero min-h-screen bg-[#f1f1f1] text-primary">
            <div class="hero-content text-center z-40">
                <div class="max-w-2xl">
                    <!-- <NuxtLink to="/">
                        <img src="/assets/img/logo.png" class="m-auto pb-10 pt-10" alt="">
                    </NuxtLink> -->

                    <br>

                    <div class="text-xl font-extrabold uppercase pb-5 tracking-widest">
                        <div class="bg-primary text-white rounded-lg m-auto py-4">
                            PT Tholee Studio Kreatif
                        </div>
                    </div>

                    <!-- <hr class="border-black border-dashed my-3"> -->

                    <div class="text-3xl font-bold tracking-widest">
                        Syarat & Ketentuan
                    </div>
                    <div class="text-sm font-light tracking-widest">
                        Diperbarui Senin, 30 Oktober 2023 pukul 12:00.
                    </div>



                    <div class="text-left font-sans text-md mt-10">
                        <ol class="list-decimal list-inside">
                            <li class="font-bold">
                                Pemesanan Atau Booking
                                <ol class="pl-5 list-inside list-[lower-alpha] font-normal">
                                    <li class="py-2">
                                        Kesepakatan kerja antara Tholee Studio dengan klien dianggap sah dan berlaku
                                        setelah Invoice dibuat dan dilakukan pembayaran minimal sebesar 25% dari total
                                        Invoice atau yang biasa disebut dengan DP (Down Payment).
                                    </li>
                                    <li class="py-2">
                                        Mengacu pada pasal <b>1.a</b>, selama Invoice belum dilakukan pembayaran DP, Tholee
                                        Studio berhak menerima pembayaran DP atas booking dari klien lain yang ingin melakukan
                                        booking untuk tanggal & jam yang sama, dan Tholee Studio berhak
                                        menolak/membatalkan booking klien sebelumnya karena belum membayar DP.
                                    </li>
                                    <li class="py-2">
                                        Pembayaran dianggap sah setelah ada bukti pembayaran dan sudah valid masuk dari
                                        laporan mutasi rekening pihak bank terkait.
                                    </li>
                                    <li class="py-2">
                                        Pelunasan dilakukan H-3 sebelum acara, atau selambat-lambatnya H+3 setelah
                                        acara.
                                    </li>
                                    <li class="py-2">
                                        Jika klien melalukan pembayaran Invoice langsung lunas tanpa DP, maka kuitansi
                                        akan terbagi menjadi 2 yaitu kuitansi DP sebesar 25% dari total Invoice dan
                                        sisanya kuintansi pelunasan.
                                    </li>
                                </ol>
                            </li>
                        </ol>

                        <ol class="list-decimal list-inside pb-20 pt-5">
                            <li class="font-bold">
                                Pembatalan Booking
                                <ol class="pl-5 list-inside list-[lower-alpha] font-normal">
                                    <li class="py-2">
                                        Pembatalan sepihak dari klien maka Tholee Studio berhak tidak mengembalikan DP
                                        yang sudah dibayarkan.
                                    </li>
                                    <li class="py-2">
                                        Pembatalan sepihak dari klien dalam rentang H-3 acara sampai H-7 acara namun
                                        sudah melakukan pelunasan atau pembayaran dengan jumlah tertentu maka dana klien
                                        dikembalikan untuk tiap item booking yang dibatalkan setelah dikurangi DP (DP
                                        tidak dikembalikan).
                                    </li>
                                    <li class="py-2">
                                        Mengacu pada pasal <b>2.b</b>, Jika booking untuk 2 hari, kemudian hari ke-1
                                        dibatalkan, maka dana klien untuk tiap item pada hari ke-1 dikembalikan setelah
                                        dikurangi DP. Jika yang dibatalkan hari ke-2 dan acara hari ke-1 sudah
                                        berlangsung dan acara hari ke-2 berada dalam rentang H-3 sampai H-7, maka
                                        pengembalian dana untuk hari ke-2 tetap dikurangi DP. Dan jika nilai dana yang
                                        dikembalikan lebih kecil dari nilai DP, maka tidak ada pengembalian dana.
                                    </li>
                                    <li class="py-2">
                                        Pembatalan dibawah H-3 acara, tidak ada pengembalian dana apapun.
                                    </li>
                                    <li class="py-2">
                                        Apabila pada saat tanggal kegiatan acara (Hari-H) terjadi kondisi khusus seperti
                                        tempat yang tidak memenuhi syarat untuk peralatan Tholee Studio, bencana alam,
                                        sistem
                                        listrik yang tidak baik dan atau hal-hal yang bisa menyebabkan resiko kerugian
                                        pada pihak Tholee Studio, maka Tholee Studio berhak membatalkan booking dan
                                        tidak ada pengembalian dana.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>

                    <br>
                    <br>
                </div>
            </div>
            <!-- <WavePrimary /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'SyaratDanKetentuan',
})
</script>