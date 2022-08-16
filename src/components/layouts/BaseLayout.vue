<template>
    <ion-page>
        <ion-header v-if="title">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <slot name="toolbar-button-start">
                        
                    </slot>
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-buttons slot="end"> 
                    <slot name="toolbar-button-right">
                    </slot>
                </ion-buttons>
                <ion-title>
                    {{title}}
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content collapse="condense">
            <slot>
                content goes here
            </slot>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { 
    IonPage,
    IonHeader, 
    IonTitle,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
     } from "@ionic/vue";
import { add } from "ionicons/icons";

import { defineProps  } from "vue";

defineProps ({
    title: String,
})

</script>