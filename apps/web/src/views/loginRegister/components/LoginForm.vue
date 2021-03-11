<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    class="loginForm sign-in-form"
  >
    <el-form-item label="" prop="mobile">
      <el-input v-model="loginUser.mobile" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn"
        >提交</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { getCurrentInstance, ref } from 'vue'
export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup(props: object) {
    // @ts-ignore
    const { ctx } = getCurrentInstance()

    const router = useRouter()

    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          const params: object = Object.assign({}, ctx.loginUser, true)
          console.log(params, '提交的参数')
          router.push('/shop/index')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    const loginForm = ref(null)

    return { handleLogin, loginForm }
  },
}
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 40px 40px 20px 40px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
