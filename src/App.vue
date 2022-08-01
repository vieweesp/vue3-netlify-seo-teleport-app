<template>
  <seo-teleport/>
  <navigation />
  <router-view/>
</template>

<script>
import Navigation from "@/components/Navigation";
import SeoTeleport from "./components/SeoTeleport.vue";

export default {
  components: { Navigation, SeoTeleport }
}
</script>