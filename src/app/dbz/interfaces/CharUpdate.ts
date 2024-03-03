export  interface UpdateEntity<T extends Object, id> {
  oldName?:id;
  new_entity:T;
}
