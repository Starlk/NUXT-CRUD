<template>
  <section class="mt-20 mx-10 border rounded p-5 position-relative relative">
    <h3
      class="font-bold text-[1.2rem] border rounded-md inline-block p-2 title-fieldset"
    >
      Listado de Casos {{ users.length }}
    </h3>
    <table class="table w-full">
      <thead>
        <tr>
          <th>Numero de caso</th>
          <th>Cliente</th>
          <th>Estado</th>
          <th>Creado por</th>
          <th>Fecha de creacion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users">
          <td>{{ user.name }}</td>
          <td>{{ user.cliente }}</td>
          <td>{{ user.estado }}</td>
          <td>{{ user.createdBy }}</td>
          <td>{{ user.createdDate }}</td>
          <td class="p-2">
            <button
              @click="() => handleDelete(user.id)"
              class="pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import type { User } from "~/models/User";
import { LocalStorageService } from "~/service/LocalStorageService";

const { users: data } = defineProps<{ users: User[] }>();
const newService = new LocalStorageService();
const users = reactive<User[]>(data);

const handleDelete = (id: string) => {
  console.log("Estyo se va a eliminar : ", id);
  let index = users.findIndex((i) => i.id === id);
  newService.removeItem(id);
  users.splice(index, 1);
};
</script>

<style scoped>
.title-fieldset {
  position: absolute;
  top: -30px;
}

table td {
  text-align: center;
  cursor: pointer;
}

table tbody tr:hover {
  background-color: aliceblue;
}
</style>
