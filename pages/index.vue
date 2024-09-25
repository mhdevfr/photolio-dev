<template>
    <div class="h-full flex justify-center flex-col items-center w-full">
        <navbar></navbar>
        <bottomNavbar></bottomNavbar>
        <div class="flex flex-col items-center h-screen justify-center w-full">
            <heroTexte></heroTexte>
        </div>
        <div class="flex flex-col justify-center items-center w-full md:w-5/6">
            <Bento></Bento>
        </div>
        <div v-motion-pop-visible-once class="w-full">
            <PricingCards></PricingCards>
        </div>
        <div class="w-full">
            <BentoContact></BentoContact>
            <faqTabs class="w-full"/>
        </div>
        <div class="w-full">
            <footerSection></footerSection>
        </div>
        <div class="w-full">
          <blurFooter></blurFooter>
        </div>
    </div>
</template>


<script lang="ts">
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap'); 
    .brico-800{
      font-family: "Bricolage Grotesque", sans-serif;
      font-optical-sizing: auto;
      font-weight: 800;
      font-style: normal;
      font-variation-settings:
        "wdth" 100;
    }
    .brico-200{
        font-family: "Bricolage Grotesque", sans-serif;
      font-optical-sizing: auto;
      font-weight: 200;
      font-style: normal;
      font-variation-settings:
        "wdth" 100;
    }

    *{
        padding: 0;
        margin: 0;
    }
</style>
