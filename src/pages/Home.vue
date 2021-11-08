<script setup></script>

<template>
  <div id="home">
    <section
      class="
        home_bg
        bg-no-repeat bg-fixed bg-cover
        w-full
        h-screen
        grid
        justify-items-stretch
        content-center
        md:pl-20
      "
    >
      <div class="font-extrabold text-2xl md:text-5xl pl-20">
        <h1>
          身心
          <span class="text-red-800">全面</span>健康
        </h1>
        <h1 class="pl-20 py-7">
          <span class="text-red-800">是我們的</span>終極目標
        </h1>
        <button class="button button--green ml-20">了解更多...</button>
      </div>
    </section>
    <section class="bg-about-img bg-no-repeat bg-fixed bg-cover p-10">
      <div
        class="
          p-10
          md:p-20
          shadow-2xl
          bg-white
          w-full
          right-0
          md:w-1/2
          text-center
          md:text-justify
        "
      >
        <h2 class="mb-3 font-extrabold text-2xl">關於人晨</h2>
        <p>
          供給美容SPA, 身心領域的「營運者」、創業者, 予以引領, 顧問服務,
          以及完整資源教育
        </p>
        <br />
        <p>課程包含 國內外最特殊的核心療法技術及身心轉化課程</p>
        <br />
        <p>每一部分既可獨立運用, 又是完整的一片拼圖</p>
        <br />
        <p>每一步身心整體療癒的通路</p>
        <br />
        <p>都會在您的事業綻放光芒, 讓您以更喜悅輕鬆的方式創造豐盛！</p>
        <br />
        <button class="button button--greenOutline ml-20 block">
          了解更多...
        </button>
      </div>
    </section>
    <!-- 所有商品 -->
    <section class="bg-yellow-50 p-10 text-center flex justify-center h-auto">
      <div>
        <h2 class="flex justify-center font-extrabold text-2xl py-5 relative">
          <span
            class="
              absolute
              left-3
              md:left-1/2
              top-2
              md:right-1/3
              text-yellow-300
            "
            >_____</span
          >所有商品
          <span
            class="
              absolute
              right-3
              md:left-1/3
              top-2
              md:right-1/2
              text-yellow-300
            "
            >_____</span
          >
        </h2>

        <div
          class="
            grid
            gird-cols-1
            md:grid-cols-5
            grid-rows-10
            md:grid-rows-2
            gap-4
            place-items-center
            md:px-20
            h-auto
          "
        >
          <div
            v-for="i in 10"
            class="shadow-xl w-5/6 p-8 bg-white hover:border-4 border-green-200"
          >
            <img
              src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="w-20 mx-auto"
            />
            <p class="my-5">1號彩光花波-海底輪紅色-土的元素</p>
            <span class="text-red-600 font-bold">$2,800</span>
            <span class="text-gray-600 line-through pl-5">NT$2,800</span>
            <button class="button button--greenOutline mt-5 mx-auto block">
              加入購物車
            </button>
          </div>
        </div>
        <div class="flex justify-center pb-7 py-10">
          <button class="button button--greenOutline bg-yellow-50">
            看更多商品...
          </button>
        </div>
      </div>
    </section>
    <section
      class="bg-about-img bg-center bg-cover p-10 text-center md:px-[20%]"
    >
      <!-- 我們提供的服務 -->
      <div>
        <h2 class="flex justify-center font-extrabold text-2xl py-5 relative">
          <span
            class="
              absolute
              left-3
              md:left-1/2
              top-2
              md:right-1/4
              text-yellow-300
            "
            >_____</span
          >我們提供的服務
          <span
            class="
              absolute
              right-3
              md:left-1/4
              top-2
              md:right-1/2
              text-green-700
            "
            >_____</span
          >
        </h2>
        <div
          class="
            grid grid-row-1 grid-cols-1
            md:grid-cols-3
            place-items-center
            md:px-auto
            pt-5
          "
        >
          <div v-for="i in 3" class="grid grid-rows-2">
            <div
              class="
                border-dotted border-4 border-light-blue-500
                p-2
                rounded-full
              "
            >
              <img
                src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="bg-about-img bg-transparent rounded-full w-40 h-40"
              />
            </div>
            <div class="justify-center pb-7 py-10">
              <button class="button button--greenOutline bg-yellow-50">
                看更多商品...
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 我們的價值 -->
      <div>
        <h2 class="flex justify-center font-extrabold text-2xl py-5 relative">
          <span
            class="
              absolute
              left-3
              md:left-1/2
              top-2
              md:right-1/4
              text-green-700
            "
            >_____</span
          >我們的價值
          <span
            class="
              absolute
              right-3
              md:left-1/4
              top-2
              md:right-1/2
              text-green-700
            "
            >_____</span
          >
        </h2>
        <div
          class="
            grid grid-row-1 grid-cols-1
            md:grid-cols-3 md:grid-rows-3
            place-items-center
            md:px-auto
            pt-5
          "
        >
          <div class="grid grid-rows-1">
            <div class="rounded-full shadow-2xl">
              <img
                src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="bg-about-img bg-transparent rounded-full w-40 h-40"
              />
            </div>
          </div>
          <div class="grid grid-rows-1">
            <div class="rounded-full shadow-2xl">
              <img
                src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="bg-about-img bg-transparent rounded-full w-80 h-80"
              />
            </div>
          </div>
          <div class="grid grid-rows-1">
            <div class="rounded-full shadow-2xl">
              <img
                src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="bg-about-img bg-transparent rounded-full w-40 h-40"
              />
            </div>
          </div>
          <div class="grid md:relative left-1/2">
            <div class="rounded-full shadow-2xl">
              <img
                src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="bg-about-img bg-transparent rounded-full w-40 h-40"
              />
            </div>
          </div>
          <div class="grid md:relative left-1/2">
            <div class="rounded-full shadow-2xl">
              <img
                src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="bg-about-img bg-transparent rounded-full w-40 h-40"
              />
            </div>
          </div>
          <hr />
          <div class="grid md:relative left-full">
            <div class="rounded-full shadow-2xl">
              <img
                src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="bg-about-img bg-transparent rounded-full w-40 h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 聯絡我們 -->
    <section
      class="bg-contact-img bg-no-repeat bg-fixed bg-cover p-10 text-center"
    >
      <div>
        <h2 class="flex justify-center font-extrabold text-2xl py-5 relative">
          <span
            class="
              absolute
              left-3
              md:left-1/2
              top-2
              md:right-1/3
              text-green-700
            "
            >_____</span
          >聯絡我們
          <span
            class="
              absolute
              right-3
              md:left-1/3
              top-2
              md:right-1/2
              text-green-700
            "
            >_____</span
          >
        </h2>
        <p class="font-black">
          若有任何疑問，歡迎您來信或來電與我們聯絡。（週一～週五09:00-12:00、13:30-17:30
          ，遇國定假日休）。
        </p>
        <p class="pb-5 font-black">
          請您填寫下面的表單，以便讓我們了解您的期望，我們會將儘速與您連絡。
        </p>
        <div
          class="
            container
            backdrop-filter backdrop-blur-lg
            bg-white bg-opacity-50
            md:w-[60%]
            mx-auto
            p-11
          "
        >
          <div class="grid text-justify md:grid-cols-2 gap-4">
            <div class="grid gap-4">
              <img src="@/assets/images/logo.png" class="w-[247px] mb-2" />
              <div>
                <i class="fas fa-phone-alt"></i>
                07-5507639
              </div>
              <div>
                <i class="fas fa-envelope"></i>
                abc123@gmail.com
              </div>
              <div>
                <i class="fas fa-map-marker-alt"></i>
                高雄市美濃區中興路二段45號
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.731660808049!2d120.52050431481358!3d22.886368985022198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e6a740386035f%3A0x2ade3d4c36a3f562!2zODQz6auY6ZuE5biC576O5r-D5Y2A5Lit6IiI6Lev5LqM5q61NDXomZ8!5e0!3m2!1szh-TW!2stw!4v1634207402192!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
            <div class="grid">
              <form>
                <div class="row">
                  <div>
                    <select class="bg-white p-3 m-3 rounded drop-shadow-lg">
                      <option>請選擇分類</option>
                      <option>Japan</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div class="bg-white p-3 m-3 rounded drop-shadow-lg">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="姓名*"
                    />
                  </div>

                  <div class="bg-white p-3 m-3 rounded drop-shadow-lg">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="電話*"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="bg-white p-3 m-3 rounded drop-shadow-lg">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="信箱"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="bg-white p-3 m-3 rounded drop-shadow-lg">
                    <textarea
                      class="form-control"
                      placeholder="說明*"
                    ></textarea>
                  </div>
                </div>
                <div class="pl-3">
                  <button class="button button--green">送出訊息</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
#home {
  .home_bg {
    background-image: url("@/assets/images/home.png");
  }
  .bg-contact-img {
    background-image: url("@/assets/images/hand.png");
  }
  .bg-about-img {
    background-image: url("@/assets/images/greenBg.png");
  }
  h2 {
    &:before {
      content: " ";
      border-top: 3px solid #f5d57b;
      display: block;
      position: absolute;
      width: 100px;
      top: 5px;
      left: 200%;
    }
    &:after {
      content: " ";
      border-top: 3px solid #f5d57b;
      display: block;
      position: absolute;
      width: 100px;
      top: 5px;
      right: 200%;
    }
  }
}
</style>
