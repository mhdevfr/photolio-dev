<template>
  <div class="container mx-auto lg:mt-0 mt-8 lg:mt-24 text-gray-900 antialiased">
    <main class="mx-8 my-16">
      <div class="text-center">
        <PricingBadge class="mb-4"></PricingBadge>
        <h1
          class="mb-4 text-2xl font-normal md:text-3xl lg:text-5xl text-white brico-800"
        >
          Our pricing plans for your portfolio
        </h1>
        <p class="text-xl font-normal text-gray-400">
          We have three plans for your portfolio, chose wisely, it will depend
          if you <br />
          are a Professional photographer or if it’s your hobby
        </p>
      </div>

      <div
        class="mt-16 flex flex-col items-center justify-center space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0"
      >
        <section
          v-motion-pop-visible-once
          class="flex w-full max-w-sm flex-col space-y-6 rounded-xl bg-[#FBFBFF] p-12 shadow-[9px_9px_0px_#CCC]"
        >
          <div class="flex-shrink-0">
            <span class="text-4xl brico-800 tracking-tight text-black"
              >$00.00</span
            >
            <span class="text-gray-400 brico-200">/month</span>
          </div>
          <div class="flex-shrink-0 space-y-2 border-b pb-6">
            <h2 class="text-2xl brico-400">Free</h2>
            <p class="text-sm text-gray-400 brico-400">
              Perfect for beginners looking to showcase their work with a simple
              and effective portfolio
            </p>
          </div>
          <ul class="flex-1 space-y-4">
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Access to all templates</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Unlimited portfolio images</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800 line-through text-gray-500"
                >Custom domain integration</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800 line-through text-gray-500"
                >Priority support</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800 line-through text-gray-500"
                >Full customization options</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800 line-through text-gray-500"
                >Advanced SEO</span
              >
            </li>
          </ul>
          <div class="flex-shrink-0 pt-4">
            <button
              class="inline-flex w-full max-w-xs items-center brico-400 justify-center rounded-full border bg-[#1d1d1f] px-4 py-2 text-white transition-colors hover:bg-[#957fef]"
            >
              Get The Free Plan
            </button>
          </div>
        </section>

        <section
          v-motion-pop-visible-once
          class="flex w-full max-w-sm flex-col space-y-6 rounded-xl bg-[#FBFBFF] p-12 shadow-[9px_9px_0px_#E2DDFF]"
        >
          <div class="flex-shrink-0">
            <span class="text-4xl brico-800 tracking-tight text-[#AA9CFF]"
              >$19.99</span
            >
            <span class="text-gray-400 brico-200">/month</span>
          </div>
          <div class="flex-shrink-0 space-y-2 border-b pb-6">
            <h2 class="text-2xl brico-400">Premium</h2>
            <p class="text-sm text-gray-400 brico-400">
              Better if you are a photographer that want to skyrocket your
              customers number
            </p>
          </div>
          <ul class="flex-1 space-y-4">
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Access to all templates</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Unlimited portfolio images</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Custom domain integration</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800">Priority support</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Full customization options</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800">Advanced SEO</span>
            </li>
          </ul>
          <div class="flex-shrink-0 pt-4">
            <button
              class="inline-flex w-full max-w-xs items-center brico-400 justify-center rounded-full border bg-[#957fef] px-4 py-2 text-white transition-colors hover:bg-violet-700"
            >
              Get the Premium Plan
            </button>
          </div>
        </section>

        <section
          v-motion-pop-visible-once
          class="flex w-full max-w-sm flex-col space-y-6 rounded-xl bg-[#FBFBFF] p-12 shadow-[9px_9px_0px_#CCC]"
        >
          <div class="flex-shrink-0">
            <span class="text-4xl brico-800 tracking-tight">$9.99</span>
            <span class="text-gray-400 brico-400">/month</span>
          </div>
          <div class="flex-shrink-0 space-y-2 border-b pb-6">
            <h2 class="text-2xl brico-400">Hobby</h2>
            <p class="text-sm text-gray-400 brico-400">
              Ideal for passionate photographers who want to take their hobby to
              the next level
            </p>
          </div>
          <ul class="flex-1 space-y-4">
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Access to all templates</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Unlimited portfolio images</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800"
                >Custom domain integration</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-[#AA9CFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800">Priority support</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800 line-through text-gray-500"
                >Full customization options</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3 text-base brico-800 line-through text-gray-500"
                >Advanced SEO</span
              >
            </li>
          </ul>
          <div class="flex-shrink-0 pt-4">
            <button
              class="inline-flex w-full max-w-xs items-center brico-400 justify-center rounded-full border bg-[#1d1d1f] px-4 py-2 text-white transition-colors hover:bg-violet-400"
            >
              Get The Hobby Plan
            </button>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">

</script>