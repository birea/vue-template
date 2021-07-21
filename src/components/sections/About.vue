<template>
    <div class="bg-primary text-white my-10 px-10 py-10 grid grid-cols-1 sm:grid-cols-12 gap-3 text-center sm:text-left">
        <div class="col-span-12 lg:p-10 lg:mt-10">
        <h1 class="font-bold text-4xl text-center my-1">{{ titulo }}</h1> 
        <p class="text-xl mb-12 mt-10 text-center ">
            {{ descripcion }}
        </p>
        </div>
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
            const seccion = await axios.get('/api/seccion',{ params: { id: 2 } });
            this.titulo = seccion.data.seccion[0].titulo;
            this.descripcion = seccion.data.seccion[0].descripcion;
        } catch (error) {
            
            console.log(error)
        }
    },
}

</script>