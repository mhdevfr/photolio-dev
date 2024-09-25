<template>
  <div
    class="border w-1/4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 shadow-[0px_0px_10px_1px_#f7fafc] h-2/3 flex justify-center items-center rounded-xl"
  >
    <div class="flex justify-center items-center pb-1">
      <div
        class="w-full bg- h-1/2 flex justify-center items-center rounded-2xl"
      >
        <div
          class="w-96 h-96 text-center flex flex-col text-gray-100 items-center rounded-md"
        >
          <h1 class="text-4xl brico-800 text-center mt-4">
            👋 Welcome
            <span class="">Back</span>
          </h1>
          <button
            @click="signInGoogle"
            class="px-16 py-2 mt-6 mb-12 rounded-md items-center justify-between bg-slate-800 flex"
          >
            <Icon name="flat-color-icons:google" size="26" />
            <h1 class="text-gray-100 text-sm">Google OAuth</h1>
          </button>
          <input
            type="email"
            v-model="email"
            class="brico-200 h-12 w-3/4 mb-8 rounded-md text-start outline-none"
            placeholder="david.joe@gmail.com"
          />
          <input
            type="password"
            v-model="password"
            class="brico-200 h-12 w-3/4 mb-8 rounded-md text-start outline-none"
            placeholder="yourpassword"
          />
          <nuxt-link to="/register" class="underline-offset-2"
            >Don't have an account ?</nuxt-link
          >

          <input
            type="submit"
            @click="signIn"
            value="Log in"
            class="bg-green-400 flex items-center justify-center m-10 px-16 py-2 rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const toast = useToast();
async function signIn() {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });


  const userId = data.user?.id;
  if (userId) {
    const { data: profile, error: profileError } = await client
      .from("users")
      .select("id, pseudo, biography, profil_picture")
      .eq("id", userId);
      if(!userId){
        toast.add({
          title: "Error",
          description: "No user found",
        });
      return;
    }

    if (profile && profile[0]) {
      navigateTo(`/dashboard/${profile[0].id}`);
      toast.add({
        title: "Success",
        description: "Logged in successfully",
      });
    } else if (profile && !profile[0]) {
      toast.add({
        title: "Error",
        description: "No user found",
      });
    }
  } else {
    toast.add({
      title: "Error",
      description: error.message,
    });
  }
}

const signInGoogle = async () => {
  const { error } = await client.auth.signInWithOAuth({
    provider: "google",
  });
};

const signOut = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    toast.add({
      title: "Error",
      description: error.message,
    });
  }
};
</script>
