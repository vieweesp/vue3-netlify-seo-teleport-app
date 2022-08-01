import { ref, readonly } from "vue";

const _title = ref('CursoVue')
const _metaData = ref([])

export const title = readonly(_title)
export const metaData = readonly(_metaData)

export const setPageTitle = (v) => _title.value = v
export const setMetaData = (v) => _metaData.value = v