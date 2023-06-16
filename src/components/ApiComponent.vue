<template>
    <div>
        <h1>Exemplo de Consumo de API (EletroDomésticos)</h1>
        <ul>
            <li v-for="device in devices" :key="device.id">{{ device.name }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            devices: Object,
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/device')
        .then(response => {
            console.log(response.data.devices);
            this.devices = response.data.devices;
        })
        .catch(error => {
            console.error(error);
        });
    },
};
</script>