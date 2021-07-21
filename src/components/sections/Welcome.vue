<template>
    <div class="container my-10 mx-auto px-10 grid grid-cols-1 sm:grid-cols-12 gap-3 text-center sm:text-left">
        <div class="col-span-12 md:col-span-6 lg:p-10 lg:mt-10">
        <h1 class="font-bold text-4xl text-gray-800 mb-1">{{ titulo }}</h1> 
        <p class="text-xl mb-12 mt-10">{{ descripcion }}</p>
        </div>
        <img class="lg:mt-10 rounded-lg border shadow-lg col-span-12 md:col-span-6" src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Welcome',
    data() {
        return {
            titulo: '',
            descripcion: ''
        }
    },
    async created() {
        try {
            const seccion = await axios.get('/api/seccion',{ params: { id: 1 } });
            this.titulo = seccion.data.seccion[0].titulo;
            this.descripcion = seccion.data.seccion[0].descripcion;
        } catch (error) {
            
            console.log(error)
        }
    },
}
</script>