<template>
  <div class="relative overflow-hidden bg-white">
    <!-- Hero Section -->
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Smart Security & Access Control
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            Smart cameras, doorbells, and access control systems with 4K clarity,
            intelligent motion alerts, voice control, fingerprint recognition, and
            secure cloud storage all in a sleek, modern design.
          </p>
        </div>
        <div class="mt-10">
          <!-- Decorative image grid omitted for brevity -->
          <RouterLink
            to="/catagories"
            class="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-gray-900"
          >
            Shop by brand
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Products Section -->
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">
          Our Products
        </h2>

        <!-- Empty fallback -->
        <div v-if="products.length === 0" class="text-center text-gray-500 mb-8">
          No products available at the moment.
        </div>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.product_id" class="group product-card relative">
            <RouterLink :to="`/product/${product.product_id}`" class="block group-hover:no-underline">
              <div class="overflow-hidden rounded-lg bg-gray-200 aspect-square">
                <img
                  :src="product.product_url"
                  :alt="product.product_name"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">{{ product.product_name }}</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">{{ product.product_price }}</p>
            </RouterLink>
            <button
              @click="addItemToCart(product)"
              class="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCart } from '@/composables/useCart';

// Images
import xiaomiC200 from '@/assets/Xiaomi White C200 Smart Camera.jpg';
import xiaomiCW300 from '@/assets/Xiaomi White CW300 Outdoor Camera.jpg';
import googleNestBattery from '@/assets/Google Nest Cam (battery).jpg';
import googleNestWired from '@/assets/Google Nest Cam (wired).jpg';
import xiaomiC300Dual from '@/assets/Xiaomi Smart Camera C300 Dual.png';
import googleDoorbellBattery from '@/assets/Google Nest Doorbell (battery).jpg';
import googleDoorbellWired from '@/assets/Google Nest Doorbell (wired).jpg';
import ebsf850Terminal from '@/assets/EBSF850 FACIAL TERMINAL.jpg';
import ebZ101Terminal from '@/assets/EBZ101 FINGERPRINT TERMINAL.jpg';

// Cart
const { addItemToCart } = useCart();

// Products state
const products = ref([]);

// Fetch products from backend
onMounted(async () => {
  try {
    const response = await axios.get('https://vaultedgev4-production.up.railway.app/products');
    products.value = response.data.products || []; // safe fallback
  } catch (error) {
    console.error('Failed to fetch products:', error);
    products.value = [];
  }
});
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
}
.product-image {
  transition: transform 0.3s ease-in-out;
}
.product-card:hover .product-image {
  transform: scale(1.1);
}
</style>
