<template>
  <TheLayout>
    <div class="container mx-auto p-8 flex flex-col">
      <h2 class="text-2xl font-semibold mb-6 text-center">Проекты</h2>
      <div class="flex justify-center space-x-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          @like="handleLike"
          @dislike="handleDislike"
          @navigate="goToProject"
        />
      </div>
    </div>
  </TheLayout>
</template>

<script>
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  components: {
    TheLayout: () => import('@/components/layouts/TheLayout.vue'),
    ProjectCard,
  },
  setup() {
    const router = useRouter()
    const projects = ref([
      {
        id: 1,
        title: 'To do list',
        icon: 'clipboard',
        description: 'Приложение для управления задачами с интеграцией календаря. Пользователь может добавлять задачи, редактировать, удалять и связывать их с конкретными датами.',
        image: 'https://placehold.it/300x200',
        rating: 4.5,
      },
      {
        id: 2,
        title: 'Real-Time Chat App',
        icon: 'message-square',
        description: 'Используя Vue и WebSockets (или Firebase), можно создать чат с комнатами и сообщениями в реальном времени. Это хорошая демонстрация работы с асинхронностью и Vue-компонентами.',
        image: 'https://placehold.it/300x200',
        rating: 3.8,
      },
      {
        id: 3,
        title: 'Простой блог с постами (CRUD)',
        icon: 'edit',
        description: 'Одностраничное приложение, позволяющее пользователям создавать, редактировать и удалять посты. Посты отображаются в списке и могут быть отсортированы или найдены через поиск..',
        image: 'https://placehold.it/300x200',
        rating: 4.2,
      },
      {
        id: 4,
        title: 'Генератор случайных цитат',
        icon: 'share-2',
        description: 'Приложение, которое генерирует случайные цитаты из API. Пользователь может сохранять любимые цитаты, делиться ими и добавлять свои..',
        image: 'https://placehold.it/300x200',
        rating: 4.0,
      },
    ])

    const handleLike = (id) => {
      const project = projects.value.find((p) => p.id === id)
      project.rating = Math.min(project.rating + 0.1, 5)
    }

    const handleDislike = (id) => {
      const project = projects.value.find((p) => p.id === id)
      project.rating = Math.max(project.rating - 0.1, 0)
    }

    const goToProject = (id) => {
      const routeName = `project${id}`
      router.push({ name: routeName })
}

    return {
      projects,
      handleLike,
      handleDislike,
      goToProject,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
