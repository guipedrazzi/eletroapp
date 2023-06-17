<template>
    <div id="app">
        
        <nav>
            <div class="nav-wrapper blue darken-1">
                <a href="#" class="brand-logo center">EletroAPP</a>
            </div>
        </nav>
        
        <div class="container">
        <br>
            <div class="card" v-if="this.status">
                
                <!-- ERRORS -->
                <div class="container"><br>
                    <ul class="collection">
                        <li class="collection-item" v-for="(erro, index) of errors" :key="index">
                            <span>{{erro}}</span>
                        </li>
                    </ul>
                

                    <!-- Formulário UPDATE/SAVE -->
                    <form @submit.prevent="save">
                        
                        <label>Nome</label>
                        <input type="text" placeholder="Nome" v-model="device.name" >
                        
                        <label>Marca</label>
                        <select v-model="device.brand" >
                            <option value="">Selecione...</option>
                            <option value="Electrolux">Electrolux</option>
                            <option value="Brastemp">Brastemp</option>
                            <option value="Fischer">Fischer</option>
                            <option value="Samsung">Samsung</option>
                            <option value="LG">LG</option>
                        </select><br>
                        
                        <label>Descrição</label>
                        <textarea class="materialize-textarea" cols="30" rows="10" v-model="device.description"></textarea>
                        <br>
                        
                        <label>Voltagem</label>
                        <p>
                            <label>
                                <input class="with-gap" name="group3" type="radio" value="110"  v-model="device.voltage" />
                                <span>110v</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input class="with-gap" name="group3" type="radio" value="220" v-model="device.voltage" />
                                <span>220v</span>
                            </label>
                        </p>
                        
                        <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
                        
                    </form>
                </div> 
                
                <!-- Tabela com os registros -->
                <table class="container striped">
                    
                    <thead>
                        
                        <tr>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Descrição</th>
                            <th>Voltagem</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        
                    </thead>
                    
                    <tbody>
                        
                        <tr v-for="device of devices" :key="device.id">
                            
                            <td>{{ device.name }}</td>
                            <td>{{ device.brand }}</td>
                            <td>{{ device.description }}</td>
                            <td>{{ device.voltage }}v</td>
                            <td>
                                <button @click="update(device)" class="waves-effect btn-small blue darken-1 btn-floating"><i class="material-icons">create</i></button>
                            </td>
                            <td>
                                <button @click="del(device)" class="waves-effect btn-small red darken-1 btn-floating"><i class="material-icons">delete_forever</i></button>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                    
                </table>
            </div>
            
            <div v-else>
                <div class="row">
                    <div class="col s12">
                        <div class="card red darken-1">
                            <div class="card-content white-text">
                                <span class="card-title center">EletroAPI OFFLINE</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    
</template>

<script>
import M from 'materialize-css'
import Device from './services/devices'

export default {
    name: 'app',
    data () {
        return {
            device:{
                id: '',
                name: '',
                brand: '',
                description: '',
                voltage: ''
            },
            devices: [],
            errors: [],
            status: true,
        }
    },
    
    mounted(){
        // M.AutoInit for materielizecss
        M.AutoInit(),
        this.read()
    },
    
    methods:{
        
        read(){
            Device.read().then(response => {
                this.devices = response.data.devices
                this.status = true;
            }).catch(e => {
                console.log(e)
                this.status = false;
            }),
            M.AutoInit()
        },
        
        save(){
            if(!this.device.id){
                Device.save(this.device).then(response => {
                    this.device = {},
                    this.errors = {},
                    this.read();
                    console.log(response);
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                
            }else{
                
                Device.update(this.device).then(response => {
                    this.device = {}
                    this.errors = {}
                    console.log(response);
                    alert('Atualizado com sucesso!')
                    this.read()
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                
            }
        },
        
        update(device){
            this.device = device
        },
        
        del(device){
            
            if(confirm('Deseja excluir o eletrodoméstico?')){
                
                Device.delete(device).then(response => {
                    this.read()
                    console.log(response);
                    this.errors = {}
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                
            }
            
        }
    }
    
}
</script>

<style>

body{
    background-color: rgba(88, 88, 88, 0.644);
}

</style>