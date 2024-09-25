<template>
  <div
    class="border w-1/4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 shadow-[0px_0px_10px_1px_#f7fafc] h-2/3 flex justify-center items-center rounded-xl"
  >
    <div class="flex justify-center items-center pb-1">
      <div class="w-full h-full flex rounded-2xl">
        <form
          class="w-96 h-96 text-center flex flex-col text-gray-100 items-center rounded-md"
        >
          <h1 class="text-4xl brico-800 text-center">👋 Welcome to Photolio</h1>
          <button
            class="px-16 py-2 mt-6 mb-8 rounded-md items-center justify-between bg-slate-800 flex"
          >
            <Icon name="flat-color-icons:google" size="26" />
            <h1 class="text-gray-100 text-sm">Google OAuth</h1>
          </button>
          <input
            v-model="email"
            type="email"
            class="brico-200 h-12 py-2 w-3/4 p-2 mb-4 rounded-md text-start outline-none"
            placeholder="david.joe@gmail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <input
            v-model="password"
            type="password"
            class="brico-200 h-12 py-2 w-3/4 mb-4 p-2 rounded-md text-start outline-none"
            placeholder="yourpassword"
          />
          <input
            type="password"
            v-model="passwordConfirmation"
            class="brico-200 h-12 py-2 w-3/4 p-2 rounded-md mb-4 text-start outline-none"
            placeholder="confirmyourpassword"
          />
          <nuxt-link to="/login" class="underline-offset-2"
            >Already have account ?</nuxt-link
          >
          <button
            value="Register"
            @click="signUp"
            class="bg-green-400 mt-6 flex items-center justify-center p-6 py-2 rounded-md"
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
const user = useSupabaseUser();
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const signUp = async () => {
  if (password.value !== passwordConfirmation.value) {
    toast.add({ title: "Passwords are not identical" });
    return;
  }
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    toast.add({ title: "An error occurred while registering" });
  } if(!error){ 
    toast.add({
      title: "Success",
      description: "Check your inbox mail to confirm your account",
    });
    navigateTo("/login");
  }
};

const signOut = async () => {
  const { error } = await client.auth.signOut();
  if (!error) {
    toast.add({ 
      title: "An error as occured", 
      description: "There is an error please wait a few moments"
    });
  } else {
    toast.add({ title: "You have been logged out" });
  }
};
</script>
