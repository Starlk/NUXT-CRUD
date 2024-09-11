<template>
  <section class="mx-10 border">
    <form @submit.prevent="handleSubmit">
      <h1 class="font-bold text-[2rem]">Crear usuario</h1>
      <section class="mt-5 mx-10 flex gap-20 flex-wrap">
        <div>
          <label>Numero de caso</label>
          <input
            type="text"
            for="name"
            v-model="form.name"
            class="border rounder block w-[400px] p-1 rounded bg-gray-100"
          />
        </div>
        <div>
          <label>Cliente</label>
          <input
            type="text"
            v-model="form.cliente"
            class="border rounder block w-[400px] p-1 rounded bg-gray-100"
          />
        </div>

        <div class="">
          <label>Estado</label>
          <input
            type="text"
            v-model="form.estado"
            class="border rounder block w-[400px] p-1 rounded bg-gray-100"
          />
        </div>

        <div class="">
          <label>Creado por</label>
          <input
            v-model="form.createdBy"
            type="text"
            class="border rounder block w-[400px] p-1 rounded bg-gray-100"
          />
        </div>

        <div class="">
          <label>Fecha de creacion</label>
          <input
            type="datetime"
            v-model="form.createdDate"
            class="border rounder block w-[400px] p-1 rounded bg-gray-100"
          />
        </div>
      </section>
      <section class="flex ">
        <input
          type="submit"
          value="Crear"
          class="bg-blue-500 text-white p-2 rounded shadow block mt-5 mb-5 ml-10"
        />
        <NuxtLink
          to="/"
          class="bg-blue-500 text-white p-2 rounded shadow block mt-5 mb-5 ml-10"
          >Regresar</NuxtLink
        >
      </section>
    </form>
  </section>
</template>

<script setup>
import { LocalStorageService } from "~/service/LocalStorageService";

const initialForm = {
  name: "",
  cliente: "",
  estado: "",
  createdBy: "",
  createdDate: "",
};

const form = reactive({ ...initialForm });
const service = new LocalStorageService();

const handleSubmit = () => {
  service.addNewItem(form);
  Object.assign(form, initialForm);
};
</script>
