<template>
    <div class="relative overflow-hidden bg-white">
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div class="sm:max-w-lg">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Smart Security & Access
                        Control</h1>
                    <p class="mt-4 text-xl text-gray-500">Smart cameras, doorbells, and access control systems with 4K
                        clarity, intelligent motion alerts, voice control, fingerprint recognition, and secure cloud
                        storage all in a sleek, modern design.</p>
                </div>
                <div>
                    <div class="mt-10">
                        <!-- Decorative image grid -->
                        <div aria-hidden="true"
                            class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                            <div
                                class="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                                <div class="flex items-center space-x-6 lg:space-x-8">
                                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                            <img :src="xiaomiC200" alt="" class="size-full object-cover" />
                                        </div>
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="xiaomiCW300" alt="" class="size-full object-cover" />
                                        </div>
                                    </div>
                                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="googleNestBattery" alt="" class="size-full object-cover" />
                                        </div>
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="googleNestWired" alt="" class="size-full object-cover" />
                                        </div>
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="xiaomiC300Dual" alt="" class="size-full object-cover" />
                                        </div>
                                    </div>
                                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="googleDoorbellBattery" alt="" class="size-full object-cover" />
                                        </div>
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="googleDoorbellWired" alt="" class="size-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RouterLink to="/catagories"
                            class="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-gray-900">
                            Shop
                            by brand
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">Our Products</h2>
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product.product_id" class="group product-card relative">
                    <RouterLink :to="`/product/${product.product_id}`" class="block group-hover:no-underline">
                        <div class="overflow-hidden rounded-lg bg-gray-200 aspect-square">
                            <img :src="product.product_url" :alt="product.product_name"
                                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">{{ product.product_name }}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">{{ product.product_price }}</p>
                    </RouterLink>
                    <button @click="addItemToCart(product)"
                        class="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Import all images at the top
import xiaomiC200 from '@/assets/Xiaomi White C200 Smart Camera.jpg'
import xiaomiCW300 from '@/assets/Xiaomi White CW300 Outdoor Camera.jpg'
import googleNestBattery from '@/assets/Google Nest Cam (battery).jpg'
import googleNestWired from '@/assets/Google Nest Cam (wired).jpg'
import xiaomiC300Dual from '@/assets/Xiaomi Smart Camera C300 Dual.png'
import googleDoorbellBattery from '@/assets/Google Nest Doorbell (battery).jpg'
import googleDoorbellWired from '@/assets/Google Nest Doorbell (wired).jpg'
import ebsf850Terminal from '@/assets/EBSF850 FACIAL TERMINAL.jpg'
import ebZ101Terminal from '@/assets/EBZ101 FINGERPRINT TERMINAL.jpg'

import { useCart } from '@/composables/useCart';
const { addItemToCart } = useCart();

// Use hardcoded products temporarily
const products = ref([
    {
        product_id: 1,
        product_name: 'Xiaomi Smart Camera C200',
        product_price: 'R900',
        product_url: xiaomiC200,
    },
    {
        product_id: 2,
        product_name: 'Xiaomi Outdoor Camera CW300',
        product_price: 'R1,100',
        product_url: xiaomiCW300,
    },
    {
        product_id: 3,
        product_name: 'Google Nest Cam (Battery)',
        product_price: 'R855',
        product_url: googleNestBattery,
    },
    {
        product_id: 4,
        product_name: 'Google Nest Cam (Wired)',
        product_price: 'R690',
        product_url: googleNestWired,
    },
    {
        product_id: 5,
        product_name: 'Xiaomi Smart Camera C300 Dual',
        product_price: 'R1,200',
        product_url: xiaomiC300Dual,
    },
    {
        product_id: 6,
        product_name: 'Google Nest Doorbell (Battery)',
        product_price: 'R1,500',
        product_url: googleDoorbellBattery,
    },
    {
        product_id: 7,
        product_name: 'Google Nest Doorbell (Wired)',
        product_price: 'R2,500',
        product_url: googleDoorbellWired,
    },
    {
        product_id: 8,
        product_name: 'EBZ101 Fingerprint Terminal',
        product_price: 'R6,000',
        product_url: ebZ101Terminal,
    },
    {
        product_id: 9,
        product_name: 'EBSF850 Facial Terminal',
        product_price: 'R4,500',
        product_url: ebsf850Terminal,
    },
]);

// Comment out API call temporarily
// onMounted(async () => {
//     try {
//         const response = await axios.get('https://vaultedgev4-production.up.railway.app/products');
//         products.value = response.data;
//     } catch (error) {
//         console.error('Failed to fetch products:', error);
//     }
// })
</script>
<style scoped>
.product-card {
    transition: transform 0.3s ease-in-out;
    text-decoration: none;
    color: inherit;
    display: block;
}
.product-card:hover {
    transform: scale(1.05);
    text-decoration: none;
}
.product-image {
    transition: transform 0.3s ease-in-out;
}
.product-card:hover .product-image {
    transform: scale(1.1);
}
</style>