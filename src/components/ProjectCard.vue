<template>
  <div class="bg-gray-950 p-4 rounded-md shadow-lg w-64">
    <img :src="project.image" alt="Project Image" class="w-full h-40 object-cover rounded-md mb-4" />
    <span>
      <vue-feather :type="project.icon"></vue-feather>
    </span>
    <h3 class="font-semibold text-lg mb-2">{{ project.title }}</h3>
    <p class="text-sm text-gray-600 mb-4">{{ project.description }}</p>

    <div class="flex justify-start mb-4">
      <button @click="$emit('like', project.id)" class="text-green-500 mr-2">👍</button>
      <button @click="$emit('dislike', project.id)" class="text-red-500">👎</button>
    </div>

    <div class="mb-4">
      <span class="font-semibold">Рейтинг:</span> {{ project.rating }} / 5
    </div>

    <button @click="$emit('navigate', project.id)" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Перейти
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
