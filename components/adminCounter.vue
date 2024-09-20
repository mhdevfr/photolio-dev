//components/CounterComponent.vue
<template>
    <div class="flex items-center justify-center p-4 bg-blue-400 h-16">
        <ClientOnly>
            <h1>
                More than 
            </h1>
            <AnimatedCounter :value="125" :duration="1000" class="counter text-7xl brico-800 mx-4" />
            <h1>pictures uploaded</h1>
        </ClientOnly>
    </div>
</template>
<style>
.counter {
  font-size: 40px;
}
</style>
