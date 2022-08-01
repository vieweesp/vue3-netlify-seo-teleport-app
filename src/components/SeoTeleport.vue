<template>
  <teleport to="head title">{{ title }}</teleport>
  <teleport to="head">
    <meta
        v-for="(meta, index) in metaData"
        :key="index"
        :name="meta.name"
        :content="meta.content"
    />
  </teleport>
</template>

<script>
import { title, metaData } from "@/seo";
export default {
    name: "SeoTeleport",
    setup() {
        return {
            title,
            metaData
        }
    }
}
</script>

<style>

</style>