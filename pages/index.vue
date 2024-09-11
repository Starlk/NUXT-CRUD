<template>
  <FormApp :search="search" @update:search="updateSearch" />
  <TableApp :users="filterUsers" />
</template>
<script setup lang="ts">
import { LocalStorageService } from "~/service/LocalStorageService";
import { ref } from "vue";
import type { User } from "~/models/User";

const service = new LocalStorageService();
const users = reactive<User[]>([]);
const filterUsers = reactive<User[]>([]);
const search = ref("");

const updateSearch = (newValues: string) => {
  search.value = newValues;
  if (newValues.length)
    filterUsers.splice(
      0,
      filterUsers.length,
      ...users.filter((x) => x.name.includes(newValues))
    );
  else Object.assign(filterUsers, users);
};

onMounted(() => {
  let list = service.getListUsers();
  console.log("se monto el componente", list);

  Object.assign(users, list);
  Object.assign(filterUsers, list);
});

const filterLenght = computed(() => filterUsers.length);
</script>
