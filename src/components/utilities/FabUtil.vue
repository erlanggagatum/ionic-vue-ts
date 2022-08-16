<template>
    <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button>
            <slot>
                <ion-icon :icon="add"></ion-icon>
            </slot>
        </ion-fab-button>
    </ion-fab>
</template>

<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import { defineProps } from "vue";

defineProps({
    vertical: {
        type: String,
        value: "bottom"
    }, 
    horizontal: {
        type: String,
        value: "end",
    }
})




</script>