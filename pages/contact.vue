<script setup></script>
<template>
  <div>
    <navbar />
        <section class="contact">
          <div class="py-8 lg:py-16 mt-16 px-4 mx-auto max-w-screen-md">
            <h2
              class="mb-6 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
            >
              A question or a <span class="text-yellow-300">comment</span>  ?
            </h2>
            <p
              class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
            >
              If you have any suggestions or questions, feel free to send us a
                message. We will get back to you as soon as possible.
            </p>
            <form action="https://formspree.io/f/mblrbyaj" method="post"
              class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Your email</label
                >
                <input
                  name="email"
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-100/10 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3 dark:bg-gray-700/40 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-100"
                  placeholder="todo@example.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >The subject</label
                >
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  class="shadow-sm bg-gray-100/10 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3 dark:bg-gray-700/40 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-100"
                  placeholder="A question, a comment, or a suggestion"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >Your message</label
                >
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100/10 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 dark:bg-gray-700/40 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Leave a message..."
                ></textarea>
              </div>
              <div class="flex justify-center">
                <button
                  type="submit"
                  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-900 sm:w-fit hover:bg-indigo-800 dark:bg-gray-100 dark:text-slate-900 dark:hover:bg-indigo-800 dark:hover:text-gray-100"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
          <bottomNavbar/>
        </section>
  </div>
</template>
<style lang="css" scoped>
#contact {
  overflow: hidden;
}
</style>
