<template>
  <div>
    <TheHeader/>
    <div class="container mx-auto p-8">
    <h2 class="text-2xl font-semibold mb-6">To-Do List</h2>

    <div class="mb-4">
      <label for="date" class="text-lg">Выберите дату:</label>
      <input
        type="date"
        v-model="selectedDate"
        class="border border-gray-300 rounded-md p-2"
        @change="updateDeferredTasks"
      />
    </div>

    <div class="flex justify-between items-center mb-6">
      <input
        type="text"
        v-model="newTask"
        class="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Добавьте задачу"
      />
      <button
        @click="addTask"
        class="bg-blue-500 text-white p-2 rounded-md ml-4"
      >
        Добавить
      </button>
    </div>

    <div class="bg-white p-4 rounded-md shadow-md mb-6">
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-lg text-black">Задачи на {{ selectedDate }}</h3>
        <div class="text-gray-600 text-sm">{{ filteredTasks.length }} задач</div>
      </div>
      <ul class="mt-4">
        <li
          v-for="task in filteredTasks"
          :key="task.id"
          class="flex justify-between items-center mb-2 text-black"
        >
          <span :class="{'line-through': task.completed}" class="flex-1">{{ task.text }} - {{ task.date }}</span>
          <button
            @click="moveToComplete(task.id)"
            class="text-green-500 mr-2"
          >
            Сделано
          </button>
          <button
            @click="moveToDeferred(task.id)"
            class="text-yellow-500 mr-2"
          >
            Отложить
          </button>
          <button
            @click="deleteTask(task.id)"
            class="text-red-500"
          >
            🗑️
          </button>
        </li>
      </ul>
    </div>

    <div class="bg-white p-4 rounded-md shadow-md mb-6">
      <h3 class="font-semibold text-lg mb-4 text-black">Сделанные задачи</h3>
      <ul>
        <li
          v-for="task in completedTasks"
          :key="task.id"
          class="flex justify-between items-center mb-2 text-black"
        >
          <span>{{ task.text }} - {{ task.date }}</span>
          <button
            @click="deleteTask(task.id)"
            class="text-red-500"
          >
            🗑️
          </button>
        </li>
      </ul>
    </div>

    <div class="bg-white p-4 rounded-md shadow-md mb-6">
      <h3 class="font-semibold text-lg mb-4 text-black">Отложенные задачи</h3>
      <ul>
        <li
          v-for="task in deferredTasks"
          :key="task.id"
          class="flex justify-between items-center mb-2 text-green-800"
        >
          <span>{{ task.text }} - {{ task.deferredDate }}</span>
          <input
            type="date"
            v-model="task.deferredDate"
            class="border border-gray-300 rounded-md p-2"
          />
          <button
            @click="deleteTask(task.id)"
            class="text-red-500"
          >
            🗑️
          </button>
        </li>
      </ul>
    </div>

    <div class="bg-white p-4 rounded-md shadow-md mb-6">
      <h3 class="font-semibold text-lg mb-4 text-black">Не сделанные задачи</h3>
      <ul>
        <li
          v-for="task in incompleteTasks"
          :key="task.id"
          class="flex justify-between items-center mb-2 text-black"
        >
          <span>{{ task.text }} - {{ task.date }}</span>
          <button
            @click="moveToComplete(task.id)"
            class="text-green-500 mr-2"
          >
            Сделано
          </button>
          <button
            @click="deleteTask(task.id)"
            class="text-red-500"
          >
            🗑️
          </button>
        </li>
      </ul>
    </div>
  </div>
  <TheFooter/>
  </div>
</template>

<script>
import TheFooter from "@/components/layouts/TheFooter.vue";
import TheHeader from "@/components/layouts/TheHeader.vue";
import { ref, computed } from "vue";

export default {
  components: {TheHeader, TheFooter},
  setup() {
    const selectedDate = ref(
      new Date().toISOString().split("T")[0]
    );
    const newTask = ref("");
    const tasks = ref([]);

    const addTask = () => {
      if (newTask.value.trim() === "") {
        alert("Введите текст задачи!");
        return;
      }
      tasks.value.push({
        id: Date.now(),
        text: newTask.value,
        date: selectedDate.value,
        completed: false,
        deferredDate: null,
      });
      newTask.value = "";
    };

    const deleteTask = (id) => {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    };

    const moveToComplete = (id) => {
      const task = tasks.value.find((task) => task.id === id);
      if (task) {
        task.completed = true;
      }
    };

    const moveToDeferred = (id) => {
      const task = tasks.value.find((task) => task.id === id);
      if (task) {
        task.deferredDate = new Date().toISOString().split("T")[0];
      }
    };

    const updateDeferredTasks = () => {
      tasks.value.forEach((task) => {
        if (task.deferredDate === selectedDate.value) {
          task.date = task.deferredDate;
          task.deferredDate = null;
        }
      });
    };

    const filteredTasks = computed(() =>
      tasks.value.filter((task) => task.date === selectedDate.value && !task.completed && !task.deferredDate)
    );

    const completedTasks = computed(() =>
      tasks.value.filter((task) => task.completed && task.date === selectedDate.value)
    );

    const deferredTasks = computed(() =>
      tasks.value.filter((task) => task.deferredDate && task.date !== selectedDate.value)
    );

    const incompleteTasks = computed(() =>
      tasks.value.filter((task) => !task.completed && !task.deferredDate)
    );

    return {
      selectedDate,
      newTask,
      tasks,
      addTask,
      deleteTask,
      moveToComplete,
      moveToDeferred,
      updateDeferredTasks,
      filteredTasks,
      completedTasks,
      deferredTasks,
      incompleteTasks,
    };
  },
};
</script>
