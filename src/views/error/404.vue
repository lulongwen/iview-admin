<template functional>
  <div :class="$style.main" v-once>
    <main :class="$style.http404">
      <figure :class="$style.figure">
        <img
          class="full"
          src="static/assets/images/404.png"
          alt="404"
        >
        <img
          :class="$style['left']"
          src="static/assets/images/404_cloud.png"
          alt="404"
        >
        <img
          :class="$style['center']"
          src="static/assets/images/404_cloud.png"
          alt="404"
        >
        <img
          :class="$style['right']"
          src="static/assets/images/404_cloud.png"
          alt="404"
        >
      </figure>

      <section :class="$style.desc">
        <h1>404 页面没有找到!</h1>
        <p :class="$style.info">请检查您的输入是否有误</p>
        <p :class="$style.headline">您在地址栏中输入错误，页面没有找到</p>
        <footer :class="$style.info">请检查地址栏中的URL是否正确, 请检查连接是否正确！<br>您可以尝试以下操作：</footer>
        <a href="/" :class="$style.home">返回首页</a>
      </section>
    </main>
  </div>
</template>

<style lang="scss" module>
  @import '~assets/scss/animation.scss';
  .main {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
  .http404 {
    position: relative;
    width: 1000px;
    padding: 0 50px;
    overflow: hidden
  }

  .figure {
    position: relative;
    float: left;
    width: 600px;
    overflow: hidden;

    .left, .center, .right {
      position: absolute;
      opacity: 0
    }
    .left {
      width: 80px;
      top: 17px;
      left: 220px;
      animation-name: cloudLeft;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      animation-delay: 1s;
    }
    .center {
      width: 46px;
      top: 10px;
      left: 420px;
      animation-name: cloudMid;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      animation-delay: 1.2s;
    }
    .right {
      width: 62px;
      top: 100px;
      left: 500px;
      animation-name: cloudRight;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      animation-delay: 1s;
    }
  }

  .desc {
    position: relative;
    float: left;
    width: 300px;
    overflow: hidden;

    h1 {
      font-size: 32px;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    .headline {
      font-size: 20px;
      line-height: 24px;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    .info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }

    .home {
      display: block;
      width: 110px;
      height: 36px;
      line-height: 36px;
      background-color: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 14px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
  }
</style>
