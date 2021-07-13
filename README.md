# nuxt-typescript-composition-api-20210713

## setup

```
% npx create-nuxt-app example

create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in example
? Project name: example
? Programming language: TypeScript
? Package manager: Npm
? UI framework: Buefy
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)ESLint, Prettier, Lint staged files, St
yleLint, Commitlint
? Testing framework: Jest
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: None
? Version control system: Git

> example@1.0.0 lint:js
> eslint --ext ".js,.vue" --ignore-path .gitignore . "--fix"


> example@1.0.0 lint:style
> stylelint "**/*.{vue,css}" --ignore-path .gitignore "--fix"


🎉  Successfully created project example

  To get started:

	cd example
	npm run dev

  To build & start for production:

	cd example
	npm run build
	npm run start

  To test:

	cd example
	npm run test


  For TypeScript users.

  See : https://typescript.nuxtjs.org/cookbook/components/
```

## composition-api

(In example directory.)

### Install

```
% npm i @nuxtjs/composition-api
```

### Diff

```diff
--- a/example/components/Card.vue
+++ b/example/components/Card.vue
@@ -26,8 +26,10 @@
   </div>
 </template>

-<script>
-export default {
+<script lang="ts">
+import { defineComponent } from '@vue/composition-api'
+
+export default defineComponent({
   props: {
     title: {
       type: String,
@@ -38,5 +40,5 @@ export default {
       required: true
     }
   }
-}
+})
 </script>
```

```diff
--- a/example/layouts/default.vue
+++ b/example/layouts/default.vue
@@ -52,23 +52,37 @@
   </div>
 </template>

-<script>
-export default {
-  data () {
+<script lang="ts">
+import { defineComponent } from '@vue/composition-api'
+
+type To = {
+  name: string
+}
+
+type Item = {
+  title: string
+  icon: string
+  to: To
+}
+
+export default defineComponent({
+  setup() {
+    const items: Item[] = [
+      {
+        title: 'Home',
+        icon: 'home',
+        to: { name: 'index' }
+      },
+      {
+        title: 'Inspire',
+        icon: 'lightbulb',
+        to: { name: 'inspire' }
+      }
+    ]
+
     return {
-      items: [
-        {
-          title: 'Home',
-          icon: 'home',
-          to: { name: 'index' }
-        },
-        {
-          title: 'Inspire',
-          icon: 'lightbulb',
-          to: { name: 'inspire' }
-        }
-      ]
+      items
     }
   }
-}
+})
 </script>
```

```diff
--- a/example/nuxt.config.js
+++ b/example/nuxt.config.js
@@ -36,6 +36,7 @@ export default {
     '@nuxt/typescript-build',
     // https://go.nuxtjs.dev/stylelint
     '@nuxtjs/stylelint-module',
+    '@nuxtjs/composition-api/module',
   ],

   // Modules: https://go.nuxtjs.dev/config-modules
```

```diff
--- a/example/pages/index.vue
+++ b/example/pages/index.vue
@@ -40,14 +40,15 @@
   </section>
 </template>

-<script>
+<script lang="ts">
+import { defineComponent } from '@vue/composition-api'
 import Card from '~/components/Card'

-export default {
+export default defineComponent({
   name: 'HomePage',

   components: {
     Card
   }
-}
+})
 </script>
```

## links

* https://nuxtjs.org/docs/2.x/get-started/installation
* https://composition-api.nuxtjs.org/getting-started/setup/
