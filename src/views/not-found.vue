<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <NotFoundMessage></NotFoundMessage>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">

import { IonPage, IonContent } from '@ionic/vue';
import NotFoundMessage from '@/components/NotFoundMessage.vue';

</script>
  