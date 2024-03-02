import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import product from "product/App";
// import {__federation_method_setRemote, __federation_method_getRemote, __federation_method_unwrapDefault} from 'virtual:__federation__'

const app = createApp(App);

app.component("product-app", product);

// __federation_method_setRemote('product', { url:() => Promise.resolve('http://localhost:4040/assets/remoteEntry.js'), format: 'esm', from: 'vite' });
// const dynamicComponents = ['app'];
// const res = []
// for await(let value of dynamicComponents){
//     const moduleWraped = await __federation_method_getRemote('product', `./${value}`)
//     res.push({
//         name:`product-${value.toLowerCase()}`,
//         component:__federation_method_unwrapDefault(moduleWraped)
//     })
// }
// res.map(item=>app.component(item.name,item.component))

app.mount("#app");
