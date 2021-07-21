<template>
    <!-- navbar -->
    <nav class="flex items-center justify-between flex-wrap bg-primary p-4">
        <!--logo-->
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-serif text-2xl tracking-tight">{{ title }}</span>
        </div>
        <!--sm button-->
        <div class="block lg:hidden">
          <button @click="showMenu()" id='btnToggle' class="flex items-center px-3 py-2 border rounded text-light border-red-300 hover:text-white hover:border-white focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <!--Menu-->
        <div id="menu" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
          <div class="lg:flex-grow lg:ml-5">
            <router-link 
            v-for="(item, index) in options" :key="index" 
            :class="item.active ? activeClass : regularClass "
            :to="item.route"
            >
                {{ item.text }}
            </router-link>
          </div>
          <div class="flex justify-center">
                <router-link 
                class="inline-block text-sm mt-4 mx-1 px-5 py-2 leading-none border rounded text-white border-white 
                hover:border-transparent hover:text-primary hover:bg-white lg:mt-0 transition easy-in duration-500"
                to="/login"
                >
                Login
                </router-link>
                <router-link 
                class="inline-block text-sm mt-4 mx-1 px-5 py-2 leading-none border rounded text-white border-white 
                hover:border-transparent hover:text-primary hover:bg-white lg:mt-0 transition easy-in duration-500"
                to="/signup"
                >
                SignUp
                </router-link>
          </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Nav',
    props: ['active','name'],
    data() {
        return {
            title: '',
            regularClass: 'block mt-4 mx-4 pb-1 lg:inline-block lg:mt-0 text-light border-light transition easy-in-out duration-500 hover:text-white hover:border-b-2 hover:border-white',
            activeClass: 'block mt-4 mx-4 pb-1 lg:inline-block lg:mt-0 text-white border-b-2 border-light transition easy-in-out duration-500 hover:text-white hover:border-b-2 hover:border-white',
            options: [
                { text: 'Inicio', active: false, route: '/' },
            ]
        }
    },
    methods: {
        ...mapActions(['fetchAjustes']),
        showMenu() {
            const menu = document.querySelector('#menu');
            menu.classList.toggle('hidden')
        },
    },
    computed: {
        ...mapGetters(['ajustes'])
    },
    watch: {
        active(to, from) {
            this.options = this.options.map((op) => {
                if(op.text === this.active){
                    op.active = true
                }
                else{
                    op.active = false
                }
                return op
            });
        }
    },
    async created() {
        await this.fetchAjustes()
        this.title = this.ajustes.name
        try {
            const secciones = await axios.get('/api/secciones');
            secciones.data.secciones.forEach(seccion => {
                if(seccion.id !== 1 ) {
                    this.options.push({
                        text: seccion.titulo,
                        active: false,
                        route: `/informaciones/${seccion.id}`
                    })
                }
            });
        } catch (error) {
            console.log(error)
        }
        this.options = this.options.map((op) => {
            if(op.text === this.active){
                op.active = true
            }
            else {
                op.active = false
            }
            return op
        });
    },
}
</script>