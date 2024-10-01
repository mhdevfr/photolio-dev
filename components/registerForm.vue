<template>
  <div
    class="lg:w-1/4 w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 shadow-[0px_0px_10px_1px_#f7fafc] h-3/4 flex justify-center items-center rounded-xl p-4"
  >
    <div class="flex justify-center items-center py-12 max-w-full">
      <div class="w-full h-full flex rounded-2xl max-w-full">
        <form
          @submit.prevent="signUp"
          class="w-full h-full text-center flex flex-col text-gray-100 items-center rounded-md max-w-full"
        >
          <h1 class="text-2xl brico-800 text-center lg:text-4xl my-4 max-w-full">
            👋 Welcome to Photolio
          </h1>

          <input
            v-model="email"
            type="email"
            class="brico-200 px-4 py-2 p-4 w-3/4 mb-8 rounded-md text-start outline-none max-w-full"
            placeholder="david.joe@gmail.com"
          />
          <input
            v-model="password"
            type="password"
            class="brico-200 px-4 py-2 p-4 w-3/4 mb-8 rounded-md text-start outline-none max-w-full"
            placeholder="yourpassword"
          />
          <input
            type="password"
            v-model="passwordConfirmation"
            class="brico-200 px-4 py-2 p-4 w-3/4 mb-8 rounded-md text-start outline-none max-w-full"
            placeholder="confirmyourpassword"
          />
          <nuxt-link to="/login" class="underline-offset-2 max-w-full">
            Already have an account?
          </nuxt-link>
          <button
            type="submit"
            class="bg-green-400 mt-6 flex items-center justify-center p-6 py-2 rounded-md max-w-full"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast();
const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const signUp = async () => {
  if (!email.value || !password.value || !passwordConfirmation.value) {
    toast.add({ title: "All fields are required" });
    return;
  }
  if (password.value !== passwordConfirmation.value) {
    toast.add({ title: "Passwords do not match" });
    return;
  }

  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (error) {
    toast.add({
      title: "Registration failed",
      description: error.message,
    });
  } else {
    toast.add({
      title: "Success! Check your email to confirm your account.",
    });
  }
};
</script>
