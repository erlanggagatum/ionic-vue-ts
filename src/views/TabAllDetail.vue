<template>
    <base-layout :title=title>
        <!-- <template #toolbar-button-start>
            <ion-back-button default-href="/home" routerDirection="back"></ion-back-button>
        </template> -->
        <section>
        <ion-item>
            <ion-input v-model="todo.description" placeholder="Masukan Todolist kamu"></ion-input>
        </ion-item>
        <ion-list>
            <ion-item>
                <ion-checkbox v-model="todo.finished" :checked="todo.finished" color="primary" slot="end"></ion-checkbox> 
                <ion-label >Finished</ion-label>
            </ion-item>
        </ion-list>
        <ion-grid>
            <ion-row>
                <ion-col v-if="route.name?.toString().includes('edit')">
                    <ion-button @click="removeTodoFromStore" color="danger" expand="block">Remove</ion-button>
                </ion-col>
                <ion-col>
                    <ion-button @click="addTodoToStore" expand="block">Save Todo</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
        <!-- </div> -->
        <ion-label>Route [{{useRoute().path}}]</ion-label>
        <ion-label>{{todosState}}</ion-label>
        </section>
    </base-layout>
</template>
<style>
section {
    padding: 0 10px;
    margin-top: 50%;
}
</style>
<script setup lang="ts">
import { Todo } from '@/models/TodoModel';

// import { objectExpression } from '@babel/types';
import { 
    IonGrid,
    IonCol,
    IonRow,
    IonInput, 
    IonList,
    IonCheckbox,
    IonLabel, 
    IonItem, 
    IonButton, 
    IonBackButton, 
    alertController,
    useIonRouter, } from '@ionic/vue';
import { ref, reactive, computed} from 'vue';
import { useRoute } from 'vue-router';
import { useTodoStore } from "@/store/TodoStore"
// import { customAnimation } from '@/animations/customAnimation';

const { todos, addTodos, removeTodo, getTodoId } = useTodoStore();
const route = useRoute();
const ionRouter = useIonRouter();

const getRouteName = () => {
    if (route != undefined){
        return route.name?.toString() ?? ""
    }
    return ""
}

const getRouteId = () => {
    
    return parseInt(route.params.id.toString());
}

const todo: Todo = reactive({
    id: getRouteName().includes("edit") ? parseInt(route.params.id.toString()) : 0,
    description: getRouteName().includes("edit") ? getTodoId(getRouteId()).description : "",
    finished: getRouteName().includes("edit") ? getTodoId(getRouteId()).finished : false,
})
// const todo: Todo = 

const todosState = computed(() => todos)

const titleComputed = computed(() => {
    if (route.name?.toString().includes("edit")) {
        return "Edit Todo"
    } else {
        return "Add Todo"
    }
})

const title = ref(titleComputed.value);

const alertTodoConfirm = async () => {
    const alert = await alertController.create({
        header: "Alert!",
        message: "Are you sure to save this todo?",
        buttons: [
            {
                text: 'Tidak',
                role: 'cancel',
                handler: () => {console.log('cancel')}
            },
            {
                text: 'Ya',
                role: 'confirm',
                handler: () => {console.log('confirm')}
            }
        ]
    })
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log("Role from await: " + role);

    return role;
}

const addTodoToStore = async () => {
    const result = await alertTodoConfirm();
    
    if (result == "confirm") {
        addTodos(todo)
        ionRouter.navigate('/tabs/all', 'back', 'replace')
    }
}

const removeTodoFromStore = async () => {
    const result = await alertTodoConfirm();

    if (result == "confirm") {
        removeTodo(todo)
        ionRouter.navigate('/tabs/all', 'back', 'replace')
    }
    
}

</script>