# basic_installation

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Package installed

### Tailwind CSS
For custom rules use *tailwind.config.js*

* For more detail visit [Tailwind CSS](https://tailwindcss.com/)

### AXIOS
#### Usage
In *nuxt.config.js* insert the base url like the example
```bash
axios: {
  baseURL: 'http://localhost'
}
```
* For more detail visit [Axios for Nuxt](https://axios.nuxtjs.org/)

### I18n
#### Languages entered
* English (*Default lang*)
* Italian
#### Usage
To enter a new language, insert in *nuxt.config.js* the parameters like the example
```bash
export default {
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en.js',
          dir: 'ltr'
        }
      ]
    }
  ]
}
```
For the name of the pages used for routing, insert the code as shown in the example inside *export default*, changing the path for each language configured
```bash
export default {
  nuxtI18n: {
    paths: {
      en: '/',
      it: '/'
    }
  }
}
```
* For more detail visit [I18n for Nuxt](https://i18n.nuxtjs.org/)

### DotEnv
Use this file for global variables
* For more detail visit [Dotenv for Nuxt](https://www.npmjs.com/package/@nuxtjs/dotenv)

### Sitemap
#### IMPORTANT
The sitemap declaration in *modules* of *nuxt.config.js* should always be left last for its correct functioning

As for the generation of dynamic routes see the file *modules/sitemapRouteGenerator.js*
#### Usage
For module configuration, enter the chosen parameters in the *nuxt.config.js* file as shown in the example
```bash
export default {
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://yoursite.com/',
    defaults: {
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date()
    },
    gzip: true,
    exclude: []
  }
}
```
* For more detail visit [Sitemap for Nuxt](https://sitemap.nuxtjs.org/)
___
## Custom CSS

For insert custom CSS rules use the file *./static/css/custom.css*
___


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
