<template>
  <section class="border rounded-sm relative mt-10 mx-10 p-5">
    <h3
      class="font-bold text-[1.2rem] border rounded-md inline-block p-1 absolute top-[-20px]"
    >
      Filtro
    </h3>
    <article>
      <div class="mb-4">
        <label>Numero de solicitud</label>
        <input
          type="text"
          v-model="searchValues"
          @input="emitSerachUodate"
          class="border rounder block w-[400px] p-1 rounded bg-gray-100"
          placeholder="Search 1234"
        />
      </div>
      <div>
        <input type="checkbox" />
        <label>Solo solicitudes escaladas a ejecutivo</label>
      </div>
    </article>
    <footer class="flex justify-end gap-3">

      <NuxtLink
        to="/Create"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Crear
      </NuxtLink>
    </footer>
  </section>
</template>

<script lang="ts" setup>
const { search } = defineProps<{ search: string }>();

const emit = defineEmits(["update:search"]);
const searchValues = ref("");

const emitSerachUodate = () => {
  emit("update:search", searchValues.value);
};
</script>
