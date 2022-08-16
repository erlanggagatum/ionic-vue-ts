

<template>
    <base-layout title="Home">
        <template #toolbar-button-right>
            <ion-button router-link="/todo/add" routerDirection="forward">
                <ion-icon :icon="add"></ion-icon>
            </ion-button>
        </template>
        <ion-list>
            <ion-item v-for="(todo) in todos" 
                :key="todo.id"
                :router-link='`todo/edit/${todo.id}`'
                >
                {{todo.description}}
                <ion-label slot="end">
                    <!-- {{todo.finished ? 'V' : 'X'}} -->
                    <ion-icon v-if="todo.finished" :icon="checkmarkOutline"></ion-icon>
                    <ion-icon v-if="!todo.finished" color="warning" :icon="closeOutline"></ion-icon>

                </ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>

<script setup lang="ts">
import { IonList, IonItem, IonIcon, IonButton, IonLabel } from "@ionic/vue";
import { add, checkmarkOutline, closeOutline } from "ionicons/icons";
import { useTodoStore } from "../../store/TodoStore"
import { reactive } from "vue";

const { todos } = reactive(useTodoStore());

</script>