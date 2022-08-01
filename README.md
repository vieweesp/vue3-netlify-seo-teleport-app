# Curso Vue 3 SEO Netlify

## Partimos del proyecto base del repositorio
```shell
git clone https://github.com/cursosdesarrolloweb/vue3-netlify.git
```

## Crear src/seo/index.js
```js
import {ref, readonly } from 'vue'

const _title = ref('CursoVue')
const _metaData = ref([])
export const title = readonly(_title)
export const metaData = readonly(_metaData)

export const setPageTitle = (v) => (_title.value = v)
export const setMetaData = (v) => (_metaData.value = v)
```

## Crear componente SeoTeleport.vue
```vue
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
import { title, metaData } from "@/seo"
export default {
  name: "SeoTeleport",
  setup() {
    return { title, metaData }
  }
}
</script>
```

## Actualizar App.vue
```vue
<template>
  <seo-teleport />
  <navigation />
  <router-view/>
</template>

<script>
import Navigation from "@/components/Navigation"
import SeoTeleport from "@/components/SeoTeleport"

export default {
  components: {SeoTeleport, Navigation}
}
</script>
```

## Añadir SEO a views/Home.vue
```vue
<script>
import {setMetaData, setPageTitle} from "@/seo"

export default {
  name: "Home",
  setup() {
    setPageTitle("Inicio - CursoVue")
    setMetaData([
      {
        name: "description",
        content: "Bienvenid@ a nuestra plataforma, estamos seguros que el material te va a ayudar mucho"
      }
    ])
  }
}
</script>
```

## Añadir SEO a views/Contact.vue
```vue
<script>
import { setPageTitle, setMetaData } from "@/seo"

export default {
  name: "Contact",
  setup() {
    setPageTitle("Contacto - CursoVue")
    setMetaData([
      {
        name: "description",
        content: "¿Tienes alguna duda? ¡Contacta con nosotros!"
      }
    ])
  }
}
</script>
```

## Añadir SEO a views/Blog.vue
```vue
<script>
import { setPageTitle, setMetaData } from "@/seo"

export default {
  name: "Blog",
  setup() {
    setPageTitle("Blog - CursoVue")
    setMetaData([
      {
        name: "description",
        content: "Blog donde escribimos tutoriales de Vue, Laravel y PHP"
      },
      {
        name: "keywords",
        content: "Tutoriales Vue, Laravel y PHP"
      }
    ])
  }
}
</script>
```

## Añadir SEO a views/Shop.vue
```vue
<script>
import {setMetaData, setPageTitle} from "@/seo"

export default {
  name: "Shop",
  setup() {
    setPageTitle("Tienda - CursoVue")
    setMetaData([
      {
        name: "description",
        content: "En la tienda tenemos cursos offline para que una vez los compres los puedas descargar para ver sin conexión"
      }
    ])
  }
}
</script>
```

## Añadir SEO a views/Memberships.vue
```vue
<script>
import {setMetaData, setPageTitle} from "@/seo"

export default {
  name: "Memberships",
  setup() {
    setPageTitle("Membresías - CursoVue")
    setMetaData([
      {
        name: "description",
        content: "Las membresías de la plataforma te ofrecen acceso completo a todos los cursos"
      }
    ])
  }
}
</script>
```

## Evitar 404 al actualizar en Netlify public/_redirects
```text
/*   /index.html   200
```

## Curl con Googlebot
```shell
curl --user-agent "Googlebot/2.1 (+http://www.google.com/bot.html)" -v $@ https://cursovue.es/memberships
```

## Curl con bingbot
```shell
curl --user-agent "bingbot/2.0 (+http://www.bing.com/bingbot.htm)" -v $@ https://cursovue.es/memberships
```