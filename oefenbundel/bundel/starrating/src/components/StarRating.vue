<script setup>
    const props = defineProps({
        rating: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            default: 5
        }
    })
    const emit = defineEmits(["set-rating"])

    function updateRating(value){
        emit("set-rating", value)
    }
</script>
<template>
    <!-- Stars -->
    <div class="flex justify-between items-center gap-2 px-4 py-4">
      <!-- Filled stars -->
       <button v-for="star in max" :key="star" @click="updateRating(star)" class="cursor-pointer">
        <svg v-if="star <= rating" class="w-8 h-8 fill-yellow-400" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24
                 l-7.19-.61L12 2 9.19 8.63
                 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
        <svg v-else class="w-8 h-8 stroke-gray-300 fill-none" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24
                 l-7.19-.61L12 2 9.19 8.63
                 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </button>
    </div>
</template>