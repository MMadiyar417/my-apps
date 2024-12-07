<template>
  <div class="bg-slate-700">
    <div class="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
      <div class="text-slate-100 items-center text-center">
        <vue-feather  type="mail"></vue-feather>
        <div class="text-center pb-3">Welcome back!</div>
      </div>

      <div class="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
        <div class="w-3/4 mb-6">
          <input
          v-model="username"
          type="email"
          name="email"
          id="email"
          class="w-full text-slate-900 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
          placeholder="Email adress"
          @keyup.enter="focusPassword"
          >
        </div>
        <div class="w-3/4 mb-6">
          <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          @keyup.enter="handleLogin"
          class="w-full text-slate-900 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
          placeholder="Password"
          >
        </div>
        <div class="w-3/4 mb-12">
          <button
          @click="handleLogin"
          type="submit"
          class="py-4 bg-slate-700 w-full rounded text-blue-50 font-bold hover:bg-slate-800"

          >

            LOGIN

        </button>
        </div>
      </div>

      <div class="flex justify-center container mx-auto mt-6 text-slate-100 text-sm">
        <div class="flex flex-col sm:flex-row justify-between md:w-1/2 items-center">
          <div @click="handleForgotPassword" class="flex cursor-pointer hover:underline">Forgot your password</div>
          <div @click="handleGetStarted" class="flex cursor-pointer hover:underline">Don't have an account? Get Started</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')

const router = useRouter()

const handleLogin = () => {
  if (username.value === 'admin' && password.value === 'password') {
    router.push('/home')
  } else {
    alert('Неправильный логин или пароль')
  }
}

const handleForgotPassword = () => {
  alert('Этот функционал скоро будет доступен!')
}

const handleGetStarted = () => {
  alert('Этот функционал скоро будет доступен!')
}

const focusPassword = () => {
  const passwordInput = document.getElementById('password')
  if (passwordInput) {
    passwordInput.focus()
  }
}
</script>
