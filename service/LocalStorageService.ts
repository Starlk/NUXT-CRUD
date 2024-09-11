import type { User } from "~/models/User";

export class LocalStorageService {
  addNewItem(item: User) {
    let items = this.getListUsers();
    item.id =
      new Date().getTimezoneOffset().toLocaleString() + Math.random() * 100;
    items.push(item);

    this.updateUserList(items);
  }

  removeItem(id: string) {
    let users = this.getListUsers();
    this.updateUserList(users.filter((x) => x.id !== id));
  }

  getListUsers() {
    let list = localStorage.getItem("USERS");
    if (list === null) return [];
    let items: User[] = JSON.parse(list);
    return items;
  }

  private updateUserList(list: User[]) {
    localStorage.setItem("USERS", JSON.stringify(list));
  }
}
