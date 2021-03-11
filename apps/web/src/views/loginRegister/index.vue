<template>
  <div id="loginRegister" class="container" :class="{ 'sign-up-mode': signUpMode }">
    <!-- form表单容器 -->
    <div class="forms-container">
      <div class="signin-signup">
        <div class="forms-tabs">
          <span
            class="forms-tabs-item"
            :class="signUpMode ? '' : 'active'"
            @click="signUpMode = !signUpMode"
            >登录</span
          >
          <span
            class="forms-tabs-item"
            :class="signUpMode ? 'active' : ''"
            @click="signUpMode = !signUpMode"
            >注册</span
          >
        </div>
        <!-- 注册 -->
        <RegisterForm
          v-if="signUpMode"
          :registerUser="registerUser"
          :registerRules="registerRules"
        />
        <!-- 登录 -->
        <LoginForm v-else :loginUser="loginUser" :rules="rules" />

        <teleport to="body">
          <div class="login-bg">
            <video
              id="my-video"
              ref="my-video"
              class="video-js vjs-default-skin"
              preload="auto"
              muted
            >
              <!-- <source src="@/assets/video/shinoSwitch.mp4" /> -->
            </video>
          </div>
        </teleport>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs, getCurrentInstance, onMounted, computed } from 'vue'
import { loginUser, rules } from '@/utils/loginValidators'
import { registerUser, registerRules } from '@/utils/registerValidators'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

export interface DataProps {
  state: boolean
  time: number
}

export default {
  name: 'LoginRegister',
  components: { LoginForm, RegisterForm },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance()
    const signUpMode = ref<boolean>(false)

    const videoFormat: DataProps = reactive({
      state: false,
      time: 0,
    })

    function videoPlay() {
      const video: any = ctx.$refs['my-video']
      if (video) video.play()
      ctx.$refs['my-video'].loop = true // 设置视频循环播放
      if (video.offsetWidth > window.innerWidth) {
        video.classList.remove('auto-width')
      } else {
        video.classList.add('auto-width')
      }
    }

    onMounted(() => {
      videoPlay()
    })

    const refData: any = toRefs(videoFormat)

    return {
      // 必须返回，模板才能使用
      ...refData,
      signUpMode,
      loginUser,
      rules,
      videoPlay,
      registerUser,
      registerRules,
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
  .forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .forms-tabs {
      &-item {
        display: inline-block;
        padding: 10px;
        margin: 0 20px;
        &.active {
          font-size: 24px;
          color: #409eff;
          font-weight: bold;
        }
      }
    }
  }

  .signin-signup {
    position: absolute;
    top: 18vh;
    transform: translate(-50%);
    left: 50%;
    width: 430px;
    transition: 1s 0.7s ease-in-out;
    grid-template-columns: 1fr;
    z-index: 5;
  }

  .btn {
    width: 150px;
    background-color: #5995fd;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
  }

  .btn:hover {
    background-color: #4d84e2;
  }

  /* register */
  .registerForm {
    margin-top: 20px;
    background-color: #fff;
    padding: 40px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
  }

  .submit_btn {
    width: 100%;
  }
}
.login-bg {
  width: 100vh;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  video {
    width: auto;
    height: 100vh;
    &.auto-width {
      width: 100vw;
      height: auto;
    }
  }
}
@media screen and (min-width: 1500px) {
  .login-bg video {
    width: 100vw;
  }
}
</style>
