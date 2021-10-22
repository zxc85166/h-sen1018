<script setup></script>

<template>
  <div id="about">
    <div class="bg-white h-72 md:h-24"></div>
    <section class="bg-about-img bg-no-repeat bg-fixed bg-cover">
      <div class="font-extrabold text-2xl md:text-5xl pl-20">
        <h1 class="text-white stroke-1 drop-shadow-md h-72 flex items-center">
          關於人晨
        </h1>
      </div>
    </section>
    <section class="bg-contact-img bg-no-repeat bg-fixed bg-cover py-3 pb-32">
      <p class="pl-20">首頁 》關於人晨</p>
      <div class="grid grid-rows-1">
        <div class="ml-auto md:ml-[20%] font-black mt-20">
          <h2 class="mb-5 text-lg md:text-3xl">
            供給<span class="text-yellow-400">美容SPA</span>、
            <span class="text-yellow-400">身心領域</span>的「營運者」、創業者
            <br />
            <br />
            予以引領, 顧問服務, 以及完整資源教育。
          </h2>
          <br />
          <p>課程包含 國內外最特殊的核心療法技術及身心轉化課程</p>
          <br />
          <p>每一部分既可獨立運用, 又是完整的一片拼圖</p>
          <br />
          <p>每一步身心整體療癒的通路</p>
          <br />
          <p>都會在您的事業綻放光芒, 讓您以更喜悅輕鬆的方式創造豐盛！</p>
          <br />
        </div>
        <div class="md:absolute right-0">
          <img
            src="https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=750"
            alt=""
            class="w-full"
          />
        </div>
      </div>
    </section>
    <section class="bg-yellow-50 bg-no-repeat bg-fixed bg-cover pt-7 pb-32">
      <div class="grid grid-rows-1">
        <div class="ml-auto md:ml-[50%] font-black mt-20">
          <h2 class="mb-5 text-3xl">我們所關注的</h2>
          <br />
          <div class="flex items-center pt-6">
            <i class="fas fa-check-circle mr-2 text-yellow-400 text-3xl"></i>
            <p>
              現代人迫切需要改善的<span class="text-xl pl-6"
                >負面、壓力、亞健康、疾病</span
              >
            </p>
          </div>
          <div class="flex items-center pt-6">
            <i class="fas fa-check-circle mr-2 text-yellow-400 text-3xl"></i>
            <p>
              現代人迫切需要改善的<span class="text-xl pl-6"
                >正向、改變、進步、成長</span
              >
            </p>
          </div>
          <div class="flex items-center pt-6">
            <i class="fas fa-check-circle mr-2 text-yellow-400 text-3xl"></i>
            <p>
              現代人迫切需要改善的<span class="text-xl pl-6"
                >身體、情緒、心靈、意識</span
              >
            </p>
          </div>
          <div class="flex items-center pt-6">
            <i class="fas fa-check-circle mr-2 text-yellow-400 text-3xl"></i>
            <p>
              現代人迫切需要改善的<span class="text-xl pl-6"
                >平靜、快樂、平衡、合一</span
              >
            </p>
          </div>
        </div>

        <div class="md:absolute left-0">
          <img
            src="https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=750"
            alt=""
            class="w-full"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
#about {
  h1 {
    -webkit-text-stroke: 0.5px black;
  }
}
</style>
